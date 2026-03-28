import PropTypes from 'prop-types'

const MyScheduleEmptyState = ({ onExplore }) => {
  return (
    <div className="col-span-1 my-8 flex flex-col items-center justify-center space-y-12 text-center">
      {/* Header */}
      <div className="space-y-4">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-inner">
          <svg
            className="size-10 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-3xl font-bold tracking-tight text-white">
          Your schedule is waiting
        </h3>
        <p className="mx-auto max-w-xl text-base text-gray-400">
          Create a personalized itinerary for the summit. Here is how to get
          started:
        </p>
      </div>

      {/* 3 Step Visual Guide */}
      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
        {/* Step 1 */}
        <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-iwd-gold-400/30">
          <div className="absolute right-0 top-0 size-32 rounded-bl-full bg-gradient-to-bl from-iwd-gold-400 to-transparent p-4 opacity-5 transition-opacity group-hover:opacity-20"></div>
          <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-iwd-gold-400/10 text-iwd-gold-300">
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h4 className="mb-2 text-lg font-semibold text-white">
            1. Explore Tracks
          </h4>
          <p className="text-sm text-gray-400">
            Browse through our specialized stages ranging from Build with AI to
            Leadership.
          </p>
        </div>
        {/* Step 2 */}
        <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-iwd-gold-400/30">
          <div className="absolute right-0 top-0 size-32 rounded-bl-full bg-gradient-to-bl from-iwd-gold-400 to-transparent p-4 opacity-5 transition-opacity group-hover:opacity-20"></div>
          <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-iwd-gold-400/10 text-iwd-gold-300">
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h4 className="mb-2 text-lg font-semibold text-white">
            2. Add Sessions
          </h4>
          <p className="text-sm text-gray-400">
            Click the favorite `Bookmark` button on any session to pin it
            directly to your personal schedule.
          </p>
        </div>
        {/* Step 3 */}
        <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-iwd-gold-400/30">
          <div className="absolute right-0 top-0 size-32 rounded-bl-full bg-gradient-to-bl from-iwd-gold-400 to-transparent p-4 opacity-5 transition-opacity group-hover:opacity-20"></div>
          <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-iwd-gold-400/10 text-iwd-gold-300">
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
          </div>
          <h4 className="mb-2 text-lg font-semibold text-white">
            3. Export Agenda
          </h4>
          <p className="text-sm text-gray-400">
            Download your schedule to your calendar and never miss an important
            talk.
          </p>
        </div>
      </div>

      <button
        onClick={onExplore}
        className="flex items-center rounded-lg border border-iwd-gold-400/30 bg-iwd-gold-400/10 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-iwd-gold-300 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-iwd-gold-400/50 hover:bg-iwd-gold-400/20 hover:shadow-xl hover:shadow-iwd-gold-500/10 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 light:hover:line-clamp-2 light:hover:border-iwd-gold-400/30 light:hover:bg-iwd-gold-400/5 light:hover:shadow-lg light:hover:shadow-iwd-gold-500/50 light:hover:ring-2"
      >
        Explore Sessions
      </button>
    </div>
  )
}

MyScheduleEmptyState.propTypes = {
  onExplore: PropTypes.func.isRequired,
}

export default MyScheduleEmptyState
