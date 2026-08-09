import { STATS } from '../data/site.js'
import Reveal from './Reveal.jsx'

// Kennzahlen-Leiste. Auf Mobile 2 Spalten, ab sm 4 Spalten – durch feine
// Linien getrennt statt Karten, passend zum redaktionellen Stil.
export default function Stats({ light = false }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4">
      {STATS.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 80}
          className={`border-t px-2 py-8 ${
            light ? 'border-white/15' : 'border-line'
          } ${i % 2 === 1 ? 'border-l' : ''} sm:border-l sm:first:border-l-0`}
        >
          <div
            className={`font-display text-4xl font-semibold tracking-tight sm:text-5xl ${
              light ? 'text-paper' : 'text-ink'
            }`}
          >
            {s.value}
          </div>
          <div className={`mt-2 text-sm ${light ? 'text-paper/60' : 'text-muted'}`}>{s.label}</div>
        </Reveal>
      ))}
    </div>
  )
}
