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
    <header className="relative z-50 w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="EL. Glamorous Face and Body Clinic, Salon and Spa"
            className="h-8 w-8 rounded-full object-cover transition group-hover:scale-105"
          />
          <div className="min-w-0 leading-tight text-gray-900">
            <span className="truncate text-sm font-semibold tracking-tight sm:text-[1.05rem]">
              EL Glamorous Face and Body Clinic, Salon and Spa
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="rounded-lg p-2 text-gray-700 transition hover:bg-pink-50 hover:text-accent md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div className="hidden md:flex md:items-center md:gap-1 lg:gap-1.5">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className={`navbar-link rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:text-gray-900 ${
                  activePath === link.to ? 'navbar-link-active text-gray-900' : ''
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="navbar-link rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        <div
          className={`absolute left-0 right-0 top-full border-b border-gray-200 bg-white shadow-lg md:hidden ${
            mobileOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col px-4 py-4">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`navbar-link rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:text-gray-900 ${
                    activePath === link.to ? 'navbar-link-active text-gray-900' : ''
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="navbar-link rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
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
