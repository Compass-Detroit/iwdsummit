import PropTypes from 'prop-types'
import TwitterHandle from '@/components/ui/TwitterHandle'

import { IoChevronForward } from 'react-icons/io5'

const GenericCard = ({
  name,
  twitter,
  avatar,
  organization,
  position,
  onOpen,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onOpen?.()
    }
  }

  return (
    <div
      className={`group relative w-full max-w-sm ${onOpen ? 'cursor-pointer' : ''}`}
      onClick={onOpen}
      role={onOpen ? 'button' : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onKeyDown={handleKeyDown}
      aria-label={onOpen ? `View details for ${name}` : undefined}
    >
      <div className="relative h-[27rem] overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/[0.12] group-hover:bg-white/[0.04] group-hover:shadow-xl group-hover:shadow-black/20">
        {/* Gradient header band */}
        <div className="relative h-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-iwd-gold-600/20 via-transparent to-iwd-gold-600/20" />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 80% 100% at 50% 0%, rgb(var(--iwd-accent-700) / 0.25), transparent 70%)`,
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-iwd-gold-400/30 to-transparent" />
        </div>

        <div className="relative -mt-12 flex justify-center">
          <div className="relative">
            <div className="rounded-full bg-gradient-to-br from-iwd-gold-300/80 via-iwd-gold-500/60 to-iwd-gold-300/80 p-[3px] shadow-lg shadow-iwd-gold-500/20">
              <div className="size-[168px] rounded-full bg-iwd-surface-raised dark:bg-iwd-black-950 p-0.5">
                {avatar && (
                  <img
                    src={avatar}
                    className="size-full rounded-full object-cover"
                    alt={`${name || ''} portrait`}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
            {twitter && (
              <div className="absolute inset-x-0 bottom-0">
                <TwitterHandle
                  handle={twitter}
                  name={name || ''}
                  variant="avatar"
                  absolute={false}
                />
              </div>
            )}
          </div>
        </div>

        <div className="px-6 pb-6 pt-4 text-center">
          {name && (
            <h3 className="mb-1 line-clamp-2 text-lg font-semibold text-white dark:text-white">
              {name}
            </h3>
          )}

          {position && (
            <p className="mb-1 line-clamp-2 text-sm font-medium text-iwd-gold-300/80">
              {position}
            </p>
          )}

          {organization && (
            <p className="mb-4 line-clamp-2 text-xs text-gray-400">
              {organization}
            </p>
          )}

          {onOpen && (
            <button
              className="inline-flex items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-300 opacity-0 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-iwd-gold-400/30 hover:bg-iwd-gold-400/10 hover:text-iwd-gold-300 group-hover:opacity-100"
              tabIndex={-1}
            >
              View Details
              <IoChevronForward className="size-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

GenericCard.propTypes = {
  name: PropTypes.string,
  twitter: PropTypes.string,
  avatar: PropTypes.string,
  organization: PropTypes.string,
  position: PropTypes.string,
  onOpen: PropTypes.func,
}

export default GenericCard
