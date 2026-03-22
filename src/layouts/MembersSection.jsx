import CTAButton from '@/components/ui/CTAButton'
import { FaEnvelope } from 'react-icons/fa6'

const MembersSection = () => {
  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-iwd-surface-raised dark:bg-iwd-black-950 px-6 py-24 sm:px-10 sm:py-32 md:px-14 lg:px-16"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-iwd-gold-400/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-14 text-center sm:mb-16">
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-iwd-gold-400/80">
            Get Involved
          </p>
          <h2 className="mb-5 font-heading text-3xl font-bold text-white dark:text-white sm:text-4xl lg:text-5xl">
            Join the{' '}
            <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
              Movement
            </span>
          </h2>
          <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />
          <p className="mx-auto max-w-2xl font-body text-base font-light leading-relaxed text-gray-400">
            Join Compass Detroit and connect with STEAM learners and
            professionals across the region. Membership is free and open to
            anyone who wants to learn, share, and grow.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Events & Workshops',
              desc: 'Access to innovation summits, talks, workshops, and networking',
            },
            {
              title: 'Community',
              desc: 'Connect with local tech leaders, mentors, and peers',
            },
            {
              title: 'Early Access',
              desc: 'First dibs on event registration and volunteer opportunities',
            },
            {
              title: 'Stay Connected',
              desc: 'Compass Detroit news, updates, and community highlights',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]"
            >
              <h3 className="mb-2 font-heading text-lg font-bold text-iwd-gold-300">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center sm:mt-14">
          <p className="font-body text-sm font-light text-gray-500">
            Free membership &mdash; no catch, just community.
          </p>
          <CTAButton
            href="https://bit.ly/compass2026"
            label="Become a Member"
            ariaLabel="Join Compass Detroit as a member - opens in new tab"
            className="text-xl font-semibold text-white dark:text-white"
            target="_blank"
            rel="noreferrer"
            variant="primary"
            icon={<FaEnvelope />}
            iconPosition="left"
          />
        </div>
      </div>
    </section>
  )
}

export default MembersSection
