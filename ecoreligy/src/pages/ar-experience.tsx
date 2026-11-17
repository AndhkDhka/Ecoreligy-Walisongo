import * as React from 'react'
import { ArrowDownToLine, ArrowRight, Camera, Check } from 'lucide-react'
import { ARStage } from '@/components/ar-stage'
import { ARHeritagePanel } from '@/components/ar-heritage-panel'
import type { HeritageTab } from '@/components/ar-heritage-panel'
import { WALI_SONGO_AR_PROFILES, WALI_SONGO_TARGETS } from '@/data/ar-walisongo'
import { AR_EXPERIENCES } from '@/data/ar-experiences'
import { useApp } from '@/lib/app-context'
import {
  readARExperienceRecords,
  saveARExperienceRecord,
} from '@/lib/ar-passport'

export function ARExperiencePage() {
  const { language } = useApp()
  const t = (en: string, id: string) => (language === 'id' ? id : en)
  const [activeProfileId, setActiveProfileId] = React.useState<string | null>(
    null,
  )
  const [detectedId, setDetectedId] = React.useState<string | null>(null)
  const [activeTab, setActiveTab] = React.useState<HeritageTab>('biography')
  const [savedId, setSavedId] = React.useState<string | null>(null)
  const [records, setRecords] = React.useState(readARExperienceRecords)
  const selectedProfile = WALI_SONGO_AR_PROFILES.find(
    (item) => item.id === (detectedId ?? activeProfileId),
  )
  const experience = AR_EXPERIENCES.find(
    (item) => item.destinationId === detectedId,
  )
  const isRecorded = Boolean(
    experience &&
    records.some((record) => record.experienceId === experience.id),
  )
  const recordExperience = () => {
    if (!experience || isRecorded || savedId === experience.id) return
    if (saveARExperienceRecord(experience.id, experience.destinationId)) {
      setRecords(readARExperienceRecords())
      setSavedId(experience.id)
    }
  }
  const onTargetFound = React.useCallback((id: string) => {
    setDetectedId(id)
    setActiveProfileId(id)
    setActiveTab('biography')
  }, [])
  const onTargetLost = React.useCallback((id?: string) => {
    setDetectedId((current) => (!id || current === id ? null : current))
  }, [])
  const selectProfile = (id: string) => {
    setActiveProfileId(id)
    setActiveTab('biography')
  }

  React.useEffect(() => {
    setRecords(readARExperienceRecords())
  }, [])
  React.useEffect(() => {
    if (!activeProfileId || detectedId) return
    document.querySelector('.ar-holo-panel')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'center',
    })
  }, [activeProfileId, detectedId])

  return (
    <>
      <section className="ar-page-hero relative isolate overflow-hidden bg-[#17231F] text-[#F6F4EF]">
        <div className="ar-hero-geometry" aria-hidden="true" />
        <div className="page-shell relative grid min-h-[390px] items-end gap-8 py-14 sm:min-h-[450px] sm:py-20 lg:grid-cols-[1fr_.55fr] lg:items-center">
          <div>
            <p className="ar-eyebrow">ECORELIGI · WEB AR HERITAGE</p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,7vw,6.4rem)] leading-[.94] tracking-tight">
              {t(
                'Meet the stories behind the names.',
                'Temukan kisah di balik nama.',
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              {t(
                'Scan any of nine portrait illustrations to open its source-linked heritage story.',
                'Pindai satu dari sembilan ilustrasi potret untuk membuka kisah warisan beserta sumbernya.',
              )}
            </p>
            <a
              href="#ar-explorer"
              className="ar-primary-button mt-8 inline-flex min-h-12 items-center gap-3"
            >
              {t('Open the scanner', 'Buka pemindai')}{' '}
              <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="ar-hero-note hidden border-l border-[#C4A36A]/70 pl-6 lg:block">
            <span className="ar-eyebrow">
              09 / {t('PORTRAIT TARGETS', 'TARGET POTRET')}
            </span>
            <p className="mt-4 font-display text-3xl">
              {t(
                'One sourced story per figure',
                'Satu kisah bersumber per tokoh',
              )}
            </p>
            <p className="mt-2 text-sm text-white/70">
              {t(
                'Scan illustrations are representations, not verified historical likenesses.',
                'Ilustrasi pemicu scan adalah representasi, bukan rupa historis terverifikasi.',
              )}
            </p>
          </div>
        </div>
      </section>

      <section
        id="ar-explorer"
        className="ar-explorer-section page-shell py-12 sm:py-16"
      >
        <div className="mb-7 grid gap-4 md:grid-cols-[1fr_.68fr] md:items-end">
          <div>
            <p className="ar-eyebrow text-primary">
              01 / {t('Image scan', 'Pemindaian gambar')}
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              {t('Find a Wali Songo story.', 'Temukan kisah Wali Songo.')}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            {t(
              'Camera access starts after you press the button. Scan one of nine registered portrait illustrations. Use HTTPS or localhost.',
              'Kamera aktif setelah tombol ditekan. Pindai salah satu dari sembilan ilustrasi potret terdaftar. Gunakan HTTPS atau localhost.',
            )}
          </p>
        </div>
        <ARStage
          language={language}
          onTargetFound={onTargetFound}
          onTargetLost={onTargetLost}
          overlay={
            detectedId && selectedProfile ? (
              <ARHeritagePanel
                profile={selectedProfile}
                language={language}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                onClose={() => setActiveProfileId(null)}
                targetFound
              />
            ) : null
          }
        />
        <details className="ar-mobile-help mt-4">
          <summary>{t('Scanning tips', 'Bantuan pemindaian')}</summary>
          <ol>
            <li>
              {t(
                'Point the camera at one of the portrait illustrations below.',
                'Arahkan kamera ke salah satu ilustrasi potret di bawah.',
              )}
            </li>
            <li>
              {t(
                'Keep the whole image in view and hold your phone steady.',
                'Pastikan seluruh gambar terlihat dan tahan ponsel dengan stabil.',
              )}
            </li>
            <li>
              {t(
                'Wait for the detected status, then read the story below the camera.',
                'Tunggu status terdeteksi, lalu baca kisah di bawah kamera.',
              )}
            </li>
          </ol>
        </details>
        {detectedId && experience && (
          <div className="ar-completion-banner mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6">
              {isRecorded || savedId === experience.id
                ? t(
                    'This AR experience is recorded in your Digital Passport. It does not verify an on-site visit.',
                    'Pengalaman AR ini tercatat di Paspor Digital. Catatan ini tidak memverifikasi kunjungan langsung.',
                  )
                : t(
                    'Target identified. You can record this AR experience in your Digital Passport.',
                    'Target dikenali. Kamu dapat mencatat pengalaman AR ini di Paspor Digital.',
                  )}
            </p>
            <button
              type="button"
              disabled={isRecorded || savedId === experience.id}
              onClick={recordExperience}
              className="ar-primary-button inline-flex min-h-11 shrink-0 items-center justify-center gap-2 disabled:opacity-60"
            >
              {isRecorded || savedId === experience.id ? (
                <>
                  <Check className="size-4" />
                  {t('Recorded', 'Tercatat')}
                </>
              ) : (
                t('Record experience', 'Catat pengalaman')
              )}
            </button>
          </div>
        )}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
          <a
            className="ar-text-link inline-flex min-h-11 items-center gap-2 text-sm font-semibold"
            href={WALI_SONGO_TARGETS[0].portraitAsset}
            download
          >
            <ArrowDownToLine className="size-4" />
            {t('Download sample scan image', 'Unduh contoh gambar scan')}
          </a>
          <span className="ar-status-chip">
            <Camera aria-hidden="true" className="size-4" />
            {t('9 registered portrait targets', '9 target potret terdaftar')}
          </span>
        </div>
        {selectedProfile && !detectedId && (
          <div className="mt-6">
            <ARHeritagePanel
              profile={selectedProfile}
              language={language}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              onClose={() => setActiveProfileId(null)}
            />
          </div>
        )}
      </section>

      <section className="ar-explore-directory bg-[#F1EFE8] py-12 dark:bg-[#20241F] sm:py-16">
        <div className="page-shell">
          <div className="mb-7 grid gap-4 md:grid-cols-[1fr_.7fr] md:items-end">
            <div>
              <p className="ar-eyebrow text-primary">
                02 / {t('Explore without camera', 'Jelajahi tanpa kamera')}
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                {t(
                  'Explore all nine Wali Songo.',
                  'Jelajahi sembilan Wali Songo.',
                )}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              {t(
                'Choose a figure to open the same sourced biography, history, tomb, heritage, and references panel.',
                'Pilih tokoh untuk membuka panel biodata, sejarah, makam, peninggalan, dan sumber yang sama.',
              )}
            </p>
          </div>
          <div
            className="ar-profile-grid"
            aria-label={t(
              'Choose a Wali Songo profile',
              'Pilih profil Wali Songo',
            )}
          >
            {WALI_SONGO_AR_PROFILES.map((profile, index) => (
              <button
                type="button"
                key={profile.id}
                aria-pressed={activeProfileId === profile.id}
                className={`ar-profile-choice ${activeProfileId === profile.id ? 'is-selected' : ''}`}
                onClick={() => selectProfile(profile.id)}
              >
                <img
                  className="ar-choice-image"
                  src={profile.portrait}
                  alt=""
                  loading="lazy"
                />
                <span className="ar-choice-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="ar-choice-copy">
                  <strong>{profile.arContent.displayName[language]}</strong>
                  <small>
                    {profile.city}, {profile.province}
                  </small>
                </span>
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="ar-eyebrow text-primary">
            03 / {t('How it works', 'Cara menggunakan')}
          </p>
          <h2 className="mt-3 font-display text-4xl">
            {t(
              'A clear path into each story.',
              'Langkah mudah menuju setiap kisah.',
            )}
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {t(
              'The 2D information overlay uses a calm emerald and gold treatment inspired by a digital heritage exhibit.',
              'Panel informasi 2D menggunakan warna emerald dan emas yang terinspirasi dari ruang pamer warisan digital.',
            )}
          </p>
        </div>
        <ol className="ar-how-steps">
          {[
            [
              t('Start the scanner', 'Mulai pemindai'),
              t(
                'Allow camera access when requested. Use HTTPS or localhost.',
                'Izinkan kamera saat diminta. Gunakan HTTPS atau localhost.',
              ),
            ],
            [
              t('Show a registered portrait', 'Tampilkan potret terdaftar'),
              t(
                'Point your camera steadily at any of the nine included portrait illustrations.',
                'Arahkan kamera dengan stabil ke salah satu dari sembilan ilustrasi potret.',
              ),
            ],
            [
              t('Read the sourced panel', 'Baca panel bersumber'),
              t(
                'Open biography, history, tomb location, cultural heritage, and references.',
                'Buka biodata, sejarah, lokasi makam, warisan budaya, dan rujukan.',
              ),
            ],
            [
              t('Explore without camera', 'Jelajahi tanpa kamera'),
              t(
                'Select any figure in the directory above.',
                'Pilih salah satu tokoh di direktori di atas.',
              ),
            ],
          ].map(([title, copy], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {copy}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="ar-explore-more py-10">
        <div className="page-shell flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t(
              'Profile content keeps its source and uncertainty notes.',
              'Konten profil tetap menyertakan sumber dan catatan ketidakpastian.',
            )}
          </p>
          <a
            className="ar-text-link inline-flex min-h-11 items-center gap-2 text-sm font-semibold"
            href="/destinations/sunan-giri"
          >
            {t('Visit a destination profile', 'Buka profil destinasi')}{' '}
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </>
  )
}
