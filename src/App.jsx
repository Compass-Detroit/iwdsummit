import { lazy, Suspense } from 'react'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'

import Home from '@/pages/Home'
import ThemeProvider from '@/components/ui/ThemeContext'
import ScheduleProvider from '@/components/ui/ScheduleContext'

const CareersHub = lazy(() => import('@/pages/CareersHub'))
const ConnectionsPage = lazy(() => import('@/pages/Connections'))
const MediaPage = lazy(() => import('@/pages/Media'))
const PreviousEvents = lazy(() => import('@/pages/PreviousEvents'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const PlaygroundPage = lazy(() => import('@/pages/PlaygroundPage'))

function App() {
  return (
    <ThemeProvider>
      <ScheduleProvider>
        <Router>
          <div role="document">
            {/* Skip Link - First element for accessibility; hidden until Tab focus */}
            <a className="skip-link" href="#main-content">
              Skip to main content
            </a>
            <Suspense
              fallback={
                <div
                  className="flex min-h-screen items-center justify-center"
                  aria-live="polite"
                  aria-busy="true"
                >
                  <span className="text-lg text-gray-400">Loading…</span>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/careers-hub" element={<CareersHub />} />
                <Route path="/connections" element={<ConnectionsPage />} />
                <Route path="/media" element={<MediaPage />} />
                <Route path="/past-events" element={<PreviousEvents />} />
                <Route
                  path="/previous-events"
                  element={<Navigate to="/past-events" replace />}
                />
                <Route path="/playground/*" element={<PlaygroundPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </ScheduleProvider>
    </ThemeProvider>
  )
}

export default App
