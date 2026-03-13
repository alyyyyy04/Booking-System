const products = [
  {
    name: 'Glam Nourish Shampoo',
    description: 'Sulfate-free shampoo for daily use that leaves hair soft and shiny.',
    price: '₱499',
  },
  {
    name: 'Silky Repair Conditioner',
    description: 'Deep-conditioning formula that repairs dry, color-treated hair.',
    price: '₱549',
  },
  {
    name: 'Keratin Smooth Hair Mask',
    description: 'Intensive weekly treatment to smooth frizz and add shine.',
    price: '₱699',
  },
  {
    name: 'Glow Up Facial Set',
    description: 'Gentle cleanser, toner, and cream for everyday glow.',
    price: '₱1,299',
  },
  {
    name: 'Nail Care Essentials Kit',
    description: 'Cuticle oil, buffer, and top coat for salon-finish nails at home.',
    price: '₱599',
  },
  {
    name: 'Body Glow Scrub',
    description: 'Whitening and brightening scrub with a relaxing spa scent.',
    price: '₱650',
  },
]

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Take the salon experience home with our curated selection of hair,
            skin, and body care products.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="flex h-full flex-col rounded-2xl bg-gray-50 p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-gray-600">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-accent text-base font-semibold">
                  {product.price}
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Placeholder item
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

