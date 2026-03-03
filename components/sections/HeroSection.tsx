'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react'
import Button from '@/components/ui/Button'
import Image from 'next/image'

const rotatingTexts = ['Disponible para trabajar', 'Open to opportunities', 'Fullstack Engineer']

export default function HeroSection() {
  const [textIdx, setTextIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setTextIdx(i => (i + 1) % rotatingTexts.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 sm:px-10 pt-24 pb-16 overflow-hidden"
    >
      {[25, 50, 75].map((pct, i) => (
        <div key={pct} className="absolute top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none"
          style={{ left: `${pct}%`, animationDelay: `${i * 0.5}s` }} />
      ))}

      <div className="blob-cyan w-[600px] h-[600px] -top-32 -left-40 opacity-40" />
      <div className="blob-violet w-[500px] h-[500px] top-40 -right-32 opacity-30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* 
          MOBILE:  flex-col — texto primero, foto debajo centrada
          DESKTOP: grid 2 columnas — texto izq, foto der
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">

          {/* ── LEFT: Texto ── */}
          <div className="w-full">
            <div
              className="inline-flex items-center gap-2.5 font-mono text-[11px] text-cyan-400 border border-cyan-400/30 px-3.5 py-1.5 rounded-sm mb-6 bg-cyan-400/5"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-dot" />
              {rotatingTexts[textIdx]}
            </div>

            <h1
              className="font-display font-extrabold tracking-tight leading-[0.92] mb-4"
              style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)' }}
            >
              <span className="block text-slate-100">Cristian</span>
              <span className="block gradient-text">Ruano</span>
            </h1>

            <p className="font-mono text-sm text-slate-400 mb-6 tracking-wide whitespace-nowrap">
              Ingeniero de Software
              <span className="mx-2 text-slate-700">&middot;</span>
              <span className="text-violet-400">Fullstack Developer</span>
              <span className="mx-2 text-slate-700">&middot;</span>
              Next.js &middot; Django &middot; Spring Boot
            </p>

            <p className="text-slate-400 text-base leading-[1.85] max-w-[500px] mb-8">
              Ingeniero de Software en &uacute;ltimo semestre con{' '}
              <span className="text-slate-200 font-medium">experiencia real</span> en
              desarrollo fullstack, APIs RESTful, arquitectura modular y despliegue en
              producci&oacute;n. Apasionado por construir productos de{' '}
              <span className="text-cyan-400">software con precisi&oacute;n e impacto</span>.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Button variant="primary" size="lg" onClick={() => scrollTo('#projects')}>
                Ver proyectos &rarr;
              </Button>
              <Button variant="ghost" size="lg" onClick={() => scrollTo('#contact')}>
                Hablemos
              </Button>
              <a
                href="/cv.pdf"
                download="CV_Cristian_Ruano.pdf"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Download size={13} />
                Descargar CV
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://github.com/cristian1024-rua"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-[11px] text-slate-500 hover:text-cyan-400 transition-colors tracking-wide"
              >
                <Github size={14} /> GitHub
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a
                href="https://www.linkedin.com/in/cristian-ruano-perez-88631a368/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-[11px] text-slate-500 hover:text-cyan-400 transition-colors tracking-wide"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          {/* ── RIGHT: Foto + tarjeta de código ──
              Mobile:  centrado horizontalmente, margin-top para separar del texto
              Desktop: alineado a la derecha
          */}
          <div className="flex flex-col items-center lg:items-end gap-6 mt-14 lg:mt-0 w-full">

            {/* Foto */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-400/10 to-violet-400/20 blur-xl scale-110" />
              <div className="relative p-0.5 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-400 to-violet-400">
                <div className="relative w-[220px] h-[280px] lg:w-[256px] lg:h-[320px] rounded-[14px] overflow-hidden bg-[#0d1424]">
                  {!imgError ? (
                    <Image
                      src="/Fotoportafolio.png"
                      alt="Cristian Giovanny Ruano"
                      fill
                      className="object-cover object-top"
                      priority
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl font-display font-extrabold gradient-text select-none">
                      CR
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-[#0d1424] border border-white/10 rounded-lg px-3 py-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-slate-300">Open to work</span>
              </div>

              <div className="absolute -top-3 -left-4 bg-[#0d1424] border border-white/10 rounded-lg px-3 py-2">
                <span className="font-mono text-[10px] text-cyan-400">{'<Fullstack />'}</span>
              </div>
            </div>

            {/* Tarjeta código — mismo ancho que la foto */}
            <div className="animate-float bg-[#0d1424] border border-white/10 rounded-xl p-5 w-[220px] lg:w-[256px]">
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="font-mono text-[11px] space-y-0.5 leading-5">
                <p className="text-slate-600">{'// cristian.config.ts'}</p>
                <p>&nbsp;</p>
                <p><span className="text-violet-400">export const </span><span className="text-blue-400">dev</span><span className="text-slate-300"> = {'{'}</span></p>
                <p className="pl-3"><span className="text-slate-400">name: </span><span className="text-emerald-400">&quot;Cristian Ruano&quot;</span><span className="text-slate-300">,</span></p>
                <p className="pl-3"><span className="text-slate-400">stack: </span><span className="text-cyan-400">[&quot;Next.js&quot;,</span></p>
                <p className="pl-8"><span className="text-cyan-400">&quot;Django&quot;,</span></p>
                <p className="pl-8"><span className="text-cyan-400">&quot;Spring Boot&quot;],</span></p>
                <p className="pl-3"><span className="text-slate-400">available: </span><span className="text-amber-400">true</span><span className="text-slate-300">,</span></p>
                <p><span className="text-slate-300">{'}'}</span></p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-10 flex items-center gap-3 font-mono text-[11px] text-slate-600 hover:text-cyan-400 transition-colors tracking-widest"
      >
        <div className="h-px bg-gradient-to-r from-cyan-400 to-transparent animate-scroll-line" style={{ width: '48px' }} />
        <span>Scroll</span>
        <ArrowDown size={12} className="animate-bounce" />
      </button>
    </section>
  )
}