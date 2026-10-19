import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  as?: 'section' | 'article' | 'div'
  ariaLabel?: string
}

export function Card({
  children,
  className = '',
  as: Tag = 'section',
  ariaLabel,
}: CardProps) {
  return (
    <Tag
      className={`rounded-xl border border-border bg-surface p-5 shadow-sm ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </Tag>
  )
}

export function CardHeader({
  title,
  description,
  action,
}: {
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <header className="mb-4 flex flex-wrap items-start justify-between gap-2">
      <div>
        <h2 className="text-base font-semibold text-text-primary">{title}</h2>
        {description ? (
          <p className="mt-0.5 text-sm text-text-secondary">{description}</p>
        ) : null}
      </div>
      {action}
    </header>
  )
}
