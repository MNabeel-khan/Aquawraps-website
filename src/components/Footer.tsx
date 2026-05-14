import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#03045E' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Brand */}
          <div>
            <span className="font-space text-xl font-medium text-white tracking-[-0.02em]">
              AquaWraps
            </span>
            <p className="font-inter text-sm text-white/50 mt-3">
              Your Brand. Every Sip.
            </p>
            <p className="font-inter text-xs text-white/40 mt-4 max-w-[280px] leading-relaxed">
              Custom-branded water bottles for restaurants, weddings, and businesses across Pakistan.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="font-inter text-sm font-semibold text-white uppercase tracking-[0.08em]">
              Services
            </h4>
            <ul className="mt-6 space-y-3">
              {[
                'Custom Label Design',
                'Premium Bottle Supply',
                'Print & Apply',
                'Bulk Orders',
                'Delivery',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="font-inter text-sm text-white/55 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Industries */}
          <div>
            <h4 className="font-inter text-sm font-semibold text-white uppercase tracking-[0.08em]">
              Industries
            </h4>
            <ul className="mt-6 space-y-3">
              {[
                'Restaurants',
                'Weddings',
                'Corporate',
                'Events',
                'Events',
                'Cafes',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#industries"
                    className="font-inter text-sm text-white/55 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-inter text-sm font-semibold text-white uppercase tracking-[0.08em]">
              Contact
            </h4>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="mailto:hello@aquawraps.pk"
                  className="flex items-center gap-2 font-inter text-sm text-white/55 hover:text-white transition-colors"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  hello@aquawraps.pk
                </a>
              </li>
              <li>
                <a
                  href="tel:+923001234567"
                  className="flex items-center gap-2 font-inter text-sm text-white/55 hover:text-white transition-colors"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  +92-300-1234567
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 font-inter text-sm text-white/55">
                  <MapPin size={16} className="flex-shrink-0" />
                  Karachi
                </div>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-white/40 hover:text-[#90E0EF] transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="font-inter text-xs text-white/35">
            &copy; 2025 AquaWraps. All rights reserved.
          </p>
          <p className="font-inter text-xs text-white/35">
            Made with precision in Pakistan
          </p>
        </div>
      </div>
    </footer>
  )
}
