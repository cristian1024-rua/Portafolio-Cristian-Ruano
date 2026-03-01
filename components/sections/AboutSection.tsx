'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { SectionLabel } from '@/components/ui/Badge'
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react'

const stats = [
  { num: 1, suffix: '+', label: 'Año de experiencia' },
  { num: 5, suffix: '+', label: 'Proyectos' },
  { num: 10, suffix: '+', label: 'Tecnologías' },
  { num: 2026, suffix: '', label: 'Graduación' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (!inView) return
    const steps = target > 100 ? 30 : target
    const duration = 1500
    const step = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current++
      setCount(target > 100 ? Math.round((target / steps) * current) : current)
      if (current >= steps) { setCount(target); clearInterval(timer) }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="block font-display text-3xl font-extrabold gradient-text">
      {count}{suffix}
    </span>
  )
}

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative px-6 sm:px-10 py-24 overflow-hidden">
      <div className="blob-blue w-[400px] h-[400px] bottom-0 right-0 opacity-30" />

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionLabel num="01">Sobre mí</SectionLabel>
        <h2
          className="font-display font-extrabold tracking-tight leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Quién soy &amp; <span className="gradient-text">qué construyo</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 mt-12">

          {/* ── Text ── */}
          <div className="space-y-5">
            <p className="text-slate-400 leading-[1.9]">
            Soy <span className="text-slate-200 font-medium">Ingeniero de Software</span> en
            último semestre, apasionado por construir soluciones web robustas y bien
            estructuradas, tanto en el frontend como en el backend.
          </p>

            <p className="text-slate-400 leading-[1.9]">
            Tengo experiencia trabajando con{' '}
            <span className="text-slate-200">Spring Boot, React, Next.js, Django y Docker</span>{' '}
            en proyectos reales, aplicando buenas prácticas como arquitectura modular,
            diseño de <span className="text-slate-200">APIs RESTful</span> y pruebas de software.
          </p>

            <p className="text-slate-400 leading-[1.9]">
            Me motiva integrarme a un equipo donde pueda{' '}
            <span className="text-violet-400">aportar valor, seguir creciendo</span>{' '}
            y enfrentar desafíos técnicos reales como ingeniero profesional.
          </p>

            {/* Contact mini-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                { icon: <Mail size={14} />, label: 'Email', value: 'cristian.ruano@campusucc.edu.co', href: 'mailto:cristian.ruano@campusucc.edu.co' },
                { icon: <Phone size={14} />, label: 'Teléfono', value: '(+57) 312 848 8436', href: 'tel:+573128488436' },
                { icon: <MapPin size={14} />, label: 'Ubicación', value: 'Pasto, Nariño, Colombia', href: null },
                { icon: <GraduationCap size={14} />, label: 'Universidad', value: 'UCC — Último semestre', href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-3.5 bg-white/[0.03] border border-white/[0.06] rounded-lg">
                  <div className="w-7 h-7 flex items-center justify-center rounded-md bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-slate-600 tracking-wider uppercase mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[13px] text-slate-300 hover:text-cyan-400 transition-colors break-all">{item.value}</a>
                    ) : (
                      <p className="text-[13px] text-slate-300">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Stats + Education ── */}
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-0.5 rounded-lg overflow-hidden border border-white/5">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#0d1424] p-6 hover:bg-[#111c33] transition-colors">
                  <Counter target={s.num} suffix={s.suffix} />
                  <span className="font-mono text-[10px] text-slate-600 tracking-widest uppercase mt-1 block">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative bg-[#0d1424] border border-white/[0.06] rounded-xl p-6 overflow-hidden group hover:border-cyan-400/20 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-200 mb-1">Ingeniería de Software</h3>
                  <p className="font-mono text-[12px] text-blue-400 mb-1">Universidad Cooperativa de Colombia</p>
                  <p className="text-[13px] text-slate-500">Pasto, Nariño · Último semestre · Graduación 2026</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}