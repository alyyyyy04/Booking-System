import { Link } from 'react-router-dom'
import { Calendar, List } from 'lucide-react'

const heroImage =
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Transform Your Look
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-200 sm:text-xl">
          Experience luxury hair and beauty services with our expert team.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white shadow-lg transition hover:bg-accent-dark hover:shadow-xl"
          >
            <Calendar className="h-5 w-5" aria-hidden />
            Book Appointment
          </Link>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition hover:bg-white hover:text-gray-900"
          >
            <List className="h-5 w-5" aria-hidden />
            View Services
          </a>
        </div>
      </div>
    </section>
  )
}
