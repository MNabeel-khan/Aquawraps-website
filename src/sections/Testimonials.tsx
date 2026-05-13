import { useEffect, useRef, useState } from 'react'
import { MessageSquareQuote } from 'lucide-react'

const testimonials = [
  {
    avatar: '/testimonial-avatar-1.jpg',
    name: 'Ahmed Hassan',
    role: 'Owner, The Royal Grill',
    quote:
      'AquaWraps transformed how our customers see us. Our branded bottles are now part of the dining experience. Guests even take them home!',
    city: 'Karachi',
  },
  {
    avatar: '/testimonial-avatar-2.jpg',
    name: 'Sara Malik',
    role: 'Wedding Planner, Events by Sara',
    quote:
      'Every wedding I plan now includes AquaWraps bottles. The couples love the personal touch, and it adds such elegance to the table setting.',
    city: 'Karachi',
  },
  {
    avatar: '/testimonial-avatar-3.jpg',
    name: 'Farhan Khan',
    role: 'GM, TechVision Pakistan',
    quote:
      'We switched from generic bottled water to AquaWraps for all our meetings. It\u2019s a small detail that makes a big impression on clients.',
    city: 'Karachi',
  },
]

export default function Testimonials() {
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
      id="testimonials"
      ref={ref}
      className="section-padding"
      style={{ background: '#FFFFFF' }}
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
            <span className="section-label mb-4 inline-flex">What Our Clients Say</span>
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
            Trusted by Businesses Across Pakistan
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: '#F0F9FF',
                border: '1px solid rgba(0,119,182,0.08)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 * (i + 1)}s`,
              }}
            >
              {/* Quote icon */}
              <MessageSquareQuote
                size={28}
                style={{ color: 'rgba(0,180,216,0.3)' }}
                className="mb-4"
              />

              {/* Quote text */}
              <p
                className="font-inter text-base leading-relaxed italic"
                style={{ color: 'rgba(3,4,94,0.8)', lineHeight: 1.7 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div
                className="my-6"
                style={{ borderTop: '1px solid rgba(0,119,182,0.1)' }}
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ border: '2px solid rgba(0,180,216,0.3)' }}
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-inter text-sm font-semibold" style={{ color: '#03045E' }}>
                    {t.name}
                  </h4>
                  <p className="font-inter text-xs" style={{ color: 'rgba(3,4,94,0.55)' }}>
                    {t.role}
                  </p>
                </div>
                <span
                  className="font-inter text-xs font-medium px-3 py-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'rgba(0,119,182,0.06)',
                    color: '#0077B6',
                  }}
                >
                  {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
