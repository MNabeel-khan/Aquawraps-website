import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import TrustedBy from './sections/TrustedBy'
import WhyBrandedWater from './sections/WhyBrandedWater'
import Services from './sections/Services'
import Industries from './sections/Industries'
import HowItWorks from './sections/HowItWorks'
import Portfolio from './sections/Portfolio'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

export default function App() {
  return (
    <Layout>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <WhyBrandedWater />
        <Services />
        <Industries />
        <HowItWorks />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </Layout>
  )
}
