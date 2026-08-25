import { useEffect, useRef, useState } from 'react'

interface Props {
    children: React.ReactNode
    className?: string
    delay?: number       // ms delay before animating in
    direction?: 'up' | 'left' | 'right' | 'none'
}

export default function AnimatedSection({
    children,
    className = '',
    delay = 0,
    direction = 'up',
}: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const t = setTimeout(() => setVisible(true), delay)
                    observer.disconnect()
                    return () => clearTimeout(t)
                }
            },
            { threshold: 0.12 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [delay])

    const translateInit =
        direction === 'up' ? 'translateY(36px)' :
            direction === 'left' ? 'translateX(-36px)' :
                direction === 'right' ? 'translateX(36px)' :
                    'none'

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : translateInit,
                transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </div>
    )
}
