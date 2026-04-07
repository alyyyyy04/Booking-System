import { Clock } from 'lucide-react'

export default function ServiceCard({
  image,
  imageAlt,
  icon: Icon,
  title,
  description,
  price,
  duration,
  ctaLabel = 'Book This Service',
  onCtaClick,
}) {
  return (
    <article className="service-card group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
        <div className="service-card-shine pointer-events-none absolute inset-0 z-10" />
        <img
          src={image}
          alt={imageAlt}
          className="service-card-image h-full w-full object-cover"
        />
      </div>
      <div className="service-card-body flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="service-card-icon h-5 w-5 shrink-0 text-accent" aria-hidden />}
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="mt-2 flex-1 text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-accent">{price}</span>
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-4 w-4" aria-hidden />
            {duration}
          </span>
        </div>
        <button
          type="button"
          onClick={onCtaClick}
          className="service-card-cta mt-4 w-full rounded-lg bg-accent py-3 text-center font-medium text-white transition hover:bg-accent-dark"
        >
          <span className="inline-flex items-center gap-2">
            {ctaLabel}
            <span className="service-card-cta-arrow" aria-hidden>
              →
            </span>
          </span>
        </button>
      </div>
    </article>
  )
}
