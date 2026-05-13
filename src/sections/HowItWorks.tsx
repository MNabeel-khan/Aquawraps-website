import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    image: '/process-design.png',
    title: 'Share Your Brand',
    description:
      'Send us your logo, colors, and vision. Our designers craft a label that perfectly represents your brand identity.',
  },
  {
    image: '/process-print.png',
    title: 'We Print & Apply',
    description:
      'Using high-quality waterproof materials and precision printing, we produce labels that look premium and last.',
  },
  {
    image: '/process-deliver.png',
    title: 'Delivered to You',
    description:
      'Your branded bottles arrive at your door \u2014 restaurant, hotel, wedding venue, or office \u2014 ready to impress.',
  },
]

export default function HowItWorks() {
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
      id="process"
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
            <span className="section-label mb-4 inline-flex">How It Works</span>
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
            From Idea to Bottle in 3 Simple Steps
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
            No complicated process. Just great design, quality printing, and reliable delivery.
          </p>
        </div>

        {/* Steps - Desktop */}
        <div className="hidden lg:block">
          {/* Connector Line */}
          <div className="relative flex items-start justify-between gap-8">
            {/* Horizontal line */}
            <div
              className="absolute top-8 left-[16%] right-[16%] h-0.5"
              style={{
                background: 'linear-gradient(90deg, #0077B6, #00B4D8)',
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.8s ease 0.6s',
              }}
            />

            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative flex-1 flex flex-col items-center text-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.3}s`,
                }}
              >
                {/* Step number */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-space text-2xl font-medium text-white relative z-10 mb-6"
                  style={{
                    background: 'linear-gradient(135deg, #0077B6, #00B4D8)',
                    boxShadow: '0 0 20px rgba(0,180,216,0.3)',
                    transform: visible ? 'scale(1)' : 'scale(0.8)',
                    transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.5 + i * 0.3}s`,
                  }}
                >
                  {i + 1}
                </div>

                {/* Image */}
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="font-space text-xl font-medium" style={{ color: '#03045E' }}>
                  {step.title}
                </h3>
                <p
                  className="font-inter text-sm mt-3 leading-relaxed mx-auto"
                  style={{
                    color: 'rgba(3,4,94,0.65)',
                    maxWidth: '320px',
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.2}s`,
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-space text-2xl font-medium text-white mb-4"
                style={{
                  background: 'linear-gradient(135deg, #0077B6, #00B4D8)',
                  boxShadow: '0 0 20px rgba(0,180,216,0.3)',
                }}
              >
                {i + 1}
              </div>
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-space text-xl font-medium" style={{ color: '#03045E' }}>
                {step.title}
              </h3>
              <p
                className="font-inter text-sm mt-2 leading-relaxed mx-auto"
                style={{
                  color: 'rgba(3,4,94,0.65)',
                  maxWidth: '320px',
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
