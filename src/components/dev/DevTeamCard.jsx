import LinkedInHandle from '@/components/ui/LinkedInHandle'
import PropTypes from 'prop-types'
import GithubHandle from '../ui/GithubHandle'

const DevTeamCard = ({
  name,
  avatar,
  linkedin,
  github,
  organization,
  position,
  university,
  badge,
}) => {
  return (
    <div className="group relative transform-gpu overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20">
      {/* Ribbon */}
      {badge && (
        <div className="absolute right-0 top-0 z-30 size-32 overflow-hidden rounded-tr-2xl">
          {/* We use a large width and -right offset to ensure it hits the edges perfectly */}
          <div
            className="absolute top-[28px] w-[160px] rotate-45"
            style={{ right: '-42px' }}
          >
            {/* These "Fold Shadows" create the wrap-around illusion */}
            <div
              className="absolute z-[-1] size-2 rotate-45 bg-amber-900"
              style={{ bottom: '-3px', left: '30px' }}
            />
            <div
              className="absolute z-[-1] size-2 rotate-45 bg-amber-900"
              style={{ bottom: '-3px', right: '30px' }}
            />

            <div className="relative border-y border-white/10 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 py-1.5 shadow-md">
              <div className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-amber-950/80">
                {badge}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={avatar}
          alt={`${name} - ${organization || university}`}
          className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full border-t border-white/[0.06] bg-slate-900/90 p-3 text-center backdrop-blur-md transition-transform duration-300 ease-out group-focus-within:translate-y-0 group-hover:translate-y-0">
        <h3 className="text-sm font-semibold text-white">{name}</h3>
        <p className="mt-0.5 text-xs text-gray-400">
          {organization || university}
        </p>
        <p className="text-xs text-gray-500">{position}</p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          {linkedin && <LinkedInHandle handle={linkedin} absolute={false} />}
          <GithubHandle handle={github} absolute={false} />
        </div>
      </div>
    </div>
  )
}

DevTeamCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  avatar: PropTypes.string,
  organization: PropTypes.string,
  position: PropTypes.string,
  university: PropTypes.string,
  badge: PropTypes.string,
}

export default DevTeamCard
