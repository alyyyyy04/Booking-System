import { useState, useMemo, useEffect } from 'react'
import { ShoppingBasket, Trash2 } from 'lucide-react'
import ProductsSection, { formatPrice } from '../components/ProductsSection'

export default function ProductsPage() {
  const [cartItems, setCartItems] = useState([])
  const [checkoutMethod, setCheckoutMethod] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const handleAddToCart = (product) => {
    if (confirmed) return
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name)
      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (name, delta) => {
    if (confirmed) return
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const handleRemoveItem = (name) => {
    if (confirmed) return
    setCartItems((prev) => prev.filter((item) => item.name !== name))
  }

  const totals = useMemo(() => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    return { subtotal }
  }, [cartItems])

  const handleChooseMethod = (method) => {
    if (!cartItems.length) return
    setCheckoutMethod(method)
    setConfirmed(true)
  }

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const closeCart = () => setCartOpen(false)

  useEffect(() => {
    if (cartOpen) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [cartOpen])

  // Navbar is sticky with ~4.5rem height; drawer starts below it
  const NAVBAR_HEIGHT = '4.5rem'

  return (
    <main className="relative z-0 bg-[#f4f5f7] pt-6 pb-8 sm:pt-8 sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section: horizontal container, flex spacing */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 bg-[#f4f5f7] pb-4 pt-0">
          <p className="text-sm text-gray-600 sm:text-base">
            <span className="font-semibold text-gray-900">Our Products</span>
            <span className="mx-1.5 text-gray-400">•</span>
            <span className="text-gray-500">Tap the cart to review your selections.</span>
          </p>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative flex shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition hover:border-accent hover:bg-accent-light hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            aria-label="Open cart"
          >
            <ShoppingBasket className="h-5 w-5 sm:h-6 sm:w-6" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-semibold text-white shadow">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        <ProductsSection onAddToCart={handleAddToCart} cartItems={cartItems} />
      </div>

      {/* Overlay: full screen, dark, behind drawer; clicking closes drawer */}
      {cartOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[35] bg-black/50 transition-opacity"
            onClick={closeCart}
            aria-label="Close cart"
          />

          {/* Drawer: fixed right, starts below navbar, no overflow */}
          <div
            className="fixed right-0 z-[40] flex w-full max-w-md flex-col overflow-hidden bg-white shadow-2xl sm:w-[85%] md:w-1/2 lg:w-[28rem]"
            style={{
              top: NAVBAR_HEIGHT,
              height: `calc(100vh - ${NAVBAR_HEIGHT})`,
            }}
          >
            {/* Drawer header */}
            <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3 sm:px-5">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                Your Basket
              </h2>
              <button
                type="button"
                onClick={closeCart}
                className="rounded-full p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Close cart"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>

            {/* Scrollable cart items */}
            <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 py-4 sm:px-5">
              {cartItems.length === 0 ? (
                <p className="text-sm text-gray-600">
                  Your basket is empty. Tap <strong>Add to Cart</strong> on a product to get started.
                </p>
              ) : (
                <ul className="space-y-3">
                  {cartItems.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-col gap-2 rounded-xl bg-gray-50 p-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          {formatPrice(item.price)} each
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-2 sm:justify-end">
                        <div className="inline-flex items-center gap-1 rounded-lg bg-white px-2 py-1 shadow-sm">
                          <button
                            type="button"
                            disabled={confirmed}
                            onClick={() => handleUpdateQuantity(item.name, -1)}
                            className="rounded p-0.5 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                          >
                            −
                          </button>
                          <span className="min-w-[1.25rem] text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            disabled={confirmed}
                            onClick={() => handleUpdateQuantity(item.name, 1)}
                            className="rounded p-0.5 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          disabled={confirmed}
                          onClick={() => handleRemoveItem(item.name)}
                          className="text-gray-400 hover:text-red-500 disabled:opacity-50"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <span className="w-16 text-right text-sm font-semibold text-accent">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Fixed footer: total + checkout */}
            <div className="shrink-0 border-t border-gray-200 bg-white px-4 py-4 sm:px-5">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-gray-600">Total</span>
                <span className="text-base font-semibold text-accent">
                  {formatPrice(totals.subtotal)}
                </span>
              </div>
              <div className="space-y-2">
                <button
                  type="button"
                  disabled={!cartItems.length || confirmed}
                  onClick={() => handleChooseMethod('gcash')}
                  className="w-full rounded-lg bg-[#0077FF] py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#0062d1] disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Confirm with GCash
                </button>
                <button
                  type="button"
                  disabled={!cartItems.length || confirmed}
                  onClick={() => handleChooseMethod('card')}
                  className="w-full rounded-lg bg-accent py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Confirm with Credit / Debit Card
                </button>
              </div>
              {confirmed && (
                <p className="mt-3 text-xs text-gray-500">
                  Order confirmed. No cancellations allowed.
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </main>
  )
}