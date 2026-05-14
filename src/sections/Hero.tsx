import { useEffect, useRef, useState } from 'react'
import { Phone } from 'lucide-react'

function FloatingDroplets() {
  const droplets = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${15 + i * 10}%`,
    delay: `${i * 0.4}s`,
    duration: `${3 + Math.random() * 2}s`,
    size: 4 + Math.random() * 4,
    opacity: 0.3 + Math.random() * 0.3,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {droplets.map((d) => (
        <div
          key={d.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: d.left,
            width: d.size,
            height: d.size,
            background: '#90E0EF',
            opacity: d.opacity,
            animation: `droplet-rise ${d.duration} ease-in-out ${d.delay} infinite`,
          }}
        />
      ))}
    </div>
  )
}

function AnimatedStat({ target, label, suffix = '', delay }: { target: number; label: string; suffix?: string; delay: number }) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!visible) return
    let start = 0
    const duration = 1500
    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.round(eased * target)
      setCount(start)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [visible, target])

  return (
    <div ref={ref} className="flex items-center gap-6">
      <div className="text-center">
        <div className="font-space text-2xl font-medium text-white">
          {count}{suffix}
        </div>
        <div className="font-inter text-xs font-normal uppercase tracking-wider text-white/50 mt-1">
          {label}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ background: '#03045E' }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-blob-pulse"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(0,119,182,0.3), transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 70% 20%, rgba(0,180,216,0.15), transparent 50%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Column - Text */}
          <div className="w-full lg:w-[55%] space-y-8 text-center lg:text-left">
            {/* Label pill */}
            <div
              className="section-label mx-auto lg:mx-0 inline-flex"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                borderColor: 'rgba(144, 224, 239, 0.3)',
                color: '#90E0EF',
              }}
            >
              Custom Branded Water Bottles
            </div>

            {/* H1 */}
            <h1 className="font-space font-medium leading-[0.9] tracking-[-0.03em] text-white"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s',
              }}
            >
              Your Brand.
              <br />
              Every Sip<span style={{ color: '#90E0EF' }}>.</span>
            </h1>

            {/* Subtitle */}
            <p
              className="font-inter text-lg text-white/70 max-w-[480px] mx-auto lg:mx-0 leading-relaxed"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.9s',
              }}
            >
              We turn ordinary water bottles into powerful branding tools for restaurants, weddings, and businesses across Pakistan.
            </p>

            {/* CTA Group */}
            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 1.1s',
              }}
            >
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="cta-primary">
                Get a Free Quote
              </a>
              <a href="#portfolio" onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }) }} className="cta-secondary text-white border-white/30 hover:bg-white/5 hover:border-white/60">
                See Our Work
              </a>
            </div>

            {/* Phone link */}
            <a
              href="tel:+923422892155"
              className="inline-flex items-center gap-2 font-inter text-sm text-[#90E0EF] hover:text-white transition-colors duration-200"
              style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.2s',
              }}
            >
              <Phone size={16} />
              Or call us: +923422892155
            </a>

            {/* Stats Bar */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.3s',
              }}
            >
              <AnimatedStat target={500} label="Bottles Branded" suffix="+" delay={1800} />
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <AnimatedStat target={50} label="Happy Clients" suffix="+" delay={2000} />
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <AnimatedStat target={3} label="Cities Served" delay={2200} />
            </div>
          </div>

          {/* Right Column - Bottle Visual */}
          <div
            className="w-full lg:w-[45%] flex justify-center items-center relative"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.0s',
            }}
          >
            {/* Ambient glow */}
            <div
              className="absolute w-[400px] h-[400px] rounded-full animate-blob-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(0,180,216,0.25) 0%, transparent 70%)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Bottle image */}
            <div className="relative animate-float">
              <img
                src="/hot_n_roll_mockup.PNG"
                alt="Branded water bottle on restaurant table"
                className="relative z-10 w-[80%] max-w-[400px] mx-auto drop-shadow-2xl"
                loading="eager"
              />
              <FloatingDroplets />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
