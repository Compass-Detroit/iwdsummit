import DevTeamCard from '@/components/dev/DevTeamCard'
import { teamData } from '@/data/2026/team'

const organizersData = teamData.filter((m) => m.team === 'compass')

function OrganizersSection() {
  return (
    <section
      id="organizers"
      className="relative flex flex-col justify-center overflow-hidden px-6 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 50% 50% at 40% 40%, rgb(var(--iwd-accent-900) / 0.08) 0%, transparent 55%)`,
        }}
        aria-hidden="true"
      />
      <div className="flex w-full flex-col items-center pt-0">
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-iwd-gold-400/80">
          The People Behind It All
        </p>
        <h2 className="mb-3 w-full text-center font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
            Organizers
          </span>
        </h2>
        <div className="mb-6 h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {organizersData.map((organizer) => (
          <DevTeamCard
            key={`org-${organizer.id}`}
            id={organizer.id}
            name={organizer.name}
            avatar={organizer.avatar}
            linkedin={organizer.linkedin}
            github={organizer.github}
            organization={organizer.organization}
            position={organizer.role}
            university={organizer.university}
            badge={organizer.team === 'compass' ? 'Organizer' : organizer.team}
          />
        ))}
      </div>

      {/* Dev team immediately after organizers */}
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {teamData
          .filter((m) => m.team === 'devteam')
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((dev) => (
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
              badge={dev.team === 'devteam' ? 'Dev' : dev.team}
            />
          ))}
      </div>
    </section>
  )
}

export default OrganizersSection
