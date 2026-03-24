export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl bg-gray-50 p-8 shadow-md sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              What clients say
            </p>
            <h2 className="mt-1 text-xl font-semibold text-gray-900 sm:text-2xl">
              Loved by our guests
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Real stories from clients who visit our branches across Cebu.
            </p>
          </div>
          <div className="space-y-4 text-sm text-gray-700 sm:col-span-2">
            <blockquote className="rounded-2xl bg-white p-4">
              “Best salon experience I&apos;ve had in Cebu. The staff are warm and
              very professional.”
              <span className="mt-2 block text-xs font-semibold text-gray-500">
                — Maria, regular at Mandaue Branch
              </span>
            </blockquote>
            <blockquote className="rounded-2xl bg-white p-4">
              “I love how consistent the quality is whether I book in Pajac or
              Pusok. Highly recommended.”
              <span className="mt-2 block text-xs font-semibold text-gray-500">
                — Anne, hair & nail client
              </span>
            </blockquote>
            <blockquote className="rounded-2xl bg-white p-4">
              “The therapists in Cebu City branch are amazing. I always leave
              feeling refreshed.”
              <span className="mt-2 block text-xs font-semibold text-gray-500">
                — John, wellness client
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

