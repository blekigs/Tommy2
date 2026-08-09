import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { COMPANY } from '../data/site.js'

// Wiederkehrender Handlungsaufruf am Seitenende. Ember-Akzentlinie oben,
// klarer Primär-CTA + Telefon als Sekundäroption.
export default function CtaBand({
  title = 'Zwei Gewerke, ein Ansprechpartner.',
  text = 'Lassen Sie uns Ihr Vorhaben besprechen – kostenlos, unverbindlich und vor Ort.',
}) {
  return (
    <section className="wrap py-20 sm:py-28">
      <Reveal className="relative overflow-hidden rounded-3xl bg-navy px-7 py-14 sm:px-14 sm:py-20">
        {/* dezenter Ember-Lichtschein oben rechts */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ember/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <span className="eyebrow eyebrow--light">Bereit?</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-paper/70">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/kontakt" className="btn-on-dark">
              Kostenloses Angebot
            </Link>
            <a href={COMPANY.phoneHref} className="btn border border-white/25 text-paper hover:bg-white/10">
              Anrufen
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
