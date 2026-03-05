import CTAButton from '@/components/ui/CTAButton'
import { FaTicket } from 'react-icons/fa6'

function LandingSection() {
  return (
    <section id="landing" className="relative mt-16 bg-iwd-black-950">
      {/* Background gradient placeholder — replace with IWD hero image when available */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-iwd-gold-950 via-iwd-black-950 to-iwd-green-950 opacity-90"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col lg:flex-row">
        <div className="relative z-10 my-12 flex w-full flex-col items-center justify-center gap-4 px-4 xs:mt-28 sm:p-12 lg:my-0 lg:w-1/2 lg:border-r-4 lg:border-dotted lg:border-iwd-gold-200/50">
          {/* TODO: Replace with IWD 2026 logo/artwork when available */}
          <h1 className="text-center font-biorhyme text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            International Women&apos;s Day
          </h1>
          <p className="text-center font-montserrat text-2xl font-light tracking-widest text-iwd-gold-300 sm:text-3xl">
            Innovation Summit 2026
          </p>
        </div>

        <div className="relative z-10 flex w-full flex-col justify-between bg-iwd-black-950/70 lg:w-1/2">
          <div className="flex grow flex-col items-center justify-center space-y-8 px-16 py-20 opacity-100 lg:mt-14">
            <h2 className="font-biorhyme text-5xl text-iwd-gold-200">
              March 2026
            </h2>

            <p className="prose-2xl text-iwd-gold-50">
              Compass Detroit in partnership with GDG Detroit, Women Techmakers,
              and community partners are hosting a day of learning, building,
              connecting, and empowering women and allies in Detroit&apos;s tech
              ecosystem.
            </p>
            <p className="prose-2xl text-iwd-gold-50">
              Whether you&apos;re a seasoned professional, an ambitious
              innovator, a learner, a leader, or a creative — this is your
              space to inspire, connect, and grow.
            </p>
            <div className="flex flex-row gap-8">
              <CTAButton
                href="#membership"
                label="STAY UPDATED"
                icon={<FaTicket />}
                ariaLabel="Stay updated on the IWD Innovation Summit 2026"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingSection
