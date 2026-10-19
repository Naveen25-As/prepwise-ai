import type { TopicProgress, UpcomingTask } from '../../types/dashboard'
import { Card, CardHeader } from '../ui/Card'
import { ProgressBar } from '../ui/ProgressBar'

interface LearningProgressProps {
  dsaTopics: TopicProgress[]
  technicalSubjects: TopicProgress[]
  upcomingTasks: UpcomingTask[]
}

function TopicList({ topics, headingId }: { topics: TopicProgress[]; headingId: string }) {
  if (topics.length === 0) {
    return <p className="text-sm text-text-secondary">No topics to show yet.</p>
  }

  return (
    <ul className="space-y-4" aria-labelledby={headingId}>
      {topics.map((topic) => (
        <li key={topic.id}>
          <ProgressBar value={topic.percent} label={topic.name} />
          <p className="mt-1 text-xs text-text-secondary">
            {topic.problemsDone} of {topic.problemsTotal} items completed
          </p>
        </li>
      ))}
    </ul>
  )
}

export function LearningProgress({
  dsaTopics,
  technicalSubjects,
  upcomingTasks,
}: LearningProgressProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2" ariaLabel="Learning progress">
        <CardHeader
          title="Learning progress"
          description="Topic coverage across DSA and core subjects."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 id="dsa-progress-heading" className="mb-3 text-sm font-semibold text-text-primary">
              DSA topics
            </h3>
            <TopicList topics={dsaTopics} headingId="dsa-progress-heading" />
          </div>
          <div>
            <h3
              id="tech-progress-heading"
              className="mb-3 text-sm font-semibold text-text-primary"
            >
              Technical subjects
            </h3>
            <TopicList topics={technicalSubjects} headingId="tech-progress-heading" />
          </div>
        </div>
      </Card>

      <Card ariaLabel="Upcoming learning tasks">
        <CardHeader title="Upcoming tasks" description="What to tackle next." />
        {upcomingTasks.length === 0 ? (
          <p className="text-sm text-text-secondary">No upcoming tasks scheduled.</p>
        ) : (
          <ul className="space-y-3">
            {upcomingTasks.map((task) => (
              <li
                key={task.id}
                className="rounded-lg border border-border bg-surface-muted/60 px-3 py-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium text-text-primary">{task.title}</p>
                  <span className="shrink-0 rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-text-secondary">
                    {task.category}
                  </span>
                </div>
                <p className="mt-1 text-xs text-text-secondary">{task.dueLabel}</p>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}
