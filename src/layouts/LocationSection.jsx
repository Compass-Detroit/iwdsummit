import { FaMapPin, FaClock } from 'react-icons/fa6'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

function LocationSection() {
  return (
    <section
      id="location"
      className="relative flex h-auto items-center justify-center bg-iwd-neutral-100 py-16 text-black md:py-28 dark:bg-iwd-neutral-700 dark:text-white"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col space-y-8 px-4 sm:px-6 lg:px-8">
        {/* When Section */}
        <div className="flex justify-center">
          <div className="flex items-center">
            <div className="mx-2 flex size-11 shrink-0 items-center justify-center rounded-full bg-iwd-gold-600">
              <FaClock
                className="size-6 shrink-0 text-white"
                aria-hidden="true"
              />
            </div>
            <h2
              id="location-heading"
              className="font-biorhyme text-5xl text-iwd-neutral-900 md:text-5xl lg:text-6xl dark:text-iwd-neutral-50"
            >
              When & Where
            </h2>
          </div>
        </div>
        <div className="flex justify-center pb-8">
          <div className="text-center">
            <div className="mt-2 space-y-1">
              <p className="block text-xl font-semibold">
                Date &amp; Time — Coming Soon
              </p>
              <p className="text-lg text-gray-500">
                March 2026 &middot; Detroit, MI
              </p>
            </div>
          </div>
        </div>

        {/* Venue TBD */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center">
            <div className="mx-2 flex size-11 shrink-0 items-center justify-center rounded-full bg-iwd-gold-600">
              <FaMapPin
                className="size-6 shrink-0 text-white"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-3xl font-semibold">Venue — To Be Announced</h3>
          </div>
          <p className="mt-2 max-w-xl text-lg text-gray-500">
            We&apos;re finalizing the perfect space for IWD Innovation Summit
            2026. Check back soon for venue details, directions, and parking
            information.
          </p>
        </div>

        <div className="relative">
          <SectionSkipLink href="#schedule">
            Skip location section
          </SectionSkipLink>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
