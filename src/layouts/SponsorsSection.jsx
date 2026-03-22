import PropTypes from 'prop-types'

const SponsorsSection = ({
  sponsorsData = [],
  year = new Date().getFullYear(),
}) => {
  const isCurrentYear = year === new Date().getFullYear()

  return (
    <section
      id="sponsors"
      className="bg-iwd-surface-raised relative overflow-hidden px-6 py-24 sm:px-10 md:px-14 lg:px-16 dark:bg-iwd-black-950"
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 30% 30%, rgb(var(--iwd-accent-800) / 0.1) 0%, transparent 60%),
            radial-gradient(ellipse 40% 50% at 70% 70%, rgb(var(--iwd-accent-900) / 0.07) 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Eyebrow */}
        <div className="mb-5 flex items-center justify-center gap-4">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-iwd-gold-400/40 sm:w-14" />
          <span className="font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-iwd-gold-400/50 sm:text-xs">
            Our Supporters
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-iwd-gold-400/40 sm:w-14" />
        </div>

        <h2 className="mb-3 w-full text-center font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {year && !isCurrentYear ? `${year} ` : ''}
          <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
            Sponsors
          </span>
        </h2>
        <div className="mx-auto mb-12 h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />

        <div className="transition-all duration-500 ease-in-out">
          {sponsorsData && sponsorsData.length ? (
            <>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                {sponsorsData.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20 sm:flex-row sm:items-center sm:gap-6"
                    aria-label={`Visit ${sponsor.name} (opens in new tab)`}
                  >
                    <div className="flex h-24 w-40 shrink-0 items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="logo-halo max-h-24 max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0 text-center sm:text-left">
                      <h3 className="text-lg font-semibold text-white">
                        {sponsor.name}
                      </h3>
                      <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-gray-400">
                        {sponsor.desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              {year && isCurrentYear && (
                <div className="mt-10 flex justify-center">
                  <a
                    href="mailto:sponsors@compassdetroit.org"
                    className="rounded-xl border border-iwd-gold-400/30 bg-iwd-gold-400/10 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-iwd-gold-300 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-iwd-gold-400/50 hover:bg-iwd-gold-400/20 hover:shadow-xl hover:shadow-iwd-gold-500/10"
                  >
                    Become a Sponsor
                  </a>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
              <p className="text-gray-500">
                {year && !isCurrentYear
                  ? `No sponsor information available for ${year}.`
                  : 'We are currently looking for sponsors for this event.'}
              </p>
              {year && isCurrentYear && (
                <a
                  href="mailto:sponsors@compassdetroit.org"
                  className="inline-flex items-center rounded-xl border border-iwd-gold-400/30 bg-iwd-gold-400/10 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-iwd-gold-300 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-iwd-gold-400/50 hover:bg-iwd-gold-400/20 hover:shadow-xl hover:shadow-iwd-gold-500/10 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                >
                  Become a Sponsor
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

SponsorsSection.propTypes = {
  sponsorsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  year: PropTypes.number,
}

export default SponsorsSection
