import { Link } from 'react-router-dom'
import { img, IMAGES, SERVICES } from '../data/site.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Stats from '../components/Stats.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Home() {
  return (
    <>
      {/* ============================================================
          HERO — bewusst asymmetrisch: Text linksbündig, Bilder rechts
          versetzt und überlappend (break-the-grid), nicht zentriert.
          Mobile-first: erst Headline, dann Bildstapel, dann CTAs.
          ============================================================ */}
      <section className="relative overflow-hidden bg-navy text-paper">
        {/* dezenter Farb-Glow: blau links, ember rechts – setzt die Leitfarben */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-blue/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-ember/10 blur-[120px]" />

        <div
          className="wrap grid items-center gap-10 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24"
          style={{ paddingTop: 'max(7.5rem, calc(env(safe-area-inset-top) + 6.5rem))' }}
        >
          {/* Text (min-w-0 erlaubt Umbruch langer Wörter statt Überlauf) */}
          <div className="min-w-0 lg:col-span-6">
            <Reveal>
              <span className="eyebrow eyebrow--light">Professionalität · Tischlerei &amp; Elektrobau</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[2.05rem] font-semibold leading-[1.0] tracking-tight [hyphens:auto] xs:text-[2.5rem] sm:text-6xl sm:leading-[0.98] lg:text-[4.2rem]">
                Zwei Gewerke.
                <br />
                <span className="text-blue-bright">Ein Ansprechpartner.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/70">
                Holz und Strom aus einer Hand: reparieren, montieren,
                installieren – termintreu, sauber und aus Ihrer Region.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/kontakt" className="btn-primary">
                  Projekt anfragen
                </Link>
                <Link to="/leistungen" className="btn border border-white/25 text-paper hover:bg-white/10">
                  Leistungen ansehen
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Bildstapel – zwei überlappende Bilder + Index-Label */}
          <div className="min-w-0 lg:col-span-6">
            <Reveal delay={200} className="relative mx-auto max-w-md lg:mr-0 lg:max-w-none">
              {/* Hauptbild: moderner Holzbau, hohes Format */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={img(IMAGES.timberHouse, 900)}
                  alt="Moderner Holzbau in der Abenddämmerung"
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchpriority="high"
                  width="900"
                  height="1125"
                />
              </div>

              {/* überlappendes Detailbild unten links – bricht bewusst das Raster */}
              <div className="absolute -bottom-8 -left-6 hidden w-40 overflow-hidden rounded-xl border-4 border-navy sm:block lg:-left-10 lg:w-52">
                <img
                  src={img(IMAGES.electricianWiring, 500)}
                  alt="Elektroinstallation im Detail"
                  className="aspect-square h-full w-full object-cover"
                  loading="lazy"
                  width="500"
                  height="500"
                />
              </div>

              {/* Index-Label rechts oben – redaktionelle Note */}
              <div className="absolute -right-3 top-6 rounded-full bg-ember px-4 py-2 font-mono text-xs uppercase tracking-wide text-white shadow-lg lg:right-4">
                Holz + Strom
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          VORSTELLUNG — versetzte 2-Spalten: Bild links, Text rechts
          ============================================================ */}
      <section className="wrap grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        {/* Bild mit überlappendem Zahlen-Badge */}
        <Reveal className="relative order-1">
          <div className="aspect-[5/6] overflow-hidden rounded-2xl sm:aspect-[4/5]">
            <img
              src={img(IMAGES.carpenterSaw, 800)}
              alt="Tür-Reparatur an der Werkbank in der Werkstatt"
              className="h-full w-full object-cover"
              loading="lazy"
              width="800"
              height="1000"
            />
          </div>
        </Reveal>

        <div className="order-2">
          <SectionHeading
            eyebrow="Wer wir sind"
            title="Ein Betrieb, der Holz und Strom zusammendenkt"
            intro="Kein Koordinieren zwischen zwei Gewerken: Holz und Strom kommen bei uns aus einem Team – abgestimmt, termintreu, aus einer Hand."
          />
          <Reveal delay={100}>
            <blockquote className="mt-8 border-l-2 border-ember pl-5 text-lg italic text-ink/80">
              „Wir übergeben kein Gewerk an der Schnittstelle – wir übernehmen
              die Verantwortung für das Ganze."
            </blockquote>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Professionelle Montage', 'Festpreisgarantie', 'Termintreu', 'Regional'].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-line bg-paper-2/50 px-4 py-2 text-sm text-ink/75"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={220}>
            <Link to="/ueber-uns" className="mt-8 inline-flex items-center gap-2 font-medium text-blue-deep hover:gap-3 transition-all">
              Mehr über uns
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Kennzahlen */}
      <section className="wrap">
        <Stats />
      </section>

      {/* ============================================================
          LEISTUNGS-TEASER — alternierende Bild/Text-Reihen
          ============================================================ */}
      <section className="wrap py-20 sm:py-28">
        <SectionHeading
          eyebrow="Was wir können"
          title="Zwei Gewerke, tief beherrscht"
          intro="Tischlerei und Elektro – zwei Handwerke, ein eingespieltes Team, das Hand in Hand arbeitet."
        />

        <div className="mt-16 space-y-16 sm:space-y-24">
          {[
            {
              data: SERVICES.holzbau,
              image: IMAGES.insulation,
              index: '01',
              reverse: false,
            },
            {
              data: SERVICES.elektrobau,
              image: IMAGES.electricianPortrait,
              index: '02',
              reverse: true,
            },
          ].map((row) => (
            <Reveal
              key={row.data.key}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              {/* Bild – wechselt je Reihe die Seite */}
              <div className={`${row.reverse ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                  <img
                    src={img(row.image, 900)}
                    alt={row.data.tab}
                    className="h-full w-full object-cover transition-transform duration-700 ease-soft hover:scale-[1.04]"
                    loading="lazy"
                    width="900"
                    height="620"
                  />
                  <span className="absolute left-4 top-4 font-mono text-6xl font-medium text-white/80 mix-blend-overlay">
                    {row.index}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className={`${row.reverse ? 'lg:order-1' : ''}`}>
                <span className="eyebrow">{`Gewerk ${row.index}`}</span>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  {row.data.tab}
                </h3>
                <p className="mt-4 text-muted leading-relaxed">{row.data.lead}</p>
                <ul className="mt-6 space-y-2">
                  {row.data.items.map((it) => (
                    <li key={it.title} className="flex items-center gap-3 text-ink/80">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                      {it.title}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/leistungen"
                  className="mt-7 inline-flex items-center gap-2 font-medium text-blue-deep hover:gap-3 transition-all"
                >
                  Details &amp; Preise
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Kundenstimmen */}
      <Testimonials />

      {/* Abschluss-CTA */}
      <CtaBand />
    </>
  )
}
