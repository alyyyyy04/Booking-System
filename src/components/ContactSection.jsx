import { useState } from 'react'
import { MapPin } from 'lucide-react'

const branchContacts = [
  {
    id: 'mandaue',
    title: 'Mandaue Branch',
    image:
      'Mandaue Branch.png',
  },
  {
    id: 'pajac',
    title: 'Pajac Branch',
    image:
      'Pajac Branch.jpg',
  },
  {
    id: 'pusok',
    title: 'Pusok Branch',
    image:
      'Pusok Branch.jpg',
  },
  {
    id: 'cebu',
    title: 'Cebu City Branch',
    image:
      'Cebu Branch.jpg',
  },
]

export default function ContactSection() {
  const [activeBranch, setActiveBranch] = useState(null)

  return (
    <section id="contact" className="scroll-mt-24 bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Visit Us
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            We&apos;d love to see you at our salon
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {branchContacts.map((branch) => (
            <button
              key={branch.id}
              type="button"
              onClick={() => setActiveBranch(branch)}
              className="rounded-2xl bg-white p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <MapPin className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {branch.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Tap to view nearby landmark photo
              </p>
            </button>
          ))}
        </div>

        {/* Testimonials in place of Schedule button */}
        <div className="mt-16 grid gap-8 rounded-3xl bg-white p-8 shadow-md sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              What clients say
            </p>
            <h3 className="mt-1 text-xl font-semibold text-gray-900">
              Loved by our guests
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Real stories from clients who visit our branches across Cebu.
            </p>
          </div>
          <div className="space-y-4 text-sm text-gray-700 sm:col-span-2">
            <blockquote className="rounded-2xl bg-gray-50 p-4">
              “Best salon experience I&apos;ve had in Cebu. The staff are warm and
              very professional.”
              <span className="mt-2 block text-xs font-semibold text-gray-500">
                — Maria, regular at Mandaue Branch
              </span>
            </blockquote>
            <blockquote className="rounded-2xl bg-gray-50 p-4">
              “I love how consistent the quality is whether I book in Pajac or
              Pusok. Highly recommended.”
              <span className="mt-2 block text-xs font-semibold text-gray-500">
                — Anne, hair & nail client
              </span>
            </blockquote>
            <blockquote className="rounded-2xl bg-gray-50 p-4">
              “The therapists in Cebu City branch are amazing. I always leave
              feeling refreshed.”
              <span className="mt-2 block text-xs font-semibold text-gray-500">
                — John, wellness client
              </span>
            </blockquote>
          </div>
        </div>

        {activeBranch && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4 py-6 sm:py-10">
            <div className="w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-3 sm:px-8 sm:py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    Branch landmark
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-gray-900">
                    {activeBranch.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    A nearby landmark to help you find the salon easily.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveBranch(null)}
                  className="ml-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
              <div className="overflow-auto px-4 pb-4 pt-2 sm:px-6">
                <img
                  src={activeBranch.image}
                  alt={activeBranch.title}
                  className="mx-auto h-auto max-h-[70vh] w-full max-w-full rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
