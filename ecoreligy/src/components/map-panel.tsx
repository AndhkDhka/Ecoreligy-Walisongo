import * as React from 'react'
import 'leaflet/dist/leaflet.css'
import {
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet'
import { ChevronUp, MapPin, X } from 'lucide-react'
import {
  DESTINATIONS,
  directionsUrlFor,
  googleMapsUrlFor,
  mapPosition,
} from '@/data'
import { useApp } from '@/lib/app-context'
import { Link } from '@tanstack/react-router'
import L from 'leaflet'

const userIcon = L.divIcon({
  className: 'user-location-marker',
  html: '<span></span>',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
})
function MapFocus({ position }: { position: [number, number] | null }) {
  const map = useMap()
  React.useEffect(() => {
    if (position)
      map.flyTo(position, Math.max(map.getZoom(), 12), { duration: 0.7 })
  }, [map, position])
  return null
}

export function MapPanel({ className = '' }: { className?: string }) {
  const { language } = useApp()
  const t = (en: string, id: string) => (language === 'id' ? id : en)
  const [kind, setKind] = React.useState<'all' | 'walisongo' | 'other'>(
    'walisongo',
  )
  const [userPosition, setUserPosition] = React.useState<
    [number, number] | null
  >(null)
  const [focusedPosition, setFocusedPosition] = React.useState<
    [number, number] | null
  >(null)
  const [locationMessage, setLocationMessage] = React.useState('')
  const [placesOpen, setPlacesOpen] = React.useState(false)
  const listTriggerRef = React.useRef<HTMLButtonElement>(null)
  const listCloseRef = React.useRef<HTMLButtonElement>(null)
  const places = DESTINATIONS.map((place) => ({
    place,
    position: mapPosition(place),
  })).filter(
    (item) =>
      item.position &&
      (kind === 'all' ||
        (kind === 'walisongo'
          ? item.place.kind === 'walisongo'
          : item.place.kind !== 'walisongo')),
  )

  React.useEffect(() => {
    if (!placesOpen) return
    listCloseRef.current?.focus()
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPlacesOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      listTriggerRef.current?.focus()
    }
  }, [placesOpen])

  return (
    <div
      className={`map-panel-shell overflow-hidden rounded-3xl border border-border bg-card shadow-sm ${className}`}
    >
      <div className="map-panel-toolbar flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
        <p className="text-sm font-semibold">
          {t('Nine Wali Songo destinations', 'Sembilan destinasi Wali Songo')}
        </p>
        <div className="map-panel-tools flex flex-wrap items-center gap-2">
          <div
            className="map-panel-filters flex flex-wrap gap-2"
            aria-label={t(
              'Filter map by heritage type',
              'Filter peta berdasarkan jenis warisan',
            )}
          >
            {(['walisongo', 'all', 'other'] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={kind === value}
                onClick={() => setKind(value)}
                className={`min-h-11 rounded-full px-3 text-xs font-semibold transition-colors ${kind === value ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-accent/30'}`}
              >
                {value === 'all'
                  ? t('All heritage', 'Semua warisan')
                  : value === 'walisongo'
                    ? 'Wali Songo'
                    : t('Other heritage', 'Warisan lainnya')}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="min-h-11 rounded-full border border-border px-3 text-xs font-semibold"
            onClick={() => {
              setLocationMessage(
                t('Requesting location permission…', 'Meminta izin lokasi…'),
              )
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  setUserPosition([
                    position.coords.latitude,
                    position.coords.longitude,
                  ])
                  setLocationMessage(
                    t(
                      'Your device location is shown. Destination arrival is not verified.',
                      'Lokasi perangkat ditampilkan. Kedatangan di destinasi tidak diverifikasi.',
                    ),
                  )
                },
                () =>
                  setLocationMessage(
                    t(
                      'Location permission or position unavailable.',
                      'Izin atau posisi lokasi tidak tersedia.',
                    ),
                  ),
                { enableHighAccuracy: true, timeout: 12000 },
              )
            }}
          >
            {t('Show my location', 'Lokasi saya')}
          </button>
          <p role="status" className="w-full text-xs text-muted-foreground">
            {locationMessage}
          </p>
        </div>
      </div>
      <div className="map-canvas-wrap">
        <MapContainer
          center={[-7.1, 110.5]}
          zoom={6}
          scrollWheelZoom={false}
          className="map-canvas h-[420px] w-full"
          aria-label={t(
            'Map of Wali Songo heritage places across Java',
            'Peta situs warisan Wali Songo di Jawa',
          )}
        >
          <MapFocus position={focusedPosition ?? userPosition} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {places.map(({ place, position }) => (
            <CircleMarker
              key={place.id}
              center={position}
              radius={8}
              pathOptions={{
                color: '#344C3B',
                fillColor: '#C6A76B',
                fillOpacity: 0.95,
                weight: 3,
              }}
            >
              <Popup>
                <div className="min-w-44">
                  <strong>{place.name}</strong>
                  <p className="mt-1 text-xs">
                    {place.city}, {place.province}
                    <br />
                    {place.coordsStatus === 'verified'
                      ? t('Verified location', 'Lokasi terverifikasi')
                      : t('Approximate area', 'Perkiraan wilayah')}
                  </p>
                  <div className="mt-2 grid gap-1">
                    <Link
                      className="font-semibold text-emerald-800 underline"
                      to="/destinations/$id"
                      params={{ id: place.id }}
                    >
                      {t('Destination details', 'Detail destinasi')}
                    </Link>
                    <Link
                      className="font-semibold text-emerald-800 underline"
                      to="/guided/$id"
                      params={{ id: place.id }}
                    >
                      {t('Start Guided', 'Mulai Guided')}
                    </Link>
                    <a
                      className="font-semibold text-emerald-800 underline"
                      href={googleMapsUrlFor(place)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('Open in Google Maps', 'Buka di Google Maps')}
                    </a>
                    <a
                      className="font-semibold text-emerald-800 underline"
                      href={directionsUrlFor(place)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('Get directions', 'Petunjuk arah')}
                    </a>
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          ))}
          {userPosition && (
            <Marker position={userPosition} icon={userIcon}>
              <Popup>
                {t(
                  'Your device location (not a verified check-in)',
                  'Lokasi perangkat (bukan check-in terverifikasi)',
                )}
              </Popup>
            </Marker>
          )}
        </MapContainer>
        <button
          ref={listTriggerRef}
          type="button"
          className="map-places-trigger"
          aria-expanded={placesOpen}
          onClick={() => setPlacesOpen(true)}
        >
          <MapPin aria-hidden="true" />
          {t('Browse places', 'Daftar lokasi')}
          <ChevronUp aria-hidden="true" />
        </button>
      </div>
      {placesOpen && (
        <div
          className="map-places-backdrop"
          role="presentation"
          onClick={() => setPlacesOpen(false)}
        >
          <section
            className="map-places-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="map-places-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="map-sheet-grabber" />
            <header>
              <div>
                <p className="ar-eyebrow text-primary">
                  {t('CULTURAL ATLAS', 'PETA BUDAYA')}
                </p>
                <h2 id="map-places-title">
                  {t('Places on this map', 'Lokasi pada peta')}
                </h2>
              </div>
              <button
                ref={listCloseRef}
                type="button"
                aria-label={t('Close location list', 'Tutup daftar lokasi')}
                onClick={() => setPlacesOpen(false)}
              >
                <X />
              </button>
            </header>
            <div className="map-places-list">
              {places.map(({ place, position }) => (
                <button
                  type="button"
                  key={place.id}
                  onClick={() => {
                    setFocusedPosition(position)
                    setPlacesOpen(false)
                  }}
                >
                  <span>
                    <strong>{place.name}</strong>
                    <small>
                      {place.city}, {place.province} ·{' '}
                      {place.coordsStatus === 'verified'
                        ? t('Verified location', 'Lokasi terverifikasi')
                        : t('Approximate area', 'Perkiraan wilayah')}
                    </small>
                  </span>
                  <MapPin aria-hidden="true" />
                </button>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
