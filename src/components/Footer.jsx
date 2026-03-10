import { Scissors } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-accent" aria-hidden />
            <span className="text-lg font-semibold text-white">EL Glam</span>
          </div>
          <p className="max-w-xs text-sm sm:col-span-2 lg:col-span-1">
            Premium beauty services for the modern you
          </p>
          <div>
            <h4 className="font-semibold text-white">Hours</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
              <li>Saturday: 9:00 AM - 6:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Follow Us</h4>
            <p className="mt-2 text-sm">
              Stay connected on social media for updates and special offers
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EL Glamorous. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
