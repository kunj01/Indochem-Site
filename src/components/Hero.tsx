import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const WA_QUOTE = 'https://wa.me/919157808873?text=Hi%2C%20I%27m%20interested%20in%20your%20water%20treatment%20chemicals%20%E2%80%94%20please%20share%20pricing%20%26%20MOQ%20details.'

export default function Hero() {
    return (
        <section
            id="home"
            aria-label="Indo Chem — Water Treatment Chemicals Manufacturer, Surat Gujarat"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #0A3333 0%, #0F4C4C 40%, #1A6B6B 70%, #0F4C4C 100%)',
            }}
        >
            {/* Abstract gradient orbs */}
            <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden pointer-events-none"
            >
                <div
                    className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
                <div
                    className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-15"
                    style={{
                        background: 'radial-gradient(circle, #6ECCCC 0%, transparent 70%)',
                        filter: 'blur(100px)',
                    }}
                />
                {/* Subtle grid lines */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.04]"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* ISO Badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 mb-8"
            >
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full tracking-wide uppercase text-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                    ISO 9001:2008 Certified · Est. 2002 · Surat, Gujarat
                </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="relative z-10 text-center px-5 max-w-4xl"
            >
                <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold text-white leading-[1.08] tracking-tight">
                    Engineering Reliable{' '}
                    <span className="text-[#F59E0B]">Water Treatment</span>{' '}
                    Chemicals Since 2002
                </h1>
            </motion.div>

            {/* Sub-line */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative z-10 mt-6 text-center text-[clamp(0.95rem,2vw,1.2rem)] text-white/70 max-w-2xl px-5 leading-relaxed"
            >
                Trusted by 15+ industries across India — from textile to pharma, HVAC to sugar mills.
                We manufacture and supply precision-grade water treatment chemicals that keep your operations running.
            </motion.p>

            {/* CTAs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
                className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4 items-center px-5"
            >
                <a
                    href={WA_QUOTE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 bg-[#F59E0B] hover:bg-[#D97706] text-[#0D1B1B] font-bold text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Get a Quote
                </a>
                <Link
                    to="/products"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
                >
                    View Products
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                aria-hidden="true"
            >
                <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="w-5 h-5 border-2 border-white/30 rounded-full flex items-center justify-center"
                >
                    <div className="w-1 h-1 rounded-full bg-white/60" />
                </motion.div>
            </motion.div>
        </section>
    )
}
