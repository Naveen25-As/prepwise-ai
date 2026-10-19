import { navItems } from '../../data/navigation'
import type { NavItemId } from '../../types/dashboard'
import { NavIcon } from '../icons/NavIcons'

interface PlaceholderPageProps {
  navId: NavItemId
  onBackToOverview: () => void
}

export function PlaceholderPage({ navId, onBackToOverview }: PlaceholderPageProps) {
  const item = navItems.find((n) => n.id === navId)
  const title = item?.label ?? 'Section'
  const description = item?.description ?? ''
  const isAiPlanned = navId === 'ai-mock-interviews'

  return (
    <div className="mx-auto max-w-2xl">
      <article className="rounded-xl border border-border bg-surface p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <NavIcon id={navId} className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-xl font-semibold text-text-primary">{title}</h1>
            {item?.planned ? (
              <span className="mt-1 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-900">
                Planned feature
              </span>
            ) : (
              <span className="mt-1 inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-text-secondary">
                Coming in a future release
              </span>
            )}
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-text-secondary">{description}</p>

        {isAiPlanned ? (
          <div
            className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950"
            role="note"
          >
            <p className="font-semibold">AI mock interviews are not implemented yet.</p>
            <p className="mt-1">
              This area will connect to your FastAPI backend and AI services in a later phase.
              There is no simulated AI chat or scoring on this dashboard.
            </p>
          </div>
        ) : (
          <p className="mt-6 text-sm text-text-secondary">
            This frontend preview uses sample data only. Full practice flows, persistence, and
            authentication will arrive when the backend and database are integrated.
          </p>
        )}

        <button
          type="button"
          onClick={onBackToOverview}
          className="mt-8 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-semibold text-text-primary hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          Back to Overview
        </button>
      </article>
    </div>
  )
}
