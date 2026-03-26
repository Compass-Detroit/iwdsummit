import { useEffect, useState } from 'react'
import PageLayout from '@/layouts/PageLayout'
// TODO: Uncomment when gallery photos are ready
// import EventGallery from '@/components/gallery/EventGallery'
// import { eventGalleries } from '@/data/galleryData'

const pastEvents = [
  {
    id: 1,
    year: '2025',
    name: 'Michigan DevFest 2025',
    date: 'November 2025',
    location: 'MotorCity Casino, Detroit',
    attendees: '600+',
    tagline: '11th annual — largest gathering to date',
    description:
      'Multiple tracks of deep technical workshops, applied AI sessions, and nationally recognized speakers convened developers, students, and industry leaders from across the state.',
    url: 'https://midevfest.com',
    highlights: ['6 tracks', '40+ speakers', '600+ attendees'],
    color: '#eab308',
    gallerySlug: 'michigan-devfest-2025',
  },
  {
    id: 2,
    year: '2025',
    name: 'IWD Innovation Summit 2025',
    date: 'March 2025',
    location: 'University of Michigan-Dearborn',
    attendees: '350+',
    tagline: 'Empowering women and allies in tech',
    description:
      'Practitioner-led talks, community spotlights, and interactive sessions designed to foster peer support and long-term professional connection. Emphasis on representation and pipeline advancement.',
    url: 'https://gdg.community.dev/iwd/',
    highlights: ['5 tracks', '30+ speakers', '350+ attendees'],
    color: '#3b82f6',
    gallerySlug: 'iwd-summit-2025',
  },
  {
    id: 3,
    year: '2025',
    name: 'BHM Innovation Summit 2025',
    date: 'February 2025',
    location: 'University of Michigan-Dearborn',
    attendees: '300+',
    tagline: 'Centering Black technologists and leaders',
    description:
      'Keynote talks, career-focused panels, and workforce-oriented workshops with a strong emphasis on mentorship and industry readiness. A celebration and a call to action.',
    url: 'https://bhmsummit.com',
    highlights: ['4 tracks', '25+ speakers', '300+ attendees'],
    color: '#22c55e',
    gallerySlug: 'bhm-summit-2025',
  },
  {
    id: 4,
    year: '2024',
    name: 'Michigan DevFest 2024',
    date: 'October 2024',
    location: 'MotorCity Casino, Detroit',
    attendees: '500+',
    tagline: 'A decade of developer community',
    description:
      'Celebrating 10 years of DevFest in Michigan with expanded workshops, an all-day hackathon, and speakers from Google, Microsoft, and Detroit startups.',
    url: 'https://midevfest.com',
    highlights: ['5 tracks', '35+ speakers', '500+ attendees'],
    color: '#eab308',
    gallerySlug: 'michigan-devfest-2024',
  },
  {
    id: 5,
    year: '2024',
    name: 'IWD Innovation Summit 2024',
    date: 'March 2024',
    location: 'University of Michigan-Dearborn',
    attendees: '280+',
    tagline: 'Visibility, leadership, sustainable growth',
    description:
      'Our first summit under the IWD Innovation Summit brand, focusing on advancing women in technology across disciplines with hands-on workshops and mentorship circles.',
    url: 'https://gdg.community.dev/iwd/',
    highlights: ['4 tracks', '20+ speakers', '280+ attendees'],
    color: '#3b82f6',
    gallerySlug: 'iwd-summit-2024',
  },
  {
    id: 6,
    year: '2024',
    name: 'BHM Innovation Summit 2024',
    date: 'February 2024',
    location: 'University of Michigan-Dearborn',
    attendees: '250+',
    tagline: 'Innovation through the lens of equity',
    description:
      'Strengthening pathways for emerging talent entering the tech ecosystem. Featured keynotes from Google, Ford, and Detroit startup founders.',
    url: 'https://bhmsummit.com',
    highlights: ['3 tracks', '20+ speakers', '250+ attendees'],
    color: '#22c55e',
    gallerySlug: 'bhm-summit-2024',
  },
]

const PreviousEvents = () => {
  const [isVisible, setIsVisible] = useState(false)
  // TODO: Uncomment when gallery photos are ready
  // const [activeGallery, setActiveGallery] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // const activeGalleryData = activeGallery
  //   ? eventGalleries[activeGallery]
  //   : null

  return (
    <PageLayout>
      <section
        aria-labelledby="main-heading"
        className={`bg-iwd-surface-raised min-h-screen pb-24 pt-32 transition-[opacity,transform] duration-1000 ease-out sm:pt-36 dark:bg-iwd-black-950 ${
          isVisible ? 'opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* Hand-drawn style background accents */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
          <svg
            className="absolute right-0 top-0 size-64 -translate-y-1/2 translate-x-1/2 text-iwd-gold-400/20"
            viewBox="0 0 200 200"
          >
            <path
              d="M40,100 C40,50 160,50 160,100 C160,150 40,150 40,100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
          <svg
            className="absolute bottom-0 left-0 size-96 -translate-x-1/4 translate-y-1/4 text-gray-900 dark:text-white/5"
            viewBox="0 0 400 400"
          >
            <path
              d="M50,200 Q100,50 200,200 T350,200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="10 5"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          {/* Header */}
          <div className="mb-16 text-center sm:mb-20">
            <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-iwd-gold-400/80">
              Our Legacy
            </p>
            <h1
              id="main-heading"
              className="mb-5 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            >
              Past{' '}
              <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />
            <p className="mx-auto max-w-2xl font-body text-base font-light italic leading-relaxed text-gray-400">
              A &quot;no-tech&quot; look at the stories that brought us here.
            </p>
          </div>

          {/* TODO: Gallery overlay — uncomment when photos are ready
          {activeGallery && activeGalleryData && (
            <div className="mb-16 rounded-3xl border border-iwd-gold-400/20 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8">
              <EventGallery
                eventName={activeGalleryData.eventName}
                images={activeGalleryData.images}
                onClose={() => setActiveGallery(null)}
              />
            </div>
          )}
          */}

          {/* Event Cards */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, i) => {
              // TODO: Uncomment when gallery photos are ready
              // const gallery = event.gallerySlug
              //   ? eventGalleries[event.gallerySlug]
              //   : null
              // const hasPhotos = gallery && gallery.images.length > 0

              return (
                <div
                  key={event.id}
                  className="group relative flex flex-col items-start rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-iwd-gold-400/30 hover:bg-white/[0.04]"
                  style={{
                    animation: 'sectionFadeUp 0.6s ease-out both',
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  {/* Year tag */}
                  <div className="bg-iwd-surface-raised absolute -top-6 left-8 flex h-12 w-16 -skew-x-12 items-center justify-center rounded-xl border border-white/10 text-2xl font-black text-iwd-gold-400 shadow-2xl transition-transform group-hover:skew-x-0 dark:bg-iwd-black-900">
                    {event.year}
                  </div>

                  <div className="mt-6 flex-1">
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-iwd-gold-300"
                    >
                      <h2 className="mb-2 font-heading text-xl font-bold text-white sm:text-2xl">
                        {event.name}
                      </h2>
                    </a>
                    <p className="mb-1 font-body text-xs font-medium uppercase tracking-wider text-iwd-gold-400/70">
                      {event.tagline}
                    </p>
                    <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
                      {event.date} • {event.location}
                    </p>
                    <p className="mb-6 text-sm leading-relaxed text-gray-400">
                      {event.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {event.highlights.map((stat) => (
                      <span
                        key={stat}
                        className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-wider text-gray-500"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* Hand-drawn 'connector' line */}
                  <div className="relative mt-8 h-px w-full bg-gradient-to-r from-iwd-gold-400/20 via-iwd-gold-400/40 to-transparent">
                    <div className="bg-iwd-surface-raised absolute -right-1 -top-1 size-2 rounded-full border border-iwd-gold-400/40 dark:bg-iwd-black-950" />
                  </div>

                  {/* Gallery button */}
                  <div className="mt-6 flex items-center gap-x-4">
                    <button
                      className="flex cursor-default items-center gap-2 text-xs font-black uppercase tracking-widest text-white/20"
                      disabled
                      title="Gallery coming soon"
                    >
                      <svg
                        className="size-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Gallery Coming Soon
                    </button>
                  </div>

                  {/* Hover arrow */}
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-8 right-6 text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:translate-x-0.5 hover:text-iwd-gold-300"
                    aria-label={`Visit ${event.name} website`}
                  >
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
                  </a>
                </div>
              )
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-24 text-center">
            <p className="mb-8 font-body text-lg font-light italic text-gray-400">
              Build the future with us.
            </p>
            <a
              href="/#membership"
              className="inline-flex items-center rounded-lg border border-iwd-gold-400/30 bg-iwd-gold-400/10 px-10 py-5 text-sm font-semibold uppercase tracking-widest text-iwd-gold-300 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-iwd-gold-400/50 hover:bg-iwd-gold-400/20 hover:shadow-2xl hover:shadow-iwd-gold-500/20"
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
