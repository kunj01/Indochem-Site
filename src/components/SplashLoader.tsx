import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TAGLINE = 'PRECISION IN WATER TREATMENT'

// Compute synchronously on first render — ZERO flicker
function shouldShowSplash() {
    if (sessionStorage.getItem('splash_shown')) return false
    sessionStorage.setItem('splash_shown', '1')
    return true
}

export default function SplashLoader() {
    // Initialized synchronously — visible from the very first paint
    const [visible] = useState(shouldShowSplash)
    const [letterCount, setLetterCount] = useState(0)
    const [exiting, setExiting] = useState(false)

    useEffect(() => {
        if (!visible) return

        // Typewriter effect starts at 1s
        const typeInterval = setTimeout(() => {
            let i = 0
            const tick = setInterval(() => {
                i++
                setLetterCount(i)
                if (i >= TAGLINE.length) clearInterval(tick)
            }, 60)
        }, 1000)

        // Begin exit at 2.8s
        const exitTimer = setTimeout(() => setExiting(true), 2800)

        return () => {
            clearTimeout(typeInterval)
            clearTimeout(exitTimer)
        }
    }, [visible])

    if (!visible) return null

    return (
        <AnimatePresence>
            {!exiting && (
                <motion.div
                    key="splash"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8F5F0]"
                    aria-hidden="true"
                    // Block pointer events on the page behind
                    style={{ pointerEvents: 'all' }}
                >
                    {/* Spinner + Logo — same size as PageTransition: 280px */}
                    <div className="relative flex items-center justify-center" style={{ width: 280, height: 280 }}>
                        {/* Outer arc — amber, clockwise */}
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

                        {/* Inner arc — teal, counter-clockwise */}
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

                        {/* Logo — blur-in animation, mix-blend-mode removes white box */}
                        <motion.img
                            src="/logo.png"
                            alt="Indo Chem"
                            className="h-28 w-auto object-contain relative z-10"
                            style={{ mixBlendMode: 'multiply', background: 'transparent' }}
                            initial={{ filter: 'blur(14px)', scale: 0.88, opacity: 0.6 }}
                            animate={{ filter: 'blur(0px)', scale: 1, opacity: 1 }}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        />
                    </div>

                    {/* Tagline typewriter */}
                    <div className="mt-10 h-6 tracking-[0.25em] text-xs font-semibold text-[#0F4C4C]/70">
                        {TAGLINE.slice(0, letterCount)}
                        <span className="opacity-0">|</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
