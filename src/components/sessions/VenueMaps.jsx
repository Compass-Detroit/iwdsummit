import lcgrcMap from '@/assets/images/maps/lcgrcMapx800.webp'

function VenueMaps() {
  return (
    <section className="w-full py-8" aria-labelledby="venue-maps-heading">
      <div className="mx-1 mb-1 rounded-xl border-4 border-iwd-gold-500 bg-iwd-gold-100">
        <div className="scrollbar-visible overflow-x-auto overflow-y-hidden scroll-smooth">
          <img
            src={lcgrcMap}
            alt=""
            className="min-w-max rounded-2xl object-left-top"
            loading="lazy"
          />
        </div>
      </div>
      <p className="py-2 text-center text-sm text-neutral-50">
        Use the scrollbar to view the full map »
      </p>
    </section>
  )
}

export default VenueMaps
