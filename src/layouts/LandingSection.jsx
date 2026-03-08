import { useEffect, useRef, useState } from 'react'
import CTAButton from '@/components/ui/CTAButton'
import { FaTicket, FaArrowDown } from 'react-icons/fa6'

function LandingSection() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    let rafId = null
    const handleMove = (e) => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
        rafId = null
      })
    }
    el.addEventListener('mousemove', handleMove)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="landing"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* ─── Animated gradient base ─── */}
      <div
        className="landing-gradient absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at ${mousePos.x * 100}% ${
              mousePos.y * 100
            }%, rgb(var(--iwd-accent-950)) 0%, transparent 70%),
            radial-gradient(ellipse 80% 100% at 80% 80%, rgb(var(--iwd-dark-950)) 0%, transparent 60%),
            radial-gradient(ellipse 100% 60% at 20% 20%, rgb(var(--iwd-accent-900) / 0.8) 0%, transparent 50%),
            rgb(var(--iwd-dark-950))
          `,
        }}
        aria-hidden="true"
      />

      {/* ─── Animated mesh orbs ─── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="landing-orb absolute -left-[20%] -top-[20%] size-[60vw] rounded-full opacity-20 blur-3xl"
          style={{
            background: `radial-gradient(circle, rgb(var(--iwd-accent-500)), transparent 70%)`,
            animation: 'landingOrb1 20s ease-in-out infinite',
          }}
        />
        <div
          className="landing-orb absolute -bottom-[10%] -right-[15%] size-[50vw] rounded-full opacity-15 blur-3xl"
          style={{
            background: `radial-gradient(circle, rgb(var(--iwd-accent-600)), transparent 70%)`,
            animation: 'landingOrb2 25s ease-in-out infinite',
          }}
        />
        <div
          className="landing-orb absolute left-[40%] top-[30%] size-[30vw] rounded-full opacity-10 blur-3xl"
          style={{
            background: `radial-gradient(circle, rgb(var(--iwd-accent-400)), transparent 70%)`,
            animation: 'landingOrb3 18s ease-in-out infinite',
          }}
        />
      </div>

      {/* ─── Grid pattern overlay ─── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgb(var(--iwd-accent-400) / 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgb(var(--iwd-accent-400) / 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* ─── Grain ─── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
        aria-hidden="true"
      />

      {/* ─── Content ─── */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center sm:px-12">
        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-iwd-gold-400/60 sm:w-16" />
          <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.4em] text-iwd-gold-400/80 sm:text-xs">
            Compass Detroit &middot; GDG Detroit &middot; Women Techmakers
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-iwd-gold-400/60 sm:w-16" />
        </div>

        {/* Hero title */}
        <h1 className="mb-3 font-biorhyme font-black leading-[0.9] tracking-tight sm:mb-5">
          <span
            className="block text-5xl text-white/95 sm:text-7xl lg:text-[5.5rem] xl:text-[7rem]"
            style={{
              textShadow:
                '0 2px 30px rgba(0,0,0,0.5), 0 8px 60px rgba(0,0,0,0.2)',
              letterSpacing: '-0.02em',
            }}
          >
            International
          </span>
          <span
            className="block bg-gradient-to-r from-iwd-gold-200 via-iwd-gold-400 to-iwd-gold-200 bg-clip-text text-5xl text-transparent sm:text-7xl lg:text-[5.5rem] xl:text-[7rem]"
            style={{
              filter:
                'drop-shadow(0 4px 24px rgb(var(--iwd-accent-500) / 0.35))',
              letterSpacing: '-0.02em',
            }}
          >
            Women&apos;s Day
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-8 font-montserrat text-lg font-extralight uppercase tracking-[0.35em] text-iwd-gold-100/65 sm:mb-10 sm:text-xl lg:text-2xl">
          Innovation Summit
        </p>

        {/* Date badge */}
        <div
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border px-5 py-2 backdrop-blur-lg sm:mb-12 sm:gap-3 sm:px-7 sm:py-2.5"
          style={{
            borderColor: 'rgb(var(--iwd-accent-400) / 0.2)',
            background: 'rgb(var(--iwd-dark-950) / 0.6)',
            boxShadow: '0 0 30px rgb(var(--iwd-accent-500) / 0.08)',
          }}
        >
          <div className="size-1.5 animate-pulse rounded-full bg-iwd-gold-400 shadow-[0_0_8px_rgb(var(--iwd-accent-400))]" />
          <span className="font-orbitron text-[11px] font-semibold tracking-[0.2em] text-iwd-gold-300/90 sm:text-xs">
            MARCH 2026 &middot; DETROIT, MI
          </span>
        </div>

        {/* Description */}
        <p className="mb-10 max-w-xl font-montserrat text-[15px] font-light leading-[1.8] text-white/60 sm:mb-14 sm:text-base">
          A day of learning, building, connecting, and empowering women and
          allies in Detroit&apos;s tech ecosystem. Whether you&apos;re a
          seasoned professional, an ambitious innovator, or a creative — this is
          your space.
        </p>

        {/* CTA */}
        <CTAButton
          href="#membership"
          label="STAY UPDATED"
          icon={<FaTicket />}
          ariaLabel="Stay updated on the IWD Innovation Summit 2026"
        />

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 sm:bottom-14">
          <a
            href="#attendees"
            aria-label="Scroll to content"
            className="group flex flex-col items-center gap-2 text-white/25 transition-colors duration-500 hover:text-white/50"
          >
            <span className="font-montserrat text-[9px] font-medium uppercase tracking-[0.4em]">
              Scroll
            </span>
            <FaArrowDown className="size-2.5 animate-bounce" />
          </a>
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
  )
}

export default LandingSection
