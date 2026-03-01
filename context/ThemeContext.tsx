'use client'

import { createContext, useContext, ReactNode } from 'react'

type Theme = 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
  isDark: boolean
}

const defaultValue: ThemeContextValue = {
  theme: 'dark',
  toggleTheme: () => {},
  isDark: true,
}

const ThemeContext = createContext<ThemeContextValue>(defaultValue)

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext)
}