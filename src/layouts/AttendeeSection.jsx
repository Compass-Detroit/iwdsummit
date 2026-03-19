import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { FaPause, FaPlay } from 'react-icons/fa6'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

function AttendeeSection() {
  const [imagePaths, setImagePaths] = useState([])
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlay = () => setIsPlaying((prev) => !prev)

  useEffect(() => {
    const logos = import.meta.glob('@/data/2026/assets/attendees/*.webp', {
      eager: true,
      import: 'default',
    })

    const imgs = Object.entries(logos).map(([path, url]) => ({
      src: url,
      name: path
        .split('/')
        .pop()
        .split('.')[0]
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    }))

    setImagePaths(imgs)
  }, [])

  const midpoint = Math.ceil(imagePaths.length / 2)
  const row1 = imagePaths.slice(0, midpoint)
  const row2 = imagePaths.slice(midpoint)

  return (
    <section
      id="attendees"
      className="relative overflow-hidden bg-iwd-black-950 py-24 sm:py-32"
    >
      <SectionSkipLink href="#location">Skip attendees section</SectionSkipLink>

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-1/4 top-1/2 size-[500px] -translate-y-1/2 rounded-full bg-iwd-gold-400/[0.03] blur-[120px]" />
        <div className="absolute -right-1/4 top-1/3 size-[400px] rounded-full bg-white/[0.02] blur-[100px]" />
      </div>

      {/* Section Header */}
      <div className="relative mx-auto mb-16 max-w-4xl px-6 text-center sm:mb-20">
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-iwd-gold-400/80">
          Our Community
        </p>

        <h2 className="mb-5 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Companies That{' '}
          <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
            Show Up
          </span>
        </h2>

        <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-iwd-gold-400/50 to-transparent sm:w-32" />

        <p className="mx-auto max-w-2xl font-body text-base font-light leading-relaxed text-gray-400">
          These organizations send their people to learn, connect, and grow with
          us. That&rsquo;s not just attendance&nbsp;&mdash; that&rsquo;s belief.
        </p>

        {imagePaths.length > 0 && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm">
            <span className="font-heading text-lg font-bold text-iwd-gold-300">
              {imagePaths.length}+
            </span>
            <span className="font-body text-xs uppercase tracking-widest text-gray-400">
              Organizations Represented
            </span>
          </div>
        )}
      </div>

      {/* Play / Pause */}
      <button
        onClick={togglePlay}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? 'Pause logo scroll' : 'Play logo scroll'}
        className="absolute right-4 top-6 z-10 flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 backdrop-blur-md transition-all duration-300 hover:border-iwd-gold-400/30 hover:text-iwd-gold-300 sm:right-8 sm:top-8"
      >
        {isPlaying ? (
          <FaPause className="size-3" />
        ) : (
          <FaPlay className="ml-0.5 size-3" />
        )}
      </button>

      {/* Row 1 — left to right */}
      <div className="relative mb-4 sm:mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-iwd-black-950 to-transparent sm:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-iwd-black-950 to-transparent sm:w-36" />

        <Marquee speed={40} pauseOnHover play={isPlaying} gradient={false}>
          {row1.map((img, i) => (
            <div
              key={i}
              className="group relative mx-5 flex items-center justify-center overflow-hidden rounded-2xl border border-white/[0.04] bg-white/[0.02] px-6 py-5 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.05] sm:mx-8 sm:px-10 sm:py-6"
            >
              <img
                src={img.src}
                alt={img.name}
                loading="lazy"
                className="logo-halo h-20 max-w-[180px] object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] sm:h-28 sm:max-w-[260px]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-iwd-black-950/80 via-iwd-black-950/40 to-transparent px-3 pb-3 pt-8 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="font-body text-xs font-medium tracking-wide text-gray-200">
                  {img.name}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Row 2 — right to left */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-iwd-black-950 to-transparent sm:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-iwd-black-950 to-transparent sm:w-36" />

        <Marquee
          speed={35}
          pauseOnHover
          play={isPlaying}
          gradient={false}
          direction="right"
        >
          {row2.map((img, i) => (
            <div
              key={i}
              className="group relative mx-5 flex items-center justify-center overflow-hidden rounded-2xl border border-white/[0.04] bg-white/[0.02] px-6 py-5 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.05] sm:mx-8 sm:px-10 sm:py-6"
            >
              <img
                src={img.src}
                alt={img.name}
                loading="lazy"
                className="logo-halo h-20 max-w-[180px] object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] sm:h-28 sm:max-w-[260px]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-iwd-black-950/80 via-iwd-black-950/40 to-transparent px-3 pb-3 pt-8 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="font-body text-xs font-medium tracking-wide text-gray-200">
                  {img.name}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default AttendeeSection
