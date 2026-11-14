import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ManifestPhoto } from '@/components/manifest-photo'
import { loc } from '@/data'

const heading = 'font-display tracking-tight'

export function DestinationContent({ place, t }: { place: any; t: (en: string, id: string) => string }) {
  const pending = place.contentStatus === 'needs-source'
  const relatedFood = (place.nearbyCulinary || []).map((id: string) => ({ ...((place._culinary || []).find((item: any) => item.id === id) || {}), id })).filter((item: any) => item.name)
  const relatedProducts = (place.nearbyProducts || []).map((id: string) => ({ ...((place._products || []).find((item: any) => item.id === id) || {}), id })).filter((item: any) => item.name)
  const list = (items: any[]) => items.map((item, index) => <li key={`${index}-${item.id || item.id === '' ? item.id : index}`}>{typeof item === 'string' ? item : loc(item)}</li>)

  if (pending) return <Card className="border-dashed border-[#C6A76B]/50 bg-secondary/30"><CardHeader><CardTitle className={heading}>{t('More destination details are being prepared', 'Informasi destinasi sedang dilengkapi')}</CardTitle></CardHeader><CardContent><p className="text-sm leading-6 text-muted-foreground">{t('The supplied report does not cover this destination. We have kept the original research in the project data and are showing only the location details available from its map link here.', 'Laporan yang diberikan belum membahas destinasi ini. Riset lama tetap tersimpan dalam data proyek; halaman ini hanya menampilkan lokasi dari tautan peta.')}</p></CardContent></Card>

  return <div className="mt-10 space-y-10">
    <section><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-primary">{t('Destination profile', 'Profil destinasi')}</p><h2 className={`${heading} mt-3 text-2xl`}>{t('What is this place?', 'Mengenal tempat ini')}</h2><p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{loc(place.bio)}</p>{place.aliases?.length > 0 && <p className="mt-3 text-sm text-muted-foreground"><strong>{t('Also known as', 'Nama lain')}: </strong>{place.aliases.join(', ')}</p>}</section>
    <section className="grid gap-5 md:grid-cols-2"><div><h2 className={`${heading} text-2xl`}>{t('Why it matters', 'Peran dan ajaran')}</h2><p className="mt-3 leading-7 text-muted-foreground">{loc(place.role)}</p></div><div><h2 className={`${heading} text-2xl`}>{t('Burial site', 'Lokasi makam')}</h2><p className="mt-3 leading-7 text-muted-foreground">{loc(place.burial)}</p></div></section>
    <section><h2 className={`${heading} text-2xl`}>{t('Nearby places and attractions', 'Daya tarik dan wisata terdekat')}</h2><ul className="mt-4 grid gap-3 sm:grid-cols-2">{list([...(place.attractions || []), ...(place.nearby || [])])}</ul></section>
    <section className="grid gap-8 md:grid-cols-2"><div><h2 className={`${heading} text-2xl`}>{t('Local food', 'Kuliner setempat')}</h2><ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">{list(place.foodSpecialties || [])}</ul>{relatedFood.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{relatedFood.map((item: any) => <Link key={item.id} to="/culinary" className="rounded-full bg-secondary px-3 py-2 text-xs font-medium text-primary">{loc(item.name)}</Link>)}</div>}</div><div><h2 className={`${heading} text-2xl`}>{t('Souvenirs and crafts', 'Oleh-oleh dan kerajinan')}</h2><ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">{list(place.souvenirs || [])}</ul>{relatedProducts.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{relatedProducts.map((item: any) => <Link key={item.id} to="/products" className="rounded-full bg-secondary px-3 py-2 text-xs font-medium text-primary">{loc(item.name)}</Link>)}</div>}</div>{place.id === 'sunan-bonang' && <p className="text-xs leading-5 text-muted-foreground md:col-span-2">{t('Choose a trusted seller for legen; product quality may vary.', 'Pilih penjual legen yang tepercaya karena kualitas produk dapat berbeda.')}</p>}</section>
    {place.gallery?.length > 0 && <section><h2 className={`${heading} text-2xl`}>{t('Photo archive', 'Arsip foto')}</h2><div className="mt-4 grid gap-4 sm:grid-cols-2">{place.gallery.map((path: string) => <ManifestPhoto key={path} path={path} className="aspect-[4/3] rounded-2xl bg-[#493326]" />)}</div></section>}
    {place.references?.length > 0 && <section><h2 className={`${heading} text-xl`}>{t('Sources listed in the supplied report', 'Sumber yang tercantum dalam laporan')}</h2><ul className="mt-3 space-y-2 text-xs leading-5 text-muted-foreground">{place.references.map((source: string) => <li key={source}>{source}</li>)}</ul></section>}
  </div>
}
