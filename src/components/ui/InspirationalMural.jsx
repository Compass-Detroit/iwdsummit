import { inspirationalQuotes } from '@/data/2026/inspirationalQuotes'
import { memo, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { FaPlus, FaChevronDown } from 'react-icons/fa6'

const MuralItem = memo(({ quote, name, title, image, isLarge }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-700 hover:scale-[1.02] hover:border-iwd-gold-400/30 hover:shadow-2xl hover:shadow-iwd-gold-900/40 ${
        isLarge ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {image ? (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={name}
            className="size-full object-cover opacity-40 transition-all duration-700 group-hover:scale-110 group-hover:opacity-70"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-iwd-black-950 via-iwd-black-950/40 to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-iwd-black-900 to-iwd-black-950 opacity-80" />
      )}

      {/* Decorative Shimmer Overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
        <div className="group-hover:animate-shimmer absolute -inset-full -translate-x-full rotate-12 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-10">
        <div className="absolute left-0 top-0 p-6 opacity-10 transition-opacity group-hover:opacity-30">
          <svg
            className="size-16 text-iwd-gold-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21C14.017 15.4772 18.4942 11 24.017 11V13C19.5987 13 16.017 16.5817 16.017 21H14.017ZM0.0170898 21L0.0170898 18C0.0170898 16.8954 0.912521 16 2.01709 16H5.01709C6.12166 16 7.01709 16.8954 7.01709 18V21C7.01709 22.1046 6.12166 23 5.01709 23H2.01709C0.912521 23 0.0170898 22.1046 0.0170898 21ZM0.0170898 21C0.0170898 15.4772 4.4943 11 10.0171 11V13C5.59882 13 2.01709 16.5817 2.01709 21H0.0170898Z" />
          </svg>
        </div>

        <blockquote className="relative mb-8">
          <p
            className={`font-body font-normal italic leading-relaxed text-white drop-shadow-md transition-all duration-500 group-hover:text-iwd-gold-50 ${
              isLarge
                ? 'text-2xl sm:text-3xl lg:text-4xl'
                : 'text-lg sm:text-xl'
            }`}
          >
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>

        <div className="flex flex-col gap-2 border-l-2 border-iwd-gold-400/40 pl-6 transition-colors group-hover:border-iwd-gold-400">
          <cite className="font-heading text-xl font-black uppercase not-italic tracking-widest text-iwd-gold-300 transition-colors group-hover:text-white">
            {name}
          </cite>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-900 dark:text-white/40 group-hover:text-iwd-gold-400/60">
            {title}
          </span>
        </div>
      </div>
    </div>
  )
})

MuralItem.displayName = 'MuralItem'
MuralItem.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  index: PropTypes.number.isRequired,
  isLarge: PropTypes.bool,
}

export default function InspirationalMural() {
  const [showAll, setShowAll] = useState(false)

  const shuffledQuotes = useMemo(() => {
    const quotes = [...inspirationalQuotes]
    // Fisher-Yates shuffle
    for (let i = quotes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[quotes[i], quotes[j]] = [quotes[j], quotes[i]]
    }

    // Prevent same person adjacency
    for (let i = 0; i < quotes.length - 1; i++) {
      if (quotes[i].name === quotes[i + 1].name) {
        // Swap i+1 with someone else (e.g. i+2 or someone at the end)
        const swapIdx = (i + 2) % quotes.length
        const temp = quotes[i + 1]
        quotes[i + 1] = quotes[swapIdx]
        quotes[swapIdx] = temp
      }
    }

    // Pre-calculate large items for masonry feel
    return quotes.map((q, idx) => ({
      ...q,
      isLarge: idx % 6 === 0,
    }))
  }, [])

  const displayedQuotes = showAll ? shuffledQuotes : shuffledQuotes.slice(0, 8)

  return (
    <section
      id="inspirational-mural"
      className="relative overflow-hidden bg-iwd-surface-raised dark:bg-iwd-black-950 py-32 sm:py-48"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-iwd-gold-400/50" />
            <span className="font-body text-xs font-black uppercase tracking-[0.6em] text-iwd-gold-400/90">
              The Voices of Change
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-iwd-gold-400/50" />
          </div>
          <h2 className="font-heading text-5xl font-black text-white sm:text-7xl lg:text-8xl">
            Inspirational{' '}
            <span className="bg-gradient-to-r from-iwd-gold-200 via-iwd-gold-400 to-iwd-gold-200 bg-clip-text text-transparent">
              Mural
            </span>
          </h2>
          <p className="mt-10 max-w-3xl font-body text-xl font-light leading-relaxed text-gray-900 dark:text-white/60">
            A celebration of the pioneers, leaders, and visionaries who break
            the pattern and redefine what is possible in tech and beyond.
          </p>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedQuotes.map((q, idx) => (
            <MuralItem key={`${q.name}-${idx}`} {...q} index={idx} />
          ))}
        </div>

        {!showAll && shuffledQuotes.length > 8 && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="group relative flex items-center gap-4 rounded-full border border-iwd-gold-400/30 bg-iwd-gold-400/5 px-10 py-5 font-heading text-lg font-black uppercase tracking-[0.2em] text-iwd-gold-400 transition-all hover:bg-iwd-gold-400 hover:text-iwd-black-950 hover:shadow-[0_0_30px_rgba(255,208,174,0.3)]"
            >
              <FaPlus className="size-5 transition-transform group-hover:rotate-180" />
              View All Voices
            </button>
          </div>
        )}

        {showAll && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="group flex items-center gap-3 font-heading text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white/30 transition-colors hover:text-gray-900"
            >
              <FaChevronDown className="size-4 rotate-180" />
              Show Less
            </button>
          </div>
        )}
      </div>

      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-1/4 top-1/4 size-[1000px] rounded-full bg-[rgb(var(--iwd-accent-900)/0.05)] blur-[150px]" />
        <div className="absolute -left-1/4 bottom-1/4 size-[1000px] rounded-full bg-iwd-gold-900/5 blur-[150px]" />
      </div>
    </section>
  )
}
