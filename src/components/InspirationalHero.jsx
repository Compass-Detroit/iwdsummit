import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { inspirationalQuotes } from '@/data/2026/inspirationalQuotes'
import useTheme from '@/hooks/useTheme'
import { THEMES } from '@/constants/ui'

/**
 * Cinematic color palettes per woman — 5 colors each:
 * [primary, accent, deep, glow, highlight]
 * Designed for dramatic multi-layer gradient murals.
 */
const muralPalettes = {
  // Tech & Science pioneers
  'Margaret Hamilton': ['#1B3A5C', '#4682B4', '#0A1628', '#60A5FA', '#BFDBFE'],
  'Grace Hopper': ['#1C2951', '#4169E1', '#080D22', '#818CF8', '#C7D2FE'],
  'Ada Lovelace': ['#4A2C5E', '#8B5FBF', '#160E1E', '#A78BFA', '#DDD6FE'],
  'Katherine Johnson': ['#1E3A5F', '#2980B9', '#0B1929', '#38BDF8', '#BAE6FD'],
  'Megan Smith': ['#1B4D3E', '#2E8B57', '#071F16', '#34D399', '#A7F3D0'],
  'Mae Jemison': ['#1A1A3E', '#4B0082', '#0A0A1E', '#818CF8', '#C7D2FE'],
  'Radia Perlman': ['#2C3E50', '#27AE60', '#0E1620', '#34D399', '#A7F3D0'],
  'Fei-Fei Li': ['#2D1B4E', '#7C3AED', '#110A1F', '#A78BFA', '#DDD6FE'],
  'Reshma Saujani': ['#B91C1C', '#EF4444', '#2A0808', '#F87171', '#FECACA'],
  // Leaders & culture
  'Rosa Parks': ['#8B2252', '#C41E3A', '#1A0D17', '#FF4D6A', '#F5C6D0'],
  'Arianna Huffington': ['#1B4D3E', '#2E8B57', '#061A12', '#4ADE80', '#A7F3D0'],
  'Oprah Winfrey': ['#B5651D', '#DAA520', '#1C0E02', '#FCD34D', '#FEF3C7'],
  'Malala Yousafzai': ['#E8A317', '#C5B358', '#1A1207', '#FBBF24', '#FEF9C3'],
  'Dolly Parton': ['#E75480', '#FF69B4', '#2A0014', '#F472B6', '#FBCFE8'],
  'Maya Angelou': ['#7B3F00', '#D4A574', '#0D0500', '#F59E0B', '#FDE68A'],
  'Michelle Obama': ['#2C3E50', '#5D6D7E', '#0A1015', '#94A3B8', '#CBD5E1'],
  'Estée Lauder': ['#C9A961', '#E8D5B7', '#2E200F', '#FDE68A', '#FFFBEB'],
  'Ruth Bader Ginsburg': [
    '#1C1C3C',
    '#3D3D6B',
    '#08081A',
    '#818CF8',
    '#C7D2FE',
  ],
  'Eleanor Roosevelt': ['#2F4F4F', '#5F9EA0', '#0D1A1A', '#67E8F9', '#CFFAFE'],
  'Shirley Chisholm': ['#8B0000', '#CD5C5C', '#1A0000', '#F87171', '#FECACA'],
  'Harriet Tubman': ['#3C1414', '#704214', '#0D0505', '#B45309', '#FDE68A'],
  'Beyoncé': ['#DAA520', '#FFD700', '#1A1200', '#FBBF24', '#FEF3C7'],
  'Melinda French Gates': [
    '#1E6E50',
    '#3CB371',
    '#071F16',
    '#34D399',
    '#A7F3D0',
  ],
  'Sheryl Sandberg': ['#3B5998', '#6B8AC4', '#0E1628', '#60A5FA', '#BFDBFE'],
  'Gwynne Shotwell': ['#2C3539', '#657383', '#0A0D0F', '#94A3B8', '#E2E8F0'],
  'Amelia Earhart': ['#B87333', '#D4A76A', '#2A1808', '#F59E0B', '#FDE68A'],
}

const defaultPalette = ['#1d4ed8', '#60a5fa', '#0f172a', '#818CF8', '#BFDBFE']
const DURATION = 10000 // ms per quote
const TRANSITION = 1000 // ms crossfade
const RING_R = 18
const RING_C = 2 * Math.PI * RING_R

function getInitials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
}

function extractWords(text, count = 18) {
  const stop = new Set([
    'that',
    'this',
    'with',
    'from',
    'have',
    'will',
    'been',
    'were',
    'they',
    'them',
    'than',
    'what',
    'when',
    'your',
    'about',
    'would',
    'there',
    'their',
    'which',
    'could',
    'other',
    'into',
    'just',
    'also',
    'some',
    'make',
    'like',
    'over',
    'such',
    'most',
    'only',
    'very',
    'being',
    'those',
    'after',
    'does',
    'going',
    'always',
  ])
  const words = text
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter((w) => w.length >= 4 && !stop.has(w.toLowerCase()))
  const unique = [...new Set(words.map((w) => w.toLowerCase()))]
  for (let i = unique.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[unique[i], unique[j]] = [unique[j], unique[i]]
  }
  return unique.slice(0, count)
}

function generateParticlePositions(count) {
  const positions = []
  for (let i = 0; i < count; i++) {
    const tier = i < 3 ? 'hero' : i < 8 ? 'medium' : 'small'
    const sizes = { hero: [3.5, 2.5], medium: [2.0, 1.2], small: [1.1, 0.6] }
    const [max, min] = sizes[tier]
    positions.push({
      left: `${5 + Math.random() * 90}%`,
      top: `${5 + Math.random() * 90}%`,
      fontSize: `${min + Math.random() * (max - min)}rem`,
      animDelay: `${Math.random() * 8}s`,
      animDuration: `${10 + Math.random() * 14}s`,
      rotation: `${-20 + Math.random() * 40}deg`,
      tier,
    })
  }
  return positions
}

/** Shuffle array using Fisher-Yates algorithm */
function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function InspirationalHero() {
  const { theme } = useTheme()
  const [quotes] = useState(() => shuffleArray(inspirationalQuotes))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const startRef = useRef(Date.now())
  const rafRef = useRef(null)

  const total = quotes.length
  const quote = quotes[currentIndex]
  // Per-person palette for text accents
  const personPalette = muralPalettes[quote.name] || defaultPalette
  // Theme palette for background layers
  const themeObj = THEMES.find((t) => t.id === theme) || THEMES[0]
  const bg = themeObj.palette
  // Combined: background from theme, text accents from person
  const palette = [bg[0], bg[1], bg[2], personPalette[3], personPalette[4]]
  const words = useMemo(() => extractWords(quote.quote), [quote.quote])
  const positions = useMemo(
    () => generateParticlePositions(words.length),
    [words.length]
  )

  // Transition to a specific index
  const transitionTo = useCallback((idx) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(idx)
      setIsTransitioning(false)
      setProgress(0)
      startRef.current = Date.now()
    }, TRANSITION)
  }, [])

  const advance = useCallback(() => {
    transitionTo((currentIndex + 1) % total)
  }, [currentIndex, total, transitionTo])

  const goBack = useCallback(() => {
    transitionTo((currentIndex - 1 + total) % total)
  }, [currentIndex, total, transitionTo])

  const goTo = (idx) => {
    if (idx === currentIndex) return
    transitionTo(idx)
  }

  // Progress timer with requestAnimationFrame for smooth ring
  useEffect(() => {
    if (isPaused || isTransitioning) return

    startRef.current = Date.now() - progress * DURATION

    const tick = () => {
      const elapsed = Date.now() - startRef.current
      const p = Math.min(elapsed / DURATION, 1)
      setProgress(p)
      if (p >= 1) {
        advance()
        return
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isPaused, isTransitioning, advance]) // eslint-disable-line react-hooks/exhaustive-deps

  const strokeDashoffset = RING_C * (1 - progress)

  return (
    <section
      className="inspirational-hero relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Inspirational quotes from influential women"
    >
      {/* ─── Layer 1: Deep base gradient ─── */}
      <div
        className="absolute inset-0 transition-all duration-[1500ms] ease-in-out"
        style={{
          background: `linear-gradient(160deg, ${palette[2]} 0%, ${palette[0]} 40%, ${palette[2]} 100%)`,
        }}
        aria-hidden="true"
      />

      {/* ─── Layer 2: Aurora gradients ─── */}
      <div
        className="aurora-layer absolute inset-0 transition-all duration-[2000ms] ease-in-out"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 15% 20%, ${palette[3]}55 0%, transparent 70%),
            radial-gradient(ellipse 70% 80% at 85% 75%, ${palette[1]}66 0%, transparent 65%),
            radial-gradient(ellipse 90% 50% at 50% 10%, ${palette[0]}44 0%, transparent 60%),
            radial-gradient(ellipse 60% 90% at 25% 85%, ${palette[3]}33 0%, transparent 55%),
            radial-gradient(ellipse 50% 70% at 75% 30%, ${palette[1]}55 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      {/* ─── Layer 3: Animated paint strokes ─── */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="paint-stroke-1 absolute left-[-10%] top-[5%] size-[55%] rounded-[40%_60%_55%_45%/40%_50%_60%_50%]"
          style={{ background: `${palette[1]}44` }}
        />
        <div
          className="paint-stroke-2 absolute bottom-[-5%] right-[-12%] h-1/2 w-3/5 rounded-[55%_45%_50%_50%/45%_55%_45%_55%]"
          style={{ background: `${palette[0]}33` }}
        />
        <div
          className="paint-stroke-3 absolute right-[10%] top-[55%] h-[35%] w-2/5 rounded-[40%_60%_45%_55%/50%_40%_60%_50%]"
          style={{ background: `${palette[3]}22` }}
        />
        <div
          className="paint-stroke-2 absolute left-[20%] top-[-8%] h-2/5 w-1/2 rounded-[60%_40%_50%_50%/55%_45%_55%_45%]"
          style={{ background: `${palette[1]}1a`, animationDelay: '3s' }}
        />
        <div
          className="paint-stroke-3 absolute bottom-[10%] left-[-5%] h-[30%] w-[35%] rounded-[45%_55%_40%_60%/50%_50%_50%_50%]"
          style={{ background: `${palette[3]}1a`, animationDelay: '7s' }}
        />
      </div>

      {/* ─── Layer 4: Grain texture ─── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
        aria-hidden="true"
      />

      {/* ─── Layer 5: Giant monogram ─── */}
      <div
        className={`absolute inset-0 flex items-center justify-center overflow-hidden transition-all duration-[1500ms] ${
          isTransitioning ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-hidden="true"
      >
        <span
          className="select-none font-heading font-black"
          style={{
            fontSize: 'clamp(14rem, 38vw, 42rem)',
            lineHeight: 0.8,
            color: `${palette[4]}06`,
            textShadow: `0 0 60px ${palette[3]}10, 0 0 160px ${palette[1]}08`,
            letterSpacing: '-0.04em',
          }}
        >
          {getInitials(quote.name)}
        </span>
      </div>

      {/* ─── Layer 7: Word Cloud ─── */}
      <div
        className={`absolute inset-0 transition-opacity duration-[1200ms] ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      >
        {words.map((word, i) => {
          const pos = positions[i]
          const tierOpacity = { hero: '0.18', medium: '0.12', small: '0.07' }
          return (
            <span
              key={`${currentIndex}-${word}-${i}`}
              className="word-particle absolute select-none font-body font-black uppercase"
              style={{
                left: pos.left,
                top: pos.top,
                fontSize: pos.fontSize,
                animationDelay: pos.animDelay,
                animationDuration: pos.animDuration,
                transform: `rotate(${pos.rotation})`,
                color: `rgba(255,255,255,${tierOpacity[pos.tier]})`,
                textShadow:
                  pos.tier === 'hero' ? `0 0 40px ${palette[3]}30` : 'none',
                letterSpacing: pos.tier === 'hero' ? '0.15em' : '0.08em',
              }}
            >
              {word}
            </span>
          )
        })}
      </div>

      {/* ─── Layer 8: Vignette ─── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.85) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 15%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0.5) 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* ─── Quote Content — cycles through 4 layout variants ─── */}
      {(() => {
        const variant = currentIndex % 4
        const transitionClass = isTransitioning
          ? 'translate-y-8 scale-95 opacity-0'
          : 'translate-y-0 scale-100 opacity-100'

        // ── Shared attribution block ──
        const renderAttribution = (align = 'center') => (
          <div
            className={`flex flex-col ${
              align === 'center'
                ? 'items-center'
                : align === 'right'
                  ? 'items-end'
                  : 'items-start'
            } gap-1.5`}
          >
            <cite className="not-italic">
              <span
                className="font-heading font-black uppercase tracking-wider text-white"
                style={{
                  fontSize: 'clamp(1.2rem, 3.5vw, 2.2rem)',
                  textShadow: `0 0 30px ${palette[3]}60, 0 2px 10px rgba(0,0,0,0.5)`,
                  letterSpacing: '0.08em',
                }}
              >
                {quote.name}
              </span>
            </cite>
            <span
              className="font-body text-xs font-light uppercase tracking-[0.25em] sm:text-sm"
              style={{
                color: `${palette[4]}cc`,
                textShadow: `0 0 10px ${palette[3]}20`,
              }}
            >
              {quote.title}
            </span>
          </div>
        )

        // ── Shared separator ──
        const renderSeparator = () => (
          <div className="relative my-4 h-px w-16 sm:w-24 md:w-32">
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent, ${palette[3]}80, ${palette[4]}60, ${palette[3]}80, transparent)`,
              }}
              aria-hidden="true"
            />
          </div>
        )

        // ── Shared quote text renderer ──
        const renderQuoteText = (sizeScale = 1) => (
          <p
            className="leading-relaxed drop-shadow-lg"
            style={{ lineHeight: 1.55 }}
          >
            {quote.quote.split(' ').map((word, i, arr) => {
              const isEmphasis = word.length >= 6 && i % 3 === 0
              const isAccent = i === 0 || i === arr.length - 1
              const base = sizeScale
              return (
                <span
                  key={i}
                  className={`inline ${
                    isAccent
                      ? 'font-heading font-extrabold'
                      : isEmphasis
                        ? 'font-body font-semibold italic'
                        : 'font-body font-light'
                  }`}
                  style={{
                    fontSize: isAccent
                      ? `clamp(${1.1 * base}rem, ${3.0 * base}vw, ${
                          2.4 * base
                        }rem)`
                      : isEmphasis
                        ? `clamp(${1.0 * base}rem, ${2.7 * base}vw, ${
                            2.2 * base
                          }rem)`
                        : `clamp(${0.95 * base}rem, ${2.4 * base}vw, ${
                            2.0 * base
                          }rem)`,
                    color: isAccent ? palette[3] : 'white',
                    textShadow: isAccent
                      ? `0 0 25px ${palette[3]}50`
                      : '0 2px 16px rgba(0,0,0,0.5)',
                    letterSpacing: isAccent ? '0.04em' : '0.01em',
                  }}
                >
                  {word}{' '}
                </span>
              )
            })}
          </p>
        )

        // ═══════════ VARIANT 0: Centered classic ═══════════
        if (variant === 0)
          return (
            <div
              className={`relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center transition-all duration-[1200ms] sm:px-14 ${transitionClass}`}
            >
              {quote.image && (
                <div className="relative mb-5 sm:mb-6">
                  <div
                    className="relative mx-auto size-24 overflow-hidden rounded-xl shadow-2xl sm:size-32 md:size-36"
                    style={{
                      border: `1.5px solid ${palette[3]}30`,
                      boxShadow: `0 0 30px ${palette[3]}20, 0 8px 32px rgba(0,0,0,0.5)`,
                      transform: 'rotate(-2deg)',
                    }}
                  >
                    <img
                      src={quote.image}
                      alt={quote.name}
                      className="size-full object-cover"
                      loading="eager"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-8"
                      style={{
                        background: `linear-gradient(to top, ${palette[2]}, transparent)`,
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <div
                    className="absolute -inset-4 -z-10 rounded-[40%_60%_50%_50%/50%_40%_60%_50%] opacity-30"
                    style={{ background: `${palette[1]}44` }}
                    aria-hidden="true"
                  />
                </div>
              )}
              <span
                className="mb-0 font-heading font-black leading-none sm:mb-1"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  background: `linear-gradient(135deg, ${palette[3]}, ${palette[4]}80)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  opacity: 0.3,
                  filter: `drop-shadow(0 0 20px ${palette[3]}25)`,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="mb-5 sm:mb-6">
                {renderQuoteText()}
              </blockquote>
              {renderSeparator()}
              {renderAttribution('center')}
            </div>
          )

        // ═══════════ VARIANT 1: Side-by-side — image right, text left ═══════════
        if (variant === 1)
          return (
            <div
              className={`relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 transition-all duration-[1200ms] sm:px-14 md:flex-row md:items-center md:gap-12 ${transitionClass}`}
            >
              {/* Text side */}
              <div className="flex flex-1 flex-col items-start text-left md:order-1">
                <span
                  className="mb-2 font-heading font-black leading-none"
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                    background: `linear-gradient(135deg, ${palette[3]}, ${palette[4]}80)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    opacity: 0.25,
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="mb-4">{renderQuoteText(0.9)}</blockquote>
                {renderSeparator()}
                {renderAttribution('left')}
              </div>
              {/* Image side */}
              {quote.image && (
                <div className="relative shrink-0 md:order-2">
                  <div
                    className="relative h-48 w-40 overflow-hidden rounded-2xl shadow-2xl sm:h-64 sm:w-52 md:h-80 md:w-64"
                    style={{
                      border: `1.5px solid ${palette[3]}25`,
                      boxShadow: `0 0 50px ${palette[3]}25, 0 20px 60px rgba(0,0,0,0.5)`,
                    }}
                  >
                    <img
                      src={quote.image}
                      alt={quote.name}
                      className="size-full object-cover"
                      loading="eager"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${palette[0]}40, transparent 50%, ${palette[1]}30)`,
                      }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-16"
                      style={{
                        background: `linear-gradient(to top, ${palette[2]}, transparent)`,
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <div
                    className="absolute -inset-6 -z-10 rounded-[30%_70%_60%_40%/50%_30%_70%_50%] opacity-20"
                    style={{ background: `${palette[3]}33` }}
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
          )

        // ═══════════ VARIANT 2: Cinematic — massive text, no image, dramatic ═══════════
        if (variant === 2)
          return (
            <div
              className={`relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center transition-all duration-[1200ms] sm:px-14 ${transitionClass}`}
            >
              {/* Giant opening quote */}
              <span
                className="font-heading font-black leading-none"
                style={{
                  fontSize: 'clamp(5rem, 14vw, 12rem)',
                  background: `linear-gradient(135deg, ${palette[3]}, ${palette[1]})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  opacity: 0.15,
                  lineHeight: 0.7,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              {/* Quote as large dramatic text */}
              <blockquote className="-mt-6 mb-6 sm:-mt-10 sm:mb-8">
                <p
                  className="leading-relaxed drop-shadow-lg"
                  style={{ lineHeight: 1.4 }}
                >
                  {quote.quote.split(' ').map((word, i, arr) => {
                    const isFirst = i === 0
                    const isLast = i === arr.length - 1
                    return (
                      <span
                        key={i}
                        className={`inline font-heading ${
                          isFirst || isLast
                            ? 'font-black'
                            : i % 2 === 0
                              ? 'font-bold'
                              : 'font-light'
                        }`}
                        style={{
                          fontSize: isFirst
                            ? 'clamp(1.8rem, 5vw, 4rem)'
                            : isLast
                              ? 'clamp(1.6rem, 4.5vw, 3.5rem)'
                              : 'clamp(1.3rem, 3.5vw, 2.8rem)',
                          color:
                            isFirst || isLast ? palette[3] : `${palette[4]}ee`,
                          textShadow:
                            isFirst || isLast
                              ? `0 0 35px ${palette[3]}60`
                              : '0 2px 20px rgba(0,0,0,0.6)',
                          letterSpacing: isFirst ? '0.06em' : '0.02em',
                        }}
                      >
                        {word}{' '}
                      </span>
                    )
                  })}
                </p>
              </blockquote>
              {/* Closing quote */}
              <span
                className="-mt-4 mb-4 font-heading font-black leading-none"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  background: `linear-gradient(135deg, ${palette[4]}80, ${palette[3]})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  opacity: 0.15,
                  lineHeight: 0.7,
                }}
                aria-hidden="true"
              >
                &rdquo;
              </span>
              {renderSeparator()}
              {renderAttribution('center')}
            </div>
          )

        // ═══════════ VARIANT 3: Editorial — circular portrait left, text right ═══════════
        return (
          <div
            className={`relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 transition-all duration-[1200ms] sm:px-14 md:flex-row md:items-center md:gap-12 ${transitionClass}`}
          >
            {/* Circular portrait */}
            {quote.image && (
              <div className="relative shrink-0 md:order-1">
                <div
                  className="relative size-32 overflow-hidden rounded-full shadow-2xl sm:size-44 md:size-56"
                  style={{
                    border: `2px solid ${palette[3]}35`,
                    boxShadow: `0 0 60px ${palette[3]}20, 0 0 120px ${palette[1]}10`,
                  }}
                >
                  <img
                    src={quote.image}
                    alt={quote.name}
                    className="size-full object-cover"
                    loading="eager"
                  />
                </div>
                {/* Decorative ring */}
                <div
                  className="absolute -inset-3 rounded-full border opacity-20"
                  style={{ borderColor: palette[3] }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -inset-6 rounded-full border opacity-10"
                  style={{ borderColor: palette[4] }}
                  aria-hidden="true"
                />
              </div>
            )}
            {/* Text side */}
            <div className="flex flex-1 flex-col items-end text-right md:order-2">
              <span
                className="mb-2 font-heading font-black leading-none"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  background: `linear-gradient(135deg, ${palette[3]}, ${palette[4]}80)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  opacity: 0.25,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="mb-4">
                <p
                  className="text-right leading-relaxed drop-shadow-lg"
                  style={{ lineHeight: 1.55 }}
                >
                  {quote.quote.split(' ').map((word, i, arr) => {
                    const isEmphasis = word.length >= 6 && i % 3 === 0
                    const isAccent = i === 0 || i === arr.length - 1
                    return (
                      <span
                        key={i}
                        className={`inline ${
                          isAccent
                            ? 'font-heading font-extrabold'
                            : isEmphasis
                              ? 'font-body font-semibold italic'
                              : 'font-body font-light'
                        }`}
                        style={{
                          fontSize: isAccent
                            ? 'clamp(1.1rem, 3vw, 2.4rem)'
                            : isEmphasis
                              ? 'clamp(1rem, 2.7vw, 2.2rem)'
                              : 'clamp(0.95rem, 2.4vw, 2rem)',
                          color: isAccent ? palette[3] : 'white',
                          textShadow: isAccent
                            ? `0 0 25px ${palette[3]}50`
                            : '0 2px 16px rgba(0,0,0,0.5)',
                          letterSpacing: isAccent ? '0.04em' : '0.01em',
                        }}
                      >
                        {word}{' '}
                      </span>
                    )
                  })}
                </p>
              </blockquote>
              {renderSeparator()}
              {renderAttribution('right')}
            </div>
          </div>
        )
      })()}

      {/* ─── Controls: prev / play-pause with progress ring / next ─── */}
      <div
        className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4 sm:bottom-24"
        role="group"
        aria-label="Quote playback controls"
      >
        {/* Previous */}
        <button
          onClick={goBack}
          aria-label="Previous quote"
          className="flex size-10 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-90 sm:size-11"
          style={{
            background: `${palette[2]}99`,
            border: `1px solid ${palette[4]}25`,
            color: `${palette[4]}cc`,
          }}
        >
          <FaChevronLeft className="size-3.5 sm:size-4" />
        </button>

        {/* Play / Pause with SVG progress ring */}
        <button
          onClick={() => setIsPaused((p) => !p)}
          aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
          className="relative flex size-14 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-90 sm:size-16"
          style={{
            background: `${palette[2]}bb`,
            border: `1px solid ${palette[4]}30`,
          }}
        >
          {/* Progress ring */}
          <svg
            className="absolute inset-0 -rotate-90"
            viewBox="0 0 56 56"
            aria-hidden="true"
          >
            <circle
              cx="28"
              cy="28"
              r={RING_R}
              fill="none"
              strokeWidth="2.5"
              stroke={`${palette[4]}20`}
            />
            <circle
              cx="28"
              cy="28"
              r={RING_R}
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{
                stroke: palette[3],
                strokeDasharray: RING_C,
                strokeDashoffset,
                transition: isPaused ? 'stroke-dashoffset 300ms ease' : 'none',
              }}
            />
          </svg>
          {/* Icon */}
          {isPaused ? (
            <FaPlay
              className="relative z-10 ml-0.5 size-4 sm:size-5"
              style={{ color: palette[3] }}
            />
          ) : (
            <FaPause
              className="relative z-10 size-4 sm:size-5"
              style={{ color: palette[3] }}
            />
          )}
        </button>

        {/* Next */}
        <button
          onClick={advance}
          aria-label="Next quote"
          className="flex size-10 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-90 sm:size-11"
          style={{
            background: `${palette[2]}99`,
            border: `1px solid ${palette[4]}25`,
            color: `${palette[4]}cc`,
          }}
        >
          <FaChevronRight className="size-3.5 sm:size-4" />
        </button>
      </div>

      {/* ─── Dot Navigation ─── */}
      <nav
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 sm:bottom-10 sm:gap-2"
        aria-label="Quote navigation"
      >
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to quote ${i + 1} by ${quotes[i].name}`}
            aria-current={i === currentIndex ? 'true' : undefined}
            className={`rounded-full transition-all duration-500 ${
              i === currentIndex
                ? 'h-2.5 w-10 shadow-lg sm:h-3 sm:w-12'
                : 'size-2 hover:scale-150 sm:size-2.5'
            }`}
            style={{
              background:
                i === currentIndex
                  ? `linear-gradient(90deg, ${palette[3]}, ${palette[4]})`
                  : `${palette[4]}40`,
              boxShadow:
                i === currentIndex ? `0 0 12px ${palette[3]}60` : 'none',
            }}
          />
        ))}
      </nav>

      {/* ─── Quote counter ─── */}
      <div
        className="absolute bottom-6 right-4 z-20 font-body text-xs tracking-widest sm:bottom-10 sm:right-8"
        style={{ color: `${palette[4]}60` }}
        aria-hidden="true"
      >
        {String(currentIndex + 1).padStart(2, '0')}/
        {String(total).padStart(2, '0')}
      </div>
    </section>
  )
}
