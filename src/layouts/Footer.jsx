import { Link } from 'react-router-dom'
import { sections, pageLinks } from '@/data/2026/navigation'
import GdgDetroitLogo from '@/assets/images/gdg-detroit-logo-footer.svg'
import CompassDetroitLogo from '@/components/ui/CompassDetroitLogo'
import SectionSkipLink from '@/components/ui/SectionSkipLink'
import useTheme from '@/hooks/useTheme'

function Footer() {
  const { mode } = useTheme()
  const isLightMode = mode === 'light'

  // Section links always use /#section-id so that smooth scrolling is handled
  // consistently by the Navbar's hash-based useEffect (from any page, including home).
  return (
    <footer
      id="page-footer"
      role="contentinfo"
      className="bg-iwd-surface-raised text-high-contrast relative flex flex-col dark:bg-iwd-black-900"
    >
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-iwd-gold-400/30 to-transparent" />

      <SectionSkipLink href="#footer-credits">
        Skip footer navigation
      </SectionSkipLink>

      {/* Navigation links */}
      <div className="mx-auto w-full max-w-7xl px-6 py-8 md:flex md:items-center lg:px-8">
        <div className="ml-3 flex flex-wrap gap-1 md:order-2">
          {sections
            .filter((section) => section.id)
            .map((section) => (
              <Link
                key={section.id}
                to={`/#${section.id}`}
                className="rounded-md px-2.5 py-1 text-sm text-gray-300 transition-all duration-200 hover:bg-white/[0.04] hover:text-iwd-gold-300 hover:no-underline"
              >
                {section.text}
              </Link>
            ))}
          {pageLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-2.5 py-1 text-sm text-gray-300 transition-all duration-200 hover:bg-white/[0.04] hover:text-gray-200 hover:no-underline"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <p className="mt-4 pr-0 font-body text-xs uppercase tracking-[0.15em] text-gray-400 md:mt-0 md:border-r md:border-white/[0.06] md:pr-4">
          © {new Date().getFullYear()} Compass Detroit
        </p>
      </div>

      {/* Credits section */}
      <div
        id="footer-credits"
        className="bg-iwd-surface-raised relative mx-auto w-full max-w-full border-t border-white/[0.06] px-6 pb-24 pt-12 lg:px-8 dark:bg-iwd-black-950"
      >
        {/* Subtle accent glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 50% 60% at 50% 80%, rgb(var(--iwd-accent-900) / 0.06) 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Eyebrow */}
          <div className="mb-10 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-iwd-gold-400/30 sm:w-14" />
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-iwd-gold-400/40 sm:text-xs">
              Brought to You By
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-iwd-gold-400/30 sm:w-14" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* GDG Detroit */}
            <div className="flex items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04]">
              <img
                src={GdgDetroitLogo}
                alt="GDG Detroit Logo"
                className={`logo-halo h-auto w-56 object-contain transition-all duration-500 ${
                  isLightMode
                    ? 'opacity-70 brightness-0'
                    : 'opacity-100 brightness-100'
                }`}
              />
            </div>
            {/* Compass Detroit */}
            <div className="flex items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04]">
              <CompassDetroitLogo
                textColor={isLightMode ? '#374151' : '#FFFFFF'}
                className="h-auto w-56"
              />
            </div>
            {/* Description */}
            <div className="flex items-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm">
              <p className="text-pretty text-base leading-relaxed text-gray-400">
                The Compass Detroit and GDG Detroit teams are volunteers who are
                passionate about helping the community learn and grow in the
                field of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
