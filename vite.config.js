import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Vite-Konfiguration: React-Plugin + fester Dev-Port für die Preview.
// viteSingleFile bündelt beim Build ALLES (JS + CSS) inline in eine einzige
// dist/index.html. Diese lässt sich per Doppelklick öffnen (file://) – die
// sonst übliche CORS-Blockade von externen Modul-Skripten entfällt dadurch.
export default defineConfig({
  // Relative Pfade als zusätzliche Absicherung für file:// und Static-Hosts.
  base: './',
  plugins: [react(), viteSingleFile()],
  server: {
    host: true,
    port: 5173,
  },
})
