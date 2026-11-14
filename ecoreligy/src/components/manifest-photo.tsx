import * as React from 'react'
import { useApp } from '@/lib/app-context'

type ManifestAsset = { path: string; alt: { id: string; en: string }; caption: { id: string; en: string }; objectPosition?: string; credit?: string }
let manifestRequest: Promise<ManifestAsset[]> | undefined

function loadAssets() {
  manifestRequest ??= fetch('/assets/MANIFEST.json').then(async (response) => {
    if (!response.ok) throw new Error('Asset manifest unavailable')
    const data = await response.json() as { assets?: ManifestAsset[] }
    return Array.isArray(data.assets) ? data.assets : []
  }).catch(() => [])
  return manifestRequest
}

export function ManifestPhoto({ path, className = '', illustration = false }: { path?: string | null; className?: string; illustration?: boolean }) {
  const { language } = useApp()
  const [asset, setAsset] = React.useState<ManifestAsset | null>(null)
  const [failed, setFailed] = React.useState(false)
  React.useEffect(() => {
    let active = true
    setAsset(null)
    setFailed(false)
    if (path) void loadAssets().then((assets) => {
      if (active) setAsset(assets.find((item) => item.path === path || item.path.endsWith(path.replace(/^\//, ''))) || null)
    })
    return () => { active = false }
  }, [path])
  const t = (en: string, id: string) => language === 'id' ? id : en
  const src = asset?.path || (path?.startsWith('/') ? path : path ? `/${path}` : null)
  if (!src || !asset || failed) return <div className={`heritage-placeholder flex items-end p-5 ${className}`} role="img" aria-label={t('Photo to be added', 'Foto sedang dilengkapi')}><span className="relative text-[10px] font-semibold uppercase tracking-[.16em] text-[#F5F0E6]">{t('Photo to be added', 'Foto sedang dilengkapi')}</span></div>
  return <figure className={`relative overflow-hidden ${className}`}><img src={src} alt={asset.alt[language] || asset.alt.id} loading="lazy" style={{ objectPosition: asset.objectPosition || 'center' }} className="editorial-image size-full object-cover" onError={() => setFailed(true)} /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8 text-[10px] leading-4 text-white">{illustration ? t('Illustration · ', 'Ilustrasi · ') : ''}{asset.caption[language] || asset.caption.id}</figcaption></figure>
}
