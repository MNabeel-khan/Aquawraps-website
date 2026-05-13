import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    image: '/bottle-mockup-restaurant.png',
    title: 'Custom Label Design',
    description:
      'Our designers craft labels that match your brand identity \u2014 logos, colors, typography, and finishing effects like gold foil and embossing.',
    cta: 'Explore Design',
  },
  {
    image: '/bottle-mockup-corporate.png',
    title: 'Premium Bottle Supply',
    description:
      'High-quality BPA-free bottles in multiple sizes (250ml, 500ml, 1L). Crystal-clear plastic or glass options with durable, waterproof labels.',
    cta: 'View Options',
  },
  {
    image: '/bottle-mockup-wedding.png',
    title: 'Print, Pack & Deliver',
    description:
      'We print, apply, quality-check, and deliver directly to your venue or doorstep across Karachi.',
    cta: 'Learn More',
  },
]

export default function Services() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding"
      style={{ background: '#F0F9FF' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <span className="section-label mb-4 inline-flex">What We Offer</span>
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
            Complete Branding Solutions
          </h2>
          <p
            className="font-inter text-base mt-4 leading-relaxed mx-auto"
            style={{
              color: 'rgba(3,4,94,0.6)',
              maxWidth: '500px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.24s',
            }}
          >
            From label design to doorstep delivery &mdash; we handle everything.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group rounded-3xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(50px)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 * (i + 1)}s`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(transparent 40%, rgba(3,4,94,0.8) 100%)',
                  }}
                />
                {/* Text overlay on image */}
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-space text-xl font-medium text-white">
                    {service.title}
                  </h3>
                  <p className="font-inter text-sm text-white/80 mt-2 max-w-[280px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <button className="inline-flex items-center gap-2 font-inter text-sm font-medium group/btn" style={{ color: '#0077B6' }}>
                  {service.cta}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
