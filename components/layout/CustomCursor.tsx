'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const ringPos = useRef({ x: 0, y: 0 })
  const mousePos = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>()

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
    }

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x - 18) * 0.12
      ringPos.current.y += (mousePos.current.y - ringPos.current.y - 18) * 0.12
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      dot.style.background = '#a78bfa'
      dot.style.transform += ' scale(2.5)'
      ring.style.borderColor = 'rgba(167,139,250,0.6)'
      ring.style.transform += ' scale(1.5)'
    }

    const onLeave = () => {
      dot.style.background = '#22d3ee'
      ring.style.borderColor = 'rgba(34,211,238,0.5)'
    }

    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    const interactables = document.querySelectorAll('a, button, .project-card, .skill-pill-item')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}
