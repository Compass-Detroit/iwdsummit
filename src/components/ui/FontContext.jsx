import { createContext, useContext, useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'

const FontContext = createContext(null)

export const FONTS = [
  {
    id: 'classic',
    label: 'Classic',
    heading: 'font-biorhyme',
    body: 'font-montserrat',
    sample: 'BioRhyme',
  },
  {
    id: 'editorial',
    label: 'Editorial',
    heading: 'font-asimovian',
    body: 'font-montserrat',
    sample: 'Asimovian',
  },
  {
    id: 'tech',
    label: 'Tech',
    heading: 'font-orbitron',
    body: 'font-montserrat',
    sample: 'Orbitron',
  },
  {
    id: 'script',
    label: 'Script',
    heading: 'font-russell',
    body: 'font-russell',
    sample: 'Russell',
  },
  {
    id: 'modern',
    label: 'Modern',
    heading: 'font-montserrat',
    body: 'font-montserrat',
    sample: 'Montserrat',
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

export function FontProvider({ children }) {
  const [font, setFont] = useState(() => readStorage('iwd-font', 'classic'))

  useEffect(() => {
    document.documentElement.setAttribute('data-font', font)
    writeStorage('iwd-font', font)
  }, [font])

  const currentFont = useMemo(
    () => FONTS.find((f) => f.id === font) || FONTS[0],
    [font]
  )

  const value = useMemo(
    () => ({ font, setFont, currentFont }),
    [font, currentFont]
  )

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>
}

FontProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useFont() {
  const context = useContext(FontContext)
  if (!context) {
    throw new Error('useFont must be used within a FontProvider')
  }
  return context
}
