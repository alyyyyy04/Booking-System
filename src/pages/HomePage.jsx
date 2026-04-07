import Hero from '../components/Hero'
import Features from '../components/Features'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: "url('elglam.jpg')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/35" />
      <div className="relative">
        <Hero />
        <Features />
        <ServicesSection />
        <TestimonialsSection />
      </div>
    </main>
  )
}
