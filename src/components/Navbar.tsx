import { useState, useEffect } from 'react'
import { Menu, X, Droplets } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(3, 4, 94, 0.85)' : 'rgba(3, 4, 94, 0.4)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-space text-xl font-medium tracking-[-0.02em] text-white select-none"
          >
            <Droplets size={20} className="text-[#00B4D8]" /><span className="gradient-text">AquaWraps</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                className="font-inter text-sm font-medium tracking-[0.02em] text-white hover:text-[#90E0EF] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
              className="font-inter text-sm font-semibold tracking-[0.02em] px-6 py-2 rounded-full bg-[#00B4D8] text-[#03045E] hover:bg-[#90E0EF] transition-colors duration-200"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-[280px] flex flex-col gap-6 p-8 pt-24"
            style={{
              background: 'rgba(3, 4, 94, 0.95)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                className="font-inter text-base font-medium text-white hover:text-[#90E0EF] transition-colors duration-200"
                style={{
                  animation: `fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s both`,
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
              className="mt-4 cta-primary text-center"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </>
  )
}
