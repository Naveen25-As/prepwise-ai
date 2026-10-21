export type ProblemDifficulty = 'Easy' | 'Medium' | 'Hard'
export type ProblemStatus = 'solved' | 'unsolved'

export interface Problem {
  id: string
  title: string
  topic: string
  difficulty: ProblemDifficulty
  estimatedTime: string
  status: ProblemStatus
  description: string
}

export interface ProblemFilters {
  topic: string
  difficulty: string
  status: string
  searchQuery: string
}

export interface ProblemStats {
  total: number
  solved: number
  unsolved: number
  completionPercentage: number
}

export interface ProblemProgress {
  [problemId: string]: ProblemStatus
}
