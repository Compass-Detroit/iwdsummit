import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FaPalette, FaSun, FaMoon } from 'react-icons/fa6'
import useTheme from '@/hooks/useTheme'
import { THEMES } from '@/constants/ui'

function ThemeSwitcher({ dropdownUp = false }) {
  const { theme, setTheme, mode, toggleMode } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const currentTheme = THEMES.find((t) => t.id === theme)

  // Close palette on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', handler)
    return () => document.removeEventListener('pointerdown', handler)
  }, [open])

  return (
    <div ref={ref} className="relative flex items-center gap-1.5">
      {/* Light / Dark toggle */}
      <button
        onClick={toggleMode}
        aria-label={
          mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
        }
        className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--iwd-accent-500)/0.12)] focus:ring-offset-2 focus:ring-offset-black active:scale-95"
      >
        {mode === 'dark' ? (
          <FaSun className="size-3 text-iwd-gold-400" />
        ) : (
          <FaMoon className="size-3 text-iwd-gold-400" />
        )}
      </button>

      {/* Color theme trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Choose color theme"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--iwd-accent-500)/0.12)] focus:ring-offset-2 focus:ring-offset-black active:scale-95"
      >
        <div
          className="size-3 rounded-full shadow-sm"
          style={{ background: currentTheme?.swatch }}
        />
        <FaPalette className="size-3 text-white/90" />
      </button>

      {/* Swatch dropdown */}
      {open && (
        <div
          className={`bg-iwd-surface-raised absolute right-0 z-50 rounded-xl border border-white/10 p-2 shadow-xl shadow-black/40 backdrop-blur-xl dark:bg-iwd-black-950/95 ${
            dropdownUp ? 'bottom-full mb-2' : 'top-full mt-2'
          }`}
          role="radiogroup"
          aria-label="Theme colors"
        >
          <div className="flex gap-1.5">
            {THEMES.map((t) => (
              <button
                key={t.id}
                role="radio"
                aria-checked={theme === t.id}
                aria-label={t.label}
                onClick={() => {
                  setTheme(t.id)
                  setOpen(false)
                }}
                className={`size-7 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black ${
                  theme === t.id
                    ? 'scale-110 ring-2 ring-white/40 ring-offset-2 ring-offset-black'
                    : 'opacity-60 hover:opacity-100'
                }`}
                style={{ background: t.swatch }}
                title={t.label}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

ThemeSwitcher.propTypes = {
  dropdownUp: PropTypes.bool,
}

export default ThemeSwitcher
