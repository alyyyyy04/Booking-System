import { useState } from 'react'
import { MapPin, Users } from 'lucide-react'
import { branches, stylistsByBranch } from '../data/servicesData'

const branchCards = [
  { id: 'mandaue', label: 'Mandaue Branch' },
  { id: 'pajac', label: 'Pajac Branch' },
  { id: 'pusok', label: 'Pusok Branch' },
  { id: 'cebu', label: 'Cebu City Branch' },
]

export default function TeamSection() {
  const [activeBranchId, setActiveBranchId] = useState('mandaue')
  const [showModal, setShowModal] = useState(false)

  const currentStylists = stylistsByBranch[activeBranchId] || []
  const activeBranchLabel =
    branchCards.find((b) => b.id === activeBranchId)?.label || 'Selected Branch'

  return (
    <section
      id="team"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Branch Teams
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Tap a branch to see the dedicated stylists, nail techs, and therapists
            who will take care of you.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {branchCards.map((branch) => {
            const isActive = branch.id === activeBranchId
            const branchMeta = branches.find((b) => b.id === branch.id)
            return (
              <button
                key={branch.id}
                type="button"
                onClick={() => {
                  setActiveBranchId(branch.id)
                  setShowModal(true)
                }}
                className={`flex min-h-[150px] flex-col items-start rounded-2xl border-2 bg-white p-5 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  isActive ? 'border-accent' : 'border-gray-200'
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Branch
                </p>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  {branch.label}
                </p>
                {branchMeta && (
                  <p className="mt-1 text-xs text-gray-500">
                    Tap to view team members
                  </p>
                )}
              </button>
            )
          })}
        </div>

        {showModal && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4 py-8">
            <div className="max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="flex items-start justify-between border-b border-gray-100 px-6 py-4 sm:px-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    Team members
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-gray-900 sm:text-2xl">
                    {activeBranchLabel}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Stylists and specialists assigned to this branch.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="ml-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-3 text-xs text-gray-600 sm:px-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{activeBranchLabel}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-medium text-accent">
                  <Users className="h-4 w-4" />
                  <span>{currentStylists.length} team members</span>
                </div>
              </div>
              <div className="max-h-[60vh] overflow-y-auto px-6 py-4 sm:px-8">
                {currentStylists.length === 0 ? (
                  <p className="text-sm text-gray-600">
                    No team members listed for this branch yet.
                  </p>
                ) : (
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {currentStylists.map((stylist) => (
                      <li
                        key={stylist.name}
                        className="rounded-2xl bg-gray-50 px-4 py-3 text-sm"
                      >
                        <p className="font-semibold text-gray-900">
                          {stylist.name}
                        </p>
                        <p className="mt-0.5 text-accent text-xs font-medium uppercase tracking-wide">
                          {stylist.role}
                        </p>
                        {stylist.specialty && (
                          <p className="mt-1 text-xs text-gray-500">
                            {stylist.specialty}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
