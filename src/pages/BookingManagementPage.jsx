import { useMemo, useState } from 'react'
import { stylistsByBranch } from '../data/servicesData'

const BRANCHES = [
  { id: 'mandaue', label: 'Mandaue Branch' },
  { id: 'pajac', label: 'Pajac Branch' },
  { id: 'pusok', label: 'Pusok Branch' },
  { id: 'cebu', label: 'Cebu Branch' },
]

const CUSTOMERS = [
  'Walk-in Customer',
  'Maria Santos',
  'John Dela Cruz',
  'Alyssa Yap',
  'Kenneth Lim',
]

const SERVICE_PRODUCT_CATALOG = [
  { id: 'svc-massage', label: 'Massage', kind: 'service', basePrice: 500, tags: ['massage'] },
  { id: 'svc-inject', label: 'Inject', kind: 'service', basePrice: 1200, tags: ['inject', 'major'] },
  { id: 'svc-facial', label: 'Facial Treatment', kind: 'service', basePrice: 899, tags: ['major'] },
  { id: 'svc-haircut', label: 'Haircut', kind: 'service', basePrice: 250, tags: [] },
  { id: 'svc-rebond', label: 'Premium Hair Rebond', kind: 'service', basePrice: 3000, tags: ['major'] },
  { id: 'prd-shampoo', label: 'Premium Shampoo', kind: 'product', basePrice: 399, tags: [] },
  { id: 'prd-serum', label: 'Hair Serum', kind: 'product', basePrice: 499, tags: [] },
]

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value || 0)

const normalizeName = (name) => name.toLowerCase().replace(/[^a-z]/g, '')

const getCommissionRate = ({ branchId, employeeName, item, price }) => {
  const employeeKey = normalizeName(employeeName)

  if (branchId === 'mandaue' && employeeKey === normalizeName('Yekla, Sanny Grace')) {
    if (item.tags.includes('massage')) return 0.4
    if (item.tags.includes('inject')) return 0.1
    if (item.kind === 'product') return 0.1
    return 0.05
  }

  if (branchId === 'pusok' && employeeKey === normalizeName('Pedor, Rowena')) {
    if (item.kind === 'product') return 0.1
    if (item.kind === 'service' && price > 499 && item.tags.includes('major')) return 0.1
    if (item.kind === 'service') return 0.05
  }

  if (branchId === 'cebu' && employeeKey.includes(normalizeName('Jennifer'))) {
    return 0.05
  }

  if (item.kind === 'product') return 0.08
  return 0.05
}

export default function BookingManagementPage() {
  const [bookings, setBookings] = useState([])
  const [form, setForm] = useState({
    branchId: 'mandaue',
    customer: CUSTOMERS[0],
    employeeName: '',
    itemIds: [],
    prices: {},
    bookingDate: new Date().toISOString().slice(0, 10),
  })
  const [error, setError] = useState('')

  const [filters, setFilters] = useState({
    branchId: 'all',
    employeeName: 'all',
    fromDate: '',
    toDate: '',
  })

  const employeesForBranch = stylistsByBranch[form.branchId] || []

  const selectedItems = useMemo(
    () => SERVICE_PRODUCT_CATALOG.filter((item) => form.itemIds.includes(item.id)),
    [form.itemIds],
  )

  const commissionRows = useMemo(
    () =>
      selectedItems.map((item) => {
        const enteredPrice = Number(form.prices[item.id] ?? item.basePrice)
        const price = Number.isFinite(enteredPrice) ? enteredPrice : 0
        const rate = getCommissionRate({
          branchId: form.branchId,
          employeeName: form.employeeName,
          item,
          price,
        })
        const commissionAmount = price * rate
        return { ...item, price, rate, commissionAmount }
      }),
    [selectedItems, form.prices, form.branchId, form.employeeName],
  )

  const totals = useMemo(() => {
    const total = commissionRows.reduce((sum, row) => sum + row.price, 0)
    const commission = commissionRows.reduce((sum, row) => sum + row.commissionAmount, 0)
    return { total, commission, net: total - commission }
  }, [commissionRows])

  const handleItemToggle = (itemId) => {
    setForm((prev) => {
      const exists = prev.itemIds.includes(itemId)
      const itemIds = exists
        ? prev.itemIds.filter((id) => id !== itemId)
        : [...prev.itemIds, itemId]
      return { ...prev, itemIds }
    })
  }

  const handleSubmitBooking = (e) => {
    e.preventDefault()
    setError('')
    if (!form.employeeName) return setError('Please assign an employee.')
    if (!form.itemIds.length) return setError('Please select at least one service or product.')

    const branchLabel = BRANCHES.find((b) => b.id === form.branchId)?.label || form.branchId

    setBookings((prev) => [
      {
        id: `BK-${Date.now()}`,
        createdAt: new Date().toISOString(),
        bookingDate: form.bookingDate,
        branchId: form.branchId,
        branchLabel,
        customer: form.customer,
        employeeName: form.employeeName,
        rows: commissionRows,
        total: totals.total,
        commission: totals.commission,
        net: totals.net,
      },
      ...prev,
    ])
  }

  const filteredBookings = useMemo(
    () =>
      bookings.filter((booking) => {
        if (filters.branchId !== 'all' && booking.branchId !== filters.branchId) return false
        if (filters.employeeName !== 'all' && booking.employeeName !== filters.employeeName)
          return false
        if (filters.fromDate && booking.bookingDate < filters.fromDate) return false
        if (filters.toDate && booking.bookingDate > filters.toDate) return false
        return true
      }),
    [bookings, filters],
  )

  const commissionSummaryByEmployee = useMemo(() => {
    const map = new Map()
    filteredBookings.forEach((booking) => {
      const current = map.get(booking.employeeName) || 0
      map.set(booking.employeeName, current + booking.commission)
    })
    return Array.from(map.entries())
      .map(([employeeName, commission]) => ({ employeeName, commission }))
      .sort((a, b) => b.commission - a.commission)
  }, [filteredBookings])

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-[1.1fr,1fr]">
        <section className="rounded-2xl bg-white p-5 shadow-md sm:p-6">
          <p className="text-sm font-medium text-accent">Booking Management</p>
          <h1 className="mt-1 text-2xl font-bold text-gray-900">Create New Booking</h1>
          <p className="mt-1 text-sm text-gray-600">
            Select branch, assign employee, add services/products, and auto-calculate commission.
          </p>

          <form onSubmit={handleSubmitBooking} className="mt-5 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                <span className="mb-1 block font-medium text-gray-700">Branch</span>
                <select
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  value={form.branchId}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, branchId: e.target.value, employeeName: '' }))
                  }
                >
                  {BRANCHES.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm">
                <span className="mb-1 block font-medium text-gray-700">Customer</span>
                <select
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  value={form.customer}
                  onChange={(e) => setForm((prev) => ({ ...prev, customer: e.target.value }))}
                >
                  {CUSTOMERS.map((customer) => (
                    <option key={customer} value={customer}>
                      {customer}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                <span className="mb-1 block font-medium text-gray-700">Assigned Employee</span>
                <select
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  value={form.employeeName}
                  onChange={(e) => setForm((prev) => ({ ...prev, employeeName: e.target.value }))}
                >
                  <option value="">Select employee</option>
                  {employeesForBranch.map((employee) => (
                    <option key={employee.name} value={employee.name}>
                      {employee.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm">
                <span className="mb-1 block font-medium text-gray-700">Booking Date</span>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  value={form.bookingDate}
                  onChange={(e) => setForm((prev) => ({ ...prev, bookingDate: e.target.value }))}
                />
              </label>
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <p className="font-semibold text-gray-900">Services / Products</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {SERVICE_PRODUCT_CATALOG.map((item) => {
                  const checked = form.itemIds.includes(item.id)
                  return (
                    <label key={item.id} className="rounded-lg border border-gray-200 p-3 text-sm">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => handleItemToggle(item.id)}
                          />
                          <span className="font-medium text-gray-800">{item.label}</span>
                        </div>
                        <span className="text-xs uppercase text-gray-500">{item.kind}</span>
                      </div>
                      {checked && (
                        <input
                          type="number"
                          min="0"
                          className="mt-2 w-full rounded-md border border-gray-300 px-2 py-1"
                          value={form.prices[item.id] ?? item.basePrice}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              prices: { ...prev.prices, [item.id]: e.target.value },
                            }))
                          }
                        />
                      )}
                    </label>
                  )
                })}
              </div>
            </div>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <div className="grid gap-3 rounded-xl bg-gray-100 p-4 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase text-gray-500">Total</p>
                <p className="text-lg font-semibold text-gray-900">{formatCurrency(totals.total)}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-500">Commission</p>
                <p className="text-lg font-semibold text-accent">
                  {formatCurrency(totals.commission)}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-500">Net Earnings</p>
                <p className="text-lg font-semibold text-gray-900">{formatCurrency(totals.net)}</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-4 py-3 font-medium text-white hover:bg-accent-dark"
            >
              Save Booking
            </button>
          </form>
        </section>

        <section className="space-y-6">
          <div className="rounded-2xl bg-white p-5 shadow-md sm:p-6">
            <h2 className="text-xl font-bold text-gray-900">Commission Breakdown</h2>
            <div className="mt-4 space-y-3">
              {commissionRows.length === 0 ? (
                <p className="text-sm text-gray-500">Select services/products to see breakdown.</p>
              ) : (
                commissionRows.map((row) => (
                  <div key={row.id} className="rounded-lg bg-gray-50 p-3 text-sm">
                    <p className="font-semibold text-gray-900">
                      {row.label} ({formatCurrency(row.price)})
                    </p>
                    <p className="text-accent">
                      Commission: {(row.rate * 100).toFixed(0)}% ={' '}
                      {formatCurrency(row.commissionAmount)}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-md sm:p-6">
            <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <select
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
                value={filters.branchId}
                onChange={(e) => setFilters((prev) => ({ ...prev, branchId: e.target.value }))}
              >
                <option value="all">All branches</option>
                {BRANCHES.map((branch) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.label}
                  </option>
                ))}
              </select>
              <select
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
                value={filters.employeeName}
                onChange={(e) => setFilters((prev) => ({ ...prev, employeeName: e.target.value }))}
              >
                <option value="all">All employees</option>
                {Array.from(new Set(bookings.map((b) => b.employeeName))).map((employee) => (
                  <option key={employee} value={employee}>
                    {employee}
                  </option>
                ))}
              </select>
              <input
                type="date"
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
                value={filters.fromDate}
                onChange={(e) => setFilters((prev) => ({ ...prev, fromDate: e.target.value }))}
              />
              <input
                type="date"
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
                value={filters.toDate}
                onChange={(e) => setFilters((prev) => ({ ...prev, toDate: e.target.value }))}
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {commissionSummaryByEmployee.length === 0 ? (
                <p className="text-sm text-gray-500">No commission data yet.</p>
              ) : (
                commissionSummaryByEmployee.map((summary) => (
                  <div key={summary.employeeName} className="rounded-lg bg-gray-50 p-3 text-sm">
                    <p className="font-medium text-gray-900">{summary.employeeName}</p>
                    <p className="text-accent">
                      Total Commission: {formatCurrency(summary.commission)}
                    </p>
                  </div>
                ))
              )}
            </div>

            <div className="mt-5 space-y-2">
              {filteredBookings.map((booking) => (
                <div key={booking.id} className="rounded-xl border border-gray-200 p-3 text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-gray-900">
                      {booking.customer} - {booking.branchLabel}
                    </p>
                    <p className="text-xs text-gray-500">{booking.bookingDate}</p>
                  </div>
                  <p className="mt-1 text-gray-600">Assigned: {booking.employeeName}</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs">
                    <span>Total: {formatCurrency(booking.total)}</span>
                    <span className="text-accent">
                      Commission: {formatCurrency(booking.commission)}
                    </span>
                    <span>Net: {formatCurrency(booking.net)}</span>
                  </div>
                </div>
              ))}
              {!filteredBookings.length && (
                <p className="text-sm text-gray-500">No bookings found for current filters.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
