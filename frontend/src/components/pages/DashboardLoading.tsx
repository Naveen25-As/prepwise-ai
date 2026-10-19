import { StatCardSkeleton } from '../ui/StatCard'

export function DashboardLoading() {
  return (
    <div className="mx-auto max-w-7xl space-y-6" aria-live="polite" aria-busy="true">
      <p className="sr-only">Loading dashboard data</p>
      <div className="animate-pulse rounded-xl border border-border bg-surface p-8">
        <div className="h-4 w-32 rounded bg-slate-200" />
        <div className="mt-3 h-8 w-2/3 max-w-md rounded bg-slate-200" />
        <div className="mt-4 h-16 max-w-2xl rounded bg-slate-100" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }, (_, i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}

export function DashboardError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="mx-auto max-w-lg rounded-xl border border-red-200 bg-red-50 p-8 text-center">
      <h1 className="text-lg font-semibold text-red-900">Could not load dashboard</h1>
      <p className="mt-2 text-sm text-red-800">
        Sample data failed to load. This is local-only data — no server was contacted.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-6 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Try again
      </button>
    </div>
  )
}
