import { useEffect, useMemo, useState } from 'react'
import { ShoppingBasket, Trash2 } from 'lucide-react'
import ProductsSection, { formatPrice } from '../components/ProductsSection'

export default function ProductsPage() {
  const [cartItems, setCartItems] = useState([])
  const [currentStep, setCurrentStep] = useState('cart')
  const [cartOpen, setCartOpen] = useState(false)
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [fulfillmentMethod, setFulfillmentMethod] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [paymentProof, setPaymentProof] = useState(null)

  const handleAddToCart = (product) => {
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
    setCartItems((prev) => prev.filter((item) => item.name !== name))
  }

  const totals = useMemo(() => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    return { subtotal }
  }, [cartItems])

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
  const isCheckoutStep = currentStep !== 'cart'
  const canProceedToCheckout = cartItems.length > 0
  const canConfirmOrder = cartItems.length > 0
  const normalizedPhone = phoneNumber.replace(/\D/g, '')
  const isPhoneValid = normalizedPhone.length === 11
  const canSubmitDetails =
    fullName.trim().length >= 3 &&
    isPhoneValid &&
    Boolean(fulfillmentMethod) &&
    (fulfillmentMethod !== 'cod' || address.trim().length >= 5)

  const showPaymentStep = fulfillmentMethod === 'cod'
  const accountDetails =
    paymentMethod === 'bank'
      ? { label: 'Bank Transfer', name: 'EL Glamorous Beauty Center', number: '0123-4567-8901' }
      : paymentMethod === 'gcash'
      ? { label: 'GCash', name: 'EL Glamorous Beauty Center', number: '0917-123-4567' }
      : null

  const stepItems = [
    { key: 'cart', label: 'Step 1: Cart' },
    { key: 'checkout', label: 'Step 2: Checkout' },
    { key: 'details', label: 'Step 3: Details' },
    {
      key: fulfillmentMethod === 'pickup' ? 'pickup-confirmation' : 'payment',
      label: fulfillmentMethod === 'pickup' ? 'Step 4: Pickup Confirmation' : 'Step 4: Payment',
    },
    { key: 'final-confirmation', label: 'Step 5: Confirmation' },
  ]

  const activeStepIndex = useMemo(() => {
    const index = stepItems.findIndex((step) => step.key === currentStep)
    return index === -1 ? 0 : index
  }, [currentStep, stepItems])

  const resetFlow = () => {
    setCurrentStep('cart')
    setCartOpen(false)
    setFullName('')
    setPhoneNumber('')
    setAddress('')
    setFulfillmentMethod('')
    setPaymentMethod('')
    setPaymentProof(null)
    setCartItems([])
  }

  return (
    <main className="relative z-0 bg-[#fdf4ff] pt-6 pb-8 sm:pt-8 sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="mb-5 rounded-2xl border border-purple-100 bg-white/95 p-4 shadow-sm sm:p-5">
          <h1 className="text-xl font-bold text-fuchsia-600 sm:text-2xl">EL Glamorous Product Ordering</h1>
          <p className="mt-1 text-sm text-gray-600">
            Seamless shopping flow: Cart, Checkout, Details, Payment, and Confirmation.
          </p>
          <div className="mt-4 grid gap-2 md:grid-cols-5">
            {stepItems.map((step, index) => {
              const active = index === activeStepIndex
              const done = index < activeStepIndex
              return (
                <div
                  key={step.key}
                  className={`rounded-lg border px-3 py-2 text-xs font-medium md:text-sm ${
                    active
                      ? 'border-fuchsia-300 bg-fuchsia-50 text-fuchsia-700'
                      : done
                      ? 'border-purple-200 bg-purple-50 text-purple-700'
                      : 'border-gray-200 bg-white text-gray-500'
                  }`}
                >
                  {step.label}
                </div>
              )
            })}
          </div>
        </section>

        {/* Top section: horizontal container, flex spacing */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-purple-100 bg-[#fdf4ff] pb-4 pt-0">
          <p className="text-sm text-gray-600 sm:text-base">
            <span className="font-semibold text-gray-900">Our Products</span> <span className="mx-1.5 text-gray-400">•</span>{' '}
            <span className="text-gray-500">Add items to cart, then follow each checkout step.</span>
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

        {isCheckoutStep && (
          <section className="mt-8 space-y-5">
            {currentStep === 'checkout' && (
              <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">Checkout Summary</h2>
                <p className="mt-1 text-sm text-gray-600">Review your items before confirming your order.</p>
                <div className="mt-4 space-y-2">
                  {cartItems.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-xl border border-pink-100 bg-pink-50/40 p-3"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      </div>
              <p className="font-semibold text-fuchsia-600">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-pink-100 pt-4">
                  <p className="text-sm text-gray-700">Total Amount</p>
                  <p className="text-lg font-bold text-fuchsia-600">{formatPrice(totals.subtotal)}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    onClick={() => setCurrentStep('cart')}
                  >
                    Back to Cart
                  </button>
                  <button
                    type="button"
                    disabled={!canConfirmOrder}
                    className="rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                    onClick={() => setCurrentStep('details')}
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            )}

            {currentStep === 'details' && (
              <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">Fill-Up Details</h2>
                <p className="mt-1 text-sm text-gray-600">
                  Enter your details and choose your preferred fulfillment method.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1 text-sm">
                    <span className="font-medium text-gray-700">Full Name</span>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      placeholder="Enter your full name"
                      className="rounded-lg border border-gray-300 px-3 py-2 outline-none ring-fuchsia-300 transition focus:border-fuchsia-400 focus:ring-2"
                    />
                  </label>
                  <label className="flex flex-col gap-1 text-sm">
                    <span className="font-medium text-gray-700">Phone Number</span>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                      placeholder="09XXXXXXXXX"
                      className="rounded-lg border border-gray-300 px-3 py-2 outline-none ring-fuchsia-300 transition focus:border-fuchsia-400 focus:ring-2"
                    />
                    <span className={`text-xs ${isPhoneValid || !phoneNumber ? 'text-gray-500' : 'text-red-500'}`}>
                      Phone number must be exactly 11 digits.
                    </span>
                  </label>
                </div>

                <div className="mt-5">
                  <p className="mb-2 text-sm font-medium text-gray-700">Choose Fulfillment Method</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      className={`rounded-xl border p-3 text-left transition ${
                        fulfillmentMethod === 'pickup'
                          ? 'border-fuchsia-300 bg-fuchsia-50'
                          : 'border-gray-200 bg-white hover:border-fuchsia-200'
                      }`}
                      onClick={() => {
                        setFulfillmentMethod('pickup')
                        setPaymentMethod('')
                        setPaymentProof(null)
                        setAddress('')
                      }}
                    >
                      <p className="font-semibold text-gray-900">In-Store Pickup</p>
                      <p className="text-xs text-gray-600">Pay at store and pick up your products.</p>
                    </button>
                    <button
                      type="button"
                      className={`rounded-xl border p-3 text-left transition ${
                        fulfillmentMethod === 'cod'
                          ? 'border-fuchsia-300 bg-fuchsia-50'
                          : 'border-gray-200 bg-white hover:border-fuchsia-200'
                      }`}
                      onClick={() => setFulfillmentMethod('cod')}
                    >
                      <p className="font-semibold text-gray-900">Cash on Delivery (COD)</p>
                      <p className="text-xs text-gray-600">Proceed to digital payment options.</p>
                    </button>
                  </div>
                </div>

                {fulfillmentMethod === 'cod' && (
                  <div className="mt-4">
                    <label className="flex flex-col gap-1 text-sm">
                      <span className="font-medium text-gray-700">Address</span>
                      <textarea
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        placeholder="House no., street, barangay, city, province"
                        rows={3}
                        className="rounded-lg border border-gray-300 px-3 py-2 outline-none ring-fuchsia-300 transition focus:border-fuchsia-400 focus:ring-2"
                      />
                      <span className="text-xs text-gray-500">Required for COD delivery.</span>
                    </label>
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    onClick={() => setCurrentStep('checkout')}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={!canSubmitDetails}
                    className="rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                    onClick={() => setCurrentStep(showPaymentStep ? 'payment' : 'pickup-confirmation')}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {currentStep === 'pickup-confirmation' && (
              <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">Pickup Confirmation</h2>
                <p className="mt-2 rounded-lg bg-pink-50 p-3 text-sm text-pink-700">
                  Your order is confirmed. Please proceed to the store to pay and pick up your order.
                </p>
                <div className="mt-4 rounded-xl border border-pink-100 bg-pink-50/40 p-4">
                  <p className="font-medium text-gray-900">Order Summary</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700">
                    {cartItems.map((item) => (
                      <li key={item.name}>
                        {item.name} x {item.quantity} - {formatPrice(item.price * item.quantity)}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 font-semibold text-fuchsia-600">Total: {formatPrice(totals.subtotal)}</p>
                </div>
                <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700">
                  <p className="font-medium text-gray-900">Pickup Instructions</p>
                  <p className="mt-1">
                    Bring a valid ID and your registered phone number. Tell the staff your name for order verification.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    onClick={() => setCurrentStep('details')}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
                    onClick={() => setCurrentStep('final-confirmation')}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

            {currentStep === 'payment' && (
              <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">Payment Options</h2>
                <p className="mt-1 text-sm text-gray-600">
                  Choose either Bank Transfer or GCash, then confirm your payment.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    className={`rounded-xl border p-3 text-left transition ${
                      paymentMethod === 'bank'
                        ? 'border-fuchsia-300 bg-fuchsia-50'
                        : 'border-gray-200 bg-white hover:border-fuchsia-200'
                    }`}
                    onClick={() => setPaymentMethod('bank')}
                  >
                    <p className="font-semibold text-gray-900">Bank Transfer</p>
                    <p className="text-xs text-gray-600">Transfer to EL Glamorous bank account.</p>
                  </button>
                  <button
                    type="button"
                    className={`rounded-xl border p-3 text-left transition ${
                      paymentMethod === 'gcash'
                        ? 'border-fuchsia-300 bg-fuchsia-50'
                        : 'border-gray-200 bg-white hover:border-fuchsia-200'
                    }`}
                    onClick={() => setPaymentMethod('gcash')}
                  >
                    <p className="font-semibold text-gray-900">GCash</p>
                    <p className="text-xs text-gray-600">Pay to EL Glamorous GCash number.</p>
                  </button>
                </div>

                {accountDetails && (
                  <div className="mt-4 rounded-xl border border-pink-100 bg-pink-50/50 p-4">
                    <p className="text-sm font-semibold text-gray-900">{accountDetails.label} Details</p>
                    <p className="mt-2 text-sm text-gray-700">
                      Account Name: <span className="font-medium">{accountDetails.name}</span>
                    </p>
                    <p className="text-sm text-gray-700">
                      {paymentMethod === 'bank' ? 'Account Number' : 'GCash Number'}:{' '}
                      <span className="font-medium">{accountDetails.number}</span>
                    </p>
                    <label className="mt-3 flex flex-col gap-1 text-sm">
                      <span className="font-medium text-gray-700">Upload proof of payment (optional)</span>
                      <input
                        type="file"
                        onChange={(event) => setPaymentProof(event.target.files?.[0] ?? null)}
                        className="rounded-lg border border-gray-300 bg-white px-3 py-2"
                      />
                      {paymentProof && <span className="text-xs text-gray-600">Selected: {paymentProof.name}</span>}
                    </label>
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    onClick={() => setCurrentStep('details')}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={!paymentMethod}
                    className="rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                    onClick={() => setCurrentStep('final-confirmation')}
                  >
                    Confirm Payment
                  </button>
                </div>
              </div>
            )}

            {currentStep === 'final-confirmation' && (
              <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="text-lg font-semibold text-purple-700 sm:text-xl">Order Placed Successfully!</h2>
                <p className="mt-2 text-sm text-gray-700">Your order has been placed successfully.</p>

                <div className="mt-4 rounded-xl border border-pink-100 bg-pink-50/40 p-4">
                  <p className="font-medium text-gray-900">Order Details</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700">
                    {cartItems.map((item) => (
                      <li key={item.name}>
                        {item.name} x {item.quantity} - {formatPrice(item.price * item.quantity)}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 font-semibold text-fuchsia-600">Total: {formatPrice(totals.subtotal)}</p>
                  <p className="mt-2 text-sm text-gray-700">
                    Payment method:{' '}
                    <span className="font-medium">
                      {fulfillmentMethod === 'pickup'
                        ? 'Pay in-store on pickup'
                        : paymentMethod === 'bank'
                        ? 'Bank Transfer'
                        : paymentMethod === 'gcash'
                        ? 'GCash'
                        : 'Not selected'}
                    </span>
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
                    onClick={resetFlow}
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            )}
          </section>
        )}
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
                            onClick={() => handleUpdateQuantity(item.name, -1)}
                            className="rounded p-0.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                          >
                            −
                          </button>
                          <span className="min-w-[1.25rem] text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleUpdateQuantity(item.name, 1)}
                            className="rounded p-0.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(item.name)}
                          className="text-gray-400 hover:text-red-500"
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
                  disabled={!canProceedToCheckout}
                  onClick={() => {
                    setCurrentStep('checkout')
                    closeCart()
                  }}
                  className="w-full rounded-lg bg-fuchsia-600 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  )
}