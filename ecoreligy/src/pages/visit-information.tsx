import { Link } from '@tanstack/react-router'
import { ArrowRight, MapPin } from 'lucide-react'
import { DESTINATIONS } from '@/data'
import { useApp } from '@/lib/app-context'

const guidance = [
  [
    'Respect the sacred area',
    'Hormati area suci',
    'Follow signs and local guidance. Keep a calm voice, avoid blocking worship, and ask permission before photographing people or restricted areas.',
    'Ikuti petunjuk dan arahan setempat. Jaga suara, jangan menghalangi ibadah, dan minta izin sebelum memotret orang atau area terbatas.',
  ],
  [
    'Dress thoughtfully',
    'Berpakaian sopan',
    'Choose modest, comfortable clothing suitable for a place of worship and the local customs of the site.',
    'Pilih pakaian yang sopan dan nyaman, sesuai untuk tempat ibadah dan kebiasaan setempat.',
  ],
  [
    'Keep the site clean',
    'Jaga kebersihan',
    'Use available waste bins or take rubbish with you. Do not touch, move, or leave items at heritage structures without permission.',
    'Gunakan tempat sampah yang tersedia atau bawa kembali sampah. Jangan menyentuh, memindahkan, atau meninggalkan benda di bangunan warisan tanpa izin.',
  ],
  [
    'Plan for crowds',
    'Antisipasi keramaian',
    'Visit times and crowd levels vary, especially on religious dates and holidays. Allow extra time and follow the site manager’s directions.',
    'Waktu kunjungan dan kepadatan berbeda, terutama pada hari besar dan liburan. Sediakan waktu lebih dan ikuti arahan pengelola.',
  ],
]

export function VisitInformationPage() {
  const { language } = useApp()
  const isId = language === 'id'
  const t = (en: string, id: string) => (isId ? id : en)
  return (
    <>
      <section className="page-intro relative isolate overflow-hidden bg-[#242521] py-16 text-[#F5F0E6] sm:py-20">
        <div className="ornament-grid absolute inset-y-0 right-0 w-1/3 opacity-25" />
        <div className="page-shell relative">
          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#D7BD83]">
            {t('VISIT INFORMATION', 'INFORMASI KUNJUNGAN')}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[.96]">
            {t(
              'Prepare for a respectful visit.',
              'Persiapkan kunjungan dengan hormat.',
            )}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
            {t(
              'Practical details vary by site. Confirm opening times, fees, access, and facilities with local site management before travelling.',
              'Informasi praktis berbeda di setiap situs. Pastikan jam kunjungan, biaya, akses, dan fasilitas kepada pengelola setempat sebelum berangkat.',
            )}
          </p>
        </div>
      </section>
      <section className="page-shell py-10 sm:py-14">
        <div className="visit-information-grid grid gap-0 border-y border-border md:grid-cols-2">
          {guidance.map(([titleEn, titleId, copyEn, copyId], index) => (
            <article
              key={titleEn}
              className="border-b border-border p-5 sm:p-7 md:odd:border-r"
            >
              <p className="text-xs font-semibold text-primary">0{index + 1}</p>
              <h2 className="mt-3 font-display text-2xl">
                {t(titleEn, titleId)}
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-7 text-muted-foreground">
                {t(copyEn, copyId)}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-secondary/55 p-5 sm:p-7">
          <h2 className="font-display text-2xl">
            {t(
              'Check each destination before setting out',
              'Periksa informasi destinasi sebelum berangkat',
            )}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            {t(
              'Opening hours, fees, transport access, and facilities have not been confirmed consistently across these profiles. Check current information with the local manager.',
              'Jam kunjungan, biaya, akses transportasi, dan fasilitas belum terverifikasi merata pada seluruh profil. Periksa informasi terbaru kepada pengelola setempat.',
            )}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/destinations"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"
            >
              {t('Browse destinations', 'Lihat destinasi')}{' '}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/map"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-4 text-sm font-semibold"
            >
              <MapPin className="size-4" />
              {t('Open cultural map', 'Buka Peta Budaya')}
            </Link>
          </div>
        </div>
        <div className="mt-8 grid gap-2 sm:grid-cols-3">
          {DESTINATIONS.filter((place: any) => place.kind === 'walisongo').map(
            (place: any) => (
              <Link
                key={place.id}
                to="/destinations/$id"
                params={{ id: place.id }}
                className="flex min-h-12 items-center justify-between border-b border-border px-2 text-sm hover:text-primary"
              >
                <span>{place.name}</span>
                <ArrowRight className="size-4" />
              </Link>
            ),
          )}
        </div>
      </section>
    </>
  )
}
