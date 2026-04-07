import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, CheckCircle, MapPin, Sparkles, User } from 'lucide-react'
import { push, ref } from 'firebase/database'
import { database, ensureAnonymousAuth } from '../firebase'
import {
  SERVICE_PRODUCT_CATALOG,
  getCommissionRate,
} from '../data/servicesData'

const parsePriceToNumber = (rawPrice) => {
  if (typeof rawPrice === 'number') return rawPrice
  if (typeof rawPrice !== 'string') return 0

  const firstNumericChunk = rawPrice.match(/[0-9,]+(\.\d+)?/)
  if (!firstNumericChunk) return 0

  return Number(firstNumericChunk[0].replace(/,/g, '')) || 0
}

const BOOKING_PATH_CANDIDATES = ['appointments', 'bookingRequests', 'bookings']

const normalizeLabel = (value) => value.toLowerCase().replace(/\s+/g, ' ').trim()

const findCatalogItemByServiceName = (serviceName) => {
  const exactMatch = SERVICE_PRODUCT_CATALOG.find((i) => i.label === serviceName)
  if (exactMatch) return exactMatch

  const normalizedName = normalizeLabel(serviceName)
  return (
    SERVICE_PRODUCT_CATALOG.find((i) => normalizeLabel(i.label) === normalizedName) ||
    null
  )
}

const saveBookingRequest = async (payload) => {
  let lastError = null

  for (const path of BOOKING_PATH_CANDIDATES) {
    try {
      await push(ref(database, path), payload)
      return
    } catch (error) {
      lastError = error
      // Continue trying other known paths only for permission-related failures.
      if (error?.code !== 'PERMISSION_DENIED') break
    }
  }

  throw lastError
}

export default function AppointmentDetails() {
  const location = useLocation()
  const { branchId, branchName, services, stylists } = location.state || {}
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 11)
      setForm((prev) => ({ ...prev, phone: digitsOnly }))
      return
    }

    if (name === 'notes') {
      setForm((prev) => ({ ...prev, notes: value.slice(0, 200) }))
      return
    }

    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    setSubmitting(true)
    try {
      await ensureAnonymousAuth()
      const selectedStylists = Array.isArray(stylists) ? stylists : []
      const stylistsForCommission =
        selectedStylists.length > 0 ? selectedStylists : [{ name: 'Any available stylist' }]

      const normalizedServices = services.map((service) => {
        const numericPrice = parsePriceToNumber(service.price)
        const item = findCatalogItemByServiceName(service.name)
        const fallbackItem = item || {
          id: `fallback-${service.name}`,
          label: service.name,
          kind: 'service',
          basePrice: numericPrice,
          tags: [],
        }

        const assignedStylists = stylistsForCommission.map((stylist) => {
          const employeeName = stylist.name
          const employeePosition = stylist.role || 'Any available stylist'
          const rate = getCommissionRate({
            branchId,
            employeeName,
            item: fallbackItem,
            price: numericPrice,
          })
          const share = 1 / stylistsForCommission.length
          const commission = numericPrice * rate * share

          console.log('COMMISSION DEBUG:', {
            service: service.name,
            employeeName,
            item: fallbackItem,
            tags: fallbackItem?.tags,
            rate,
            price: numericPrice,
            commission,
          })

          return {
            name: employeeName,
            position: employeePosition,
            share,
            commissionRate: rate,
            commissionAmount: commission,
          }
        })

        const totalServiceCommission = assignedStylists.reduce(
          (sum, stylist) => sum + stylist.commissionAmount,
          0,
        )

        return {
          name: service.name,
          type: fallbackItem.kind || 'service',
          price: numericPrice,
          assignedStylists,
          totalServiceCommission,
        }
      })
      const totalAmount = normalizedServices.reduce((sum, item) => sum + item.price, 0)
      const totalCommission = normalizedServices.reduce(
        (sum, item) => sum + item.totalServiceCommission,
        0,
      )

      await saveBookingRequest({
        customerName: form.name,
        phone: form.phone,
        preferredDate: form.date,
        preferredTime: form.time,
        notes: form.notes || '',
        branchId: branchId || '',
        branchName,
        services: normalizedServices,
        stylists:
          selectedStylists.length > 0
            ? selectedStylists.map((stylist) => ({
                name: stylist.name,
                position: stylist.role || 'Any available stylist',
                specialty: stylist.specialty || '',
              }))
            : [
                {
                  name: 'Any available stylist',
                  position: 'Any available stylist',
                },
              ],
        totalAmount,
        totalCommission,
        status: 'pending',
        createdAt: Date.now(),
      })
      setSubmitted(true)
    } catch (error) {
      if (error?.code === 'auth/admin-restricted-operation') {
        setSubmitError(
          'Anonymous sign-in is disabled in Firebase Auth. Enable Anonymous provider in Authentication > Sign-in method.',
        )
      } else if (error?.code === 'PERMISSION_DENIED') {
        setSubmitError(
          'Firebase denied write access. Please update Realtime Database rules to allow writing appointments.',
        )
      } else {
        setSubmitError('Failed to save booking request. Please try again.')
      }
      console.error('Failed to save appointment:', error)
    } finally {
      setSubmitting(false)
    }
  }

  if (!branchId || !branchName || !services || services.length === 0) {
    return (
      <div className="mx-auto max-w-md px-4 py-12 text-center">
        <p className="text-gray-600">No booking selected.</p>
        <Link to="/book" className="mt-4 inline-block text-accent hover:underline">
          Start over
        </Link>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="booking-flow-bg relative flex min-h-[82vh] items-center justify-center overflow-hidden px-4 py-8">
        <div className="pointer-events-none absolute -left-16 top-12 h-56 w-56 rounded-full bg-pink-300/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-8 h-64 w-64 rounded-full bg-fuchsia-300/30 blur-3xl" />

        <div className="booking-fade-up w-full max-w-xl rounded-3xl border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur-md sm:p-8">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-green-50 shadow-inner">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <h2 className="mt-5 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Request Received! 💖
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-7 text-gray-600 sm:text-base">
            Your appointment request has been successfully submitted. Thank you for choosing El Glam
            ✨
          </p>

          <div className="mt-6 rounded-2xl border border-pink-100 bg-white/90 p-4">
            <p className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <MapPin className="h-4 w-4 text-pink-500" />
              Branch: <span className="font-semibold text-gray-900">{branchName}</span>
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-rose-100 bg-rose-50/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rose-500">
              Selected Service
            </p>
            <ul className="mt-3 space-y-2">
              {services.map((service) => (
                <li
                  key={`${service.name}-${service.price}`}
                  className="flex items-center justify-between gap-3 rounded-lg bg-white px-3 py-2"
                >
                  <span className="inline-flex items-center gap-2 font-medium text-gray-800">
                    <Sparkles className="h-4 w-4 text-pink-500" />
                    {service.name}
                  </span>
                  <span className="font-semibold text-rose-600">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-2xl bg-pink-50/80 p-4 text-sm leading-7 text-gray-600">
            Please wait for a confirmation message from our receptionist. You will receive a text
            once your booking has been reviewed and confirmed.
          </div>

          <p className="mt-4 text-center text-sm font-medium text-gray-700 sm:text-base">
            We appreciate your patience and can&apos;t wait to take care of you! 💕
          </p>

          <Link
            to="/"
            className="mt-7 block w-full rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-center font-semibold text-white shadow-md transition hover:from-pink-600 hover:to-rose-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="booking-flow-bg relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-16 top-20 h-56 w-56 rounded-full bg-pink-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-purple-200/55 blur-3xl" />
      <div className="mx-auto max-w-lg px-4 py-8 sm:py-12">
        <Link
          to="/book/services"
          state={location.state}
          className="mb-6 inline-flex items-center gap-2 text-gray-600 transition hover:text-accent"
        >
          <ArrowLeft className="h-5 w-5" />
          Change services or stylist
        </Link>
        <div className="booking-fade-up rounded-2xl border border-white/70 bg-white/92 p-6 shadow-md backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-gray-900">
            Appointment details
          </h1>
          <div className="mt-4 space-y-3 rounded-lg bg-gray-50 p-4">
            <div>
              <p className="text-sm text-gray-500">Branch</p>
              <p className="font-medium text-gray-900">{branchName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Selected services</p>
              <ul className="mt-1 space-y-1 text-sm">
                {services.map((service) => (
                  <li
                    key={`${service.name}-${service.price}`}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="font-medium text-gray-900">
                      {service.name}
                    </span>
                    <span className="text-accent font-semibold">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white px-3 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                <User className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <p className="text-gray-500">Preferred stylist</p>
                {stylists && stylists.length > 0 ? (
                  <ul className="mt-1 space-y-1 text-sm">
                    {stylists.map((s) => (
                      <li key={s.name} className="flex flex-col">
                        <span className="font-medium text-gray-900">{s.name}</span>
                        <span className="text-xs text-gray-500">
                          {s.role}
                          {s.specialty ? ` • ${s.specialty}` : ''}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-medium text-gray-900">
                    Any available stylist
                  </p>
                )}
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                inputMode="numeric"
                pattern="^09\d{9}$"
                title="Use 11-digit PH number (e.g. 09XXXXXXXXX)"
                maxLength={11}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Preferred date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Preferred time
                </label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  value={form.time}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                Notes (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={form.notes}
                onChange={handleChange}
                maxLength={200}
                placeholder="Maximum 200 characters"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"
              />
              <p className="mt-1 text-xs text-gray-500">{form.notes.length}/200</p>
            </div>
            {submitError ? (
              <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
                {submitError}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 font-medium text-white transition hover:bg-accent-dark"
            >
              <Calendar className="h-5 w-5" />
              {submitting ? 'Saving booking...' : 'Confirm booking request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
