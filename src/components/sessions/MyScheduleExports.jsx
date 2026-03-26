import PropTypes from 'prop-types'
import { generateICSFile } from '@/utils/calendarExport'

function MyScheduleExports({ events }) {
  const exportableEvents = events.filter(
    (event) => event.time && event.time !== 'TBA'
  )

  if (!exportableEvents.length) {
    return (
      <div className="rounded-xl border border-amber-300/30 bg-amber-50/80 px-4 py-3 text-sm text-amber-900">
        Add sessions with scheduled times to export your curated calendar.
      </div>
    )
  }

  const buttonClassName =
    'rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/10'

  return (
    <div className="mb-4 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
      <span className="min-w-[140px] text-xs font-semibold uppercase tracking-wider text-gray-300">
        Export My Schedule:
      </span>

      <button
        onClick={() => generateICSFile(exportableEvents)}
        className={buttonClassName}
        type="button"
      >
        iCal (.ics)
      </button>

      <button
        onClick={() =>
          generateICSFile(exportableEvents, {
            extension: 'ical',
            filename: 'iwd-2026-full-schedule.ical',
          })
        }
        className={buttonClassName}
        type="button"
      >
        iCal (.ical)
      </button>
    </div>
  )
}

MyScheduleExports.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      time: PropTypes.string,
      timeEnd: PropTypes.string,
      room: PropTypes.string,
      sessionDuration: PropTypes.number,
      location: PropTypes.string,
    })
  ).isRequired,
}

export default MyScheduleExports
