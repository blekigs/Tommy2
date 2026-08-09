import { TESTIMONIALS } from '../data/site.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

// Kundenstimmen auf dunklem Grund. Große Anführungszeichen als Display-Element,
// asymmetrische Höhenstaffelung über sm:mt für einen „gesetzten" Look.
export default function Testimonials() {
  return (
    <section className="bg-navy py-20 sm:py-28">
      <div className="wrap">
        <SectionHeading
          light
          eyebrow="Stimmen"
          title="Was Kundinnen und Kunden sagen"
          intro="Ehrliche Rückmeldungen von Kundinnen und Kunden, die Holz und Strom aus einer Hand bekommen haben."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              className={`flex flex-col rounded-2xl border border-white/10 bg-navy-2/60 p-7 ${
                i === 1 ? 'md:mt-10' : ''
              }`}
            >
              <span aria-hidden="true" className="font-display text-5xl leading-none text-blue-bright">
                &ldquo;
              </span>
              <blockquote className="mt-3 flex-1 text-paper/85 leading-relaxed">
                {t.quote}
              </blockquote>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <div className="font-medium text-paper">{t.name}</div>
                <div className="font-mono text-xs uppercase tracking-wide text-blue-bright">
                  {t.role}
                </div>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
