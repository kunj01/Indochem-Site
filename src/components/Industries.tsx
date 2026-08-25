import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const industries = [
    { name: 'Textile Dyeing', emoji: '🧵' },
    { name: 'Pharmaceuticals', emoji: '💊' },
    { name: 'Dairy & Food', emoji: '🥛' },
    { name: 'Sugar Mills', emoji: '🏭' },
    { name: 'Thermal Power', emoji: '⚡' },
    { name: 'Food Processing', emoji: '🌾' },
    { name: 'Breweries', emoji: '🍺' },
    { name: 'Paper & Pulp', emoji: '📄' },
    { name: 'Real Estate & Housing', emoji: '🏢' },
    { name: 'HVAC Systems', emoji: '❄️' },
    { name: 'Municipal Water', emoji: '🚰' },
    { name: 'Petrochemical', emoji: '⚗️' },
    { name: 'Hospitals', emoji: '🏥' },
    { name: 'Hotels & Resorts', emoji: '🏨' },
    { name: 'Cement Plants', emoji: '🏗️' },
]

export default function Industries() {
    const { ref, style } = useScrollReveal()

    return (
        <section id="industries" aria-label="Industries Served by Indo Chem" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
                {/* Header */}
                <div ref={ref} style={style} className="mb-12 text-center">
                    <span className="inline-block text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">
                        Industries We Serve
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#0D1B1B] tracking-tight">
                        Trusted Across Sectors
                    </h2>
                    <p className="mt-4 text-[#4B6B6B] max-w-xl mx-auto text-lg leading-relaxed">
                        From textile mills to pharma plants — our chemicals are deployed across 15+ industries throughout India.
                    </p>
                </div>

                {/* Industry Pills */}
                <div className="flex flex-wrap justify-center gap-3">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.35, delay: i * 0.04 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="flex items-center gap-2.5 bg-[#F8F5F0] hover:bg-[#EEF7F7] border border-[#0D1B1B]/8 hover:border-[#0F4C4C]/25 text-[#0D1B1B] rounded-full px-5 py-2.5 transition-all duration-200 cursor-default select-none"
                        >
                            <span className="text-lg leading-none" aria-hidden="true">{industry.emoji}</span>
                            <span className="text-sm font-medium">{industry.name}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 text-center">
                    <p className="text-[#4B6B6B] text-sm mb-4">
                        Don't see your industry? We work with all sectors requiring water or wastewater treatment.
                    </p>
                    <a
                        href="https://wa.me/918047839211?text=Hi%2C%20I%20need%20water%20treatment%20chemicals%20for%20my%20industry%20%E2%80%94%20can%20you%20help%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F4C4C] border-b-2 border-[#0F4C4C]/30 hover:border-[#F59E0B] transition-colors pb-0.5"
                    >
                        Talk to an expert
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
