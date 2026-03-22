import DevTeamCard from '@/components/dev/DevTeamCard'
import { teamData } from '@/data/2026/team'

const DevTeamSection = () => {
  // Filter for only devteam members and sort
  const devTeamData = teamData.filter((member) => member.team === 'devteam')
  const sortedDevTeamData = [...devTeamData].sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  return (
    <section
      id="devteam"
      className="relative flex flex-wrap items-center justify-center overflow-hidden px-6 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 50% 40% at 60% 30%, rgb(var(--iwd-accent-800) / 0.08) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />
      <div className="flex w-full flex-col items-center pt-0">
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-iwd-gold-400/80">
          Built With Love
        </p>
        <h2 className="mb-3 w-full text-center font-heading text-4xl font-bold text-white dark:text-white sm:text-5xl lg:text-6xl">
          Dev{' '}
          <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
            Team
          </span>
        </h2>
        <div className="mb-6 h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {sortedDevTeamData.map((dev) => (
          <DevTeamCard
            key={`dev-${dev.id}`}
            id={dev.id}
            name={dev.name}
            avatar={dev.avatar}
            linkedin={dev.linkedin}
            github={dev.github}
            organization={dev.organization}
            position={dev.role}
            university={dev.university}
          />
        ))}
      </div>
    </section>
  )
}

export default DevTeamSection
