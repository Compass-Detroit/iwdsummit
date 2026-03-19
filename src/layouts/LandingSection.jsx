import { useEffect, useRef, useState } from 'react'
import CTAButton from '@/components/ui/CTAButton'
import { FaTicket, FaArrowDown } from 'react-icons/fa6'
import heroVideo from '@/data/2026/assets/video/iwd-background.mp4'

/* --- Configuration --- */
const EVENT_DATE = new Date('2026-03-28T09:00:00-05:00')

const TAGLINES = [
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

  const statsRef = useRef(null)

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

  const isEventLive = countdown.total <= 0

  return (
    <section
      id="landing"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] pt-16"
    >
      <video
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

      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-[#020617]/70 via-[#020617]/60 to-[#020617]/90"
        aria-hidden="true"
      />

      {/* --- Content --- */}
      <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center px-6 text-center sm:px-12 pb-20">
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
        <h1 className="mb-3 font-heading font-black leading-[0.9] tracking-tight sm:mb-5">
          <span
            className="hero-stagger block text-5xl text-white/95 sm:text-7xl lg:text-[5.5rem] xl:text-[7rem]"
            style={{
              textShadow:
                '0 2px 30px rgba(0,0,0,0.5), 0 8px 60px rgba(0,0,0,0.2)',
              letterSpacing: '-0.02em',
              animationDelay: '0.25s',
            }}
          >
            International
          </span>
          <span
            className="hero-stagger landing-shimmer block bg-gradient-to-r from-iwd-gold-200 via-iwd-gold-400 to-iwd-gold-200 bg-clip-text text-5xl text-transparent sm:text-7xl lg:text-[5.5rem] xl:text-[7rem]"
            style={{
              filter:
                'drop-shadow(0 4px 24px rgb(var(--iwd-accent-500) / 0.35))',
              letterSpacing: '-0.02em',
              animationDelay: '0.4s',
            }}
          >
            Women&apos;s Day
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-stagger mb-4 font-body text-lg font-extralight uppercase tracking-[0.35em] text-iwd-gold-100/65 sm:mb-6 sm:text-xl lg:text-2xl"
          style={{ animationDelay: '0.55s' }}
        >
          Innovation Summit
        </p>

        {/* Rotating tagline */}
        <div
          className="hero-stagger mb-8 flex h-6 items-center justify-center sm:mb-10"
          style={{ animationDelay: '0.65s' }}
        >
          <p
            className={`font-body text-xs font-medium tracking-[0.25em] text-iwd-gold-300/50 transition-opacity duration-400 sm:text-sm ${
              taglineFading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {TAGLINES[taglineIdx]}
          </p>
        </div>

        {/* Date badge */}
        <div
          className="hero-stagger mb-8 inline-flex items-center gap-2.5 rounded-full border px-5 py-2 backdrop-blur-lg sm:mb-10 sm:gap-3 sm:px-7 sm:py-2.5"
          style={{
            borderColor: 'rgb(var(--iwd-accent-400) / 0.2)',
            background: 'rgb(var(--iwd-dark-950) / 0.6)',
            boxShadow: '0 0 30px rgb(var(--iwd-accent-500) / 0.08)',
            animationDelay: '0.75s',
          }}
        >
          <div className="size-1.5 animate-pulse rounded-full bg-iwd-gold-400 shadow-[0_0_8px_rgb(var(--iwd-accent-400))]" />
          <span className="font-orbitron text-[11px] font-semibold tracking-[0.2em] text-iwd-gold-300/90 sm:text-xs">
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
                <div className="countdown-cell flex size-14 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] font-orbitron text-xl font-bold tabular-nums text-white backdrop-blur-sm sm:size-[4.5rem] sm:text-2xl">
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
              <span className="font-orbitron text-xl font-bold text-white sm:text-2xl">
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
            href="#membership"
            label="STAY UPDATED"
            icon={<FaTicket />}
            ariaLabel="Stay updated on the IWD Innovation Summit 2026"
          />
          <CTAButton
            href="#speakers"
            label="MEET THE SPEAKERS"
            variant="secondary"
            ariaLabel="View the speaker lineup"
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-18">
          <a
            href="#attendees"
            aria-label="Scroll to content"
            className="group flex flex-col items-center gap-2.5 text-white/20 transition-colors duration-500 hover:text-white/50"
          >
            <span className="font-body text-[9px] font-medium uppercase tracking-[0.4em]">
              Scroll
            </span>
            <div className="relative flex items-center justify-center">
              <FaArrowDown className="relative z-10 size-2.5 animate-bounce" />
              <div className="absolute size-8 rounded-full border border-current opacity-30 transition-transform duration-500 group-hover:scale-125" />
            </div>
          </a>
        </div>
      </div>

      {/* --- Bottom fade into next section --- */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            'linear-gradient(to top, rgb(var(--iwd-dark-950)) 5%, rgb(var(--iwd-dark-950) / 0.6) 40%, transparent)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}

export default LandingSection
