import { useNavigate } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { branches } from '../data/servicesData'

const branchAddresses = {
  pusok:
    'Menguito Building, ML Quezon National Highway, Pusok, Lapu-Lapu City, Cebu, 6015',
  pajac:
    'Helenville Apartment, Bankal Road, Pajac, Lapu-Lapu City, Cebu, 6015',
  mandaue: 
    '2nd Floor, Paradise Square, H. Abellana St, Mandaue City, Cebu, 6014',
  cebu: '8V6R+8VM, Don Gil, Cebu City, 6000',
}

export default function BranchSelection() {
  const navigate = useNavigate()

  const handleSelect = (branchId) => {
    navigate('/book/services', { state: { branchId, branchName: branches.find((b) => b.id === branchId).name } })
  }

  return (
    <div className="booking-flow-bg relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-pink-400/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-14 bottom-20 h-64 w-64 rounded-full bg-purple-400/50 blur-3xl" />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose Your Branch
          </h1>
          <p className="mt-3 text-gray-600">
            Select a branch to view available services and book your appointment
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {branches.map((branch, idx) => (
            <button
              key={branch.id}
              type="button"
              onClick={() => handleSelect(branch.id)}
              className="booking-fade-up booking-interactive-card group flex min-h-[160px] flex-col items-center justify-center rounded-2xl border border-white/60 bg-white/85 p-8 shadow-md backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent/20">
                <MapPin className="h-8 w-8" strokeWidth={1.5} aria-hidden />
              </div>
              <span className="mt-4 text-lg font-semibold text-gray-900">
                {branch.name}
              </span>
              <span className="mt-1 text-xs text-gray-500 text-center">
                {branchAddresses[branch.id]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
