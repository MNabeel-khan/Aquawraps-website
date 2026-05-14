import { useState, useEffect } from 'react'

import { Phone, Droplets } from 'lucide-react'

function AnimatedStat({ target, label, suffix = '', delay }: { target: number; label: string; suffix?: string; delay: number }) {

  const [count, setCount] = useState(0)

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const timer = setTimeout(() => setVisible(true), delay)

    return () => clearTimeout(timer)

  }, [delay])

  useEffect(() => {

    if (!visible) return

    let start = 0

    const duration = 2000

    const startTime = performance.now()

    function tick(now: number) {

      const elapsed = now - startTime

      const progress = Math.min(elapsed / duration, 1)

      const eased = 1 - Math.pow(1 - progress, 4)

      start = Math.round(eased * target)

      setCount(start)

      if (progress < 1) requestAnimationFrame(tick)

    }

    requestAnimationFrame(tick)

  }, [visible, target])

  return (
<div className="text-center">
<div className="font-space text-3xl font-semibold gradient-text">

        {count}{suffix}
</div>
<div className="font-inter text-xs font-medium uppercase tracking-[0.15em] text-white/40 mt-1">

        {label}
</div>
</div>

  )

}

export default function Hero() {

  const [mounted, setMounted] = useState(false)

  // 🔥 SLIDESHOW IMAGES

  const images = [

    '/hot_n_roll_mockup.PNG',

    '/ab_mockup.PNG',

    '/swwetverse.PNG',

  ]

  // 🔥 SLIDESHOW STATE

  const [current, setCurrent] = useState(0)

  // 🔥 AUTO-PLAY (3 seconds)

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((prev) => (prev + 1) % images.length)

    }, 3000)

    return () => clearInterval(timer)

  }, [])

  useEffect(() => {

    const timer = setTimeout(() => setMounted(true), 100)

    return () => clearTimeout(timer)

  }, [])

  return (
<section

      id="hero"

      className="relative min-h-[100dvh] flex items-center overflow-hidden"

      style={{ background: 'linear-gradient(160deg, #0c1929 0%, #0f1f35 30%, #112240 70%, #0a1628 100%)' }}
>

      {/* Background glow */}
<div className="absolute inset-0 animate-blob-pulse" style={{

        background: 'radial-gradient(circle at 30% 50%, rgba(0, 119, 182, 0.12), transparent 60%)',

      }} />
<div className="absolute inset-0" style={{

        background: 'radial-gradient(circle at 70% 30%, rgba(0, 180, 216, 0.06), transparent 45%)',

      }} />

      {/* Content */}
<div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-32 lg:py-40">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* LEFT — Text */}
<div className="w-full lg:w-[55%] space-y-8 text-center lg:text-left">

            {/* Label */}
<div style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.3s' }}>
<span className="section-label section-label-aqua inline-flex items-center gap-2">
<Droplets size={14} style={{ color: '#00B4D8' }} />

                Custom Branded Water Bottles
</span>
</div>

            {/* Headline */}
<h1 className="font-space font-medium leading-[0.95] tracking-[-0.03em]" style={{

              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',

              opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s ease 0.45s',

            }}>
<span className="gradient-text">Your Brand.</span>
<br />
<span className="gradient-text">Every Sip</span>
<span style={{ color: '#00B4D8' }}>.</span>
</h1>

            {/* Subtitle */}
<p className="font-inter text-lg text-white/60 max-w-[480px] mx-auto lg:mx-0 leading-relaxed" style={{

              opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease 0.9s',

            }}>

              We turn ordinary water bottles into powerful branding tools for restaurants, weddings, and businesses in Karachi.
</p>

            {/* CTA Buttons */}
<div className="flex flex-wrap gap-4 justify-center lg:justify-start" style={{

              opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 1.1s',

            }}>
<a href="#contact" className="cta-primary">Get a Free Quote</a>
<a href="#portfolio" className="cta-secondary">See Our Work</a>
</div>

            {/* Phone */}
<a href="tel:+923422892155" className="inline-flex items-center gap-2 font-inter text-sm text-[#90E0EF] hover:text-[#48CAE4] transition-colors" style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.6s ease 1.2s' }}>
<Phone size={16} />

              Or call us: +923422892155
</a>

            {/* Stats */}
<div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4" style={{

              opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 1.3s',

            }}>
<AnimatedStat target={500} label="Bottles Branded" suffix="+" delay={1800} />
<div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-[#0077B6]/30 to-transparent" />
<AnimatedStat target={50} label="Happy Clients" suffix="+" delay={2000} />
<div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-[#0077B6]/30 to-transparent" />
<AnimatedStat target={1} label="City" delay={2200} />
</div>
</div>

          {/* RIGHT — Image Slideshow */}
<div className="w-full lg:w-[45%] flex justify-center items-center relative" style={{

            opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease 1.0s',

          }}>

            {/* Glow */}
<div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full animate-blob-pulse" style={{

              background: 'radial-gradient(circle, rgba(0, 180, 216, 0.1) 0%, transparent 70%)',

              top: '50%', left: '50%', transform: 'translate(-50%, -50%)', filter: 'blur(50px)',

            }} />

            {/* 🔥 IMAGE SLIDESHOW */}
<div className="relative w-[80%] max-w-[380px] aspect-square">

              {images.map((src, index) => (
<img

                  key={src}

                  src={src}

                  alt={`Work ${index + 1}`}

                  className="absolute inset-0 w-full h-full object-contain rounded-2xl transition-opacity duration-1000 ease-in-out"

                  style={{ opacity: current === index ? 1 : 0 }}

                />

              ))}

              {/* Dots indicator */}
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">

                {images.map((_, index) => (
<div key={index} className="w-2 h-2 rounded-full transition-all duration-300" style={{

                    background: current === index ? '#00B4D8' : 'rgba(255,255,255,0.3)',

                    transform: current === index ? 'scale(1.3)' : 'scale(1)',

                  }} />

                ))}
</div>
</div>
</div>
</div>
</div>
</section>

  )

}
 
