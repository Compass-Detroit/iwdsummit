import { schedules } from '@/data/2026/schedules'
import { memo } from 'react'
import PropTypes from 'prop-types'

const TrackHeader = memo(({ title, colorClass }) => (
  <div
    className={`rounded-t-2xl border-x border-t border-white/10 p-4 text-center ${
      colorClass || 'bg-iwd-dark-900'
    }`}
  >
    <h4 className="font-heading text-lg font-black uppercase tracking-widest text-white">
      {title}
    </h4>
  </div>
))
TrackHeader.displayName = 'TrackHeader'

const CompactSession = memo(({ session }) => (
  <div className="group relative flex flex-col gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-white/[0.12] hover:bg-white/[0.05]">
    <div className="flex items-center justify-between gap-2">
      <span className="text-[10px] font-bold text-iwd-gold-400/70">
        {session.time}
      </span>
      {session.type && (
        <span className="rounded-md bg-white/5 px-1.5 py-0.5 text-[8px] font-bold uppercase text-gray-900 dark:text-white/40">
          {session.type}
        </span>
      )}
    </div>
    <h5 className="line-clamp-2 font-heading text-sm font-bold text-white transition-colors group-hover:text-iwd-gold-300">
      {session.title}
    </h5>
    <div className="mt-1 flex items-center gap-2">
      {session.speakerImage && (
        <img
          src={session.speakerImage}
          alt=""
          className="size-5 rounded-full object-cover grayscale transition-all group-hover:grayscale-0"
        />
      )}
      <span className="text-[10px] font-medium text-gray-900 dark:text-white/50">
        {session.speaker}
      </span>
    </div>
  </div>
))
CompactSession.displayName = 'CompactSession'
CompactSession.propTypes = {
  session: PropTypes.shape({
    time: PropTypes.string.isRequired,
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    speaker: PropTypes.string,
    speakerImage: PropTypes.string,
  }).isRequired,
}

TrackHeader.propTypes = {
  title: PropTypes.string.isRequired,
  colorClass: PropTypes.string,
}

export default function CompactSchedule() {
  const tracks = Object.keys(schedules)

  // Custom track colors mapping
  const trackColors = {
    'Build with AI': 'bg-purple-900/40',
    'Innovation': 'bg-indigo-900/40',
    'Level Up': 'bg-emerald-900/40',
    'Leadership': 'bg-iwd-gold-900/40',
    'Tech+Design': 'bg-red-900/40',
    'Workshops': 'bg-orange-900/40',
    'AI Foundations': 'bg-blue-900/40',
    'Careers': 'bg-slate-900/40',
  }

  return (
    <div className="scrollbar-hide w-full overflow-x-auto pb-4">
      <div className="inline-flex min-w-full gap-4 px-4 sm:px-0">
        {tracks.map((track) => (
          <div key={track} className="flex w-72 shrink-0 flex-col gap-3">
            <TrackHeader title={track} colorClass={trackColors[track]} />
            <div className="custom-scrollbar flex max-h-[600px] flex-col gap-3 overflow-y-auto pr-1.5">
              {schedules[track].map((session, idx) => (
                <CompactSession key={`${track}-${idx}`} session={session} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
