import { ExternalLink } from 'lucide-react'

const testimonialImages = [
  {
    src: '/reviews/review-1.png',
    alt: 'Facebook review by Zheil Natali',
  },
  {
    src: '/reviews/review-2.png',
    alt: 'Facebook review by Evelyn Inoc',
  },
  {
    src: '/reviews/review-3.png',
    alt: 'Facebook review by RM Eden',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FFE4EF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="testimonials-shell rounded-3xl border border-white/30 p-8 shadow-xl backdrop-blur-md sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pink-600">
                What clients say
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                Loved by our guests
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
                Real stories from clients who trust EL Glamorous for beauty, wellness, and premium
                care.
              </p>
            </div>
            <a
              href="https://www.facebook.com/el.glamorousofficialpage/reviews"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-center rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-pink-500 sm:self-start"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              View all
            </a>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonialImages.map((item, idx) => (
              <figure
                key={item.src}
                className="testimonial-card self-start overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-md"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="block h-auto w-full object-contain"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

