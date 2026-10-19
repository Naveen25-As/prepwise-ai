import type { PreparationStat } from '../../types/dashboard'
import { StatCard, StatCardSkeleton } from '../ui/StatCard'

interface StatsGridProps {
  stats: PreparationStat[]
  loading?: boolean
}

export function StatsGrid({ stats, loading }: StatsGridProps) {
  return (
    <section aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        Preparation statistics
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }, (_, i) => <StatCardSkeleton key={i} />)
          : stats.map((stat) => <StatCard key={stat.id} stat={stat} />)}
      </div>
    </section>
  )
}
