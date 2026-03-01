'use client'

import { useInView } from 'react-intersection-observer'
import { SectionLabel } from '@/components/ui/Badge'
import { experiences } from '@/data/experience'

export default function ExperienceSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="experience" className="relative px-6 sm:px-10 py-24 bg-[#080d1a]/50">
      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <SectionLabel num="02">Experiencia</SectionLabel>
        <h2 className="font-display font-extrabold tracking-tight leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Trayectoria <span className="gradient-text">profesional</span>
        </h2>
        <p className="text-slate-500 max-w-xl mb-14 text-[15px] leading-[1.8]">
          Cada rol ha contribuido a construir mi visión como ingeniero fullstack con foco en calidad de código y arquitectura sólida.
        </p>

        {/* Timeline */}
        <div className="relative pl-10 max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-violet-400 to-transparent" />

          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative mb-14 last:mb-0"
              style={{ transitionDelay: `${idx * 100}ms` }}>
              {/* Timeline dot */}
              <div className="timeline-dot" />

              <span className="font-mono text-[11px] text-cyan-400 tracking-widest block mb-2">
                {exp.period}
              </span>
              <h3 className="font-display font-bold text-xl text-slate-100 mb-1">{exp.role}</h3>
              <p className="font-mono text-[13px] text-blue-400 mb-1">{exp.company}</p>
              <p className="font-mono text-[11px] text-slate-600 mb-4 tracking-wide">{exp.type}</p>
              <p className="text-slate-400 text-[15px] leading-[1.8] mb-5">{exp.description}</p>

              {/* Achievements */}
              <ul className="space-y-2 mb-5">
                {exp.achievements.map((ach) => (
                  <li key={ach} className="flex items-start gap-3 text-[14px] text-slate-400">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">▸</span>
                    {ach}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag-tech">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
