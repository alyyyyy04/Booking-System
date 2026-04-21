import { useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { ChevronDown, Sparkles, Scissors, Heart, ArrowLeft } from 'lucide-react'
import { serviceCategories } from '../data/servicesData'

const categoryIcons = { sparkles: Sparkles, scissors: Scissors, heart: Heart }

export default function ServicesSelection() {
  const location = useLocation()
  const navigate = useNavigate()
  const branchName = location.state?.branchName || 'Selected Branch'
  const branchId = location.state?.branchId
  const initialServices = location.state?.initialServices || []
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [selectedServices, setSelectedServices] = useState(initialServices)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleServiceSelection = (service, { categoryId, subcategory }) => {
    setSelectedServices((prev) => {
      const exists = prev.find(
        (item) =>
          item.name === service.name &&
          item.price === service.price &&
          (item.categoryId === categoryId && item.subcategory === subcategory) ||
          (item.categoryId == null && item.subcategory == null),
      )
      if (exists) {
        return prev.filter(
          (item) =>
            !(
              item.name === service.name &&
              item.price === service.price &&
              ((item.categoryId === categoryId && item.subcategory === subcategory) ||
                (item.categoryId == null && item.subcategory == null))
            ),
        )
      }
      return [
        ...prev,
        { name: service.name, price: service.price, categoryId, subcategory },
      ]
    })
  }

  const handleContinue = () => {
    if (!selectedServices.length) return
    navigate('/book/stylist', {
      state: { branchId, branchName, services: selectedServices },
    })
  }

  const toggleCategory = (id) => {
    setExpandedCategory((prev) => (prev === id ? null : id))
  }

  return (
    <div className="booking-flow-bg relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-16 top-28 h-52 w-52 rounded-full bg-pink-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-1/2 h-56 w-56 rounded-full bg-pink-300/50 blur-3xl" />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
        <Link
          to="/book"
          className="mb-6 inline-flex items-center gap-2 text-gray-600 transition hover:text-[#F13E93]"
        >
          <ArrowLeft className="h-5 w-5" />
          Change branch
        </Link>
        <div className="mb-8">
          <p className="text-sm font-medium text-[#F13E93]">Booking at</p>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {branchName}
          </h1>
          <p className="mt-1 text-gray-600">
            Select a category, then add one or more services
          </p>
        </div>

        <div className="mb-6 w-full max-w-full sm:max-w-md">
          <label
            htmlFor="service-search"
            className="block text-sm font-medium text-gray-700"
          >
            Search services
          </label>
          <input
            id="service-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type a service name, e.g. haircut, facial, massage..."
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-[#F13E93] focus:outline-none focus:ring-1 focus:ring-[#F13E93]"
          />
        </div>

        <div className="space-y-4">
          {serviceCategories.map((category) => {
            const Icon = categoryIcons[category.icon] || Sparkles
            const hasSearch = searchQuery.trim().length > 0
            const isExpanded = hasSearch || expandedCategory === category.id
            return (
              <div
                key={category.id}
                className="booking-fade-up booking-interactive-card overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-md backdrop-blur-sm"
                style={{ animationDelay: `${serviceCategories.indexOf(category) * 90}ms` }}
              >
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  className="flex w-full items-center justify-between gap-3 p-4 text-left transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#F13E93] focus:ring-inset sm:p-6"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F13E93]/10 text-[#F13E93] sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                    </div>
                    <span className="min-w-0 text-lg font-semibold text-gray-900 sm:text-xl">
                      {category.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 shrink-0 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>
                {isExpanded && (
                  <div className="border-t border-gray-100 bg-gray-50/50 px-4 pb-5 pt-2 sm:px-6 sm:pb-6">
                    <div className="space-y-6">
                      {category.data.map((group) => (
                        <div key={group.subcategory}>
                          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#F13E93]">
                            {group.subcategory}
                          </h3>
                          <ul className="space-y-2">
                            {group.services.map((service) => {
                              if (
                                searchQuery &&
                                !service.name
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase())
                              ) {
                                return null
                              }
                              const isSelected = selectedServices.some(
                                (item) =>
                                  item.name === service.name &&
                                  item.price === service.price &&
                                  ((item.categoryId === category.id &&
                                    item.subcategory === group.subcategory) ||
                                    (item.categoryId == null &&
                                      item.subcategory == null)),
                              )
                              return (
                                <li
                                  key={`${group.subcategory}-${service.name}`}
                                  className="flex flex-col gap-2 rounded-lg bg-white px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-3"
                                >
                                  <div className="min-w-0 flex-1">
                                    <span className="font-medium text-gray-900">
                                      {service.name}
                                    </span>
                                    <span className="ml-0 block font-semibold text-[#F13E93] sm:ml-2 sm:inline">
                                      {service.price}
                                    </span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      toggleServiceSelection(service, {
                                        categoryId: category.id,
                                        subcategory: group.subcategory,
                                      })
                                    }
                                    className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-white transition ${
                                      isSelected
                                        ? 'bg-gray-500 hover:bg-gray-600'
                                        : 'bg-[#F13E93] hover:bg-[#e23488]'
                                    }`}
                                  >
                                    {isSelected ? 'Remove' : 'Add'}
                                  </button>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-[#FF85BB]/60 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Selected services</h2>
          {selectedServices.length === 0 ? (
            <p className="mt-2 text-sm text-gray-600">
              No services selected yet. Tap “Add” on one or more services to include
              them in your booking.
            </p>
          ) : (
            <ul className="mt-3 space-y-2 text-sm">
              {selectedServices.map((service) => (
                <li
                  key={`${service.name}-${service.price}`}
                  className="flex items-start justify-between gap-2 rounded-lg bg-gray-50 px-3 py-2"
                >
                  <span className="min-w-0 pr-2 font-medium text-gray-900">{service.name}</span>
                  <span className="shrink-0 font-semibold text-[#F13E93]">{service.price}</span>
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            onClick={handleContinue}
            disabled={!selectedServices.length}
            className="mt-4 w-full rounded-lg bg-[#F13E93] px-4 py-3 text-sm font-medium text-white shadow-md transition hover:bg-[#e23488] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600"
          >
            Continue to appointment details
          </button>
        </div>
      </div>
    </div>
  )
}
