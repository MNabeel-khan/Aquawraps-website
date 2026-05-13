import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923007654321?text=Hi%20AquaWraps,%20I%20want%20to%20order%20branded%20water%20bottles"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      style={{ background: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} color="#FFFFFF" fill="#FFFFFF" />
    </a>
  )
}
