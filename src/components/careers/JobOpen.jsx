import { FaBriefcase } from 'react-icons/fa6'

function JobOpen() {
  return (
    <section
      id="job-openings"
      className="relative flex flex-col justify-center bg-iwd-black-950 px-6 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      {/* Background glow overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute right-1/4 top-1/2 size-[300px] -translate-y-1/2 rounded-full bg-[rgb(var(--iwd-accent-500)/0.1)] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex size-14 items-center justify-center rounded-2xl border border-iwd-gold-400/20 bg-iwd-gold-400/10 shadow-inner">
            <FaBriefcase className="size-6 text-iwd-gold-400" />
          </div>
        </div>
        <h2 className="mb-6 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Job{' '}
          <span className="bg-gradient-to-r from-iwd-gold-300 via-iwd-gold-400 to-iwd-gold-300 bg-clip-text text-transparent">
            Openings
          </span>
        </h2>

        <p className="mt-4 text-center text-lg leading-relaxed text-gray-300">
          Looking for your next big opportunity or hiring top talent? We&apos;ve
          partnered with industry leaders to bring you exclusive{' '}
          <strong>job opportunities</strong>. Members can submit job openings to
          share with the community. Review our current openings below.
        </p>

        <div className="mt-10">
          <button className="inline-flex items-center gap-2 rounded-full border border-iwd-gold-400/30 bg-iwd-gold-400/10 px-8 py-3.5 font-semibold text-iwd-gold-300 transition-colors hover:bg-iwd-gold-400/20 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--iwd-accent-500)/0.12)] focus:ring-offset-2 focus:ring-offset-black">
            Submit a Job Opening
          </button>
        </div>
      </div>
    </section>
  )
}

export default JobOpen
