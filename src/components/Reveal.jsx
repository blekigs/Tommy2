import { useEffect, useRef, useState } from 'react'

// Handgemachtes Scroll-Reveal via IntersectionObserver.
// Bewusst dezent (fade + kleiner Y-Versatz), gestaffelt über `delay`.
// Respektiert prefers-reduced-motion automatisch über die CSS-Klasse .reveal.
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el) // nur einmal auslösen
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
