import * as React from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowDownToLine, ArrowRight, BookOpen, Check, Compass, Info, Map, Rotate3D, ShieldCheck } from 'lucide-react'
import { ARStage } from '@/components/ar-stage'
import { AR_EXPERIENCES } from '@/data/ar-experiences'
import { DESTINATIONS, getDestination, loc } from '@/data'
import { readARExperienceRecords, saveARExperienceRecord } from '@/lib/ar-passport'
import { useApp } from '@/lib/app-context'

const pilot = AR_EXPERIENCES[0]
const sunanGiri = getDestination(pilot.destinationId)
const storyChapters = [
  { key: 'context', en: 'Giri as a learning centre', id: 'Giri sebagai pusat pendidikan' },
  { key: 'dakwah', en: 'Connections across the archipelago', id: 'Jaringan lintas Nusantara' },
  { key: 'legacy', en: 'Heritage and living memory', id: 'Warisan dan ingatan hidup' },
] as const

export function ARExperiencePage() {
  const { language } = useApp()
  const t = (en: string, id: string) => language === 'id' ? id : en
  const [activeChapter, setActiveChapter] = React.useState<(typeof storyChapters)[number]['key']>('context')
  const [targetFound, setTargetFound] = React.useState(false)
  const [infoOpen, setInfoOpen] = React.useState(false)
  const [saved, setSaved] = React.useState(false)
  const [records, setRecords] = React.useState(readARExperienceRecords)
  const place = DESTINATIONS.find((item: any) => item.id === pilot.destinationId)
  const sections = sunanGiri?.sections as Record<string, { id: string[]; en: string[] }> | undefined
  const sources = (sunanGiri?.references as any[] | undefined) ?? []
  const selectedStory = sections?.[activeChapter]
  const existingCompletion = records.some((record) => record.experienceId === pilot.id)

  React.useEffect(() => { setRecords(readARExperienceRecords()) }, [])
  const completeExperience = () => {
    if (!targetFound) return
    if (saveARExperienceRecord(pilot.id, pilot.destinationId)) {
      setRecords(readARExperienceRecords())
      setSaved(true)
    }
  }

  return <>
    <section className="ar-page-hero relative isolate overflow-hidden bg-[#17231F] text-[#F6F4EF]">
      <img src="/assets/Document/Makam Sunan Giri.png" alt={t('Photograph of the Sunan Giri heritage site used as the image-tracking target', 'Foto situs warisan Sunan Giri yang digunakan sebagai target pelacakan gambar')} className="absolute inset-0 size-full object-cover opacity-35" width="1672" height="941" fetchPriority="high" />
      <div className="ar-hero-shade absolute inset-0" />
      <div className="page-shell relative grid min-h-[420px] items-end gap-8 py-16 sm:min-h-[490px] sm:py-20 lg:grid-cols-[1fr_.55fr] lg:items-center">
        <div><p className="ar-eyebrow">{t('ECORELIGI · WEB AR HERITAGE', 'ECORELIGI · AR WARISAN BUDAYA')}</p><h1 className="mt-5 max-w-4xl font-display text-[clamp(3.2rem,7vw,6.8rem)] leading-[.9] tracking-tight">Discover Heritage Through Another Perspective</h1><p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">Jelajahi warisan sejarah dan budaya Wali Songo melalui pengalaman Augmented Reality.</p><a href="#ar-explorer" className="ar-primary-button mt-8 inline-flex min-h-12 items-center gap-3">{t('Start the AR experience', 'Mulai Pengalaman AR')} <ArrowRight className="size-4" /></a></div>
        <div className="ar-hero-note hidden border-l border-[#C4A36A]/70 pl-6 lg:block"><span className="ar-eyebrow">01 / 01 · PILOT</span><p className="mt-4 font-display text-3xl">{place?.name || 'Sunan Giri'}</p><p className="mt-2 text-sm text-white/70">{place?.city}, {place?.province}</p><p className="mt-5 text-xs leading-5 text-white/55">{t('One image-tracked interpretation is ready. Other destinations remain in preparation.', 'Satu interpretasi dengan pelacakan gambar siap dicoba. Destinasi lain masih dalam persiapan.')}</p></div>
      </div>
    </section>

    <section id="ar-explorer" className="ar-explorer-section page-shell py-14 sm:py-20">
      <div className="mb-8 grid gap-4 md:grid-cols-[1fr_.65fr] md:items-end"><div><p className="ar-eyebrow text-primary">01 / {t('AR Explorer', 'Jelajah AR')}</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">{t('Look closer at Giri.', 'Amati Giri lebih dekat.')}</h2></div><p className="max-w-xl text-sm leading-6 text-muted-foreground">{t('Allow camera access only after pressing start. Point the camera at a printed copy of the target or show it on another screen. Camera access requires localhost or HTTPS.', 'Izin kamera baru diminta setelah tombol mulai ditekan. Arahkan kamera ke gambar target yang dicetak atau tampilkan dari layar lain. Kamera memerlukan localhost atau HTTPS.')}</p></div>
      <ARStage language={language} onTargetFound={React.useCallback(() => setTargetFound(true), [])} onTargetLost={React.useCallback(() => setTargetFound(false), [])} />
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5"><a className="ar-text-link inline-flex min-h-11 items-center gap-2 text-sm font-semibold" href={pilot.markerImage} download="target-sunan-giri.png"><ArrowDownToLine className="size-4" />{t('Download the image target', 'Unduh gambar target')}</a><button type="button" className="ar-text-link inline-flex min-h-11 items-center gap-2 text-sm font-semibold" aria-expanded={infoOpen} aria-controls="ar-reconstruction-note" onClick={() => setInfoOpen((open) => !open)}><Info className="size-4" />{t('About this interpretation', 'Tentang interpretasi ini')}</button></div>
      {infoOpen && <div id="ar-reconstruction-note" className="ar-note-panel mt-5 grid gap-3 sm:grid-cols-[auto_1fr]"><ShieldCheck className="mt-1 size-5 text-primary" /><div><h3 className="font-semibold">{t('Interpretive object, not a historical reconstruction', 'Objek interpretatif, bukan rekonstruksi sejarah')}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{t(pilot.reconstructionNote, 'Objek 3D ini adalah interpretasi digital abstrak. Bentuknya bukan rekonstruksi Giri Kedaton atau artefak sejarah. Model arsitektur historis belum tersedia dan tidak dibuat tanpa dokumentasi yang dapat dipertanggungjawabkan.')}</p></div></div>}
      {targetFound && <div className="ar-completion-banner mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm leading-6">{saved || existingCompletion ? t('This AR experience is recorded in your Digital Passport. This does not verify an on-site visit.', 'Pengalaman AR ini tercatat di Paspor Digital. Catatan ini tidak memverifikasi kunjungan langsung.') : t('Target detected. You can record this AR experience in your Digital Passport.', 'Target terdeteksi. Kamu dapat mencatat pengalaman AR ini di Paspor Digital.')}</p><button type="button" disabled={saved || existingCompletion} onClick={completeExperience} className="ar-primary-button inline-flex min-h-11 shrink-0 items-center justify-center gap-2 disabled:opacity-60">{saved || existingCompletion ? <><Check className="size-4" />{t('Recorded', 'Tercatat')}</> : t('Record experience', 'Catat pengalaman')}</button></div>}
    </section>

    <section className="page-shell grid gap-10 border-t border-border py-14 sm:py-20 lg:grid-cols-[.75fr_1.25fr]">
      <div><p className="ar-eyebrow text-primary">02 / {t('Choose your heritage', 'Pilih warisan budaya')}</p><h2 className="mt-3 font-display text-4xl">{t('One pilot, more stories ahead.', 'Satu pilot, kisah lainnya menyusul.')}</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">{t('AR availability is shown only when an image target and a working experience are present.', 'Status AR aktif hanya ditampilkan jika target gambar dan pengalaman yang berfungsi sudah tersedia.')}</p></div>
      <div className="ar-pilot-row"><img src={pilot.markerImage} alt={t('Sunan Giri site image', 'Foto situs Sunan Giri')} loading="lazy" width="1672" height="941" /><div className="ar-pilot-copy"><p className="ar-eyebrow text-primary">{place?.city} · {place?.province}</p><h3 className="mt-2 font-display text-3xl">{place?.name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{loc(place?.excerpt)}</p><div className="mt-4 flex flex-wrap items-center gap-3"><span className="ar-status-chip"><span className="ar-status-dot ar-status-found" />{t('Image tracking ready · interpretive 3D', 'Pelacakan gambar siap · 3D interpretatif')}</span><Link to="/destinations/$id" params={{ id: pilot.destinationId }} className="ar-text-link inline-flex min-h-10 items-center gap-2 text-sm font-semibold">{t('Destination information', 'Informasi destinasi')} <ArrowRight className="size-4" /></Link></div></div></div>
      <div className="lg:col-start-2"><p className="text-xs leading-5 text-muted-foreground">{t('Other Wali Songo destinations remain available for reading and map exploration, but are not presented as AR-ready.', 'Destinasi Wali Songo lainnya tetap dapat dibaca dan dijelajahi melalui peta, tetapi belum ditampilkan sebagai pengalaman AR siap pakai.')}</p><div className="mt-3 flex flex-wrap gap-2">{DESTINATIONS.filter((item: any) => item.kind === 'walisongo' && item.id !== pilot.destinationId).slice(0, 4).map((item: any) => <Link key={item.id} to="/destinations/$id" params={{ id: item.id }} className="ar-destination-chip">{item.name}</Link>)}</div></div>
    </section>

    <section className="ar-story-section bg-[#1D2B24] py-14 text-[#F6F4EF] sm:py-20"><div className="page-shell grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="ar-eyebrow text-[#C4A36A]">03 / {t('Interactive storytelling', 'Cerita interaktif')}</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">{t('A place shaped by learning and exchange.', 'Tempat yang dibentuk oleh pendidikan dan pertemuan.')}</h2><p className="mt-5 text-sm leading-7 text-white/65">{t('The story panels use the project’s cited destination notes. Traditions and claims based on later sources are labeled as such.', 'Panel kisah menggunakan catatan destinasi proyek yang mencantumkan sumber. Tradisi dan klaim dari sumber belakangan ditandai sesuai konteksnya.')}</p><div className="mt-7 flex flex-wrap gap-2">{storyChapters.map((chapter) => <button key={chapter.key} type="button" aria-pressed={activeChapter === chapter.key} onClick={() => setActiveChapter(chapter.key)} className={`ar-story-tab ${activeChapter === chapter.key ? 'is-active' : ''}`}>{language === 'id' ? chapter.id : chapter.en}</button>)}</div></div><article className="ar-story-reading"><div className="flex items-center gap-3 text-[#C4A36A]"><BookOpen className="size-5" /><span className="ar-eyebrow">{language === 'id' ? storyChapters.find((item) => item.key === activeChapter)?.id : storyChapters.find((item) => item.key === activeChapter)?.en}</span></div><div className="mt-6 space-y-4">{(language === 'id' ? selectedStory?.id : selectedStory?.en)?.map((paragraph, index) => <p key={index} className="text-base leading-8 text-white/85">{paragraph}</p>)}</div><div className="mt-8 border-t border-white/15 pt-5"><p className="ar-eyebrow text-[#C4A36A]">{t('Sources and further reading', 'Sumber dan bacaan lanjutan')}</p><ul className="mt-3 space-y-3">{sources.slice(0, 3).map((reference) => <li key={reference.url}><a className="text-sm text-white/75 underline decoration-[#C4A36A]/60 underline-offset-4 hover:text-white" href={reference.url} target="_blank" rel="noreferrer">{reference.title} · {reference.publisher}</a><p className="mt-1 text-xs leading-5 text-white/50">{reference.supports}</p></li>)}</ul></div></article></div></section>

    <section className="page-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[.7fr_1.3fr]"><div><p className="ar-eyebrow text-primary">04 / {t('How it works', 'Cara menggunakan')}</p><h2 className="mt-3 font-display text-4xl">{t('A simple, considered visit.', 'Pengalaman yang sederhana dan terarah.')}</h2></div><ol className="ar-how-steps">{[
      [t('Choose a target', 'Pilih target'), t('Print the Sunan Giri target or show it on a separate screen.', 'Cetak target Sunan Giri atau tampilkan pada layar lain.')],
      [t('Start the camera', 'Mulai kamera'), t('Grant camera permission when asked. Keep the target in view.', 'Berikan izin kamera saat diminta. Pastikan target terlihat.')],
      [t('Explore the interpretation', 'Jelajahi interpretasi'), t('Move or rotate the abstract 3D object and open the sourced story.', 'Gerakkan objek 3D abstrak dan buka kisah beserta sumbernya.')],
      [t('Save your experience', 'Simpan pengalaman'), t('Record completion in the Digital Passport. It is not proof of an on-site visit.', 'Catat penyelesaian di Paspor Digital. Catatan ini bukan bukti kunjungan langsung.')],
    ].map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3 className="font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></div></li>)}</ol></section>

    <section className="ar-explore-more bg-[#E9E3D7] py-12 dark:bg-[#22251F] sm:py-16"><div className="page-shell"><p className="ar-eyebrow text-primary">05 / {t('Explore more', 'Jelajahi lebih jauh')}</p><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[
      ['/culture', t('Cultural Discovery', 'Jelajah Budaya'), <BookOpen className="size-5" key="culture" />],
      ['/map', t('Cultural map', 'Peta budaya'), <Map className="size-5" key="map" />],
      ['/tracker', t('Digital Passport', 'Paspor Digital'), <Compass className="size-5" key="passport" />],
      ['/destinations/sunan-giri', t('Sunan Giri destination', 'Destinasi Sunan Giri'), <Rotate3D className="size-5" key="destination" />],
    ].map(([to, title, icon]) => <Link key={String(to)} to={to as never} className="ar-more-link"><span>{icon}</span><span>{title}</span><ArrowRight className="ml-auto size-4" /></Link>)}</div></div></section>
  </>
}
