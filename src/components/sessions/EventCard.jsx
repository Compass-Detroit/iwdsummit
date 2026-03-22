import PropTypes from 'prop-types'

// Track color mapping — dark glassmorphic palette
const trackColors = {
  'AI Foundations': {
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    badge: 'bg-red-500/20',
    text: 'text-red-400',
  },
  'Build with AI': {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    badge: 'bg-blue-500/20',
    text: 'text-blue-400',
  },
  Innovation: {
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    badge: 'bg-indigo-500/20',
    text: 'text-indigo-400',
  },
  Leadership: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    badge: 'bg-amber-500/20',
    text: 'text-amber-400',
  },
  'Level Up': {
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    badge: 'bg-rose-500/20',
    text: 'text-rose-400',
  },
  Career: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    badge: 'bg-cyan-500/20',
    text: 'text-cyan-400',
  },
  Session: {
    bg: 'bg-white/[0.04]',
    border: 'border-white/10',
    badge: 'bg-white/10',
    text: 'text-gray-400',
  },
  default: {
    bg: 'bg-white/[0.02]',
    border: 'border-white/[0.06]',
    badge: 'bg-white/10',
    text: 'text-gray-400',
  },
}

// Detect track from title
const getTrack = (title) => {
  if (title.includes('AI Foundations')) return 'AI Foundations'
  if (title.includes('Build with AI')) return 'Build with AI'
  if (
    title.includes('Innovation') ||
    title.includes('Keynote') ||
    title.includes('Panel')
  )
    return 'Innovation'
  if (title.includes('Leadership') || title.includes('Catalysts'))
    return 'Leadership'
  if (title.includes('Level Up')) return 'Level Up'
  if (
    title.includes('Career') ||
    title.includes('Resume') ||
    title.includes('Mentorship') ||
    title.includes('Mock Interview')
  )
    return 'Career'
  return 'Session'
}

const EventCard = ({
  title,
  description,
  alignRight = false,
  compact = false,
  gridMode = false,
}) => {
  const track = getTrack(title)
  const colors = trackColors[track] || trackColors.default

  // Grid mode: for 3+ events display
  if (gridMode) {
    return (
      <div
        className={`group relative flex h-full flex-col overflow-hidden rounded-xl border ${colors.border} ${colors.bg} p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20`}
      >
        {/* Track badge */}
        <span
          className={`mb-2 inline-flex w-fit items-center rounded-full ${colors.badge} px-3 py-1 text-xs font-extrabold ${colors.text}`}
        >
          {track}
        </span>

        <h4 className="mb-2 text-base font-bold leading-tight text-white dark:text-white">
          {title}
        </h4>

        <p className="mt-auto line-clamp-3 text-sm leading-relaxed text-gray-400">
          {description}
        </p>
      </div>
    )
  }

  // Compact mode
  if (compact) {
    return (
      <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
        <h4 className="mb-1 text-base font-bold text-white dark:text-white">{title}</h4>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </div>
    )
  }

  // Default mode: single or dual event display
  return (
    <div
      className={`group relative w-full rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:cursor-pointer hover:border-white/10 hover:bg-white/[0.04] ${
        alignRight
          ? 'md:ml-auto md:w-[calc(50%-3rem)]'
          : 'md:mr-auto md:w-[calc(50%-3rem)]'
      }`}
    >
      <h4 className="mb-2 text-lg font-bold text-white dark:text-white md:text-xl">{title}</h4>

      {/* Hover tooltip */}
      <div
        className={`pointer-events-none absolute z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
          alignRight
            ? 'right-0 top-full mr-4 mt-2'
            : 'left-0 top-full ml-4 mt-2'
        } w-full max-w-72 rounded-lg border border-white/10 bg-iwd-surface-raised dark:bg-iwd-black-900 p-4 shadow-xl`}
      >
        <div className="text-base leading-relaxed text-gray-300">
          {description}
        </div>
        {/* Arrow */}
        <div
          className={`absolute -top-2 ${
            alignRight ? 'right-8' : 'left-8'
          } size-0 border-8 border-transparent border-b-iwd-black-900`}
        />
      </div>
    </div>
  )
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alignRight: PropTypes.bool,
  compact: PropTypes.bool,
  gridMode: PropTypes.bool,
}

export default EventCard
