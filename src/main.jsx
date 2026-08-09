import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Einstiegspunkt. HashRouter (URLs mit /#/leistungen) funktioniert ohne
// Server-Konfiguration – auch per Doppelklick auf dist/index.html (file://)
// und auf jedem Static-Host. Für eine Domain mit sauberen URLs kann später
// wieder auf BrowserRouter umgestellt werden.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
