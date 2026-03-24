import logo from '/circle.png'
import { Facebook, Instagram, Music2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="about" className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* About Us */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="EL Glamorous Face and Body Clinic, Salon and Spa"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-sm font-semibold text-accent">
                About Us
              </span>
            </div>
            <h3 className="text-base font-semibold text-white">
              EL Glamorous Face and Body Clinic, Salon and Spa
            </h3>
            <p className="max-w-md text-sm text-gray-300">
              We provide professional salon services with a focus on beauty,
              relaxation, and customer satisfaction.
            </p>
          </div>

          {/* Operating hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Operating Hours
            </h4>
            <ul className="mt-3 space-y-1 text-sm">
              <li className="text-gray-300">Monday to Sunday</li>
              <li className="font-semibold text-gray-100">10:00 AM – 8:00 PM</li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Follow Us
            </h4>
            <p className="mt-2 text-sm text-gray-300">
              Stay connected for updates, promos, and glam transformations.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://www.facebook.com/el.glamorousofficialpage"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-100 transition hover:bg-white/10"
              >
                <Facebook className="h-4 w-4 text-[#1877F2]" aria-hidden />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/elglammainbranch?igsh=Z3kxdHc3OG1raDgz&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-100 transition hover:bg-white/10"
              >
                <Instagram className="h-4 w-4 text-pink-400" aria-hidden />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@elglamteamph?_r=1&_t=ZS-94eH7Vegoqa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-100 transition hover:bg-white/10"
              >
                <Music2 className="h-4 w-4 text-white" aria-hidden />
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} EL Glamorous Face and Body Clinic, Salon and Spa. All
          rights reserved.
        </div>
      </div>
    </footer>
  )
}
