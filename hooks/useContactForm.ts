'use client'

import { useState } from 'react'
import type { ContactFormData, ContactFormState } from '@/models'

export function useContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [state, setState] = useState<ContactFormState>({
    status: 'idle',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState({ status: 'loading', message: '' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setState({ status: 'error', message: data.error ?? 'Error al enviar el mensaje.' })
        return
      }

      setState({ status: 'success', message: '¡Mensaje enviado! Te responderé pronto.' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setState({ status: 'error', message: 'Error de conexión. Intenta de nuevo.' })
    }
  }

  const reset = () => setState({ status: 'idle', message: '' })

  return { form, state, handleChange, handleSubmit, reset }
}
