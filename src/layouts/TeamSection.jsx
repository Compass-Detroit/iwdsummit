import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import LinkedInHandle from '@/components/ui/LinkedInHandle'
import SectionSkipLink from '@/components/ui/SectionSkipLink'
import GithubHandle from '@/components/ui/GithubHandle'
import TwitterHandle from '@/components/ui/TwitterHandle'
import { FaCodeCommit } from 'react-icons/fa6'

const TeamSection = ({ teamData, year }) => {
  const [selectedBio, setSelectedBio] = useState(null)
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)

  // Get ribbon color based on role
  const getRibbonColor = (teamRole) => {
    // Return actual color values to avoid Tailwind purge removing dynamic class names
    const colors = {
      compass: '#d4af37', // gold
      facilitator: '#d4af37',
      devteam: '#0ea5e9', // sky-500-ish
      marketing: '#c026d3', // fuchsia-ish
    }
    return colors[teamRole] || '#6b7280'
  }

  const getRibbonLabel = (teamRole) => {
    if (teamRole === 'compass') return 'Organizer'
    if (teamRole === 'board') return 'Board'
    if (teamRole === 'devteam') return 'Dev'
    return teamRole
  }

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedBio) {
        setSelectedBio(null)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [selectedBio])

  // Focus management and body scroll lock
  useEffect(() => {
    if (selectedBio) {
      // Lock body scroll
      document.body.style.overflow = 'hidden'

      // Focus the close button when modal opens
      closeButtonRef.current?.focus()
    } else {
      // Restore body scroll
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedBio])

  const teamCount = teamData.length

  return (
    <section
      id="leadership"
      className="relative bg-iwd-surface-raised dark:bg-iwd-black-900 px-8 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      <SectionSkipLink href="#page-footer">Skip to footer</SectionSkipLink>
      <div className="flex w-full justify-center pt-0">
        <h2 className="mb-4 w-full text-center font-heading text-3xl font-bold text-white dark:text-white sm:text-4xl md:mb-6 lg:text-5xl">
          {year ? `${year} ` : ''}Leadership Team
        </h2>
      </div>

      <div className="mx-auto flex max-w-full justify-center lg:mx-0">
        <p className="prose mt-6 max-w-4xl text-left text-base/7 text-gray-400 [text-wrap:pretty]">
          Our team of {teamCount} includes GDG organizers, session facilitators,
          and web developers — a mix of university students and industry
          professionals from companies like IBM, Little Caesars, and tech
          entrepreneurs with deep expertise in the tech industry. Together, we
          are bringing <strong>Compass Detroit, Michigan</strong> to life.
        </p>
      </div>

      <div className="">
        <div className="mx-auto max-w-7xl lg:px-8">
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-center  lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
            {teamData.map((dev) => {
              return (
                <li
                  key={`dev-${dev.id}`}
                  className="group relative overflow-visible rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-14 hover:border-iwd-gold-400/30 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-iwd-gold-500/10"
                >
                  {/* Ribbon */}
                  <div className="pointer-events-none absolute left-1/2 top-2 z-[1] -translate-x-1/2">
                    <div
                      className="team-ribbon relative rotate-45"
                      aria-hidden="true"
                    >
                      <div
                        className="team-ribbon-bar text-center text-[11px] font-black uppercase tracking-[0.12em] text-white dark:text-white"
                        style={{
                          backgroundColor: getRibbonColor(dev.team),
                          padding: '6px 0',
                          width: '220%',
                          left: '-60%',
                          position: 'relative',
                        }}
                      >
                        {getRibbonLabel(dev.team)}
                      </div>

                      <div
                        className="team-ribbon-tail"
                        style={{
                          backgroundColor: getRibbonColor(dev.team),
                        }}
                      />

                      <div className="team-ribbon-bow" aria-hidden="true">
                        <svg
                          width="28"
                          height="20"
                          viewBox="0 0 28 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 10c2.5-3 6-6 9-6 0 4-3 6-9 10-6-4-9-6-9-10 3 0 6 3 9 6z"
                            fill="white"
                            opacity="0.95"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content wrapper */}
                  <div className="relative overflow-hidden rounded-xl pb-8">
                    <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
                      <div className="flex shrink-0 flex-col items-center">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-iwd-gold-400 to-transparent opacity-0 blur transition-opacity duration-500 group-hover:opacity-40" />
                          <img
                            alt={`${dev.name} avatar`}
                            src={dev.avatar}
                            className="relative size-24 rounded-full border-2 border-white/10 object-cover p-1 shadow-inner grayscale transition-all duration-500 group-hover:grayscale-0"
                          />
                        </div>
                        <div className="mt-4 flex w-full flex-wrap justify-center gap-2">
                          {dev.linkedin && (
                            <LinkedInHandle
                              handle={dev.linkedin}
                              absolute={false}
                            />
                          )}
                          {dev.github && (
                            <GithubHandle
                              handle={dev.github}
                              absolute={false}
                            />
                          )}
                          {dev.twitter && (
                            <TwitterHandle
                              handle={dev.twitter}
                              name={dev.name}
                              absolute={false}
                            />
                          )}
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col gap-1 sm:pt-4">
                        <h3 className="font-heading text-xl font-black text-white dark:text-white">
                          {dev.name}
                        </h3>
                        {dev.organization && (
                          <div className="flex items-center justify-center gap-2 sm:justify-start">
                            <div className="h-px w-3 bg-iwd-gold-400/30" />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white dark:text-white/40">
                              {dev.organization}
                            </p>
                          </div>
                        )}
                        <p className="mt-2 text-xs font-semibold tracking-wide text-iwd-gold-400/80">
                          {dev.role}
                        </p>
                        {dev.commits != null && dev.commits > 0 && (
                          <div className="mx-auto mt-3 flex w-fit items-center justify-center gap-1.5 rounded-full bg-white/5 px-3 py-1 sm:mx-0 sm:justify-start">
                            <FaCodeCommit className="size-3 text-iwd-gold-400/60" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-white dark:text-white/30">
                              Core Contributor
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Button positioned relative to card */}
                  {dev.bio && (
                    <button
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-iwd-gold-400/30 bg-iwd-surface-raised dark:bg-iwd-black-950 px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-iwd-gold-400 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-110 hover:border-iwd-gold-400 hover:bg-iwd-gold-400 hover:text-iwd-black-950 hover:shadow-iwd-gold-500/20 active:scale-95"
                      onClick={() =>
                        setSelectedBio({ name: dev.name, bio: dev.bio })
                      }
                      aria-label={`View bio for ${dev.name}`}
                    >
                      View Bio
                    </button>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Bio Modal */}
      {selectedBio && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="presentation"
          onClick={(e) => {
            // Only close if clicking the backdrop, not the modal content
            if (e.target === e.currentTarget) {
              setSelectedBio(null)
            }
          }}
        >
          <div
            ref={modalRef}
            className="relative max-w-lg rounded-lg bg-iwd-surface-raised dark:bg-iwd-black-950 p-6 shadow-xl ring-1 ring-white/10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              ref={closeButtonRef}
              className="absolute right-4 top-4 text-gray-500 transition-colors hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
              onClick={() => setSelectedBio(null)}
              aria-label="Close dialog"
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3
              id="modal-title"
              className="mb-4 pr-8 text-xl font-semibold text-white dark:text-white"
            >
              {selectedBio.name}
            </h3>
            <p className="prose text-left text-gray-300 [text-wrap:pretty]">
              {selectedBio.bio}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

TeamSection.propTypes = {
  teamData: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
}

export default TeamSection
