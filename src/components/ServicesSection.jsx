import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Scissors, Heart } from 'lucide-react'
import { serviceCategories, branches } from '../data/servicesData'

const categoryMeta = {
  'face-beauty': {
    image:
      'Face.png',
    icon: Sparkles,
    description:
      'Facial treatments, lashes, semi-permanent makeup, and advanced skin care.',
  },
  'hair-styling': {
    image:
      'hair.png',
    icon: Scissors,
    description:
      'Cuts, color, treatments, rebonding, Brazilian, and event-ready hair styling.',
  },
  'body-nail-wellness': {
    image:
      'nails.png',
    icon: Heart,
    description:
      'Massages, body care, slimming, nail services, and wellness drips.',
  },
}

const viewingBranches = branches.filter((b) =>
  ['pusok', 'pajac', 'mandaue', 'cebu'].includes(b.id),
)

export default function ServicesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState('hair-styling')
  const [selectedBranchId, setSelectedBranchId] = useState('pusok')
  const [openSubcategory, setOpenSubcategory] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [instructionsFor, setInstructionsFor] = useState(null)

  const activeCategory = serviceCategories.find(
    (cat) => cat.id === activeCategoryId,
  )
  const branchName =
    viewingBranches.find((b) => b.id === selectedBranchId)?.name ||
    'Selected Branch'

  const handleToggleSubcategory = (name) => {
    setOpenSubcategory((prev) => (prev === name ? null : name))
  }

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Explore our main service categories, then browse detailed offerings
            by branch and subcategory.
          </p>
        </div>

        {/* Category cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {serviceCategories.map((category) => {
            const meta = categoryMeta[category.id]
            if (!meta) return null
            const Icon = meta.icon
            const isActive = activeCategoryId === category.id
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setActiveCategoryId(category.id)
                  setOpenSubcategory(null)
                  setShowModal(true)
                }}
                className={`flex flex-col overflow-hidden rounded-2xl bg-white text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  isActive ? 'ring-2 ring-accent' : ''
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={meta.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/90">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="text-sm font-medium uppercase tracking-wide">
                      Category
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-gray-600">
                    {meta.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-accent">
                      View services in your area
                    </span>
                    <span className="text-sm text-gray-500">
                      Tap to open list
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
        {/* Modal overlay for active category & branch services */}
        {showModal && activeCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8">
            <div className="relative max-h-[100vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="flex items-start justify-between border-b border-gray-100 px-6 py-4 sm:px-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    Services in your area
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-gray-900 sm:text-2xl">
                    {activeCategory.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                    Choose a branch, then expand a section to see detailed services.
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

              <div className="border-b border-gray-100 px-6 py-3 sm:px-8">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  View services for branch
                </p>
                <div className="mt-2 inline-flex flex-wrap gap-2">
                  {viewingBranches.map((branch) => (
                    <button
                      key={branch.id}
                      type="button"
                      onClick={() => setSelectedBranchId(branch.id)}
                      className={`rounded-full px-3.5 py-1.5 text-[11px] font-medium shadow-sm transition ${
                        selectedBranchId === branch.id
                          ? 'bg-accent text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {branch.name}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-[11px] text-gray-500 sm:text-xs">
                  Showing services available in{' '}
                  <span className="font-semibold text-gray-800">{branchName}</span>.
                </p>
              </div>

              <div className="max-h-[60vh] space-y-4 overflow-y-auto px-6 py-4 sm:px-8">
                {activeCategory.data.map((group) => {
                  const isOpen = openSubcategory === group.subcategory
                  return (
                    <div
                      key={group.subcategory}
                      className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50"
                    >
                      <button
                        type="button"
                        onClick={() => handleToggleSubcategory(group.subcategory)}
                        className="flex w-full items-center justify-between px-5 py-3 text-left transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 sm:text-sm">
                          {group.subcategory}
                        </span>
                        <span className="text-[11px] text-gray-500">
                          {isOpen ? 'Hide services' : 'View services'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="border-t border-gray-200 bg-white px-5 pb-4 pt-2">
                          <ul className="space-y-2 text-xs sm:text-sm">
                            {group.services.map((service) => (
                              <li
                                key={`${group.subcategory}-${service.name}`}
                                className="flex flex-col gap-2 rounded-xl bg-gray-50 px-3 py-2 sm:flex-row sm:items-center sm:justify-between"
                              >
                                <div className="min-w-0 flex-1">
                                  <p className="font-medium text-gray-900">
                                    {service.name}
                                  </p>
                                </div>
                                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
                                  <span className="text-accent font-semibold">
                                    {service.price}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setInstructionsFor({
                                        branchName,
                                        categoryTitle: activeCategory.title,
                                        subcategory: group.subcategory,
                                        name: service.name,
                                        price: service.price,
                                      })
                                    }
                                    className="text-[11px] font-semibold text-accent underline decoration-accent/50 underline-offset-4 transition hover:text-accent-dark"
                                  >
                                    Instructions
                                  </button>
                                  <Link
                                    to="/book"
                                    className="inline-flex items-center justify-center rounded-lg bg-accent px-3 py-1.5 text-[11px] font-medium text-white shadow-sm transition hover:bg-accent-dark"
                                  >
                                    Book appointment
                                  </Link>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Instructions modal (nested) */}
            {instructionsFor && (
              <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4 py-10">
                <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                  <div className="flex items-start justify-between border-b border-gray-100 px-6 py-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                        Service instructions
                      </p>
                      <h4 className="mt-1 text-lg font-semibold text-gray-900">
                        {instructionsFor.name}
                      </h4>
                      <p className="mt-1 text-xs text-gray-600">
                        {instructionsFor.branchName} • {instructionsFor.categoryTitle} •{' '}
                        {instructionsFor.subcategory}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setInstructionsFor(null)}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200"
                    >
                      Close
                    </button>
                  </div>
                  <div className="px-6 py-5 text-sm text-gray-700">
                    <div className="rounded-2xl bg-gray-50 p-4">
                      <p className="font-medium text-gray-900">Before your appointment</p>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-600">
                        <li>Arrive 10–15 minutes early for check-in.</li>
                        <li>
                          If you have sensitivities or allergies, mention them during
                          booking.
                        </li>
                        <li>
                          Bring inspiration photos if you have a specific look in mind.
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 rounded-2xl bg-gray-50 p-4">
                      <p className="font-medium text-gray-900">Aftercare (general)</p>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-600">
                        <li>Follow your specialist’s aftercare recommendations.</li>
                        <li>For best results, avoid harsh products for 24 hours.</li>
                        <li>
                          If you experience unusual discomfort, contact the branch.
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
                      <span className="text-gray-500">Price</span>
                      <span className="text-accent font-semibold">
                        {instructionsFor.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
