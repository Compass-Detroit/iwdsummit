import PropTypes from 'prop-types'
import GithubHandle from '@/components/ui/GithubHandle'
import InstagramHandle from '@/components/ui/InstagramHandle'
import LinkedInHandle from '@/components/ui/LinkedInHandle'
import MastodonHandle from '@/components/ui//MastadonHandle'
import TwitterHandle from '@/components/ui/TwitterHandle'

import GDEIcon from '@/assets/images/icons/gdge.svg'
import WTMLogo from '@/assets/images/icons/wtm.svg'

const ProfileCard = ({
  avatar,
  github,
  isGDE = false,
  isWTM = false,
  instagram,
  linkedin,
  mastodon,
  name,
  onViewDetails,
  organization,
  position,
  track,
  twitter,
}) => {
  const getBadgeColor = () => {
    const trackColors = {
      'Build with AI': 'bg-purple-800',
      Innovation: 'bg-indigo-800',
      'Level Up': 'bg-emerald-800',
      Leadership: 'bg-iwd-gold-800',
      'Tech+Design': 'bg-red-800',
      Workshops: 'bg-orange-800',
      'AI Foundations': 'bg-red-800',
      'Breakout Sessions': 'bg-iwd-black-800',
    }

    if (track) return trackColors[track] || 'bg-red-700'
    return 'bg-red-700'
  }

  const badgeColor = getBadgeColor(track)

  const speakerDetailColors = `border border-white/[0.08] bg-white/[0.04] text-iwd-gold-300 shadow-md backdrop-blur-sm hover:bg-iwd-gold-500 hover:border-iwd-gold-500 hover:text-black hover:shadow-lg hover:shadow-iwd-gold-500/20`

  // change these for the speaker wrapper gradients
  const getGradientColors = (bgColor) => {
    const colorMap = {
      // Speaker track colors - lighter gradients for subtle image overlays
      'bg-purple-800': 'from-purple-400/60 via-purple-400/5',
      'bg-primary-900': 'from-primary-400/60 via-primary-400/5',
      'bg-emerald-800': 'from-emerald-200/60 via-emerald-50/5',
      'bg-indigo-800': 'from-indigo-400/60 via-indigo-400/5',
      'bg-red-800': 'from-red-400/60 via-red-400/5',
      'bg-orange-900': 'from-orange-400/60 via-orange-400/5',
      'bg-iwd-gold-800': 'from-iwd-gold-400/60 via-iwd-gold-400/5',
      'bg-iwd-black-800': 'from-iwd-black-800/60 via-iwd-black-800/5',

      // Legacy/fallback colors
      'bg-primary-300': 'from-primary-300/60 via-primary-300/5',
      'bg-primary-500': 'from-primary-300/60 via-primary-300/5',
      'bg-blue-500': 'from-blue-400/60 via-blue-400/5',
      'bg-green-500': 'from-green-400/60 via-green-400/5',
      'bg-indigo-500': 'from-indigo-400/60 via-indigo-400/5',
      'bg-gray-500': 'from-gray-400/60 via-gray-400/5',
      'bg-gray-600': 'from-gray-400/60 via-gray-400/5',
      'bg-gray-700': 'from-gray-900/60 via-gray-900/5',
    }

    return colorMap[bgColor] || 'from-gray-400/60 via-gray-400/5'
  }

  const renderBadge = track && (
    <div className="absolute bottom-4 right-4 z-10">
      <span
        className={`inline-flex items-center gap-2 rounded-xl border border-white/10 ${badgeColor} px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm`}
      >
        {track}
        {isGDE && (
          <img
            src={GDEIcon}
            alt="GDE"
            className="size-6"
            loading="lazy"
            width={24}
            height={24}
          />
        )}
        {isWTM && (
          <img
            src={WTMLogo}
            alt="WTM"
            className="size-5"
            loading="lazy"
            width={20}
            height={20}
          />
        )}
      </span>
    </div>
  )

  const renderImageGradient = (
    <>
      {/* Top gradient */}
      <div
        className={`absolute inset-x-0 top-0 z-0 h-1/2 bg-gradient-to-b ${getGradientColors(
          badgeColor
        )} pointer-events-none via-10% to-transparent`}
      ></div>
      {/* Bottom gradient */}
      <div
        className={`absolute inset-x-0 bottom-0 z-0 h-1/2 bg-gradient-to-t ${getGradientColors(
          badgeColor
        )} pointer-events-none via-10% to-transparent`}
      ></div>
      {/* Left gradient */}
      <div
        className={`absolute inset-y-0 left-0 z-0 w-1/2 bg-gradient-to-r ${getGradientColors(
          badgeColor
        )} pointer-events-none via-10% to-transparent`}
      ></div>
      {/* Right gradient */}
      <div
        className={`absolute inset-y-0 right-0 z-0 w-1/2 bg-gradient-to-l ${getGradientColors(
          badgeColor
        )} pointer-events-none via-10% to-transparent`}
      ></div>
    </>
  )

  const renderBadgeAndGradient = track && (
    <>
      {renderImageGradient}
      {renderBadge}
    </>
  )

  const renderSocialLinks = (linkedin || github || twitter || mastodon) && (
    <div className="inline-flex items-center gap-2">
      {github && <GithubHandle handle={github} absolute={false} />}
      {instagram && <InstagramHandle handle={instagram} absolute={false} />}
      {linkedin && <LinkedInHandle handle={linkedin} absolute={false} />}
      {mastodon && <MastodonHandle handle={mastodon} absolute={false} />}
      {twitter && (
        <TwitterHandle
          handle={twitter}
          name={name}
          variant="default"
          absolute={false}
        />
      )}
    </div>
  )

  {
    /* Show fields to maintain size */
  }
  const renderInfo = (
    <div className="ml-4 flex flex-col items-start justify-start">
      <h3 className="mt-1 line-clamp-2 text-left text-xl font-semibold tracking-tight text-white">
        {name}
      </h3>
      <p className="mt-1 line-clamp-2 text-left text-sm text-gray-400">
        {organization || '\u00A0'}
      </p>
      <p className="mt-0.5 line-clamp-2 text-left text-sm text-gray-500">
        {position || '\u00A0'}
      </p>
    </div>
  )

  const renderButton = onViewDetails && (
    <button
      className={`my-3 inline-flex items-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 ${speakerDetailColors}`}
      onClick={onViewDetails}
      aria-label={`View details for ${name}`}
    >
      View Details
    </button>
  )

  const renderSpeakerCard = (
    <>
      {/* Large portrait — aspect ratio for dramatic visual impact */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-2xl">
        <img
          alt={`${name} avatar`}
          src={avatar}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay from bottom for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          aria-hidden="true"
        />
        {renderBadgeAndGradient}

        {/* Name + info overlaid on image bottom */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-lg sm:text-2xl">
            {name}
          </h3>
          {organization && (
            <p className="mt-1 text-sm font-medium text-gray-200/90 drop-shadow-md">
              {organization}
            </p>
          )}
          {position && (
            <p className="mt-0.5 text-xs text-gray-300/80 drop-shadow-md">
              {position}
            </p>
          )}
        </div>
      </div>

      {/* Bottom bar: socials + CTA */}
      <div className="flex items-center justify-between gap-2 px-5 py-4">
        {renderSocialLinks || <div />}
        {renderButton}
      </div>
    </>
  )

  return (
    <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20">
      {renderSpeakerCard}
    </div>
  )
}

ProfileCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  github: PropTypes.string,
  instagram: PropTypes.string,
  isGDE: PropTypes.bool,
  isWTM: PropTypes.bool,
  linkedin: PropTypes.string,
  onViewDetails: PropTypes.func,
  mastodon: PropTypes.string,
  name: PropTypes.string.isRequired,
  organization: PropTypes.string,
  position: PropTypes.string,
  track: PropTypes.string, // For speakers: 'Build with AI', 'Innovation', etc.
  twitter: PropTypes.string,
}

export default ProfileCard
