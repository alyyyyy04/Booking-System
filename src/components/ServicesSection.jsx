import { Scissors, Palette, Sparkles } from 'lucide-react'
import ServiceCard from './ServiceCard'

const services = [
  {
    image:
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80',
    imageAlt: 'Haircut and styling',
    icon: Scissors,
    title: 'Haircut & Styling',
    description:
      'Expert cuts and styling tailored to your unique look.',
    price: 'From $65',
    duration: '60 min',
  },
  {
    image:
      'https://images.unsplash.com/photo-1560869713-72d2c4c9b9e4?w=800&q=80',
    imageAlt: 'Hair coloring',
    icon: Palette,
    title: 'Hair Coloring',
    description:
      'Vibrant colors and natural tones to enhance your beauty.',
    price: 'From $150',
    duration: '120 min',
  },
  {
    image:
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80',
    imageAlt: 'Hair treatment',
    icon: Sparkles,
    title: 'Hair Treatment',
    description:
      'Nourishing treatments for healthy, lustrous hair.',
    price: 'From $85',
    duration: '90 min',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Discover our range of professional beauty services designed to make
            you look and feel amazing
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
