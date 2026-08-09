import { useState } from 'react'
import { img, GALLERY } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'

const KEYS = ['holzbau', 'elektro', 'referenzen']

// Feste, aber unregelmäßige Rasterzuweisung → editoriale Anmutung statt
// gleichförmigem 3er-Grid. Erstes Bild groß, danach wechselnde Spannen.
const SPAN = [
  'sm:col-span-2 sm:row-span-2',
  'sm:col-span-1',
  'sm:col-span-1',
  'sm:col-span-1 sm:row-span-2',
  'sm:col-span-1',
  'sm:col-span-2',
]

export default function Galerie() {
  const [active, setActive] = useState('holzbau')
  const set = GALLERY[active]

  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Ausgeführte Arbeiten, ehrlich fotografiert"
        intro="Ein Einblick in Baustellen und fertige Projekte – nach Gewerk und Referenzen sortiert."
      />

      <section className="wrap py-16 sm:py-24">
        {/* Tab-Leiste */}
        <div role="tablist" aria-label="Galerie-Kategorien" className="flex flex-wrap gap-2">
          {KEYS.map((k) => {
            const isActive = active === k
            return (
              <button
                key={k}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(k)}
                className={`min-h-[44px] rounded-full border px-5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'border-navy bg-navy text-paper'
                    : 'border-line text-ink/60 hover:border-ink/40 hover:text-ink'
                }`}
              >
                {GALLERY[k].tab}
              </button>
            )
          })}
        </div>

        {/* Editoriales Grid. key={active} → Reveal-Neustart beim Wechsel. */}
        <div
          key={active}
          className="mt-10 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[200px]"
        >
          {set.images.map((im, i) => (
            <Reveal
              key={`${im.id}-${i}`}
              delay={i * 70}
              className={`group relative overflow-hidden rounded-xl ${SPAN[i % SPAN.length]}`}
            >
              <img
                src={img(im.id, 900)}
                alt={im.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.06]"
                loading="lazy"
              />
              {/* dezenter Navy-Verlauf + Bildunterschrift bei Hover/Focus */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-3 left-4 translate-y-2 font-mono text-xs uppercase tracking-wide text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {im.alt}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Ihr Projekt könnte das nächste sein."
        text="Erzählen Sie uns davon – wir zeigen Ihnen gern vergleichbare Referenzen aus der Region."
      />
    </>
  )
}
