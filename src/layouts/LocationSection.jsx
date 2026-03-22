import { useState, useEffect } from 'react'
import {
  FaMapPin,
  FaClock,
  FaCar,
  FaMap,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa6'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

// Import all images
import hqExterior from '@/assets/images/location/venue-exterior.jpg'
import hqFacade from '@/assets/images/location/venue-facade.jpg'
import hqInside from '@/assets/images/location/venue-interior.jpg'
import hqNight from '@/assets/images/location/hq-night.png'
import foxTheatre from '@/assets/images/location/fox-theatre.png'

const VENUE_IMAGES = [
  {
    src: hqExterior,
    alt: 'Little Caesars Global Resource Center Exterior',
    label: 'Main Entrance · Woodward Ave',
  },
  {
    src: hqFacade,
    alt: 'Modern Glass Facade of Little Caesars HQ',
    label: 'Architectural Detail · SmithGroup',
  },
  {
    src: hqInside,
    alt: 'Little Caesars HQ Lobby Interior',
    label: 'Modern Interior & Check-in',
  },
  {
    src: hqNight,
    alt: 'Little Caesars HQ at Night',
    label: 'District Detroit Skyline',
  },
  {
    src: foxTheatre,
    alt: 'Historic Fox Theatre nearby',
    label: 'Historic Fox Theatre neighborhood',
  },
]

function LocationSection() {
  const [activeImg, setActiveImg] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % VENUE_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImg = () => setActiveImg((prev) => (prev + 1) % VENUE_IMAGES.length)
  const prevImg = () =>
    setActiveImg(
      (prev) => (prev - 1 + VENUE_IMAGES.length) % VENUE_IMAGES.length
    )

  return (
    <section
      id="location"
      className="bg-iwd-surface-raised relative overflow-hidden py-24 text-white md:py-32 dark:bg-iwd-black-900 "
      aria-labelledby="location-heading"
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 70% 30%, rgb(var(--iwd-accent-800) / 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 40% 50% at 20% 70%, rgb(var(--iwd-accent-900) / 0.08) 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Header content unchanged until Info Grid */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-iwd-gold-400/40 sm:w-14" />
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-iwd-gold-400/50 sm:text-xs">
              Venue & Travel
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-iwd-gold-400/40 sm:w-14" />
          </div>

          <h2
            id="location-heading"
            className="text-center font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl "
          >
            When &{' '}
            <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
              Where
            </span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />
        </div>

        {/* Info Grid Card updates */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-iwd-gold-400/20 bg-iwd-gold-400/10">
                <FaClock
                  className="size-5 shrink-0 text-iwd-gold-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">
                When
              </h3>
            </div>
            <p className="font-orbitron text-lg font-semibold tracking-wide text-iwd-gold-300">
              March 28, 2026
            </p>
            <p className="mt-2 text-gray-400">
              Doors Open 8:00 AM <br /> Sessions to 5:00 PM
            </p>
          </div>

          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-iwd-gold-400/20 bg-iwd-gold-400/10">
                <FaMapPin
                  className="size-5 shrink-0 text-iwd-gold-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Venue
              </h3>
            </div>
            <p className="mb-2 text-2xl font-bold text-white">
              Little Caesars Global Resource Center
            </p>
            <p className="mb-4 text-lg text-gray-300">
              2125 Woodward Ave, Detroit, MI 48201
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.app.goo.gl/B39TqZ2mK6qPz89A7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-iwd-gold-500/30 bg-iwd-gold-500/10 px-4 py-2 text-sm font-semibold text-iwd-gold-300 transition-colors hover:bg-iwd-gold-500/20"
              >
                <FaMap className="size-4" /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Visual Content: Full-Width Carousel & Map Stack */}
        <div className="flex flex-col gap-12">
          {/* 1. Full-Width Carousel Row */}
          <div className="w-full">
            <h3 className="mb-6 font-heading text-xl font-bold uppercase tracking-widest text-iwd-gold-400/80">
              Venue Gallery
            </h3>
            <div className="bg-iwd-surface-raised group relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-white/[0.08] shadow-2xl transition-all duration-500 hover:border-iwd-gold-400/30 dark:bg-iwd-black-950/50">
              {/* Carousel Content */}
              {VENUE_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === activeImg ? 'z-10 opacity-100' : 'z-0 opacity-0'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="size-full object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute left-8 top-8 flex items-start justify-start gap-4">
                    <div className="bg-iwd-surface-raised flex flex-col gap-1 rounded-md px-4 py-2 backdrop-blur-md dark:bg-iwd-black-950/50">
                      <span className="text-sm font-black uppercase tracking-[0.2em] text-iwd-gold-400">
                        Location Highlight
                      </span>
                      <span className="text-2xl font-bold text-white drop-shadow-md ">
                        {img.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {VENUE_IMAGES.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveImg(i)
                          }}
                          className={`relative h-2 rounded-full transition-all duration-500 ${
                            i === activeImg
                              ? 'w-12 bg-white/10'
                              : 'w-6 bg-white/10 hover:bg-white/20'
                          }`}
                          aria-label={`Go to image ${i + 1}`}
                        >
                          <span
                            className={`absolute left-0 top-0 h-2 rounded-full bg-iwd-gold-400`}
                            style={
                              i === activeImg
                                ? {
                                    animation:
                                      'fillProgress 5000ms linear forwards',
                                  }
                                : { width: 0 }
                            }
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Carousel Controls */}
              <div className="pointer-events-none absolute inset-x-6 top-1/2 z-20 flex -translate-y-1/2 justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImg()
                  }}
                  className="pointer-events-auto flex size-14 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white opacity-0 backdrop-blur-xl transition-all hover:border-iwd-gold-400/40 hover:bg-iwd-gold-500/20 group-hover:opacity-100 "
                  aria-label="Previous Image"
                >
                  <FaChevronLeft className="size-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImg()
                  }}
                  className="pointer-events-auto flex size-14 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white opacity-0 backdrop-blur-xl transition-all hover:border-iwd-gold-400/40 hover:bg-iwd-gold-500/20 group-hover:opacity-100 "
                  aria-label="Next Image"
                >
                  <FaChevronRight className="size-6" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. Full-Width Enhanced Map */}
          <div className="w-full">
            <h3 className="mb-6 font-heading text-xl font-bold uppercase tracking-widest text-iwd-gold-400/80">
              Little Caesars HQ
            </h3>
            <div className="bg-iwd-surface-raised relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-white/[0.1] shadow-2xl dark:bg-iwd-black-950/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1474.743169822604!2d-83.05315364177726!3d42.338780280806414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d2ca78df0e73%3A0xe54d6afcc1dacc7!2sLittle%20Caesars%20Global%20Resource%20Center!5e0!3m2!1sen!2sus!4v1711204899999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'grayscale(0.2) invert(0.05) contrast(1.1)',
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Little Caesars Global Resource Center Venue Map"
                className="absolute inset-0 size-full"
              />
              <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl ring-1 ring-inset ring-white/10" />

              {/* Pin Overlay for better visualization */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="mb-2 rounded-full bg-iwd-gold-400/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-iwd-black-950 shadow-2xl">
                  PIZZA PIZZA
                </div>
                <FaMapPin className="size-10 text-iwd-gold-400 drop-shadow-[0_0_15px_rgba(255,184,0,0.8)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Logistics Detail Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Parking Card */}
          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-iwd-gold-400/20 bg-iwd-gold-400/10">
                <FaCar
                  className="size-5 shrink-0 text-iwd-gold-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Parking Options
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-iwd-gold-400 font-heading text-[10px] font-black text-iwd-black-950">
                  1
                </div>
                <div>
                  <strong className="mb-1 block text-white">
                    Fox Garage (Recommended)
                  </strong>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Adjacent at 50 W Montcalm St. Most convenient for a quick
                    walk to the entrance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-iwd-gold-400 font-heading text-[10px] font-black text-iwd-black-950">
                  2
                </div>
                <div>
                  <strong className="mb-1 block text-white">
                    Opera House Garage
                  </strong>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Located at 1601 Broadway St. Short walk through District
                    Detroit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-iwd-gold-400 font-heading text-[10px] font-black text-iwd-black-950">
                  3
                </div>
                <div>
                  <strong className="mb-1 block text-white">
                    Comerica Park Lots
                  </strong>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Various lots along Witherell St and Montcalm St.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-iwd-gold-400 font-heading text-[10px] font-black text-iwd-black-950">
                  4
                </div>
                <div>
                  <strong className="mb-1 block text-white">
                    MGM Grand Garage (Free)
                  </strong>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Free parking available at MGM Grand Detroit. A scenic ~12
                    min walk to the venue.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Entrance Card */}
          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
            <h3 className="mb-3 text-xl font-semibold text-white">
              Entrance
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Enter through the main front doors on Woodward Avenue. Check-in is
              located in the main lobby. Have your registration QR code ready.
            </p>
          </div>
        </div>

        <div className="relative pt-4 text-center">
          <SectionSkipLink href="#schedule">
            Skip location section
          </SectionSkipLink>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
