import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        body: ['var(--font-instrument)', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#050810',
          2: '#080d1a',
        },
        surface: {
          DEFAULT: '#0d1424',
          2: '#111c33',
        },
        cyan: { DEFAULT: '#22d3ee', dim: 'rgba(34,211,238,0.15)' },
        blue: { DEFAULT: '#60a5fa', dim: 'rgba(96,165,250,0.15)' },
        violet: { DEFAULT: '#a78bfa', dim: 'rgba(167,139,250,0.15)' },
        emerald: { DEFAULT: '#34d399', dim: 'rgba(52,211,153,0.15)' },
        amber: { DEFAULT: '#fbbf24', dim: 'rgba(251,191,36,0.15)' },
        rose: { DEFAULT: '#fb7185', dim: 'rgba(251,113,133,0.15)' },
        text: {
          DEFAULT: '#e2e8f0',
          2: '#94a3b8',
          3: '#475569',
        },
        border: {
          DEFAULT: 'rgba(96,165,250,0.12)',
          bright: 'rgba(96,165,250,0.35)',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'blob': 'blob 10s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
        'spin-slow': 'spin 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(20px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-15px, 15px) scale(0.97)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(34,211,238,0.3)' },
          to: { boxShadow: '0 0 40px rgba(34,211,238,0.6), 0 0 80px rgba(34,211,238,0.2)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}

export default config
