import AnimatedSection from '../components/AnimatedSection'
import { Link } from 'react-router-dom'

const industries = [
    {
        icon: '🏭',
        title: 'Textile & Dyeing',
        desc: 'RO antiscalants, ETP chemicals, decolourants and coagulants tailored for high-TDS, high-colour effluent from textile and dye processing units.',
        products: ['RO Antiscalant', 'Effluent Treatment Chemicals', 'Decolorant', 'ETP Plants'],
        bg: '#FFF8EE',
    },
    {
        icon: '🌡️',
        title: 'HVAC & Cooling Towers',
        desc: 'Scale and corrosion inhibitors, biocides and dispersants to maximise heat exchange efficiency and extend equipment life in industrial cooling systems.',
        products: ['Scale & Corrosion Inhibitor', 'C-301 / C-505 / C-540', 'D-100 Descalant', 'Biocides'],
        bg: '#EFF8F8',
    },
    {
        icon: '🔥',
        title: 'Steam Boilers',
        desc: 'Oxygen scavengers, sludge conditioners and pH correctors to prevent scale buildup and corrosion in industrial boiler systems.',
        products: ['B-150 / B-155 / B-170', 'Oxygen Scavenger', 'pH Corrector'],
        bg: '#F8F5F0',
    },
    {
        icon: '🧪',
        title: 'Pharmaceutical & Biotech',
        desc: 'Food-grade and pharmaceutical-grade RO antiscalants and membrane cleaning chemicals for ultra-pure water generation.',
        products: ['RO Antiscalant IC 225', 'RO 6020 / 6030 / 6070', 'Biocides'],
        bg: '#F0FFF5',
    },
    {
        icon: '🍬',
        title: 'Sugar Processing',
        desc: 'Specialty antiscalants for sugarcane juice evaporators and vacuum pans, preventing carbonate scale in multi-effect evaporators.',
        products: ['Sugar Antiscalant Chemical'],
        bg: '#FFF8EE',
    },
    {
        icon: '🏙️',
        title: 'Municipalities & Utilities',
        desc: 'STP and ETP plants, wastewater recycling systems and grey water treatment units for civic and commercial water management.',
        products: ['STP Plants', 'Wastewater Recycling Plant', 'Grey Water Plant'],
        bg: '#EFF8F8',
    },
    {
        icon: '🏗️',
        title: 'Construction & Real Estate',
        desc: 'Water softening plants and demineralised water plants for construction projects, apartment complexes and commercial buildings.',
        products: ['Water Softening Plant', 'DM Water Plant', 'DM RO Plant'],
        bg: '#F8F5F0',
    },
    {
        icon: '🌊',
        title: 'Drinking Water & Beverages',
        desc: 'High-capacity RO plants and certified-grade chemicals for drinking water, food-grade water and beverage production.',
        products: ['6000 LPH RO Plant', 'RO Antiscalant IC 135', 'RO Membrane Cleaning'],
        bg: '#F0FFF5',
    },
]

export default function IndustriesPage() {
    return (
        <div className="min-h-screen bg-[#F8F5F0]">
            {/* Hero */}
            <div
                className="pt-24 lg:pt-32 pb-16 lg:pb-20 px-5 text-center"
                style={{ background: 'linear-gradient(135deg, #0A3333 0%, #0F4C4C 60%, #1A6B6B 100%)' }}
            >
                <AnimatedSection>
                    <span className="inline-block text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">
                        Industries We Serve
                    </span>
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight">
                        Water Treatment for Every Industry
                    </h1>
                    <p className="mt-5 text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                        From textile mills to sugar factories, HVAC systems to pharmaceutical plants — IndoChem supplies precision water treatment chemicals and plant solutions across 15+ industries.
                    </p>
                </AnimatedSection>
            </div>

            {/* Industries grid */}
            <section className="py-20 px-5" aria-label="Industries served">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {industries.map((ind, i) => (
                            <AnimatedSection key={ind.title} delay={i * 70}>
                                <div
                                    className="rounded-2xl p-7 border border-[#0D1B1B]/8 hover:border-[#0F4C4C]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
                                    style={{ background: ind.bg }}
                                >
                                    <div className="text-4xl mb-4">{ind.icon}</div>
                                    <h2 className="text-xl font-bold text-[#0D1B1B] mb-2 group-hover:text-[#0F4C4C] transition-colors">
                                        {ind.title}
                                    </h2>
                                    <p className="text-sm text-[#4B6B6B] leading-relaxed mb-4">{ind.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {ind.products.map((p) => (
                                            <span
                                                key={p}
                                                className="text-xs font-medium bg-[#0F4C4C]/8 text-[#0F4C4C] px-3 py-1 rounded-full"
                                            >
                                                {p}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <AnimatedSection>
                <section className="py-16 px-5 text-center bg-white">
                    <h2 className="text-2xl font-bold text-[#0D1B1B] mb-2">Don't see your industry?</h2>
                    <p className="text-[#4B6B6B] mb-6 max-w-md mx-auto">
                        We work with all industries that use water in their processes. WhatsApp us and we'll recommend the right products.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link to="/products" className="inline-flex items-center justify-center gap-2 bg-[#0F4C4C] hover:bg-[#1A6B6B] text-white font-semibold px-7 py-3 rounded-full transition-all hover:-translate-y-0.5">
                            Browse Products
                        </Link>
                        <a
                            href="https://wa.me/919157808873?text=Hi%2C%20I%20need%20water%20treatment%20chemicals%20for%20my%20industry."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-7 py-3 rounded-full transition-all hover:-translate-y-0.5"
                        >
                            Ask on WhatsApp
                        </a>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    )
}
