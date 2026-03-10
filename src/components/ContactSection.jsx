import { MapPin, Phone, Mail } from 'lucide-react'

const contactItems = [
  {
    icon: MapPin,
    title: 'Location',
    lines: ['123 Beauty Street', 'New York, NY 10001'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['(555) 123-4567'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['hello@elglamorous.com'],
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Visit Us
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            We&apos;d love to see you at our salon
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {contactItems.map(({ icon: Icon, title, lines }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon className="h-7 w-7" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <div className="mt-2 space-y-1 text-gray-600">
                {lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div id="book" className="mt-12 scroll-mt-24 text-center">
          <p className="text-gray-600">Ready to book your appointment?</p>
          <a
            href="#book"
            className="mt-4 inline-block rounded-full bg-accent px-8 py-3 font-medium text-white shadow-md transition hover:bg-accent-dark hover:shadow-lg"
          >
            Schedule Now
          </a>
        </div>
      </div>
    </section>
  )
}
