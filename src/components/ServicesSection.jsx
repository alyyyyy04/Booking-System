import { useState } from 'react'
import { Sparkles, Scissors, Heart } from 'lucide-react'
import { serviceCategories } from '../data/servicesData'
import ServiceCard from './ServiceCard'

const categoryMeta = {
  face: {
    image:
      'https://media.istockphoto.com/id/1399469980/photo/close-up-portrait-of-anorganic-facial-mask-application-at-spa-salon-facial-treatment-skin.jpg?s=612x612&w=0&k=20&c=ZvZi_bdGLicsykUtlrHgQe70ftZzd_xPKvq2vzfOyV0=',
    icon: Sparkles,
    description:
      'Facial treatments, lashes, semi-permanent makeup, and advanced skin care.',
  },
  hair: {
    image:
      'https://media.istockphoto.com/id/1138252695/photo/woman-at-hair-salon.jpg?s=612x612&w=0&k=20&c=VfottXG-WF8Lr9o6zdgbU1bbZp0OcHdzdmz8j6LcaIU=',
    icon: Scissors,
    description:
      'Cuts, color, treatments, rebonding, Brazilian, and event-ready hair styling.',
  },
  body: {
    image:
      'https://images.squarespace-cdn.com/content/v1/553640b0e4b06779e02ce9a6/d40a9cfb-09b9-4437-863e-de47c6274efa/unnamed-2.webp',
    icon: Heart,
    description:
      'Massages, body care, slimming, nail services, and wellness drips.',
  },
}

export default function ServicesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState('hair')
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
      className="scroll-mt-24 bg-[#FFE4EF] pt-0 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-black/95">
            Explore our main service categories, then browse detailed offerings by branch and
            subcategory.
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
              <div
                key={category.id}
                className={`service-animate-card rounded-2xl transition ${
                  isActive ? 'scale-[1.01] ring-2 ring-[#FF3E9B] shadow-xl' : ''
                }`}
                style={{ animationDelay: `${serviceCategories.indexOf(category) * 120}ms` }}
              >
                <ServiceCard
                  image={meta.image}
                  imageAlt={category.title}
                  icon={Icon}
                  title={category.title}
                  description={meta.description}
                  price="See branch rates"
                  duration="Multi-option"
                  ctaLabel="View services we offer"
                  onCtaClick={() => {
                    setActiveCategoryId(category.id)
                    setOpenSubcategory(null)
                    setShowModal(true)
                  }}
                />
              </div>
            )
          })}
        </div>
        {/* Modal overlay for active category services */}
        {showModal && activeCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6 sm:py-8">
            <div className="relative max-h-[92dvh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="flex items-start justify-between border-b border-gray-100 px-4 py-4 sm:px-8">
                <div className="min-w-0 pr-2">
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

              <div className="max-h-[68dvh] space-y-4 overflow-y-auto px-4 py-4 sm:px-8">
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
                        className="flex w-full items-center justify-between gap-3 px-5 py-3 text-left transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF3E9B] focus:ring-inset"
                      >
                        <span className="min-w-0 flex-1 text-xs font-semibold uppercase tracking-wide text-gray-800 sm:text-sm">
                          {group.subcategory}
                        </span>
                        <span className="shrink-0 text-[11px] text-gray-500">
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
                                <span className="mt-1 text-right font-semibold text-[#FF3E9B] sm:mt-0">
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
