import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Users, ArrowLeft } from 'lucide-react'
import { stylistsByBranch } from '../data/servicesData'
import {
  getInitials,
  getStylistPhotoCandidates,
  handleStylistPhotoError,
} from '../utils/stylistPhotos'

const normalizeText = (value) => String(value || '').toLowerCase()

const getServiceSpecializations = (services) => {
  const tokens = new Set()
  const list = Array.isArray(services) ? services : []

  for (const service of list) {
    const name = normalizeText(service?.name)
    const subcategory = normalizeText(service?.subcategory)
    const categoryId = service?.categoryId

    // Nail services
    const isNail =
      subcategory.includes('nail') ||
      name.includes('nail') ||
      name.includes('manicure') ||
      name.includes('pedicure') ||
      name.includes('extensions') ||
      name.includes('polish') ||
      name.includes('stones')

    // Hair services
    const isHair =
      categoryId === 'hair' ||
      subcategory.includes('hair') ||
      name.includes('hair') ||
      name.includes('cut') ||
      name.includes('rebond') ||
      name.includes('color') ||
      name.includes('blowdry') ||
      name.includes('styling') ||
      name.includes('balayage')

    // Massage services
    const isMassage =
      name.includes('massage') ||
      subcategory.includes('massage') ||
      name.includes('ventosa') ||
      name.includes('cupping') ||
      name.includes('slim') ||
      name.includes('trio slim') ||
      name.includes('rf') ||
      name.includes('cavitation')

    // Face services
    const isFacial =
      categoryId === 'face' ||
      subcategory.includes('facial') ||
      name.includes('facial') ||
      name.includes('eyelash') ||
      name.includes('eyebrow') ||
      name.includes('brow') ||
      name.includes('waxing') ||
      name.includes('threading') ||
      // Shots / drips are typically handled by facial specialists.
      name.includes('gluta') ||
      name.includes('inject') ||
      name.includes('drip') ||
      name.includes('shot')

    if (isNail) tokens.add('nail')
    if (isHair) tokens.add('hair')
    if (isMassage) tokens.add('massage')
    if (isFacial) tokens.add('facial')
  }

  return tokens
}

const getStylistSpecializations = (role) => {
  const r = normalizeText(role)
  const tokens = new Set()

  if (r.includes('nail')) tokens.add('nail')
  if (r.includes('hair') || r.includes('barber') || r.includes('hairdresser')) {
    tokens.add('hair')
  }
  if (r.includes('massage')) tokens.add('massage')
  if (r.includes('facialist')) tokens.add('facial')

  return tokens
}

const getTokenLabel = (token) => {
  switch (token) {
    case 'massage':
      return 'Massage Therapist'
    case 'hair':
      return 'Hair Stylist'
    case 'nail':
      return 'Nail Technician'
    case 'facial':
      return 'Facialist'
    default:
      return token
  }
}

export default function StylistSelection() {
  const location = useLocation()
  const navigate = useNavigate()
  const { branchId, branchName, services } = location.state || {}
  const [selectedStylists, setSelectedStylists] = useState([])

  const stylists = branchId ? stylistsByBranch[branchId] || [] : []

  const requiredSpecializations = useMemo(
    () => getServiceSpecializations(services),
    [services],
  )

  const filteredStylists = useMemo(() => {
    if (!stylists.length) return []
    if (requiredSpecializations.size === 0) return stylists

    return stylists.filter((stylist) => {
      const stylistTokens = getStylistSpecializations(stylist.role)
      return [...requiredSpecializations].some((t) => stylistTokens.has(t))
    })
  }, [stylists, requiredSpecializations])

  const hasNoAvailableStylist = filteredStylists.length === 0

  // If the available stylists change (e.g., route state changes), keep selection valid.
  useEffect(() => {
    setSelectedStylists((prev) =>
      prev.filter((s) => filteredStylists.some((fs) => fs.name === s.name)),
    )
  }, [filteredStylists])

  const toggleStylist = (stylist) => {
    setSelectedStylists((prev) => {
      const exists = prev.find((s) => s.name === stylist.name)
      if (exists) {
        return prev.filter((s) => s.name !== stylist.name)
      }
      return [...prev, stylist]
    })
  }

  const handleContinue = () => {
    if (hasNoAvailableStylist) {
      navigate('/book/details', {
        state: {
          branchId,
          branchName,
          services,
          stylists: [],
        },
      })
      return
    }

    if (!selectedStylists.length) return
    navigate('/book/details', {
      state: {
        branchId,
        branchName,
        services,
        stylists: selectedStylists,
      },
    })
  }

  if (!branchId || !branchName || !services || !services.length) {
    return (
      <div className="mx-auto max-w-md px-4 py-12 text-center">
        <p className="text-gray-600">No booking information found.</p>
        <Link to="/book" className="mt-4 inline-block text-accent hover:underline">
          Start over
        </Link>
      </div>
    )
  }

  return (
    <div className="booking-flow-bg relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-pink-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-16 h-64 w-64 rounded-full bg-violet-200/55 blur-3xl" />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
        <Link
          to="/book/services"
          state={{ branchId, branchName }}
          className="mb-6 inline-flex items-center gap-2 text-gray-600 transition hover:text-accent"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to services
        </Link>

        <div className="mb-8">
          <p className="text-sm font-medium text-accent">Step 3 of 4</p>
          <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
            Choose your stylist
          </h1>
          <p className="mt-2 text-gray-600">
            Available stylists at <span className="font-semibold">{branchName}</span>
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
          <h2 className="text-sm font-semibold text-gray-800">
            Selected services
          </h2>
          <ul className="mt-2 space-y-1 text-sm">
            {services.map((service) => (
              <li
                key={`${service.name}-${service.price}`}
                className="flex items-center justify-between gap-2"
              >
                <span className="font-medium text-gray-900">{service.name}</span>
                <span className="text-accent font-semibold">{service.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStylists.map((stylist, idx) => {
            const isSelected = selectedStylists.some(
              (s) => s.name === stylist.name,
            )
            const stylistTokens = getStylistSpecializations(stylist.role)
            const activeTokens = [...stylistTokens].filter((t) =>
              requiredSpecializations.has(t),
            )
            const photoCandidates = getStylistPhotoCandidates(stylist.name)
            return (
              <button
                key={stylist.name}
                type="button"
                onClick={() => toggleStylist(stylist)}
                className={`booking-fade-up booking-interactive-card flex flex-col items-start rounded-2xl border-2 bg-white/92 p-5 text-left shadow-md backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  isSelected ? 'border-accent' : 'border-gray-200'
                }`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-accent/10">
                  <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-accent">
                    {getInitials(stylist.name)}
                  </div>
                  <img
                    src={photoCandidates[0]}
                    alt={`${stylist.name} profile`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    data-photo-index="0"
                    onError={(e) => handleStylistPhotoError(e, photoCandidates)}
                  />
                </div>
                <p className="mt-3 text-sm font-medium uppercase tracking-wide text-gray-500">
                  {stylist.role}
                </p>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  {stylist.name}
                </p>
                {activeTokens.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {activeTokens.map((token) => (
                      <span
                        // Token-based key is stable for the same role string.
                        key={`${stylist.name}-${token}`}
                        className="rounded-full bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-700"
                      >
                        {getTokenLabel(token)}
                      </span>
                    ))}
                  </div>
                )}
                {stylist.specialty && (
                  <p className="mt-1 text-sm text-gray-500">
                    {stylist.specialty}
                  </p>
                )}
                {isSelected && (
                  <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    <Users className="h-3 w-3" />
                    Selected
                  </p>
                )}
              </button>
            )
          })}
        </div>

        {stylists.length === 0 && (
          <p className="mt-4 text-sm text-gray-600">
            No specific stylists are listed for this branch yet. You can continue
            without choosing a stylist.
          </p>
        )}

        {stylists.length > 0 && filteredStylists.length === 0 && (
          <p className="mt-4 text-sm text-gray-600">
            This service currently has no assigned stylist.
Our receptionist will personally select the best available stylist for you upon arrival. You’ll be notified once your booking is confirmed.
          </p>
        )}

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() =>
              navigate('/book/details', {
                state: { branchId, branchName, services, stylists: [] },
              })
            }
            className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            No preference – any available stylist
          </button>
          <button
            type="button"
            onClick={handleContinue}
            disabled={!hasNoAvailableStylist && !selectedStylists.length}
            className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600"
          >
            {hasNoAvailableStylist
              ? 'Confirm your appointment'
              : 'Continue with selected stylists'}
          </button>
        </div>
      </div>
    </div>
  )
}

