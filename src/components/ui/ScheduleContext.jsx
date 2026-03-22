import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ScheduleContext from '@/contexts/scheduleContextCore'
import { SpeakersData } from '@/data/2026/speakers'

export default function ScheduleProvider({ children }) {
  const [savedSessionIds, setSavedSessionIds] = useState(() => {
    try {
      const stored = localStorage.getItem('iwd26_saved_sessions')
      return stored ? JSON.parse(stored) : []
    } catch (e) {
      console.error('Failed to parse saved sessions from localStorage', e)
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(
        'iwd26_saved_sessions',
        JSON.stringify(savedSessionIds)
      )
    } catch (e) {
      console.error('Failed to save sessions to localStorage', e)
    }
  }, [savedSessionIds])

  const toggleSession = (sessionId) => {
    setSavedSessionIds((prev) => {
      if (prev.includes(sessionId)) {
        return prev.filter((id) => id !== sessionId)
      } else {
        const buildSessionRange = (time, duration) => {
          const isPM = time.toLowerCase().includes('pm')
          const isAM = time.toLowerCase().includes('am')
          let cleanTime = time.replace(/am|pm/i, '').trim()
          if (!cleanTime.includes(':')) cleanTime = `${cleanTime}:00`
          let [hours, mins] = cleanTime.split(':').map(Number)
          if (isPM && hours !== 12) hours += 12
          if (isAM && hours === 12) hours = 0
          const start = hours * 60 + mins
          const end = start + (duration || 45)
          return { start, end }
        }

        const newSpeaker = SpeakersData.find((s) => s.id === sessionId)
        if (newSpeaker?.session?.time && newSpeaker.session.time !== 'TBA') {
          const { start: newStart, end: newEnd } = buildSessionRange(
            newSpeaker.session.time,
            newSpeaker.session.sessionDuration
          )

          const hasConflict = prev.some((savedId) => {
            const savedSpeaker = SpeakersData.find((s) => s.id === savedId)
            if (
              !savedSpeaker?.session?.time ||
              savedSpeaker.session.time === 'TBA'
            )
              return false
            const { start: savedStart, end: savedEnd } = buildSessionRange(
              savedSpeaker.session.time,
              savedSpeaker.session.sessionDuration
            )
            return newStart < savedEnd && newEnd > savedStart
          })

          if (hasConflict) {
            alert(
              'Uh oh! Looks like you need a time-turner! 🕰️ This session overlaps with another one already in your schedule.'
            )
          }
        }
        return [...prev, sessionId]
      }
    })
  }

  const isSessionSaved = (sessionId) => savedSessionIds.includes(sessionId)

  return (
    <ScheduleContext.Provider
      value={{ savedSessionIds, toggleSession, isSessionSaved }}
    >
      {children}
    </ScheduleContext.Provider>
  )
}

ScheduleProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
