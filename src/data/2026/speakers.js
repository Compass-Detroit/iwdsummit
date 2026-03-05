/**
 * IWD 2026 Speakers Data
 *
 * Add confirmed speakers here following the format below.
 * Speaker images go in: src/data/2026/assets/images/speakers/
 * Use .webp format for optimal performance.
 *
 * Duplicate speaker entries by name (e.g., same person in Opening + Closing)
 * are intentional. SpeakerProvider de-duplicates for the Speakers section;
 * SessionsSection uses all entries so both sessions appear in the schedule.
 *
 * Required fields: id, name, avatar, session (with title, tags, track, time, room)
 * Optional fields: email, bio, twitter, linkedIn, organization, position, isWTM, isGDE, mastodon
 */

// import SpeakerName from './assets/images/speakers/SpeakerName.webp'

export const SpeakersData = [
  // Speakers will be added here as they are confirmed.
  // Example format:
  // {
  //   id: 1,
  //   name: 'Speaker Name',
  //   email: 'speaker@example.com',
  //   avatar: SpeakerImage,
  //   bio: 'Speaker biography...',
  //   twitter: null,
  //   linkedIn: 'https://www.linkedin.com/in/speaker',
  //   organization: 'Organization',
  //   position: 'Title',
  //   session: {
  //     title: 'Session Title',
  //     abstract: 'Brief abstract...',
  //     description: 'Full session description...',
  //     tags: ['In-person', 'Track Name'],
  //     track: 'Track Name',
  //     time: '10:00',
  //     room: 'Room Name',
  //     sessionDuration: 45,
  //   },
  //   isWTM: false,
  //   isGDE: false,
  //   mastodon: null,
  // },
]
