import { teamData } from '@/data/2026/team'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const TrackHeader = memo(({ title }) => (
  <div className="mb-12 flex items-center justify-center gap-6">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <h3 className="shrink-0 font-heading text-xl font-black uppercase tracking-[0.3em] text-iwd-gold-400/40">
      {title}
    </h3>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
  </div>
))

TrackHeader.displayName = 'TrackHeader'
TrackHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

const TeamCard = memo(
  ({
    name,
    avatar,
    role,
    organization,
    linkedin,
    github,
    university,
    position,
  }) => (
    <div className="group relative">
      {/* Animated Background Glow */}
      <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-br from-iwd-gold-400/20 via-transparent to-[rgb(var(--iwd-accent-900)/0.2)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/50">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Avatar with breakout effect */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-iwd-gold-300 via-iwd-gold-500 to-iwd-gold-300 opacity-20 blur-md transition-opacity group-hover:opacity-40" />
            <div className="relative size-32 overflow-hidden rounded-full border-2 border-white/10 p-1 transition-colors group-hover:border-iwd-gold-400/50">
              <img
                src={
                  avatar ||
                  `https://ui-avatars.com/api/?name=${name}&background=random`
                }
                alt={name}
                className="size-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-heading text-xl font-black tracking-tight text-white dark:text-white">
              {name}
            </h4>
            <span className="text-xs font-bold uppercase tracking-widest text-iwd-gold-400/60">
              {role || position || 'Contributor'}
            </span>
            {(organization || university) && (
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white dark:text-white/30">
                {organization || university}
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="mt-2 flex translate-y-2 gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/5 p-2 text-white dark:text-white/50 transition-all hover:bg-[#0077b5] hover:text-white dark:text-white"
              >
                <FaLinkedin className="size-4" />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/5 p-2 text-white dark:text-white/50 transition-all hover:bg-[#333] hover:text-white dark:text-white"
              >
                <FaGithub className="size-4" />
              </a>
            )}
            {!linkedin && !github && (
              <div className="rounded-lg bg-white/5 p-2 text-[10px] font-bold uppercase italic tracking-widest text-white dark:text-white/20">
                Social Off
              </div>
            )}
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute -bottom-1 -right-1 size-12 bg-gradient-to-br from-transparent via-iwd-gold-400/10 to-iwd-gold-400/20 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
      </div>
    </div>
  )
)

TrackHeader.displayName = 'TrackHeader'
TeamCard.displayName = 'TeamCard'
TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  role: PropTypes.string,
  organization: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  university: PropTypes.string,
  position: PropTypes.string,
}

export default function OrganizersSpace() {
  const organizersData = teamData.filter((m) => m.team === 'compass')
  const devTeamData = teamData
    .filter((m) => m.team === 'devteam')
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <section
      id="organizers-space"
      className="relative overflow-hidden bg-iwd-surface-raised dark:bg-iwd-black-900 py-32 sm:py-48"
    >
      {/* Dynamic Background Glows */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-1/4 top-1/4 size-[800px] rounded-full bg-[rgb(var(--iwd-accent-900)/0.05)] blur-[120px]" />
        <div className="absolute -right-1/4 bottom-1/4 size-[800px] rounded-full bg-iwd-gold-900/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-32 flex flex-col items-center text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-iwd-gold-400/50" />
            <span className="font-body text-xs font-black uppercase tracking-[0.5em] text-iwd-gold-400/50">
              Behind the Summit
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-iwd-gold-400/50" />
          </div>
          <h2 className="font-heading text-5xl font-black text-white dark:text-white sm:text-7xl lg:text-8xl">
            Community{' '}
            <span className="bg-gradient-to-r from-iwd-gold-200 via-iwd-gold-400 to-iwd-gold-200 bg-clip-text text-transparent">
              Space
            </span>
          </h2>
          <p className="mt-8 max-w-2xl font-body text-lg font-light leading-relaxed text-white dark:text-white/40 sm:text-xl">
            Meet the visionary organizers and technical contributors working to
            break the pattern in Detroit.
          </p>
        </div>

        {/* Organizers Section */}
        <div className="mb-48">
          <TrackHeader title="Leadership" />
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {organizersData.map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        </div>

        {/* Dev Team Section */}
        <div>
          <TrackHeader title="Developer Team" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16 xl:grid-cols-4">
            {devTeamData.map((member) => (
              <TeamCard key={`dev-${member.id}`} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
