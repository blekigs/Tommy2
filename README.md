# Holz- & Elektrobau Schröder — Website (Paket L, Preview)

Editorial, handwerklich-premium gestaltete Website für einen Handwerksbetrieb,
der **Holzbau** und **Elektroinstallation** aus einer Hand anbietet.

> **Status:** Preview / Vorschau. Alle mit `[PLATZHALTER]` markierten Angaben
> (Adresse, Telefon, E-Mail, Öffnungszeiten, WhatsApp, Social, Logo, Rechtstexte)
> werden vor dem Livegang durch die echten Daten ersetzt.

## Stack

- **React 18** + **React Router 6** (echte Unterseiten, saubere URLs)
- **Vite 5** (Dev-Server & Build)
- **Tailwind CSS 3** (Design-Tokens zentral in `tailwind.config.js`)

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # Produktions-Build nach dist/
npm run preview  # gebauten Build lokal testen
```

## Design-System

| Rolle        | Wert |
|--------------|------|
| Papier-Grund | `#F2EDE3` |
| Tinte        | `#15181E` |
| Marineblau (Leitfarbe) | `#0B1C34` |
| Blau (interaktiv)      | `#1D5AAE` |
| Ember (Akzent)         | `#DE6032` |
| Display-Font | **Clash Display** (Fontshare) |
| Body-Font    | **Libre Franklin** (Google Fonts) |
| Label-Font   | **JetBrains Mono** (Google Fonts) |

## Seiten

`/` Startseite · `/ueber-uns` · `/leistungen` (Tabs Holzbau/Elektrobau + Preisliste)
· `/galerie` (Tabs Holzbau/Elektro/Referenzen) · `/kontakt` (Formular, Karte, WhatsApp, Social)
· `/impressum` · `/datenschutz` · `/agb`

## Wichtige Platzhalter

- **Logo:** `src/components/Logo.jsx` — typografische Wortmarke, leicht gegen
  ein `<img src="/logo.svg">` austauschbar.
- **Stammdaten:** `src/data/site.js` → `COMPANY` (Adresse, Telefon, E-Mail,
  WhatsApp, Öffnungszeiten, Social).
- **Google Maps:** `src/pages/Kontakt.jsx` — für die finale Version den offiziellen
  „Karte einbetten"-iframe von Google Maps (mit echter Adresse) einsetzen.
- **Bilder:** aktuell kuratierte Unsplash-Motive (Holzbau/Elektro), später gegen
  eigene Projektfotos tauschen (`IMAGES` in `src/data/site.js`).

## Mobile-First

Das Layout ist ab 375 px entworfen: Touch-Ziele ≥ 44 px, iOS-Safe-Areas
(`viewport-fit=cover` + `env(safe-area-inset-*)`), Inputs 16 px (kein Zoom-on-focus),
kein horizontaler Overflow, lazy geladene responsive Bilder, `prefers-reduced-motion`
wird respektiert.

## Bewusst NICHT enthalten (laut Auftrag)

Keine Terminbuchung, kein SEO-Meta/JSON-LD (Phase 2), kein Shop/Login/Blog/Newsletter,
keine Mehrsprachigkeit.
