import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'El asunto debe tener al menos 3 caracteres').max(200),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(2000),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0].message },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = result.data
    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_EMAIL ?? 'cristian.ruano@campusucc.edu.co'

    // Si no hay API key configurada, simular éxito en desarrollo
    if (!apiKey || apiKey.startsWith('re_xxx')) {
      console.log('📧 [DEV] Mensaje recibido:', { name, email, subject, message })
      return NextResponse.json({ success: true, dev: true })
    }

    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#050810;color:#e2e8f0;padding:32px;border-radius:12px;">
            <h2 style="color:#22d3ee;margin-bottom:8px;">Nuevo mensaje de tu portafolio</h2>
            <hr style="border-color:rgba(96,165,250,0.2);margin-bottom:24px;"/>
            <p><strong style="color:#94a3b8;">Nombre:</strong> ${name}</p>
            <p><strong style="color:#94a3b8;">Email:</strong> <a href="mailto:${email}" style="color:#60a5fa;">${email}</a></p>
            <p><strong style="color:#94a3b8;">Asunto:</strong> ${subject}</p>
            <div style="margin-top:20px;padding:20px;background:#0d1424;border-left:3px solid #22d3ee;border-radius:4px;">
              <p style="white-space:pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      }),
    })

    if (!emailRes.ok) {
      const err = await emailRes.json()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Error al enviar el email.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 })
  }
}
