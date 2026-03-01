# 🚀 Portfolio — Cristian Giovanny Ruano

Portafolio profesional construido con **Next.js 14**, **TypeScript strict**, **TailwindCSS** y **Framer Motion**.

## 🛠 Tech Stack

- **Next.js 14** — App Router, Server Components, API Routes
- **TypeScript** — tipado estricto en todo el proyecto
- **TailwindCSS** — utilidades + custom design tokens
- **Framer Motion** — animaciones fluidas
- **Resend** — envío de emails reales desde el formulario de contacto
- **React Intersection Observer** — scroll reveal animations
- **Lucide React** — iconos

## 📁 Estructura del Proyecto

```
portfolio-cristian/
├── app/
│   ├── layout.tsx           # Root layout: fonts, metadata, ThemeProvider
│   ├── page.tsx             # Página principal — ensambla todas las secciones
│   ├── globals.css          # Estilos globales + custom utilities
│   └── api/
│       └── contact/
│           └── route.ts     # API Route: POST /api/contact (envío de email)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navegación responsive con dark/light mode
│   │   ├── Footer.tsx       # Footer con links sociales
│   │   ├── CustomCursor.tsx # Cursor personalizado animado
│   │   └── ParticleCanvas.tsx # Red de partículas en el fondo
│   ├── sections/
│   │   ├── HeroSection.tsx  # Presentación, foto, código flotante
│   │   ├── AboutSection.tsx # Sobre mí + stats animados
│   │   ├── ExperienceSection.tsx # Timeline de experiencia
│   │   ├── SkillsSection.tsx     # Grid de habilidades por categoría
│   │   ├── ProjectsSection.tsx   # Cards de proyectos
│   │   └── ContactSection.tsx    # Formulario de contacto funcional
│   └── ui/
│       ├── Button.tsx       # Botón reutilizable con variantes
│       └── Badge.tsx        # Badge, SectionLabel
│
├── context/
│   └── ThemeContext.tsx     # Dark/Light mode + persistencia en localStorage
├── data/
│   ├── projects.ts          # Datos de proyectos
│   ├── experience.ts        # Datos de experiencia laboral
│   └── skills.ts            # Skills + nav links
├── hooks/
│   ├── useContactForm.ts    # Lógica del formulario de contacto
│   └── useScrollReveal.ts   # Hook de scroll reveal
├── lib/
│   └── utils.ts             # cn(), colorMap
├── models/
│   └── index.ts             # Todos los tipos TypeScript
└── public/
    ├── foto.jpg             # ← PON TU FOTO AQUÍ
    └── cv.pdf               # ← PON TU CV EN PDF AQUÍ
```

## ⚡ Inicio Rápido

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar variables de entorno
```bash
cp .env.local.example .env.local
```

Edita `.env.local`:
```env
# Obtén tu API key gratis en https://resend.com (plan gratuito: 100 emails/mes)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email donde recibirás los mensajes
CONTACT_EMAIL=cristian.ruano@campusucc.edu.co
```

> ⚠️ Si no configuras `RESEND_API_KEY`, el formulario funciona en modo desarrollo (muestra el mensaje en consola pero no envía email real).

### 3. Agregar tu foto y CV
- Coloca tu foto como `public/foto.jpg` (recomendado: 400x400px, formato cuadrado)
- Coloca tu CV como `public/cv.pdf`

### 4. Correr en desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

### 5. Build de producción
```bash
npm run build
npm start
```

## 🌍 Deploy en Vercel

1. Crea cuenta en [vercel.com](https://vercel.com)
2. Instala Vercel CLI: `npm i -g vercel`
3. En la raíz del proyecto: `vercel`
4. Sigue las instrucciones del CLI
5. En el dashboard de Vercel, ve a **Settings → Environment Variables** y agrega:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`

O simplemente conecta tu repositorio de GitHub a Vercel para deploy automático en cada push.

## 📧 Configurar Email Real (Resend)

1. Ve a [resend.com](https://resend.com) y crea una cuenta gratuita
2. Ve a **API Keys** → **Create API Key**
3. Copia la key y ponla en `.env.local` como `RESEND_API_KEY`
4. El plan gratuito permite **100 emails/mes** — más que suficiente para un portafolio

## 🎨 Personalización

### Actualizar tus datos
- **Proyectos**: edita `data/projects.ts`
- **Experiencia**: edita `data/experience.ts`
- **Skills**: edita `data/skills.ts`
- **Info personal**: los datos están en los componentes de sección

### Cambiar colores principales
En `tailwind.config.ts` y `app/globals.css` están definidos todos los colores del tema.

### Agregar nuevas secciones
1. Crea el componente en `components/sections/`
2. Agrega el tipo en `models/index.ts` si es necesario
3. Agrega los datos en `data/`
4. Importa y usa en `app/page.tsx`

## 🔧 Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm start        # Servidor de producción
npm run lint     # ESLint
```

---

**Cristian Giovanny Ruano** · [GitHub](https://github.com/cristian1024-rua) · [LinkedIn](https://www.linkedin.com/in/cristian-ruano-perez-88631a368/)
