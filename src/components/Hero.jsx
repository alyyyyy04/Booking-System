import { Link } from 'react-router-dom'
import { Calendar, List } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(236,72,153,0.28),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(147,51,234,0.24),transparent_40%)]" />
      <div className="relative flex min-h-[85vh] items-center justify-center px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl rounded-3xl border border-white/20 bg-white/10 px-6 py-10 text-center shadow-2xl backdrop-blur-md sm:px-10 sm:py-12">
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-pink-100">
            Premium Beauty Experience
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Your Look
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-100 sm:text-lg md:text-xl">
            Experience luxury hair and beauty services with our expert team in a relaxing, elegant
            space.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:from-pink-600 hover:to-rose-600 hover:shadow-xl"
            >
              <Calendar className="h-5 w-5" aria-hidden />
              Book Appointment
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/60 bg-white/10 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-gray-900"
            >
              <List className="h-5 w-5" aria-hidden />
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
