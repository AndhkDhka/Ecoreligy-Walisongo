import * as React from 'react'
import { setDataLanguage } from '@/data'

type Language = 'id' | 'en'
type Theme = 'light' | 'dark'
type Favorites = Record<string, Record<string, Record<string, unknown>>>
type FavoriteStorage = { data: Favorites; readable: boolean; corruptRaw: string | null }
type AppContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  theme: Theme
  toggleTheme: () => void
  favorites: Favorites
  toggleFavorite: (type: string, id: string, meta?: Record<string, unknown>) => void
  isFavorite: (type: string, id: string) => boolean
}

const AppContext = React.createContext<AppContextValue | null>(null)
const safeWrite = (key: string, value: unknown) => {
  try {
    const serialized = JSON.stringify(value)
    localStorage.setItem(key, serialized)
    return localStorage.getItem(key) === serialized
  } catch { return false }
}
function readFavorites(): FavoriteStorage {
  try {
    const raw = localStorage.getItem('ejg_favorites')
    if (!raw) return { data: {}, readable: true, corruptRaw: null }
    const parsed = JSON.parse(raw)
    if (parsed === null) return { data: {}, readable: true, corruptRaw: null }
    if (typeof parsed === 'object' && !Array.isArray(parsed) && Object.values(parsed).every((group) => group && typeof group === 'object' && !Array.isArray(group))) return { data: parsed, readable: true, corruptRaw: null }
    return { data: {}, readable: true, corruptRaw: raw }
  } catch { return { data: {}, readable: false, corruptRaw: null } }
}
function saveFavorites(next: Favorites, corruptRaw: string | null) {
  try {
    if (corruptRaw !== null) {
      let backupKey = 'ejg_favorites_backup_corrupt'
      const existing = localStorage.getItem(backupKey)
      if (existing !== null && existing !== corruptRaw) backupKey += `_${Date.now()}`
      localStorage.setItem(backupKey, corruptRaw)
      if (localStorage.getItem(backupKey) !== corruptRaw) return false
    }
    return safeWrite('ejg_favorites', next)
  } catch { return false }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>(() => {
    try { return localStorage.getItem('ejg_lang') === 'en' ? 'en' : 'id' } catch { return 'id' }
  })
  const [theme, setTheme] = React.useState<Theme>(() => {
    try { return localStorage.getItem('ejg_theme') === 'dark' ? 'dark' : 'light' } catch { return 'light' }
  })
  const [favoriteStorage, setFavoriteStorage] = React.useState<FavoriteStorage>(readFavorites)
  const favorites = favoriteStorage.data
  setDataLanguage(language)

  React.useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.dataset.theme = theme
    safeWrite('ejg_theme', theme)
  }, [theme])
  React.useLayoutEffect(() => { document.documentElement.lang = language }, [language])
  React.useEffect(() => { safeWrite('ejg_lang', language) }, [language])

  const toggleFavorite = React.useCallback((type: string, id: string, meta: Record<string, unknown> = {}) => {
    if (!favoriteStorage.readable) return
    const next = { ...favoriteStorage.data, [type]: { ...favoriteStorage.data[type] } }
    if (Object.hasOwn(next[type], id)) delete next[type][id]
    else next[type][id] = { ...meta, savedAt: new Date().toISOString() }
    if (saveFavorites(next, favoriteStorage.corruptRaw)) setFavoriteStorage({ data: next, readable: true, corruptRaw: null })
  }, [favoriteStorage])

  const value = React.useMemo<AppContextValue>(() => ({
    language,
    setLanguage: (next) => setLanguageState(next),
    theme,
    toggleTheme: () => setTheme((current) => current === 'dark' ? 'light' : 'dark'),
    favorites,
    toggleFavorite,
    isFavorite: (type, id) => {
      const group = Reflect.get(favorites, type) as Record<string, unknown> | undefined
      return Boolean(group && Object.hasOwn(group, id))
    },
  }), [language, theme, favorites, toggleFavorite])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = React.useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
