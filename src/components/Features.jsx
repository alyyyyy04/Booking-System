import { Star, Sparkles, Clock } from 'lucide-react'

const features = [
  {
    icon: Star,
    title: 'Expert Stylists',
    description:
      'Our team of certified professionals with years of experience.',
  },
  {
    icon: Sparkles,
    title: 'Premium Products',
    description: 'We use only the highest quality hair care products.',
  },
  {
    icon: Clock,
    title: 'Flexible Booking',
    description: 'Easy online booking with flexible scheduling options.',
  },
]

export default function Features() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center transition hover:scale-[1.02]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/10 text-accent">
                <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-2 max-w-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
