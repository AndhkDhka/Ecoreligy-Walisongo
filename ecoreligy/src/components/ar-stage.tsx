import * as React from 'react'
import type * as Three from 'three'
import { Maximize } from 'lucide-react'

type StageMode = 'camera' | 'preview'
type StageStatus = 'idle' | 'starting' | 'camera' | 'searching' | 'found' | 'lost' | 'unavailable' | 'error'

const messages: Record<StageStatus, [string, string]> = {
  idle: ['Ready when you are', 'Siap saat kamu mulai'],
  starting: ['Requesting camera access…', 'Meminta akses kamera…'],
  camera: ['Camera active', 'Kamera aktif'],
  searching: ['Looking for the Sunan Giri image target', 'Mencari target gambar Sunan Giri'],
  found: ['Image target found · AR interpretation shown', 'Target gambar ditemukan · interpretasi AR ditampilkan'],
  lost: ['Target not found. Point the camera at the printed image or a second screen.', 'Target belum ditemukan. Arahkan kamera ke gambar cetak atau layar kedua.'],
  unavailable: ['Camera or WebGL is unavailable. Use the 3D preview instead.', 'Kamera atau WebGL tidak tersedia. Gunakan pratinjau 3D.'],
  error: ['The camera could not start. Check browser permission and try again.', 'Kamera tidak dapat dimulai. Periksa izin browser lalu coba lagi.'],
}

function addInterpretiveObject(THREE: typeof Three, parent: Three.Scene | Three.Group) {
  const group = new THREE.Group()
  const gold = new THREE.MeshStandardMaterial({ color: 0xc4a36a, metalness: 0.62, roughness: 0.32 })
  const ivory = new THREE.MeshStandardMaterial({ color: 0xe9e3d7, metalness: 0.08, roughness: 0.68 })
  const green = new THREE.MeshStandardMaterial({ color: 0x34463a, metalness: 0.3, roughness: 0.48 })
  const plinth = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.4, 0.08, 8), gold)
  plinth.position.y = -0.27
  group.add(plinth)
  const form = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 1), green)
  form.position.y = 0.03
  group.add(form)
  const orbit = new THREE.Mesh(new THREE.TorusGeometry(0.37, 0.022, 8, 64), gold)
  orbit.rotation.x = Math.PI / 2.9
  orbit.position.y = 0.02
  group.add(orbit)
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.075, 1), ivory)
  core.position.y = 0.04
  group.add(core)
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.012, 8, 48), ivory)
  ring.position.y = 0.31
  group.add(ring)
  parent.add(group)
  return group
}

function fitRenderer(renderer: Three.WebGLRenderer, container: HTMLElement) {
  const resize = () => {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(container.clientWidth, container.clientHeight, false)
  }
  resize()
  const observer = new ResizeObserver(resize)
  observer.observe(container)
  return () => observer.disconnect()
}

export function ARStage({ onTargetFound, onTargetLost, language }: { onTargetFound: () => void; onTargetLost: () => void; language: 'id' | 'en' }) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const groupRef = React.useRef<Three.Group | null>(null)
  const [status, setStatus] = React.useState<StageStatus>('idle')
  const [mode, setMode] = React.useState<StageMode | null>(null)
  const [scale, setScale] = React.useState(1)
  const [rotation, setRotation] = React.useState(0)
  const [dragging, setDragging] = React.useState(false)
  const scaleRef = React.useRef(scale)
  const rotationRef = React.useRef(rotation)
  scaleRef.current = scale
  rotationRef.current = rotation

  const stop = React.useCallback(() => {
    setMode(null)
    setStatus('idle')
    setScale(1)
    setRotation(0)
    onTargetLost()
  }, [onTargetLost])

  React.useEffect(() => {
    const container = containerRef.current
    if (!container || !mode) return
    const lifecycle = { cancelled: false }
    const isCancelled = () => lifecycle.cancelled
    let disposeResize = () => {}
    let mindar: { stop: () => void; renderer: Three.WebGLRenderer; cssRenderer: { domElement: HTMLElement }; video?: HTMLVideoElement } | null = null
    let renderer: Three.WebGLRenderer | null = null
    let searchingTimer = 0
    let cameraStatusTimer = 0
    const cleanupListeners: Array<() => void> = []

    const setup = async () => {
      try {
        const [THREE] = await Promise.all([import('three')])
        if (lifecycle.cancelled) return
        if (!container.clientWidth || !container.clientHeight) throw new Error('The AR viewport has no visible size.')
        if (mode === 'camera') {
          if (!window.isSecureContext || typeof navigator.mediaDevices.getUserMedia !== 'function') {
            setStatus('unavailable')
            return
          }
          setStatus('starting')
          const { MindARThree } = await import('mind-ar/dist/mindar-image-three.prod.js')
          if (isCancelled()) return
          const experience = new MindARThree({ container, imageTargetSrc: '/assets/ar/sunan-giri.mind', uiLoading: 'no', uiScanning: 'no', uiError: 'no' })
          mindar = experience
          renderer = experience.renderer
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
          renderer.domElement.classList.add('ar-renderer-canvas')
          experience.scene.add(new THREE.HemisphereLight(0xfff2d2, 0x34463a, 2.2))
          const keyLight = new THREE.DirectionalLight(0xffffff, 3)
          keyLight.position.set(-2, 3, 4)
          experience.scene.add(keyLight)
          const anchor = experience.addAnchor(0)
          const targetEvents = anchor.group as unknown as { addEventListener: (type: string, listener: () => void) => void; removeEventListener: (type: string, listener: () => void) => void }
          const sculpture = addInterpretiveObject(THREE, anchor.group)
          groupRef.current = sculpture
          const found = () => { window.clearTimeout(searchingTimer); setStatus('found'); onTargetFound() }
          const lost = () => { onTargetLost(); setStatus('lost'); searchingTimer = window.setTimeout(() => setStatus('searching'), 4500) }
          targetEvents.addEventListener('targetFound', found)
          targetEvents.addEventListener('targetLost', lost)
          cleanupListeners.push(() => targetEvents.removeEventListener('targetFound', found), () => targetEvents.removeEventListener('targetLost', lost))
          await experience.start()
          if (isCancelled()) { experience.stop(); return }
          disposeResize = fitRenderer(renderer, container)
          renderer.setAnimationLoop(() => {
            if (groupRef.current) { groupRef.current.scale.setScalar(scaleRef.current); groupRef.current.rotation.y = rotationRef.current }
            renderer?.render(experience.scene, experience.camera)
          })
          setStatus('camera')
          cameraStatusTimer = window.setTimeout(() => setStatus((current) => current === 'camera' ? 'searching' : current), 900)
          searchingTimer = window.setTimeout(() => setStatus((current) => current === 'searching' ? 'lost' : current), 10000)
          return
        }

        if (!('WebGLRenderingContext' in window)) { setStatus('unavailable'); return }
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x17231f)
        const camera = new THREE.PerspectiveCamera(38, container.clientWidth / container.clientHeight, 0.1, 100)
        camera.position.set(0, 0.15, 2.6)
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
        renderer.domElement.classList.add('ar-renderer-canvas')
        container.appendChild(renderer.domElement)
        scene.add(new THREE.HemisphereLight(0xfff2d2, 0x34463a, 2.2))
        const keyLight = new THREE.DirectionalLight(0xffffff, 3)
        keyLight.position.set(-2, 3, 4)
        scene.add(keyLight)
        const sculpture = addInterpretiveObject(THREE, scene)
        groupRef.current = sculpture
        disposeResize = fitRenderer(renderer, container)
        renderer.setAnimationLoop(() => {
          if (groupRef.current) { groupRef.current.scale.setScalar(scaleRef.current); groupRef.current.rotation.y = rotationRef.current }
          renderer?.render(scene, camera)
        })
        setStatus('camera')
      } catch (error) {
        console.error('AR stage could not start', error)
        if (!lifecycle.cancelled) setStatus(mode === 'camera' && !window.isSecureContext ? 'unavailable' : 'error')
      }
    }

    void setup()
    return () => {
      lifecycle.cancelled = true
      window.clearTimeout(searchingTimer)
      window.clearTimeout(cameraStatusTimer)
      disposeResize()
      cleanupListeners.forEach((cleanup) => cleanup())
      if (mindar?.video?.srcObject instanceof MediaStream) {
        try { mindar.stop() } catch { for (const track of mindar.video.srcObject.getTracks()) track.stop() }
      }
      renderer?.setAnimationLoop(null)
      renderer?.dispose()
      renderer?.domElement.remove()
      mindar?.cssRenderer.domElement.remove()
      container.querySelectorAll('video').forEach((video) => video.remove())
      groupRef.current = null
    }
  }, [mode, onTargetFound, onTargetLost])

  const begin = (nextMode: StageMode) => {
    setStatus(nextMode === 'camera' ? 'starting' : 'camera')
    setMode(nextMode)
  }
  const fullscreen = async () => {
    try { await containerRef.current?.requestFullscreen() } catch { setStatus('error') }
  }
  const changeScale = (delta: number) => setScale((value) => Math.min(1.7, Math.max(0.55, value + delta)))
  const pointerDown = (event: React.PointerEvent<HTMLDivElement>) => { if (mode !== 'preview') return; setDragging(true); event.currentTarget.setPointerCapture(event.pointerId) }
  const pointerMove = (event: React.PointerEvent<HTMLDivElement>) => { if (dragging && mode === 'preview') setRotation((value) => value + event.movementX * 0.012) }
  const t = (en: string, id: string) => language === 'id' ? id : en

  return <div className="ar-stage-card">
    <div className="ar-stage-toolbar"><div><p className="ar-stage-eyebrow">{mode === 'camera' ? 'MINDAR · IMAGE TRACKING' : mode === 'preview' ? 'THREE.JS · 3D PREVIEW' : 'HERITAGE VIEWER'}</p><p className="ar-stage-status" role="status" aria-live="polite"><span className={`ar-status-dot ar-status-${status}`} />{messages[status][language === 'id' ? 1 : 0]}</p></div>{mode && <button type="button" className="ar-icon-button" onClick={fullscreen} aria-label={t('Open fullscreen', 'Buka tampilan layar penuh')}><Maximize className="size-4" /></button>}</div>
    <div ref={containerRef} className={`ar-stage-viewport ${mode ? 'is-running' : ''}`} onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={() => setDragging(false)} onPointerCancel={() => setDragging(false)}>
      {!mode && <div className="ar-stage-start"><img src="/assets/Document/Makam Sunan Giri.png" alt={t('Sunan Giri site image used as the AR image target', 'Foto situs Sunan Giri yang digunakan sebagai target gambar AR')} /><div className="ar-stage-start-copy"><span className="ar-stage-eyebrow">PILOT · GRESIK, JAWA TIMUR</span><h3 className="font-display">Giri Kedaton</h3><p>{t('Use the camera to find the image target, or open an interpretive object in the 3D viewer.', 'Gunakan kamera untuk mencari gambar target, atau buka objek interpretatif di viewer 3D.')}</p><div className="ar-stage-actions"><button type="button" className="ar-primary-button" onClick={() => begin('camera')}>{t('Start AR experience', 'Mulai pengalaman AR')}</button><button type="button" className="ar-secondary-button" onClick={() => begin('preview')}>{t('Open 3D preview', 'Lihat pratinjau 3D')}</button></div></div></div>}
      {mode && ['unavailable', 'error'].includes(status) && <div className="ar-static-fallback"><img src="/assets/Document/Makam Sunan Giri.png" alt="" /><span>{t('Static destination image fallback', 'Tampilan gambar destinasi')}</span></div>}
      {mode && <div className="ar-scene-label" aria-hidden="true"><span>Interpretasi digital</span><small>Bukan rekonstruksi historis</small></div>}
      {mode === 'camera' && <div className="ar-target-guide" aria-hidden="true"><span /></div>}
    </div>
    {mode && <div className="ar-controls">{mode === 'camera' && ['unavailable', 'error'].includes(status) && <button type="button" className="ar-secondary-button" onClick={() => setMode('preview')}>{t('Open 3D preview', 'Buka pratinjau 3D')}</button>}<button type="button" className="ar-secondary-button" onClick={() => changeScale(-0.1)} aria-label={t('Scale down object', 'Perkecil objek')}>−</button><button type="button" className="ar-secondary-button" onClick={() => changeScale(0.1)} aria-label={t('Scale up object', 'Perbesar objek')}>+</button><button type="button" className="ar-secondary-button" onClick={() => setRotation((value) => value + 0.45)}>{t('Rotate object', 'Putar objek')}</button>{mode === 'camera' && status === 'found' && <button type="button" className="ar-secondary-button" onClick={() => { setStatus('searching'); onTargetLost() }}>{t('Reset target', 'Reset target')}</button>}<button type="button" className="ar-stop-button" onClick={stop}>{mode === 'camera' ? t('Stop camera', 'Hentikan kamera') : t('Close preview', 'Tutup pratinjau')}</button></div>}
  </div>
}
