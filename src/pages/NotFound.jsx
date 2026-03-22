import PageLayout from '@/layouts/PageLayout'
import Yoda404 from '@/components/Yoda404'
import InspirationalMural from '@/components/ui/InspirationalMural'

const NotFound = () => {
  return (
    <PageLayout>
      <div className="relative">
        <Yoda404 />

        {/* Easter Egg Section */}
        <div className="bg-iwd-black-950 py-20 text-center">
          <div className="mx-auto max-w-4xl px-6">
            <h3 className="mb-4 font-heading text-3xl font-bold text-iwd-gold-400">
              Found a glitch in the matrix, you have.
            </h3>
            <p className="mb-12 font-body text-lg text-gray-400">
              While you&apos;re here, let these voices of change inspire your
              next move. Sometimes the wrong path leads to the right
              inspiration.
            </p>
          </div>
          <InspirationalMural />
        </div>
      </div>
    </PageLayout>
  )
}

export default NotFound
