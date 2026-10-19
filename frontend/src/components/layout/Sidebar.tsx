import { navItems } from '../../data/navigation'
import type { NavItemId } from '../../types/dashboard'
import { NavIcon } from '../icons/NavIcons'

interface SidebarProps {
  activeId: NavItemId
  onNavigate: (id: NavItemId) => void
  mobileOpen: boolean
  onCloseMobile: () => void
}

export function Sidebar({
  activeId,
  onNavigate,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  const handleSelect = (id: NavItemId) => {
    onNavigate(id)
    onCloseMobile()
  }

  const nav = (
    <nav aria-label="Main navigation">
      <ul className="space-y-0.5">
        {navItems.map((item) => {
          const isActive = item.id === activeId
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleSelect(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-text-secondary hover:bg-slate-100 hover:text-text-primary'
                }`}
              >
                <NavIcon id={item.id} />
                <span className="flex-1">{item.label}</span>
                {item.planned ? (
                  <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
                    Planned
                  </span>
                ) : null}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )

  return (
    <>
      {mobileOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
          aria-label="Close navigation menu"
          onClick={onCloseMobile}
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-surface transition-transform duration-200 lg:static lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Sidebar"
      >
        <div className="flex h-16 items-center gap-2 border-b border-border px-4">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white"
            aria-hidden="true"
          >
            PW
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary">PrepWise AI</p>
            <p className="text-xs text-text-secondary">Placement prep</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3">{nav}</div>

        <p className="border-t border-border px-4 py-3 text-xs text-text-secondary">
          Sample data only — backend not connected.
        </p>
      </aside>
    </>
  )
}
