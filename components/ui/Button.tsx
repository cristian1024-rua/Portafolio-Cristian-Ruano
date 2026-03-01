'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-mono uppercase tracking-widest rounded-sm transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary:
        'bg-gradient-to-r from-cyan-400 to-blue-400 text-[#050810] font-medium hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(34,211,238,0.3)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400 before:to-violet-400 before:opacity-0 before:transition-opacity hover:before:opacity-100',
      ghost:
        'text-slate-400 border border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5',
      outline:
        'text-cyan-400 border border-cyan-400/60 hover:bg-cyan-400 hover:text-[#050810] before:absolute before:inset-0 before:bg-cyan-400 before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300',
    }

    const sizes = {
      sm: 'text-[11px] px-4 py-2',
      md: 'text-[12px] px-6 py-3',
      lg: 'text-[13px] px-8 py-3.5',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {loading ? (
          <>
            <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span className="relative z-10">Enviando...</span>
          </>
        ) : (
          <span className="relative z-10">{children}</span>
        )}
      </button>
    )
  }
)
Button.displayName = 'Button'

export default Button
