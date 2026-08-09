import { useState } from 'react'
import { img, SERVICES, PACKAGES, PRICE_NOTE } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'

const TABS = [SERVICES.holzbau, SERVICES.elektrobau]

export default function Leistungen() {
  const [active, setActive] = useState('holzbau')
  const current = SERVICES[active]

  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Alles fürs Bauen — in Holz und in Strom"
        intro="Wählen Sie ein Gewerk. Jede Leistung führen wir mit eigenem Team, eigenem Werkzeug und klarer Festpreis-Logik aus."
      />

      {/* ===================== TABS ===================== */}
      <section className="wrap py-16 sm:py-24">
        {/* Tab-Leiste (Radio-Semantik für Barrierefreiheit) */}
        <div
          role="tablist"
          aria-label="Gewerke"
          className="inline-flex rounded-full border border-line bg-paper-2/40 p-1"
        >
          {TABS.map((t) => {
            const isActive = active === t.key
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.key)}
                className={`min-h-[44px] rounded-full px-6 text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'bg-navy text-paper' : 'text-ink/60 hover:text-ink'
                }`}
              >
                {t.tab}
              </button>
            )
          })}
        </div>

        {/* Intro zum aktiven Gewerk */}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{current.lead}</p>

        {/* Leistungs-Einträge – jede Karte mit eigenem Foto, versetzt gestapelt.
            key={active} erzwingt ein sauberes Re-Mount + Reveal beim Tabwechsel. */}
        <div key={active} className="mt-12 grid gap-8 md:grid-cols-3">
          {current.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper ${
                i === 1 ? 'md:mt-8' : ''
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img(item.image, 700)}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.05]"
                  loading="lazy"
                  width="700"
                  height="525"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full bg-blue/10 px-3 py-1 font-mono text-xs text-blue-deep"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== PREISLISTE ===================== */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="wrap">
          <SectionHeading
            light
            eyebrow="Leistungspakete"
            title="Transparente Preise, keine Überraschungen"
            intro="Drei klare Einstiege. Was Sie am Ende zahlen, steht vor Baubeginn im Festpreis-Angebot."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 90}
                className={`flex flex-col rounded-2xl p-7 ${
                  p.accent
                    ? 'bg-paper text-ink ring-2 ring-ember md:-mt-4'
                    : 'border border-white/10 bg-navy-2/50 text-paper'
                }`}
              >
                {p.accent && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-ember px-3 py-1 font-mono text-xs uppercase tracking-wide text-white">
                    Empfohlen
                  </span>
                )}
                <h3 className={`font-display text-2xl font-semibold ${p.accent ? 'text-ink' : 'text-paper'}`}>
                  {p.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className={`font-display text-4xl font-semibold ${p.accent ? 'text-blue' : 'text-blue-bright'}`}>
                    {p.price}
                  </span>
                </div>
                <p className={`mt-1 text-sm ${p.accent ? 'text-muted' : 'text-paper/50'}`}>{p.note}</p>

                <ul className={`mt-6 space-y-3 text-sm ${p.accent ? 'text-ink/80' : 'text-paper/75'}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                        <path d="M5 13l4 4L19 7" stroke={p.accent ? '#1D5AAE' : '#4E92DA'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-paper/50">{PRICE_NOTE}</p>
        </div>
      </section>

      <CtaBand
        title="Sagen Sie uns, was ansteht."
        text="Beschreiben Sie Ihr Projekt – wir melden uns mit einem konkreten Vorschlag."
      />
    </>
  )
}
