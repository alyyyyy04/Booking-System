import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Good services and quality products. Recommendable👍👍👍",
    author: 'Elwisa Ano-os Caraballe',
    subtitle: 'Customer at Mandaue City Branch',
  },
  {
    quote:
      'Absolutely! Staffs are friendly, quality service and it was a great pamper time for me! Will surely come back! 🩷',
    author: 'Zheil Natali',
    subtitle: 'Customer at Cebu City Branch',
  },
  {
    quote: 'El Glamorous is a must-visit for anyone seeking a luxurious and enjoyable experience. The combination of stunning ambiance and exceptional customer service.',
    author: 'Primerose Residences',
    subtitle: 'Client from Pusok',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-transparent py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="testimonials-shell rounded-3xl border border-white/30 p-8 shadow-xl backdrop-blur-md sm:p-10">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pink-600">
              What clients say
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">Loved by our guests</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
              Real stories from clients who trust EL Glamorous for beauty, wellness, and premium
              care.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, idx) => (
              <blockquote
                key={item.author}
                className="testimonial-card relative rounded-2xl border border-pink-100 bg-white p-5 text-sm text-gray-700 shadow-md"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <Quote className="h-5 w-5 text-pink-400" aria-hidden />
                <div className="mt-3 flex gap-1 text-pink-500">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="mt-3 leading-7">"{item.quote}"</p>
                <span className="mt-4 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  — {item.author}, {item.subtitle}
                </span>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

