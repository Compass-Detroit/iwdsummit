import { useEffect, useRef, useState } from 'react'
import heroVideo from '@/data/2026/assets/video/iwd-background.mp4'
import CTAButton from '@/components/ui/CTAButton'
import { FaTicket, FaArrowDown } from 'react-icons/fa6'

/* --- Configuration --- */
const EVENT_DATE = new Date('2026-03-28T09:00:00-05:00')

const TAGLINES = [
  'Break the Pattern',
  'Redefine Possible',
  'Innovate · Empower · Lead',
  'Where Technology Meets Heart',
  'Your Voice. Your Vision. Your Stage.',
  '#ImpactTheFuture',
  'Building Tomorrow, Together',
]

const STATS = [
  { value: 40, suffix: '+', label: 'Speakers' },
  { value: 8, suffix: '', label: 'Tracks' },
  { value: 120, suffix: '+', label: 'Companies' },
]

function calcRemaining(target) {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    total: diff,
  }
}

function LandingSection() {
  const [countdown, setCountdown] = useState(() => calcRemaining(EVENT_DATE))
  const [taglineIdx, setTaglineIdx] = useState(0)
  const [taglineFading, setTaglineFading] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState(STATS.map(() => 0))
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  const statsRef = useRef(null)
  const videoRef = useRef(null)

  /* --- Countdown --- */
  useEffect(() => {
    const id = setInterval(() => setCountdown(calcRemaining(EVENT_DATE)), 1000)
    return () => clearInterval(id)
  }, [])

  /* --- Rotating taglines --- */
  useEffect(() => {
    const id = setInterval(() => {
      setTaglineFading(true)
      setTimeout(() => {
        setTaglineIdx((i) => (i + 1) % TAGLINES.length)
        setTaglineFading(false)
      }, 400)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  /* --- Stats counter (IntersectionObserver trigger) --- */
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!statsVisible) return
    const duration = 1500
    const start = Date.now()
    let rafId
    const tick = () => {
      const t = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3) // ease-out cubic
      setAnimatedStats(STATS.map((s) => Math.round(eased * s.value)))
      if (t < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [statsVisible])

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const isEventLive = countdown.total <= 0

  return (
    <>
      <section
        id="hero"
        aria-label="Hero Section"
        className="bg-iwd-surface-raised relative flex min-h-[90vh] w-full flex-col justify-center overflow-hidden pt-20 dark:bg-iwd-black-900"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          className="absolute inset-0 z-0 size-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Video Play/Pause toggle for accessibility */}
        <button
          onClick={toggleVideoPlayback}
          className="absolute bottom-6 right-6 z-30 flex size-12 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white shadow-2xl backdrop-blur-lg transition-all hover:scale-110 hover:bg-black/80 lg:bottom-12 lg:right-12"
          aria-label={
            isVideoPlaying ? 'Pause background video' : 'Play background video'
          }
        >
          {isVideoPlaying ? (
            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div
          className="absolute inset-0 z-10 bg-gradient-to-b from-[#020617]/70 via-[#020617]/60 to-[#020617]/90"
          aria-hidden="true"
        />

        {/* ─── Content ─── */}
        <div className="bg-glass-hero relative z-10 mx-auto flex max-w-5xl flex-col items-center rounded-3xl p-8 px-6 py-12 pb-20 text-center sm:p-6">
          {/* Eyebrow */}
          <div
            className="hero-stagger mb-8 flex items-center gap-4"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-iwd-gold-400/60 sm:w-16" />
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-iwd-gold-400/80 sm:text-xs">
              Compass Detroit &middot; GDG Detroit &middot; Women Techmakers
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-iwd-gold-400/60 sm:w-16" />
          </div>

          {/* Hero title */}
          <h1
            className="hero-stagger mb-3 font-heading font-black leading-[1.1] tracking-tight sm:mb-5"
            style={{ animationDelay: '0.3s' }}
          >
            <span
              className="block text-2xl font-light uppercase tracking-[0.4em] text-iwd-gold-300 sm:text-3xl lg:text-4xl"
              style={{
                letterSpacing: '0.4em',
                lineHeight: '1.2',
                filter:
                  'drop-shadow(0 0 10px rgb(var(--iwd-accent-500) / 0.3))',
              }}
            >
              Detroit
            </span>
            <span
              className="block text-3xl text-white/95 sm:whitespace-nowrap sm:text-4xl lg:text-[3.2rem] xl:text-[3.7rem]"
              style={{
                letterSpacing: '-0.01em',
                lineHeight: '1.1',
              }}
            >
              International Women&rsquo;s Day
            </span>
            <span
              className="landing-shimmer mt-2 block bg-gradient-to-r from-iwd-gold-200 via-iwd-gold-400 to-iwd-gold-200 bg-clip-text text-3xl text-transparent sm:text-5xl lg:text-[3.5rem] xl:text-[4.5rem]"
              style={{
                filter:
                  'drop-shadow(0 4px 24px rgb(var(--iwd-accent-500) / 0.35))',
                letterSpacing: '-0.02em',
              }}
            >
              Innovation Summit
            </span>
          </h1>

          {/* Rotating tagline */}
          <div
            className="hero-stagger mb-8 flex h-6 items-center justify-center sm:mb-10"
            style={{ animationDelay: '0.65s' }}
          >
            <p
              className={`font-body text-xs font-medium tracking-[0.25em] text-iwd-gold-300/50 transition-opacity duration-500 sm:text-sm ${
                taglineFading ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {TAGLINES[taglineIdx]}
            </p>
          </div>

          {/* Date badge — solid dark pill in light mode (iwd-dark-950 is remapped to white there) */}
          <div
            className="hero-stagger mb-8 inline-flex items-center gap-2.5 rounded-full border bg-[rgb(2_6_23/0.88)] px-5 py-2 backdrop-blur-lg sm:mb-10 sm:gap-3 sm:px-7 sm:py-2.5 dark:bg-[rgb(var(--iwd-dark-950)/0.6)]"
            style={{
              borderColor: 'rgb(var(--iwd-accent-400) / 0.2)',
              boxShadow: '0 0 30px rgb(var(--iwd-accent-500) / 0.08)',
              animationDelay: '0.75s',
            }}
          >
            <div className="size-1.5 animate-pulse rounded-full bg-iwd-gold-400 shadow-[0_0_8px_rgb(var(--iwd-accent-400))]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-iwd-gold-300/90 sm:text-xs">
              MARCH 28, 2026 &middot; DETROIT, MI
            </span>
          </div>

          {/* Countdown timer */}
          {!isEventLive ? (
            <div
              className="hero-stagger mb-8 flex gap-3 sm:mb-10 sm:gap-4"
              style={{ animationDelay: '0.85s' }}
              aria-label={`${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes, ${countdown.seconds} seconds until the event`}
            >
              {[
                { val: countdown.days, label: 'Days' },
                { val: countdown.hours, label: 'Hours' },
                { val: countdown.minutes, label: 'Min' },
                { val: countdown.seconds, label: 'Sec' },
              ].map(({ val, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="countdown-cell flex size-14 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-xl font-bold tabular-nums text-white backdrop-blur-sm sm:size-[4.5rem] sm:text-2xl">
                    {String(val).padStart(2, '0')}
                  </div>
                  <span className="mt-1.5 font-body text-[8px] font-semibold uppercase tracking-[0.25em] text-iwd-gold-400/45 sm:text-[9px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="hero-stagger mb-8 sm:mb-10"
              style={{ animationDelay: '0.85s' }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-iwd-gold-400/30 bg-iwd-gold-400/10 px-6 py-2 font-body text-sm font-semibold uppercase tracking-[0.2em] text-iwd-gold-300">
                <span className="size-2 animate-pulse rounded-full bg-iwd-gold-400" />
                Happening Now
              </span>
            </div>
          )}

          {/* Impact stats */}
          <div
            ref={statsRef}
            className="hero-stagger mb-8 flex items-center divide-x divide-white/[0.08] sm:mb-10"
            style={{ animationDelay: '0.95s' }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-5 sm:px-8"
              >
                <span className="text-xl font-bold text-white sm:text-2xl">
                  {animatedStats[i]}
                  {stat.suffix}
                </span>
                <span className="mt-1 font-body text-[9px] font-semibold uppercase tracking-[0.2em] text-iwd-gold-400/50 sm:text-[10px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p
            className="hero-stagger mb-10 max-w-xl font-body text-[15px] font-light leading-[1.8] text-white/55 sm:mb-12 sm:text-base"
            style={{ animationDelay: '1.05s' }}
          >
            A day of learning, building, connecting, and empowering women and
            allies in Detroit&apos;s tech ecosystem. Whether you&apos;re a
            seasoned professional, an ambitious innovator, or a creative —{' '}
            <span className="font-medium text-iwd-gold-300/80">
              this is your space to Break the Pattern.
            </span>
          </p>

          {/* CTAs */}
          <div
            className="hero-stagger flex flex-col items-center gap-6 sm:flex-row"
            style={{ animationDelay: '1.15s' }}
          >
            <CTAButton
              href="https://bit.ly/det-iwd-26-rsvp"
              target="_blank"
              rel="noopener noreferrer"
              label="GET TICKETS"
              icon={<FaTicket />}
              ariaLabel="Get tickets to the IWD Innovation Summit 2026"
            />
            <CTAButton
              href="https://bit.ly/compass-fundraiser-2026"
              target="_blank"
              rel="noopener noreferrer"
              label="DONATE NOW"
              variant="secondary"
              ariaLabel="Donate to the Compass fundraiser"
            />
          </div>

          {/* Scroll indicator */}
          <div className="mt-2 flex flex-col items-center gap-2 text-white/80">
            <span className="font-body text-[9px] font-medium uppercase tracking-[0.4em]">
              More Below
            </span>
            <div className="relative flex items-center justify-center">
              <FaArrowDown className="relative z-10 size-2.5 animate-bounce" />
              <div className="absolute size-8 rounded-full border border-current opacity-30" />
            </div>
          </div>
        </div>

        {/* ─── Bottom fade into next section ─── */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
          style={{
            background:
              'linear-gradient(to top, rgb(var(--iwd-dark-950)) 5%, rgb(var(--iwd-dark-950) / 0.6) 40%, transparent)',
          }}
          aria-hidden="true"
        />
      </section>
    </>
  )
}

export default LandingSection
