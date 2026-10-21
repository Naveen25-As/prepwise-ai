import type { ProblemProgress, ProblemStatus } from '../types/dsa'

const STORAGE_KEY = 'prepwise_dsa_progress'

/**
 * Load problem progress from localStorage.
 * Returns null if storage is empty or data is invalid.
 */
export function loadProgress(): ProblemProgress | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null

    const parsed = JSON.parse(stored)
    if (typeof parsed !== 'object' || parsed === null) return null

    return parsed as ProblemProgress
  } catch {
    return null
  }
}

/**
 * Save problem progress to localStorage.
 */
export function saveProgress(progress: ProblemProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // Silently fail if localStorage is not available
  }
}

/**
 * Get the status of a specific problem.
 * Returns 'unsolved' if no status is stored.
 */
export function getProblemStatus(problemId: string): ProblemStatus {
  const progress = loadProgress()
  return progress?.[problemId] ?? 'unsolved'
}

/**
 * Update the status of a specific problem.
 */
export function updateProblemStatus(problemId: string, status: ProblemStatus): void {
  const progress = loadProgress() || {}
  progress[problemId] = status
  saveProgress(progress)
}

/**
 * Clear all problem progress from localStorage.
 */
export function clearProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Silently fail if localStorage is not available
  }
}
