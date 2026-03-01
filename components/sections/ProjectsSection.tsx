'use client'

import { useInView } from 'react-intersection-observer'
import { SectionLabel } from '@/components/ui/Badge'
import { projects } from '@/data/projects'
import { colorMap } from '@/lib/utils'
import { Github, ExternalLink, Lock } from 'lucide-react'
import type { Project } from '@/models'

const patternClasses: Record<string, string> = {
  grid: 'bg-grid-pattern',
  dots: 'bg-dots-pattern',
  lines: 'bg-lines-pattern',
  circuit: 'bg-circuit-pattern',
}

const statusConfig = {
  completed: { label: 'Completado', class: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30' },
  'in-progress': { label: 'En desarrollo', class: 'text-amber-400 bg-amber-400/10 border-amber-400/30' },
  private: { label: 'Privado', class: 'text-slate-400 bg-slate-400/10 border-slate-400/30' },
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const colors = colorMap[project.tagColor]
  const status = statusConfig[project.status]

  return (
    <div
      ref={ref}
      className={`project-card group bg-[#0d1424] border border-white/[0.06] rounded-xl overflow-hidden
        hover:border-white/[0.16] hover:-translate-y-2 hover:shadow-[0_32px_64px_rgba(0,0,0,0.5)]
        transition-all duration-400 cursor-default
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transition: `all 0.5s ease ${delay}ms` }}
    >
      {/* Header */}
      <div className={`relative h-44 bg-gradient-to-br ${project.bgGradient} overflow-hidden`}>
        <div className={`absolute inset-0 ${patternClasses[project.bgPattern] ?? ''} group-hover:scale-105 transition-transform duration-500`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm border border-white/10 ${colors.icon}`}>
            {project.icon}
          </div>
          <span className={`font-mono text-[10px] tracking-widest uppercase ${colors.badge ?? 'text-slate-500'}`}>
            {project.type}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="font-mono text-[10px] text-slate-600 tracking-widest mb-1">
              Proyecto {project.num}
            </p>
            <h3 className="font-display font-bold text-[17px] text-slate-100 leading-[1.3]">
              {project.title}
            </h3>
          </div>
          <span className={`flex-shrink-0 font-mono text-[10px] px-2 py-1 rounded-sm border tracking-wide ${status.class}`}>
            {project.statusLabel}
          </span>
        </div>

        <p className="text-slate-500 text-[13.5px] leading-[1.75] mb-5">
          {project.longDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-tech">{tag}</span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <Github size={13} />
              Repositorio
            </a>
          ) : (
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-700">
              <Lock size={13} />
              Privado
            </span>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <ExternalLink size={13} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="relative px-6 sm:px-10 py-24 bg-[#080d1a]/50">
      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <SectionLabel num="04">Proyectos</SectionLabel>
        <h2 className="font-display font-extrabold tracking-tight leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Proyectos <span className="gradient-text">destacados</span>
        </h2>
        <p className="text-slate-500 max-w-xl mb-14 text-[15px] leading-[1.8]">
          Proyectos que muestran mi capacidad para diseñar, desarrollar y entregar soluciones de software funcionales y escalables.
        </p>

        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} delay={idx * 80} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/cristian1024-rua"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-mono text-[12px] text-slate-500 hover:text-cyan-400 transition-colors tracking-wide border border-white/10 hover:border-cyan-400/30 px-6 py-3 rounded-sm"
          >
            <Github size={14} />
            Ver todos los repositorios en GitHub
          </a>
        </div>

      </div>
    </section>
  )
}
