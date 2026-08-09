import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

import Home from './pages/Home.jsx'
import UeberUns from './pages/UeberUns.jsx'
import Leistungen from './pages/Leistungen.jsx'
import Galerie from './pages/Galerie.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Legal from './pages/Legal.jsx'

// Springt bei jedem Seitenwechsel nach oben und setzt den Fokus auf <main>
// (Barrierefreiheit: Screenreader beginnen am neuen Seiteninhalt).
function RouteChangeHandler() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const main = document.getElementById('main')
    if (main) main.focus({ preventScroll: true })
  }, [pathname])
  return null
}

export default function App() {
  return (
    // .grain legt die feine Film-Textur über die gesamte Seite
    <div className="grain flex min-h-dvh flex-col">
      {/* Skip-Link für Tastatur-Nutzer */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-white"
      >
        Zum Inhalt springen
      </a>

      <RouteChangeHandler />
      <Header />

      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Legal doc="impressum" />} />
          <Route path="/datenschutz" element={<Legal doc="datenschutz" />} />
          <Route path="/agb" element={<Legal doc="agb" />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
