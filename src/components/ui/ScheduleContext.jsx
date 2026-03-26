import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ScheduleContext from '@/contexts/scheduleContextCore'
import { SpeakersData } from '@/data/2026/speakers'

// Normalize stored IDs to a canonical session id format (sorted underscore-joined ids)
const canonicalizeSessionId = (sessionId) => {
  if (!sessionId && sessionId !== 0) return ''
  const asStr = String(sessionId)
  if (asStr.includes('_')) {
    const parts = asStr
      .split('_')
      .map((p) => Number(p))
      .filter(Boolean)
    parts.sort((a, b) => a - b)
    return parts.join('_')
  }
  const idNum = Number(asStr)
  const speaker = SpeakersData.find(
    (s) => s.id === idNum || String(s.id) === asStr
  )
  if (!speaker || !speaker.session?.title) return asStr
  const related = SpeakersData.filter(
    (s) => s.session?.title === speaker.session.title
  ).map((s) => Number(s.id))
  related.sort((a, b) => a - b)
  return related.join('_')
}

const getRepresentativeSpeakerForCanonicalId = (canonicalId) => {
  if (!canonicalId) return null
  // Find any speaker whose canonical id matches
  return (
    SpeakersData.find((s) => canonicalizeSessionId(s.id) === canonicalId) ||
    null
  )
}

const buildSessionRange = (time, duration) => {
  if (!time || typeof time !== 'string') return null
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

export default function ScheduleProvider({ children }) {
  const [savedSessionIds, setSavedSessionIds] = useState(() => {
    try {
      const stored = localStorage.getItem('iwd26_saved_sessions')
      const parsed = stored ? JSON.parse(stored) : []
      return parsed.map((id) => canonicalizeSessionId(id)).filter(Boolean)
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

  const [conflictingSessionIds, setConflictingSessionIds] = useState([])
  const [lastConflict, setLastConflict] = useState(null)

  const toggleSession = (sessionId) => {
    const canonicalId = canonicalizeSessionId(sessionId)
    setSavedSessionIds((prev) => {
      if (prev.includes(canonicalId)) {
        return prev.filter((id) => id !== canonicalId)
      }

      // Check for time conflicts against already saved sessions
      const rep = getRepresentativeSpeakerForCanonicalId(canonicalId)
      if (rep?.session?.time && rep.session.time !== 'TBA') {
        const newRange = buildSessionRange(
          rep.session.time,
          rep.session.sessionDuration
        )
        const conflictingSaved = prev.filter((savedId) => {
          const savedRep = getRepresentativeSpeakerForCanonicalId(savedId)
          if (!savedRep?.session?.time || savedRep.session.time === 'TBA')
            return false
          const savedRange = buildSessionRange(
            savedRep.session.time,
            savedRep.session.sessionDuration
          )
          if (!savedRange || !newRange) return false
          return (
            newRange.start < savedRange.end && newRange.end > savedRange.start
          )
        })

        if (conflictingSaved.length > 0) {
          // Don't auto-add — surface a subtle UI note so the user can choose how to resolve
          setLastConflict({ newId: canonicalId, conflicts: conflictingSaved })
          return prev
        }
      }

      return [...prev, canonicalId]
    })
  }

  const clearLastConflict = () => setLastConflict(null)

  const addSessionAnyway = (sessionId) => {
    const canonicalId = canonicalizeSessionId(sessionId)
    setSavedSessionIds((prev) => {
      if (prev.includes(canonicalId)) return prev
      return [...prev, canonicalId]
    })
    setLastConflict(null)
  }

  const autoResolveAndAdd = (sessionId) => {
    const canonicalId = canonicalizeSessionId(sessionId)
    const conflict = lastConflict || { newId: canonicalId, conflicts: [] }
    const items = [conflict.newId, ...conflict.conflicts]
    const withRanges = items
      .map((id) => {
        const rep = getRepresentativeSpeakerForCanonicalId(id)
        const range =
          rep?.session?.time && rep.session.time !== 'TBA'
            ? buildSessionRange(rep.session.time, rep.session.sessionDuration)
            : null
        return { id, range }
      })
      .filter((x) => x.range)

    if (withRanges.length === 0) {
      addSessionAnyway(canonicalId)
      return
    }

    withRanges.sort((a, b) => a.range.start - b.range.start)
    const earliest = withRanges[0].id

    setSavedSessionIds((prev) => {
      const filtered = prev.filter((id) => !conflict.conflicts.includes(id))
      if (!filtered.includes(earliest)) filtered.push(earliest)
      return filtered
    })
    setLastConflict(null)
  }

  // Recompute conflicts whenever saved sessions change
  useEffect(() => {
    const ranges = savedSessionIds
      .map((id) => {
        const rep = getRepresentativeSpeakerForCanonicalId(id)
        if (!rep || !rep.session?.time || rep.session.time === 'TBA')
          return null
        const r = buildSessionRange(
          rep.session.time,
          rep.session.sessionDuration
        )
        return r ? { id, ...r } : null
      })
      .filter(Boolean)

    const conflictSet = new Set()
    for (let i = 0; i < ranges.length; i++) {
      for (let j = i + 1; j < ranges.length; j++) {
        const a = ranges[i]
        const b = ranges[j]
        if (a.start < b.end && a.end > b.start) {
          conflictSet.add(a.id)
          conflictSet.add(b.id)
        }
      }
    }
    setConflictingSessionIds(Array.from(conflictSet))
  }, [savedSessionIds])

  const isSessionSaved = (sessionId) =>
    savedSessionIds.includes(canonicalizeSessionId(sessionId))

  const isSessionConflicting = (sessionId) =>
    conflictingSessionIds.includes(canonicalizeSessionId(sessionId))

  return (
    <ScheduleContext.Provider
      value={{
        savedSessionIds,
        toggleSession,
        isSessionSaved,
        isSessionConflicting,
        conflictingSessionIds,
        lastConflict,
        clearLastConflict,
        addSessionAnyway,
        autoResolveAndAdd,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  )
}

ScheduleProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
