import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const colorMap = {
  cyan: {
    pill: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5 hover:bg-cyan-400/10',
    icon: 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400',
    glow: 'shadow-cyan-400/20',
    dot: 'bg-cyan-400',
    line: 'from-cyan-400',
    badge: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
  },
  blue: {
    pill: 'text-blue-400 border-blue-400/30 bg-blue-400/5 hover:bg-blue-400/10',
    icon: 'bg-blue-400/10 border-blue-400/20 text-blue-400',
    glow: 'shadow-blue-400/20',
    dot: 'bg-blue-400',
    line: 'from-blue-400',
    badge: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
  },
  violet: {
    pill: 'text-violet-400 border-violet-400/30 bg-violet-400/5 hover:bg-violet-400/10',
    icon: 'bg-violet-400/10 border-violet-400/20 text-violet-400',
    glow: 'shadow-violet-400/20',
    dot: 'bg-violet-400',
    line: 'from-violet-400',
    badge: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
  },
  emerald: {
    pill: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5 hover:bg-emerald-400/10',
    icon: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400',
    glow: 'shadow-emerald-400/20',
    dot: 'bg-emerald-400',
    line: 'from-emerald-400',
    badge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  },
  amber: {
    pill: 'text-amber-400 border-amber-400/30 bg-amber-400/5 hover:bg-amber-400/10',
    icon: 'bg-amber-400/10 border-amber-400/20 text-amber-400',
    glow: 'shadow-amber-400/20',
    dot: 'bg-amber-400',
    line: 'from-amber-400',
    badge: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
  },
  rose: {
    pill: 'text-rose-400 border-rose-400/30 bg-rose-400/5 hover:bg-rose-400/10',
    icon: 'bg-rose-400/10 border-rose-400/20 text-rose-400',
    glow: 'shadow-rose-400/20',
    dot: 'bg-rose-400',
    line: 'from-rose-400',
    badge: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
  },
} as const
