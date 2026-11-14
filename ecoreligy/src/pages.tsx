import * as React from 'react'
import { Link, useParams, useSearch } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, ArrowUp, Award, CalendarDays, Compass, MapPin, Route, Search, Star, Trash2, Volume2, VolumeX } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FavoriteButton } from '@/components/favorite-button'
import { BrandLogo } from '@/components/brand-logo'
import { readARExperienceRecords } from '@/lib/ar-passport'
import { DestinationContent } from '@/components/destination-content'
import { ManifestPhoto } from '@/components/manifest-photo'
import { CULINARY, DESTINATIONS, EVENTS, JOURNEYS, PRODUCTS, REGIONS, SECTION_TITLES, TIMELINE, directionsUrlFor, getDestination, getFlexibleJourneys, getJourney, googleMapsUrlFor, journeyDestinations, loadFlexibleState, loc, saveFlexibleState, setDataLanguage, storyText } from '@/data'
import { useApp } from '@/lib/app-context'

const titleFont = 'font-display tracking-tight'
const MapPanel = React.lazy(() => import('@/components/map-panel').then((module) => ({ default: module.MapPanel })))

function useText() {
  const { language } = useApp()
  React.useEffect(() => setDataLanguage(language), [language])
  return (en: string, id: string) => language === 'id' ? id : en
}

function PlaceCard({ place }: { place: any }) {
  const t = useText()
  return <Card className="editorial-card group overflow-hidden border-border/80">
    <Link to="/destinations/$id" params={{ id: place.id }} className="block"><div className="relative flex h-56 items-end overflow-hidden bg-[#493326] p-5">
      <ManifestPhoto path={place.cover || place.gallery?.[0]} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#122a20]/85 via-[#122a20]/10 to-transparent" /><Badge variant="gold" className="relative z-10 border-white/20 bg-white/90">{place.kind === 'walisongo' ? 'Wali Songo' : t('Heritage place', 'Situs warisan')}</Badge><div className="absolute right-4 top-4 z-20"><FavoriteButton type="destination" id={place.id} label={place.name} /></div><h3 className="relative z-10 mt-3 w-full font-display text-xl font-semibold text-white">{place.name}</h3>
    </div></Link><CardContent className="pt-4"><p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"><MapPin className="size-3.5" />{place.city}, {place.province}</p><p className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-muted-foreground">{loc(place.excerpt)}</p><Link to="/destinations/$id" params={{ id: place.id }} className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary">{t('Discover place', 'Kenali situs')} <ArrowRight className="size-4" /></Link></CardContent>
  </Card>
}

function JourneyCard({ journey, featured = false }: { journey: any; featured?: boolean }) {
  const t = useText()
  const stops = journeyDestinations(journey)
  return <Card className={`overflow-hidden ${featured ? 'border-[#C6A76B]/40 bg-[#344C3B] text-[#F5F0E6]' : ''}`}>
    <CardHeader><div className="flex items-start justify-between gap-4"><div><Badge variant={featured ? 'gold' : 'secondary'}>{t('Self-guided route', 'Rute mandiri')}</Badge><CardTitle className={`${titleFont} mt-4 text-2xl`}>{loc(journey.name)}</CardTitle><CardDescription className={`mt-2 max-w-xl leading-6 ${featured ? 'text-white/70' : ''}`}>{loc(journey.tagline)}</CardDescription></div><span className={`flex size-12 shrink-0 items-center justify-center rounded-full ${featured ? 'bg-white/10 text-[#C6A76B]' : 'bg-secondary text-primary'}`}><Route className="size-5" /></span></div></CardHeader>
    <CardContent><p className={`text-sm leading-6 ${featured ? 'text-white/75' : 'text-muted-foreground'}`}>{loc(journey.description)}</p><div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs"><span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" />{stops.length} {t('places', 'situs')}</span><span className="inline-flex items-center gap-1.5"><Compass className="size-3.5" />{journey.provinces.join(' · ')}</span></div><Link to="/journeys/$id" params={{ id: journey.id }} className={`mt-6 inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold ${featured ? 'bg-[#C6A76B] text-[#201d14]' : 'bg-primary text-primary-foreground'}`}>{t('View route', 'Lihat rute')} <ArrowRight className="size-4" /></Link></CardContent>
  </Card>
}

export { HomePage } from '@/pages/homepage'
export { ARExperiencePage } from '@/pages/ar-experience'
export { CulturalDiscoveryPage } from '@/pages/cultural-discovery'
export { VisitInformationPage } from '@/pages/visit-information'

export function DestinationsPage() {
  const t = useText()
  const [query, setQuery] = React.useState('')
  const [region, setRegion] = React.useState('all')
  const [kind, setKind] = React.useState('all')
  const results = DESTINATIONS.filter((place: any) => (region === 'all' || place.regionKey === region) && (kind === 'all' || place.kind === kind) && `${place.name} ${place.city} ${place.province}`.toLowerCase().includes(query.toLowerCase()))
  return <PageIntro eyebrow={t('Explore', 'Jelajahi')} title={t('Cultural heritage across Java', 'Warisan budaya di Pulau Jawa')} copy={t('Explore heritage places and histories associated with Wali Songo alongside Java’s wider cultural landscapes. Read source notes and local traditions before visiting.', 'Jelajahi situs warisan dan sejarah yang terkait Wali Songo beserta bentang budaya Jawa yang lebih luas. Baca catatan sumber dan tradisi setempat sebelum berkunjung.')}>
    <div className="mt-8 flex flex-col gap-4"><label className="relative"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input aria-label={t('Search destinations', 'Cari destinasi')} className="pl-10" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('Search by place or city', 'Cari situs atau kota')} /></label><div className="flex flex-wrap gap-2" aria-label={t('Filter by destination type', 'Saring berdasarkan jenis destinasi')}>{[['all',t('All places','Semua situs')],['walisongo','Wali Songo'],['heritage',t('Heritage places','Situs warisan')]].map(([value,label])=><button key={value} aria-pressed={kind===value} onClick={() => setKind(value)} className={`min-h-11 rounded-full px-4 text-sm ${kind===value?'bg-primary text-primary-foreground':'bg-secondary'}`}>{label}</button>)}</div><div className="flex flex-wrap gap-2"><button onClick={() => setRegion('all')} className={`min-h-11 rounded-full px-4 text-sm ${region === 'all' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>{t('All regions', 'Semua wilayah')}</button>{REGIONS.map((item: any) => <button key={item.key} onClick={() => setRegion(item.key)} className={`min-h-11 rounded-full px-4 text-sm ${region === item.key ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>{loc(item.label)}</button>)}</div></div>
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{results.map((place: any) => <PlaceCard key={place.id} place={place} />)}</div>
    {results.length === 0 && <p className="py-16 text-center text-muted-foreground">{t('No destinations match your search.', 'Tidak ada destinasi yang cocok.')}</p>}
  </PageIntro>
}

function PageIntro({ eyebrow, title, copy, children }: { eyebrow: string; title: string; copy: string; children?: React.ReactNode }) {
  return <><section className="page-intro relative isolate overflow-hidden bg-[#242521] py-16 text-[#F5F0E6] sm:py-20 lg:py-24"><div className="ornament-grid absolute inset-y-0 right-0 w-1/3 opacity-25"/><div className="page-shell relative"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#D7BD83]">{eyebrow}</p><h1 className={`${titleFont} mt-4 max-w-4xl text-[clamp(2.8rem,6vw,5.5rem)] leading-[.96]`}>{title}</h1><p className="mt-5 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">{copy}</p></div></section><section className="page-content page-shell py-10 sm:py-14">{children}</section></>
}

export function JourneysPage() {
  const t = useText()
  return <PageIntro eyebrow={t('Go at your own pace', 'Jalani dengan ritmemu')} title={t('Self-guided cultural journeys', 'Perjalanan budaya mandiri')} copy={t('Choose a route and visit its checkpoints in your own time. These journeys are free guides, not paid packages; check-in progress stays on your device.', 'Pilih rute dan kunjungi checkpoint sesuai waktumu. Perjalanan ini adalah panduan gratis, bukan paket berbayar; progres check-in tersimpan di perangkatmu.')}>
    <div className="grid gap-5 lg:grid-cols-2">{JOURNEYS.map((journey: any, index: number) => <JourneyCard key={journey.id} journey={journey} featured={index === 0} />)}</div>
    <div className="mt-10 rounded-3xl border border-dashed border-primary/40 bg-secondary/40 p-6 sm:flex sm:items-center sm:justify-between"><div><h2 className="font-display text-2xl">{t('Create your own route', 'Buat rute sendiri')}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{t('Choose destinations and put them in an order that works for you.', 'Pilih destinasi dan susun urutannya sesuai kebutuhanmu.')}</p></div><Button asChild className="mt-5 sm:mt-0"><Link to={'/planner'}>{t('Open route planner', 'Buka perencana rute')} <ArrowRight /></Link></Button></div>
  </PageIntro>
}

export function JourneyDetailPage() {
  const t = useText()
  const { id } = useParams({ strict: false })
  const journey = getJourney(id)
  if (!journey) return <NotFoundPage />
  const stops = journeyDestinations(journey)
  return <PageIntro eyebrow={t('Self-guided journey', 'Perjalanan mandiri')} title={loc(journey.name)} copy={loc(journey.description)}>
     <div className="grid gap-10 lg:grid-cols-[1fr_320px]"><div><h2 className={`${titleFont} text-2xl`}>{t('Journey checkpoints', 'Checkpoint perjalanan')}</h2><ol className="mt-6 space-y-4">{stops.map((place: any, index: number) => <li key={place.id} className="flex gap-4 rounded-2xl border border-border bg-card p-4"><span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary font-semibold text-primary">{index + 1}</span><div className="min-w-0 flex-1"><Link to="/destinations/$id" params={{ id: place.id }} className="font-semibold hover:text-primary">{place.name}</Link><p className="mt-1 text-sm text-muted-foreground">{place.city}, {place.province}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{loc(place.excerpt)}</p></div></li>)}</ol></div><aside className="h-fit rounded-3xl bg-secondary/55 p-6"><Badge variant="secondary">{t('Free route guide', 'Panduan rute gratis')}</Badge><h2 className={`${titleFont} mt-4 text-2xl`}>{t('Travel thoughtfully', 'Jelajah dengan bijak')}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{t('Ask locally before taking photographs, respect worship and quiet hours, and carry your waste out.', 'Minta izin sebelum memotret, hormati ibadah dan waktu tenang, serta bawa kembali sampahmu.')}</p><Button asChild className="mt-5 w-full"><Link to="/tracker" search={{ journey: journey.id }}>{t('Open digital passport', 'Buka paspor digital')} <ArrowRight /></Link></Button></aside></div>
  </PageIntro>
}

export function DestinationDetailPage() {
  const t = useText()
  const { language } = useApp()
  const { id } = useParams({ strict: false })
  const [isSpeaking, setIsSpeaking] = React.useState(false)
  React.useEffect(() => () => { if ('speechSynthesis' in window) window.speechSynthesis.cancel() }, [])
  const place = getDestination(id)
  if (!place) return <NotFoundPage />
  const sectionKeys = Object.keys(place.sections)
  const needsSource = place.contentStatus === 'needs-source'
  const sections = place.sections as unknown as Record<string, Record<string, string[]>>
  const sectionTitles = SECTION_TITLES as Record<string, { id: string; en: string }>
  const toggleStory = () => {
    if (!('speechSynthesis' in window)) return
    if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); return }
    const utterance = new SpeechSynthesisUtterance(storyText(place))
    utterance.lang = language === 'id' ? 'id-ID' : 'en-US'
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
    setIsSpeaking(true)
  }
  const notAvailable = t('Info not available', 'Info belum tersedia')
  const visit = place.visit as unknown as Record<string, any>
  const profileInfo = place.practicalInfo as Record<string, any>
  const mapUrl = googleMapsUrlFor(place)
  const directionsUrl = directionsUrlFor(place)
  const locationAddress = place.locationInfo?.address || notAvailable
  const title = place.name
  const addressNote = loc(place.addressNotes)
  return <><section className="relative isolate flex min-h-[360px] items-end overflow-hidden bg-[#344C3B] py-14 text-white sm:min-h-[440px]"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,#79875e,#284e3b_55%,#122c21)]" /><div className="absolute inset-0 bg-gradient-to-t from-[#10261d]/90 to-transparent" /><div className="page-shell relative"><Badge variant="outline" className="border-white/40 bg-white/10 text-white">{place.kind === 'walisongo' ? 'Wali Songo' : t('Heritage place', 'Situs warisan')}</Badge><h1 className={`${titleFont} mt-4 max-w-4xl text-4xl sm:text-6xl`}>{title}</h1><p className="mt-3 text-white/80">{place.city}, {place.province}</p></div></section>
    <div className="page-shell grid gap-12 py-8 pb-36 lg:grid-cols-[minmax(0,1fr)_300px] lg:pb-12"><article>
      {!needsSource && <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-3xl text-lg leading-8">{loc(place.bio)}</p><Button variant="outline" onClick={toggleStory} aria-pressed={isSpeaking}>{isSpeaking ? <VolumeX /> : <Volume2 />}{isSpeaking ? t('Stop story', 'Hentikan cerita') : t('Listen to story', 'Dengarkan cerita')}</Button></div>}
      <section className="mt-8 rounded-2xl border border-border bg-card p-5"><h2 className={`${titleFont} text-xl`}>{t('How to get there', 'Bagaimana menuju lokasi')}</h2><p className="mt-3 text-sm leading-6">{locationAddress}</p>{addressNote && <p className="mt-2 text-xs leading-5 text-muted-foreground">{addressNote}</p>}<p className="mt-2 text-xs leading-5 text-muted-foreground">{loc(place.coordsNotes) || t('The map pin is approximate until its coordinates are verified.', 'Penanda peta masih perkiraan sampai koordinatnya diverifikasi.')}</p><div className="mt-4 flex flex-wrap gap-2"><a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground">{t('Open in Google Maps', 'Buka di Google Maps')}</a><a href={directionsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-4 text-sm font-semibold hover:bg-secondary">{t('Get directions', 'Petunjuk arah')}</a></div></section>
      <section className="mt-6"><h2 className="sr-only">{t('Practical information','Informasi praktis')}</h2><div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">{[[t('Opening hours','Jam buka'),loc(profileInfo.hours) || (visit.hours ? loc(visit.hours) : notAvailable)],[t('Ticket or donation','Tiket atau infak'),loc(profileInfo.tickets) || (visit.fees ? loc(visit.fees) : notAvailable)],[t('Parking','Parkir'),loc(profileInfo.parking) || notAvailable],[t('Access','Akses'),loc(visit.access) || notAvailable],[t('Crowd levels','Kondisi keramaian'),notAvailable],[t('Accessibility','Aksesibilitas'),notAvailable]].map(([label,value])=><div key={label} className="bg-card p-4"><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-muted-foreground">{label}</p><p className="mt-2 text-sm leading-5">{value}</p></div>)}</div><p className="mt-2 text-xs text-muted-foreground">{loc(profileInfo.reportLabel) || t('Confirm current details with site management before travelling.', 'Konfirmasi informasi terbaru kepada pengelola sebelum berkunjung.')}</p></section>
      {!needsSource && <section className="mt-8 rounded-2xl border border-[#C6A76B]/35 bg-[#C6A76B]/10 p-5"><h2 className={`${titleFont} text-xl`}>{t('A respectful visit', 'Tips berziarah')}</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">{place.tips.map((tip: any, i: number) => <li key={i}>{loc(tip)}</li>)}</ul></section>}
      <DestinationContent place={{ ...place, _culinary: CULINARY, _products: PRODUCTS }} t={t} />
      {!needsSource && <><div className="mt-10 space-y-9">{sectionKeys.map((key) => <section key={key}><h2 className={`${titleFont} text-2xl`}>{loc(sectionTitles[key]) || key}</h2><div className="mt-4 space-y-4 leading-7 text-muted-foreground">{sections[key][language].map((paragraph: string, i: number) => <p key={i}>{paragraph}</p>)}</div></section>)}</div><section className="mt-10"><h2 className={`${titleFont} text-2xl`}>{t('Historical notes', 'Catatan sejarah')}</h2><div className="mt-4 space-y-3">{place.facts.map((fact: any, i: number) => <div key={i} className="rounded-2xl border border-border bg-card p-4"><Badge variant="secondary">{fact.type}</Badge><p className="mt-3 leading-6">{loc(fact.text)}</p></div>)}</div></section></>}
      </article><aside className="h-fit space-y-4 lg:sticky lg:top-24"><Card><CardHeader><CardTitle>{t('Plan your visit', 'Rencanakan kunjungan')}</CardTitle><CardDescription>{place.city}, {place.province}</CardDescription></CardHeader><CardContent className="space-y-3"><a href={mapUrl} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"><MapPin className="size-4" />{t('Open in Google Maps', 'Buka di Google Maps')}</a><a href={directionsUrl} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"><Route className="size-4" />{t('Get directions', 'Petunjuk arah')}</a><p className="text-xs leading-5 text-muted-foreground">{loc(place.coordsNotes) || t('Map locations may be approximate. Confirm the exact site locally.', 'Titik peta mungkin perkiraan. Konfirmasi lokasi tepat di tempat.')}</p><Link to="/visit" className="flex min-h-11 items-center justify-center rounded-xl border border-border text-sm font-semibold hover:bg-secondary">{t('Visit information', 'Informasi kunjungan')}</Link><FavoriteButton type="destination" id={place.id} label={place.name} /></CardContent></Card><Card><CardHeader><CardTitle>{t('Explore more stories', 'Jelajahi kisah lain')}</CardTitle></CardHeader><CardContent className="space-y-3"><Link to="/culture" className="block rounded-xl bg-secondary/60 p-3 text-sm font-medium hover:text-primary">{t('Cultural Discovery', 'Jelajah Budaya')}</Link>{place.id === 'sunan-giri' && <Link to="/ar" className="block rounded-xl bg-primary p-3 text-sm font-semibold text-primary-foreground">{t('Open the AR pilot', 'Buka pilot AR')}</Link>}</CardContent></Card></aside>
    </div><div className="fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-30 border-t border-border bg-background/95 p-2 shadow-lg backdrop-blur-xl md:hidden"><div className="page-shell grid grid-cols-3 gap-2"><a href={mapUrl} target="_blank" rel="noreferrer" className="flex min-h-11 items-center justify-center rounded-xl bg-primary px-2 text-center text-[11px] font-semibold text-primary-foreground">{t('Map', 'Peta')}</a><a href={directionsUrl} target="_blank" rel="noreferrer" className="flex min-h-11 items-center justify-center rounded-xl border border-border px-2 text-center text-[11px] font-semibold">{t('Directions', 'Arah')}</a><Link to="/visit" className="flex min-h-11 items-center justify-center rounded-xl bg-secondary px-2 text-center text-[11px] font-semibold">{t('Visit info', 'Info kunjungan')}</Link></div></div></>
}

export function MapPage() {
  const t = useText()
  return <PageIntro eyebrow={t('Explore by region', 'Jelajahi wilayah')} title={t('Map of Wali Songo heritage', 'Peta warisan Wali Songo')} copy={t('Map markers show approximate areas unless a source-backed coordinate is verified. Open a marker for details and a map search.', 'Penanda peta menunjukkan wilayah perkiraan kecuali koordinat dengan sumber telah diverifikasi. Buka penanda untuk detail dan pencarian peta.')}><React.Suspense fallback={<div className="h-[420px] animate-pulse rounded-3xl bg-secondary" />}><MapPanel /></React.Suspense></PageIntro>
}

export function PlannerPage() {
  const t = useText()
  const [flexState, setFlexState] = React.useState<any>(() => loadFlexibleState())
  const [notice, setNotice] = React.useState('')
  const [savedPlanId, setSavedPlanId] = React.useState<string | null>(null)
  const selected: string[] = flexState?.draft?.destinationIds || []
  const savedPlans = Object.values<any>(flexState?.plans || {})
  const commit = (next: any) => { if (!saveFlexibleState(next)) { setNotice(t('Could not save this plan. Existing planner data was left unchanged.', 'Rencana tidak dapat disimpan. Data perencana lama tidak diubah.')); return false } setFlexState(next); setNotice(''); return true }
  const changeDraft = (nextIds: string[], nextName = flexState?.draft?.name || '') => { if (!flexState) { setNotice(t('Existing planner data could not be read; editing is disabled to protect it.', 'Data perencana lama tidak dapat dibaca; pengeditan dinonaktifkan untuk melindungi data.')); return } commit({ ...flexState, draft: { ...flexState.draft, name: nextName, destinationIds: nextIds } }) }
  const toggle = (id: string) => changeDraft(selected.includes(id) ? selected.filter((value) => value !== id) : [...selected, id])
  const move = (index: number, delta: number) => { const target = index + delta; if (target < 0 || target >= selected.length) return; const next = selected.slice(); [next[index], next[target]] = [next[target], next[index]]; changeDraft(next) }
  const save = () => {
    if (!flexState) { setNotice(t('Existing planner data could not be read; saving is disabled to protect it.', 'Data perencana lama tidak dapat dibaca; penyimpanan dinonaktifkan untuk melindungi data.')); return }
    if (selected.length < 1) { setNotice(t('Choose at least one destination first.', 'Pilih setidaknya satu destinasi.')); return }
    const now = new Date().toISOString()
    const plan = { id: flexState.draft.editingId || `flex-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`, name: flexState.draft.name.trim() || t('My Java journey', 'Perjalanan Jawa saya'), destinationIds: selected, createdAt: now, updatedAt: now }
    const next = { ...flexState, plans: { ...flexState.plans, [plan.id]: plan }, draft: { editingId: null, name: '', destinationIds: [] } }
    if (commit(next)) { setNotice(t('Your route is saved on this device.', 'Rute tersimpan di perangkat ini.')); setSavedPlanId(plan.id) }
  }
  const deletePlan = (id: string) => { if (!flexState) return; const plans = { ...flexState.plans }; delete plans[id]; commit({ ...flexState, plans }) }
  return <PageIntro eyebrow={t('Make it your own', 'Susun sendiri')} title={t('Build a flexible journey', 'Susun perjalanan fleksibel')} copy={t('Choose the places you want to visit. Your draft stays in this browser.', 'Pilih situs yang ingin dikunjungi. Draf tersimpan di peramban ini.')}>
    <div className="grid gap-8 lg:grid-cols-[1fr_340px]"><div className="space-y-3">{DESTINATIONS.map((place: any) => <div key={place.id} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-primary">{selected.indexOf(place.id) + 1 || '·'}</span><div className="min-w-0 flex-1"><p className="font-semibold">{place.name}</p><p className="mt-1 text-xs text-muted-foreground">{place.city}, {place.province}</p></div><Button variant={selected.includes(place.id) ? 'secondary' : 'outline'} size="sm" onClick={() => toggle(place.id)}>{selected.includes(place.id) ? t('Remove', 'Hapus') : t('Add', 'Tambah')}</Button></div>)}</div><aside className="h-fit rounded-3xl bg-secondary/50 p-6 lg:sticky lg:top-24"><h2 className={`${titleFont} text-2xl`}>{t('Your route', 'Rute kamu')}</h2><label className="mt-4 grid gap-2 text-sm font-medium">{t('Route name', 'Nama rute')}<Input value={flexState?.draft?.name || ''} onChange={(event) => changeDraft(selected, event.target.value)} placeholder={t('My Java journey', 'Perjalanan Jawa saya')} /></label><ol className="mt-5 space-y-2">{selected.map((id, index) => <li key={id} className="flex min-h-11 items-center gap-2 text-sm"><span className="w-6 text-primary">{index + 1}.</span><span className="min-w-0 flex-1">{getDestination(id)?.name}</span><Button size="icon" variant="ghost" className="size-9" disabled={index === 0} aria-label={t('Move up', 'Naikkan')} onClick={() => move(index, -1)}><ArrowUp /></Button><Button size="icon" variant="ghost" className="size-9" disabled={index === selected.length - 1} aria-label={t('Move down', 'Turunkan')} onClick={() => move(index, 1)}><ArrowDown /></Button></li>)}</ol><p className="mt-4 text-sm text-muted-foreground">{selected.length} {t('destinations selected', 'destinasi dipilih')}</p><Button className="mt-5 w-full" onClick={save}>{t('Save route', 'Simpan rute')}</Button>{notice && <p role="status" className="mt-3 text-sm text-muted-foreground">{notice}</p>}{savedPlanId && <Button asChild variant="outline" className="mt-2 w-full"><Link to="/tracker" search={{ journey: savedPlanId }}>{t('Start this route', 'Mulai rute ini')} <ArrowRight /></Link></Button>}<p className="mt-4 text-xs leading-5 text-muted-foreground">{t('This planner does not book transport or accommodation.', 'Perencana ini tidak memesan transportasi atau penginapan.')}</p></aside></div>
    {savedPlans.length > 0 && <section className="mt-10"><h2 className={`${titleFont} text-2xl`}>{t('Saved routes', 'Rute tersimpan')}</h2><div className="mt-4 grid gap-3 md:grid-cols-2">{savedPlans.map((plan) => <Card key={plan.id}><CardContent className="flex items-center gap-3 p-4"><div className="min-w-0 flex-1"><p className="font-semibold">{plan.name}</p><p className="mt-1 text-xs text-muted-foreground">{plan.destinationIds.length} {t('places', 'situs')}</p></div><Button asChild size="sm"><Link to="/tracker" search={{ journey: plan.id }}>{t('Start', 'Mulai')}</Link></Button><Button size="icon" variant="ghost" aria-label={t(`Delete ${plan.name}`, `Hapus ${plan.name}`)} onClick={() => deletePlan(plan.id)}><Trash2 /></Button></CardContent></Card>)}</div></section>}
  </PageIntro>
}

type PassportState = { version: number; activeJourney: string | null; visitLog: any[]; journeys: Record<string, any>; migratedLegacy: boolean }
const emptyPassport = (): PassportState => ({ version: 3, activeJourney: null, visitLog: [], journeys: {}, migratedLegacy: false })
function readPassport(): PassportState { try { const value = JSON.parse(localStorage.getItem('ejg_journey_state') || 'null'); return value?.version === 3 && value.journeys ? value : emptyPassport() } catch { return emptyPassport() } }
function verifiedWrite(key: string, value: unknown) { try { const raw = JSON.stringify(value); localStorage.setItem(key, raw); return localStorage.getItem(key) === raw } catch { return false } }

export function TrackerPage() {
  const t = useText()
  const { language } = useApp()
  const search = useSearch({ strict: false })
  const [passport, setPassport] = React.useState(readPassport)
  const [arRecords] = React.useState(readARExperienceRecords)
  const [message, setMessage] = React.useState('')
  const [bookingRef, setBookingRef] = React.useState('')
  const [bookingResult, setBookingResult] = React.useState('')
  const [rating, setRating] = React.useState(5)
  const [reviewStatus, setReviewStatus] = React.useState('')
  const journeys = [...JOURNEYS, ...getFlexibleJourneys()]
  const journeyId = search.journey || passport.activeJourney || JOURNEYS[0]?.id
  const journey = getJourney(journeyId)
  const stops = journey ? journeyDestinations(journey) : []
  const completed = passport.journeys[journeyId]?.completedCheckpoints || {}
  const journeyComplete = stops.length > 0 && Object.keys(completed).length >= stops.length
  const stamp = (place: any) => {
    const next = structuredClone(passport)
    const now = new Date().toISOString()
    const record = next.journeys[journeyId] || { journeyId, completedCheckpoints: {}, startedAt: now, lastActivityAt: now, completedAt: null, status: 'in_progress' }
    if (record.completedCheckpoints[place.id]) return
    record.completedCheckpoints[place.id] = { at: now, method: 'manual', source: 'checkin' }
    record.lastActivityAt = now
    if (Object.keys(record.completedCheckpoints).length >= stops.length) { record.status = 'completed'; record.completedAt = now }
    next.journeys[journeyId] = record
    next.activeJourney = journeyId
    next.visitLog.push({ destinationId: place.id, visitedAt: now, verificationMethod: 'manual', journeyId })
    if (verifiedWrite('ejg_journey_state', next)) { setPassport(next); setMessage(t('Manual visit saved on this device.', 'Kunjungan manual tersimpan di perangkat ini.')) }
    else setMessage(t('Could not save progress. Your visit was not marked.', 'Progres tidak dapat disimpan. Kunjungan belum ditandai.'))
  }
  const lookupInquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const store = JSON.parse(localStorage.getItem('ejg_bookings') || '{}')
      const found = store && !Array.isArray(store) ? store[bookingRef.trim().toUpperCase()] : null
      setBookingResult(found ? t(`Saved locally on ${new Date(found.createdAt).toLocaleDateString()}. No operator was contacted.`, `Tersimpan lokal pada ${new Date(found.createdAt).toLocaleDateString()}. Belum ada operator yang dihubungi.`) : t('No saved inquiry matches that reference on this device.', 'Tidak ada permintaan tersimpan dengan referensi tersebut di perangkat ini.'))
    } catch { setBookingResult(t('Saved inquiry data could not be read safely.', 'Data permintaan tersimpan tidak dapat dibaca dengan aman.')) }
  }
  const submitReview = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const review = { name: String(form.get('name') || 'Anonymous'), rating, comment: String(form.get('comment') || ''), date: new Date().toISOString(), journeyId }
    try {
      const raw = localStorage.getItem('ejg_reviews')
      const reviews = raw ? JSON.parse(raw) : []
      if (!Array.isArray(reviews)) throw new Error('Existing review data is not a list')
      const next = [...reviews, review]
      const serialized = JSON.stringify(next)
      localStorage.setItem('ejg_reviews', serialized)
      if (localStorage.getItem('ejg_reviews') !== serialized) throw new Error('Storage write was not confirmed')
      setReviewStatus(t('Thank you. Your review is saved on this device.', 'Terima kasih. Ulasan tersimpan di perangkat ini.'))
      event.currentTarget.reset()
    } catch { setReviewStatus(t('Could not save the review; existing reviews were left unchanged.', 'Ulasan tidak dapat disimpan; ulasan lama tidak diubah.')) }
  }
  const resetJourney = () => {
    if (!window.confirm(t('Reset this journey’s passport progress? Visit history and other journeys will stay.', 'Hapus progres paspor perjalanan ini? Riwayat kunjungan dan perjalanan lain tetap tersimpan.'))) return
    const next = structuredClone(passport)
    delete next.journeys[journeyId]
    next.activeJourney = journeyId
    if (verifiedWrite('ejg_journey_state', next)) { setPassport(next); setMessage(t('This journey’s progress was reset.', 'Progres perjalanan ini dihapus.')) }
    else setMessage(t('Could not save the reset. Your progress was left unchanged.', 'Perubahan tidak dapat disimpan. Progres tetap utuh.'))
  }
  return <PageIntro eyebrow={t('Keep a record', 'Catat perjalanan')} title={t('Your cultural passport', 'Paspor budayamu')} copy={t('AR experience completion and manually recorded visit progress are kept as separate records on this device.', 'Penyelesaian pengalaman AR dan progres kunjungan yang dicatat manual disimpan sebagai catatan terpisah di perangkat ini.')}>
    <section className="mb-10 border border-border bg-card p-5 sm:p-7"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-primary">{t('AR exploration', 'Eksplorasi AR')}</p><h2 className={`${titleFont} mt-2 text-2xl`}>{t('Experiences completed', 'Pengalaman yang selesai')}</h2></div><span className="font-display text-4xl text-accent">{arRecords.length}</span></div>{arRecords.length > 0 ? <ul className="mt-5 divide-y divide-border">{arRecords.map((record) => <li key={record.experienceId} className="flex flex-wrap items-center justify-between gap-3 py-4"><div><p className="font-medium">{getDestination(record.destinationId)?.name || record.destinationId}</p><p className="mt-1 text-xs text-muted-foreground">{t('AR experience completed', 'Pengalaman AR selesai')} · {new Date(record.completedAt).toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US')}</p></div><span className="text-xs text-muted-foreground">{t('On-site visit not verified', 'Kunjungan langsung belum diverifikasi')}</span></li>)}</ul> : <p className="mt-4 text-sm leading-6 text-muted-foreground">{t('Complete the Sunan Giri image-tracking experience to save your first AR record. An image match does not prove a physical visit.', 'Selesaikan pengalaman pelacakan gambar Sunan Giri untuk menyimpan catatan AR pertama. Kecocokan gambar tidak membuktikan kunjungan langsung.')}</p>}<Link to="/ar" className="ar-text-link mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold">{t('Open AR Heritage Experience', 'Buka Pengalaman AR Warisan')} <ArrowRight className="size-4" /></Link></section>
    <details className="legacy-passport-details"><summary>{t('Manual destination check-ins', 'Catatan kunjungan manual')}</summary><div className="mb-7 mt-4 flex flex-wrap items-center gap-2">{journeys.map((item: any) => <Link key={item.id} to="/tracker" search={{ journey: item.id }} className={`rounded-full px-4 py-2.5 text-sm ${journeyId === item.id ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>{loc(item.name)}</Link>)}<BrandLogo size="sm" symbolOnly className="passport-emblem ml-auto" /></div>
    {journey && <><div className="mb-8 rounded-3xl bg-[#344C3B] p-6 text-[#F5F0E6] sm:p-8"><Badge variant="gold">{t('Personal travel record', 'Catatan perjalanan pribadi')}</Badge><h2 className={`${titleFont} mt-4 text-3xl`}>{loc(journey.name)}</h2><div className="mt-5 flex items-center gap-4"><div className="h-2 flex-1 overflow-hidden rounded-full bg-white/15"><div className="h-full rounded-full bg-[#C6A76B] transition-all" style={{ width: `${stops.length ? (Object.keys(completed).length / stops.length) * 100 : 0}%` }} /></div><span className="text-sm">{Object.keys(completed).length}/{stops.length}</span></div></div><div className="space-y-4">{stops.map((place: any, index: number) => <Card key={place.id}><CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center"><span className={`flex size-11 shrink-0 items-center justify-center rounded-full ${completed[place.id] ? 'bg-primary text-primary-foreground' : 'bg-secondary text-primary'}`}>{completed[place.id] ? '✓' : index + 1}</span><div className="flex-1"><h3 className="font-semibold">{place.name}</h3><p className="mt-1 text-sm text-muted-foreground">{place.city}, {place.province}</p>{completed[place.id] && <p className="mt-1 text-xs text-muted-foreground">{t('Manually recorded', 'Dicatat manual')}</p>}</div><Button variant={completed[place.id] ? 'secondary' : 'default'} disabled={Boolean(completed[place.id])} onClick={() => stamp(place)}>{completed[place.id] ? t('Visited · manual', 'Dikunjungi · manual') : t('Mark a visit', 'Tandai kunjungan')}</Button></CardContent></Card>)}</div><div className="mt-5 flex flex-wrap items-center justify-between gap-3"><p role="status" className="min-h-6 text-sm text-muted-foreground">{message}</p>{Object.keys(completed).length > 0 && <Button variant="outline" onClick={resetJourney}>{t('Reset this journey', 'Hapus progres rute ini')}</Button>}</div><p className="mt-2 text-xs text-muted-foreground">{t('GPS auto-check-in is disabled until site coordinates have been verified.', 'Check-in GPS otomatis nonaktif sampai koordinat situs diverifikasi.')}</p>
      <Card className="mt-12"><CardHeader><CardTitle className="flex items-center gap-2"><Search className="size-4 text-primary" />{t('Look up a saved inquiry', 'Cari permintaan tersimpan')}</CardTitle><CardDescription>{t('Reference records are stored only on this device.', 'Referensi tersimpan hanya di perangkat ini.')}</CardDescription></CardHeader><CardContent><form onSubmit={lookupInquiry} className="flex flex-col gap-3 sm:flex-row"><Input required value={bookingRef} onChange={(event) => setBookingRef(event.target.value)} placeholder="EJG-2026-0031" aria-label={t('Inquiry reference', 'Referensi permintaan')} /><Button type="submit">{t('Look up', 'Cari')}</Button></form><p role="status" className="mt-3 min-h-5 text-sm text-muted-foreground">{bookingResult}</p></CardContent></Card>
      {journeyComplete && <Card className="mt-6"><CardHeader><CardTitle className="flex items-center gap-2"><Award className="size-5 text-accent" />{t('Journey complete', 'Perjalanan selesai')}</CardTitle><CardDescription>{t('Share a note about your visit. Reviews stay on this device.', 'Bagikan kesan tentang kunjunganmu. Ulasan tersimpan di perangkat ini.')}</CardDescription></CardHeader><CardContent><form onSubmit={submitReview} className="space-y-4"><label className="grid gap-2 text-sm font-medium">{t('Name (optional)', 'Nama (opsional)')}<Input name="name" /></label><fieldset><legend className="mb-2 text-sm font-medium">{t('Rating', 'Penilaian')}</legend><div className="flex gap-1">{[1,2,3,4,5].map((value) => <button key={value} type="button" className="flex size-11 items-center justify-center rounded-lg hover:bg-secondary" aria-label={`${value} ${t('stars', 'bintang')}`} aria-pressed={rating === value} onClick={() => setRating(value)}><Star className={value <= rating ? 'size-5 fill-current text-accent' : 'size-5 text-muted-foreground'} /></button>)}</div></fieldset><label className="grid gap-2 text-sm font-medium">{t('Your review', 'Ulasanmu')}<textarea name="comment" required rows={4} className="rounded-xl border border-input bg-background p-3 text-sm focus-visible:ring-2 focus-visible:ring-ring" /></label><Button type="submit">{t('Save review', 'Simpan ulasan')}</Button><p role="status" className="min-h-5 text-sm text-muted-foreground">{reviewStatus}</p></form></CardContent></Card>}
    </>}
    </details>
  </PageIntro>
}

export function TimelinePage() {
  const t = useText()
  return <PageIntro eyebrow={t('History and context', 'Sejarah dan konteks')} title={t('Islam in Java: faith, trade, and culture', 'Islam di Jawa: iman, perdagangan, dan budaya')} copy={t('A sourced timeline for exploring the diverse histories and traditions associated with Islam in Java.', 'Linimasa bersumber untuk mengenal sejarah dan tradisi Islam yang beragam di Pulau Jawa.')}>
    <ol className="relative space-y-5 before:absolute before:bottom-3 before:left-[19px] before:top-3 before:w-px before:bg-border">{TIMELINE.map((item: any, index: number) => <li key={`${item.year}-${index}`} className="relative grid gap-4 pl-12 sm:grid-cols-[160px_1fr]"><span className="absolute left-0 top-1 flex size-10 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground"><CalendarDays className="size-4" /></span><div className="pt-2 text-sm font-semibold text-primary">{item.year}</div><Card><CardHeader><div className="flex flex-wrap items-center gap-2"><Badge variant="gold">{item.yearType}</Badge><CardTitle className="text-lg">{loc(item.title)}</CardTitle></div><CardDescription className="mt-2 leading-6">{loc(item.text)}</CardDescription></CardHeader>{item.sources?.length > 0 && <CardContent className="pt-0 text-xs text-muted-foreground">{t('Sources', 'Sumber')}: {item.sources.map((ref: any) => ref.title || ref.url).join(' · ')}</CardContent>}</Card></li>)}</ol>
  </PageIntro>
}

export function EventsPage() {
  const t = useText()
  return <PageIntro eyebrow={t('Local calendar', 'Kalender lokal')} title={t('Traditions and cultural events', 'Tradisi dan agenda budaya')} copy={t('Dates may follow the Hijri calendar and shift each year. Confirm details with organizers or official local sources before traveling.', 'Tanggal dapat mengikuti kalender Hijriah dan berubah setiap tahun. Konfirmasi dengan penyelenggara atau sumber lokal resmi sebelum berangkat.')}>
    <div className="grid gap-5 md:grid-cols-2">{EVENTS.map((event: any) => <Card key={event.id}><CardHeader><Badge variant="secondary" className="w-fit">{loc(event.scheduleStatus)}</Badge><CardTitle className="mt-3">{loc(event.name)}</CardTitle><CardDescription className="leading-6">{loc(event.description)}</CardDescription></CardHeader><CardContent className="space-y-3"><p className="flex items-start gap-2 text-sm text-muted-foreground"><CalendarDays className="mt-0.5 size-4 shrink-0" />{loc(event.period)}</p><p className="text-xs text-muted-foreground">{event.region}</p>{event.source && <a className="text-xs font-semibold text-primary underline" href={event.source} target="_blank" rel="noreferrer">{t('Read the source', 'Baca sumber')}</a>}</CardContent></Card>)}</div>
  </PageIntro>
}

export function CulinaryPage() {
  const t = useText()
  return <PageIntro eyebrow={t('Local flavors', 'Cita rasa lokal')} title={t('Coast, community, and the Gresik table', 'Pesisir, masyarakat, dan meja makan Gresik')} copy={t('Explore dishes rooted in Gresik and the communities of Java. Ask about ingredients and dietary needs directly with local sellers.', 'Kenali hidangan dari Gresik dan masyarakat Jawa. Tanyakan bahan dan kebutuhan makanan langsung kepada penjual setempat.')}>
     <div className="grid gap-5 md:grid-cols-2">{CULINARY.map((item: any) => <Card key={item.id} className="overflow-hidden"><ManifestPhoto path={item.cover} className="h-56 bg-[#493326]" illustration={item.illustration} /><CardHeader><CardTitle className="flex items-center justify-between gap-3">{item.name}<FavoriteButton type="culinary" id={item.id} label={item.name} /></CardTitle><CardDescription>{item.regency || item.region}</CardDescription><CardDescription className="leading-6">{loc(item.tagline)}</CardDescription>{item.destinationId && <CardDescription>{t('Related destination', 'Destinasi terkait')}: {DESTINATIONS.find((place: any) => place.id === item.destinationId)?.name}</CardDescription>}</CardHeader><CardContent><p className="text-sm leading-6 text-muted-foreground">{loc(item.history)}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{loc(item.process)}</p>{item.id === 'legen-siwalan' && <p className="mt-3 text-xs leading-5 text-muted-foreground">{t('Choose a trusted seller for legen; product quality may vary.', 'Pilih penjual legen yang tepercaya karena kualitas produk dapat berbeda.')}</p>}<p className="mt-4 text-xs leading-5 text-muted-foreground">{t('Prices vary. Availability and ingredients can change; confirm with the seller.', 'Harga bervariasi. Ketersediaan dan bahan dapat berubah; konfirmasi kepada penjual.')}</p></CardContent></Card>)}</div>
  </PageIntro>
}

export function ProductsPage() {
  const t = useText()
  return <PageIntro eyebrow={t('Made by local hands', 'Karya tangan warga')} title={t('Local craft and community products', 'Kerajinan dan produk lokal')} copy={t('Discover craft traditions and small businesses. Product descriptions and seller details should be confirmed directly before purchase.', 'Kenali tradisi kerajinan dan usaha kecil. Konfirmasi deskripsi produk dan detail penjual langsung sebelum membeli.')}>
     <div className="grid gap-5 md:grid-cols-2">{PRODUCTS.map((item: any) => <Card key={item.id} className="overflow-hidden"><ManifestPhoto path={item.cover} className="h-56 bg-[#493326]" illustration={item.illustration} /><CardHeader><CardTitle className="flex items-center justify-between gap-3">{item.name}<FavoriteButton type="product" id={item.id} label={item.name} /></CardTitle><CardDescription>{item.region || item.regency}</CardDescription><CardDescription className="leading-6">{loc(item.tagline)}</CardDescription>{item.destinationId && <CardDescription>{t('Related destination', 'Destinasi terkait')}: {DESTINATIONS.find((place: any) => place.id === item.destinationId)?.name}</CardDescription>}</CardHeader><CardContent><p className="text-sm leading-6 text-muted-foreground">{loc(item.history)}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{loc(item.process)}</p><p className="mt-3 text-xs text-muted-foreground">{loc(item.nearbyShop)}</p><p className="mt-4 text-xs leading-5 text-muted-foreground">{t('Price: varies. Product details and seller locations are unverified; confirm directly before purchasing.', 'Harga bervariasi. Detail produk dan lokasi penjual belum terverifikasi; konfirmasi langsung sebelum membeli.')}</p></CardContent></Card>)}</div>
  </PageIntro>
}

export function BookingPage() {
  const t = useText()
  const [status, setStatus] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const oldRaw = localStorage.getItem('ejg_bookings')
      const parsed = oldRaw ? JSON.parse(oldRaw) : {}
      const current = Array.isArray(parsed) && parsed.length === 0 ? {} : parsed
      if (!current || Array.isArray(current) || typeof current !== 'object') throw new Error('Stored inquiries could not be read safely')
      const year = new Date().getFullYear()
      const used = new Set(Object.keys(current).map((id) => id.toUpperCase()))
      let id = ''
      for (let attempt = 0; attempt < 100; attempt++) { const candidate = `EJG-${year}-${String(1000 + Math.floor(Math.random() * 9000)).padStart(4, '0')}`; if (!used.has(candidate)) { id = candidate; break } }
      if (!id) throw new Error('Could not make a unique inquiry reference')
      const request = { name, email, message, type: 'inquiry', status: 'saved-locally', createdAt: new Date().toISOString() }
      const next = { ...current, [id]: request }
      const raw = JSON.stringify(next)
      localStorage.setItem('ejg_bookings', raw)
      if (localStorage.getItem('ejg_bookings') !== raw) throw new Error('Storage write was not confirmed')
      try { localStorage.setItem('ejg_last_booking_id', id) } catch { /* convenience reference only */ }
      setStatus(t(`Inquiry ${id} saved on this device. No operator has been contacted.`, `Permintaan ${id} tersimpan di perangkat ini. Belum ada operator yang dihubungi.`)); setName(''); setEmail(''); setMessage('')
    }
    catch { setStatus(t('Could not save your inquiry. Please try again on this device.', 'Permintaan tidak dapat disimpan. Coba lagi di perangkat ini.')) }
  }
  return <PageIntro eyebrow={t('Ask before you go', 'Tanyakan sebelum berangkat')} title={t('Journey inquiry', 'Pertanyaan perjalanan')} copy={t('Send an information request about routes or destinations. This is not a booking; there is no verified operator, package, or price.', 'Kirim pertanyaan seputar rute atau destinasi. Ini bukan pemesanan; belum ada operator, paket, atau harga yang terverifikasi.')}>
    <Card className="mx-auto max-w-2xl"><CardContent className="p-6 sm:p-9"><form onSubmit={submit} className="space-y-5"><label className="grid gap-2 text-sm font-medium">{t('Name', 'Nama')}<Input required value={name} onChange={(event) => setName(event.target.value)} /></label><label className="grid gap-2 text-sm font-medium">{t('Email (optional)', 'Email (opsional)')}<Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} /></label><label className="grid gap-2 text-sm font-medium">{t('What would you like to know?', 'Apa yang ingin ditanyakan?')}<textarea required rows={5} value={message} onChange={(event) => setMessage(event.target.value)} className="rounded-xl border border-input bg-background p-3 text-sm focus-visible:ring-2 focus-visible:ring-ring" /></label><Button type="submit" className="w-full">{t('Save inquiry on this device', 'Simpan pertanyaan di perangkat ini')} <ArrowRight /></Button><p role="status" className="min-h-6 text-sm text-muted-foreground">{status}</p></form><p className="mt-3 text-xs leading-5 text-muted-foreground">{t('Your inquiry remains in this browser. It is not sent to a server or WhatsApp.', 'Pertanyaan tersimpan di peramban ini. Data tidak dikirim ke server atau WhatsApp.')}</p></CardContent></Card>
  </PageIntro>
}

export function NotFoundPage() {
  const t = useText()
  return <div className="page-shell py-24 text-center"><p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p><h1 className={`${titleFont} mt-3 text-4xl`}>{t('This page is not here', 'Halaman tidak ditemukan')}</h1><p className="mt-4 text-muted-foreground">{t('Try returning to the home page or exploring destinations.', 'Kembali ke halaman utama atau jelajahi destinasi.')}</p><Button asChild className="mt-7"><Link to="/">{t('Back to home', 'Kembali ke beranda')}</Link></Button></div>
}
