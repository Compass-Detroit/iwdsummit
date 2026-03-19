import { useEffect, useState, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '@/contexts/themeContextCore'

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

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => readStorage('iwd-theme', 'purple'))
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

// useTheme hook moved to hooks/useTheme.js to keep this file exporting only the provider component
