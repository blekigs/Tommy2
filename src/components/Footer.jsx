import { Link } from 'react-router-dom'
import { NAV, COMPANY } from '../data/site.js'
import Logo from './Logo.jsx'

// Vier-Spalten-Footer auf dunklem Grund. Enthält Marke (mit Logo-Platzhalter),
// Navigation, Kontakt und die Rechtslinks Impressum / Datenschutz / AGB.
export default function Footer() {
  const year = 2026 // fixes Jahr, damit die Preview deterministisch bleibt

  return (
    <footer className="mt-24 bg-navy text-paper/80">
      <div className="wrap grid gap-12 py-16 md:grid-cols-4">
        {/* Marke */}
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/55">
            Holzbau und Elektroinstallation aus einer Hand – meisterlich,
            regional und termintreu.
          </p>
          <div className="mt-6 flex gap-3">
            {COMPANY.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper/70 transition hover:border-blue-bright hover:text-blue-bright"
              >
                <span className="font-mono text-xs">{s.label.slice(0, 2)}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer-Navigation">
          <h3 className="eyebrow eyebrow--light mb-4">Seiten</h3>
          <ul className="space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-paper/70 transition hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kontakt */}
        <div>
          <h3 className="eyebrow eyebrow--light mb-4">Kontakt</h3>
          <address className="space-y-3 text-sm not-italic text-paper/70">
            <p>
              {COMPANY.address.street}
              <br />
              {COMPANY.address.city}
            </p>
            <p>
              <a href={COMPANY.phoneHref} className="hover:text-paper">
                {COMPANY.phone}
              </a>
            </p>
            <p>
              <a href={COMPANY.emailHref} className="hover:text-paper">
                {COMPANY.email}
              </a>
            </p>
          </address>
        </div>

        {/* Öffnungszeiten */}
        <div>
          <h3 className="eyebrow eyebrow--light mb-4">Öffnungszeiten</h3>
          <ul className="space-y-2 text-sm text-paper/70">
            {COMPANY.hours.map((h) => (
              <li key={h.d} className="flex justify-between gap-4">
                <span>{h.d}</span>
                <span className="text-paper/50">{h.h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Rechtszeile */}
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col items-start justify-between gap-4 py-6 text-xs text-paper/50 sm:flex-row sm:items-center">
          <p>
            © {year} {COMPANY.name}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/impressum" className="hover:text-paper">Impressum</Link>
            </li>
            <li>
              <Link to="/datenschutz" className="hover:text-paper">Datenschutz</Link>
            </li>
            <li>
              <Link to="/agb" className="hover:text-paper">AGB</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
