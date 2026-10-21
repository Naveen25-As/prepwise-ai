import { useState, useMemo } from 'react'
import { sampleDSAProblems, getUniqueTopics, getUniqueDifficulties } from '../../data/dsaProblems'
import { loadProgress, updateProblemStatus } from '../../utils/dsaStorage'
import type { Problem, ProblemFilters, ProblemStats, ProblemStatus } from '../../types/dsa'
import { DSAStats } from './DSAStats'
import { Card, CardHeader } from '../ui/Card'

export function DSAPage() {
  const progress = loadProgress()
  const initialProblems = sampleDSAProblems.map((p) => ({
    ...p,
    status: progress?.[p.id] ?? 'unsolved',
  }))

  const [problems, setProblems] = useState<Problem[]>(initialProblems)
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null)
  const [filters, setFilters] = useState<ProblemFilters>({
    topic: 'All',
    difficulty: 'All',
    status: 'All',
    searchQuery: '',
  })

  // Calculate statistics
  const stats: ProblemStats = useMemo(() => {
    const total = problems.length
    const solved = problems.filter((p) => p.status === 'solved').length
    const unsolved = total - solved
    const completionPercentage = total > 0 ? Math.round((solved / total) * 100) : 0

    return { total, solved, unsolved, completionPercentage }
  }, [problems])

  // Get unique filter options
  const topics = useMemo(() => ['All', ...getUniqueTopics(sampleDSAProblems)], [])
  const difficulties = useMemo(
    () => ['All', ...getUniqueDifficulties(sampleDSAProblems)],
    []
  )
  const statuses = ['All', 'Solved', 'Unsolved']

  // Filter problems
  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const matchesTopic =
        filters.topic === 'All' || problem.topic === filters.topic
      const matchesDifficulty =
        filters.difficulty === 'All' || problem.difficulty === filters.difficulty
      const matchesStatus =
        filters.status === 'All' ||
        (filters.status === 'Solved' && problem.status === 'solved') ||
        (filters.status === 'Unsolved' && problem.status === 'unsolved')
      const matchesSearch =
        filters.searchQuery === '' ||
        problem.title.toLowerCase().includes(filters.searchQuery.toLowerCase())

      return matchesTopic && matchesDifficulty && matchesStatus && matchesSearch
    })
  }, [problems, filters])

  // Handle filter changes
  const handleFilterChange = (key: keyof ProblemFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  // Handle status toggle
  const handleStatusToggle = (problemId: string, currentStatus: ProblemStatus) => {
    const newStatus: ProblemStatus = currentStatus === 'solved' ? 'unsolved' : 'solved'
    updateProblemStatus(problemId, newStatus)

    setProblems((prev) =>
      prev.map((p) => (p.id === problemId ? { ...p, status: newStatus } : p))
    )
  }

  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800'
      case 'Medium':
        return 'bg-amber-100 text-amber-800'
      case 'Hard':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-slate-100 text-slate-800'
    }
  }

  // Render problem list
  const renderProblemList = () => {
    if (filteredProblems.length === 0) {
      return (
        <div className="rounded-xl border border-border bg-surface p-8 text-center">
          <p className="text-sm text-text-secondary">
            No problems match your current filters. Try adjusting your search or filter settings.
          </p>
        </div>
      )
    }

    return (
      <section aria-label="Problem list" className="space-y-3">
        {filteredProblems.map((problem) => (
          <article
            key={problem.id}
            className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-text-primary">
                    {problem.title}
                  </h3>
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-semibold ${getDifficultyColor(
                      problem.difficulty
                    )}`}
                  >
                    {problem.difficulty}
                  </span>
                  {problem.status === 'solved' && (
                    <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                      Solved
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-text-secondary">{problem.topic}</p>
                <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                  {problem.description}
                </p>
                <p className="mt-2 text-xs text-text-secondary">
                  Estimated time: {problem.estimatedTime}
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setSelectedProblem(problem)}
                  className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                >
                  View Details
                </button>
                <button
                  type="button"
                  onClick={() => handleStatusToggle(problem.id, problem.status)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    problem.status === 'solved'
                      ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                      : 'bg-green-100 text-green-800 hover:bg-green-200'
                  }`}
                >
                  {problem.status === 'solved' ? 'Mark Unsolved' : 'Mark Solved'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    )
  }

  // Render problem details modal
  const renderProblemDetails = () => {
    if (!selectedProblem) return null

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="problem-details-title"
      >
        <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <CardHeader
            title={selectedProblem.title}
            action={
              <button
                type="button"
                onClick={() => setSelectedProblem(null)}
                className="rounded-lg p-2 text-text-secondary hover:bg-slate-100"
                aria-label="Close details"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            }
          />
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span
                className={`rounded px-2 py-1 text-sm font-semibold ${getDifficultyColor(
                  selectedProblem.difficulty
                )}`}
              >
                {selectedProblem.difficulty}
              </span>
              <span className="rounded bg-slate-100 px-2 py-1 text-sm font-semibold text-slate-800">
                {selectedProblem.topic}
              </span>
              <span className="rounded bg-blue-100 px-2 py-1 text-sm font-semibold text-blue-800">
                {selectedProblem.estimatedTime}
              </span>
              {selectedProblem.status === 'solved' && (
                <span className="rounded bg-green-100 px-2 py-1 text-sm font-semibold text-green-800">
                  Solved
                </span>
              )}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">Description</h3>
              <p className="mt-2 text-sm text-text-secondary">
                {selectedProblem.description}
              </p>
            </div>
            <div className="rounded-lg bg-surface-muted p-4">
              <p className="text-sm text-text-secondary">
                <strong>Note:</strong> This is a sample problem description. In a full
                implementation, this would include complete problem statements, examples,
                constraints, and test cases. Code execution is not currently available.
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => handleStatusToggle(selectedProblem.id, selectedProblem.status)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  selectedProblem.status === 'solved'
                    ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}
              >
                {selectedProblem.status === 'solved' ? 'Mark Unsolved' : 'Mark Solved'}
              </button>
              <button
                type="button"
                onClick={() => setSelectedProblem(null)}
                className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
              >
                Close
              </button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-text-primary">DSA Practice</h1>
        <p className="mt-1 text-sm text-text-secondary">
          Practice data structures and algorithms problems organized by topic and difficulty.
        </p>
      </header>

      <DSAStats stats={stats} />

      <Card>
        <CardHeader title="Filters" />
        <div className="space-y-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-text-primary">
              Search by title
            </label>
            <input
              id="search"
              type="text"
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
              placeholder="Search problems..."
              className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="topic-filter" className="block text-sm font-medium text-text-primary">
                Topic
              </label>
              <select
                id="topic-filter"
                value={filters.topic}
                onChange={(e) => handleFilterChange('topic', e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-primary focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              >
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="difficulty-filter" className="block text-sm font-medium text-text-primary">
                Difficulty
              </label>
              <select
                id="difficulty-filter"
                value={filters.difficulty}
                onChange={(e) => handleFilterChange('difficulty', e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-primary focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="status-filter" className="block text-sm font-medium text-text-primary">
                Status
              </label>
              <select
                id="status-filter"
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-primary focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-text-primary">
          Problems ({filteredProblems.length})
        </h2>
        {renderProblemList()}
      </div>

      {renderProblemDetails()}
    </div>
  )
}
