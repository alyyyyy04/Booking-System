const team = [
  {
    name: 'Sarah Johnson',
    role: 'Master Stylist',
    specialty: 'Color Specialist',
    experience: '12 years experience',
    image:
      'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Senior Stylist',
    specialty: "Men's Grooming",
    experience: '10 years experience',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Senior Stylist',
    specialty: 'Bridal & Events',
    experience: '8 years experience',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Our talented stylists are dedicated to bringing your vision to life
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 font-medium text-accent">{member.role}</p>
                <p className="mt-2 text-sm text-gray-600">
                  Specialty: {member.specialty}
                </p>
                <p className="text-sm text-gray-500">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
