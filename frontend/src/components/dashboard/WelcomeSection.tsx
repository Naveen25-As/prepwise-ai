import type { DashboardData } from '../../types/dashboard'
import { ProgressBar } from '../ui/ProgressBar'

interface WelcomeSectionProps {
  profile: DashboardData['profile']
  summary: string
  continueLearning: DashboardData['continueLearning']
  onContinueLearning: () => void
}

export function WelcomeSection({
  profile,
  summary,
  continueLearning,
  onContinueLearning,
}: WelcomeSectionProps) {
  return (
    <section
      className="rounded-xl border border-border bg-gradient-to-br from-brand-50 via-surface to-surface p-6 shadow-sm sm:p-8"
      aria-labelledby="welcome-heading"
    >
      <p className="text-sm font-medium text-brand-700">Welcome back</p>
      <h1 id="welcome-heading" className="mt-1 text-2xl font-semibold text-text-primary sm:text-3xl">
        {profile.name.split(' ')[0]}, ready for today&apos;s prep?
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
        {summary}
      </p>

      <div className="mt-6 flex flex-col gap-4 rounded-lg border border-border/80 bg-surface/80 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
            Continue learning
          </p>
          <p className="mt-1 font-medium text-text-primary">{continueLearning.moduleTitle}</p>
          <p className="text-sm text-text-secondary">{continueLearning.lessonTitle}</p>
          <div className="mt-3 max-w-md">
            <ProgressBar
              value={continueLearning.progressPercent}
              label="Module progress"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onContinueLearning}
          className="shrink-0 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          Continue learning
        </button>
      </div>
    </section>
  )
}
