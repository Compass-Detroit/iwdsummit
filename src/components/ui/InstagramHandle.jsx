import PropTypes from 'prop-types'

import { FaInstagram } from 'react-icons/fa6'

const InstagramHandle = ({ handle, absolute = true }) => (
  <a
    href={handle}
    target="_blank"
    rel="noreferrer"
    className={
      absolute
        ? 'absolute right-0 top-0 z-10 flex size-[34px] -translate-x-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm'
        : 'flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/10 transition-colors hover:bg-white/20'
    }
    aria-label="Follow on Instagram - opens in new tab"
  >
    <FaInstagram className="size-5 text-white" />
  </a>
)

InstagramHandle.propTypes = {
  handle: PropTypes.string.isRequired,
  absolute: PropTypes.bool,
}

export default InstagramHandle
