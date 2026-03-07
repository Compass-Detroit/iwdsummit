import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext(null)

export const THEMES = [
  { id: 'blue', label: 'Ocean', swatch: '#3b82f6' },
  { id: 'purple', label: 'Violet', swatch: '#a855f7' },
  { id: 'coral', label: 'Coral', swatch: '#f43f5e' },
  { id: 'emerald', label: 'Emerald', swatch: '#10b981' },
  { id: 'gold', label: 'Gold', swatch: '#eab308' },
  { id: 'magenta', label: 'Magenta', swatch: '#d946ef' },
]

function readStorage(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* private browsing */
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => readStorage('iwd-theme', 'blue'))
  const [mode, setMode] = useState(() => readStorage('iwd-mode', 'dark'))

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    writeStorage('iwd-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode)
    writeStorage('iwd-mode', mode)
  }, [mode])

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, mode, toggleMode }),
    [theme, mode, toggleMode]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
