import { useEffect, useState } from 'react'
import { loadDashboardData } from './data/dashboardData'
import { DashboardLayout } from './components/layout/DashboardLayout'
import { DashboardError, DashboardLoading } from './components/pages/DashboardLoading'
import { OverviewPage } from './components/pages/OverviewPage'
import { PlaceholderPage } from './components/pages/PlaceholderPage'
import type { DashboardData, NavItemId } from './types/dashboard'

function App() {
  const [activeNav, setActiveNav] = useState<NavItemId>('overview')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [loadKey, setLoadKey] = useState(0)

  useEffect(() => {
    let cancelled = false

    loadDashboardData()
      .then((result) => {
        if (!cancelled) {
          setData(result)
          setLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(true)
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [loadKey])

  const handleRetry = () => {
    setError(false)
    setLoading(true)
    setData(null)
    setLoadKey((k) => k + 1)
  }

  const handleNavigate = (id: NavItemId) => {
    setActiveNav(id)
    setSearchQuery('')
  }

  if (error) {
    return (
      <div className="flex min-h-svh items-center justify-center p-6">
        <DashboardError onRetry={handleRetry} />
      </div>
    )
  }

  if (loading || !data) {
    return (
      <div className="min-h-svh bg-surface-muted p-4 sm:p-6">
        <DashboardLoading />
      </div>
    )
  }

  return (
    <DashboardLayout
      activeNav={activeNav}
      onNavigate={handleNavigate}
      data={data}
      mobileNavOpen={mobileNavOpen}
      onMobileNavOpen={() => setMobileNavOpen(true)}
      onMobileNavClose={() => setMobileNavOpen(false)}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
    >
      {activeNav === 'overview' ? (
        <OverviewPage
          data={data}
          loading={false}
          searchQuery={searchQuery}
          onNavigate={handleNavigate}
        />
      ) : (
        <PlaceholderPage navId={activeNav} onBackToOverview={() => handleNavigate('overview')} />
      )}
    </DashboardLayout>
  )
}

export default App
