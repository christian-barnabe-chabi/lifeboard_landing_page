import { useState, useEffect, useRef } from 'react'
import type { RefObject } from 'react'

export function useScrollParallax(speed = 0.3) {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const handler = () => setOffset(window.scrollY * speed)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [speed])
  return offset
}

export function useInView(threshold = 0.12): { ref: RefObject<HTMLDivElement | null>; inView: boolean } {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}
