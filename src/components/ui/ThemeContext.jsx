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
  {
    id: 'blue',
    label: 'Ocean',
    swatch: '#3b82f6',
    palette: ['#1B3A6C', '#3B82F6', '#0A1628', '#60A5FA', '#BFDBFE'],
  },
  {
    id: 'purple',
    label: 'Violet',
    swatch: '#a855f7',
    palette: ['#4A2C6E', '#A855F7', '#160E22', '#C084FC', '#E9D5FF'],
  },
  {
    id: 'coral',
    label: 'Coral',
    swatch: '#f43f5e',
    palette: ['#6B1A2A', '#F43F5E', '#1A0810', '#FB7185', '#FECDD3'],
  },
  {
    id: 'emerald',
    label: 'Emerald',
    swatch: '#10b981',
    palette: ['#1B4D3E', '#10B981', '#071F16', '#34D399', '#A7F3D0'],
  },
  {
    id: 'gold',
    label: 'Gold',
    swatch: '#eab308',
    palette: ['#5C4506', '#EAB308', '#1A1207', '#FBBF24', '#FEF3C7'],
  },
  {
    id: 'magenta',
    label: 'Magenta',
    swatch: '#d946ef',
    palette: ['#5E1A6B', '#D946EF', '#1A0A1E', '#E879F9', '#F5D0FE'],
  },
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
