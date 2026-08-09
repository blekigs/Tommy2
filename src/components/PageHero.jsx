import Reveal from './Reveal.jsx'

// Kompakter Kopfbereich für die Unterseiten (nicht die Startseite).
// Dunkler Grund mit Eyebrow + Titel + kurzem Intro. Bewusst schlicht,
// damit der Seiteninhalt darunter die Hauptrolle spielt.
export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="bg-navy pb-14 pt-28 sm:pb-20 sm:pt-36" style={{ paddingTop: 'max(7rem, calc(env(safe-area-inset-top) + 6rem))' }}>
      <div className="wrap">
        <Reveal>
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h1 className="mt-4 max-w-4xl font-display text-[2.4rem] font-semibold leading-[1.02] tracking-tight text-paper sm:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">{intro}</p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
