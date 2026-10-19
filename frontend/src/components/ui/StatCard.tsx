import type { PreparationStat } from '../../types/dashboard'

interface StatCardProps {
  stat: PreparationStat
}

export function StatCard({ stat }: StatCardProps) {
  const displayValue =
    stat.unit != null ? `${stat.value} ${stat.unit}` : String(stat.value)

  return (
    <article
      className="rounded-xl border border-border bg-surface p-5 shadow-sm"
      aria-labelledby={`stat-${stat.id}-label`}
    >
      <p
        id={`stat-${stat.id}-label`}
        className="text-sm font-medium text-text-secondary"
      >
        {stat.label}
      </p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
        {displayValue}
      </p>
      <p className="mt-2 text-xs text-text-secondary">{stat.trendLabel}</p>
    </article>
  )
}

export function StatCardSkeleton() {
  return (
    <div
      className="animate-pulse rounded-xl border border-border bg-surface p-5 shadow-sm"
      aria-hidden="true"
    >
      <div className="h-4 w-2/3 rounded bg-slate-200" />
      <div className="mt-3 h-8 w-1/3 rounded bg-slate-200" />
      <div className="mt-3 h-3 w-1/2 rounded bg-slate-100" />
    </div>
  )
}
