import { useState, useEffect, useCallback } from 'react'
import {
  FaMapPin,
  FaClock,
  FaCar,
  FaMap,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
} from 'react-icons/fa6'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

import { GOLD_PRIMARY_LIGHT_HOVER } from '@/constants/goldPrimaryButtonLightHover'

// Venue images
import lcHqFacade from '@/assets/images/location/lc_hq_facade.jpg'
import lcHqLobby from '@/assets/images/location/lc_hq_lobby.jpg'
import lcHqBlueRed from '@/assets/images/location/lc_hq_blue_red.jpg'
import lcHqFacade2 from '@/assets/images/location/lc_hq_facade_2.jpg'
import lcHqFox from '@/assets/images/location/lc_hq_fox.jpg'

const VENUE_IMAGES = [
  {
    src: lcHqFacade,
    alt: 'Little Caesars HQ Main Entrance',
    label: 'Main Entrance & Facade',
  },
  {
    src: lcHqLobby,
    alt: 'Little Caesars HQ Lobby',
    label: 'Lobby & Atrium',
  },
  {
    src: lcHqBlueRed,
    alt: 'Little Caesars HQ Night Illumination',
    label: 'Nighttime Illumination',
  },
  {
    src: lcHqFacade2,
    alt: 'Little Caesars HQ Architectural Detail',
    label: 'Architectural Details',
  },
  {
    src: lcHqFox,
    alt: 'Historic Fox Theatre Neighborhood',
    label: 'Historic Fox Theatre',
  },
]

const AUTOPLAY_INTERVAL = 5000

function LocationSection() {
  const [activeImg, setActiveImg] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progressKey, setProgressKey] = useState(0)

  const nextImg = useCallback(
    () => setActiveImg((prev) => (prev + 1) % VENUE_IMAGES.length),
    []
  )
  const prevImg = useCallback(
    () =>
      setActiveImg(
        (prev) => (prev - 1 + VENUE_IMAGES.length) % VENUE_IMAGES.length
      ),
    []
  )

  // Auto-advance carousel
  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(nextImg, AUTOPLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [isPlaying, nextImg])

  // Reset progress animation on slide change
  useEffect(() => {
    setProgressKey((k) => k + 1)
  }, [activeImg])

  const goToSlide = (i) => {
    setActiveImg(i)
  }

  const togglePlayback = () => {
    setIsPlaying((p) => !p)
  }

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
              <h3 className="text-xl font-semibold text-white">When</h3>
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
              <h3 className="text-xl font-semibold text-white">Venue</h3>
            </div>
            <p className="mb-2 text-2xl font-bold text-white">
              Little Caesars Global Resource Center
            </p>
            <p className="mb-4 text-lg text-gray-300">
              2125 Woodward Ave, Detroit, MI 48201
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/place/Little+Caesars+Corporate+Office/data=!4m2!3m1!1s0x0:0x14096f8dc7a099f3?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-iwd-gold-500/30 bg-iwd-gold-500/10 px-4 py-2 text-sm font-semibold text-iwd-gold-300 transition-colors hover:bg-iwd-gold-500/20"
              >
                <FaMap className="size-4" /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Visual Content: Side-by-Side Carousel & Map */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* 1. Carousel - Left Side */}
          <div className="w-full lg:w-1/2">
            <div className="bg-iwd-surface-raised group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/[0.08] shadow-2xl transition-all duration-500 hover:border-iwd-gold-400/30 dark:bg-iwd-black-950/50">
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
                  {/* Vignettes for text and control readability */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-transparent to-40%" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent to-40%" />

                  {/* Label - Top Left */}
                  <div className="absolute left-6 top-6 flex flex-col gap-0.5 pr-6 sm:left-8 sm:top-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-iwd-gold-400 drop-shadow-md sm:text-xs">
                      Venue Gallery
                    </span>
                    <span className="text-lg font-bold leading-tight text-white drop-shadow-lg sm:text-xl lg:text-2xl">
                      {img.label}
                    </span>
                  </div>
                </div>
              ))}

              {/* Sleek Control Strip - Bottom */}
              <div className="absolute inset-x-0 bottom-0 z-20">
                {/* Progress bar track */}
                <div className="relative h-0.5 w-full bg-white/10">
                  <div
                    key={progressKey}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-iwd-gold-400 via-iwd-gold-300 to-iwd-gold-400 shadow-[0_0_12px_rgba(255,184,0,0.6)]"
                    style={{
                      width: `${
                        ((activeImg + 1) / VENUE_IMAGES.length) * 100
                      }%`,
                      transition: 'width 0.5s ease-out',
                    }}
                  />
                  {/* Animated fill for current segment (if playing) */}
                  {isPlaying && (
                    <div
                      key={`fill-${progressKey}`}
                      className="absolute inset-y-0 bg-iwd-gold-400/40"
                      style={{
                        left: `${(activeImg / VENUE_IMAGES.length) * 100}%`,
                        width: `${100 / VENUE_IMAGES.length}%`,
                        animation: `fillProgress ${AUTOPLAY_INTERVAL}ms linear forwards`,
                      }}
                    />
                  )}
                </div>

                {/* Controls row */}
                <div className="flex items-center justify-between bg-gradient-to-t from-black/80 to-black/40 px-4 py-2.5 backdrop-blur-md sm:px-6">
                  {/* Left: Prev / Play-Pause / Next */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImg()
                      }}
                      className="flex size-8 items-center justify-center rounded-full text-white/50 transition-all hover:bg-white/10 hover:text-white active:scale-90"
                      aria-label="Previous image"
                    >
                      <FaChevronLeft className="size-3" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        togglePlayback()
                      }}
                      className={`flex size-8 items-center justify-center rounded-full border border-iwd-gold-400/30 bg-iwd-gold-400/10 text-iwd-gold-400 transition-all hover:bg-iwd-gold-400/20 active:scale-90 ${GOLD_PRIMARY_LIGHT_HOVER}`}
                      aria-label={
                        isPlaying ? 'Pause slideshow' : 'Play slideshow'
                      }
                    >
                      {isPlaying ? (
                        <FaPause className="size-2.5" />
                      ) : (
                        <FaPlay className="ml-0.5 size-2.5" />
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImg()
                      }}
                      className="flex size-8 items-center justify-center rounded-full text-white/50 transition-all hover:bg-white/10 hover:text-white active:scale-90"
                      aria-label="Next image"
                    >
                      <FaChevronRight className="size-3" />
                    </button>
                  </div>

                  {/* Center: Segment dots */}
                  <div className="hidden items-center gap-1.5 sm:flex">
                    {VENUE_IMAGES.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation()
                          goToSlide(i)
                        }}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === activeImg
                            ? 'w-6 bg-iwd-gold-400 shadow-[0_0_6px_rgba(255,184,0,0.5)]'
                            : 'w-1 bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Right: Counter */}
                  <span className="font-mono text-[10px] font-bold tracking-widest text-white/40">
                    {String(activeImg + 1).padStart(2, '0')}
                    <span className="text-iwd-gold-400/40">/</span>
                    {String(VENUE_IMAGES.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Enhanced Map - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="bg-iwd-surface-raised relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/[0.1] shadow-2xl dark:bg-iwd-black-950/50">
              <div className="absolute right-4 top-4 z-20 rounded-md bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-widest text-iwd-gold-300">
                Little Caesars HQ
              </div>
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

              {/* Pin Overlay */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="mb-2 rounded-full bg-iwd-gold-400/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-iwd-black-950 shadow-2xl">
                  PIZZA PIZZA
                </div>
                <FaMapPin className="size-10 text-iwd-gold-400 drop-shadow-[0_0_15px_rgba(255,184,0,0.8)]" />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/place/Little+Caesars+Corporate+Office/data=!4m2!3m1!1s0x0:0x14096f8dc7a099f3?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-iwd-gold-500/30 bg-iwd-gold-500/10 px-4 py-2 text-sm font-semibold text-iwd-gold-300 transition-colors hover:bg-iwd-gold-500/20"
              >
                <FaMap className="size-4" /> Open in Google Maps
              </a>
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
            <h3 className="mb-3 text-xl font-semibold text-white">Entrance</h3>
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
