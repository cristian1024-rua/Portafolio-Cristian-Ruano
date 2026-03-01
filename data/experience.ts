import type { Experience } from '@/models'

export const experiences: Experience[] = [
  {
    id: 'coorponarino',
    period: 'Mayo 2024 — Abril 2025',
    role: 'Software Developer',
    company: 'Coorponariño · Universidad Cooperativa de Colombia',
    type: 'Contrato prestación de servicios',
    description:
      'Desarrollo de aplicaciones web backend y fullstack en entorno de producción real, trabajando en un equipo multidisciplinario bajo metodologías ágiles.',
    achievements: [
      'Desarrollo de aplicaciones web con Spring Boot y APIs RESTful',
      'Transformaciones de datos y enrutamiento inteligente con Apache Camel',
      'Nuevas funcionalidades de frontend con React, TailwindCSS y Next.js',
      'Pruebas automatizadas de aplicaciones web con JUnit',
      'Dockerización de aplicaciones Java y bases de datos SQL',
      'Despliegue de nuevas funcionalidades en entornos de producción',
    ],
    tags: ['Spring Boot', 'Apache Camel', 'React', 'Next.js', 'TailwindCSS', 'JUnit', 'Docker', 'SQL'],
  },
  {
    id: 'ucc',
    period: '2022 — 2026',
    role: 'Desarrollador — Proyectos de Grado',
    company: 'Universidad Cooperativa de Colombia',
    type: 'Formación académica · Pasto, Nariño',
    description:
      'Participación en proyectos multidisciplinarios con entrega de productos mínimos viables funcionales, aplicando buenas prácticas de desarrollo y trabajo colaborativo.',
    achievements: [
      'Diseño e implementación de arquitecturas modulares y escalables',
      'Aplicación de metodologías ágiles: Scrum y Kanban',
      'Análisis de requisitos y modelado UML de sistemas complejos',
      'Documentación técnica en Confluence y gestión en Jira',
      'Colaboración en equipos multidisciplinarios con roles definidos',
    ],
    tags: ['Scrum', 'Kanban', 'Django', 'Unity', 'Firebase', 'Flutter', 'Jira', 'UML'],
  },
]
