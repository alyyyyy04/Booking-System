import { useState } from 'react'
import { Sparkles, Scissors, Heart } from 'lucide-react'
import { serviceCategories } from '../data/servicesData'

const categoryMeta = {
  'face-beauty': {
    image:
      'https://media.istockphoto.com/id/1399469980/photo/close-up-portrait-of-anorganic-facial-mask-application-at-spa-salon-facial-treatment-skin.jpg?s=612x612&w=0&k=20&c=ZvZi_bdGLicsykUtlrHgQe70ftZzd_xPKvq2vzfOyV0=',
    icon: Sparkles,
    description:
      'Facial treatments, lashes, semi-permanent makeup, and advanced skin care.',
  },
  'hair-styling': {
    image:
      'https://media.istockphoto.com/id/1138252695/photo/woman-at-hair-salon.jpg?s=612x612&w=0&k=20&c=VfottXG-WF8Lr9o6zdgbU1bbZp0OcHdzdmz8j6LcaIU=',
    icon: Scissors,
    description:
      'Cuts, color, treatments, rebonding, Brazilian, and event-ready hair styling.',
  },
  'body-nail-wellness': {
    image:
      'https://images.squarespace-cdn.com/content/v1/553640b0e4b06779e02ce9a6/d40a9cfb-09b9-4437-863e-de47c6274efa/unnamed-2.webp',
    icon: Heart,
    description:
      'Massages, body care, slimming, nail services, and wellness drips.',
  },
}

export default function ServicesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState('hair-styling')
  const [openSubcategory, setOpenSubcategory] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const activeCategory = serviceCategories.find(
    (cat) => cat.id === activeCategoryId,
  )

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
        {/* Modal overlay for active category services */}
        {showModal && activeCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8">
            <div className="relative max-h-[100vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="flex items-start justify-between border-b border-gray-100 px-6 py-4 sm:px-8">
                <div>
                  <h3 className="mt-1 text-xl font-semibold text-gray-900 sm:text-2xl">
                    {activeCategory.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                    Expand a section to see the services included in this category.
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
                                <span className="mt-1 text-right text-accent font-semibold sm:mt-0">
                                  {service.price}
                                </span>
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
          </div>
        )}
      </div>
    </section>
  )
}
