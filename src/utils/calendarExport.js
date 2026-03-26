const DEFAULT_EVENT_DATE = '2026-03-28'
const DEFAULT_TIMEZONE_OFFSET = '-04:00'
const DEFAULT_LOCATION_PREFIX = 'Little Caesars Global Resource Center'

// Formats a Date object to YYYYMMDDTHHmmssZ
const formatDate = (date) =>
  `${date.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`

const normalizeTimeString = (value) => {
  if (!value || typeof value !== 'string') return null

  const cleaned = value.trim().toLowerCase()
  if (!cleaned || cleaned === 'tba' || cleaned === 'n/a') return null

  const match = cleaned.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/i)
  if (!match) return null

  let hours = Number(match[1])
  const mins = Number(match[2] ?? 0)
  const meridiem = match[3]?.toLowerCase()

  if (Number.isNaN(hours) || Number.isNaN(mins)) return null

  if (meridiem === 'pm' && hours !== 12) hours += 12
  if (meridiem === 'am' && hours === 12) hours = 0

  // Session data often omits AM/PM. For summit schedules, 1:00-6:00 are PM.
  if (!meridiem && hours >= 1 && hours <= 6) hours += 12

  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`
}

const parseTimeRangeFromTime = (time) => {
  if (!time || typeof time !== 'string' || !time.includes('-')) return null

  const [startRaw, endRaw] = time.split('-').map((part) => part.trim())
  const start = normalizeTimeString(startRaw)
  const end = normalizeTimeString(endRaw)

  if (!start || !end) return null
  return { start, end }
}

const buildEventDate = (
  date = DEFAULT_EVENT_DATE,
  time,
  offset = DEFAULT_TIMEZONE_OFFSET
) => {
  if (!time) return null
  return new Date(`${date}T${time}:00${offset}`)
}

const parseSessionDates = (session) => {
  const {
    time,
    timeEnd,
    sessionDuration = 45,
    eventDate = DEFAULT_EVENT_DATE,
    timezoneOffset = DEFAULT_TIMEZONE_OFFSET,
  } = session

  const range = parseTimeRangeFromTime(time)
  const startTime = range?.start ?? normalizeTimeString(time)
  const endTime = range?.end ?? normalizeTimeString(timeEnd ?? '') ?? null

  if (!startTime) return null

  const startDate = buildEventDate(eventDate, startTime, timezoneOffset)
  if (Number.isNaN(startDate?.getTime())) return null

  let endDate = null
  if (endTime) {
    endDate = buildEventDate(eventDate, endTime, timezoneOffset)
  } else {
    const duration = Number(sessionDuration)
    const safeDuration = Number.isFinite(duration) ? duration : 45
    endDate = new Date(startDate.getTime() + safeDuration * 60 * 1000)
  }

  if (Number.isNaN(endDate?.getTime())) return null

  return { startDate, endDate }
}

const normalizeSessionsArray = (sessions) =>
  (Array.isArray(sessions) ? sessions : [sessions]).filter(Boolean)

const buildEventLocation = ({ room, location }) => {
  if (location) return location
  if (!room) return DEFAULT_LOCATION_PREFIX
  return `${DEFAULT_LOCATION_PREFIX} - ${room}`
}

const escapeICS = (value = '') =>
  String(value)
    .replace(/\\/g, '\\\\')
    .replace(/\r?\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')

export const generateOutlookCalendarLink = (session) => {
  const [event] = normalizeSessionsArray(session)
  if (!event) return '#'

  try {
    const parsed = parseSessionDates(event)
    if (!parsed) return '#'

    const { startDate, endDate } = parsed
    const params = new URLSearchParams({
      path: '/calendar/action/compose',
      rru: 'addevent',
      subject: event.title || 'IWD Summit Session',
      body: event.description || '',
      startdt: startDate.toISOString(),
      enddt: endDate.toISOString(),
      location: buildEventLocation(event),
    })
    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`
  } catch (error) {
    console.error('Failed to parse session date for Outlook', error)
    return '#'
  }
}

const buildICSContent = (sessions) => {
  const events = normalizeSessionsArray(sessions)
    .map((session, index) => {
      const parsed = parseSessionDates(session)
      if (!parsed) return null

      const { startDate, endDate } = parsed
      const now = formatDate(new Date())
      const start = formatDate(startDate)
      const end = formatDate(endDate)
      const slug = (session.title || 'session')
        .replace(/\s+/g, '-')
        .toLowerCase()
      const uid = `${start}-${slug}-${index}@compassdetroit.org`

      return [
        'BEGIN:VEVENT',
        `UID:${escapeICS(uid)}`,
        `DTSTAMP:${now}`,
        `SUMMARY:${escapeICS(session.title || 'IWD Summit Session')}`,
        `DESCRIPTION:${escapeICS(session.description || '')}`,
        `DTSTART:${start}`,
        `DTEND:${end}`,
        `LOCATION:${escapeICS(buildEventLocation(session))}`,
        'END:VEVENT',
      ].join('\r\n')
    })
    .filter(Boolean)

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'PRODID:-//Compass Detroit//IWD Summit 2026//EN',
    ...events,
    'END:VCALENDAR',
  ].join('\r\n')
}

const downloadICS = (content, filename) => {
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

export const generateICSFile = (sessions, options = {}) => {
  const events = normalizeSessionsArray(sessions)
  const validCount = events.filter((event) => parseSessionDates(event)).length
  if (!validCount) return false

  const extension = options.extension === 'ical' ? 'ical' : 'ics'
  const defaultFilename =
    validCount > 1
      ? `iwd-2026-full-schedule.${extension}`
      : `iwd-2026-session.${extension}`

  const filename = options.filename || defaultFilename
  const content = buildICSContent(events)
  downloadICS(content, filename)
  return true
}
