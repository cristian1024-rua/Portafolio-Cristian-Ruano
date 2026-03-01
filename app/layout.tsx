import type { Metadata } from 'next'
import { Syne, JetBrains_Mono, Instrument_Sans } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['300', '400', '500'],
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  weight: ['400', '400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: 'Cristian Ruano — Fullstack Engineer',
    template: '%s | Cristian Ruano',
  },
  description:
    'Ingeniero de Software fullstack con experiencia en Next.js, Spring Boot, Django, React y Docker. Disponible para proyectos y oportunidades laborales.',
  keywords: [
    'Cristian Ruano',
    'Fullstack Engineer',
    'Next.js',
    'Spring Boot',
    'Django',
    'React',
    'TypeScript',
    'Colombia',
    'Software Engineer',
  ],
  authors: [{ name: 'Cristian Giovanny Ruano', url: 'https://github.com/cristian1024-rua' }],
  creator: 'Cristian Ruano',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    title: 'Cristian Ruano — Fullstack Engineer',
    description: 'Ingeniero de Software fullstack. Next.js · Spring Boot · Django · React.',
    siteName: 'Cristian Ruano',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cristian Ruano — Fullstack Engineer',
    description: 'Ingeniero de Software fullstack. Next.js · Spring Boot · Django · React.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${jetbrainsMono.variable} ${instrumentSans.variable} font-body bg-[#050810] antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#0d1424',
                color: '#e2e8f0',
                border: '1px solid rgba(96,165,250,0.2)',
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '0.8rem',
              },
              success: { iconTheme: { primary: '#34d399', secondary: '#050810' } },
              error: { iconTheme: { primary: '#fb7185', secondary: '#050810' } },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
