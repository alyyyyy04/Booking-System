import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'

const branchContacts = [
  {
    id: 'mandaue',
    title: 'Mandaue Branch',
    location: '6014 H. Abellana St, Mandaue, Cebu',
    phone: '032 326 4014',
  },
  {
    id: 'pajac',
    title: 'Pajac Branch',
    location: 'Helenville Apt. Bankal Rd. Brgy, Lapu-Lapu, 6015 Cebu',
    phone: '0956 279 6480',
  },
  {
    id: 'pusok',
    title: 'Pusok Branch',
    location:
      '8XFC+5H Menguito Building, M.L. Quezon National Highway, Lapu-Lapu, 6015 Cebu',
    phone: '0956 279 6480',
  },
  {
    id: 'cebu',
    title: 'Cebu City Branch',
    location: '8V6R+8VM, Don Gil, Cebu City, 6000 Cebu',
    phone: '0999 325 7150',
  },
]

export default function ContactSection() {
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
            <div
              key={branch.id}
              className="rounded-2xl bg-white p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <MapPin className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {branch.title}
              </h3>
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                <p>{branch.location}</p>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm font-medium text-gray-900">
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                <span>{branch.phone}</span>
              </div>
            </div>
          ))}
        </div>
        <div id="book" className="mt-12 scroll-mt-24 text-center">
          <p className="text-gray-600">Ready to book your appointment?</p>
          <Link
            to="/book"
            className="mt-4 inline-block rounded-full bg-accent px-8 py-3 font-medium text-white shadow-md transition hover:bg-accent-dark hover:shadow-lg"
          >
            Schedule Now
          </Link>
        </div>
      </div>
    </section>
  )
}
