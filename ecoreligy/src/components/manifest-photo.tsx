import * as React from 'react'
import { useApp } from '@/lib/app-context'

type ManifestAsset = { path: string; alt: { id: string; en: string }; caption: { id: string; en: string }; objectPosition?: string; credit?: string; sourceUrl?: string; license?: string }
let manifestRequest: Promise<ManifestAsset[]> | undefined

function loadAssets() {
  manifestRequest ??= fetch('/assets/MANIFEST.json').then(async (response) => {
    if (!response.ok) throw new Error('Asset manifest unavailable')
    const data = await response.json() as { assets?: ManifestAsset[] }
    return Array.isArray(data.assets) ? data.assets : []
  }).catch(() => [])
  return manifestRequest
}

export function ManifestPhoto({ path, className = '', illustration = false, showCredit = true }: { path?: string | null; className?: string; illustration?: boolean; showCredit?: boolean }) {
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
  if (!src || !asset || failed) return <div className={`heritage-placeholder flex items-end p-5 ${className}`} role="img" aria-label={t('Photo documentation is being completed', 'Dokumentasi foto sedang dilengkapi')}><span className="relative text-[10px] font-semibold uppercase tracking-[.16em] text-[#F5F0E6]">{t('Photo documentation is being completed', 'Dokumentasi foto sedang dilengkapi')}</span></div>
  const licenseUrl = asset.license === 'CC0' ? 'https://creativecommons.org/publicdomain/zero/1.0/' : asset.license?.startsWith('CC BY-SA') ? `https://creativecommons.org/licenses/by-sa/${asset.license.includes('4.0') ? '4.0' : '3.0'}/` : asset.license?.startsWith('CC BY') ? `https://creativecommons.org/licenses/by/${asset.license.includes('4.0') ? '4.0' : asset.license.includes('3.0') ? '3.0' : '2.0'}/` : null
  return <figure className={`relative overflow-hidden ${className}`}><img src={src} alt={asset.alt[language] || asset.alt.id} loading="lazy" style={{ objectPosition: asset.objectPosition || 'center' }} className="editorial-image size-full object-cover" onError={() => setFailed(true)} /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 pb-3 pt-8 text-[10px] leading-4 text-white"><span className="block">{illustration ? t('Illustration · ', 'Ilustrasi · ') : ''}{asset.caption[language] || asset.caption.id}</span>{showCredit && asset.credit && <span className="mt-1 block text-[9px] text-white/80">{asset.credit}{asset.license && <> · {licenseUrl ? <a className="underline underline-offset-2" href={licenseUrl} target="_blank" rel="noreferrer">{asset.license}</a> : asset.license}</>}{asset.sourceUrl && <> · <a className="underline underline-offset-2" href={asset.sourceUrl} target="_blank" rel="noreferrer">{t('source', 'sumber')}</a></>}</span>}</figcaption></figure>
}
