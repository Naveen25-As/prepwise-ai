import type { NavItemId, RecommendedActivity } from '../../types/dashboard'
import { Card, CardHeader } from '../ui/Card'

interface RecommendedActivitiesProps {
  activities: RecommendedActivity[]
  onNavigate: (id: NavItemId) => void
}

export function RecommendedActivities({
  activities,
  onNavigate,
}: RecommendedActivitiesProps) {
  return (
    <Card ariaLabel="Recommended activities">
      <CardHeader
        title="Recommended for you"
        description="Quick actions based on your sample progress data."
      />
      {activities.length === 0 ? (
        <p className="text-sm text-text-secondary">
          Recommendations will appear once you start practising.
        </p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="flex flex-col rounded-lg border border-border p-4"
            >
              <h3 className="text-sm font-semibold text-text-primary">{activity.title}</h3>
              <p className="mt-1 flex-1 text-sm text-text-secondary">
                {activity.description}
              </p>
              <button
                type="button"
                onClick={() => onNavigate(activity.navTarget)}
                className={`mt-4 w-full rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                  activity.variant === 'primary'
                    ? 'bg-brand-600 text-white hover:bg-brand-700'
                    : 'border border-border bg-surface text-text-primary hover:bg-slate-50'
                }`}
              >
                {activity.actionLabel}
              </button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
