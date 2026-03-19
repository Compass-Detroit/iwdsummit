function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-iwd-black-950 px-6 py-24 sm:px-10 sm:py-32 md:px-14 lg:px-16"
      aria-labelledby="about-heading"
    >
      {/* Subtle gradient accent */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 80% 20%, rgb(var(--iwd-accent-900) / 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 10% 80%, rgb(var(--iwd-accent-800) / 0.1) 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/5 bg-white/[0.01] p-8 text-center backdrop-blur-sm md:p-12">
        {/* Eyebrow */}
        <div className="mb-5 flex items-center justify-center gap-4">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-iwd-gold-400/40 sm:w-14" />
          <span className="font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-iwd-gold-400/50 sm:text-xs">
            About the Summit
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-iwd-gold-400/40 sm:w-14" />
        </div>

        <h2
          id="about-heading"
          className="mb-12 font-heading text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Where Innovation
          <br />
          <span className="bg-gradient-to-r from-iwd-gold-200 via-iwd-gold-400 to-iwd-gold-200 bg-clip-text text-transparent">
            Meets Empowerment
          </span>
        </h2>

        <p className="text-base font-light leading-[1.9] text-white/70 md:text-lg">
          The International Women&apos;s Day Innovation Summit brings together
          technologists, creators, leaders, and allies for a day of learning,
          building, and empowering women across Detroit&apos;s tech ecosystem.
        </p>
        <p className="mt-6 text-base font-light leading-[1.9] text-white/70 md:text-lg">
          Hosted by Compass Detroit in partnership with GDG Detroit and Women
          Techmakers, this summit features keynotes, hands-on workshops, career
          panels, and community-driven sessions designed to inspire the next
          generation of innovators.
        </p>
        <p className="mt-6 text-base font-light leading-[1.9] text-white/80 md:text-lg">
          Whether you&apos;re a seasoned engineer, a student exploring your
          first hackathon, a founder building something bold, or an ally
          championing representation —{' '}
          <span className="font-bold text-iwd-gold-300">you belong here.</span>
        </p>
      </div>
    </section>
  )
}

export default AboutSection
