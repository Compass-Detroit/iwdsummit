import PropTypes from 'prop-types'
import { FaEnvelope } from 'react-icons/fa6'
import CTAButton from '@/components/ui/CTAButton'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

const PartnersSection = ({ partnersData = {}, year }) => {
  const isCurrentYear = year === new Date().getFullYear()

  // Flatten all partners into one list (tiers removed)
  const allPartners = [
    ...(partnersData.platinum || []),
    ...(partnersData.diamond || []),
    ...(partnersData.gold || []),
    ...(partnersData.organizations || []),
    ...(partnersData.partners || []), // optional future field
  ].filter(Boolean)

  const hasPartners = allPartners.length > 0

  return (
    <section
      id="partners"
      className="relative flex flex-col justify-center bg-iwd-surface-raised dark:bg-iwd-black-950 px-8 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 50% 40% at 50% 50%, rgb(var(--iwd-accent-900) / 0.06) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />
      <SectionSkipLink href="#leadership">
        Skip partners section
      </SectionSkipLink>

      <div className="relative w-full pt-0">
        <p className="mb-4 text-center font-body text-xs font-medium uppercase tracking-[0.3em] text-iwd-gold-400/80">
          Our Supporters
        </p>
        <h2 className="mb-5 w-full text-center font-heading text-3xl font-bold text-white dark:text-white sm:text-4xl lg:text-5xl">
          {year ? `${year} ` : ''}
          <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
            Partners
          </span>
        </h2>
        <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />
      </div>

      <div className="mx-auto mt-2 max-w-4xl text-center">
        <p className="font-body text-base font-light leading-relaxed text-gray-400">
          Compass Detroit wouldn&apos;t be possible without the support of our
          amazing partners. Thank you for helping us create an unforgettable
          experience for the tech community.
        </p>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl overflow-hidden transition-all duration-500 ease-in-out sm:mt-10 md:mt-14 lg:mt-16">
        {hasPartners ? (
          <>
            {/* Single Partners Grid */}
            <div className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {allPartners.map((partner) => (
                <button
                  key={partner.id}
                  className="group w-full"
                  style={{ perspective: '1000px' }}
                  onClick={() =>
                    partner.url && window.open(partner.url, '_blank')
                  }
                  type="button"
                  aria-label={`${partner.name} — click to visit (hover to learn more)`}
                >
                  <div className="relative h-56 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* ── Front: Large logo ── */}
                    <div className="absolute inset-0 flex items-center justify-center rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-10 shadow-2xl backdrop-blur-md [backface-visibility:hidden]">
                      {partner.logo ? (
                        <div className="relative flex size-full items-center justify-center">
                          {/* Subtle glow/halo for dark backgrounds */}
                          <div className="absolute inset-0 rounded-full bg-white/5 blur-3xl" />
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="relative max-h-40 max-w-[85%] object-contain transition-transform duration-700 group-hover:scale-110 invert dark:invert-0"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <p className="text-center text-3xl font-bold tracking-tight text-white dark:text-white/90">
                          {partner.name}
                        </p>
                      )}
                    </div>
                    {/* ── Back: Org info ── */}
                    <div className="from-iwd-dark-900 to-iwd-dark-950 absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] border border-iwd-gold-400/20 bg-gradient-to-br p-8 backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <h3 className="mb-4 text-2xl font-black tracking-tight text-white dark:text-white">
                        {partner.name}
                      </h3>
                      {partner.desc && (
                        <p className="line-clamp-6 text-center text-base leading-relaxed text-white dark:text-white/70">
                          {partner.desc}
                        </p>
                      )}
                      {partner.url && (
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-iwd-gold-400/80">
                          Visit Site
                          <svg
                            className="size-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* CTA stays the same */}
            <div className="col-span-1 my-8 flex flex-col items-center justify-center space-y-6 text-center text-lg leading-relaxed">
              <p className="text-gray-400">
                We are currently looking for partners for this event.
              </p>
              {year && isCurrentYear && (
                <CTAButton
                  href="mailto:whatupdoe@compass-detroit.com"
                  label="Become a Partner"
                  ariaLabel="Join us as a partner"
                  className="text-xl font-semibold text-white dark:text-white"
                  variant="secondary"
                  icon={<FaEnvelope />}
                  iconPosition="left"
                />
              )}
            </div>
          </>
        ) : (
          <div className="col-span-1 my-8 flex flex-col items-center justify-center space-y-6 text-center text-lg leading-relaxed">
            <p className="text-gray-400">
              {year && !isCurrentYear
                ? `No partner information available for ${year}.`
                : 'We are currently looking for partners for this event.'}
            </p>
            {year && isCurrentYear && (
              <CTAButton
                href="mailto:sponsors@compassdetroit.org"
                label="Become a Partner"
                target="_self"
              />
            )}
          </div>
        )}
      </div>
    </section>
  )
}

PartnersSection.propTypes = {
  partnersData: PropTypes.shape({
    // old tier fields (still supported)
    platinum: PropTypes.array,
    diamond: PropTypes.array,
    gold: PropTypes.array,
    organizations: PropTypes.array,
    // new unified field (optional)
    partners: PropTypes.array,
  }),
  year: PropTypes.number.isRequired,
}

export default PartnersSection
