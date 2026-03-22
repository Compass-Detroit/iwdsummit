/**
 * Utility functions for exporting sessions to calendars
 */

// Formats a Date object to YYYYMMDDTHHmmssZ
const formatDate = (date) => {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}

const buildSessionDate = (timeStr, durationStr = 45) => {
  // Pad the time string and attach timezone offset (March 2026 EDT is -04:00)
  const isPM = timeStr.toLowerCase().includes('pm')
  const isAM = timeStr.toLowerCase().includes('am')
  let cleanTime = timeStr.replace(/am|pm/i, '').trim()

  if (!cleanTime.includes(':')) {
    cleanTime = `${cleanTime}:00`
  }

  let [hours, mins] = cleanTime.split(':').map(Number)

  // Handle 12-hour logic
  if (isPM && hours !== 12) hours += 12
  if (isAM && hours === 12) hours = 0

  // Standardize back to string
  const finalTime = `${hours.toString().padStart(2, '0')}:${mins
    .toString()
    .padStart(2, '0')}:00`

  const baseDate = new Date(`2026-03-28T${finalTime}-04:00`)
  // Extract number from duration string (e.g. "45 Min" -> 45)
  const durMatch = String(durationStr).match(/(\d+)/)
  const duration = durMatch ? parseInt(durMatch[1], 10) : 45
  const endDate = new Date(baseDate.getTime() + duration * 60000)

  return { baseDate, endDate }
}

export const generateGoogleCalendarLink = (session) => {
  const { title, description, time, room, sessionDuration = 45 } = session
  if (!time) return '#'

  try {
    const { baseDate, endDate } = buildSessionDate(time, sessionDuration)
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: title,
      dates: `${formatDate(baseDate)}/${formatDate(endDate)}`,
      details: description || '',
      location: `Little Caesars Global Resource Center - ${room || 'TBD'}`,
    })
    return `https://calendar.google.com/calendar/render?${params.toString()}`
  } catch (e) {
    console.error('Failed to parse session date for GCal', e)
    return '#'
  }
}

export const generateOutlookCalendarLink = (session) => {
  const { title, description, time, room, sessionDuration = 45 } = session
  if (!time) return '#'

  try {
    const { baseDate, endDate } = buildSessionDate(time, sessionDuration)
    const params = new URLSearchParams({
      path: '/calendar/action/compose',
      rru: 'addevent',
      subject: title,
      body: description || '',
      startdt: baseDate.toISOString(),
      enddt: endDate.toISOString(),
      location: `Little Caesars Global Resource Center - ${room || 'TBD'}`,
    })
    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`
  } catch (e) {
    console.error('Failed to parse session date for Outlook', e)
    return '#'
  }
}

export const generateICSFile = (sessions) => {
  const getICSContent = (session) => {
    const { title, description, time, room, sessionDuration = 45 } = session
    if (!time) return ''

    try {
      const { baseDate, endDate } = buildSessionDate(time, sessionDuration)
      return `BEGIN:VEVENT
SUMMARY:${title.replace(/,/g, '\\,')}
DESCRIPTION:${(description || '').replace(/\\n/g, ' ').replace(/,/g, '\\,')}
DTSTART:${formatDate(baseDate)}
DTEND:${formatDate(endDate)}
LOCATION:Little Caesars Global Resource Center - ${room || 'TBD'}
END:VEVENT`
    } catch {
      return ''
    }
  }

  const events = Array.isArray(sessions) ? sessions : [sessions]
  const validEvents = events
    .map(getICSContent)
    .filter((e) => e.length > 0)
    .join('\n')

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Compass Detroit//IWD Summit 2026//EN
${validEvents}
END:VCALENDAR`

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  const filename =
    Array.isArray(sessions) && sessions.length > 1
      ? 'iwd-2026-full-schedule.ics'
      : 'iwd-2026-session.ics'
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
