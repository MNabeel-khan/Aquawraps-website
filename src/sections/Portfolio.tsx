import { useEffect, useRef, useState } from 'react'

const items = [
  { image: '/bottle-mockup-restaurant.png', title: 'The Royal Grill', category: 'Restaurant' },
  { image: '/bottle-mockup-wedding.png', title: 'Ayesha & Omar', category: 'Wedding' },
  { image: '/bottle-mockup-corporate.png', title: 'TechVision Pakistan', category: 'Corporate' },
  { image: '/swwetverse.PNG', title: 'sweetVerse', category: 'Cafe' },
  { image: '/bottle-collection-flatlay.png', title: 'Label Collection', category: 'Showcase' },
  { image: '/ab_mockup.PNG', title: 'Reality by AB', category: 'Content Creators' },
]

export default function Portfolio() {
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
      id="portfolio"
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
              Our Work
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
            Bottles That Speak for Your Brand
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
            A selection of labels we&apos;ve designed for businesses across Pakistan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 * (i + 1)}s`,
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-end"
                style={{ background: 'rgba(3,4,94,0.7)' }}
              >
                <div className="p-6">
                  <span
                    className="font-inter text-xs font-normal uppercase tracking-[0.08em]"
                    style={{ color: '#90E0EF' }}
                  >
                    {item.category}
                  </span>
                  <h3 className="font-space text-lg font-medium text-white mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
