import type { ProblemStats } from '../../types/dsa'

interface DSAStatsProps {
  stats: ProblemStats
}

export function DSAStats({ stats }: DSAStatsProps) {
  return (
    <section aria-label="Problem statistics" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <article className="rounded-xl border border-border bg-surface p-4 shadow-sm">
        <p className="text-sm font-medium text-text-secondary">Total Problems</p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-text-primary">
          {stats.total}
        </p>
      </article>

      <article className="rounded-xl border border-border bg-surface p-4 shadow-sm">
        <p className="text-sm font-medium text-text-secondary">Solved</p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-green-600">
          {stats.solved}
        </p>
      </article>

      <article className="rounded-xl border border-border bg-surface p-4 shadow-sm">
        <p className="text-sm font-medium text-text-secondary">Unsolved</p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-amber-600">
          {stats.unsolved}
        </p>
      </article>

      <article className="rounded-xl border border-border bg-surface p-4 shadow-sm">
        <p className="text-sm font-medium text-text-secondary">Completion</p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-brand-600">
          {stats.completionPercentage}%
        </p>
      </article>
    </section>
  )
}
