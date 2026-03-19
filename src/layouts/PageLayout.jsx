import PropTypes from 'prop-types'

import Navbar from '@/components/Navbar'
import Footer from './Footer'
import ReturnToTopButton from '@/components/ui/ReturnToTopButton'
import ScrollProgress from '@/components/ui/ScrollProgress'

const PageLayout = ({ children }) => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" aria-labelledby="main-heading">
        {children}
      </main>
      <Footer />
      <ReturnToTopButton />
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
