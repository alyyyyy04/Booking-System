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

  const toggleServiceSelection = (service) => {
    setSelectedServices((prev) => {
      const exists = prev.find(
        (item) => item.name === service.name && item.price === service.price,
      )
      if (exists) {
        return prev.filter(
          (item) => !(item.name === service.name && item.price === service.price),
        )
      }
      return [...prev, { name: service.name, price: service.price }]
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
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
        <Link
          to="/book"
          className="mb-6 inline-flex items-center gap-2 text-gray-600 transition hover:text-accent"
        >
          <ArrowLeft className="h-5 w-5" />
          Change branch
        </Link>
        <div className="mb-8">
          <p className="text-sm font-medium text-accent">Booking at</p>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {branchName}
          </h1>
          <p className="mt-1 text-gray-600">
            Select a category, then add one or more services
          </p>
        </div>

        <div className="space-y-4">
          {serviceCategories.map((category) => {
            const Icon = categoryIcons[category.icon] || Sparkles
            const isExpanded = expandedCategory === category.id
            return (
              <div
                key={category.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  className="flex w-full items-center justify-between p-6 text-left transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <span className="text-xl font-semibold text-gray-900">
                      {category.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 shrink-0 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>
                {isExpanded && (
                  <div className="border-t border-gray-100 bg-gray-50/50 px-6 pb-6 pt-2">
                    <div className="space-y-6">
                      {category.data.map((group) => (
                        <div key={group.subcategory}>
                          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
                            {group.subcategory}
                          </h3>
                          <ul className="space-y-2">
                            {group.services.map((service) => {
                              const isSelected = selectedServices.some(
                                (item) =>
                                  item.name === service.name &&
                                  item.price === service.price,
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
                                    <span className="ml-0 block text-accent font-semibold sm:ml-2 sm:inline">
                                      {service.price}
                                    </span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => toggleServiceSelection(service)}
                                    className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-white transition ${
                                      isSelected
                                        ? 'bg-gray-500 hover:bg-gray-600'
                                        : 'bg-accent hover:bg-accent-dark'
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

        <div className="mt-10 rounded-2xl border border-dashed border-accent/40 bg-white p-5 shadow-sm">
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
                  className="flex items-center justify-between gap-2 rounded-lg bg-gray-50 px-3 py-2"
                >
                  <span className="font-medium text-gray-900">{service.name}</span>
                  <span className="text-accent font-semibold">{service.price}</span>
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            onClick={handleContinue}
            disabled={!selectedServices.length}
            className="mt-4 w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white shadow-md transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600"
          >
            Continue to appointment details
          </button>
        </div>
      </div>
    </div>
  )
}
