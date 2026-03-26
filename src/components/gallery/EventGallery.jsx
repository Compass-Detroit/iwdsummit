import { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * EventGallery — A premium, reusable photo gallery component
 * for past events. Supports lightbox, lazy loading, and masonry-style layout.
 *
 * Usage:
 *   <EventGallery
 *     eventName="Michigan DevFest 2025"
 *     images={['/gallery/devfest-2025/img1.jpg', ...]}
 *   />
 */
const EventGallery = ({ eventName = 'Event', images = [], onClose }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [loadedImages, setLoadedImages] = useState(new Set())
  const [isEntering, setIsEntering] = useState(true)

  useEffect(() => {
    requestAnimationFrame(() => setIsEntering(false))
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight')
        setLightboxIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft')
        setLightboxIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, images.length])

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  const handleImageLoad = useCallback((idx) => {
    setLoadedImages((prev) => new Set(prev).add(idx))
  }, [])

  if (!images.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <svg
          className="mb-4 size-12 text-white/10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-sm font-bold uppercase tracking-widest text-white/20">
          Gallery coming soon
        </p>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Gallery header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
            {eventName}
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-widest text-iwd-gold-400/60">
            {images.length} photos
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 p-2 text-white/40 transition-all hover:border-white/20 hover:text-white"
            aria-label="Close gallery"
          >
            <svg
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Masonry-style grid */}
      <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
        {images.map((src, idx) => (
          <button
            key={src}
            onClick={() => setLightboxIndex(idx)}
            className={`group relative mb-3 block w-full overflow-hidden rounded-xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-iwd-gold-400/50 ${
              isEntering
                ? 'translate-y-4 opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
            style={{
              transitionDelay: `${Math.min(idx * 50, 500)}ms`,
            }}
            aria-label={`View photo ${idx + 1} of ${images.length}`}
          >
            <div className="relative aspect-auto">
              {/* Placeholder shimmer */}
              {!loadedImages.has(idx) && (
                <div className="absolute inset-0 animate-pulse rounded-xl bg-white/5" />
              )}
              <img
                src={src}
                alt={`${eventName} - ${idx + 1}`}
                loading="lazy"
                onLoad={() => handleImageLoad(idx)}
                className={`w-full rounded-xl object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110 ${
                  loadedImages.has(idx) ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-2 right-2 rounded-md bg-black/50 p-1.5 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <svg
                  className="size-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl"
          onClick={() => setLightboxIndex(null)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setLightboxIndex(null)
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Photo ${lightboxIndex + 1} of ${images.length}`}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white/60 transition-all hover:bg-white/20 hover:text-white"
            aria-label="Close lightbox"
          >
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute left-4 top-4 z-10 rounded-full bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-white/60 backdrop-blur-sm">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex(
                (lightboxIndex - 1 + images.length) % images.length
              )
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white/60 transition-all hover:bg-white/20 hover:text-white"
            aria-label="Previous photo"
          >
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image Container with click propagation stopper */}
          <div
            className="flex max-h-[85vh] max-w-[90vw] items-center justify-center object-contain"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="presentation"
          >
            <img
              src={images[lightboxIndex]}
              alt={`${eventName} - ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex((lightboxIndex + 1) % images.length)
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white/60 transition-all hover:bg-white/20 hover:text-white"
            aria-label="Next photo"
          >
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

EventGallery.propTypes = {
  eventName: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  onClose: PropTypes.func,
}

export default EventGallery
