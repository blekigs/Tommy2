import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { NAV } from '../data/site.js'
import Logo from './Logo.jsx'

// Sticky-Header: startet transparent auf dem Hero und wird beim Scrollen
// zu einem hellen Papier-Balken mit Hairline. Mobile: Fullscreen-Overlay.
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Scroll-Zustand für den Hintergrundwechsel
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menü bei Seitenwechsel schließen
  useEffect(() => setOpen(false), [pathname])

  // Body-Scroll sperren, solange das Overlay offen ist
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  // Jede Seite startet mit einem dunklen Hero (Startseite bzw. PageHero).
  // Solange nicht gescrollt wurde, liegt der Header darüber → helle Schrift.
  // Nach dem Scrollen wechselt er auf hellen Papier-Grund mit dunkler Schrift.
  const overHero = !scrolled
  const barBg = scrolled
    ? 'bg-paper/90 backdrop-blur-md border-line'
    : 'bg-transparent border-transparent'
  const linkColor = overHero ? 'text-paper/80 hover:text-paper' : 'text-ink/70 hover:text-ink'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${barBg}`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="wrap flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Link to="/" aria-label="Zur Startseite" className="shrink-0">
          {/* Logo invertiert, solange über dem dunklen Hero */}
          <Logo light={overHero} />
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative py-1 text-[0.95rem] font-medium transition-colors ${linkColor} ${
                  isActive ? 'after:w-full' : 'after:w-0'
                } after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-ember after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/kontakt" className="btn-primary !min-h-[44px] px-5">
            Angebot anfragen
          </Link>
        </nav>

        {/* Mobile: Hamburger (≥44px Touch-Ziel) */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Menü öffnen"
          aria-expanded={open}
          className={`flex h-11 w-11 items-center justify-center md:hidden ${
            overHero ? 'text-paper' : 'text-ink'
          }`}
        >
          <span className="sr-only">Menü</span>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Fullscreen-Overlay-Menü (Mobile) */}
      <div
        className={`fixed inset-0 z-50 bg-navy text-paper transition-[opacity,visibility] duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigationsmenü"
      >
        <div className="wrap flex h-16 items-center justify-between">
          <Logo light />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Menü schließen"
            className="flex h-11 w-11 items-center justify-center text-paper"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="wrap mt-6 flex flex-col" aria-label="Mobile Navigation">
          {NAV.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `border-b border-white/10 py-5 font-display text-3xl transition-colors ${
                  isActive ? 'text-blue-bright' : 'text-paper'
                }`
              }
              // gestaffelte Eingangsanimation der Menüpunkte
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(12px)',
                transition: `opacity .4s ease, transform .4s cubic-bezier(0.22,1,0.36,1)`,
                transitionDelay: `${open ? 120 + i * 60 : 0}ms`,
              }}
            >
              <span className="mr-3 font-mono text-xs text-blue-bright">0{i + 1}</span>
              {item.label}
            </NavLink>
          ))}
          <Link to="/kontakt" className="btn-on-dark mt-8 w-full">
            Angebot anfragen
          </Link>
        </nav>
      </div>
    </header>
  )
}
