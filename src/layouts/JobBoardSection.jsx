import PropTypes from 'prop-types'
import { jobBoardData } from '@/data/2026/jobboard'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

const JobBoardSection = ({ year = new Date().getFullYear() }) => {
  const isCurrentYear = year === new Date().getFullYear()

  return (
    <section
      id="jobboard"
      className="relative overflow-hidden bg-iwd-surface-raised dark:bg-iwd-black-900 px-6 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 30%, rgb(var(--iwd-accent-900) / 0.08) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />
      <SectionSkipLink href="#partners">Skip job board</SectionSkipLink>

      <div className="relative mx-auto max-w-7xl">
        {/* Eyebrow */}
        <div className="mb-5 flex items-center justify-center gap-4">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-iwd-gold-400/40 sm:w-14" />
          <span className="font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-iwd-gold-400/50 sm:text-xs">
            Career Opportunities
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-iwd-gold-400/40 sm:w-14" />
        </div>

        <h2 className="mb-3 text-center font-heading text-3xl font-bold text-white dark:text-white sm:text-4xl lg:text-5xl">
          {year && !isCurrentYear ? `${year} ` : ''}Job{' '}
          <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
            Board
          </span>
        </h2>
        <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />

        <div className="mx-auto max-w-4xl">
          <p className="text-center text-base leading-[1.9] text-gray-400">
            This job board is made possible by our generous sponsors, ranging
            from local Detroit organizations and regional companies to some of
            the world&apos;s best global tech companies. They voluntarily
            provide exclusive opportunities so you can grow your tech career.
          </p>
        </div>

        {/* Job Board Grid */}
        <div className="mt-12 sm:mt-14 md:mt-16">
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {jobBoardData.map((company) => (
              <a
                key={company.id}
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
                aria-label={
                  company.name === 'Resume Drop'
                    ? 'Submit your resume at https://bit.ly/compass2026-resume-drop (opens in a new tab)'
                    : `Visit ${company.name}'s careers page at ${company.website} (opens in a new tab)`
                }
              >
                <div className="flex h-full min-h-[160px] flex-col items-center gap-8 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-12 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-iwd-gold-400/20 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-black/40 active:scale-[0.98] sm:flex-row">
                  {/* Logo container */}
                  <div className="flex size-32 shrink-0 items-center justify-center overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.05] p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-iwd-gold-400/30 group-hover:shadow-lg group-hover:shadow-iwd-gold-500/10">
                    <div className="relative flex size-full items-center justify-center">
                      {/* Subtle glow/halo for dark backgrounds */}
                      <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl" />
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="relative size-24 object-contain transition-transform duration-500 group-hover:scale-110 invert dark:invert-0"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* Company name */}
                  <div className="flex flex-col">
                    <h3 className="min-w-0 pr-4 text-center text-xl font-black tracking-tight text-white dark:text-white transition-colors duration-300 sm:text-left">
                      {company.name}
                    </h3>
                    <span className="mt-1 text-center text-xs font-semibold uppercase tracking-widest text-iwd-gold-400/50 sm:text-left">
                      Opportunities
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

JobBoardSection.propTypes = {
  year: PropTypes.number,
}

export default JobBoardSection
