import { useEffect, useId, useRef, useState } from 'react'
import type { NotificationItem, StudentProfile } from '../../types/dashboard'
import { BellIcon, MenuIcon, SearchIcon } from '../icons/NavIcons'

interface HeaderProps {
  profile: StudentProfile
  notifications: NotificationItem[]
  onMenuClick: () => void
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function Header({
  profile,
  notifications,
  onMenuClick,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  const searchId = useId()
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const unread = notifications.filter((n) => !n.read).length

  useEffect(() => {
    if (!notificationsOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setNotificationsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [notificationsOpen])

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-surface/95 px-4 backdrop-blur sm:gap-4 sm:px-6">
      <button
        type="button"
        className="rounded-lg p-2 text-text-secondary hover:bg-slate-100 lg:hidden"
        aria-label="Open navigation menu"
        onClick={onMenuClick}
      >
        <MenuIcon />
      </button>

      <div className="hidden min-w-0 sm:block">
        <p className="truncate text-sm font-semibold text-text-primary">PrepWise AI</p>
        <p className="truncate text-xs text-text-secondary">Student dashboard</p>
      </div>

      <div className="relative ms-auto flex-1 sm:max-w-md">
        <label htmlFor={searchId} className="sr-only">
          Search dashboard
        </label>
        <SearchIcon className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
        <input
          id={searchId}
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search topics, tasks…"
          className="w-full rounded-lg border border-border bg-surface-muted py-2 ps-9 pe-3 text-sm text-text-primary outline-none ring-brand-500/30 placeholder:text-text-secondary focus:border-brand-500 focus:ring-2"
        />
      </div>

      <div className="relative" ref={panelRef}>
        <button
          type="button"
          className="relative rounded-lg p-2 text-text-secondary hover:bg-slate-100"
          aria-label={
            unread > 0
              ? `Notifications, ${unread} unread`
              : 'Notifications'
          }
          aria-expanded={notificationsOpen}
          aria-controls="notifications-panel"
          onClick={() => setNotificationsOpen((o) => !o)}
        >
          <BellIcon />
          {unread > 0 ? (
            <span className="absolute end-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-600 ring-2 ring-surface" />
          ) : null}
        </button>

        {notificationsOpen ? (
          <div
            id="notifications-panel"
            role="region"
            aria-label="Notifications"
            className="absolute end-0 top-full z-50 mt-2 w-80 max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-surface p-2 shadow-lg"
          >
            {notifications.length === 0 ? (
              <p className="px-3 py-4 text-sm text-text-secondary">No notifications.</p>
            ) : (
              <ul className="max-h-72 overflow-y-auto">
                {notifications.map((n) => (
                  <li
                    key={n.id}
                    className={`rounded-lg px-3 py-2.5 text-sm ${
                      n.read ? 'text-text-secondary' : 'bg-brand-50/50'
                    }`}
                  >
                    <p className="font-medium text-text-primary">{n.title}</p>
                    <p className="mt-0.5 text-text-secondary">{n.body}</p>
                    <p className="mt-1 text-xs text-text-secondary">{n.time}</p>
                  </li>
                ))}
              </ul>
            )}
            <p className="border-t border-border px-3 py-2 text-xs text-text-secondary">
              Static sample notifications (no live sync).
            </p>
          </div>
        ) : null}
      </div>

      <div
        className="flex items-center gap-3 rounded-lg border border-border bg-surface-muted px-2 py-1.5 sm:px-3"
        aria-label="Student profile"
      >
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700"
          aria-hidden="true"
        >
          {profile.avatarInitials}
        </div>
        <div className="hidden min-w-0 md:block">
          <p className="truncate text-sm font-medium text-text-primary">{profile.name}</p>
          <p className="truncate text-xs text-text-secondary">{profile.targetRole}</p>
        </div>
      </div>
    </header>
  )
}
