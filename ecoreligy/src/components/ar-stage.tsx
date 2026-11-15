import * as React from 'react'
import { Camera, CameraOff, LoaderCircle, ScanLine } from 'lucide-react'
import { MindARThree } from 'mind-ar/dist/mindar-image-three.prod.js'
import { AR_TARGET_BUNDLE, WALI_SONGO_TARGETS } from '@/data/ar-walisongo'

type Status = 'idle' | 'initializing' | 'loading-targets' | 'requesting-camera' | 'camera-ready' | 'searching' | 'found' | 'lost' | 'denied' | 'unavailable' | 'target-error' | 'error'

const messages: Record<Status, { en: string; id: string }> = {
  idle: { en: 'Scan any of the nine Wali Songo portrait illustrations.', id: 'Pindai salah satu dari sembilan ilustrasi potret Wali Songo.' },
  initializing: { en: 'Initializing AR…', id: 'Menyiapkan AR…' },
  'loading-targets': { en: 'Loading nine image targets…', id: 'Memuat sembilan target gambar…' },
  'requesting-camera': { en: 'Requesting camera access…', id: 'Meminta akses kamera…' },
  'camera-ready': { en: 'Camera ready. Look for a portrait.', id: 'Kamera siap. Arahkan ke potret.' },
  searching: { en: 'Ready to scan. Hold a portrait steady in view.', id: 'Siap memindai. Tahan potret agar terlihat jelas.' },
  found: { en: 'Portrait identified.', id: 'Potret dikenali.' },
  lost: { en: 'Target lost. Point at a portrait to scan again.', id: 'Target hilang. Arahkan kembali ke potret.' },
  denied: { en: 'Camera permission was denied. Allow camera access in browser settings.', id: 'Izin kamera ditolak. Izinkan akses kamera di pengaturan browser.' },
  unavailable: { en: 'No usable camera was found. Check that a camera is connected and not in use.', id: 'Kamera tidak tersedia. Periksa sambungan kamera dan pastikan tidak sedang digunakan.' },
  'target-error': { en: 'The portrait target file could not be loaded. Please refresh and try again.', id: 'Berkas target potret gagal dimuat. Muat ulang halaman dan coba lagi.' },
  error: { en: 'AR could not start. Use HTTPS or localhost and a supported browser.', id: 'AR gagal dimulai. Gunakan HTTPS atau localhost dan browser yang didukung.' },
}

export function ARStage({ language, onTargetFound, onTargetLost, overlay }: {
  language: 'id' | 'en'
  onTargetFound: (destinationId: string) => void
  onTargetLost: (destinationId?: string) => void
  overlay?: React.ReactNode
}) {
  const [running, setRunning] = React.useState(false)
  const [status, setStatus] = React.useState<Status>('idle')
  const [errorMessage, setErrorMessage] = React.useState('')
  const [foundId, setFoundId] = React.useState<string | null>(null)
  const [cameraState, setCameraState] = React.useState('off')
  const containerRef = React.useRef<HTMLDivElement>(null)
  const callbackRef = React.useRef({ onTargetFound, onTargetLost })
  React.useEffect(() => { callbackRef.current = { onTargetFound, onTargetLost } }, [onTargetFound, onTargetLost])

  React.useEffect(() => {
    if (!running || !containerRef.current) return
    const lifecycle = { cancelled: false }
    const isCancelled = () => Boolean(lifecycle.cancelled)
    let mindar: any
    const activeTargets = new Set<string>()
    const stop = () => {
      try { mindar?.stop() } catch { /* cleanup after partial initialization */ }
      const videos = containerRef.current?.querySelectorAll('video') ?? []
      videos.forEach((video) => video.srcObject instanceof MediaStream && video.srcObject.getTracks().forEach((track) => track.stop()))
      if (containerRef.current) containerRef.current.replaceChildren()
      setCameraState('off')
    }
    const start = async () => {
      try {
        setStatus('initializing')
        if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') throw new Error('UNSUPPORTED_CAMERA')
        setStatus('loading-targets')
        const response = await fetch(AR_TARGET_BUNDLE, { method: 'HEAD', cache: 'no-store' })
        if (!response.ok) throw new Error('TARGET_BUNDLE')
        if (isCancelled()) return
        setStatus('requesting-camera')
        mindar = new MindARThree({ container: containerRef.current!, imageTargetSrc: AR_TARGET_BUNDLE, uiLoading: 'no', uiScanning: 'no', uiError: 'no' })
        WALI_SONGO_TARGETS.forEach((target) => {
          const anchor = mindar.addAnchor(target.compiledIndex)
          anchor.onTargetFound = () => {
            activeTargets.add(target.destinationId)
            setFoundId(target.destinationId)
            setStatus('found')
            callbackRef.current.onTargetFound(target.destinationId)
          }
          anchor.onTargetLost = () => {
            activeTargets.delete(target.destinationId)
            if (activeTargets.size) {
              const nextId = [...activeTargets][0]
              setFoundId(nextId)
              callbackRef.current.onTargetFound(nextId)
            } else {
              setFoundId(null)
              setStatus('lost')
              callbackRef.current.onTargetLost(target.destinationId)
            }
          }
        })
        await mindar.start()
        if (isCancelled()) { stop(); return }
        const renderer = mindar.renderer
        const scene = mindar.scene
        const camera = mindar.camera
        renderer.setAnimationLoop(() => renderer.render(scene, camera))
        const video = containerRef.current?.querySelector('video')
        if (video) { video.setAttribute('playsinline', ''); video.muted = true }
        setCameraState('on')
        setStatus('searching')
      } catch (error) {
        if (isCancelled()) return
        const err = error as Error & { name?: string }
        setErrorMessage(err.message || String(error))
        if (err.message === 'TARGET_BUNDLE') setStatus('target-error')
        else if (['NotAllowedError', 'SecurityError'].includes(err.name)) setStatus('denied')
        else if (['NotFoundError', 'NotReadableError', 'OverconstrainedError'].includes(err.name)) setStatus('unavailable')
        else setStatus('error')
        stop()
      }
    }
    void start()
    return () => { lifecycle.cancelled = true; stop(); callbackRef.current.onTargetLost() }
  }, [running])

  const toggle = () => { if (running) { setRunning(false); setFoundId(null); setStatus('idle'); onTargetLost() } else setRunning(true) }
  const currentTarget = WALI_SONGO_TARGETS.find((target) => target.destinationId === foundId)
  return <div className="ar-stage">
    <div className={`ar-stage-viewport ${running ? 'is-running' : ''}`}>
      <div ref={containerRef} className="ar-camera-container" aria-label={language === 'id' ? 'Tampilan kamera AR' : 'AR camera view'} />
      {!running && <div className="ar-stage-placeholder"><ScanLine aria-hidden="true" /><p>{language === 'id' ? 'Sembilan ilustrasi potret siap dipindai' : 'Nine portrait illustrations ready to scan'}</p><img src={WALI_SONGO_TARGETS[0]?.portraitAsset} alt={language === 'id' ? 'Contoh ilustrasi pemicu scan' : 'Example scan target illustration'} /></div>}
      {running && <div className="ar-scan-guidance" aria-live="polite"><span className="ar-scan-live"><i />{messages[status][language]}</span><span className="ar-target-guide"><span /></span>{import.meta.env.DEV && <details><summary>AR debug</summary><p>Status: {status}</p><p>Camera: {cameraState}</p><p>Target index: {currentTarget?.compiledIndex ?? '—'}</p><p>Profile: {foundId ?? '—'}</p><p>Bundle: {AR_TARGET_BUNDLE}</p>{errorMessage && <p>Error: {errorMessage}</p>}</details>}</div>}
      {running && overlay && <div className="ar-camera-overlay">{overlay}</div>}
    </div>
    <div className="ar-controls"><p className="text-sm text-muted-foreground">{messages[status][language]}</p><button type="button" className={running ? 'ar-stop-button' : 'ar-primary-button'} onClick={toggle}>{running ? <><CameraOff aria-hidden="true" />{language === 'id' ? 'Hentikan kamera' : 'Stop camera'}</> : status === 'initializing' || status === 'loading-targets' ? <><LoaderCircle className="animate-spin" />{language === 'id' ? 'Memuat…' : 'Loading…'}</> : <><Camera aria-hidden="true" />{language === 'id' ? 'Mulai pemindai' : 'Start scanner'}</>}</button></div>
  </div>
}
