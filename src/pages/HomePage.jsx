import Hero from '../components/Hero'
import Features from '../components/Features'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-scroll bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('elglam.jpg')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/40" />
      <div className="relative">
        <Hero />
        <Features />
        <ServicesSection />
        <TestimonialsSection />
      </div>
    </main>
  )
}
