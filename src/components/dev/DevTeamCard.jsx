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
}) => {
  return (
    <div className="group relative transform-gpu overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={avatar}
          alt={`${name} - ${organization || university}`}
          className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 translate-y-full border-t border-white/[0.06] bg-iwd-black-950/90 px-3 py-3 text-center backdrop-blur-md transition-transform duration-300 ease-out group-focus-within:translate-y-0 group-hover:translate-y-0">
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
  github: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
}

export default DevTeamCard
