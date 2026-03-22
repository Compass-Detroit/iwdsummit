import React, { useState, useRef, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import useSchedule from '@/hooks/useSchedule'
import ActivityCard from '@/components/sessions/ActivityCard'
import SessionCard from '@/components/sessions/SessionCard'
import SectionSkipLink from '@/components/ui/SectionSkipLink'
import VenueMaps from '@/components/sessions/VenueMaps'

import { conferenceActivities } from '@/data/2026/conferenceActivities'
import { DIRECTION } from '@/constants/directions'
import { IoChevronDown, IoChevronForward, IoChevronBack } from 'react-icons/io5'

const convertTo24Hour = (time) => {
  if (!time || typeof time !== 'string') return ''

  const parts = time.split(':')
  if (parts.length < 2) return time // Return as is if no colon (e.g. "TBA")

  const [hour, minute] = parts.map(Number)
  if (isNaN(hour) || isNaN(minute)) return time

  if (hour === 12) {
    return `12:${String(minute).padStart(2, '0')}`
  }
  if (hour >= 1 && hour <= 5) {
    return `${(hour + 12).toString().padStart(2, '0')}:${String(
      minute
    ).padStart(2, '0')}`
  }
  return `${hour.toString().padStart(2, '0')}:${String(minute).padStart(
    2,
    '0'
  )}`
}

/** Normalize time to HH:mm for consistent sort comparison */
const normalizeSortTime = (t) => {
  if (!t) return '99:99'
  const normalized = convertTo24Hour(t) || t
  const [h, m] = normalized.split(':').map(Number)
  return `${String(h).padStart(2, '0')}:${String(m || 0).padStart(2, '0')}`
}

// Track descriptions (strings or JSX for inline formatting like <strong>)
const trackDescriptions = {
  'Build with AI': (
    <>
      <h3
        id="build-with-ai-heading"
        className="mx-auto mb-4 text-center text-xl font-semibold text-white dark:text-white sm:text-2xl"
      >
        <span className="font-bold">Build with AI Stage</span> is located in
        Service Building 120 (SB{'\u00A0'}120)
      </h3>
    </>
  ),
  'Innovation': (
    <>
      <h3
        id="innovation-heading"
        className="mx-auto mb-4 text-center text-xl font-semibold text-white dark:text-white sm:text-2xl"
      >
        <span className="font-bold">Innovation Stage</span> is located on the
        1st floor of Walker Crisler Building (WCB), Room{'\u00A0'}103
      </h3>
      <p className="mb-6 max-w-4xl text-pretty text-center text-base text-gray-400">
        Discover groundbreaking ideas and emerging technologies shaping the
        future.
      </p>
    </>
  ),
  'Level Up': (
    <>
      <h3
        id="level-up-heading"
        className="mx-auto mb-4 text-center text-xl font-semibold text-white dark:text-white sm:text-2xl"
      >
        <span className="font-bold">Level Up Stage</span> is located in Town
        Square
      </h3>
      <p className="mb-6 max-w-4xl text-pretty text-center text-base text-gray-400">
        Advance your career and personal growth. From mentorship to leadership,
        explore sessions that help you level up professionally and personally in
        tech.
      </p>
    </>
  ),
  'Leadership': (
    <>
      <h3
        id="leadership-heading"
        className="mx-auto mb-4 text-center text-xl font-semibold text-white dark:text-white sm:text-2xl"
      >
        <span className="font-bold">Leadership Stage</span> is located in Walker
        Crisler Building Floor 2 Rooms 275 and 278 (WCB{'\u00A0'}275{'\u00A0'}
        and
        {'\u00A0'}278)
      </h3>
      <p className="mb-6 max-w-4xl text-pretty text-center text-base text-gray-400">
        Discover insights from founders and entrepreneurs building the next
        generation of tech companies.{' '}
      </p>
    </>
  ),
  'AI Foundations': (
    <>
      <h3
        id="ai-foundations-heading"
        className="mx-auto mb-4 text-center text-xl font-semibold text-white dark:text-white sm:text-2xl"
      >
        <span className="font-bold">AI Foundations Stage</span> is located in
        Walker Crisler Building Floor 1 Room 105 (WCB{'\u00A0'}105)
      </h3>
      <p className="mb-6 max-w-4xl text-pretty text-center text-base text-gray-400">
        Build your foundational knowledge of artificial intelligence.{' '}
      </p>
    </>
  ),
  'Careers': (
    <>
      <h3
        id="careers-heading"
        className="mx-auto mb-4 text-center text-xl font-semibold text-white dark:text-white sm:text-2xl"
      >
        <span className="font-bold">Careers Stage</span> is located in Walker
        Crisler Building Floor 1
      </h3>
    </>
  ),
  'Breakout Sessions': (
    <>
      <h3
        id="breakout-sessions-heading"
        className="mx-auto mb-4 text-center text-xl font-semibold text-white dark:text-white sm:text-2xl"
      >
        <span className="font-bold">Breakout Sessions</span> is located on the
        2nd floor of Walker Crisler Building (WCB),{'\u00A0'}Room{'\u00A0'}255
      </h3>
      <p className="mb-6 max-w-4xl text-pretty text-center text-base text-gray-400">
        Focused discussions and interactive sessions on specialized topics. Join
        conversations with experts and peers.
      </p>
    </>
  ),
  'Map': (
    <>
      <h3
        id="map-heading"
        className="mx-auto mb-4 text-center text-xl font-normal text-white dark:text-white sm:text-2xl"
      >
        <span className="font-bold">IWD Innovation Summit Venue Guide</span>
      </h3>
      <p className="mb-6 max-w-4xl text-pretty text-center text-base text-gray-400">
        Use this guide to navigate the venue and find session locations.
      </p>
    </>
  ),
}

const SessionsSection = ({
  speakersData,
  year = new Date().getFullYear(),
  tracks = [],
  defaultExpanded = true,
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const [direction, setDirection] = useState(
    defaultExpanded === true ? DIRECTION.TOP : DIRECTION.BOTTOM
  )
  const navRef = useRef(null)
  const buttonRefs = useRef([])
  const tabpanelRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const { savedSessionIds } = useSchedule()

  const tabs = ['My Schedule', ...tracks]
  const currentSession = tabs[activeTab]

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
    setDirection(isExpanded ? DIRECTION.BOTTOM : DIRECTION.TOP)
  }

  let combinedSpeakerData = []

  speakersData.forEach((speaker) => {
    if (!speaker.session?.title) return
    let existingSession = combinedSpeakerData.find(
      (session) => session.sessionTitle === speaker.session.title
    )

    if (existingSession) {
      existingSession.speakers.push(speaker.name)
      existingSession.speakerAvatars.push(speaker.avatar)
      existingSession.id += `_${speaker.id}`
    } else {
      combinedSpeakerData.push({
        id: speaker.id,
        speakers: [speaker.name],
        speakerAvatars: [speaker.avatar],
        sessionTitle: speaker.session.title,
        sessionDesc: speaker.session.description ?? '',
        track: speaker.session.track,
        sessionTime: speaker.session.time ?? '',
        sessionRoom: speaker.session.room ?? '',
        sessionDuration: speaker.session.sessionDuration ?? 60,
      })
    }
  })

  // Get sessions for current track
  const currentTrackSessions =
    currentSession === 'My Schedule'
      ? combinedSpeakerData.filter((session) =>
          savedSessionIds.includes(session.id)
        )
      : combinedSpeakerData.filter(
          (session) => session.track === currentSession
        )

  // Get conference activities for current track (check-in, breakfast, etc.)
  const currentTrackActivities =
    currentSession === 'My Schedule'
      ? conferenceActivities.filter((activity) =>
          savedSessionIds.includes(activity.id)
        )
      : conferenceActivities.filter(
          (activity) => activity.track === currentSession
        )

  // Merge sessions and activities, sort by time
  const mergedTrackItems = [
    ...currentTrackSessions.map((s) => ({
      type: 'session',
      sortTime: normalizeSortTime(s.sessionTime),
      ...s,
    })),
    ...currentTrackActivities.map((a) => ({
      type: 'activity',
      sortTime: normalizeSortTime(a.time),
      ...a,
    })),
  ].sort((a, b) => (a.sortTime < b.sortTime ? -1 : 1))

  const hasContentForTrack =
    currentTrackSessions.length > 0 || currentTrackActivities.length > 0

  // Update gradients based on scroll position
  const updateScrollIndicators = useCallback(() => {
    const nav = navRef.current
    if (!nav) return
    const { scrollLeft, scrollWidth, clientWidth } = nav
    setCanScrollLeft(scrollLeft > 2)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2)
  }, [])

  // Scroll & resize listeners for gradient indicators
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    updateScrollIndicators()
    nav.addEventListener('scroll', updateScrollIndicators, { passive: true })
    const observer = new ResizeObserver(updateScrollIndicators)
    observer.observe(nav)
    return () => {
      nav.removeEventListener('scroll', updateScrollIndicators)
      observer.disconnect()
    }
  }, [updateScrollIndicators, isExpanded, tabs.length])

  const scrollTabIntoView = (button) => {
    if (!button || !navRef.current) return
    const nav = navRef.current
    const buttonRect = button.getBoundingClientRect()
    const navRect = nav.getBoundingClientRect()

    if (buttonRect.left < navRect.left) {
      nav.scrollTo({
        left: nav.scrollLeft + (buttonRect.left - navRect.left) - 16,
        behavior: 'smooth',
      })
    } else if (buttonRect.right > navRect.right) {
      nav.scrollTo({
        left: nav.scrollLeft + (buttonRect.right - navRect.right) + 16,
        behavior: 'smooth',
      })
    }
  }

  // Scroll focused tab into view when activeTab changes (click/Enter/Arrow)
  useEffect(() => {
    if (buttonRefs.current[activeTab]) {
      scrollTabIntoView(buttonRefs.current[activeTab])
    }
  }, [activeTab])

  const activateTab = (index, moveFocusToPanel = false) => {
    setActiveTab(index)
    if (moveFocusToPanel) {
      requestAnimationFrame(() => {
        tabpanelRef.current?.focus()
      })
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (event, index) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      const nextIndex =
        event.key === 'ArrowLeft'
          ? Math.max(0, index - 1)
          : Math.min(tabs.length - 1, index + 1)
      setActiveTab(nextIndex)
      buttonRefs.current[nextIndex]?.focus()
    } else if (event.key === 'Home') {
      event.preventDefault()
      setActiveTab(0)
      buttonRefs.current[0]?.focus()
    } else if (event.key === 'End') {
      event.preventDefault()
      const last = tabs.length - 1
      setActiveTab(last)
      buttonRefs.current[last]?.focus()
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      activateTab(index, true)
    }
  }

  const renderNoSessionsOrSpeakersMessage = () => (
    <div className="col-span-1 my-4 flex flex-col items-center justify-center space-y-8 text-center text-lg leading-relaxed">
      <p>
        We are currently looking for speakers and will update the list of
        sessions once we have more information. If you are interested in
        speaking, reach out to us.
      </p>
      <a
        href="#membership"
        aria-label="Contact us about speaking at IWD Innovation Summit 2026"
        className="flex items-center rounded-lg border border-iwd-gold-400/30 bg-iwd-gold-400/10 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-iwd-gold-300 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:border-iwd-gold-400/50 hover:bg-iwd-gold-400/20 hover:shadow-xl hover:shadow-iwd-gold-500/10 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
      >
        CONTACT US TO SPEAK
      </a>
    </div>
  )

  /*
   * Layout: collapsible schedule with track tabs and session cards.
   * Structure: header (collapse btn + title) → tablist → track description → tabpanel (Map/session cards)
   * Track descriptions appear below the tablist, above the session cards.
   * Session list: single column grid; max-w-6xl w-full for screens smaller than xl.
   */
  return (
    <section
      id="schedule"
      className="relative flex flex-col items-center justify-start bg-iwd-surface-raised dark:bg-iwd-black-950 p-4 pb-24 pt-16 sm:px-10 md:px-14 lg:px-16"
    >
      <SectionSkipLink href="#membership">
        Skip sessions navigation
      </SectionSkipLink>
      <div className="relative mx-auto w-full max-w-7xl justify-center pt-0">
        <button
          aria-label={
            isExpanded ? `Collapse ${year} Sessions` : `Expand ${year} Sessions`
          }
          onClick={toggleExpanded}
          className="absolute left-0 top-3 cursor-pointer items-center text-white dark:text-white transition-colors hover:text-gray-400 sm:top-4"
        >
          <IoChevronDown
            className={`size-6 shrink-0 text-iwd-gold-300 sm:size-7 md:size-8 lg:size-9 ${
              direction === DIRECTION.TOP && '-scale-y-100'
            } transition-transform duration-300 ease-out`}
          />
        </button>
        <div className="text-center">
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-iwd-gold-400/80">
            What&rsquo;s Happening
          </p>
          <h2 className="mb-5 font-heading text-3xl font-bold text-white dark:text-white sm:text-4xl lg:text-5xl">
            {year}{' '}
            <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
              Schedule
            </span>
          </h2>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />
        </div>
      </div>

      {/* Expandable content: tablist, track description, tabpanel */}
      <div
        className={`flex w-full flex-col overflow-hidden transition-all duration-500 ease-in-out md:overflow-x-visible ${
          isExpanded ? 'opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Horizontal scrollable track tabs */}
        <nav aria-label="Session track navigation" aria-hidden={!isExpanded}>
          <div className="relative mt-4">
            {/* Left fade gradient */}
            <div
              className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-8 rounded-l-md bg-gradient-to-r from-black/80 to-transparent transition-opacity duration-300 ${
                canScrollLeft ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden="true"
            />
            {/* Right fade gradient */}
            <div
              className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-8 rounded-r-md bg-gradient-to-l from-black/80 to-transparent transition-opacity duration-300 ${
                canScrollRight ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden="true"
            />
            <div
              ref={navRef}
              role="tablist"
              aria-orientation="horizontal"
              id="sessions-nav"
              className={`scrollbar-hide flex w-full flex-nowrap items-center justify-start gap-3 overflow-x-auto overflow-y-visible rounded-2xl border border-white/5 bg-iwd-surface-raised dark:bg-iwd-black-950/50 p-3 backdrop-blur-md md:justify-center md:px-6 ${
                isExpanded
                  ? 'max-h-none opacity-100'
                  : 'max-h-0 opacity-0 transition-all'
              }`}
            >
              {tabs.map((tab, index) => (
                <React.Fragment key={tab}>
                  {index !== 0 &&
                    ![activeTab, activeTab + 1].includes(index) && (
                      <div className="hidden h-5 w-0 shrink-0 bg-white/10 sm:w-px md:mx-2 md:block lg:mx-3" />
                    )}

                  <button
                    key={tab}
                    ref={(el) => {
                      buttonRefs.current[index] = el
                    }}
                    role="tab"
                    aria-selected={activeTab === index}
                    aria-controls="sessions-tabpanel"
                    id={`session-tab-${index}`}
                    tabIndex={isExpanded ? 0 : -1}
                    className={`relative shrink-0 whitespace-nowrap rounded-md p-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-black md:min-w-20 md:px-3 md:py-2 lg:min-w-36 lg:px-4 lg:text-sm ${
                      activeTab === index
                        ? 'border border-iwd-gold-400/40 bg-iwd-gold-400/15 text-iwd-gold-300 shadow-lg shadow-iwd-gold-500/10 after:absolute after:-bottom-3 after:left-1/2 after:block after:size-0 after:-translate-x-1/2 after:border-x-[10px] after:border-t-[10px] after:border-iwd-gold-400/40 after:border-x-transparent'
                        : 'border border-white/5 bg-white/[0.03] text-gray-400 hover:border-white/10 hover:bg-white/[0.06] hover:text-white dark:text-white'
                    }`}
                    onClick={() => activateTab(index, false)}
                    onFocus={(e) => scrollTabIntoView(e.currentTarget)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  >
                    {tab === 'My Schedule' ? (
                      <>
                        <svg
                          className="mr-1.5 inline size-3 lg:size-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                        </svg>
                        My Schedule
                      </>
                    ) : tab === 'Tech+Design' ? (
                      <>Tech+Design</>
                    ) : tab === 'Level Up' ? (
                      <>Level Up</>
                    ) : tab === 'Leadership' ? (
                      <>Leadership</>
                    ) : tab === 'Build with AI' ? (
                      <>Build with AI</>
                    ) : tab === 'Workshops' ? (
                      <>Workshops</>
                    ) : tab === 'AI Foundations' ? (
                      <>AI Foundations</>
                    ) : tab === 'Breakout Sessions' ? (
                      <>
                        <span className="inline max-xs:hidden">
                          Breakout Sessions
                        </span>
                        <span className="hidden max-xs:inline">Breakout</span>
                      </>
                    ) : (
                      tab
                    )}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* Scroll hint for mobile */}
          {(canScrollLeft || canScrollRight) && (
            <p
              className={`mt-2 flex items-center gap-1 text-sm text-gray-500 xl:hidden ${
                canScrollRight ? 'justify-end' : 'justify-start'
              }`}
              aria-hidden="true"
            >
              {!canScrollRight && (
                <IoChevronBack className="size-4 animate-pulse" />
              )}
              {canScrollRight
                ? 'Swipe for more tracks'
                : 'Swipe to explore earlier tracks'}
              {canScrollRight && (
                <IoChevronForward className="size-4 animate-pulse" />
              )}
            </p>
          )}
        </nav>

        {/* Track description: below tablist, above session cards */}
        {isExpanded && currentSession && trackDescriptions[currentSession] && (
          <div className="mx-auto mt-6 w-full max-w-6xl px-[2.5%] md:px-[5%]">
            {trackDescriptions[currentSession]}
          </div>
        )}

        {/* Split-Pane Layout: Sidebar (Saved) + Main (Track) */}
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-start">
          {/* Left Sidebar: My Schedule (Visible on Desktop when not already viewing My Schedule tab) */}
          {isExpanded &&
            currentSession !== 'My Schedule' &&
            currentSession !== 'Map' && (
              <aside className="hidden w-full shrink-0 flex-col gap-6 lg:flex lg:w-80">
                <div className="sticky top-32 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-xl">
                  <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                    <h4 className="font-heading text-lg font-black uppercase tracking-widest text-white dark:text-white">
                      My Schedule
                    </h4>
                    <span className="rounded-full bg-iwd-gold-400/20 px-2 py-0.5 text-[10px] font-bold text-iwd-gold-300">
                      {savedSessionIds.length}
                    </span>
                  </div>

                  {savedSessionIds.length > 0 ? (
                    <ul className="flex flex-col gap-4">
                      {combinedSpeakerData
                        .filter((s) => savedSessionIds.includes(s.id))
                        .sort((a, b) =>
                          normalizeSortTime(a.sessionTime) <
                          normalizeSortTime(b.sessionTime)
                            ? -1
                            : 1
                        )
                        .slice(0, 5) // Preview top 5
                        .map((s) => (
                          <li
                            key={s.id}
                            className="group relative flex flex-col gap-1 border-l-2 border-iwd-gold-400/30 pl-4 transition-all hover:border-iwd-gold-400"
                          >
                            <span className="text-[10px] font-black uppercase tracking-wider text-iwd-gold-400/60">
                              {s.sessionTime}
                            </span>
                            <span className="line-clamp-1 text-xs font-bold text-white dark:text-white transition-colors group-hover:text-iwd-gold-300">
                              {s.sessionTitle}
                            </span>
                          </li>
                        ))}
                      {savedSessionIds.length > 5 && (
                        <button
                          onClick={() => activateTab(0)}
                          className="mt-2 text-left text-[10px] font-black uppercase tracking-widest text-white dark:text-white/30 transition-colors hover:text-white dark:text-white"
                        >
                          + {savedSessionIds.length - 5} more in my schedule
                        </button>
                      )}
                    </ul>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center text-white dark:text-white/20">
                      <svg
                        className="mb-3 size-8 opacity-20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <p className="text-[10px] font-bold uppercase tracking-widest">
                        Empty
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => activateTab(0)}
                    className="mt-6 w-full rounded-lg border border-iwd-gold-400/20 bg-iwd-gold-400/5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-iwd-gold-400 transition-all hover:bg-iwd-gold-400 hover:text-iwd-black-950"
                  >
                    Manage Full Schedule
                  </button>
                </div>
              </aside>
            )}

          {/* Main Area: Current Tabpanel Content */}
          <div
            ref={tabpanelRef}
            id="sessions-tabpanel"
            role="tabpanel"
            aria-labelledby={`session-tab-${activeTab}`}
            aria-hidden={!isExpanded}
            tabIndex={isExpanded ? 0 : -1}
            className={`min-w-0 flex-1 ${
              isExpanded ? 'opacity-100' : 'max-h-0 opacity-0'
            } transition-all duration-500`}
          >
            {currentSession === 'Map' ? (
              <VenueMaps />
            ) : hasContentForTrack ? (
              <>
                {/* Session cards + activity cards: single column; sorted by time */}
                <ul className="grid w-full grid-cols-1 gap-8 py-7">
                  {mergedTrackItems.map((item) =>
                    item.type === 'session' ? (
                      <li key={item.id} className="w-full">
                        <SessionCard
                          sessionId={item.id}
                          speakers={item.speakers}
                          speakerAvatars={item.speakerAvatars}
                          sessionTitle={item.sessionTitle}
                          sessionDesc={item.sessionDesc}
                          sessionTime={item.sessionTime}
                          sessionRoom={item.sessionRoom}
                          sessionDuration={item.sessionDuration}
                        />
                      </li>
                    ) : (
                      <li key={item.id} className="w-full">
                        <ActivityCard
                          activityId={item.id}
                          title={item.title}
                          content={item.content ?? null}
                          cta={item.cta ?? null}
                          time={item.time}
                          timeEnd={item.timeEnd}
                          room={item.room}
                        />
                      </li>
                    )
                  )}
                </ul>
              </>
            ) : (
              renderNoSessionsOrSpeakersMessage()
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

SessionsSection.propTypes = {
  speakersData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      session: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        track: PropTypes.string,
        time: PropTypes.string,
        room: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
  year: PropTypes.number,
  tracks: PropTypes.arrayOf(PropTypes.string),
  defaultExpanded: PropTypes.bool,
}

export default SessionsSection
