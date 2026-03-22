import PropTypes from 'prop-types'
import { FaGithubAlt } from 'react-icons/fa6'

const GithubHandle = ({ handle, absolute = true }) => {
  if (!handle) return null

  return (
    <a
      href={handle}
      target="_blank"
      rel="noreferrer"
      className={
        absolute
          ? 'absolute right-0 top-0 z-10 flex size-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2'
          : 'flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/10 transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2'
      }
      aria-label="Follow on GitHub - opens in new tab"
    >
      <FaGithubAlt className="size-5 text-white dark:text-white" aria-hidden="true" />
    </a>
  )
}

GithubHandle.propTypes = {
  handle: PropTypes.string,
  absolute: PropTypes.bool,
}

export default GithubHandle
