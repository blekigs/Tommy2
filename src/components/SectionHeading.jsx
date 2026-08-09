import Reveal from './Reveal.jsx'

// Redaktioneller Abschnitts-Kopf: Mono-Eyebrow + große Display-Headline,
// optional linksbündig oder zentriert. Bewusst asymmetrisch als Default.
export default function SectionHeading({ eyebrow, title, intro, light = false, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignCls}`}>
      {eyebrow && <span className={`eyebrow ${light ? 'eyebrow--light' : ''} mb-4`}>{eyebrow}</span>}
      <h2
        className={`font-display text-[2rem] font-semibold leading-[1.05] tracking-tight sm:text-[2.6rem] ${
          light ? 'text-paper' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-paper/70' : 'text-muted'}`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}
