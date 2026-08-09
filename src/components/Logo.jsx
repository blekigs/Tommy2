// LOGO-PLATZHALTER — leicht austauschbar.
// Das echte Logo folgt später; bis dahin eine typografische Wortmarke mit
// zwei Punkten (Holz = Ember, Elektro = Blau). Zum Ersetzen einfach das
// innere JSX gegen ein <img src="/logo.svg" …/> tauschen.
export default function Logo({ light = false, className = '' }) {
  const ink = light ? 'text-paper' : 'text-ink'
  return (
    <span
      className={`inline-flex items-baseline gap-2 ${className}`}
      aria-label="Holz- & Elektrobau Schröder"
      data-placeholder="logo"
    >
      {/* Marker-Punkte stehen für die zwei Gewerke */}
      <span className="flex items-center gap-1" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-ember" />
        <span className="h-2.5 w-2.5 rounded-full bg-blue" />
      </span>
      <span className="font-display text-[1.2rem] font-semibold leading-none tracking-tight">
        <span className="text-ember">Holz-</span>
        <span className={ink}> &amp; </span>
        <span className={light ? 'text-blue-bright' : 'text-blue'}>Elektrobau</span>
        <span className={`ml-1 ${ink}`}>Schröder</span>
      </span>
    </span>
  )
}
