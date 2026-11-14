import * as React from 'react'
import 'leaflet/dist/leaflet.css'
import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet'
import { DESTINATIONS, directionsUrlFor, googleMapsUrlFor, mapPosition } from '@/data'
import { useApp } from '@/lib/app-context'

export function MapPanel() {
  const { language } = useApp()
  const t = (en: string, id: string) => language === 'id' ? id : en
  const [kind, setKind] = React.useState<'all' | 'walisongo' | 'other'>('all')
  const places = DESTINATIONS.map((place) => ({ place, position: mapPosition(place) })).filter((item) => item.position && (kind === 'all' || (kind === 'walisongo' ? item.place.kind === 'walisongo' : item.place.kind !== 'walisongo')))
  return <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5"><p className="text-sm font-semibold">{t('Cultural map', 'Peta budaya')}</p><div className="flex flex-wrap gap-2" aria-label={t('Filter map by heritage type', 'Filter peta berdasarkan jenis warisan')}>{(['all','walisongo','other'] as const).map((value) => <button key={value} type="button" aria-pressed={kind === value} onClick={() => setKind(value)} className={`min-h-11 rounded-full px-3 text-xs font-semibold transition-colors ${kind === value ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-accent/30'}`}>{value === 'all' ? t('All heritage', 'Semua warisan') : value === 'walisongo' ? 'Wali Songo' : t('Other heritage', 'Warisan lainnya')}</button>)}</div></div>
    <MapContainer center={[-7.1, 110.5]} zoom={6} scrollWheelZoom={false} className="h-[420px] w-full" aria-label="Map of Wali Songo heritage places across Java">
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {places.map(({ place, position }) => <CircleMarker key={place.id} center={position} radius={8} pathOptions={{ color: '#344C3B', fillColor: '#C6A76B', fillOpacity: 0.95, weight: 3 }}>
        <Popup><div className="min-w-40"><strong>{place.name}</strong><p className="mb-2 mt-1 text-xs">{place.city}, {place.province}<br />{place.coordsStatus === 'verified' ? t('Verified location', 'Lokasi terverifikasi') : t('Approximate area', 'Perkiraan wilayah')}</p><div className="grid gap-1"><a className="font-semibold text-emerald-800 underline" href={googleMapsUrlFor(place)} target="_blank" rel="noreferrer">{t('Open in Google Maps', 'Buka di Google Maps')}</a><a className="font-semibold text-emerald-800 underline" href={directionsUrlFor(place)} target="_blank" rel="noreferrer">{t('Get directions', 'Petunjuk arah')}</a></div></div></Popup>
      </CircleMarker>)}
    </MapContainer>
  </div>
}
