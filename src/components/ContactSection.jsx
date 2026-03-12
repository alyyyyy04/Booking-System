import { useState } from 'react'
import { MapPin } from 'lucide-react'
import ModalShell from './ModalShell'

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

        <ModalShell
          open={!!activeBranch}
          onClose={() => setActiveBranch(null)}
          title={activeBranch?.title ?? ''}
        >
          {activeBranch && (
            <img
              src={activeBranch.image}
              alt={activeBranch.title}
              className="mx-auto h-auto w-full max-w-full rounded-2xl object-contain"
            />
          )}
        </ModalShell>
      </div>
    </section>
  )
}
