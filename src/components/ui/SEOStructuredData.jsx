import { memo } from 'react'
import PropTypes from 'prop-types'

/**
 * SEOStructuredData injects JSON-LD into the page for AI agents and search engines.
 * It provides structured details about the Event, Speakers, and Organizer.
 */
const SEOStructuredData = memo(({ speakersData = [] }) => {
  const eventData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    'name': "Detroit International Women's Day Innovation Summit 2026",
    'description':
      'Celebrating innovation, empowerment, and community at the IWD Innovation Summit 2026 in Detroit.',
    'image': 'https://iwdsummit.com/social-card.jpg',
    'startDate': '2026-03-28T08:00:00-05:00',
    'endDate': '2026-03-28T17:00:00-05:00',
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
    'location': {
      '@type': 'Place',
      'name': 'Little Caesars Global Resource Center',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '2125 Woodward Ave',
        'addressLocality': 'Detroit',
        'addressRegion': 'MI',
        'postalCode': '48201',
        'addressCountry': 'US',
      },
    },
    'organizer': {
      '@type': 'Organization',
      'name': 'Compass Detroit / GDG Detroit',
      'url': 'https://iwdsummit.com',
    },
    'performer': speakersData.map((speaker) => ({
      '@type': 'Person',
      'name': speaker.name,
      'jobTitle': speaker.position,
      'affiliation': {
        '@type': 'Organization',
        'name': speaker.organization,
      },
      'image': speaker.avatar,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
    />
  )
})

SEOStructuredData.displayName = 'SEOStructuredData'
SEOStructuredData.propTypes = {
  speakersData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string,
      organization: PropTypes.string,
      avatar: PropTypes.string,
    })
  ),
}

export default SEOStructuredData
