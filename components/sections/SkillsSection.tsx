'use client'

import { useInView } from 'react-intersection-observer'
import { SectionLabel } from '@/components/ui/Badge'
import { skillCategories } from '@/data/skills'
import { colorMap } from '@/lib/utils'

export default function SkillsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="skills" className="relative px-6 sm:px-10 py-24 overflow-hidden">
      <div className="blob-cyan w-[500px] h-[500px] -top-20 -right-20 opacity-25" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <SectionLabel num="03">Skills</SectionLabel>
        <h2 className="font-display font-extrabold tracking-tight leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Stack técnico &amp; <span className="gradient-text">herramientas</span>
        </h2>
        <p className="text-slate-500 max-w-xl mb-14 text-[15px] leading-[1.8]">
          Tecnologías que domino para construir soluciones completas de extremo a extremo.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => {
            const colors = colorMap[cat.color]
            return (
              <div
                key={cat.id}
                className="relative bg-[#0d1424] border border-white/[0.06] rounded-xl p-6 overflow-hidden group hover:border-white/[0.14] hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${colors.line} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-mono border ${colors.icon}`}>
                    {cat.icon}
                  </div>
                  <span className="font-display font-bold text-[15px] text-slate-200">{cat.name}</span>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-pill-item font-mono text-[11px] px-2.5 py-1 rounded-sm border cursor-default transition-all duration-200 ${colors.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
