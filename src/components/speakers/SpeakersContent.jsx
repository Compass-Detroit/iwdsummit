import { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import SpeakerCard from '@/components/speakers/SpeakerCard'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

import { SpeakerContext } from '@/components/speakers/SpeakerContext'

import { DIRECTION } from '@/constants/directions'
import { IoChevronDown } from 'react-icons/io5'

const SpeakersContent = ({ year, defaultExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const [direction, setDirection] = useState(
    defaultExpanded === true ? DIRECTION.TOP : DIRECTION.BOTTOM
  )

  const { uniqueSpeakersSortedByFirstName } = useContext(SpeakerContext)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
    setDirection(isExpanded ? DIRECTION.BOTTOM : DIRECTION.TOP)
  }

  const renderSpeakerHeader = (
    <div className="relative mx-auto w-full max-w-7xl justify-center py-8">
      <button
        aria-label={
          isExpanded
            ? `Collapse ${year} Compass Detroit Speakers`
            : `Expand ${year} Compass Detroit Speakers`
        }
        onClick={toggleExpanded}
        className="absolute left-0 top-3 cursor-pointer items-center text-white transition-colors hover:text-gray-400 sm:top-4"
      >
        <IoChevronDown
          className={`size-6 shrink-0 text-iwd-gold-300 sm:size-7 md:size-8 lg:size-9 ${
            direction === DIRECTION.TOP && '-scale-y-100'
          } transition-transform duration-300 ease-out`}
        />
      </button>
      <div className="text-center">
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-iwd-gold-400/80">
          Meet Our Speakers
        </p>
        <h2 className="mb-5 w-full font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {year}{' '}
          <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
            Speakers
          </span>
        </h2>
        <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />
      </div>
    </div>
  )

  const renderSpeakerDescription = (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="mx-auto mt-6 max-w-4xl text-left">
        <p className="text-base leading-[1.9] text-gray-400 md:text-lg dark:text-gray-400">
          Join us for engaging and inspiring talks from industry leaders,
          innovators, and experts who are shaping the future of technology. Our
          speakers bring real-world experience and cutting-edge insights across
          AI, cloud, design, development, robotics, startups, and more.
        </p>
      </div>
    </div>
  )

  const renderSpeakers = (
    <div className="mx-auto my-8 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {uniqueSpeakersSortedByFirstName.map((speaker, index) => (
        <SpeakerCard
          key={speaker.id || `speaker-${index}`}
          avatar={speaker.avatar}
          bio={speaker.bio}
          github={speaker.github}
          id={speaker.id}
          instagram={speaker.instagram}
          isGDE={speaker.isGDE}
          isWTM={speaker.isWTM}
          linkedin={speaker.linkedIn}
          mastodon={speaker.mastodon}
          name={speaker.name}
          organization={speaker.organization}
          position={speaker.position}
          sessionDescription={speaker.session?.description ?? ''}
          sessionTitle={speaker.session?.title ?? ''}
          sessionSpeakers={speaker.session?.speakers ?? []}
          tags={speaker.session?.tags ?? []}
          track={speaker.session?.track ?? ''}
          twitter={speaker.twitter}
          url={speaker.url}
        />
      ))}
    </div>
  )

  const noSpeakersMessage = (
    <div className="col-span-1 my-4 flex flex-col items-center justify-center space-y-8 text-center text-lg leading-relaxed">
      <p>
        We are currently looking for speakers and will update the list once we
        have more information. If you are interested in speaking, sign up with
        the link below.
      </p>
      <a
        href="https://www.papercall.io/midevfest2025"
        target="_blank"
        className="flex items-center rounded-lg border border-iwd-gold-400/30 bg-iwd-gold-400/10 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-iwd-gold-300 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:border-iwd-gold-400/50 hover:bg-iwd-gold-400/20 hover:shadow-xl hover:shadow-iwd-gold-500/10"
        rel="noreferrer"
      >
        APPLY TO SPEAK
      </a>
    </div>
  )
  return (
    <section
      id="speakers"
      className="bg-iwd-surface-raised relative flex flex-col justify-center border-b border-white/10 p-8 pb-24 pt-16 sm:px-10 md:px-14 lg:px-16 dark:bg-iwd-black-950"
    >
      <SectionSkipLink href="#jobboard">Skip speakers section</SectionSkipLink>
      {renderSpeakerHeader}
      {renderSpeakerDescription}
      <div
        className={`mx-auto max-w-[2000px] overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {uniqueSpeakersSortedByFirstName &&
        uniqueSpeakersSortedByFirstName.length
          ? renderSpeakers
          : noSpeakersMessage}
      </div>
    </section>
  )
}

SpeakersContent.propTypes = {
  year: PropTypes.number.isRequired,
  defaultExpanded: PropTypes.bool,
}

export default SpeakersContent
