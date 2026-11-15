import * as React from 'react'
import { ArrowDownToLine, ArrowRight, Camera, Check, Compass } from 'lucide-react'
import { ARStage } from '@/components/ar-stage'
import { ARHeritagePanel } from '@/components/ar-heritage-panel'
import type { HeritageTab } from '@/components/ar-heritage-panel'
import { WALI_SONGO_AR_PROFILES } from '@/data/ar-walisongo'
import { AR_EXPERIENCES } from '@/data/ar-experiences'
import { useApp } from '@/lib/app-context'
import { readARExperienceRecords, saveARExperienceRecord } from '@/lib/ar-passport'

const pilot = AR_EXPERIENCES[0]
const defaultTabs: HeritageTab = 'biography'

export function ARExperiencePage() {
  const { language } = useApp()
  const t = (en: string, id: string) => language === 'id' ? id : en
  const [activeProfileId, setActiveProfileId] = React.useState<string | null>(null)
  const [activeTab, setActiveTab] = React.useState<HeritageTab>(defaultTabs)
  const [targetFound, setTargetFound] = React.useState(false)
  const [saved, setSaved] = React.useState(false)
  const [records, setRecords] = React.useState(readARExperienceRecords)
  const selectedProfile = WALI_SONGO_AR_PROFILES.find((item: any) => item.id === activeProfileId)
  const existingCompletion = records.some((record) => record.experienceId === pilot.id)
  const onTargetFound = React.useCallback((destinationId: string) => {
    setTargetFound(true)
    setActiveProfileId(destinationId)
    setActiveTab('biography')
  }, [])
  const onTargetLost = React.useCallback(() => setTargetFound(false), [])
  const selectProfile = (id: string) => {
    setActiveProfileId(id)
    setActiveTab('biography')
    setTargetFound(false)
  }
  const recordExperience = () => {
    if (!targetFound || existingCompletion || saved) return
    if (saveARExperienceRecord(pilot.id, pilot.destinationId)) {
      setRecords(readARExperienceRecords())
      setSaved(true)
    }
  }

  React.useEffect(() => { setRecords(readARExperienceRecords()) }, [])

  React.useEffect(() => {
    if (!activeProfileId || targetFound) return
    document.querySelector('.ar-holo-panel')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' })
  }, [activeProfileId, targetFound])

  return <>
    <section className="ar-page-hero relative isolate overflow-hidden bg-[#17231F] text-[#F6F4EF]">
      <div className="ar-hero-geometry" aria-hidden="true" />
      <div className="page-shell relative grid min-h-[390px] items-end gap-8 py-14 sm:min-h-[450px] sm:py-20 lg:grid-cols-[1fr_.55fr] lg:items-center">
        <div><p className="ar-eyebrow">{t('ECORELIGI · WEB AR HERITAGE', 'ECORELIGI · AR WARISAN BUDAYA')}</p><h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,7vw,6.4rem)] leading-[.94] tracking-tight">{t('Meet the stories behind the names.', 'Temukan kisah di balik nama.')}</h1><p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{t('Scan the available heritage image or explore all nine Wali Songo profiles in a shared, source-linked panel.', 'Pindai gambar warisan yang tersedia atau jelajahi sembilan profil Wali Songo melalui panel bersumber yang sama.')}</p><a href="#ar-explorer" className="ar-primary-button mt-8 inline-flex min-h-12 items-center gap-3">{t('Open the scanner', 'Buka pemindai')} <ArrowRight className="size-4" /></a></div>
        <div className="ar-hero-note hidden border-l border-[#C4A36A]/70 pl-6 lg:block"><span className="ar-eyebrow">01 / 09 · {t('ONE TARGET READY', 'SATU TARGET TERSEDIA')}</span><p className="mt-4 font-display text-3xl">{t('Sunan Giri site image', 'Gambar situs Sunan Giri')}</p><p className="mt-2 text-sm text-white/70">{t('The current target is a heritage-site image, not a historical portrait.', 'Target saat ini berupa gambar situs warisan, bukan potret historis.')}</p></div>
      </div>
    </section>

    <section id="ar-explorer" className="ar-explorer-section page-shell py-12 sm:py-16">
      <div className="mb-7 grid gap-4 md:grid-cols-[1fr_.68fr] md:items-end"><div><p className="ar-eyebrow text-primary">01 / {t('Image scan', 'Pemindaian gambar')}</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">{t('Find a Wali Songo story.', 'Temukan kisah Wali Songo.')}</h2></div><p className="max-w-xl text-sm leading-6 text-muted-foreground">{t('Camera access starts only after you press the button. The scanner currently recognizes one registered image: the Sunan Giri heritage site image. Camera access needs HTTPS or localhost.', 'Kamera hanya aktif setelah tombol ditekan. Saat ini pemindai mengenali satu gambar terdaftar: gambar situs warisan Sunan Giri. Kamera memerlukan HTTPS atau localhost.')}</p></div>
      <ARStage language={language} onTargetFound={onTargetFound} onTargetLost={onTargetLost} overlay={targetFound && selectedProfile ? <ARHeritagePanel profile={selectedProfile} language={language} activeTab={activeTab} onTabChange={setActiveTab} onClose={() => setActiveProfileId(null)} targetFound /> : null} />
      {targetFound && <div className="ar-completion-banner mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm leading-6">{saved || existingCompletion ? t('This AR experience is recorded in your Digital Passport. It does not verify an on-site visit.', 'Pengalaman AR ini tercatat di Paspor Digital. Catatan ini tidak memverifikasi kunjungan langsung.') : t('Target identified. You can record this AR experience in your Digital Passport.', 'Target dikenali. Kamu dapat mencatat pengalaman AR ini di Paspor Digital.')}</p><button type="button" disabled={saved || existingCompletion} onClick={recordExperience} className="ar-primary-button inline-flex min-h-11 shrink-0 items-center justify-center gap-2 disabled:opacity-60">{saved || existingCompletion ? <><Check className="size-4" />{t('Recorded', 'Tercatat')}</> : t('Record experience', 'Catat pengalaman')}</button></div>}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5"><a className="ar-text-link inline-flex min-h-11 items-center gap-2 text-sm font-semibold" href={pilot.markerImage} download="target-sunan-giri-site.png"><ArrowDownToLine className="size-4" />{t('Download registered scan image', 'Unduh gambar scan terdaftar')}</a><span className="ar-status-chip"><Camera aria-hidden="true" className="size-4" />{t('1 registered site-image target', '1 target gambar situs terdaftar')}</span></div>
      {selectedProfile && !targetFound && <div className="mt-6"><ARHeritagePanel profile={selectedProfile} language={language} activeTab={activeTab} onTabChange={setActiveTab} onClose={() => setActiveProfileId(null)} /></div>}
    </section>

    <section className="ar-explore-directory bg-[#F1EFE8] py-12 dark:bg-[#20241F] sm:py-16">
      <div className="page-shell">
        <div className="mb-7 grid gap-4 md:grid-cols-[1fr_.7fr] md:items-end"><div><p className="ar-eyebrow text-primary">02 / {t('Explore without camera', 'Jelajahi tanpa kamera')}</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">{t('Explore all nine Wali Songo.', 'Jelajahi sembilan Wali Songo.')}</h2></div><p className="max-w-xl text-sm leading-6 text-muted-foreground">{t('Choose any figure to open the same biography, history, tomb, heritage, and sources panel. These profiles use the site’s existing bilingual destination records.', 'Pilih tokoh untuk membuka panel biodata, sejarah, makam, peninggalan, dan sumber yang sama. Profil memakai data destinasi dwibahasa yang telah tersedia.')}</p></div>
        <div className="ar-profile-grid" aria-label={t('Choose a Wali Songo profile', 'Pilih profil Wali Songo')}>
          {WALI_SONGO_AR_PROFILES.map((profile: any, index: number) => <button type="button" key={profile.id} aria-pressed={activeProfileId === profile.id} className={`ar-profile-choice ${activeProfileId === profile.id ? 'is-selected' : ''}`} onClick={() => selectProfile(profile.id)}><span className="ar-choice-index">{String(index + 1).padStart(2, '0')}</span><span className="ar-choice-copy"><strong>{profile.titles?.split(';')[0] || profile.nameFull || profile.name}</strong><small>{profile.city}, {profile.province}</small></span><ArrowRight aria-hidden="true" className="size-4" /></button>)}
        </div>
        {!selectedProfile && <div className="ar-explore-hint mt-6"><Compass aria-hidden="true" /><p>{t('Choose a figure to explore the shared profile panel. Portrait illustrations are pending because the requested image files were not included in the project.', 'Pilih tokoh untuk membuka panel profil. Ilustrasi potret belum tersedia karena file gambar yang diminta belum ada di proyek.')}</p></div>}
      </div>
    </section>

    <section className="page-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[.7fr_1.3fr]"><div><p className="ar-eyebrow text-primary">03 / {t('How it works', 'Cara menggunakan')}</p><h2 className="mt-3 font-display text-4xl">{t('A clear path into each story.', 'Langkah mudah menuju setiap kisah.')}</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">{t('The 2D information overlay uses a calm emerald and gold treatment inspired by a digital heritage exhibit.', 'Panel informasi 2D menggunakan warna emerald dan emas yang terinspirasi dari ruang pamer warisan digital.')}</p></div><ol className="ar-how-steps">{[
      [t('Start the scanner', 'Mulai pemindai'), t('Allow camera access when requested. Use HTTPS or localhost.', 'Izinkan kamera saat diminta. Gunakan HTTPS atau localhost.')],
      [t('Show the registered target', 'Tampilkan target terdaftar'), t('Point your camera at the current Sunan Giri site image, printed or on another screen.', 'Arahkan kamera ke gambar situs Sunan Giri yang terdaftar, dalam bentuk cetak atau layar lain.')],
      [t('Read the sourced panel', 'Baca panel bersumber'), t('Open biography, history, tomb location, cultural heritage, and references.', 'Buka biodata, sejarah, lokasi makam, warisan budaya, dan rujukan.')],
      [t('Explore without camera', 'Jelajahi tanpa kamera'), t('Select any of the nine figures in the directory below the scanner.', 'Pilih salah satu dari sembilan tokoh di direktori bawah pemindai.')],
    ].map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3 className="font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></div></li>)}</ol></section>

    <section className="ar-explore-more py-10"><div className="page-shell flex flex-wrap items-center justify-between gap-4"><p className="text-sm text-muted-foreground">{t('Profile content keeps its source and uncertainty notes in the destination records.', 'Konten profil tetap menyertakan sumber dan catatan ketidakpastian dari data destinasi.')}</p><a className="ar-text-link inline-flex min-h-11 items-center gap-2 text-sm font-semibold" href="/destinations/sunan-giri">{t('Visit the Sunan Giri destination profile', 'Buka profil destinasi Sunan Giri')} <ArrowRight className="size-4" /></a></div></section>
  </>
}
