import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '/circle.png'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Products', to: '/products' },
  { label: 'Our Team', href: '/#team' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="EL. Glamorous Face and Body Clinic, Salon and Spa"
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="text-xl font-semibold text-gray-900">
            EL Glamorous Face and Body Clinic, Salon and Spa
          </span>
        </Link>

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
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="py-2 text-gray-700 transition hover:text-accent md:py-0"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-2 text-gray-700 transition hover:text-accent md:py-0"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
