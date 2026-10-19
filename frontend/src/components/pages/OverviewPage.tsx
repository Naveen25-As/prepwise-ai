import type { DashboardData, NavItemId } from '../../types/dashboard'
import { DailyGoals } from '../dashboard/DailyGoals'
import { LearningProgress } from '../dashboard/LearningProgress'
import { RecommendedActivities } from '../dashboard/RecommendedActivities'
import { StatsGrid } from '../dashboard/StatsGrid'
import { WelcomeSection } from '../dashboard/WelcomeSection'

interface OverviewPageProps {
  data: DashboardData
  loading: boolean
  searchQuery: string
  onNavigate: (id: NavItemId) => void
}

function matchesSearch(text: string, query: string) {
  if (!query.trim()) return true
  return text.toLowerCase().includes(query.trim().toLowerCase())
}

export function OverviewPage({
  data,
  loading,
  searchQuery,
  onNavigate,
}: OverviewPageProps) {
  const q = searchQuery.trim()
  const filteredRecommendations = data.recommendedActivities.filter(
    (a) => matchesSearch(a.title, q) || matchesSearch(a.description, q),
  )
  const filteredTasks = data.upcomingTasks.filter(
    (t) => matchesSearch(t.title, q) || matchesSearch(t.category, q),
  )

  const showSearchEmpty = q.length > 0 && filteredRecommendations.length === 0 && filteredTasks.length === 0

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <WelcomeSection
        profile={data.profile}
        summary={data.preparationSummary}
        continueLearning={data.continueLearning}
        onContinueLearning={() => onNavigate('dsa')}
      />

      {showSearchEmpty ? (
        <div
          className="rounded-lg border border-dashed border-border bg-surface px-4 py-8 text-center"
          role="status"
        >
          <p className="font-medium text-text-primary">No matching items on Overview</p>
          <p className="mt-1 text-sm text-text-secondary">
            Try another keyword or open a section from the sidebar.
          </p>
        </div>
      ) : null}

      <StatsGrid stats={data.stats} loading={loading} />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-1">
          <DailyGoals goals={data.dailyGoals} />
        </div>
        <div className="xl:col-span-2">
          <RecommendedActivities
            activities={filteredRecommendations}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      <LearningProgress
        dsaTopics={data.dsaTopics}
        technicalSubjects={data.technicalSubjects}
        upcomingTasks={filteredTasks.length > 0 || !q ? (q ? filteredTasks : data.upcomingTasks) : []}
      />
    </div>
  )
}
