import * as React from 'react'
import { Maximize } from 'lucide-react'
import type { MindARThree } from 'mind-ar/dist/mindar-image-three.prod.js'
import { AR_LEGACY_TARGET_BY_INDEX } from '@/data/ar-walisongo'

type StageStatus = 'idle' | 'starting' | 'camera' | 'searching' | 'found' | 'lost' | 'unavailable' | 'error'

const messages: Record<StageStatus, [string, string]> = {
  idle: ['Ready when you are', 'Siap saat kamu mulai'],
  starting: ['Requesting camera access…', 'Meminta akses kamera…'],
  camera: ['Camera active', 'Kamera aktif'],
  searching: ['Looking for the registered Sunan Giri site image', 'Mencari gambar situs Sunan Giri yang terdaftar'],
  found: ['Sunan Giri target identified', 'Target Sunan Giri berhasil dikenali'],
  lost: ['Target not visible. Point the camera at the image again.', 'Gambar target tidak terlihat. Arahkan kamera kembali ke gambar.'],
  unavailable: ['Camera is unavailable. Check permission or explore the profiles below.', 'Kamera tidak dapat diakses. Periksa izin atau jelajahi profil di bawah.'],
  error: ['The camera could not start. Check browser permission or explore the profiles below.', 'Kamera tidak dapat dimulai. Periksa izin browser atau jelajahi profil di bawah.'],
}

export function ARStage({ onTargetFound, onTargetLost, language, overlay }: { onTargetFound: (destinationId: string) => void; onTargetLost: () => void; language: 'id' | 'en'; overlay?: React.ReactNode }) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [status, setStatus] = React.useState<StageStatus>('idle')
  const [running, setRunning] = React.useState(false)
  const [helpOpen, setHelpOpen] = React.useState(false)
  const t = (en: string, id: string) => language === 'id' ? id : en

  const stop = React.useCallback(() => {
    setRunning(false)
    setStatus('idle')
    onTargetLost()
  }, [onTargetLost])

  React.useEffect(() => {
    const container = containerRef.current
    if (!container || !running) return
    const lifecycle = { cancelled: false }
    let experience: MindARThree | null = null
    let searchingTimer = 0
    let cameraStatusTimer = 0
    const cleanups: Array<() => void> = []

    const start = async () => {
      try {
        if (!window.isSecureContext || typeof navigator.mediaDevices.getUserMedia !== 'function') {
          setStatus('unavailable')
          return
        }
        setStatus('starting')
        const { MindARThree } = await import('mind-ar/dist/mindar-image-three.prod.js')
        if (lifecycle.cancelled) return
        const tracker = new MindARThree({ container, imageTargetSrc: '/assets/ar/sunan-giri.mind', uiLoading: 'no', uiScanning: 'no', uiError: 'no' })
        experience = tracker
        const anchor = tracker.addAnchor(0)
        const found = () => { window.clearTimeout(searchingTimer); setStatus('found'); onTargetFound(AR_LEGACY_TARGET_BY_INDEX[0]) }
        const lost = () => { setStatus('lost'); onTargetLost(); searchingTimer = window.setTimeout(() => setStatus((current) => current === 'lost' ? 'searching' : current), 4500) }
        anchor.group.addEventListener('targetFound', found)
        anchor.group.addEventListener('targetLost', lost)
        cleanups.push(() => anchor.group.removeEventListener('targetFound', found), () => anchor.group.removeEventListener('targetLost', lost))
        tracker.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
        await tracker.start()
        if (!container.isConnected) { tracker.stop(); tracker.renderer.dispose(); return }
        tracker.renderer.setAnimationLoop(() => tracker.renderer.render(tracker.scene, tracker.camera))
        setStatus('camera')
        cameraStatusTimer = window.setTimeout(() => setStatus((current) => current === 'camera' ? 'searching' : current), 900)
        searchingTimer = window.setTimeout(() => setStatus((current) => current === 'searching' ? 'lost' : current), 10000)
      } catch (error) {
        console.error('AR scanner could not start', error)
        if (!lifecycle.cancelled) setStatus(window.isSecureContext ? 'error' : 'unavailable')
      }
    }

    void start()
    return () => {
      lifecycle.cancelled = true
      window.clearTimeout(searchingTimer)
      window.clearTimeout(cameraStatusTimer)
      cleanups.forEach((cleanup) => cleanup())
      if (experience) {
        experience.renderer.setAnimationLoop(null)
        try { experience.stop() } catch { /* MindAR can already be stopped during a cancelled start. */ }
        experience.renderer.dispose()
        experience.renderer.domElement.remove()
        experience.cssRenderer.domElement.remove()
      }
      container.querySelectorAll('video').forEach((video) => {
        if (video.srcObject instanceof MediaStream) video.srcObject.getTracks().forEach((track) => track.stop())
        video.remove()
      })
    }
  }, [running, onTargetFound, onTargetLost])

  const fullscreen = async () => {
    try { await containerRef.current?.requestFullscreen() } catch { setStatus('error') }
  }
  const tStatus = messages[status][language === 'id' ? 1 : 0]

  return <div className="ar-stage-card">
    <div className="ar-stage-toolbar">
      <div><p className="ar-stage-eyebrow">MINDAR · IMAGE TRACKING</p><p className="ar-stage-status" role="status" aria-live="polite"><span className={`ar-status-dot ar-status-${status}`} />{tStatus}</p></div>
      {running && <button type="button" className="ar-icon-button" onClick={fullscreen} aria-label={t('Open fullscreen', 'Buka tampilan layar penuh')}><Maximize className="size-4" /></button>}
    </div>
    <div ref={containerRef} className={`ar-stage-viewport ${running ? 'is-running' : ''}`}>
      {!running && <div className="ar-stage-start"><img src="/assets/Document/Makam Sunan Giri.png" alt={t('Sunan Giri heritage site image; this is the current registered scan target, not a portrait', 'Gambar situs warisan Sunan Giri; ini target pemindaian terdaftar saat ini, bukan potret')} /><div className="ar-stage-start-copy"><span className="ar-stage-eyebrow">PILOT · GRESIK, JAWA TIMUR</span><h3 className="font-display">Sunan Giri</h3><p>{t('Scan the existing Giri Kedaton site image. Portrait scan targets for the other eight figures are not available yet.', 'Pindai gambar situs Giri Kedaton yang sudah tersedia. Target scan potret untuk delapan tokoh lainnya belum tersedia.')}</p><div className="ar-stage-actions"><button type="button" className="ar-primary-button" onClick={() => { setStatus('starting'); setRunning(true) }}>{t('Start camera scan', 'Mulai pemindaian kamera')}</button><button type="button" className="ar-secondary-button" aria-expanded={helpOpen} onClick={() => setHelpOpen((value) => !value)}>{t('Scan help', 'Bantuan scan')}</button></div>{helpOpen && <p className="mt-3 text-sm leading-6 text-white/80">{t('Allow camera access, then point it at the image shown here on a second screen or on a print. Camera access needs HTTPS or localhost.', 'Izinkan akses kamera, lalu arahkan ke gambar ini dari layar kedua atau hasil cetak. Kamera memerlukan HTTPS atau localhost.')}</p>}</div></div>}
      {running && ['unavailable', 'error'].includes(status) && <div className="ar-static-fallback"><img src="/assets/Document/Makam Sunan Giri.png" alt="" /><span>{t('Camera unavailable · use profile exploration below', 'Kamera tidak tersedia · jelajahi profil di bawah')}</span></div>}
      {running && <><div className="ar-scan-guidance"><span className="ar-scan-live"><i />{status === 'found' ? t('Heritage identified', 'Warisan dikenali') : t('Camera active · searching', 'Kamera aktif · mencari')}</span><span>{t('Point at the registered Sunan Giri image', 'Arahkan ke gambar Sunan Giri yang terdaftar')}</span></div><div className="ar-target-guide" aria-hidden="true"><span /></div></>}
      {running && overlay && <div className="ar-camera-overlay">{overlay}</div>}
    </div>
    {running && <div className="ar-controls"><p className="text-sm text-muted-foreground">{status === 'found' ? t('Target identified. The profile panel is open in the camera view.', 'Target dikenali. Panel profil terbuka pada tampilan kamera.') : t('No target detected yet. Keep the image in frame.', 'Belum ada target terdeteksi. Jaga gambar tetap di dalam bingkai.')}</p><button type="button" className="ar-stop-button" onClick={stop}>{t('Stop camera', 'Hentikan kamera')}</button></div>}
  </div>
}
