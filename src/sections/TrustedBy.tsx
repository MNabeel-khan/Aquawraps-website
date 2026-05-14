import { useEffect, useRef, useState } from 'react'

const clients = [
  'The Royal Grill',
  'Pearl Continental',
  'Events by Sara',
  'TechVision PK',
  'Shaadi Planners',
  'Cafe Lumiere',
]

export default function TrustedBy() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-16"
      style={{ background: 'linear-gradient(160deg, #0c1929 0%, #0f1f35 30%, #112240 70%, #0a1628 100%' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div
          className="text-center mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span className="section-label section-label-aqua">
            Trusted by Leading Businesses
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {clients.map((client, i) => (
            <span
              key={client}
              className="font-inter text-sm md:text-base font-medium text-white/40 select-none whitespace-nowrap"
              style={{
                opacity: visible ? 0.4 : 0,
                transition: `opacity 0.5s ease ${i * 0.1}s`,
              }}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
