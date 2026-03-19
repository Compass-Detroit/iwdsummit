import PageLayout from '@/layouts/PageLayout'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import AboutSection from '@/layouts/AboutSection'
import AttendeeSection from '@/layouts/AttendeeSection'
import BreakPatternSection from '@/layouts/BreakPatternSection'
import InspirationalMural from '@/components/ui/InspirationalMural'
import PastEventsSection from '@/layouts/PastEventsSection'
import SEOStructuredData from '@/components/ui/SEOStructuredData'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'
import PartnersSection from '@/layouts/PartnersSection'
import JobBoardSection from '@/layouts/JobBoardSection'
import OrganizersSection from '@/layouts/OrganizersSection'
import { SpeakersData as Speakers2026 } from '@/data/2026/speakers'
import { partnersData } from '@/data/2026/partners'

function Home() {
  const currentYear = new Date().getFullYear()
  return (
    <PageLayout>
      <SEOStructuredData speakersData={Speakers2026} />
      <h1 id="main-heading" className="sr-only">
        International Women&apos;s Day Innovation Summit {currentYear}
      </h1>

      <LandingSection />

      <div className="relative z-10 space-y-32 bg-iwd-black-950 py-20">
        <LocationSection />

        <div id="schedule">
          <SessionsSection
            speakersData={Speakers2026}
            year={2026}
            tracks={[
              'Build with AI',
              'Innovation',
              'Level Up',
              'Leadership',
              'AI Foundations',
              'Careers',
              'Breakout Sessions',
              'Map',
            ]}
          />
        </div>

        <div id="speakers">
          <SpeakersSection speakersData={Speakers2026} />
        </div>

        <div id="about">
          <AboutSection />
        </div>

        <AttendeeSection />
        <BreakPatternSection />
        <PastEventsSection />
        <InspirationalMural />

        <div id="jobboard">
          <JobBoardSection />
        </div>

        <div id="partners">
          <PartnersSection partnersData={partnersData} year={currentYear} />
        </div>

        <div id="team">
          <OrganizersSection />
        </div>
      </div>
    </PageLayout>
  )
}

export default Home
