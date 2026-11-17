import * as React from 'react'
import {
  Link,
  Outlet,
  useNavigate,
  useRouterState,
} from '@tanstack/react-router'
import {
  Compass,
  Heart,
  Map,
  MapPin,
  Menu,
  Moon,
  ScanLine,
  Search,
  ShieldAlert,
  Sun,
  X,
} from 'lucide-react'
import { DESTINATIONS } from '@/data'
import { useApp } from '@/lib/app-context'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { GuideAssistant } from '@/components/guide-assistant'
import { BrandLogo } from '@/components/brand-logo'

const navItems = [
  ['/', 'Home', 'Beranda'],
  ['/destinations', 'Destinations', 'Destinasi'],
  ['/map', 'Cultural map', 'Peta Budaya'],
  ['/ar', 'AR Navigation', 'Navigasi AR'],
  ['/visit', 'Visit info', 'Info Kunjungan'],
] as const

export function AppShell() {
  const { language, setLanguage, theme, toggleTheme, favorites } = useApp()
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [favoritesOpen, setFavoritesOpen] = React.useState(false)
  const [emergencyOpen, setEmergencyOpen] = React.useState(false)
  const [heroPassed, setHeroPassed] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const navigate = useNavigate()
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })
  const isHomepage = pathname === '/'
  React.useEffect(() => {
    if (!isHomepage) {
      setHeroPassed(false)
      return
    }
    const hero = document.getElementById('home-hero')
    if (!hero || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => setHeroPassed(!entry.isIntersecting),
      { threshold: 0.01 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [isHomepage])
  React.useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    )
      return
    const sections = document.querySelectorAll<HTMLElement>(
      '#main section:not(:first-child)',
    )
    sections.forEach((section) => section.classList.add('reveal-pending'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-ready')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])
  React.useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])
  const t = (en: string, id: string) => (language === 'id' ? id : en)
  const favoriteCount = Object.values(favorites).reduce(
    (sum, group) => sum + Object.keys(group).length,
    0,
  )
  const searchResults = React.useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return []
    const destinations = DESTINATIONS.filter((item) =>
      `${item.name} ${item.city} ${item.province}`
        .toLowerCase()
        .includes(needle),
    ).slice(0, 5)
    return destinations.map((item) => ({
      label: item.name,
      to: `/destinations/${item.id}`,
    }))
  }, [query])
  const go = (to: string) => {
    setSearchOpen(false)
    setMenuOpen(false)
    navigate({ to: to as never })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only z-[100] rounded-lg bg-card p-3 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {t('Skip to content', 'Lewati ke konten')}
      </a>
      <header
        className={`${isHomepage ? 'fixed inset-x-0 top-0' : 'sticky top-0'} z-40 border-b transition-[background-color,border-color,box-shadow,color] duration-500 ${isHomepage && !heroPassed ? 'border-transparent bg-transparent text-white' : 'border-border/80 bg-background/90 text-foreground shadow-sm backdrop-blur-xl'}`}
      >
        <div className="page-shell flex h-[72px] items-center justify-between gap-4">
          <Link
            to="/"
            className="brand-home-link flex shrink-0 items-center"
            aria-label="EcoReligi Wali Songo home"
          >
            <BrandLogo size="sm" />
          </Link>
          <nav
            className="hidden items-center gap-3 2xl:flex"
            aria-label={t('Main navigation', 'Navigasi utama')}
          >
            {navItems.map(([to, en, id]) => (
              <Link
                key={to}
                to={to as never}
                className={`nav-link relative whitespace-nowrap text-[13px] font-medium transition-colors ${to === '/ar' ? (isHomepage && !heroPassed ? 'border border-[#C4A36A]/75 bg-[#C4A36A]/15 px-3 py-2 text-[#F0D9A7] hover:bg-[#C4A36A]/25' : 'bg-primary px-3 py-2 text-primary-foreground hover:brightness-95') : isHomepage && !heroPassed ? 'text-white/80 hover:text-white' : 'text-muted-foreground hover:text-primary'}`}
                activeProps={{
                  className:
                    'nav-link relative whitespace-nowrap text-[13px] font-semibold text-primary',
                }}
              >
                {t(en, id)}
              </Link>
            ))}
          </nav>
          <div
            className={`flex shrink-0 items-center gap-1 ${isHomepage && !heroPassed ? '[&_button]:text-white [&_a]:text-white' : ''}`}
          >
            <Button
              variant="ghost"
              size="icon"
              className={`header-utility ${isHomepage && !heroPassed ? 'hover:bg-white/15' : ''}`}
              aria-label={t('Search', 'Cari')}
              onClick={() => setSearchOpen(true)}
            >
              <Search />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`header-utility relative ${isHomepage && !heroPassed ? 'hover:bg-white/15' : ''}`}
              aria-label={t('Open saved favorites', 'Buka destinasi favorit')}
              onClick={() => setFavoritesOpen(true)}
            >
              <Heart className="size-4" />
              {favoriteCount > 0 && (
                <span className="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                  {favoriteCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`header-utility hidden xl:inline-flex ${isHomepage && !heroPassed ? 'hover:bg-white/15' : ''}`}
              aria-label={t('Emergency information', 'Informasi darurat')}
              onClick={() => setEmergencyOpen(true)}
            >
              <ShieldAlert />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`header-utility ${isHomepage && !heroPassed ? 'hover:bg-white/15' : ''}`}
              aria-label={
                theme === 'dark'
                  ? t('Switch to light theme', 'Gunakan tema terang')
                  : t('Switch to dark theme', 'Gunakan tema gelap')
              }
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`header-utility px-3 ${isHomepage && !heroPassed ? 'hover:bg-white/15' : ''}`}
              aria-label={t('Change language', 'Ganti bahasa')}
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
            >
              {language.toUpperCase()}
            </Button>
            <Button
              variant={isHomepage && !heroPassed ? 'ghost' : 'outline'}
              size="icon"
              className={`2xl:hidden ${isHomepage && !heroPassed ? 'hover:bg-white/15' : ''}`}
              aria-label={
                menuOpen
                  ? t('Close menu', 'Tutup menu')
                  : t('Open menu', 'Buka menu')
              }
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-drawer 2xl:hidden"
            aria-label={t('Mobile navigation', 'Navigasi seluler')}
          >
            <div className="mobile-drawer-inner">
              <p className="mobile-drawer-kicker">
                {t('EXPLORE WITH CARE', 'JELAJAHI DENGAN BIJAK')}
              </p>
              <div className="mobile-drawer-links">
                {navItems.map(([to, en, id], index) => (
                  <Link
                    key={to}
                    to={to as never}
                    onClick={() => setMenuOpen(false)}
                    className="mobile-drawer-link"
                    activeProps={{ className: 'mobile-drawer-link is-active' }}
                  >
                    <span className="mobile-drawer-index">0{index + 1}</span>
                    <span>{t(en, id)}</span>
                    <span className="mobile-drawer-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                ))}
              </div>
              <div
                className="mobile-drawer-tools"
                aria-label={t(
                  'Site preferences and tools',
                  'Preferensi dan alat situs',
                )}
              >
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false)
                    setSearchOpen(true)
                  }}
                >
                  <Search />
                  {t('Search', 'Cari')}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false)
                    setFavoritesOpen(true)
                  }}
                >
                  <Heart />
                  {t('Saved', 'Favorit')}
                  {favoriteCount > 0 && (
                    <span className="mobile-favorite-count">
                      {favoriteCount}
                    </span>
                  )}
                </button>
                <button type="button" onClick={toggleTheme}>
                  {theme === 'dark' ? <Sun /> : <Moon />}
                  {theme === 'dark' ? t('Light', 'Terang') : t('Dark', 'Gelap')}
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                >
                  <span className="mobile-language-mark">
                    {language.toUpperCase()}
                  </span>
                  {t('Language', 'Bahasa')}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false)
                    setEmergencyOpen(true)
                  }}
                >
                  <ShieldAlert />
                  {t('Emergency', 'Darurat')}
                </button>
              </div>
            </div>
          </nav>
        )}
      </header>

      <main id="main" key={pathname} className="route-enter pb-20 md:pb-0">
        <Outlet />
      </main>

      <nav
        className="mobile-action-bar fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(25,34,28,.08)] backdrop-blur-xl md:hidden"
        aria-label={t('Quick actions', 'Aksi cepat')}
      >
        <div className="page-shell grid grid-cols-5 gap-1 py-2">
          {navItems.map(([to, en, id]) => (
            <Link
              key={to}
              to={to as never}
              className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-medium text-muted-foreground hover:bg-secondary hover:text-primary"
              activeProps={{
                className:
                  'flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold text-primary',
              }}
            >
              {to === '/' ? (
                <BrandLogo size="sm" symbolOnly />
              ) : to === '/map' ? (
                <Map className="size-4" />
              ) : to === '/ar' ? (
                <ScanLine className="size-4" />
              ) : to === '/destinations' ? (
                <Compass className="size-4" />
              ) : (
                <MapPin className="size-4" />
              )}
              {t(en, id)}
            </Link>
          ))}
        </div>
      </nav>

      <footer className="mt-20 bg-[#242521] text-[#F5F0E6]">
        <div className="page-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="brand-footer-link inline-flex rounded-sm"
              aria-label="EcoReligi Wali Songo home"
            >
              <BrandLogo size="lg" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
              {t(
                'Explore Wali Songo heritage, local traditions, and the living cultural landscapes of Java.',
                'Jelajahi warisan Wali Songo, tradisi lokal, dan bentang budaya Jawa yang terus hidup.',
              )}
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#C6A76B]">
              Explore
            </p>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              {navItems.slice(0, 4).map(([to, en, id]) => (
                <Link key={to} to={to as never} className="hover:text-white">
                  {t(en, id)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#C6A76B]">
              {t('Make it meaningful', 'Jelajah bermakna')}
            </p>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <Link to={'/ar'}>
                {t('AR Heritage Experience', 'Pengalaman AR Warisan')}
              </Link>
              <Link to={'/visit'}>
                {t('Visit information', 'Info kunjungan')}
              </Link>
              <p>© 2026 EcoReligi Wali Songo</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="mobile-assistant-offset">
        <GuideAssistant />
      </div>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent>
          <DialogTitle className="font-display text-2xl">
            {t('Find a destination', 'Cari destinasi')}
          </DialogTitle>
          <DialogDescription className="mb-4 text-sm text-muted-foreground">
            {t(
              'Search Wali Songo heritage destinations.',
              'Cari destinasi warisan Wali Songo.',
            )}
          </DialogDescription>
          <Input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t(
              'Try “Sunan Giri” or “Gresik”',
              'Coba “Sunan Giri” atau “Gresik”',
            )}
          />
          <div className="mt-4 max-h-[45vh] overflow-y-auto">
            {searchResults.map((result) => (
              <button
                key={result.to}
                onClick={() => go(result.to)}
                className="flex min-h-12 w-full items-center rounded-xl px-3 text-left text-sm hover:bg-secondary"
              >
                {result.label}
              </button>
            ))}
            {query && searchResults.length === 0 && (
              <p className="p-4 text-sm text-muted-foreground">
                {t('No matching places yet.', 'Belum ada tempat yang cocok.')}
              </p>
            )}
            {!query && (
              <Badge variant="secondary">
                {t('Search across Java', 'Jelajahi se-Jawa')}
              </Badge>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={favoritesOpen} onOpenChange={setFavoritesOpen}>
        <DialogContent>
          <DialogTitle className="font-display text-2xl">
            {t('Your saved places', 'Destinasi favorit')}
          </DialogTitle>
          <DialogDescription className="mb-4 text-sm text-muted-foreground">
            {t('Saved locally on this device.', 'Tersimpan di perangkat ini.')}
          </DialogDescription>
          <div className="space-y-2">
            {Object.entries(favorites).flatMap(([type, group]) =>
              Object.entries(group).map(([id, meta]) => {
                const title = String(meta.title || id)
                const to =
                  type === 'destination'
                    ? `/destinations/${id}`
                    : type === 'journey'
                      ? `/journeys/${id}`
                      : '/destinations'
                return (
                  <button
                    key={`${type}-${id}`}
                    onClick={() => {
                      setFavoritesOpen(false)
                      go(to)
                    }}
                    className="flex min-h-12 w-full items-center justify-between rounded-xl px-3 text-left text-sm hover:bg-secondary"
                  >
                    <span>{title}</span>
                    <span className="text-xs text-muted-foreground">
                      {type}
                    </span>
                  </button>
                )
              }),
            )}
            {favoriteCount === 0 && (
              <p className="rounded-xl bg-secondary/60 p-4 text-sm text-muted-foreground">
                {t(
                  'Save a place with the heart button and it will appear here.',
                  'Simpan situs dengan ikon hati untuk melihatnya di sini.',
                )}
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={emergencyOpen} onOpenChange={setEmergencyOpen}>
        <DialogContent>
          <DialogTitle className="flex items-center gap-2 font-display text-2xl">
            <ShieldAlert className="size-5 text-destructive" />
            {t('Emergency information', 'Informasi darurat')}
          </DialogTitle>
          <DialogDescription className="mt-2 leading-6">
            {t(
              'No destination-specific emergency facility has been verified for this guide. For urgent help, contact official local emergency services or ask the site manager.',
              'Belum ada fasilitas darurat khusus destinasi yang terverifikasi di panduan ini. Untuk bantuan mendesak, hubungi layanan darurat resmi setempat atau pengelola situs.',
            )}
          </DialogDescription>
          <a
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/search/?api=1&query=rumah+sakit+terdekat"
          >
            {t(
              'Search nearby health facilities',
              'Cari fasilitas kesehatan terdekat',
            )}
          </a>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            {t(
              'Map results are provided by Google and are not verified by EcoReligi. Check availability with local authorities.',
              'Hasil peta disediakan Google dan tidak diverifikasi EcoReligi. Pastikan ketersediaannya kepada pihak setempat.',
            )}
          </p>
        </DialogContent>
      </Dialog>
    </div>
  )
}
