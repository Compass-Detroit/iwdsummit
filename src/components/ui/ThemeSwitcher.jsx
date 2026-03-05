import { FaPalette } from 'react-icons/fa6'
import { useTheme } from './ThemeContext'

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()
  const isBlue = theme === 'blue'

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isBlue}
      aria-label={`Current theme: ${theme}. Switch to ${
        isBlue ? 'purple' : 'blue'
      } theme.`}
      className="fixed bottom-20 right-6 z-50 flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/90 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-iwd-gold-500 focus:ring-offset-2 active:scale-95"
    >
      <span className="relative flex size-7 items-center justify-center overflow-hidden rounded-full">
        <span
          className="absolute inset-0 rounded-full transition-all duration-500"
          style={{
            background: isBlue
              ? 'linear-gradient(135deg, #60a5fa, #1d4ed8)'
              : 'linear-gradient(135deg, #c084fc, #7e22ce)',
          }}
        />
        <FaPalette className="relative z-10 h-3.5 w-3.5 text-white" />
      </span>
    </button>
  )
}

export default ThemeSwitcher
