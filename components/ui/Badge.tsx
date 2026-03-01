import { cn, colorMap } from '@/lib/utils'

type Color = keyof typeof colorMap

interface BadgeProps {
  children: React.ReactNode
  color?: Color
  className?: string
}

export function Badge({ children, color = 'cyan', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-mono text-[11px] px-2.5 py-1 rounded-sm border transition-all duration-200',
        colorMap[color].pill,
        className
      )}
    >
      {children}
    </span>
  )
}

interface SectionLabelProps {
  num: string
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ num, children, className }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3 font-mono text-[11px] text-cyan-400 tracking-[0.15em] uppercase mb-3', className)}>
      <span>{num}</span>
      <span className="text-slate-600">—</span>
      <span>{children}</span>
      <span className="flex-1 max-w-[80px] h-px bg-gradient-to-r from-cyan-400 to-transparent" />
    </div>
  )
}
