import { useState } from 'react'
import { MapPin } from 'lucide-react'
import ModalShell from './ModalShell'
import { stylistsByBranch } from '../data/servicesData'
import {
  getInitials,
  getStylistPhotoCandidates,
  handleStylistPhotoError,
} from '../utils/stylistPhotos'

const branchContacts = [
  {
    id: 'mandaue',
    title: 'Mandaue City Branch',
    image:
      'Mandaue Branch.png',
  },
  {
    id: 'pajac',
    title: 'Pajac Branch',
    image:
      'Pajac Branch.jpg',
  },
  {
    id: 'pusok',
    title: 'Pusok Branch',
    image:
      'Pusok Branch.jpg',
  },
  {
    id: 'cebu',
    title: 'Cebu City Branch',
    image:
      'Cebu Branch.jpg',
  },
]

export default function ContactSection() {
  const [activeBranch, setActiveBranch] = useState(null)
  const activeTeam =
    activeBranch && stylistsByBranch[activeBranch.id]
      ? stylistsByBranch[activeBranch.id]
      : []

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-gradient-to-br from-fuchsia-50 via-purple-50 to-violet-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-pink-600 shadow-sm">
            Contact & Locations
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Visit Us</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Choose a branch to view the location photo and meet the team assigned to that branch.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {branchContacts.map((branch) => (
            <button
              key={branch.id}
              type="button"
              onClick={() => setActiveBranch(branch)}
              className="group relative overflow-hidden rounded-2xl border border-pink-100 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-pink-100/70 blur-2xl transition group-hover:bg-purple-100/70" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                <MapPin className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="relative mt-4 text-base font-semibold text-gray-900">
                {branch.title}
              </h3>
              <p className="relative mt-2 text-sm text-gray-500">
                View location photo and branch team
              </p>
              <span className="relative mt-4 inline-flex text-xs font-semibold uppercase tracking-wide text-accent">
                Open details
              </span>
            </button>
          ))}
        </div>

        <ModalShell
          open={!!activeBranch}
          onClose={() => setActiveBranch(null)}
          title={activeBranch?.title ?? ''}
        >
          {activeBranch && (
            <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
              <div className="rounded-2xl border border-pink-100 bg-white p-2 shadow-sm">
                <img
                  src={activeBranch.image}
                  alt={activeBranch.title}
                  className="mx-auto h-auto w-full max-w-full rounded-xl object-contain"
                />
              </div>
              {activeTeam.length > 0 && (
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                    Team assigned to this branch
                  </p>
                  <ul className="mt-3 grid gap-3 text-sm">
                    {activeTeam.map((member) => {
                      const photoCandidates = getStylistPhotoCandidates(member.name)
                      return (
                        <li
                          key={member.name}
                          className="flex items-center gap-3 rounded-xl bg-white px-3 py-2 shadow-sm"
                        >
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-accent/10">
                            <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-accent">
                              {getInitials(member.name)}
                            </div>
                            <img
                              src={photoCandidates[0]}
                              alt={`${member.name} profile`}
                              className="absolute inset-0 h-full w-full object-cover"
                              loading="lazy"
                              data-photo-index="0"
                              onError={(e) => handleStylistPhotoError(e, photoCandidates)}
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-gray-900">{member.name}</p>
                            <p className="text-xs font-medium uppercase tracking-wide text-accent">
                              {member.role}
                            </p>
                            {member.specialty && (
                              <p className="mt-1 text-xs text-gray-500">{member.specialty}</p>
                            )}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
          )}
        </ModalShell>
      </div>
    </section>
  )
}
