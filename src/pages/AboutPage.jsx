import { useEffect } from 'react'
import { Award, Calendar, Clock3, Heart, Sparkles, Star } from 'lucide-react'
import aboutUsHero from '../assets/aboutus-hero.png'
import aboutWhatIsPhoto from '../assets/about-what-is.png'
import founderPhoto from '../assets/founder-photo.png'

const promiseCards = [
  {
    icon: Sparkles,
    title: 'Premium Beauty Services',
    description: 'From signature facials to luxury styling, every service is personalized with care.',
    gradient: 'from-[#F13E93] to-[#FF85BB]',
  },
  {
    icon: Award,
    title: 'Skilled Professionals',
    description: 'Our experts are trained in advanced techniques and industry best practices.',
    gradient: 'from-[#FF85BB] to-[#F13E93]',
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    description: 'We prioritize comfort, trust, and outcomes that make every guest feel confident.',
    gradient: 'from-[#FF85BB] to-[#F13E93]',
  },
  {
    icon: Calendar,
    title: 'Modern Booking Experience',
    description: 'Simple scheduling, thoughtful follow-up, and seamless service from start to finish.',
    gradient: 'from-[#F13E93] to-[#FF85BB]',
  },
]

function GradientBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#F13E93] to-[#FF85BB] px-5 py-2 text-sm font-semibold text-white shadow-md">
      {children}
    </span>
  )
}

export default function AboutPage() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.18 },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="overflow-x-hidden bg-white text-gray-700">
      <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
      <section className="relative isolate min-h-[60vh] overflow-hidden bg-gradient-to-br from-[#FE9EC7]/45 via-[#FF85BB]/35 to-[#F13E93]/35 md:min-h-[70vh]">
        <div className="hero-orb absolute left-8 top-20 hidden h-48 w-48 rounded-full bg-pink-300/60 blur-3xl sm:block" />
        <div className="hero-orb-delay absolute right-12 top-28 hidden h-64 w-64 rounded-full bg-pink-300/50 blur-3xl sm:block" />
        <div className="hero-orb absolute bottom-14 left-1/3 hidden h-44 w-44 rounded-full bg-pink-200/60 blur-3xl sm:block" />

        <img
          src="https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=80"
          alt="Pink flowers"
          className="pointer-events-none absolute bottom-0 right-0 hidden w-52 max-w-[28vw] opacity-60 md:block"
        />

        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-16 sm:px-6 md:grid-cols-2 md:items-center md:gap-10 md:pb-16 md:pt-20 lg:px-8">
          <div className="reveal space-y-6">
            <p className="inline-flex rounded-full border border-[#FF85BB]/50 bg-white/70 px-4 py-2 text-sm font-medium text-[#F13E93]">
              Premium Salon and Spa Experience
            </p>
           <h1
  className="text-4xl leading-tight sm:text-5xl md:text-7xl"
  style={{
    fontFamily: "'Dancing Script', cursive",
    fontWeight: 500,
    color: '#F13E93',
  }}
>
  Bring out the
  <br />
  beauty in you,
  <br />
</h1>
            <p className="max-w-xl text-lg leading-8 text-gray-700 sm:text-xl">
              Discover elevated beauty services designed to celebrate your confidence, style, and
              individuality in a space crafted for luxury and care.
            </p>
          </div>

          <div className="reveal relative hero-photo-shell">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-white/45 blur-2xl" />
            <div className="hero-photo-glow pointer-events-none absolute -inset-4 z-0 rounded-[2rem]" />
            <img
              src={aboutUsHero}
              alt="Model with glowing skin"
              className="hero-photo-image relative z-10 w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="about-us-section relative mx-auto grid max-w-7xl gap-12 overflow-hidden rounded-[2.25rem] px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal relative about-photo-shell">
          <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-pink-200/70 blur-3xl" />
          <div className="absolute -right-4 -bottom-8 h-44 w-44 rounded-full bg-pink-300/60 blur-3xl" />
          <img
            src={aboutWhatIsPhoto}
            alt="Elegant salon interior"
            className="about-photo-image relative z-10 h-[340px] w-full rounded-3xl object-cover shadow-xl sm:h-[420px] lg:h-[480px]"
          />
          <div className="about-photo-overlay absolute inset-0 z-20 rounded-3xl bg-gradient-to-t from-[#F13E93]/35 via-transparent to-transparent" />
          <div className="about-est-badge absolute bottom-6 left-6 z-30 rounded-2xl bg-white/90 px-5 py-3 shadow-lg">
            <p className="text-sm font-semibold text-gray-900">Est. Since 2017</p>
          </div>
        </div>

        <div className="reveal space-y-6">
          <GradientBadge>✨ About Us</GradientBadge>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            What is{' '}
            <span className="about-gradient-text bg-gradient-to-r from-[#F13E93] to-[#FF85BB] bg-clip-text text-transparent">
              EL Glamorous
            </span>
            ?
          </h2>
          <p className="text-base leading-8 text-gray-600 sm:text-lg">
            EL Glamorous Face and Body Clinic has grown from a single branch 
            into a trusted beauty destination with four locations. 
            We offer expert facial care, slimming treatments, massage, hair, 
            and nail services—all designed to enhance your natural beauty.
          </p>
          <p className="text-base leading-8 text-gray-600 sm:text-lg">
            With a perfect balance of quality, affordability, and personalized care, 
            we are committed to helping you look and feel your best—confident, radiant, 
            and truly glamorous.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="about-pill inline-flex items-center gap-2 rounded-full border border-[#FF85BB]/45 bg-[#FE9EC7]/25 px-4 py-2 text-sm font-semibold text-[#F13E93]">
              <Heart className="h-4 w-4" /> Client-Centered
            </span>
            <span className="about-pill inline-flex items-center gap-2 rounded-full border border-[#FF85BB]/45 bg-[#FE9EC7]/25 px-4 py-2 text-sm font-semibold text-[#F13E93]">
              <Sparkles className="h-4 w-4" /> Premium Quality
            </span>
            <span className="about-pill inline-flex items-center gap-2 rounded-full border border-[#FF85BB]/45 bg-[#FE9EC7]/25 px-4 py-2 text-sm font-semibold text-[#F13E93]">
              <Star className="h-4 w-4" /> Award Winning
            </span>
          </div>
        </div>
      </section>

      <section className="founder-section bg-gradient-to-br from-[#FFE4EF] via-[#FE9EC7]/25 to-[#FF85BB]/20 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="reveal space-y-5">
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-md">
              👑 Leadership
            </span>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Meet the Owner</h2>
            <article className="rounded-3xl bg-white p-6 shadow-lg sm:p-8">
              <h3 className="text-3xl font-bold text-gray-900">Emily P. Loranas</h3>
              <p className="mt-1 text-lg font-semibold bg-gradient-to-r from-[#F13E93] to-[#FF85BB] bg-clip-text text-transparent">
                Founder &amp; Creative Director
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FE9EC7]/25 px-3 py-1 text-sm font-medium text-[#F13E93]">
                  <Clock3 className="h-4 w-4" /> 15+ Years
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FE9EC7]/25 px-3 py-1 text-sm font-medium text-[#F13E93]">
                  <Award className="h-4 w-4" /> Certified Expert
                </span>
              </div>
              <p className="mt-5 text-base leading-8 text-gray-600">
                At the heart of EL Glamorous Face & Body Clinic is its visionary CEO, 
                Emily P. Loranas, a passionate leader committed to redefining beauty 
                and wellness in Central Visayas. Guided by her philosophy, 
                “Quality service above all,” she has built a team that delivers 
                personalized treatments focused on enhancing both 
                appearance and confidence.
              </p>
              <p className="mt-4 text-base leading-8 text-gray-600">
                With a blend of advanced technology and genuine care, 
                the clinic offers more than just services—it creates 
                meaningful experiences of self-discovery and rejuvenation. 
                Under her leadership, EL Glamorous continues to grow as a 
                trusted destination known for its consistency, innovation, and heartfelt service.
              </p>
            </article>
            <div className="rounded-3xl bg-gradient-to-r from-[#F13E93] to-[#FF85BB] p-6 text-white shadow-xl">
              <p className="text-4xl leading-none opacity-60">"</p>
              <p className="mt-2 text-lg leading-8">
                True beauty begins when you feel seen, cared for, and empowered to shine in your
                own way.
              </p>
              <div className="mt-4 flex items-center gap-3 text-sm font-semibold">
                <span className="h-px w-8 bg-white/70" />
                Emily P. Loranas
              </div>
            </div>
          </div>

          <div className="reveal relative founder-photo-shell">
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-tr-3xl border-t-4 border-r-4 border-[#FF85BB]" />
            <div className="absolute -left-10 top-20 h-56 w-56 rounded-full bg-pink-200/70 blur-3xl" />
            <div className="absolute -right-6 bottom-12 h-52 w-52 rounded-full bg-pink-300/65 blur-3xl" />
            <div className="founder-photo-shimmer pointer-events-none absolute inset-0 z-20 rounded-3xl" />
            <img
              src={founderPhoto}
              alt="Sofia Martinez, founder of El Glam"
              className="founder-photo-image relative z-10 h-full min-h-[340px] w-full rounded-3xl object-cover shadow-2xl sm:min-h-[420px] lg:min-h-[480px]"
            />
            <div className="absolute inset-0 z-20 rounded-3xl bg-gradient-to-t from-black/35 to-transparent" />
          </div>
        </div>
      </section>

      <section className="animated-gradient-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-700 shadow-md">
              ⭐ Our Promise
            </span>
            <h2 className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl">
              What We&apos;re{' '}
              <span className="bg-gradient-to-r from-[#F13E93] to-[#FF85BB] bg-clip-text text-transparent">
                Known For
              </span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Every detail of our service is designed around excellence, comfort, and elevated
              beauty results.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {promiseCards.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="reveal group relative overflow-hidden rounded-3xl border border-[#FF85BB]/35 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <Icon className="absolute -bottom-5 -right-3 h-24 w-24 text-pink-100 transition-colors group-hover:text-pink-200" />
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} text-white shadow-lg transition-transform duration-500 group-hover:rotate-6`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="relative mt-5 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="relative mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
