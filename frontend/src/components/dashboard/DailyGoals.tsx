import type { DailyGoal } from '../../types/dashboard'
import { Card, CardHeader } from '../ui/Card'
import { GoalProgress } from '../ui/ProgressBar'

interface DailyGoalsProps {
  goals: DailyGoal[]
}

export function DailyGoals({ goals }: DailyGoalsProps) {
  const allComplete = goals.every((g) => g.completed >= g.target)

  return (
    <Card ariaLabel="Daily goals">
      <CardHeader
        title="Daily goals"
        description="Track today’s practice targets."
      />
      {goals.length === 0 ? (
        <p className="text-sm text-text-secondary">No goals set for today.</p>
      ) : (
        <>
          <ul className="space-y-3">
            {goals.map((goal) => (
              <GoalProgress
                key={goal.id}
                title={goal.title}
                completed={goal.completed}
                target={goal.target}
              />
            ))}
          </ul>
          {allComplete ? (
            <p className="mt-4 text-sm font-medium text-brand-700" role="status">
              All daily goals completed — great work!
            </p>
          ) : null}
        </>
      )}
    </Card>
  )
}
