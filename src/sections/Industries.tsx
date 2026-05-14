import { useEffect, useRef, useState } from 'react'

const industries = [
  {
    image: '/swwetverse.png',
    title: 'Restaurants & Cafes',
    description: 'Replace generic bottled water with your own brand. Impress diners and keep the profits.',
  },
  {
    image: '/bottle-mockup-wedding.png',
    title: 'Weddings & Events',
    description: 'Personalized bottles with couple names, dates, and elegant designs \u2014 a memorable touch for guests.',
  },
  {
    image: '/ab_mockup.PNG',
    title: 'Corporate & Offices',
    description: 'Branded water for boardrooms, conferences, and reception areas. Professional polish in every detail.',
  },
]

export default function Industries() {
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
      id="industries"
      ref={ref}
      className="section-padding"
      style={{ background: '#03045E' }}
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
            <span className="section-label section-label-aqua mb-4 inline-flex">
              Industries We Serve
            </span>
          </div>
          <h2
            className="font-space font-medium tracking-[-0.02em] mt-4 text-white"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.0,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.12s',
            }}
          >
            Every Business Deserves Its Own Bottle
          </h2>
          <p
            className="font-inter text-base mt-4 leading-relaxed mx-auto text-white/60"
            style={{
              maxWidth: '500px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.24s',
            }}
          >
            From intimate weddings to corporate chains &mdash; we scale to your needs.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{
                aspectRatio: '4/3',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 * (i + 1)}s`,
              }}
            >
              <img
                src={ind.image}
                alt={ind.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 transition-colors duration-300"
                style={{
                  background: 'rgba(3,4,94,0.5)',
                }}
              />
              <div
                className="absolute inset-0 transition-colors duration-300 group-hover:bg-[rgba(3,4,94,0.75)]"
              />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-space text-2xl font-medium text-white relative">
                  {ind.title}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 bg-[#90E0EF] transition-all duration-300 w-0 group-hover:w-full"
                    style={{ bottom: '-4px' }}
                  />
                </h3>
                <p className="font-inter text-sm text-white/75 mt-3 max-w-[280px] leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="snap-start flex-shrink-0 w-[85vw] relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={ind.image}
                alt={ind.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'rgba(3,4,94,0.6)' }}
              />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-space text-xl font-medium text-white">
                  {ind.title}
                </h3>
                <p className="font-inter text-sm text-white/75 mt-2 max-w-[260px] leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
