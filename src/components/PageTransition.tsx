import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const location = useLocation()
    const [transitioning, setTransitioning] = useState(false)
    const [key, setKey] = useState(location.pathname)
    const isFirstRender = useRef(true)

    useEffect(() => {
        // Don't trigger transition on the very first mount
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        setTransitioning(true)
        const t = setTimeout(() => {
            setTransitioning(false)
            setKey(location.pathname)
        }, 600)
        return () => clearTimeout(t)
    }, [location.pathname])

    return (
        <>
            {/* Mini transition loader overlay */}
            <AnimatePresence>
                {transitioning && (
                    <motion.div
                        key="page-loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#F8F5F0]"
                        aria-hidden="true"
                    >
                        {/* 2× size: 280px */}
                        <div className="relative flex items-center justify-center" style={{ width: 280, height: 280 }}>
                            <svg
                                className="absolute inset-0"
                                width="280" height="280"
                                viewBox="0 0 140 140"
                                style={{ animation: 'spin-cw 2s linear infinite' }}
                            >
                                <circle
                                    cx="70" cy="70" r="62"
                                    fill="none"
                                    stroke="#F59E0B"
                                    strokeWidth="0.8"
                                    strokeDasharray="150 240"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <svg
                                className="absolute inset-0"
                                width="280" height="280"
                                viewBox="0 0 140 140"
                                style={{ animation: 'spin-ccw 1.5s linear infinite' }}
                            >
                                <circle
                                    cx="70" cy="70" r="48"
                                    fill="none"
                                    stroke="#0F4C4C"
                                    strokeWidth="0.8"
                                    strokeDasharray="100 200"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <img
                                src="/logo.png"
                                alt=""
                                className="h-28 w-auto object-contain relative z-10"
                                style={{ mixBlendMode: 'multiply', background: 'transparent' }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page content with fade-in */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}
