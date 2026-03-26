import { useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import FontContext from '@/contexts/fontContextCore'
import { FONTS } from '@/constants/ui'

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

export default function FontProvider({ children }) {
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
