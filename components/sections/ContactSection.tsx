'use client'

import { useInView } from 'react-intersection-observer'
import { SectionLabel } from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { useContactForm } from '@/hooks/useContactForm'
import { Github, Linkedin, Mail, Phone, MapPin, CheckCircle, XCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

const contactLinks = [
  {
    icon: <Mail size={16} />,
    label: 'Email',
    value: 'cristian.ruano@campusucc.edu.co',
    href: 'mailto:cristian.ruano@campusucc.edu.co',
  },
  {
    icon: <Phone size={16} />,
    label: 'Teléfono',
    value: '(+57) 312 848 8436',
    href: 'tel:+573128488436',
  },
  {
    icon: <Github size={16} />,
    label: 'GitHub',
    value: 'cristian1024-rua',
    href: 'https://github.com/cristian1024-rua',
  },
  {
    icon: <Linkedin size={16} />,
    label: 'LinkedIn',
    value: 'cristian-ruano-perez',
    href: 'https://www.linkedin.com/in/cristian-ruano-perez-88631a368/',
  },
  {
    icon: <MapPin size={16} />,
    label: 'Ubicación',
    value: 'Pasto, Nariño, Colombia',
    href: null,
  },
]

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })
  const { form, state, handleChange, handleSubmit } = useContactForm()

  useEffect(() => {
    if (state.status === 'success') toast.success(state.message)
    if (state.status === 'error') toast.error(state.message)
  }, [state.status, state.message])

  return (
    <section id="contact" className="relative px-6 sm:px-10 py-24 overflow-hidden">
      <div className="blob-violet w-[500px] h-[500px] bottom-0 left-0 opacity-30" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <SectionLabel num="05">Contacto</SectionLabel>
        <h2 className="font-display font-extrabold tracking-tight leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Trabajemos <span className="gradient-text">juntos</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 mt-12">
          {/* Left info */}
          <div>
            <h3 className="font-display font-bold text-xl text-slate-200 mb-3">
              ¿Tienes un proyecto o una oportunidad?
            </h3>
            <p className="text-slate-400 leading-[1.85] mb-8 text-[15px]">
              Estoy disponible para roles fullstack, proyectos freelance o colaboraciones.
              Hablemos sobre cómo puedo aportar a tu equipo.
            </p>

            <div className="space-y-3">
              {contactLinks.map((link) => (
                <div key={link.label} className="group relative">
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-[#0d1424] border border-white/[0.06] rounded-lg hover:border-cyan-400/20 hover:bg-[#111c33] transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex-shrink-0">
                        {link.icon}
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-slate-600 tracking-widest uppercase mb-0.5">{link.label}</p>
                        <p className="text-[14px] text-slate-300 group-hover:text-cyan-400 transition-colors">{link.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-[#0d1424] border border-white/[0.06] rounded-lg">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 flex-shrink-0">
                        {link.icon}
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-slate-600 tracking-widest uppercase mb-0.5">{link.label}</p>
                        <p className="text-[14px] text-slate-400">{link.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="bg-[#0d1424] border border-white/[0.06] rounded-xl p-8">
            <p className="font-mono text-[11px] text-cyan-400 tracking-widest mb-7">
              {'// Enviar mensaje'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-[11px] text-cyan-400 tracking-widest uppercase block mb-2">
                    Nombre
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                    className="form-field"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] text-cyan-400 tracking-widest uppercase block mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="form-field"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[11px] text-cyan-400 tracking-widest uppercase block mb-2">
                  Asunto
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Oportunidad laboral / Proyecto freelance / ..."
                  required
                  className="form-field"
                />
              </div>

              <div>
                <label className="font-mono text-[11px] text-cyan-400 tracking-widest uppercase block mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre la oportunidad o el proyecto..."
                  required
                  rows={5}
                  className="form-field resize-none"
                />
              </div>

              {/* Status message */}
              {state.status === 'success' && (
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-[12px] bg-emerald-400/10 border border-emerald-400/20 rounded px-4 py-3">
                  <CheckCircle size={14} />
                  {state.message}
                </div>
              )}
              {state.status === 'error' && (
                <div className="flex items-center gap-2 text-rose-400 font-mono text-[12px] bg-rose-400/10 border border-rose-400/20 rounded px-4 py-3">
                  <XCircle size={14} />
                  {state.message}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={state.status === 'loading'}
                className="w-full justify-center"
              >
                Enviar mensaje →
              </Button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
