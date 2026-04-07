import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '/circle.png'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Products', to: '/products' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', href: '/team#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const activePath = useMemo(() => location.pathname, [location.pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-100/70 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={logo}
            alt="EL. Glamorous Face and Body Clinic, Salon and Spa"
            className="h-9 w-9 rounded-full object-cover ring-2 ring-pink-100 transition group-hover:scale-105 group-hover:ring-pink-200"
          />
          <span className="text-base font-semibold tracking-tight text-gray-900 sm:text-lg lg:text-xl">
            EL Glamorous Face and Body Clinic, Salon and Spa
          </span>
        </Link>

        <button
          type="button"
          className="rounded-lg p-2 text-gray-700 transition hover:bg-pink-50 hover:text-accent md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className={`navbar-link rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-pink-50 hover:text-accent ${
                  activePath === link.to ? 'navbar-link-active text-accent' : ''
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="navbar-link rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-pink-50 hover:text-accent"
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        <div
          className={`absolute left-0 right-0 top-full border-b border-pink-100 bg-white shadow-lg md:hidden ${
            mobileOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col px-4 py-4">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`navbar-link rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-pink-50 hover:text-accent ${
                    activePath === link.to ? 'navbar-link-active text-accent' : ''
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="navbar-link rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-pink-50 hover:text-accent"
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
