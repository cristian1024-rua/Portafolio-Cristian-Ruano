'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/skills'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 transition-all duration-300',
          scrolled
            ? 'py-3.5 bg-[#050810]/90 border-b border-cyan-400/10 backdrop-blur-xl'
            : 'bg-transparent'
        )}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          className="font-display font-extrabold text-lg tracking-tight text-slate-200 hover:text-cyan-400 transition-colors"
        >
          CR<span className="text-cyan-400">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="animated-underline font-mono text-[11px] text-slate-400 hover:text-cyan-400 tracking-widest uppercase transition-colors"
              >
                <span className="text-cyan-400 mr-1 text-[10px]">{link.num}</span>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:cristian.ruano@campusucc.edu.co"
            className="hidden md:inline-flex items-center font-mono text-[11px] tracking-widest uppercase text-cyan-400 border border-cyan-400/60 px-4 py-2 rounded-sm relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-cyan-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10 group-hover:text-[#050810] transition-colors duration-300">
              Contrátame
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menú"
            className="md:hidden w-9 h-9 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-[#050810]/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-transform duration-500',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="font-display text-3xl font-extrabold text-slate-400 hover:text-cyan-400 tracking-tight transition-colors"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <span className="text-cyan-400/60 text-base mr-2 font-mono">{link.num}</span>
            {link.label}
          </button>
        ))}
        <a
          href="mailto:cristian.ruano@campusucc.edu.co"
          className="mt-4 font-mono text-sm text-cyan-400 border border-cyan-400/40 px-6 py-3 rounded-sm"
        >
          cristian.ruano@campusucc.edu.co
        </a>
      </div>
    </>
  )
}