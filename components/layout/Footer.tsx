import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-display font-extrabold text-slate-600">
        CR<span className="text-cyan-400">.</span>
      </span>

      <p className="font-mono text-[11px] text-slate-600 tracking-wide text-center">
        © 2026 · Cristian Giovanny Ruano · Diseñado &amp; construido con ♥
      </p>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/cristian1024-rua"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-600 hover:text-cyan-400 transition-colors"
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-ruano-perez-88631a368/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-slate-600 hover:text-cyan-400 transition-colors"
        >
          <Linkedin size={16} />
        </a>
        <a
          href="mailto:cristian.ruano@campusucc.edu.co"
          aria-label="Email"
          className="text-slate-600 hover:text-cyan-400 transition-colors"
        >
          <Mail size={16} />
        </a>
      </div>
    </footer>
  )
}
