import { FaMapPin, FaClock } from 'react-icons/fa6'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

function LocationSection() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-iwd-black-900 py-24 text-white md:py-32"
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

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col space-y-8 px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-iwd-gold-400/40 sm:w-14" />
          <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.4em] text-iwd-gold-400/50 sm:text-xs">
            Event Details
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-iwd-gold-400/40 sm:w-14" />
        </div>

        {/* Section heading */}
        <h2
          id="location-heading"
          className="text-center font-biorhyme text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
        >
          When &{' '}
          <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
            Where
          </span>
        </h2>
        <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />

        {/* Info cards grid */}
        <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
          {/* When card */}
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
              Date &amp; Time — Coming Soon
            </p>
            <p className="mt-2 text-gray-400">
              March 2026 &middot; Detroit, MI
            </p>
          </div>

          {/* Where card */}
          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-iwd-gold-400/20 bg-iwd-gold-400/10">
                <FaMapPin
                  className="size-5 shrink-0 text-iwd-gold-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Where</h3>
            </div>
            <p className="text-lg font-semibold text-white">
              Venue — To Be Announced
            </p>
            <p className="mt-2 text-gray-400">
              We&apos;re finalizing the perfect space for IWD Innovation Summit
              2026. Check back soon for venue details, directions, and parking
              information.
            </p>
          </div>
        </div>

        <div className="relative">
          <SectionSkipLink href="#schedule">
            Skip location section
          </SectionSkipLink>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
