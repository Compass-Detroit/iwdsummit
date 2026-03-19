import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = (currentScrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-iwd-gold-400 via-iwd-gold-300 to-iwd-gold-400 shadow-[0_0_10px_rgba(244,180,0,0.5)] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgress
