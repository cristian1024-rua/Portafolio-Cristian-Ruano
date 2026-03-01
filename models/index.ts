// models/index.ts — Todos los tipos del dominio

export interface Project {
  id: string
  num: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  tagColor: 'cyan' | 'blue' | 'violet' | 'emerald' | 'amber' | 'rose'
  status: 'completed' | 'in-progress' | 'private'
  statusLabel: string
  repoUrl: string | null
  liveUrl: string | null
  icon: string
  bgGradient: string
  bgPattern: string
  type: string
}

export interface Experience {
  id: string
  period: string
  role: string
  company: string
  type: string
  description: string
  achievements: string[]
  tags: string[]
}

export interface SkillCategory {
  id: string
  name: string
  icon: string
  color: 'cyan' | 'blue' | 'violet' | 'emerald' | 'amber' | 'rose'
  skills: string[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
  fork: boolean
}

export interface NavLink {
  label: string
  href: string
  num: string
}
