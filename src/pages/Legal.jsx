import { COMPANY } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'

// Rechtstexte als Platzhalter-Gerüst. Struktur steht, Inhalte werden vom
// Kunden / Rechtsberatung final eingesetzt (klar mit [PLATZHALTER] markiert).
const DOCS = {
  impressum: {
    eyebrow: 'Rechtliches',
    title: 'Impressum',
    intro: 'Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).',
    blocks: [
      {
        h: 'Anbieter',
        p: [
          COMPANY.name,
          `${COMPANY.address.street}`,
          `${COMPANY.address.city}`,
        ],
      },
      { h: 'Vertreten durch', p: ['[PLATZHALTER: Inhaber / Geschäftsführer]'] },
      {
        h: 'Kontakt',
        p: [`Telefon: ${COMPANY.phone}`, `E-Mail: ${COMPANY.email}`],
      },
      {
        h: 'Registereintrag & Handwerksrolle',
        p: [
          'Handwerkskammer: [PLATZHALTER]',
          'Betriebs-Nr.: [PLATZHALTER]',
          'Umsatzsteuer-ID gemäß § 27a UStG: [PLATZHALTER]',
        ],
      },
      {
        h: 'Berufshaftpflicht',
        p: ['Versicherer: [PLATZHALTER]', 'Räumlicher Geltungsbereich: Deutschland'],
      },
      {
        h: 'Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)',
        p: ['[PLATZHALTER: Name & Anschrift]'],
      },
    ],
  },
  datenschutz: {
    eyebrow: 'Rechtliches',
    title: 'Datenschutzerklärung',
    intro: 'Der Schutz Ihrer Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung personenbezogener Daten gemäß DSGVO.',
    blocks: [
      {
        h: '1. Verantwortlicher',
        p: [`${COMPANY.name}, ${COMPANY.address.street}, ${COMPANY.address.city}. Kontakt: ${COMPANY.email}.`],
      },
      {
        h: '2. Erhebung beim Besuch der Website',
        p: [
          'Beim Aufruf werden technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite) durch den Hosting-Anbieter verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. [PLATZHALTER: Hosting-Anbieter ergänzen].',
        ],
      },
      {
        h: '3. Kontaktformular',
        p: [
          'Wenn Sie uns über das Formular kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald sie nicht mehr benötigt werden.',
        ],
      },
      {
        h: '4. Google Maps',
        p: [
          'Zur Anzeige unseres Standorts binden wir Google Maps ein. Dabei kann Ihre IP-Adresse an Google übertragen werden. [PLATZHALTER: Hinweis auf Google-Datenschutz ergänzen].',
        ],
      },
      {
        h: '5. Ihre Rechte',
        p: [
          'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie ein Beschwerderecht bei einer Aufsichtsbehörde.',
        ],
      },
    ],
  },
  agb: {
    eyebrow: 'Rechtliches',
    title: 'Allgemeine Geschäftsbedingungen',
    intro: 'Diese AGB gelten für alle Verträge zwischen Holz- & Elektrobau Schröder und dem Auftraggeber. [PLATZHALTER: durch Rechtsberatung final prüfen lassen].',
    blocks: [
      { h: '§ 1 Geltungsbereich', p: ['Es gelten ausschließlich diese Bedingungen. Abweichende Bedingungen des Auftraggebers werden nur bei ausdrücklicher Zustimmung Vertragsbestandteil.'] },
      { h: '§ 2 Angebot & Vertragsschluss', p: ['Unsere Angebote sind freibleibend. Der Vertrag kommt mit schriftlicher Auftragsbestätigung oder Beginn der Ausführung zustande.'] },
      { h: '§ 3 Leistungsumfang & Ausführung', p: ['Der Leistungsumfang ergibt sich aus dem Angebot. Für Bauleistungen gilt ergänzend die VOB/B, soweit vereinbart.'] },
      { h: '§ 4 Preise & Zahlung', p: ['Es gelten die im Angebot genannten Festpreise zzgl. gesetzlicher Umsatzsteuer. Zahlungen sind ohne Abzug fällig. [PLATZHALTER: Zahlungsziele ergänzen].'] },
      { h: '§ 5 Gewährleistung', p: ['Es gelten die gesetzlichen Gewährleistungsfristen bzw. die Fristen der VOB/B, soweit vereinbart.'] },
      { h: '§ 6 Haftung', p: ['Wir haften nach den gesetzlichen Bestimmungen. Für leichte Fahrlässigkeit ist die Haftung auf vertragstypische, vorhersehbare Schäden begrenzt.'] },
      { h: '§ 7 Schlussbestimmungen', p: ['Es gilt deutsches Recht. Gerichtsstand ist – soweit zulässig – der Sitz des Auftragnehmers. Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam.'] },
    ],
  },
}

export default function Legal({ doc }) {
  const d = DOCS[doc] || DOCS.impressum
  return (
    <>
      <PageHero eyebrow={d.eyebrow} title={d.title} intro={d.intro} />
      <section className="wrap max-w-3xl py-16 sm:py-24">
        <div className="space-y-10">
          {d.blocks.map((b) => (
            <div key={b.h}>
              <h2 className="font-display text-xl font-semibold text-ink">{b.h}</h2>
              <div className="mt-3 space-y-2 leading-relaxed text-muted">
                {b.p.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-14 border-t border-line pt-6 font-mono text-xs text-muted">
          Hinweis: Dieses Dokument ist ein Platzhalter-Gerüst für die Preview und
          ersetzt keine Rechtsberatung.
        </p>
      </section>
    </>
  )
}
