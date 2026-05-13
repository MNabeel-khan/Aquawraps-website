import { useEffect, useRef, useState } from 'react'
import { Droplets, Award, TrendingUp } from 'lucide-react'

const cards = [
  {
    icon: Droplets,
    title: 'Free Advertising',
    description:
      'Every bottle on every table promotes your brand for hours. No recurring costs, no ad spend \u2014 just pure organic exposure.',
  },
  {
    icon: Award,
    title: 'Premium Perception',
    description:
      'Custom-branded water elevates your business image. Guests notice the attention to detail and associate your brand with quality.',
  },
  {
    icon: TrendingUp,
    title: 'Higher Margins',
    description:
      'Replace third-party bottled water with your own brand. Keep the margin, control the experience, and build customer loyalty.',
  },
]

export default function WhyBrandedWater() {
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
      id="why"
      ref={ref}
      className="section-padding"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <span className="section-label mb-4 inline-flex">Why Branded Water?</span>
          </div>
          <h2
            className="font-space font-medium tracking-[-0.02em] mt-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.0,
              color: '#03045E',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.12s',
            }}
          >
            Turn Every Table into a Billboard
          </h2>
          <p
            className="font-inter text-base mt-4 leading-relaxed"
            style={{
              color: 'rgba(3,4,94,0.6)',
              maxWidth: '600px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.24s',
            }}
          >
            Your customers are already drinking water. Why not make every sip an advertisement for your brand?
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_40px_rgba(144,224,239,0.4)]"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(3, 4, 94, 0.06)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 * (i + 1)}s`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'rgba(0,119,182,0.08)' }}
                >
                  <Icon size={40} style={{ color: '#0077B6' }} />
                </div>
                <h3 className="font-space text-xl font-medium" style={{ color: '#03045E' }}>
                  {card.title}
                </h3>
                <p className="font-inter text-base mt-3 leading-relaxed" style={{ color: 'rgba(3,4,94,0.65)' }}>
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
