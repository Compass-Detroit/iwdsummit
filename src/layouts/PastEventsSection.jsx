const PastEventsSection = () => {
  const events = [
    {
      year: '2025',
      title: 'Innovation & Community',
      theme: 'Handcrafted tech for a humanist future.',
      description:
        'Our 2025 Detroit summit focused on the intersection of community-led innovation and sustainable tech growth.',
      color: '#eab308', // iwd-gold-500 equivalent
    },
    {
      year: '2024',
      title: 'The Sketchbook of Ideas',
      theme: 'Pioneering through illustration and code.',
      description:
        'A deeply artistic exploration of tech, featuring hand-drawn concepts and human-centric design patterns.',
      color: '#3b82f6', // blue-500
    },
    {
      year: '2023',
      title: 'Detroit Roots',
      theme: 'Growing the ecosystem from the ground up.',
      description:
        'Celebrating the foundational voices of Detroit tech with organic, community-first narratives.',
      color: '#22c55e', // green-500
    },
  ]

  return (
    <section
      id="past-events"
      className="relative overflow-hidden bg-iwd-surface-raised dark:bg-iwd-black-950 py-24 sm:py-32"
    >
      {/* Hand-drawn style background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg
          className="absolute right-0 top-0 size-64 -translate-y-1/2 translate-x-1/2 text-iwd-gold-400/20"
          viewBox="0 0 200 200"
        >
          <path
            d="M40,100 C40,50 160,50 160,100 C160,150 40,150 40,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 size-96 -translate-x-1/4 translate-y-1/4 text-white dark:text-white/5"
          viewBox="0 0 400 400"
        >
          <path
            d="M50,200 Q100,50 200,200 T350,200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="10 5"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-iwd-gold-400/60">
            Our Legacy
          </p>
          <h2 className="font-heading text-4xl font-black tracking-tight text-white dark:text-white sm:text-6xl">
            Past{' '}
            <span className="bg-gradient-to-r from-iwd-gold-300 to-iwd-gold-500 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="mt-6 text-lg font-light italic leading-8 text-gray-400">
            A &quot;no-tech&quot; look at the stories that brought us here.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.year}
              className="group relative flex flex-col items-start rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:bg-white/[0.04]"
            >
              <div className="absolute -top-6 left-8 flex h-12 w-16 -skew-x-12 items-center justify-center rounded-xl border border-white/10 bg-iwd-surface-raised dark:bg-iwd-black-900 text-2xl font-black text-iwd-gold-400 shadow-2xl transition-transform group-hover:skew-x-0">
                {event.year}
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white dark:text-white">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-iwd-gold-400/80">
                  {event.theme}
                </p>
                <p className="mt-4 line-clamp-4 text-base font-light leading-7 text-gray-400">
                  {event.description}
                </p>
              </div>

              {/* Hand-drawn 'connector' line */}
              <div className="relative mt-8 h-px w-full bg-gradient-to-r from-iwd-gold-400/20 via-iwd-gold-400/40 to-transparent">
                <div className="absolute -right-1 -top-1 size-2 rounded-full border border-iwd-gold-400/40 bg-iwd-surface-raised dark:bg-iwd-black-950" />
              </div>

              <div className="mt-6 flex items-center gap-x-4">
                <button className="text-xs font-black uppercase tracking-widest text-white dark:text-white/50 transition-colors hover:text-white dark:text-white">
                  View Gallery →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PastEventsSection
