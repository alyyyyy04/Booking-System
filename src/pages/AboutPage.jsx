export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">About Us</p>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            EL Glamorous Face and Body Clinic, Salon and Spa
          </h1>
          <p className="text-base leading-7 text-gray-600">
            El Glam is built to be more than a beauty destination. We are a welcoming space where
            clients can feel cared for, confident, and empowered through expert service and a
            personalized experience.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-4 pb-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Owner Story</h2>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Founded by a passionate beauty professional, El Glam reflects years of dedication to
            helping people look and feel their best. The owner&apos;s goal has always been to create
            a salon and clinic where every client receives high-quality care, clear guidance, and a
            relaxing environment.
          </p>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">What El Glam Offers</h2>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            We provide a complete beauty and wellness experience, from salon styling and treatments
            to face and body care. Our team combines modern techniques with client-first service to
            deliver safe, effective, and confidence-boosting results.
          </p>
        </article>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <article className="rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900">Mission</h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            To provide accessible, high-quality beauty and wellness services that help every client
            feel confident and cared for.
          </p>
        </article>
        <article className="rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900">Vision</h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            To become a trusted name in beauty and body care known for excellence, innovation, and
            meaningful client relationships.
          </p>
        </article>
        <article className="rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900">Background</h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            El Glam continues to grow through a commitment to professional standards, continuous
            learning, and a service culture that values every person who walks through our doors.
          </p>
        </article>
      </section>
    </main>
  )
}
