interface ProgressBarProps {
  value: number
  max?: number
  label: string
  showPercent?: boolean
  showLabel?: boolean
  id?: string
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showPercent = true,
  showLabel = true,
  id,
}: ProgressBarProps) {
  const clamped = Math.min(max, Math.max(0, value))
  const percent = max === 0 ? 0 : Math.round((clamped / max) * 100)
  const barId = id ?? `progress-${label.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <div className="space-y-1.5">
      {showLabel || showPercent ? (
        <div className="flex items-center justify-between gap-2 text-sm">
          {showLabel ? (
            <span className="font-medium text-text-primary">{label}</span>
          ) : (
            <span className="sr-only">{label}</span>
          )}
          {showPercent ? (
            <span className="tabular-nums text-text-secondary">{percent}%</span>
          ) : null}
        </div>
      ) : (
        <span className="sr-only">{label}</span>
      )}
      <div
        className="h-2 overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-labelledby={barId}
      >
        <div
          id={barId}
          className="h-full rounded-full bg-brand-600 transition-[width] duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

export function GoalProgress({
  completed,
  target,
  title,
}: {
  completed: number
  target: number
  title: string
}) {
  const percent =
    target === 0 ? 0 : Math.min(100, Math.round((completed / target) * 100))

  return (
    <li className="space-y-2 rounded-lg border border-border bg-surface-muted/80 p-4">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium text-text-primary">{title}</p>
        <span className="shrink-0 text-xs tabular-nums text-text-secondary">
          {completed}/{target}
        </span>
      </div>
      <ProgressBar value={percent} label={title} showPercent={false} showLabel={false} />
      <p className="sr-only">
        {title}: {completed} of {target} completed, {percent} percent
      </p>
    </li>
  )
}
