import { Landmark, MapPin, X } from 'lucide-react'
import type { KeyboardEvent } from 'react'
import { FACT_TYPES, loc } from '@/data'

export type HeritageTab = 'biography' | 'history' | 'tomb' | 'heritage' | 'sources'

const labels: Record<HeritageTab, { en: string; id: string }> = {
  biography: { en: 'Biography', id: 'Biodata' },
  history: { en: 'History', id: 'Sejarah' },
  tomb: { en: 'Tomb', id: 'Makam' },
  heritage: { en: 'Heritage', id: 'Peninggalan' },
  sources: { en: 'Sources', id: 'Sumber' },
}

const names: Partial<Record<string, { en: string; id: string }>> = {
  'malik-ibrahim': { en: 'Maulana Malik Ibrahim', id: 'Maulana Malik Ibrahim' },
  'sunan-ampel': { en: 'Sunan Ampel', id: 'Sunan Ampel' },
  'sunan-giri': { en: 'Sunan Giri', id: 'Sunan Giri' },
  'sunan-bonang': { en: 'Sunan Bonang', id: 'Sunan Bonang' },
  'sunan-drajat': { en: 'Sunan Drajat', id: 'Sunan Drajat' },
  'sunan-gunung-jati': { en: 'Sunan Gunung Jati', id: 'Sunan Gunung Jati' },
  'sunan-muria': { en: 'Sunan Muria', id: 'Sunan Muria' },
  'sunan-kalijaga': { en: 'Sunan Kalijaga', id: 'Sunan Kalijaga' },
  'sunan-kudus': { en: 'Sunan Kudus', id: 'Sunan Kudus' },
}

function paragraphs(value: unknown) {
  if (Array.isArray(value)) return value.map((part) => String(loc(part) ?? '')).filter(Boolean)
  const text = String(loc(value) ?? '')
  return text ? [text] : []
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
  const tabs = Object.keys(labels) as HeritageTab[]
  const name = names[profile.id]?.[language] ?? profile.nameFull ?? profile.name
  const aliases = [profile.nameFull, profile.titles].filter(Boolean).join(' · ')
  const chapters = profile.sections ?? {}
  const biography = [...paragraphs(profile.excerpt), ...(chapters.background ? paragraphs(chapters.background) : [])]
  const history = ['life', 'context', 'dakwah', 'methods'].flatMap((key) => paragraphs(chapters[key]))
  const legacy = paragraphs(chapters.legacy)
  const tomb = profile.locationInfo?.address
  const sourceList = (profile.references ?? []).filter((source: any) => source?.url)
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
      <div className="ar-profile-mark" aria-hidden="true"><Landmark /></div>
      <div className="min-w-0 flex-1"><span className="ar-holo-kicker"><i />{targetFound ? t('Heritage identified', 'Warisan dikenali') : t('Explore profile', 'Jelajahi profil')}</span><h3 id="ar-profile-title" className="font-display">{name}</h3><p>{aliases}</p><span className="ar-region-tag"><MapPin aria-hidden="true" />{profile.city}, {profile.province}</span></div>
      <button type="button" className="ar-close-button" onClick={onClose} aria-label={t('Close information', 'Tutup informasi')}><X /></button>
    </header>
    <div className="ar-portrait-note">{t('Portrait illustration not supplied · profile artwork pending', 'Ilustrasi potret belum tersedia · gambar profil menunggu aset')}</div>
    <div className="ar-holo-tabs" role="tablist" aria-label={t('Heritage information', 'Informasi warisan')}>
      {tabs.map((tab) => <button type="button" role="tab" tabIndex={activeTab === tab ? 0 : -1} aria-selected={activeTab === tab} key={tab} onClick={() => onTabChange(tab)} onKeyDown={(event) => handleTabKeyDown(event, tab)}>{labels[tab][language]}</button>)}
    </div>
    <div className="ar-holo-body" role="tabpanel" key={activeTab}>
      {activeTab === 'biography' && <><p className="ar-content-label">{t('Biography', 'Biodata')}</p>{biography.map((text, index) => <p key={index}>{text}</p>)}<div className="ar-alias-block"><b>{t('Known as', 'Nama yang dikenal')}</b><span>{aliases || t('No other names recorded', 'Nama lain belum tercatat')}</span></div></>}
      {activeTab === 'history' && <><p className="ar-content-label">{t('History and journey of da’wah', 'Sejarah dan perjalanan dakwah')}</p>{history.map((text, index) => <p key={index}>{text}</p>)}{(profile.variants ?? []).map((note: any, index: number) => <aside className="ar-history-note" key={index}><b>{t('Historical note', 'Catatan sejarah')}</b><p>{loc(note)}</p></aside>)}{(profile.facts ?? []).map((fact: any, index: number) => <aside className="ar-history-note" key={`fact-${index}`}><b>{loc(FACT_TYPES[fact.type as keyof typeof FACT_TYPES]) || t('Unverified note', 'Catatan belum terverifikasi')}</b><p>{loc(fact.text ?? fact)}</p></aside>)}</>}
      {activeTab === 'tomb' && <><p className="ar-content-label">{t('Pilgrimage site', 'Lokasi makam')}</p><h4>{loc(profile.locationInfo?.name) || profile.name}</h4><p>{loc(tomb) || t('A verified address is not available in the current content record.', 'Alamat terverifikasi belum tersedia pada data saat ini.')}</p><p className="ar-caveat">{loc(profile.coordsNotes) || t('Location information refers to the area or complex. Exact entrance or tomb coordinates have not been verified.', 'Informasi lokasi menunjuk kawasan atau kompleks. Koordinat pintu masuk maupun makam belum terverifikasi.')}</p></>}
      {activeTab === 'heritage' && <><p className="ar-content-label">{t('Sites and cultural legacy', 'Situs dan warisan budaya')}</p>{legacy.map((text, index) => <article className="ar-heritage-card" key={index}><span>{t('Historical / cultural legacy', 'Warisan sejarah / budaya')}</span><p>{text}</p></article>)}{(profile.facts ?? []).map((fact: any, index: number) => <article className="ar-heritage-card" key={`fact-${index}`}><span>{loc(FACT_TYPES[fact.type as keyof typeof FACT_TYPES]) || t('Unverified note', 'Catatan belum terverifikasi')}</span><p>{loc(fact.text ?? fact)}</p></article>)}</>}
      {activeTab === 'sources' && <><p className="ar-content-label">{t('Sources and further reading', 'Sumber dan bacaan lanjutan')}</p>{sourceList.length ? sourceList.map((source: any, index: number) => <article className="ar-source-card" key={`${source.url}-${index}`}><a href={source.url} target="_blank" rel="noreferrer">{source.title || source.publisher}</a><span>{source.publisher}{source.tier ? ` · ${source.tier}` : ''}</span>{source.supports && <p>{source.supports}</p>}</article>) : <p>{t('No linked references are recorded for this profile.', 'Belum ada rujukan tertaut untuk profil ini.')}</p>}<p className="ar-caveat">{t('Portrait artwork is illustrative when supplied and should not be treated as an authenticated historical likeness.', 'Ilustrasi potret, jika tersedia, bersifat ilustratif dan bukan rupa historis yang terautentikasi.')}</p></>}
    </div>
    <footer className="ar-holo-footer"><span><i className={targetFound ? 'is-found' : ''} />{targetFound ? t('Target detected', 'Target terdeteksi') : t('Profile selected', 'Profil dipilih')}</span><button type="button" onClick={onClose}>{t('Scan another figure', 'Pindai tokoh lain')}</button></footer>
  </section>
}
