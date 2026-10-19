export type NavItemId =
  | 'overview'
  | 'dsa'
  | 'aptitude'
  | 'technical-interviews'
  | 'ai-mock-interviews'
  | 'roadmap'
  | 'analytics'
  | 'settings'

export interface NavItem {
  id: NavItemId
  label: string
  description: string
  planned?: boolean
}

export interface StudentProfile {
  name: string
  program: string
  targetRole: string
  avatarInitials: string
}

export interface PreparationStat {
  id: string
  label: string
  value: number
  unit?: string
  trendLabel: string
}

export interface DailyGoal {
  id: string
  title: string
  target: number
  completed: number
  unit: string
}

export interface TopicProgress {
  id: string
  name: string
  percent: number
  problemsDone: number
  problemsTotal: number
}

export interface UpcomingTask {
  id: string
  title: string
  dueLabel: string
  category: string
}

export interface RecommendedActivity {
  id: string
  title: string
  description: string
  actionLabel: string
  navTarget: NavItemId
  variant: 'primary' | 'secondary'
}

export interface NotificationItem {
  id: string
  title: string
  body: string
  time: string
  read: boolean
}

export interface DashboardData {
  profile: StudentProfile
  preparationSummary: string
  continueLearning: {
    moduleTitle: string
    lessonTitle: string
    progressPercent: number
  }
  stats: PreparationStat[]
  dailyGoals: DailyGoal[]
  dsaTopics: TopicProgress[]
  technicalSubjects: TopicProgress[]
  upcomingTasks: UpcomingTask[]
  recommendedActivities: RecommendedActivity[]
  notifications: NotificationItem[]
}
