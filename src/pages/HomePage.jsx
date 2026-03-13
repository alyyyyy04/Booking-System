import Hero from '../components/Hero'
import Features from '../components/Features'
import ServicesSection from '../components/ServicesSection'
import ProductsSection from '../components/ProductsSection'
import TeamSection from '../components/TeamSection'
import ContactSection from '../components/ContactSection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <ServicesSection />
      <ProductsSection />
      <TeamSection />
      <ContactSection />
    </main>
  )
}
