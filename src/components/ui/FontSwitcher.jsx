import { useState, useRef, useEffect } from 'react'
import { FaFont } from 'react-icons/fa6'
import useFont from '@/hooks/useFont'
import { FONTS } from '@/constants/ui'

function FontSwitcher() {
  const { font, setFont } = useFont()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const currentFont = FONTS.find((f) => f.id === font)

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', handler)
    return () => document.removeEventListener('pointerdown', handler)
  }, [open])

  return (
    <div ref={ref} className="relative flex items-center">
      {/* Font trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Choose font style"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--iwd-accent-500)/0.12)] focus:ring-offset-2 focus:ring-offset-black active:scale-95"
      >
        <span className="text-xs font-medium text-gray-300">
          {currentFont?.label}
        </span>
        <FaFont className="size-3 text-gray-400" />
      </button>

      {/* Font dropdown */}
      {open && (
        <div
          className="absolute right-0 top-full z-50 mt-2 min-w-40 rounded-xl border border-white/10 bg-iwd-black-950/95 p-2 shadow-xl shadow-black/40 backdrop-blur-xl"
          role="radiogroup"
          aria-label="Font styles"
        >
          <div className="flex flex-col gap-1">
            {FONTS.map((f) => {
              const sampleClass =
                f.id === 'classic'
                  ? 'font-biorhyme'
                  : f.id === 'editorial'
                    ? 'font-asimovian'
                    : f.id === 'tech'
                      ? 'font-orbitron'
                      : f.id === 'script'
                        ? 'font-russell'
                        : 'font-montserrat'

              return (
                <button
                  key={f.id}
                  role="radio"
                  aria-checked={font === f.id}
                  onClick={() => {
                    setFont(f.id)
                    setOpen(false)
                  }}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 ${
                    font === f.id
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:bg-white/[0.06] hover:text-gray-200'
                  }`}
                >
                  <span className={`text-sm ${sampleClass}`}>{f.label}</span>
                  <span
                    className={`text-[0.65rem] uppercase tracking-wider text-gray-500 ${sampleClass}`}
                  >
                    Aa
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default FontSwitcher
