import { useState } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'

// Kleine Feld-Komponente mit sichtbarem Label, korrektem Input-Typ und
// Fehlerausgabe direkt unter dem Feld (Barrierefreiheit).
function Field({ id, label, type = 'text', value, onChange, error, required, as, ...rest }) {
  const Tag = as || 'input'
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink/80">
        {label} {required && <span className="text-ember">*</span>}
      </label>
      <Tag
        id={id}
        name={id}
        type={as ? undefined : type}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`w-full rounded-xl border bg-paper px-4 py-3 text-ink outline-none transition
          placeholder:text-muted/60 focus:border-blue focus:ring-2 focus:ring-blue/20
          ${error ? 'border-ember' : 'border-line'} ${as === 'textarea' ? 'min-h-[130px] resize-y' : ''}`}
        {...rest}
      />
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-ember">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Kontakt() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: 'Holzbau', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Bitte geben Sie Ihren Namen an.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Bitte eine gültige E-Mail-Adresse eingeben.'
    if (!form.message.trim()) err.message = 'Bitte beschreiben Sie kurz Ihr Anliegen.'
    return err
  }

  const submit = (e) => {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length === 0) {
      // Preview: keine echte Übertragung – Erfolgs-Zustand simulieren.
      setSent(true)
    } else {
      // Fokus aufs erste fehlerhafte Feld
      const first = document.getElementById(Object.keys(err)[0])
      if (first) first.focus()
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Reden wir über Ihr Projekt"
        intro="Ob Dachstuhl, Sanierung oder komplette Elektrik – schreiben Sie uns oder rufen Sie an. Wir melden uns werktags innerhalb von 24 Stunden."
      />

      <section className="wrap grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* ---------------- Formular ---------------- */}
        <Reveal>
          {sent ? (
            // Erfolgs-Zustand
            <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-line bg-paper-2/40 p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue/10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" stroke="#1D5AAE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="mt-6 font-display text-3xl font-semibold">Vielen Dank!</h2>
              <p className="mt-3 text-muted">
                Ihre Nachricht ist bei uns eingegangen. Wir melden uns zeitnah –
                in dringenden Fällen erreichen Sie uns direkt per Telefon oder
                WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false)
                  setForm({ name: '', email: '', phone: '', topic: 'Holzbau', message: '' })
                }}
                className="btn-ghost mt-8"
              >
                Weitere Nachricht senden
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" value={form.name} onChange={update} error={errors.name} required autoComplete="name" />
                <Field id="email" label="E-Mail" type="email" value={form.email} onChange={update} error={errors.email} required autoComplete="email" inputMode="email" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="phone" label="Telefon (optional)" type="tel" value={form.phone} onChange={update} autoComplete="tel" inputMode="tel" />
                <div>
                  <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-ink/80">
                    Anliegen
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={form.topic}
                    onChange={update}
                    className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
                    style={{ minHeight: 48 }}
                  >
                    <option>Holzbau</option>
                    <option>Elektrobau</option>
                    <option>Holz &amp; Elektro kombiniert</option>
                    <option>Wartung / Service</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
              </div>
              <Field id="message" label="Ihre Nachricht" as="textarea" value={form.message} onChange={update} error={errors.message} required placeholder="Beschreiben Sie kurz Ihr Vorhaben …" />

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Nachricht senden
              </button>
              <p className="text-xs text-muted">
                Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben gemäß{' '}
                <Link to="/datenschutz" className="underline hover:text-ink">Datenschutzerklärung</Link> zu.
              </p>
            </form>
          )}
        </Reveal>

        {/* ---------------- Kontaktdaten ---------------- */}
        <Reveal delay={120} className="flex flex-col gap-4">
          {[
            { label: 'Adresse', value: `${COMPANY.address.street}, ${COMPANY.address.city}` },
            { label: 'Telefon', value: COMPANY.phone, href: COMPANY.phoneHref },
            { label: 'E-Mail', value: COMPANY.email, href: COMPANY.emailHref },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl border border-line bg-paper p-5">
              <div className="eyebrow mb-1">{c.label}</div>
              {c.href ? (
                <a href={c.href} className="text-lg text-ink hover:text-blue-deep">{c.value}</a>
              ) : (
                <p className="text-lg text-ink">{c.value}</p>
              )}
            </div>
          ))}

          {/* Öffnungszeiten */}
          <div className="rounded-2xl border border-line bg-paper p-5">
            <div className="eyebrow mb-3">Öffnungszeiten</div>
            <ul className="space-y-2 text-sm text-ink/80">
              {COMPANY.hours.map((h) => (
                <li key={h.d} className="flex justify-between gap-4">
                  <span>{h.d}</span>
                  <span className="text-muted">{h.h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Schnellkontakt: WhatsApp + Social */}
          <div className="flex flex-wrap gap-3">
            <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white hover:brightness-95">
              WhatsApp
            </a>
            {COMPANY.social.map((s) => (
              <a key={s.label} href={s.href} className="btn-ghost">{s.label}</a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------------- Interaktive Karte ---------------- */}
      <section className="wrap pb-24">
        <div className="mb-4 flex items-center justify-between">
          <span className="eyebrow">So finden Sie uns</span>
          <span className="font-mono text-xs text-muted">[PLATZHALTER: echte Adresse]</span>
        </div>
        {/* Google-Maps-Embed – voll interaktiv (Zoom/Verschieben), ohne API-Key.
            Aktuell auf Deutschland zentriert.
            FÜR DIE FINALE VERSION (empfohlen): in Google Maps die echte Adresse
            suchen → „Teilen" → „Karte einbetten" → iframe-Code kopieren und diesen
            <iframe> ersetzen (liefert eine URL der Form maps/embed?pb=…).
            Alternativ hier einfach q=<echte Adresse>&z=15 setzen. */}
        <div className="overflow-hidden rounded-2xl border border-line">
          <iframe
            title="Standort auf Google Maps"
            src="https://maps.google.com/maps?q=51.1657,10.4515&z=6&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  )
}
