import Hero from '../components/Hero'
import Features from '../components/Features'
import ServicesSection from '../components/ServicesSection'
import TeamSection from '../components/TeamSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
