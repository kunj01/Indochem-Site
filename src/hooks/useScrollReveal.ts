import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollReveal(options?: { margin?: string; delay?: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: (options?.margin ?? '-80px') as Parameters<typeof useInView>[1] extends { margin?: infer M } ? M : never })

    const style: React.CSSProperties = {
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${options?.delay ?? 0}s, transform 0.6s ease ${options?.delay ?? 0}s`,
    }

    return { ref, style, isInView }
}
