import { useState } from 'react'
import { Scissors, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Scissors className="h-6 w-6 text-accent" strokeWidth={2} aria-hidden />
          <span className="text-xl font-semibold text-gray-900">EL Glamorous</span>
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div
          className={`absolute left-0 right-0 top-full bg-white shadow-lg md:static md:flex md:items-center md:gap-8 md:shadow-none ${
            mobileOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col px-4 py-4 md:flex-row md:items-center md:gap-8 md:px-0 md:py-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-gray-700 transition hover:text-accent md:py-0"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              className="rounded-full bg-accent px-5 py-2.5 font-medium text-white shadow-md transition hover:bg-accent-dark hover:shadow-lg md:mt-0 mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
