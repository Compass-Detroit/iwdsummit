import { useCallback, useEffect, useRef, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import CompassDetroitLogo from './ui/CompassDetroitLogo'
import ThemeSwitcher from './ui/ThemeSwitcher'
import FontSwitcher from './ui/FontSwitcher'
import { sections } from '@/data/2026/navigation'

// Section links have id (anchor); route links have to (full page)
const navSections = sections.filter((s) => s.id)

function Navbar() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [activeLink, setActiveLink] = useState('landing')
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isManualNavigation, setIsManualNavigation] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const navRef = useRef(null)
  const mobileButtonRef = useRef(null)
  const headerBarRef = useRef(null)

  // Sync header height to CSS custom property for .nav-menu-expanded max-height
  useEffect(() => {
    const el = headerBarRef.current
    if (!el) return

    const setHeaderHeight = () => {
      document.documentElement.style.setProperty(
        '--header-height',
        `${el.offsetHeight}px`
      )
    }

    setHeaderHeight()
    const observer = new ResizeObserver(setHeaderHeight)
    observer.observe(el)
    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty('--header-height')
    }
  }, [])

  // Helper function to get accurate navbar height
  const getNavbarHeight = useCallback(() => {
    const navbar = document.querySelector('nav')
    return navbar ? navbar.offsetHeight : 96
  }, [])

  // Helper function to calculate scroll position
  const calculateScrollPosition = useCallback(
    (target) => {
      const navbarHeight = getNavbarHeight()
      const targetRect = target.getBoundingClientRect()
      return targetRect.top + window.pageYOffset - navbarHeight
    },
    [getNavbarHeight]
  )

  // Helper function to reset navigation state after delay
  const resetNavigationState = useCallback((delay) => {
    setTimeout(() => {
      setIsManualNavigation(false)
      setIsNavigating(false)
    }, delay)
  }, [])

  // Helper function to perform scroll and reset state
  const performScroll = useCallback(
    (target, resetDelay) => {
      const scrollPosition = calculateScrollPosition(target)
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
      resetNavigationState(resetDelay)
    },
    [calculateScrollPosition, resetNavigationState]
  )

  // Helper function to close mobile nav
  const closeMobileNav = () => {
    if (isNavVisible) {
      setIsNavVisible(false)
    }
  }

  // Helper function to navigate to home
  const handleHomeNavigation = () => {
    // Close mobile nav if open
    if (isNavVisible) {
      setIsNavVisible(false)
    }

    // Set active link to landing
    setActiveLink('landing')

    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Smooth scroll to section when navigating to /#section-id from another page
  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return

    const sectionId = location.hash.slice(1).toLowerCase()
    const validSectionIds = sections.map((s) => s.id).filter(Boolean)
    if (!sectionId || !validSectionIds.includes(sectionId)) return

    const scrollToSection = (target) => {
      if (!target) return
      setActiveLink(sectionId)
      setIsManualNavigation(true)
      performScroll(target, 500)
    }

    const tryScroll = (retriesLeft = 10) => {
      const target = document.querySelector(`#${sectionId}`)
      if (target) {
        scrollToSection(target)
        return
      }
      if (retriesLeft > 0) {
        requestAnimationFrame(() => tryScroll(retriesLeft - 1))
      }
    }

    // Wait for home page to mount and render the section
    const id = requestAnimationFrame(() => {
      tryScroll()
    })
    return () => cancelAnimationFrame(id)
  }, [location.pathname, location.hash, performScroll])

  useEffect(() => {
    // Function to set the active link based on scroll position
    // Algorithm Explanation:
    // Section will be set to active if it touches or pass the navbar
    const handleScroll = () => {
      // Skip scroll detection during manual navigation
      if (isManualNavigation) return

      // Use dynamic navbar height for accurate scroll detection
      const navbarHeight = getNavbarHeight()

      // Sections used for scroll detection (homepage anchors only)
      const scrollSections = [
        { id: 'landing' },
        ...sections.filter((s) => s.id),
      ]
      // Set Default section to landing (hero at top)
      let currentSection = 'landing'

      // This will track the closest distance to navbar
      let minDistance = Infinity

      scrollSections.forEach((section, index) => {
        const target = document.querySelector(`#${section.id}`)
        if (!target) return

        const rect = target.getBoundingClientRect()

        // Check if section is in view (top is above navbar but bottom is below navbar)
        const sectionTop = rect.top
        const sectionBottom = rect.bottom
        const isInView =
          sectionTop <= navbarHeight && sectionBottom > navbarHeight

        // Check if section has passed the navbar by a reasonable amount
        const hasPassedNavbar = sectionTop <= navbarHeight - 50 // 50px buffer

        if (isInView) {
          // Section is currently in view
          currentSection = section.id
        } else if (hasPassedNavbar) {
          // Section has passed the navbar, use it as fallback
          const distance = Math.abs(sectionTop - navbarHeight)
          if (distance < minDistance) {
            currentSection = section.id
            minDistance = distance
          }
        }

        // Special case: last section when scrolled to bottom
        if (index === scrollSections.length - 1) {
          const scrolledToBottom =
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 10 // near bottom

          if (scrolledToBottom) {
            currentSection = section.id
          }
        }
      })

      setActiveLink(currentSection)
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isManualNavigation, activeLink, getNavbarHeight])

  const handleNavigation = (event, sectionId) => {
    event.preventDefault()

    // Prevent multiple rapid clicks
    if (isNavigating) {
      return
    }

    const target = document.querySelector(`#${sectionId}`)

    if (target) {
      // Check if we're already at this section (within a reasonable distance)
      const navbarHeight = getNavbarHeight()
      const targetRect = target.getBoundingClientRect()
      const distanceFromTarget = Math.abs(targetRect.top - navbarHeight)

      // If we're already close to the target (within 100px), just update active link and return
      if (distanceFromTarget < 100 && !isNavVisible) {
        setActiveLink(sectionId)
        return
      }

      // Set navigation state
      setIsNavigating(true)
      setActiveLink(sectionId)
      setIsManualNavigation(true)

      // Check if this is a mobile navigation (mobile nav is visible)
      const isMobileNavigation = isNavVisible

      if (isMobileNavigation) {
        // Mobile navigation logic
        closeMobileNav()

        // Wait for mobile nav animation to complete before scrolling
        setTimeout(() => {
          performScroll(target, 1000) // 1000ms reset delay for mobile
        }, 350) // Wait for mobile nav animation
      } else {
        // Desktop navigation logic - immediate scroll
        performScroll(target, 500) // 500ms reset delay for desktop
      }
    }
  }

  useEffect(() => {
    // Function to close the nav when the user clicks outside of it
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavVisible(false)
      }
    }

    // Attach the click event listener
    document.addEventListener('click', handleClickOutside)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  // Track scroll progress for the bottom indicator bar
  useEffect(() => {
    const trackProgress = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)
    }
    window.addEventListener('scroll', trackProgress, { passive: true })
    return () => window.removeEventListener('scroll', trackProgress)
  }, [])

  // Desktop Navigation List (section links + route links like Previous Events)
  const desktopNavList = (
    <ul
      role="menubar"
      className="z-50 flex flex-row flex-nowrap items-baseline justify-end gap-x-4 px-4 py-2"
    >
      {sections.map((section) => {
        const isRouteLink = !!section.to
        const linkKey = section.id || section.to
        const isActive = isRouteLink
          ? location.pathname === section.to
          : activeLink === section.id

        if (isRouteLink) {
          return (
            <li key={linkKey} role="none" className="text-center">
              <Link
                to={section.to}
                role="menuitem"
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-2 py-4 pb-2 text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                  isActive
                    ? 'text-white dark:text-white after:w-full after:opacity-100'
                    : 'text-gray-300 after:w-0 after:opacity-0 hover:text-white dark:text-white'
                } after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-iwd-gold-400 after:to-transparent after:transition-all after:duration-300 after:ease-in-out`}
              >
                {section.text}
              </Link>
            </li>
          )
        }

        return (
          <li key={linkKey} role="none" className="text-center">
            <Link
              to={isHomePage ? `#${section.id}` : `/#${section.id}`}
              onClick={
                isHomePage
                  ? (event) => handleNavigation(event, section.id)
                  : undefined
              }
              role="menuitem"
              aria-current={isActive ? 'page' : undefined}
              className={`relative px-2 py-4 pb-2 text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                isActive
                  ? 'text-white dark:text-white after:w-full after:opacity-100'
                  : 'text-gray-300 after:w-0 after:opacity-0 hover:text-white dark:text-white'
              } after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-iwd-gold-400 after:to-transparent after:transition-all after:duration-300 after:ease-in-out`}
            >
              {section.text}
            </Link>
          </li>
        )
      })}
    </ul>
  )

  // Mobile Navigation List (section links + route links like Previous Events)
  const mobileNavList = (
    <ul className="flex flex-col space-y-2 p-4 text-white dark:text-white">
      {sections.map((section) => {
        const isRouteLink = !!section.to
        const linkKey = section.id || section.to
        const isActive = isRouteLink
          ? location.pathname === section.to
          : activeLink === section.id

        if (isRouteLink) {
          return (
            <li key={linkKey}>
              <Link
                to={section.to}
                aria-current={isActive ? 'page' : undefined}
                className={`block rounded-lg px-4 py-3 text-center transition-colors hover:bg-iwd-gold-400/10 ${
                  isActive
                    ? 'bg-iwd-gold-400/15 font-semibold text-iwd-gold-300'
                    : 'text-gray-200'
                }`}
                onClick={closeMobileNav}
              >
                {section.text}
              </Link>
            </li>
          )
        }

        return (
          <li key={linkKey}>
            <Link
              to={isHomePage ? `#${section.id}` : `/#${section.id}`}
              onClick={
                isHomePage
                  ? (event) => handleNavigation(event, section.id)
                  : undefined
              }
              aria-current={isActive ? 'page' : undefined}
              className={`block rounded-lg px-4 py-3 text-center transition-colors hover:bg-iwd-gold-400/10 ${
                isActive
                  ? 'bg-iwd-gold-400/15 font-semibold text-iwd-gold-300'
                  : 'text-gray-200'
              }`}
            >
              {section.text}
            </Link>
          </li>
        )
      })}
    </ul>
  )

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className={`site-header fixed left-0 top-0 z-30 w-screen transition-all duration-500 ${
        activeLink === 'landing' && isHomePage
          ? 'bg-iwd-surface-raised dark:bg-iwd-black-950/80 text-white dark:text-white backdrop-blur-xl'
          : 'bg-iwd-surface-raised dark:bg-iwd-black-950/95 text-gray-100 dark:text-gray-100 shadow-lg shadow-black/20 backdrop-blur-xl'
      }`}
    >
      {/* Screen Reader Announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {activeLink &&
          `Currently viewing ${
            activeLink === 'landing'
              ? 'hero'
              : navSections.find((s) => s.id === activeLink)?.text ??
                sections.find((s) => s.to === location.pathname)?.text ??
                'page'
          } section`}
      </div>
      <div
        ref={headerBarRef}
        className="grid w-full min-w-0 max-w-full grid-cols-[1fr_auto] items-center gap-2 p-2 sm:p-4"
        style={{ width: '100%', maxWidth: '100%' }}
      >
        <Link
          to="/"
          className="min-w-0 transition-opacity hover:opacity-80"
          onClick={handleHomeNavigation}
          aria-label="Go to home page"
        >
          <CompassDetroitLogo textColor="#FFFFFF" className="h-12 sm:h-16" />
        </Link>

        <div className="flex items-center gap-2">
          {/* Desktop Navigation */}
          <div className="hidden min-[1500px]:block">{desktopNavList}</div>

          {/* Theme Switcher */}
          <FontSwitcher />
          <ThemeSwitcher />

          {/* Mobile NavBar Hamburger Button */}
          <button
            ref={mobileButtonRef}
            id="mobile-menu-button"
            aria-label={isNavVisible ? 'Close Main Menu' : 'Open Main Menu'}
            aria-expanded={isNavVisible}
            aria-controls="mobile-navigation"
            className={`mr-2 touch-manipulation rounded border-2 p-2 transition-colors sm:px-4 max-[1499px]:block min-[1500px]:hidden ${
              activeLink === 'landing' && isHomePage
                ? 'border-iwd-gold-400/40 text-white dark:text-white hover:bg-iwd-gold-400/10 active:bg-iwd-gold-400/20'
                : 'border-gray-600 text-gray-100 dark:text-gray-100 hover:bg-gray-700 active:bg-gray-600'
            }`}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsNavVisible((prev) => !prev)
            }}
            onTouchStart={(e) => {
              e.preventDefault()
            }}
            onTouchEnd={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsNavVisible((prev) => !prev)
            }}
            style={{
              touchAction: 'manipulation',
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none',
              minHeight: '44px',
              minWidth: '44px',
            }}
          >
            {isNavVisible ? (
              <FaXmark className="size-6" />
            ) : (
              <FaBars className="size-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="w-full max-w-full overflow-hidden min-[1500px]:hidden">
        {isNavVisible && (
          <div
            id="mobile-navigation"
            aria-labelledby="mobile-menu-button"
            className={`nav-menu-expanded block w-full overflow-hidden shadow-lg ${
              activeLink === 'landing' && isHomePage
                ? 'bg-iwd-surface-raised dark:bg-iwd-black-950/95 backdrop-blur-xl'
                : 'bg-iwd-surface-raised dark:bg-iwd-black-950/95 text-white dark:text-white backdrop-blur-xl'
            }`}
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            {mobileNavList}
          </div>
        )}
      </div>

      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-px w-full" aria-hidden="true">
        <div
          className="h-full transition-[width] duration-100 ease-linear"
          style={{
            width: `${scrollProgress * 100}%`,
            background: `linear-gradient(90deg, rgb(var(--iwd-accent-500)), rgb(var(--iwd-accent-400)))`,
            boxShadow: '0 0 8px rgb(var(--iwd-accent-500) / 0.4)',
          }}
        />
      </div>
    </nav>
  )
}

export default Navbar
