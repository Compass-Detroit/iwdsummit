import { useRef, useState } from 'react'
import PropTypes from 'prop-types'

/**
 * CTAButton - A reusable Call-to-Action button component with Magnetic hover effects.
 */
function CTAButton({
  href,
  label,
  children,
  variant = 'primary',
  icon,
  iconPosition = 'left',
  target = '_blank',
  rel = 'noreferrer',
  className = '',
  ariaLabel,
}) {
  const buttonText = label || children
  const buttonRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.35
    const y = (clientY - (top + height / 2)) * 0.35
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  // Generate accessible label if opening in new tab/window
  const getAriaLabel = () => {
    if (ariaLabel) return ariaLabel

    if (target === '_blank') {
      const text = typeof buttonText === 'string' ? buttonText : 'Link'
      return `${text} (opens in new tab)`
    }

    return undefined
  }

  // Define variant styles
  const variantStyles = {
    primary:
      'border border-iwd-gold-400/30 bg-iwd-gold-400/10 text-iwd-gold-300 px-12 shadow-lg font-semibold text-sm uppercase tracking-widest hover:border-iwd-gold-400/50 hover:bg-iwd-gold-400/20 hover:shadow-xl hover:shadow-iwd-gold-500/10',
    secondary:
      'border border-white/10 bg-white/[0.04] text-gray-200 px-12 py-4 shadow-lg font-semibold text-sm uppercase tracking-widest hover:border-white/20 hover:bg-white/[0.08] hover:text-white hover:shadow-xl',
  }

  const baseStyles =
    'group relative flex items-center justify-center rounded-lg px-8 py-4 font-medium transition-all duration-500 ease-out hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-black whitespace-nowrap'

  return (
    <a
      ref={buttonRef}
      href={href}
      target={target}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      rel={rel}
      aria-label={getAriaLabel()}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Background Shimmer Effect */}
      <span className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-lg">
        <span className="group-hover:animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </span>

      <span className="relative z-10 flex items-center justify-center">
        {icon && iconPosition === 'left' && (
          <span className="mr-2" aria-hidden="true">
            {icon}
          </span>
        )}
        {buttonText}
        {icon && iconPosition === 'right' && (
          <span className="ml-2" aria-hidden="true">
            {icon}
          </span>
        )}
      </span>
    </a>
  )
}

CTAButton.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  target: PropTypes.string,
  rel: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
}

export default CTAButton
