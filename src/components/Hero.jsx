import { Link } from 'react-router-dom'
import { Calendar, List } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[74vh] w-full overflow-hidden text-white sm:min-h-[80vh] lg:min-h-[84vh]">
      <div
        className="hero-bg-zoom absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('elglam.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto flex min-h-[74vh] max-w-7xl items-center justify-center px-4 py-12 text-center sm:min-h-[80vh] sm:px-6 lg:min-h-[84vh] lg:px-8">
        <div className="w-full max-w-3xl">
          <h1 className="hero-fade-up font-playfair text-4xl font-bold leading-tight tracking-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl">
            Transform Your Look
          </h1>
          <p className="hero-fade-up-delay-1 font-poppins mx-auto mt-4 max-w-l text-base text-gray-100 sm:text-lg">
            Experience luxury hair and beauty services with our expert team.
          </p>
          <div className="hero-fade-up-delay-2 mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-7 py-3 font-semibold text-white shadow-lg shadow-rose-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-rose-500"
            >
              <Calendar className="h-5 w-5" aria-hidden />
              Book Appointment
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/65 bg-black/25 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black/40"
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
