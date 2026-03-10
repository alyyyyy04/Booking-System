import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, CheckCircle, User } from 'lucide-react'

export default function AppointmentDetails() {
  const location = useLocation()
  const { branchName, services, stylist } = location.state || {}
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
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
      <div className="mx-auto max-w-md px-4 py-12 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Request received
        </h2>
        <div className="mt-2 space-y-1 text-gray-600">
          <p>
            We will confirm your appointment at <strong>{branchName}</strong> for
            the following services:
          </p>
          <ul className="mt-2 list-inside list-disc text-left text-sm">
            {services.map((service) => (
              <li key={`${service.name}-${service.price}`}>
                <span className="font-medium text-gray-900">{service.name}</span>{' '}
                <span className="text-accent font-semibold">{service.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white hover:bg-accent-dark"
        >
          Back to home
        </Link>
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
                <p className="font-medium text-gray-900">
                  {stylist?.name || 'Any available stylist'}
                </p>
                {stylist?.role && (
                  <p className="text-xs text-gray-500">{stylist.role}</p>
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
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 font-medium text-white transition hover:bg-accent-dark"
            >
              <Calendar className="h-5 w-5" />
              Confirm booking request
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
