import { useRef, useState } from 'react'
import PropTypes from 'prop-types'

/**
 * CTAButton - A reusable Call-to-Action button component with Magnetic hover effect and built-in accessibility features.
 *
 * This component renders an accessible, styled link button with automatic ARIA labels
 * for screen readers, focus indicators for keyboard navigation, and hover effects.
 * Supports primary and secondary variants with distinct visual hierarchy.
 *
 * @component
 * @example
 * // With an icon from react-icons
 * import { FaTicketAlt } from 'react-icons/fa6'
 *
 * <CTAButton
 *   href="https://bit.ly/midevfest25"
 *   label="GET TICKETS"
 *   icon={<FaTicketAlt />}
 * />
 *
 * @example
 * // Icon positioned on the right
 * import { IoArrowForward } from 'react-icons/io5'
 *
 * <CTAButton
 *   href="https://example.com"
 *   label="Learn More"
 *   icon={<IoArrowForward />}
 *   iconPosition="right"
 * />
 *
 * @example
 * // Side-by-side buttons for multiple CTAs
 * <div className="flex flex-row gap-8">
 *   <CTAButton href="https://tickets.com" label="GET TICKETS" />
 *   <CTAButton href="https://apply.com" label="APPLY TO SPEAK" variant="secondary" />
 * </div>
 *
 * @example
 * // Opening in same tab with custom aria label
 * <CTAButton
 *   href="/speakers"
 *   label="View Speakers"
 *   target="_self"
 *   ariaLabel="View our list of speakers"
 * />
 *
 *
 * @accessibility
 * - Automatically announces "(opens in new tab)" for links opening in new windows
 * - Includes visible focus indicators for keyboard navigation (WCAG 2.4.7)
 * - Supports custom ARIA labels for enhanced screen reader experience
 * - Uses semantic HTML <a> tag for proper link behavior
 * - Maintains proper contrast ratios for both variants (WCAG 2.1 AA)
 *
 * @design
 * - Primary: Sky-900 background, semibold text, extra horizontal padding (px-20)
 * - Secondary: White background, 4px sky-900 border for visual prominence
 * - Both: Consistent hover animations (lift and scale) for engaging interactions
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
  /** The URL the button links to (required) */
  href: PropTypes.string.isRequired,
  /** Button text as a prop (alternative to using children) */
  label: PropTypes.string,
  /** Button text/content as children (alternative to using label prop) */
  children: PropTypes.node,
  /**
   * Button style variant
   * @default 'primary' - Filled sky-900 background with extra horizontal padding and semibold text
   * 'secondary' - White background with 4px sky-900 border, ideal for alternative actions
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Icon element to display with the button text
   * Pass a React Icons component (e.g., <FaTicket />)
   */
  icon: PropTypes.node,
  /**
   * Position of the icon relative to text
   * @default 'left'
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * Target attribute for the link
   * @default '_blank' - Opens in new tab
   */
  target: PropTypes.string,
  /**
   * Rel attribute for link security/behavior
   * @default 'noreferrer'
   */
  rel: PropTypes.string,
  /** Additional CSS classes to apply to the button */
  className: PropTypes.string,
  /**
   * Custom ARIA label for screen readers
   * If not provided and target='_blank', automatically adds "(opens in new tab)"
   */
  ariaLabel: PropTypes.string,
}

export default CTAButton
