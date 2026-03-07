import PropTypes from 'prop-types'
import { format, parse } from 'date-fns'

/**
 * Card for conference activities (check-in, breakfast, lunch, etc.)
 * that are not speaker sessions. Single column: time range + title.
 */
function ActivityCard({ title, content, cta, time, timeEnd, room }) {
  const formatTime = (t) => {
    if (!t) return ''
    try {
      return format(parse(t, 'HH:mm', new Date()), 'h:mm a')
    } catch {
      return t
    }
  }

  const startFormatted = formatTime(time)
  const endFormatted = formatTime(timeEnd)
  const timeLabel =
    startFormatted && endFormatted
      ? `${startFormatted} - ${endFormatted}`
      : startFormatted || ''

  const linkClassName = 'font-medium text-sky-400 underline hover:text-sky-300'

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
      <div className="flex w-full items-center p-4 md:px-8 lg:px-14">
        <div className="flex w-full items-center gap-4">
          {/* Accent icon */}
          <div className="hidden size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] sm:flex">
            <svg
              className="size-5 text-iwd-gold-400/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            {title && (
              <h3 className="text-base font-semibold text-white md:text-xl">
                {title}
              </h3>
            )}
            {(content || cta) && (
              <div className="mt-1.5 text-sm text-gray-400">
                {content && <span>{content} </span>}
                {cta?.url && cta?.text && (
                  <a
                    href={cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={cta.ariaLabel ?? cta.text}
                    className={linkClassName}
                  >
                    {cta.text}
                  </a>
                )}
              </div>
            )}
            <div className="mt-2.5 flex flex-wrap items-center gap-2 text-sm">
              {timeLabel && (
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 font-semibold text-iwd-gold-300 backdrop-blur-sm sm:text-base">
                  <svg
                    className="size-3.5 opacity-60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {timeLabel}
                </span>
              )}
              {room && (
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-sm text-gray-300 backdrop-blur-sm">
                  <svg
                    className="size-3.5 opacity-60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {room}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ActivityCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  cta: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
  }),
  time: PropTypes.string.isRequired,
  timeEnd: PropTypes.string,
  room: PropTypes.string,
}

export default ActivityCard
