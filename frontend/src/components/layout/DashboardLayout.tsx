import type { ReactNode } from 'react'
import type { DashboardData, NavItemId } from '../../types/dashboard'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

interface DashboardLayoutProps {
  children: ReactNode
  activeNav: NavItemId
  onNavigate: (id: NavItemId) => void
  data: DashboardData
  mobileNavOpen: boolean
  onMobileNavOpen: () => void
  onMobileNavClose: () => void
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function DashboardLayout({
  children,
  activeNav,
  onNavigate,
  data,
  mobileNavOpen,
  onMobileNavOpen,
  onMobileNavClose,
  searchQuery,
  onSearchChange,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-svh bg-surface-muted">
      <Sidebar
        activeId={activeNav}
        onNavigate={onNavigate}
        mobileOpen={mobileNavOpen}
        onCloseMobile={onMobileNavClose}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          profile={data.profile}
          notifications={data.notifications}
          onMenuClick={onMobileNavOpen}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
        <main className="flex-1 p-4 sm:p-6" id="main-content">
          {children}
        </main>
      </div>
    </div>
  )
}
