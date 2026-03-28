const TrackEmptyState = () => {
  return (
    <div className="col-span-1 my-4 flex flex-col items-center justify-center space-y-8 text-center text-lg leading-relaxed dark:text-gray-400">
      <p>
        We are currently looking for speakers and will update the list of
        sessions once we have more information. If you are interested in
        speaking, reach out to us.
      </p>
      <a
        href="#membership"
        aria-label="Contact us about speaking at IWD Innovation Summit 2026"
        className="flex items-center rounded-lg border border-iwd-gold-400/30 bg-iwd-gold-400/10 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-iwd-gold-300 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:border-iwd-gold-400/50 hover:bg-iwd-gold-400/20 hover:shadow-xl hover:shadow-iwd-gold-500/10 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 light:hover:border-iwd-gold-400/30 light:hover:bg-iwd-gold-400/5 light:hover:shadow-lg light:hover:shadow-iwd-gold-500/50 light:hover:ring-2"
      >
        CONTACT US TO SPEAK
      </a>
    </div>
  )
}

export default TrackEmptyState
