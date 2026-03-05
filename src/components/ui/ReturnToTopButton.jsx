import { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa6'

const CIRCLE_RADIUS = 20
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS

const ReturnToTopButton = () => {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0

    setScrollProgress(progress)
    setIsVisible(scrollTop > 300)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    const scrollDuration = 1200
    const startTime = Date.now()
    const startPosition = window.scrollY

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

    const animateScroll = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / scrollDuration, 1)
      window.scrollTo(0, startPosition * (1 - easeInOutCubic(progress)))
      if (progress < 1) requestAnimationFrame(animateScroll)
    }

    requestAnimationFrame(animateScroll)
  }

  const strokeDashoffset = CIRCUMFERENCE * (1 - scrollProgress)

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-iwd-gold-500 focus:ring-offset-2 active:scale-95 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label={`Return to top — ${Math.round(
        scrollProgress * 100
      )}% scrolled`}
      title="Return to top of page"
    >
      {/* SVG progress ring */}
      <svg
        className="absolute inset-0 -rotate-90"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        {/* Track */}
        <circle
          cx="24"
          cy="24"
          r={CIRCLE_RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-gray-200"
        />
        {/* Progress */}
        <circle
          cx="24"
          cy="24"
          r={CIRCLE_RADIUS}
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            stroke: 'rgb(var(--iwd-accent-500))',
            strokeDasharray: CIRCUMFERENCE,
            strokeDashoffset,
            transition: 'stroke-dashoffset 100ms linear',
          }}
        />
      </svg>
      <FaArrowUp
        className="relative z-10 size-4 text-gray-700"
        aria-hidden="true"
      />
    </button>
  )
}

export default ReturnToTopButton
