import GenericCard from '@/components/ui/GenericCard'
import { facilitatorsData } from '@/data/facilitators'

function FacilitatorsSection() {
  return (
    <section
      id="facilitators"
      className="relative flex flex-col justify-center overflow-hidden px-6 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 50% 50% at 60% 50%, rgb(var(--iwd-accent-800) / 0.07) 0%, transparent 55%)`,
        }}
        aria-hidden="true"
      />
      <div className="flex w-full flex-col items-center pt-0">
        <p className="mb-4 font-montserrat text-xs font-medium uppercase tracking-[0.3em] text-iwd-gold-400/80">
          Session Leaders
        </p>
        <h2 className="mb-3 w-full text-center font-biorhyme text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
            Facilitators
          </span>
        </h2>
        <div className="mb-6 h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {facilitatorsData.map((facilitator) => (
          <div
            key={facilitator.id}
            className="flex w-full justify-center sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4"
          >
            <GenericCard {...facilitator} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FacilitatorsSection
