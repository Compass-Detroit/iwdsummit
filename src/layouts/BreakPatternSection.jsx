import { useEffect, useState, useRef } from 'react'
import breakPatternImg from '@/assets/images/break_the_pattern.jpg'

export default function BreakPatternSection() {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const end = 200
          const duration = 2000
          const increment = end / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-iwd-surface-raised dark:bg-iwd-black-950 py-24 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-iwd-gold-400/20 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--iwd-accent-950)/0.1)] blur-[120px]" />

      <div className="container relative mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Image Side */}
          <div className="group w-full lg:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/5 shadow-2xl shadow-iwd-gold-950/20">
              <img
                src={breakPatternImg}
                alt="Break the Pattern - 2026 Summit Theme"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-iwd-black-950/80 via-transparent to-transparent opacity-60" />

              {/* Floating accent elements */}
              <div className="absolute inset-x-6 bottom-6">
                <div className="inline-block rounded-lg border border-iwd-gold-400/20 bg-iwd-gold-400/20 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-iwd-gold-200 backdrop-blur-md">
                  The 2026 Theme
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h2 className="mb-8 font-heading text-5xl font-black leading-[0.9] text-white dark:text-white sm:text-6xl lg:text-7xl">
              Break the <br />
              <span className="bg-gradient-to-r from-iwd-gold-200 via-iwd-gold-400 to-iwd-gold-200 bg-clip-text italic tracking-tight text-transparent">
                Pattern
              </span>
            </h2>

            <p className="mx-auto mb-10 max-w-xl font-body text-lg leading-relaxed text-gray-400 lg:mx-0">
              Innovation isn&apos;t just about technology—it&apos;s about
              rethinking the systems, biases, and habits that hold us back. This
              year, we redefine what&apos;s possible for women in tech.
            </p>

            <div
              className={`mx-auto mt-12 flex max-w-lg flex-col items-center justify-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-700 sm:flex-row lg:mx-0 lg:justify-start ${
                hasAnimated
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="isolate flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="size-14 overflow-hidden rounded-full border-2 border-iwd-black-900 bg-iwd-surface-raised dark:bg-iwd-black-800 shadow-xl ring-2 ring-iwd-gold-400/20 transition-transform hover:-translate-y-1"
                  >
                    <div className="size-full bg-gradient-to-br from-iwd-gold-300/40 via-iwd-gold-500/20 to-iwd-gold-300/40" />
                  </div>
                ))}
                <div className="relative z-10 flex size-14 items-center justify-center rounded-full border-2 border-iwd-black-900 bg-iwd-gold-400 text-xs font-black text-iwd-black-950 shadow-xl ring-2 ring-iwd-gold-400/50">
                  {count}+
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="mb-1 text-sm font-black uppercase tracking-widest text-white dark:text-white">
                  Join the movement
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-iwd-gold-400/70">
                  Innovators already registered
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-iwd-gold-400/20 to-transparent" />
    </section>
  )
}
