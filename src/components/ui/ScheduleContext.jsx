import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ScheduleContext from '@/contexts/scheduleContextCore'

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
