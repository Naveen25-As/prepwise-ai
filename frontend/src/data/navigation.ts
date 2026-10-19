import type { NavItem } from '../types/dashboard'

export const navItems: NavItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    description: 'Your preparation dashboard at a glance.',
  },
  {
    id: 'dsa',
    label: 'DSA Practice',
    description: 'Structured coding practice by topic and difficulty.',
  },
  {
    id: 'aptitude',
    label: 'Aptitude',
    description: 'Quantitative, logical, and verbal aptitude drills.',
  },
  {
    id: 'technical-interviews',
    label: 'Technical Interviews',
    description: 'Core CS concepts and common interview questions.',
  },
  {
    id: 'ai-mock-interviews',
    label: 'AI Mock Interviews',
    description: 'Simulated interviews with AI feedback (planned).',
    planned: true,
  },
  {
    id: 'roadmap',
    label: 'Learning Roadmap',
    description: 'Personalized path toward your target role.',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    description: 'Trends in practice volume, accuracy, and streaks.',
  },
  {
    id: 'settings',
    label: 'Settings',
    description: 'Profile, goals, and notification preferences.',
  },
]
