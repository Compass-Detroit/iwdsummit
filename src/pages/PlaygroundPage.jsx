import { memo } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import CompassDetroitLogo from '@/components/ui/CompassDetroitLogo'

// Import all sections for individual playground pages
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import AboutSection from '@/layouts/AboutSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'
import OrganizersSection from '@/layouts/OrganizersSection'
import PartnersSection from '@/layouts/PartnersSection'
import InspirationalMural from '@/components/ui/InspirationalMural'
import BreakPatternSection from '@/layouts/BreakPatternSection'

// Data imports for sections
import { partnersData } from '@/data/2026/partners'
import { SpeakersData as Speakers2026 } from '@/data/2026/speakers'

const PlaygroundNav = memo(() => {
  const location = useLocation()
  const links = [
    { to: '/playground/hero', label: 'Hero' },
    { to: '/playground/location', label: 'Location' },
    { to: '/playground/about', label: 'About' },
    { to: '/playground/break-pattern', label: 'Pattern' },
    { to: '/playground/mural', label: 'Mural' },
    { to: '/playground/schedule', label: 'Schedule' },
    { to: '/playground/speakers', label: 'Speakers' },
    { to: '/playground/team', label: 'Team' },
    { to: '/playground/partners', label: 'Partners' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-iwd-black-950/80 p-4 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8">
        <Link
          to="/playground"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <CompassDetroitLogo className="h-10" />
        </Link>
        <div className="scrollbar-hide flex flex-1 items-center gap-4 overflow-x-auto pb-1">
          {links.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                  isActive
                    ? 'bg-iwd-gold-400 text-iwd-black-950 shadow-lg shadow-iwd-gold-500/20'
                    : 'text-white/40 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
})

PlaygroundNav.displayName = 'PlaygroundNav'

export default function PlaygroundPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-iwd-black-950 text-white">
      <PlaygroundNav />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center justify-center py-32 text-center">
                <h1 className="font-heading text-6xl font-black">Playground</h1>
                <p className="mt-4 text-white/40">
                  Select a section to preview its modernized individual layout.
                </p>
              </div>
            }
          />
          <Route path="hero" element={<LandingSection />} />
          <Route path="location" element={<LocationSection />} />
          <Route path="about" element={<AboutSection />} />
          <Route path="break-pattern" element={<BreakPatternSection />} />
          <Route path="mural" element={<InspirationalMural />} />
          <Route
            path="schedule"
            element={
              <SessionsSection
                year={currentYear}
                speakersData={Speakers2026}
                tracks={[
                  'Build with AI',
                  'Innovation',
                  'Level Up',
                  'Leadership',
                  'AI Foundations',
                  'Careers',
                  'Breakout Sessions',
                ]}
              />
            }
          />
          <Route
            path="speakers"
            element={
              <SpeakersSection year={currentYear} speakersData={Speakers2026} />
            }
          />
          <Route path="team" element={<OrganizersSection />} />
          <Route
            path="partners"
            element={
              <PartnersSection year={currentYear} partnersData={partnersData} />
            }
          />
        </Routes>
      </main>
    </div>
  )
}
