import { useEffect, useRef } from 'react'

import lcgrcMap from '@/assets/images/maps/lcgrcMapx800.webp'

function VenueMaps() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return undefined

    const handleKeyDown = (e) => {
      if (e.key === 'Home') {
        e.preventDefault()
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else if (e.key === 'End') {
        e.preventDefault()
        el.scrollTo({
          left: el.scrollWidth - el.clientWidth,
          behavior: 'smooth',
        })
      }
    }

    el.addEventListener('keydown', handleKeyDown)
    return () => el.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section className="w-full py-8" aria-labelledby="venue-maps-heading">
      <h2 id="venue-maps-heading" className="sr-only">
        Venue map
      </h2>
      <div className="mx-1 mb-1 rounded-xl border-4 border-iwd-gold-500 bg-iwd-gold-100">
        <div
          ref={scrollRef}
          className="scrollbar-visible overflow-x-auto overflow-y-hidden scroll-smooth rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-iwd-gold-100"
          tabIndex={0}
          role="region"
          aria-labelledby="venue-maps-heading"
        >
          <img
            src={lcgrcMap}
            alt=""
            className="min-w-max rounded-2xl object-left-top"
            loading="lazy"
          />
        </div>
      </div>
      <p className="py-2 text-center text-sm text-neutral-50">
        Use the scrollbar, or focus this area and use arrow keys, to view the
        full map »
      </p>
    </section>
  )
}

export default VenueMaps
