/** @type {import('tailwindcss').Config} */
// Design-System als Tailwind-Tokens. Farben, Fonts, Timing und Grain-Textur
// sind hier zentral definiert, damit das ganze Projekt konsistent bleibt.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        // zusätzlicher kleiner Breakpoint für feinere Mobile-Abstufung
        xs: '475px',
      },
      colors: {
        // 5-Farben-System: Papier-Grund, Tinte, Marineblau (Leitfarbe),
        // Blau (interaktiv), Ember-Orange (Akzent) + neutrale Abstufungen.
        paper: '#F2EDE3',
        'paper-2': '#E7E0D2',
        ink: '#15181E',
        navy: '#0B1C34',
        'navy-2': '#102844',
        blue: {
          DEFAULT: '#1D5AAE', // primär interaktiv (weiße Schrift darauf)
          deep: '#17518F',
          bright: '#4E92DA', // für Akzente auf dunklem Grund
        },
        ember: {
          DEFAULT: '#DE6032',
          soft: '#E9955F',
        },
        muted: '#59626F',
        line: 'rgba(21,24,30,0.12)',
      },
      fontFamily: {
        // Display + Body + Mono — bewusst gepaart, keine verbotenen Fonts.
        display: ['"Clash Display"', 'Georgia', 'serif'],
        body: ['"Libre Franklin"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      maxWidth: {
        content: '76rem',
      },
      transitionTimingFunction: {
        // ruhiges ease-out für Eingänge (Emil-Prinzip: Enter = ease-out)
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spark: {
          '0%,100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
