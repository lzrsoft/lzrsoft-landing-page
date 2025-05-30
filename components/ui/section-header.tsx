interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ badge, title, subtitle, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
          {badge}
        </div>
      )}
      <div className="space-y-2">
        {subtitle && <p className="text-sm font-medium text-primary uppercase tracking-wider">{subtitle}</p>}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  )
}
