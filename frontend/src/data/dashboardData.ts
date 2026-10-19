import type { DashboardData } from '../types/dashboard'

export const dashboardSampleData: DashboardData = {
  profile: {
    name: 'Priya Sharma',
    program: 'B.Tech CSE · 3rd Year',
    targetRole: 'SDE Intern',
    avatarInitials: 'PS',
  },
  preparationSummary:
    'You are on track for your SDE intern goal. Focus on arrays and dynamic programming this week, and keep your daily streak alive.',
  continueLearning: {
    moduleTitle: 'Data Structures & Algorithms',
    lessonTitle: 'Sliding Window — Medium Problems',
    progressPercent: 62,
  },
  stats: [
    {
      id: 'dsa-solved',
      label: 'DSA problems solved',
      value: 128,
      trendLabel: '+12 this week',
    },
    {
      id: 'aptitude-tests',
      label: 'Aptitude tests completed',
      value: 24,
      trendLabel: '+3 this week',
    },
    {
      id: 'interview-practice',
      label: 'Interview questions practised',
      value: 86,
      trendLabel: '+8 this week',
    },
    {
      id: 'streak',
      label: 'Current learning streak',
      value: 14,
      unit: 'days',
      trendLabel: 'Personal best: 21 days',
    },
  ],
  dailyGoals: [
    {
      id: 'coding',
      title: 'Solve coding problems',
      target: 3,
      completed: 2,
      unit: 'problems',
    },
    {
      id: 'aptitude',
      title: 'Practise aptitude questions',
      target: 20,
      completed: 14,
      unit: 'questions',
    },
    {
      id: 'review',
      title: 'Review technical concepts',
      target: 1,
      completed: 0,
      unit: 'session',
    },
  ],
  dsaTopics: [
    {
      id: 'arrays',
      name: 'Arrays & Strings',
      percent: 78,
      problemsDone: 39,
      problemsTotal: 50,
    },
    {
      id: 'trees',
      name: 'Trees & Graphs',
      percent: 45,
      problemsDone: 18,
      problemsTotal: 40,
    },
    {
      id: 'dp',
      name: 'Dynamic Programming',
      percent: 32,
      problemsDone: 8,
      problemsTotal: 25,
    },
  ],
  technicalSubjects: [
    {
      id: 'os',
      name: 'Operating Systems',
      percent: 60,
      problemsDone: 12,
      problemsTotal: 20,
    },
    {
      id: 'dbms',
      name: 'DBMS',
      percent: 55,
      problemsDone: 11,
      problemsTotal: 20,
    },
    {
      id: 'networks',
      name: 'Computer Networks',
      percent: 40,
      problemsDone: 8,
      problemsTotal: 20,
    },
  ],
  upcomingTasks: [
    {
      id: 'task-1',
      title: 'Complete sliding window problem set',
      dueLabel: 'Due today',
      category: 'DSA',
    },
    {
      id: 'task-2',
      title: 'Timed aptitude mock (30 min)',
      dueLabel: 'Due tomorrow',
      category: 'Aptitude',
    },
    {
      id: 'task-3',
      title: 'Revise process scheduling notes',
      dueLabel: 'This week',
      category: 'OS',
    },
  ],
  recommendedActivities: [
    {
      id: 'rec-1',
      title: 'Continue learning module',
      description: 'Pick up where you left off in Sliding Window.',
      actionLabel: 'Continue module',
      navTarget: 'dsa',
      variant: 'primary',
    },
    {
      id: 'rec-2',
      title: 'Practise a coding problem',
      description: 'Try “Longest Substring Without Repeating Characters” (Medium).',
      actionLabel: 'Open DSA practice',
      navTarget: 'dsa',
      variant: 'secondary',
    },
    {
      id: 'rec-3',
      title: 'Take an aptitude quiz',
      description: '15-question mixed set — percentages and ratios.',
      actionLabel: 'Start quiz',
      navTarget: 'aptitude',
      variant: 'secondary',
    },
    {
      id: 'rec-4',
      title: 'Review interview questions',
      description: 'Top 10 OS questions for campus placements.',
      actionLabel: 'Browse questions',
      navTarget: 'technical-interviews',
      variant: 'secondary',
    },
  ],
  notifications: [
    {
      id: 'n1',
      title: 'Daily goal reminder',
      body: 'You have 1 coding problem left to hit today’s target.',
      time: '2h ago',
      read: false,
    },
    {
      id: 'n2',
      title: 'Roadmap update',
      body: 'New DBMS revision tasks were added to your roadmap.',
      time: 'Yesterday',
      read: true,
    },
    {
      id: 'n3',
      title: 'Streak milestone',
      body: '14-day streak — keep it going!',
      time: '2 days ago',
      read: true,
    },
  ],
}

/** Simulates a future API fetch; data is local sample only. */
export function loadDashboardData(): Promise<DashboardData> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(dashboardSampleData), 400)
  })
}
