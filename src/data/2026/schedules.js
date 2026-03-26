import { SpeakersData } from './speakers'
import { conferenceActivities } from './conferenceActivities'

// Helper to group sessions by track
const groupSessionsByTrack = (speakers, activities) => {
  const grouped = {}

  // Add speaker sessions
  speakers.forEach((speaker) => {
    if (speaker.session && speaker.session.track) {
      const track = speaker.session.track
      if (!grouped[track]) grouped[track] = []

      grouped[track].push({
        time: speaker.session.time,
        title: speaker.session.title,
        speaker: speaker.name,
        speakerImage: speaker.avatar,
        type: speaker.session.tags ? speaker.session.tags[0] : 'Session',
      })
    }
  })

  // Add conference activities
  activities.forEach((activity) => {
    const track = activity.track || 'General'
    if (!grouped[track]) grouped[track] = []

    grouped[track].push({
      time: activity.time,
      title: activity.title,
      speaker: activity.room, // using room as "speaker" context for activities
      type: 'Activity',
    })
  })

  // Sort each track by time
  Object.keys(grouped).forEach((track) => {
    grouped[track].sort((a, b) => {
      if (a.time === 'TBA') return 1
      if (b.time === 'TBA') return -1
      return a.time.localeCompare(b.time)
    })
  })

  return grouped
}

export const schedules = groupSessionsByTrack(
  SpeakersData,
  conferenceActivities
)
