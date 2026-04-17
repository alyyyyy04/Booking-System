import { Link } from 'react-router-dom'
import { Calendar, List } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[76vh] w-full overflow-hidden sm:min-h-[82vh] lg:min-h-[86vh]">
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/60" />
      <div className="hero-aurora absolute inset-0" />
      <div className="relative flex min-h-[76vh] items-center justify-center px-4 py-10 text-white sm:min-h-[82vh] sm:px-6 sm:py-16 lg:min-h-[86vh] lg:px-8">
        <div className="hero-glass-panel hero-glass-shine w-full max-w-5xl rounded-[2rem] border border-white/25 px-6 py-9 text-center shadow-2xl shadow-black/35 sm:px-10 sm:py-11 md:px-12 md:py-12">
          <span className="inline-flex items-center rounded-full border border-white/40 bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-50 sm:text-xs">
            Premium Beauty Experience
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-white drop-shadow-[0_10px_26px_rgba(0,0,0,0.5)] sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Your Look
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-100 sm:text-lg md:text-xl">
            Experience luxury hair and beauty services with our expert team in a relaxing, elegant
            space.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-purple-700 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-950/35 transition duration-300 hover:-translate-y-0.5 hover:from-fuchsia-500 hover:via-purple-500 hover:to-purple-600 hover:shadow-xl"
            >
              <Calendar className="h-5 w-5" aria-hidden />
              Book Appointment
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/60 bg-black/25 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/15"
            >
              <List className="h-5 w-5" aria-hidden />
              View Services
            </a>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-2.5 text-left sm:grid-cols-3">
            <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-pink-100/85">Branches</p>
              <p className="mt-0.5 text-sm font-semibold text-white">4 Premium Locations</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-pink-100/85">Trusted By</p>
              <p className="mt-0.5 text-sm font-semibold text-white">5,000+ Happy Clients</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-pink-100/85">Open Daily</p>
              <p className="mt-0.5 text-sm font-semibold text-white">Appointment Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
