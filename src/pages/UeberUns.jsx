import { img, IMAGES } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Stats from '../components/Stats.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'

// Werte-Prinzipien des Betriebs
const VALUES = [
  {
    t: 'Aus einer Hand',
    d: 'Tischler und Elektriker aus demselben Team. Sie koordinieren nichts – wir stimmen Holz und Strom selbst ab.',
  },
  {
    t: 'Sauber gearbeitet',
    d: 'Fachgerecht ausgeführt, ordentlich hinterlassen. Wir arbeiten so, wie wir es bei uns selbst haben wollen würden.',
  },
  {
    t: 'Termintreu',
    d: 'Zugesagter Termin, eingehaltener Termin. Verschiebt sich etwas, hören Sie es früh von uns – nicht erst hinterher.',
  },
  {
    t: 'Regional',
    d: 'Kurze Wege, feste Ansprechpartner, erreichbar wenn es klemmt. Bei Ihnen sind immer dieselben Gesichter.',
  },
]

export default function UeberUns() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Zwei Handwerke, ein Team, ein Ansprechpartner"
        intro="Holz- & Elektrobau Schröder verbindet Tischlerei und Elektro unter einem Dach. Ein Anruf, ein Termin, eine Rechnung – und ein Team, das beides sauber erledigt."
      />

      {/* Geschichte: Text + versetztes Bild */}
      <section className="wrap grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Unsere Geschichte"
            title="Vom Holz zum Strom – beides aus einer Hand"
          />
          <div className="mt-6 space-y-5 text-muted leading-relaxed">
            <p>
              Angefangen haben wir mit dem Holz: Reparaturen, Instandsetzungen,
              Fenster und Türen. Und bei fast jedem Auftrag kam dieselbe Frage –
              „Und wer kümmert sich um die Elektrik?"
            </p>
            <p>
              Statt Kundinnen und Kunden weiterzuschicken, haben wir die Elektrik
              zu unserem zweiten Handwerk gemacht. Heute erledigt Holz- &amp;
              Elektrobau Schröder beides selbst – vom klemmenden Fenster bis zur
              defekten Steckdose.
            </p>
            <p>
              Das erspart Ihnen das Koordinieren zwischen zwei Betrieben: ein
              Ansprechpartner, ein Termin, ein Ergebnis, das passt.
            </p>
          </div>
        </div>

        <Reveal className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={img(IMAGES.blueprint, 800)}
              alt="Bauplanung am Holztisch"
              className="h-full w-full object-cover"
              loading="lazy"
              width="800"
              height="1000"
            />
          </div>
          <div className="absolute -left-6 bottom-8 hidden w-44 overflow-hidden rounded-xl border-4 border-paper shadow-xl sm:block">
            <img
              src={img(IMAGES.electricianPortrait, 400)}
              alt="Beschrifteter Sicherungskasten"
              className="aspect-[4/5] h-full w-full object-cover"
              loading="lazy"
              width="400"
              height="500"
            />
          </div>
        </Reveal>
      </section>

      {/* Werte */}
      <section className="bg-paper-2/40 py-20 sm:py-28">
        <div className="wrap">
          <SectionHeading eyebrow="Haltung" title="Vier Prinzipien, nach denen wir arbeiten" />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 80} className="flex gap-5">
                <span className="font-mono text-sm text-ember">0{i + 1}</span>
                <div className="border-t border-line pt-1">
                  <h3 className="font-display text-2xl font-semibold">{v.t}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kennzahlen */}
      <section className="wrap py-20 sm:py-24">
        <Stats />
      </section>

      <CtaBand
        title="Lernen wir uns kennen."
        text="Sagen Sie uns kurz, was ansteht – wir melden uns werktags innerhalb von 24 Stunden und sagen ehrlich, was sinnvoll ist."
      />
    </>
  )
}
