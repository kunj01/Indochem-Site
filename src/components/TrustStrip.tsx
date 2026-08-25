import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatItem {
    value: number
    suffix: string
    label: string
    icon: React.ReactNode
}

const stats: StatItem[] = [
    {
        value: 23,
        suffix: '+',
        label: 'Years in Business',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2.5 2.5M12 2a10 10 0 100 20A10 10 0 0012 2z" />
            </svg>
        ),
    },
    {
        value: 8,
        suffix: '',
        label: 'Product Categories',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
        ),
    },
    {
        value: 15,
        suffix: '+',
        label: 'Industries Served',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        value: 0,
        suffix: 'ISO 9001:2008',
        label: 'Certified Quality',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
]

function Counter({ value, suffix, started }: { value: number; suffix: string; started: boolean }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!started || value === 0) return
        const duration = 1800
        const start = Date.now()
        const step = () => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * value))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(value)
        }
        requestAnimationFrame(step)
    }, [started, value])

    if (value === 0) {
        return <span className="text-3xl lg:text-4xl font-bold text-[#0F4C4C]">{suffix}</span>
    }

    return (
        <span className="text-3xl lg:text-4xl font-bold text-[#0F4C4C]">
            {count}{suffix}
        </span>
    )
}

export default function TrustStrip() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="bg-white py-14 lg:py-16">
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-[#F8F5F0] hover:bg-[#EEF7F7] transition-colors duration-300"
                            style={{
                                opacity: isInView ? 1 : 0,
                                transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                            }}
                        >
                            <div className="text-[#0F4C4C]/60">{stat.icon}</div>
                            <Counter value={stat.value} suffix={stat.suffix} started={isInView} />
                            <span className="text-sm font-medium text-[#4B6B6B]">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
