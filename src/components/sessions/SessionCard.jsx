import PropTypes from 'prop-types'
import { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'

import { DIRECTION } from '@/constants/directions'
import { addMinutes, format, parse, isValid } from 'date-fns'
import useSchedule from '@/hooks/useSchedule'

function SessionCard({
  sessionId,
  speakers,
  speakerAvatars,
  sessionTitle,
  sessionDesc,
  sessionTime,
  sessionRoom,
  sessionDuration = 60, // Duration in minutes
}) {
  const [direction, setDirection] = useState(DIRECTION.BOTTOM)
  const { isSessionSaved, toggleSession } = useSchedule()
  const toggle = () => {
    setDirection((d) =>
      d === DIRECTION.TOP ? DIRECTION.BOTTOM : DIRECTION.TOP
    )
  }
  const isSaved = sessionId ? isSessionSaved(sessionId) : false

  const getSessionTimes = () => {
    if (!sessionTime || typeof sessionTime !== 'string')
      return { startTime: '', endTime: '' }

    // If time range is explicitly provided (e.g., "10:00 - 12:00")
    if (sessionTime.includes('-')) {
      const [startStr, endStr] = sessionTime.split('-').map((str) => str.trim())
      try {
        const start = parse(startStr, 'HH:mm', new Date())
        const end = parse(endStr, 'HH:mm', new Date())
        if (isValid(start) && isValid(end)) {
          return {
            startTime: format(start, 'h:mm a'),
            endTime: format(end, 'h:mm a'),
          }
        }
      } catch (e) {
        return { startTime: startStr, endTime: endStr }
      }
    }

    // Otherwise, calculate end time based on duration (in minutes)
    try {
      const parsedStartTime = parse(sessionTime, 'HH:mm', new Date())
      if (!isValid(parsedStartTime)) {
        return { startTime: sessionTime, endTime: '' }
      }
      return {
        startTime: format(parsedStartTime, 'h:mm a'),
        endTime: format(addMinutes(parsedStartTime, sessionDuration), 'h:mm a'),
      }
    } catch (e) {
      return { startTime: sessionTime, endTime: '' }
    }
  }

  const { startTime, endTime } = getSessionTimes()
  const isExpanded = direction === DIRECTION.TOP
  const hasTimeInfo = startTime && endTime
  const hasSessionInfo = hasTimeInfo || sessionRoom

  /*
   * Layout: responsive grid with avatar column + content column.
   * Breakpoints: xs=400px, sm=640px, md=768px, lg=1024px, xl=1280px, 2xl=1536px
   *
   * Single avatar: xs and below = stacked (content first, avatar below); 401px+ = two columns
   * 2 avatars: md+ = two columns, first column width = 120px + 80px * count
   * 3+ avatars: lg+ = two columns; >3 avatars = wrap at lg (360px cap), no wrap at xl; below lg = stacked (content first, avatars below)
   * Second column = minmax(0,1fr) to use remaining space; lg+ grid gets flex-1 to fill button
   */
  return (
    <div className="group/card rounded-2xl border border-white/[0.06] bg-white/[0.02] shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20">
      <div className="flex w-full items-center justify-between p-4 md:px-8 lg:px-14">
        <button
          onClick={() => sessionDesc && toggle()}
          aria-expanded={sessionDesc ? isExpanded : undefined}
          aria-controls={
            sessionTitle
              ? `session-${sessionTitle.replace(/\s+/g, '-').toLowerCase()}`
              : undefined
          }
          aria-label={
            sessionTitle
              ? `${
                  isExpanded ? 'Collapse' : 'Expand'
                } session details for ${sessionTitle}`
              : `Session: ${sessionTitle}`
          }
          className="-ml-2 flex flex-1 items-center gap-5 rounded-xl p-2 text-left transition-colors hover:bg-white/[0.02] focus:outline-none focus:ring-2 focus:ring-iwd-gold-400/50"
        >
          <div
            style={
              speakerAvatars?.length > 1
                ? { '--avatar-count': speakerAvatars.length }
                : undefined
            }
            className={`grid items-center gap-5 text-left lg:min-w-0 lg:flex-1 ${
              /* 3+ avatars stacked below lg: smaller gap between title and avatars */
              speakerAvatars?.length > 2 ? 'max-lg:gap-y-2' : ''
            } ${
              speakerAvatars?.length > 1
                ? speakerAvatars.length === 2
                  ? /* 2 avatars: two columns at md */
                    'grid-cols-1 md:grid-cols-[calc(120px+80px*var(--avatar-count))_minmax(0,1fr)]'
                  : `grid-cols-1 lg:grid-cols-[calc(120px+80px*var(--avatar-count))_minmax(0,1fr)] ${
                      speakerAvatars.length > 3
                        ? /* 4+ avatars: 360px cap at lg (forces wrap); auto at xl/2xl (no wrap) */
                          'lg:grid-cols-[min(360px,calc(120px+80px*var(--avatar-count)))_minmax(0,1fr)] xl:grid-cols-[auto_minmax(0,1fr)] 2xl:grid-cols-[auto_minmax(0,1fr)]'
                        : ''
                    }`
                : /* 1 avatar: two columns at 401px (90px), md (120px) */
                  'grid-cols-1 min-[401px]:grid-cols-[90px_minmax(0,1fr)] md:grid-cols-[120px_minmax(0,1fr)]'
            }`}
          >
            {speakerAvatars?.length && (
              <div
                className={`flex min-w-0 flex-wrap overflow-hidden ${
                  speakerAvatars?.length >= 3 ? 'gap-1' : 'gap-2 rounded-full'
                } justify-start ${
                  /* 3+ avatars: content first below lg, avatar first at lg; 1 avatar: avatar below content at xs */
                  speakerAvatars?.length > 2
                    ? 'order-2 lg:order-1'
                    : speakerAvatars?.length === 1
                      ? 'max-xs:order-2'
                      : ''
                } ${
                  /* 4+ avatars: cap width at lg so avatars wrap */
                  speakerAvatars?.length > 3 ? 'lg:max-w-[360px]' : ''
                }`}
              >
                {speakerAvatars.map((avatar, index) => (
                  <div key={index} className="relative">
                    <div
                      className={`rounded-full bg-gradient-to-br from-iwd-gold-300/80 via-iwd-gold-500/60 to-iwd-gold-300/80 p-[3px] shadow-lg shadow-iwd-gold-500/20 ${
                        speakerAvatars?.length >= 3 ? 'mx-3 my-1' : ''
                      }`}
                    >
                      <img
                        src={
                          !avatar
                            ? `https://ui-avatars.com/api/?name=${speakers[index]}&background=random`
                            : avatar
                        }
                        alt={`Headshot of ${speakers[index]}`}
                        className={`rounded-full ring-2 ring-iwd-black-950 ${
                          speakerAvatars?.length >= 3
                            ? 'size-[86px]'
                            : 'size-[86px] md:size-[116px]'
                        } object-cover`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div
              className={`w-full min-w-0 ${
                !speakerAvatars?.length ? 'col-span-2' : ''
              } ${
                /* 3+ avatars: content first below lg; 1 avatar: content first at xs */
                speakerAvatars?.length > 2
                  ? 'order-1 lg:order-2'
                  : speakerAvatars?.length === 1
                    ? 'max-xs:order-1'
                    : ''
              }`}
            >
              {sessionTitle && (
                <h3 className="text-base font-semibold text-white dark:text-white md:text-xl">
                  {sessionTitle}
                </h3>
              )}
              <p className="mt-1 text-sm text-gray-400">
                by {speakers.join(' & ')}
              </p>
              {hasSessionInfo && (
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                  {hasTimeInfo && (
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 font-medium text-iwd-gold-300 backdrop-blur-sm">
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
                      <span className="whitespace-nowrap text-sm font-semibold sm:text-base">
                        {startTime} – {endTime}
                      </span>
                    </span>
                  )}
                  {sessionRoom && (
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
                      {sessionRoom}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          {sessionDesc && (
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.04] transition-colors duration-300 group-hover/card:border-white/10 md:size-9">
              <IoChevronDown
                className={`size-4 text-gray-400 transition-transform duration-300 ease-out md:size-5 ${
                  direction === DIRECTION.TOP && '-scale-y-100'
                }`}
              />
            </div>
          )}
        </button>

        <div className="ml-4 flex items-center gap-3">
          {sessionId && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleSession(sessionId)
              }}
              aria-label={
                isSaved ? 'Remove from my schedule' : 'Add to my schedule'
              }
              className="group/save relative flex size-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 hover:bg-iwd-gold-400/10 active:scale-90"
            >
              {/* Tooltip hint */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-iwd-gold-400/20 bg-iwd-surface-raised dark:bg-iwd-black-900 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-iwd-gold-300 opacity-0 transition-opacity group-hover/save:opacity-100">
                {isSaved ? 'Saved' : 'Save'}
              </span>

              <svg
                className={`size-6 transition-all duration-500 ${
                  isSaved
                    ? 'scale-110 text-iwd-gold-400 drop-shadow-[0_0_8px_rgba(255,208,174,0.5)]'
                    : 'text-gray-500 group-hover/save:scale-110 group-hover/save:text-white dark:text-white'
                }`}
                fill={isSaved ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={isSaved ? 0 : 1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {isExpanded && sessionDesc && (
        <div
          id={`session-${sessionTitle.replace(/\s+/g, '-').toLowerCase()}`}
          className="border-t border-white/[0.06] px-4 pb-10 pt-5 md:px-8 lg:px-14"
        >
          <p className="whitespace-pre-wrap text-gray-300">{sessionDesc}</p>
        </div>
      )}
    </div>
  )
}

SessionCard.propTypes = {
  sessionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  speakers: PropTypes.arrayOf(PropTypes.string).isRequired,
  speakerAvatars: PropTypes.arrayOf(PropTypes.string).isRequired,
  sessionTitle: PropTypes.string.isRequired,
  sessionDesc: PropTypes.string.isRequired,
  sessionTime: PropTypes.string.isRequired,
  sessionRoom: PropTypes.string.isRequired,
  sessionDuration: PropTypes.number, // Duration in minutes
}

export default SessionCard
