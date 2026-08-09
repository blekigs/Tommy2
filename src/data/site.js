// ============================================================
//  ZENTRALE INHALTE – Holz- & Elektrobau Schröder
//  Alle Texte, Bilder, Leistungen, Preise, Stimmen an einem Ort.
//  Platzhalter sind klar mit [PLATZHALTER] markiert und leicht zu ersetzen.
// ============================================================

// Lokale, KI-generierte Bilder (personenfrei). Werden von Vite gebündelt und
// beim Single-File-Build inline eingebettet, damit die Seite überall läuft.
import timberHouse from '../assets/timberHouse.jpg';
import carpenterSaw from '../assets/carpenterSaw.jpg';
import electricianWiring from '../assets/electricianWiring.jpg';
import electricianPortrait from '../assets/electricianPortrait.jpg';
import schematic from '../assets/schematic.jpg';
import blueprint from '../assets/blueprint.jpg';
import drillWall from '../assets/drillWall.jpg';
import insulation from '../assets/insulation.jpg';
import toolsRack from '../assets/toolsRack.jpg';
import interior from '../assets/interior.jpg';
import handshake from '../assets/handshake.jpg';
import rooftops from '../assets/rooftops.jpg';

// Helper behält seine Signatur (id, w, h) – die Größenargumente werden bei
// lokalen Assets ignoriert; zurückgegeben wird direkt die gebündelte URL.
export const img = (id) => id;

export const IMAGES = {
  timberHouse,          // moderner Holzbau (Hero)
  carpenterSaw,         // Tischlerei: Tür-Reparatur an der Werkbank
  electricianWiring,    // Elektro: Abzweigdose verdrahtet
  electricianPortrait,  // Elektro: beschrifteter Verteiler
  schematic,            // Elektro-Schaltplan + Messtechnik
  blueprint,            // Bauplanung / Grundriss
  drillWall,            // Akkuschrauber Detail
  insulation,           // Dämmung / Trockenbau
  toolsRack,            // Werkzeugwand
  interior,             // heller Raum mit Fenster & Tür
  handshake,            // Schlüssel + Vertrag (Übergabe)
  rooftops,             // Elektro-Installation (Referenz)
};

// --- Firmen-Stammdaten (Platzhalter, später einsetzen) ---
export const COMPANY = {
  name: 'Holz- & Elektrobau Schröder',
  short: 'Schröder',
  claim: 'Zwei Gewerke. Ein Handschlag.',
  address: {
    street: '[PLATZHALTER: Straße & Hausnr.]',
    city: '[PLATZHALTER: PLZ Ort]',
  },
  phone: '[PLATZHALTER: Telefon]',
  phoneHref: 'tel:+490000000000',
  email: '[PLATZHALTER: E-Mail]',
  emailHref: 'mailto:kontakt@example.de',
  whatsapp: '[PLATZHALTER: WhatsApp]',
  whatsappHref: 'https://wa.me/490000000000', // [PLATZHALTER: echte Nummer]
  hours: [
    { d: 'Montag – Donnerstag', h: '07:00 – 17:00 Uhr' },
    { d: 'Freitag', h: '07:00 – 14:00 Uhr' },
    { d: 'Samstag', h: 'nach Vereinbarung' },
    { d: 'Sonntag', h: 'geschlossen' },
  ],
  social: [
    { label: 'Instagram', href: '#', handle: '[PLATZHALTER]' },
    { label: 'Facebook', href: '#', handle: '[PLATZHALTER]' },
  ],
  foundedText: 'Familienbetrieb in dritter Generation', // [PLATZHALTER: anpassen]
};

// --- Navigation ---
export const NAV = [
  { to: '/', label: 'Start' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/kontakt', label: 'Kontakt' },
];

// --- Kennzahlen (Stats) ---
export const STATS = [
  { value: '2', label: 'Gewerke, ein Team' },
  { value: '3000+', label: 'Kunden' },
];

// --- Leistungen: zwei Kategorien (Tabs) mit je eigenem Bild ---
export const SERVICES = {
  holzbau: {
    key: 'holzbau',
    tab: 'Tischlerei',
    lead: 'Wenn Holz klemmt, hakt oder raus muss: Wir reparieren, setzen instand und tauschen Fenster & Türen – sauber und zuverlässig.',
    items: [
      {
        title: 'Reparaturen',
        image: IMAGES.carpenterSaw,
        text: 'Klemmende Türen, lose Verbindungen, Schäden am Holz – wir bringen alles wieder in Form.',
        points: ['Möbel & Einbauten', 'Holzschäden', 'Nachjustierung'],
      },
      {
        title: 'Instandsetzung',
        image: IMAGES.insulation,
        text: 'Wir erhalten, was bleiben soll: fachgerecht aufgearbeitet und langlebig ausgebessert.',
        points: ['Aufarbeitung', 'Ausbesserung', 'Oberflächen'],
      },
      {
        title: 'Fenster & Türen',
        image: IMAGES.interior,
        text: 'Einbauen, tauschen, abdichten – für Fenster und Türen, die schließen wie am ersten Tag.',
        points: ['Einbau & Austausch', 'Abdichtung', 'Beschläge'],
      },
    ],
  },
  elektrobau: {
    key: 'elektrobau',
    tab: 'Elektrobau',
    lead: 'Strom, der einfach läuft: Wir reparieren, warten und installieren Ihre Elektrik – normgerecht und ohne Umwege.',
    items: [
      {
        title: 'Reparatur',
        image: IMAGES.electricianWiring,
        text: 'Steckdose tot, Sicherung raus, Kabelbruch? Wir finden den Fehler und beheben ihn – zügig und sauber.',
        points: ['Fehlersuche', 'Störungsdienst', 'Instandsetzung'],
      },
      {
        title: 'Wartung',
        image: IMAGES.schematic,
        text: 'Regelmäßig geprüft, sicher betrieben – wir halten Ihre Elektrik zuverlässig in Schuss.',
        points: ['E-Check', 'Prüfprotokoll', 'Sicherheit'],
      },
      {
        title: 'Elektroinstallation',
        image: IMAGES.electricianPortrait,
        text: 'Von der Steckdose bis zur Verteilung – saubere Installation für Neubau und Sanierung, normgerecht nach VDE.',
        points: ['Neubau & Sanierung', 'Verteilerbau', 'VDE-Norm'],
      },
    ],
  },
};

// --- Preisliste / Leistungspakete ---
export const PACKAGES = [
  {
    name: 'Aufmaß & Beratung',
    price: 'ab 0 €',
    note: 'Erstberatung vor Ort',
    features: [
      'Unverbindliches Vor-Ort-Gespräch',
      'Bestandsaufnahme & Aufmaß',
      'Transparentes Festpreis-Angebot',
    ],
    accent: false,
  },
  {
    name: 'Handwerk aus einer Hand',
    price: 'nach Aufwand',
    note: 'Holz + Elektro kombiniert',
    features: [
      'Ein Ansprechpartner für beide Gewerke',
      'Abgestimmte Terminplanung',
      'Festpreisgarantie nach Angebot',
      'Gewährleistung nach VOB',
    ],
    accent: true, // hervorgehoben
  },
  {
    name: 'Wartung & Service',
    price: 'ab 89 €',
    note: 'pro Einsatz zzgl. Material',
    features: [
      'E-Check & Prüfprotokoll',
      'Holz-Inspektion (Feuchte, Statik)',
      'Priorisierter Notdienst',
    ],
    accent: false,
  },
];

// Hinweis unter der Preisliste
export const PRICE_NOTE =
  'Alle Preise sind Richtwerte und verstehen sich als Orientierung. Ihr verbindliches Festpreis-Angebot erstellen wir nach dem kostenlosen Aufmaß vor Ort.';

// --- Kundenstimmen ---
export const TESTIMONIALS = [
  {
    quote:
      'Klemmende Tür und ein toter Stromkreis – an einem Termin erledigt. Freundlich, pünktlich und zum fairen Preis.',
    name: 'Familie Berger',
    role: 'Privatkunde',
  },
  {
    quote:
      'Alte Fenster raus, neue rein und die Elektrik gleich mit gemacht. Alles sauber, ohne Stress und wie besprochen.',
    name: 'S. Hoffmann',
    role: 'Wohnung',
  },
  {
    quote:
      'Schnell da, Fehler gefunden, repariert. Genau so stellt man sich einen zuverlässigen Handwerker vor.',
    name: 'M. Krüger',
    role: 'Einfamilienhaus',
  },
];

// --- Galerie: Kategorien mit Tabs ---
export const GALLERY = {
  holzbau: {
    tab: 'Tischlerei',
    images: [
      { id: IMAGES.carpenterSaw, alt: 'Tür-Reparatur an der Werkbank' },
      { id: IMAGES.interior, alt: 'Heller Raum mit neuen Fenstern und Tür' },
      { id: IMAGES.insulation, alt: 'Dämm- und Trockenbauarbeiten' },
      { id: IMAGES.blueprint, alt: 'Bauplanung / Grundriss' },
      { id: IMAGES.toolsRack, alt: 'Werkzeugwand in der Werkstatt' },
    ],
  },
  elektro: {
    tab: 'Elektro',
    images: [
      { id: IMAGES.electricianWiring, alt: 'Verdrahtete Abzweigdose' },
      { id: IMAGES.electricianPortrait, alt: 'Beschrifteter Sicherungskasten' },
      { id: IMAGES.schematic, alt: 'Elektro-Schaltplan mit Messtechnik' },
      { id: IMAGES.drillWall, alt: 'Akkuschrauber bei der Montage' },
    ],
  },
  referenzen: {
    tab: 'Referenzen',
    images: [
      { id: IMAGES.interior, alt: 'Fertiger Raum mit neuen Fenstern und Tür' },
      { id: IMAGES.rooftops, alt: 'Saubere Elektroinstallation an der Wand' },
      { id: IMAGES.timberHouse, alt: 'Modernes Holzhaus in der Abenddämmerung' },
      { id: IMAGES.handshake, alt: 'Schlüsselübergabe mit unterschriebenem Vertrag' },
    ],
  },
};
