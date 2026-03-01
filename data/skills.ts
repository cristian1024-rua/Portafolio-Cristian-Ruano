import type { SkillCategory } from '@/models'

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Lenguajes',
    icon: '{ }',
    color: 'cyan',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C#', 'Dart'],
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Librerías',
    icon: '⚡',
    color: 'blue',
    skills: ['Next.js', 'React', 'Django', 'Spring Boot', 'Apache Camel', 'Flutter', 'TailwindCSS', 'Unity'],
  },
  {
    id: 'databases',
    name: 'Bases de Datos',
    icon: '🗄',
    color: 'violet',
    skills: ['PostgreSQL', 'MySQL', 'Firebase', 'SQL Relacional'],
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    icon: '🛠',
    color: 'emerald',
    skills: ['Docker', 'Git', 'GitHub', 'AWS', 'Vercel', 'JUnit'],
  },
  {
    id: 'methodologies',
    name: 'Metodologías',
    icon: '📋',
    color: 'amber',
    skills: ['Scrum', 'Kanban', 'Jira', 'Confluence', 'Trello', 'Notion', 'ClickUp'],
  },
  {
    id: 'architecture',
    name: 'Arquitectura & Patrones',
    icon: '🏗',
    color: 'rose',
    skills: ['APIs RESTful', 'Arquitectura Modular', 'MVC', 'Clean Code', 'SOLID', 'UML'],
  },
]

export const navLinks = [
  { num: '01', label: 'Sobre mí', href: '#about' },
  { num: '02', label: 'Experiencia', href: '#experience' },
  { num: '03', label: 'Skills', href: '#skills' },
  { num: '04', label: 'Proyectos', href: '#projects' },
  { num: '05', label: 'Contacto', href: '#contact' },
]
