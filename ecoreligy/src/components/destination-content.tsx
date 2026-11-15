import * as React from 'react'
import { Link } from '@tanstack/react-router'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ManifestPhoto } from '@/components/manifest-photo'
import { loc } from '@/data'

const heading = 'font-display tracking-tight'
const labelFallback = { id: 'Informasi belum tersedia. Silakan konfirmasi kepada pengelola sebelum berkunjung.', en: 'Information is not available. Please confirm with site management before visiting.' }

function itemText(value: any) {
  if (typeof value === 'string') return value
  return loc(value) || ''
}

function ContentCards({ items, kind, t }: { items: any[]; kind: 'food' | 'product'; t: (en: string, id: string) => string }) {
  if (!items.length) return <p className="mt-4 rounded-xl border border-dashed border-border p-4 text-sm leading-6 text-muted-foreground">{loc(labelFallback)}</p>
  return <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{items.map((item) => <Dialog key={item.id}>
    <Card className="overflow-hidden border-border/80 bg-card">
      <div className="relative aspect-[1.35] bg-secondary"><ManifestPhoto path={item.cover} className="absolute inset-0 size-full" illustration={!!item.illustration} /></div>
      <CardContent className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-primary">{item.regency || item.region || t('Regional entry', 'Catatan wilayah')}</p>
        <h3 className="mt-2 font-display text-xl leading-tight">{item.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">{itemText(item.tagline) || itemText(item.history) || t('Details are being completed.', 'Rincian sedang dilengkapi.')}</p>
        {item.relevance && <p className="mt-2 text-xs leading-5 text-muted-foreground">{itemText(item.relevance)}</p>}
        <DialogTrigger asChild><button className="mt-3 inline-flex min-h-11 items-center rounded-lg text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{t('View details', 'Lihat detail')}</button></DialogTrigger>
      </CardContent>
    </Card>
    <DialogContent className="max-h-[92vh] w-[min(94vw,760px)] p-0">
      <div className="relative aspect-[16/9] bg-secondary"><ManifestPhoto path={item.cover} className="absolute inset-0 size-full" illustration={!!item.illustration} /></div>
      <div className="p-6 pt-5">
        <DialogTitle className={`${heading} pr-10 text-2xl`}>{item.name}</DialogTitle>
        <DialogDescription className="mt-1">{item.regency || item.region || t('Regional item', 'Produk wilayah')} · {kind === 'food' ? t('Culinary', 'Kuliner') : t('Craft and local product', 'Kerajinan dan produk lokal')}</DialogDescription>
        <p className="mt-4 text-sm leading-6">{itemText(item.history) || itemText(item.tagline)}</p>
        {item.process && <p className="mt-3 text-sm leading-6 text-muted-foreground">{itemText(item.process)}</p>}
        {item.relevance && <p className="mt-3 text-sm leading-6 text-muted-foreground">{itemText(item.relevance)}</p>}
        {(item.imageSource || item.sourceUrl) && <p className="mt-4 border-t border-border pt-3 text-xs leading-5 text-muted-foreground">{item.imageSource && <span>{t('Image credit: ', 'Atribusi gambar: ')}{item.imageSource}</span>}{item.sourceUrl && <a className="mt-1 block text-primary underline underline-offset-2" href={item.sourceUrl} target="_blank" rel="noreferrer">{t('Open content source', 'Buka sumber informasi')}</a>}</p>}
        {item.verification?.note && <p className="mt-3 text-xs leading-5 text-muted-foreground">{itemText(item.verification.note)}</p>}
        {kind === 'food' ? <Link to="/culinary" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-primary">{t('Browse culinary directory', 'Jelajahi direktori kuliner')}</Link> : <Link to="/products" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-primary">{t('Browse products directory', 'Jelajahi direktori produk')}</Link>}
      </div>
    </DialogContent>
  </Dialog>)}</div>
}

export function DestinationContent({ place, t }: { place: any; t: (en: string, id: string) => string }) {
  const relatedFood = (place.nearbyCulinary || []).map((id: string) => (place._culinary || []).find((item: any) => item.id === id)).filter(Boolean)
  const relatedProducts = (place.nearbyProducts || []).map((id: string) => (place._products || []).find((item: any) => item.id === id)).filter(Boolean)
  const seen = new Set<string>()
  const attractions = [...(place.attractions || []), ...(place.nearby || [])].filter((item: any) => {
    const label = itemText(item).trim().toLocaleLowerCase()
    if (!label || label.includes('informasi sedang dilengkapi')) return false
    if (seen.has(label)) return false
    seen.add(label)
    return true
  })
  const gallery = (place.gallery || []).map((item: any) => typeof item === 'string' ? { path: item, title: item } : item).filter((item: any) => item?.path)
  const [activePhoto, setActivePhoto] = React.useState<any>(null)

  return <div className="mt-10 space-y-12">
    <section>
      <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-primary">{t('Destination profile', 'Profil destinasi')}</p>
      <h2 className={`${heading} mt-3 text-2xl`}>{t('The place and its context', 'Mengenal tempat dan konteksnya')}</h2>
      <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{itemText(place.bio) || loc(labelFallback)}</p>
      {place.aliases?.length > 0 && <p className="mt-3 text-sm text-muted-foreground"><strong>{t('Also known as', 'Nama lain')}: </strong>{place.aliases.join(', ')}</p>}
    </section>
    <section className="grid gap-6 md:grid-cols-2"><div><h2 className={`${heading} text-2xl`}>{t('Role and teachings', 'Peran dan ajaran')}</h2><p className="mt-3 leading-7 text-muted-foreground">{itemText(place.role) || loc(labelFallback)}</p></div><div><h2 className={`${heading} text-2xl`}>{t('Burial site', 'Lokasi makam')}</h2><p className="mt-3 leading-7 text-muted-foreground">{itemText(place.burial) || loc(labelFallback)}</p></div></section>
    <section><h2 className={`${heading} text-2xl`}>{t('Nearby places and attractions', 'Daya tarik dan wisata terdekat')}</h2>{attractions.length ? <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">{attractions.map((item: any, index: number) => <li key={`${index}-${itemText(item)}`} className="border-b border-border pb-3 text-sm leading-6 text-muted-foreground">{itemText(item)}</li>)}</ul> : <p className="mt-3 text-sm text-muted-foreground">{loc(labelFallback)}</p>}</section>
    <section><h2 className={`${heading} text-2xl`}>{t('Local food and culinary heritage', 'Kuliner khas wilayah')}</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{t('Entries distinguish regional food context from food sold at the pilgrimage site. Ask local vendors about ingredients and availability.', 'Entri membedakan kuliner wilayah dari makanan yang dijual di lokasi ziarah. Tanyakan bahan dan ketersediaan kepada penjual.')}</p><ContentCards items={relatedFood} kind="food" t={t} /></section>
    <section><h2 className={`${heading} text-2xl`}>{t('Souvenirs, crafts, and local products', 'Oleh-oleh, kerajinan, dan produk lokal')}</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{t('Products are regional unless a seller near the site is specifically identified. Prices and stock are not assumed.', 'Produk merupakan produk wilayah kecuali ada keterangan penjual di dekat situs. Harga dan stok tidak diasumsikan.')}</p><ContentCards items={relatedProducts} kind="product" t={t} /></section>
    <section>
      <h2 className={`${heading} text-2xl`}>{t('Photo archive', 'Arsip foto')}</h2>
      {gallery.length ? <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{gallery.map((photo: any, index: number) => <button type="button" key={`${photo.path}-${index}`} onClick={() => setActivePhoto(photo)} className="group min-h-11 rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ManifestPhoto path={photo.path} showCredit={false} className="aspect-[4/3] w-full rounded-xl bg-secondary transition-transform group-hover:scale-[1.01]" /><span className="mt-2 block text-xs leading-5 text-muted-foreground">{photo.title || t('Site documentation', 'Dokumentasi situs')}</span></button>)}</div> : <div className="heritage-placeholder mt-4 flex min-h-48 items-end rounded-2xl p-5" role="img" aria-label={t('Photo documentation is being completed', 'Dokumentasi foto sedang dilengkapi')}><span className="text-sm font-semibold text-white">{t('Photo documentation is being completed', 'Dokumentasi foto sedang dilengkapi')}</span></div>}
      <Dialog open={!!activePhoto} onOpenChange={(open) => { if (!open) setActivePhoto(null) }}><DialogContent className="w-[min(96vw,1100px)] overflow-hidden p-0"><DialogTitle className="sr-only">{activePhoto?.title || t('Photo archive', 'Arsip foto')}</DialogTitle><div className="relative flex max-h-[85vh] min-h-60 items-center justify-center bg-black"><ManifestPhoto path={activePhoto?.path} className="max-h-[80vh] w-full" /></div><DialogDescription className="px-5 pb-5 text-sm">{activePhoto?.caption || activePhoto?.title}</DialogDescription></DialogContent></Dialog>
    </section>
    {place.references?.length > 0 && <section><h2 className={`${heading} text-xl`}>{t('Sources and further reading', 'Sumber dan bacaan lanjutan')}</h2><ul className="mt-3 space-y-2 text-xs leading-5 text-muted-foreground">{place.references.map((source: any, index: number) => typeof source === 'string' ? <li key={`${index}-${source}`}>{source}</li> : <li key={source.url || index}><a className="text-primary underline underline-offset-2" href={source.url} target="_blank" rel="noreferrer">{source.title || source.publisher || source.url}</a>{source.publisher && <span> · {source.publisher}</span>}{source.supports && <span> — {source.supports}</span>}</li>)}</ul></section>}
  </div>
}
