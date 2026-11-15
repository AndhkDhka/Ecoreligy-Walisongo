import type { KeyboardEvent } from 'react'
import { Link } from '@tanstack/react-router'
import { MapPin, X } from 'lucide-react'

export type HeritageTab = 'biography' | 'history' | 'tomb' | 'heritage' | 'sources'

const labels: Record<HeritageTab, { en: string; id: string }> = {
  biography: { en: 'Biography', id: 'Biodata' },
  history: { en: 'History', id: 'Sejarah' },
  tomb: { en: 'Tomb location', id: 'Lokasi makam' },
  heritage: { en: 'Heritage', id: 'Peninggalan' },
  sources: { en: 'Sources', id: 'Sumber' },
}

function paragraphs(value: unknown) {
  const read = (part: any) => part && typeof part === 'object' ? part.en ?? part.id ?? '' : part
  if (Array.isArray(value)) return value.map((part) => String(read(part) ?? '')).filter(Boolean)
  const text = String(read(value) ?? '')
  return text ? text.split(/\n\n+/).filter(Boolean) : []
}

export function ARHeritagePanel({ profile, language, activeTab, onTabChange, onClose, targetFound }: {
  profile: any
  language: 'id' | 'en'
  activeTab: HeritageTab
  onTabChange: (tab: HeritageTab) => void
  onClose: () => void
  targetFound?: boolean
}) {
  if (!profile) return null
  const t = (en: string, id: string) => language === 'id' ? id : en
  const local = (value: any): string => String(value && typeof value === 'object' ? (value[language] ?? value.id ?? value.en ?? '') : value ?? '')
  const tabs = Object.keys(labels) as HeritageTab[]
  const content = profile.arContent
  const name = local(content?.displayName) || local(profile.nameFull) || local(profile.name)
  const aliases = local(content?.aliases) || [local(profile.nameFull), local(profile.titles)].filter(Boolean).join(' · ')
  const biography = paragraphs(content?.biography)
  const history = paragraphs(content?.history)
  const historicalNotes = paragraphs(content?.historicalNotes)
  const heritageItems = content?.heritageItems ?? []
  const locationName = local(profile.locationInfo?.name) || name
  const location = local(content?.tombLocation) || local(profile.locationInfo?.address)
  const sourceList = [
    ...(content?.sources ?? []),
    ...(profile.references ?? []).map((source: any) => ({ ...source, note: source.supports })),
  ].filter((source: any, index: number, list: any[]) => list.findIndex((candidate) => candidate.url ? candidate.url === source.url : candidate.title === source.title) === index)

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, tab: HeritageTab) => {
    const currentIndex = tabs.indexOf(tab)
    const nextIndex = event.key === 'ArrowRight' ? (currentIndex + 1) % tabs.length : event.key === 'ArrowLeft' ? (currentIndex - 1 + tabs.length) % tabs.length : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : -1
    if (nextIndex < 0) return
    event.preventDefault()
    onTabChange(tabs[nextIndex])
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus()
  }

  return <section className="ar-holo-panel" aria-labelledby="ar-profile-title">
    <header className="ar-holo-header">
      <div className="ar-profile-mark"><img src={profile.portrait} alt={t(`Illustration representing ${name}; not a verified historical portrait`, `Ilustrasi representasi ${name}; bukan potret historis terverifikasi`)} /></div>
      <div className="min-w-0 flex-1"><span className="ar-holo-kicker"><i />{targetFound ? t('Wali Songo identified', 'Wali Songo dikenali') : t('Explore profile', 'Jelajahi profil')}</span><h3 id="ar-profile-title" className="font-display">{name}</h3><p>{aliases}</p><span className="ar-region-tag"><MapPin aria-hidden="true" />{profile.city}, {profile.province}</span></div>
      <button type="button" className="ar-close-button" onClick={onClose} aria-label={t('Close information', 'Tutup informasi')}><X /></button>
    </header>
    <div className="ar-portrait-note">{t('Illustrative representation · not an authenticated historical likeness', 'Ilustrasi representasi · bukan rupa historis terautentikasi')}</div>
    <div className="ar-holo-tabs" role="tablist" aria-label={t('Heritage information', 'Informasi warisan')}>
      {tabs.map((tab) => <button type="button" role="tab" tabIndex={activeTab === tab ? 0 : -1} aria-selected={activeTab === tab} key={tab} onClick={() => onTabChange(tab)} onKeyDown={(event) => handleTabKeyDown(event, tab)}>{labels[tab][language]}</button>)}
    </div>
    <div className="ar-holo-body" role="tabpanel" key={activeTab}>
      {activeTab === 'biography' && <><p className="ar-content-label">{t('Biography', 'Biodata')}</p>{biography.map((text, index) => <p key={index}>{text}</p>)}<div className="ar-alias-block"><b>{t('Other names', 'Nama lain')}</b><span>{aliases || t('No other names recorded', 'Nama lain belum tercatat')}</span></div><div className="ar-alias-block"><b>{t('Region of da’wah', 'Wilayah dakwah')}</b><span>{profile.city}, {profile.province}, Indonesia</span></div></>}
      {activeTab === 'history' && <><p className="ar-content-label">{t('History and journey of da’wah', 'Sejarah dan perjalanan dakwah')}</p>{history.map((text, index) => <p key={index}>{text}</p>)}{historicalNotes.map((note, index) => <aside className="ar-history-note" key={index}><b>{t('Historical note · see attribution', 'Catatan sejarah · lihat atribusi')}</b><p>{note}</p></aside>)}</>}
      {activeTab === 'tomb' && <><p className="ar-content-label">{t('Pilgrimage site', 'Lokasi makam')}</p><h4>{locationName}</h4><p>{location || t('A verified address is not available in the content source.', 'Alamat terverifikasi tidak tercantum dalam sumber konten.')}</p><p className="ar-caveat">{local(profile.coordsNotes) || t('The address describes the area or complex. Exact entrance and tomb coordinates are not verified.', 'Alamat menjelaskan kawasan atau kompleks. Koordinat pintu masuk dan makam belum terverifikasi.')}</p>{profile.coordsStatus === 'verified' && Array.isArray(profile.coords) && profile.coords.length === 2 && <a className="ar-map-link" href={`https://www.google.com/maps?q=${profile.coords[0]},${profile.coords[1]}`} target="_blank" rel="noreferrer">{t('Open verified map location', 'Buka lokasi peta terverifikasi')}</a>}</>}
      {activeTab === 'heritage' && <><p className="ar-content-label">{t('Sites and cultural heritage', 'Situs dan warisan budaya')}</p>{heritageItems.map((item: any, index: number) => <article className="ar-heritage-card" key={`${local(item.name)}-${index}`}><div className="ar-heritage-heading"><b>{local(item.name)}</b><span>{local(item.type)}</span></div><p>{local(item.description)}</p><small>{local(item.certainty)}</small></article>)}</>}
      {activeTab === 'sources' && <><p className="ar-content-label">{t('Sources and further reading', 'Sumber dan bacaan lanjutan')}</p>{sourceList.length ? sourceList.map((source: any, index: number) => <article className="ar-source-card" key={`${source.url ?? source.title}-${index}`}>{source.url ? <a href={source.url} target="_blank" rel="noreferrer">{source.title || source.publisher}</a> : <strong>{source.title || source.publisher}</strong>}<span>{source.publisher}{source.tier ? ` · ${source.tier}` : ''}</span>{source.note && <p>{source.note}</p>}</article>) : <p>{t('No references are recorded for this profile.', 'Belum ada rujukan tercatat untuk profil ini.')}</p>}<p className="ar-caveat">{t('The portraits are illustrations supplied as scan triggers, not authenticated historical photographs.', 'Potret merupakan ilustrasi pemicu scan yang disediakan, bukan foto historis terautentikasi.')}</p></>}
    </div>
    <footer className="ar-holo-footer"><span><i className={targetFound ? 'is-found' : ''} />{targetFound ? t('Target detected', 'Target terdeteksi') : t('Profile selected', 'Profil dipilih')}</span><div className="ar-panel-actions"><Link to="/destinations/$id" params={{ id: profile.id }} className="ar-full-profile-link">{t('Full profile', 'Profil lengkap')}</Link><button type="button" onClick={onClose}>{t('Scan another figure', 'Pindai tokoh lain')}</button></div></footer>
  </section>
}
