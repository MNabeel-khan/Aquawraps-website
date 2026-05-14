import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MessageCircle, MapPin, Instagram, Facebook, Linkedin, CheckCircle, Loader2 } from 'lucide-react'

type FormStatus = 'default' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>('default')
  const ref = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessName: '',
    email: '',
    industry: '',
    quantity: '',
    city: '',
    message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClass =
    'w-full rounded-xl px-4 py-3 font-inter text-base outline-none transition-all duration-200 ' +
    'bg-white/5 border border-white/12 text-white placeholder-white/30 ' +
    'focus:border-[#00B4D8] focus:shadow-[0_0_0_3px_rgba(0,180,216,0.15)]'

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding"
      style={{ background: '#03045E' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="w-full lg:w-[45%]">
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span className="section-label section-label-aqua mb-4 inline-flex">
                Get in Touch
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
              Let&apos;s Brand Your Bottles
            </h2>

            <p
              className="font-inter text-base mt-4 leading-relaxed text-white/70"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.24s',
              }}
            >
              Fill out the form and we&apos;ll get back to you within 24 hours with a custom quote.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-6">
              {[
                { icon: Mail, label: 'AquaWraps@gmail.com', href: 'mailto:Aquawraps@gmail.com' },
                { icon: Phone, label: '+923422892155', href: 'tel:+923422892155' },
                { icon: MessageCircle, label: '+923422892155', href: 'https://wa.me/923422892155?text=Hi%20AquaWraps,%20I%20want%20to%20order%20branded%20water%20bottles', highlight: true },
                { icon: MapPin, label: 'Karachi', href: '#' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(30px)',
                      transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.36 + i * 0.12}s`,
                    }}
                  >
                    <Icon
                      size={20}
                      className={item.highlight ? 'text-[#90E0EF]' : 'text-[#90E0EF] group-hover:text-white transition-colors'}
                    />
                    <span className={`font-inter text-base ${item.highlight ? 'text-[#90E0EF]' : 'text-white group-hover:text-[#90E0EF]'} transition-colors`}>
                      {item.label}
                    </span>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-white/50 hover:text-[#90E0EF] transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className="w-full lg:w-[55%]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            <div className="glass-card-dark p-8 lg:p-10">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle size={48} style={{ color: '#00B4D8' }} className="mx-auto mb-4" />
                  <h3 className="font-space text-2xl font-medium text-white">
                    Quote Request Sent!
                  </h3>
                  <p className="font-inter text-base text-white/70 mt-3">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-space text-xl font-medium text-white mb-6">
                    Request a Quote
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+92-XXX-XXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </div>

                    {/* Row 2: Business + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="businessName"
                        placeholder="Your business or event name"
                        value={formData.businessName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </div>

                    {/* Row 3: Industry */}
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className={inputClass + ' appearance-none cursor-pointer'}
                    >
                      <option value="" disabled>Select your industry</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate</option>
                      <option value="event">Event</option>
                      <option value="event">Event</option>
                      <option value="other">Other</option>
                    </select>

                    {/* Row 4: Quantity */}
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      className={inputClass + ' appearance-none cursor-pointer'}
                    >
                      <option value="" disabled>How many bottles?</option>
                      <option value="100-200">100 - 200</option>
                      <option value="200-500">200 - 500</option>
                      <option value="500-1000">500 - 1000</option>
                      <option value="1000+">1000+</option>
                    </select>

                    {/* Row 5: City */}
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className={inputClass + ' appearance-none cursor-pointer'}
                    >
                      <option value="" disabled>Your city</option>
                      <option value="karachi">Karachi</option>
                      <option value="rawalpindi">Rawalpindi</option>
                      <option value="faisalabad">Faisalabad</option>
                      <option value="other">Other</option>
                    </select>

                    {/* Row 6: Message */}
                    <textarea
                      name="message"
                      placeholder="Tell us about your project, design preferences, or any special requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={inputClass + ' resize-none'}
                    />

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="cta-primary w-full mt-6 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Quote Request'
                      )}
                    </button>

                    {/* WhatsApp link */}
                    <a
                      href="https://wa.me/923007654321?text=Hi%20AquaWraps,%20I%20want%20to%20order%20branded%20water%20bottles"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 font-inter text-sm text-[#90E0EF] hover:text-white transition-colors mt-4"
                    >
                      <MessageCircle size={16} />
                      Prefer WhatsApp? Message us directly
                    </a>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
