import PropTypes from 'prop-types'
import { FaClock } from 'react-icons/fa6'

const NoSessionsAvailable = ({ currentSession }) => {
  return (
    <li className="w-full">
      <div className="rounded-xl border-2 border-dashed border-white/20 bg-iwd-surface-raised dark:bg-iwd-black-950 p-8 text-center shadow-md md:p-12">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-primary-900 p-4">
            <FaClock className="size-12 text-white" aria-hidden="true" />
          </div>
        </div>
        <h3 className="mb-2 text-4xl font-bold text-white">Coming Soon!</h3>
        <p className="mb-4 text-lg text-gray-200">
          Watch for updates on {currentSession} sessions
        </p>
        <p className="text-sm font-bold text-gray-200">
          We&apos;re working hard to bring you exciting content. Stay tuned for
          announcements!
        </p>
      </div>
    </li>
  )
}

NoSessionsAvailable.propTypes = {
  currentSession: PropTypes.string.isRequired,
}

export default NoSessionsAvailable
