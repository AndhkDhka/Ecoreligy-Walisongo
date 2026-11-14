import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useApp } from '@/lib/app-context'

export function FavoriteButton({ type, id, label, meta }: { type: string; id: string; label: string; meta?: Record<string, unknown> }) {
  const { isFavorite, toggleFavorite, language } = useApp()
  const active = isFavorite(type, id)
  return <Button type="button" variant="outline" size="icon" className="rounded-full bg-card/90" aria-label={active ? (language === 'id' ? `Hapus ${label} dari favorit` : `Remove ${label} from favorites`) : (language === 'id' ? `Simpan ${label} ke favorit` : `Save ${label} to favorites`)} aria-pressed={active} onClick={(event) => { event.preventDefault(); event.stopPropagation(); toggleFavorite(type, id, { title: label, ...(meta || {}) }) }}><Heart className={active ? 'fill-current text-rose-700' : ''} /></Button>
}
