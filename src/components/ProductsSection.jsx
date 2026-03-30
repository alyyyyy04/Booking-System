const products = [
  {
    name: 'Acne Set',
    description: 'Facial Care Product',
    price: 799,
    image:
      'https://unsplash.com/photos/product-lot-deuGLZjp28M',
  },
  {
    name: 'Whitening Set',
    description: 'Facial Care Product',
    price: 699,
    image:
      'https://images.unsplash.com/photo-1612810432633-96f64dc8ccb6?w=600&q=80',
  },
  {
    name: 'Underarm Whitening Deo Cream',
    description: 'Body Care Product',
    price: 300,
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
  },
  {
    name: 'Sunblock Cream SPF50',
    description: 'Facial Care Product',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1600433214751-9aa7f7b4c07a?w=600&q=80',
  },
  {
    name: 'Sunblock Cream SPF110',
    description: 'Facial Care Product',
    price: 380,
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
  },
  {
    name: 'Vitamin C & E Serum',
    description: 'Facial Care Product',
    price: 350,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Collagen Serum',
    description: 'Facial Care Product',
    price: 380,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Hyaluronic Serum',
    description: 'Facial Care Product',
    price: 380,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Acne Cream',
    description: 'Facial Care Product',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Warts Cream',
    description: 'Face & Body Product',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Anti-Irritation Cream',
    description: 'Face & Body Product',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Kojic Soap',
    description: 'Face & Body Product',
    price: 200,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Acne Soap',
    description: 'Face & Body Product',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Whitening Soap',
    description: 'Face & Body Product',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Toners',
    description: 'Facial Care Product',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'EL Beauty Shine On Hair Serum',
    description: 'Hair Care Product',
    price: 300,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'EL Beauty Argan Oil Hair Mask',
    description: 'Hair Care Product',
    price: 850,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Deorebiss Shampoo & Conditioner',
    description: 'Hair Care Product',
    price: 1500,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Deorebiss Shampoo',
    description: 'Hair Care Product',
    price: 800,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Deorebiss Conditioner',
    description: 'Hair Care Product',
    price: 800,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Hair Curling Cream',
    description: 'Hair Care Product',
    price: 500,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    name: 'Color Gadget Shampoo',
    description: 'Hair Care Product',
    price: 1100,
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
]

export function formatPrice(amount) {
  return `₱${amount.toLocaleString('en-PH')}`
}

export { products }

export default function ProductsSection({ onAddToCart, cartItems = [] }) {
  return (
    <section
      id="products"
      className="scroll-mt-24 bg-[#f4f5f7] pt-6 pb-10 sm:pt-8 sm:pb-12"
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
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="flex h-full flex-col rounded-3xl bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative flex-1 overflow-hidden rounded-t-3xl bg-[#f9737a]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-32 w-full object-cover sm:h-40"
                />
                {cartItems.length > 0 && (
                  (() => {
                    const inCart =
                      cartItems.find((item) => item.name === product.name)
                        ?.quantity || 0
                    return inCart ? (
                      <span className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white">
                        In cart: {inCart}
                      </span>
                    ) : null
                  })()
                )}
              </div>
              <div className="flex flex-col rounded-b-3xl bg-[#fee2e2] px-4 pb-4 pt-3">
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-gray-600 line-clamp-3">
                  {product.description}
                </p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="text-accent text-sm font-semibold sm:text-base">
                    {formatPrice(product.price)}
                  </span>
                  {onAddToCart && (
                    <button
                      type="button"
                      onClick={() => onAddToCart(product)}
                      className="rounded-full bg-accent px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-accent-dark"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

