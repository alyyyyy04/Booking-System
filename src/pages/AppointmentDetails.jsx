import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, CheckCircle, User } from 'lucide-react'
import { push, ref, serverTimestamp } from 'firebase/database'
import { database, ensureAnonymousAuth } from '../firebase'

const parsePriceToNumber = (rawPrice) => {
  if (typeof rawPrice === 'number') return rawPrice
  if (typeof rawPrice !== 'string') return 0

  const firstNumericChunk = rawPrice.match(/[0-9,]+(\.\d+)?/)
  if (!firstNumericChunk) return 0

  return Number(firstNumericChunk[0].replace(/,/g, '')) || 0
}

export default function AppointmentDetails() {
  const location = useLocation()
  const { branchName, services, stylists } = location.state || {}
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
      const normalizedServices = services.map((service) => ({
        name: service.name,
        price: parsePriceToNumber(service.price),
        commissionRate: 0,
        commissionAmount: 0,
      }))

      await push(ref(database, 'appointments'), {
        customerName: form.name,
        phone: form.phone,
        preferredDate: form.date,
        preferredTime: form.time,
        notes: form.notes || '',
        branchName,
        services: normalizedServices,
        stylists: stylists || [],
        status: 'pending',
        createdAt: serverTimestamp(),
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

  if (!branchName || !services || services.length === 0) {
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
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 text-center">

        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Request Received
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-sm text-gray-500">
          Your appointment request has been submitted successfully.
        </p>

        {/* Branch */}
        <p className="mt-3 font-semibold text-gray-800">
          📍 {branchName}
        </p>

        {/* Services List */}
        <div className="mt-4 text-left">
          <p className="text-sm text-gray-600 mb-2">
            Selected Services:
          </p>

          <div className="divide-y">
            {services.map((service) => (
              <div
                key={`${service.name}-${service.price}`}
                className="flex justify-between py-2 text-sm"
              >
                <span className="text-gray-800 font-medium">
                  {service.name}
                </span>
                <span className="font-semibold text-accent">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Single Button */}
        <Link
          to="/"
          className="mt-6 block w-full rounded-lg bg-accent py-3 font-medium text-white hover:bg-accent-dark"
        >
          Back to Home
        </Link>

      </div>
    </div>
  )
}

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-lg px-4 py-8 sm:py-12">
        <Link
          to="/book/services"
          state={location.state}
          className="mb-6 inline-flex items-center gap-2 text-gray-600 transition hover:text-accent"
        >
          <ArrowLeft className="h-5 w-5" />
          Change services or stylist
        </Link>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
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
