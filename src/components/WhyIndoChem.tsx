import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const values = [
    {
        id: 'quality',
        title: 'ISO 9001:2008 Quality Assurance',
        description:
            'Every batch is tested before dispatch. Our quality management system ensures consistent chemistry, accurate dosing, and documented traceability — so you can trust every delivery.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 4C10.6 4 3 11.6 3 21s7.6 17 17 17 17-7.6 17-17S29.4 4 20 4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 21l5 5 10-10" />
            </svg>
        ),
    },
    {
        id: 'support',
        title: 'Dedicated Post-Sales Support',
        description:
            'Our team doesn\'t disappear after delivery. We provide on-site troubleshooting, dosage optimization, and technical guidance to ensure your treatment system performs as expected.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M28 10H12a2 2 0 00-2 2v12a2 2 0 002 2h4l4 4 4-4h4a2 2 0 002-2V12a2 2 0 00-2-2z" />
                <path strokeLinecap="round" d="M15 17h10M15 21h6" />
            </svg>
        ),
    },
    {
        id: 'team',
        title: 'Expert Cross-Functional Team',
        description:
            'Our in-house procurement, QC, R&D and customer support teams work in sync — giving you faster sourcing, better formulation, and a single contact for all your needs.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9" aria-hidden="true">
                <circle cx="14" cy="14" r="5" />
                <circle cx="26" cy="14" r="5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 36c0-5.5 4.5-10 10-10s10 4.5 10 10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M26 26c3 1 6 3.5 6 8" opacity="0.5" />
            </svg>
        ),
    },
    {
        id: 'delivery',
        title: 'Pan-India Supply Chain',
        description:
            'Strategically stocked inventory in Surat ensures reliable lead times. We ship to industrial clusters across Gujarat, Maharashtra, Punjab, Rajasthan, and beyond — consistently.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9" aria-hidden="true">
                <rect x="3" y="14" width="26" height="16" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M29 20h5l3 6v4h-8V20z" />
                <circle cx="10" cy="32" r="3" />
                <circle cx="24" cy="32" r="3" />
                <circle cx="34" cy="32" r="3" />
            </svg>
        ),
    },
]

export default function WhyIndoChem() {
    const { ref, style } = useScrollReveal()

    return (
        <section id="about" aria-label="Why Choose Indo Chem — Water Treatment Chemical Experts" className="py-20 lg:py-28 bg-[#0F4C4C]">
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
                {/* Header */}
                <div ref={ref} style={style} className="mb-12 lg:mb-16">
                    <span className="inline-block text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">
                        Why Choose Us
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                        Built on 23 years of
                        <br className="hidden lg:block" /> chemical expertise
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                    {values.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group flex gap-5 bg-white/8 hover:bg-white/12 border border-white/10 hover:border-white/20 rounded-2xl p-6 lg:p-7 transition-all duration-300"
                        >
                            {/* Left accent bar */}
                            <div className="flex-shrink-0 flex flex-col items-center">
                                <div className="text-[#F59E0B] mb-2">{item.icon}</div>
                                <div className="flex-1 w-px bg-white/10 mt-1" />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="font-semibold text-white text-base leading-snug mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
