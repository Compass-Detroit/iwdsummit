import { useEffect, useState } from 'react'
import { PageLayout } from '@/layouts/PageLayout'

const pastEvents = [
  {
    id: 1,
    name: 'Michigan DevFest 2025',
    date: 'November 2025',
    location: 'MotorCity Casino, Detroit',
    attendees: '600+',
    tagline: '11th annual — largest gathering to date',
    description:
      'Multiple tracks of deep technical workshops, applied AI sessions, and nationally recognized speakers convened developers, students, and industry leaders from across the state.',
    url: 'https://midevfest.com',
    highlights: ['6 tracks', '40+ speakers', '600+ attendees'],
  },
  {
    id: 2,
    name: 'IWD Innovation Summit 2025',
    date: 'March 2025',
    location: 'University of Michigan-Dearborn',
    attendees: '350+',
    tagline: 'Empowering women and allies in tech',
    description:
      'Practitioner-led talks, community spotlights, and interactive sessions designed to foster peer support and long-term professional connection. Emphasis on representation and pipeline advancement.',
    url: 'https://gdg.community.dev/iwd/',
    highlights: ['5 tracks', '30+ speakers', '350+ attendees'],
  },
  {
    id: 3,
    name: 'BHM Innovation Summit 2025',
    date: 'February 2025',
    location: 'University of Michigan-Dearborn',
    attendees: '300+',
    tagline: 'Centering Black technologists and leaders',
    description:
      'Keynote talks, career-focused panels, and workforce-oriented workshops with a strong emphasis on mentorship and industry readiness. A celebration and a call to action.',
    url: 'https://bhmtechsummit.com',
    highlights: ['4 tracks', '25+ speakers', '300+ attendees'],
  },
  {
    id: 4,
    name: 'Michigan DevFest 2024',
    date: 'October 2024',
    location: 'MotorCity Casino, Detroit',
    attendees: '500+',
    tagline: 'A decade of developer community',
    description:
      'Celebrating 10 years of DevFest in Michigan with expanded workshops, an all-day hackathon, and speakers from Google, Microsoft, and Detroit startups.',
    url: 'https://midevfest.com',
    highlights: ['5 tracks', '35+ speakers', '500+ attendees'],
  },
  {
    id: 5,
    name: 'IWD Innovation Summit 2024',
    date: 'March 2024',
    location: 'University of Michigan-Dearborn',
    attendees: '280+',
    tagline: 'Visibility, leadership, sustainable growth',
    description:
      'Our first summit under the IWD Innovation Summit brand, focusing on advancing women in technology across disciplines with hands-on workshops and mentorship circles.',
    url: 'https://gdg.community.dev/iwd/',
    highlights: ['4 tracks', '20+ speakers', '280+ attendees'],
  },
  {
    id: 6,
    name: 'BHM Innovation Summit 2024',
    date: 'February 2024',
    location: 'University of Michigan-Dearborn',
    attendees: '250+',
    tagline: 'Innovation through the lens of equity',
    description:
      'Strengthening pathways for emerging talent entering the tech ecosystem. Featured keynotes from Google, Ford, and Detroit startup founders.',
    url: 'https://bhmtechsummit.com',
    highlights: ['3 tracks', '20+ speakers', '250+ attendees'],
  },
]

const PreviousEvents = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <PageLayout>
      <section
        aria-labelledby="main-heading"
        className={`min-h-screen bg-iwd-black-950 pt-32 transition-[opacity,transform] duration-1000 ease-out sm:pt-36 ${
          isVisible ? 'opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
          {/* Header */}
          <div className="mb-16 text-center sm:mb-20">
            <p className="mb-4 font-montserrat text-xs font-medium uppercase tracking-[0.3em] text-iwd-gold-400/80">
              Our History
            </p>
            <h1
              id="main-heading"
              className="mb-5 font-biorhyme text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            >
              Past{' '}
              <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />
            <p className="mx-auto max-w-2xl font-montserrat text-base font-light leading-relaxed text-gray-400">
              Compass Detroit hosts three annual events connecting tech
              enthusiasts, professionals, and students. Here&rsquo;s what
              we&rsquo;ve built together.
            </p>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, i) => (
              <a
                key={event.id}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04] sm:p-8"
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                {/* Date badge */}
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                  <div className="size-1.5 rounded-full bg-iwd-gold-400" />
                  <span className="font-montserrat text-[10px] font-semibold uppercase tracking-widest text-iwd-gold-300">
                    {event.date}
                  </span>
                </div>

                <h2 className="mb-2 font-biorhyme text-xl font-bold text-white group-hover:text-iwd-gold-200 sm:text-2xl">
                  {event.name}
                </h2>

                <p className="mb-1 font-montserrat text-xs font-medium uppercase tracking-wider text-iwd-gold-400/70">
                  {event.tagline}
                </p>

                <p className="mb-4 text-sm text-gray-500">{event.location}</p>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                  {event.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2">
                  {event.highlights.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-montserrat text-[10px] font-semibold uppercase tracking-wider text-gray-400"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="absolute right-6 top-6 text-gray-600 transition-all duration-300 group-hover:text-iwd-gold-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <svg
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center sm:mt-20">
            <p className="mb-6 font-montserrat text-base font-light text-gray-400">
              Could be you on that stage next time.
            </p>
            <a
              href="/#membership"
              className="inline-flex items-center rounded-lg border border-iwd-gold-400/30 bg-iwd-gold-400/10 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-iwd-gold-300 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-iwd-gold-400/50 hover:bg-iwd-gold-400/20 hover:shadow-xl hover:shadow-iwd-gold-500/10"
            >
              Join the Community
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default PreviousEvents
