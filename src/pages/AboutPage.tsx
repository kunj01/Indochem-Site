import AnimatedSection from '../components/AnimatedSection'
import { Link } from 'react-router-dom'

const WA = 'https://wa.me/919157808873?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20IndoChem.'

const stats = [
    { value: '2002', label: 'Year Established' },
    { value: '20+', label: 'Years Experience' },
    { value: '500+', label: 'Happy Clients' },
    { value: '59', label: 'Products' },
    { value: '11', label: 'Categories' },
    { value: 'ISO', label: '9001:2008 Certified' },
]

const values = [
    { icon: '🔬', title: 'Precision Chemistry', desc: 'Every batch is formulated to strict quality standards. We don\'t compromise on purity or efficacy.' },
    { icon: '🚚', title: 'Pan India Delivery', desc: 'We ship chemicals and plant solutions across India — from small cans to full tanker quantities.' },
    { icon: '🤝', title: 'B2B Partnership', desc: 'We work closely with plant operators, EPC contractors, and distributors to deliver the right solution.' },
    { icon: '⚡', title: 'Fast Response', desc: 'WhatsApp us and get pricing, MOQ, and technical data sheets within hours, not days.' },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#F8F5F0]">
            {/* Hero */}
            <div
                className="pt-24 lg:pt-32 pb-16 lg:pb-20 px-5"
                style={{ background: 'linear-gradient(135deg, #0A3333 0%, #0F4C4C 60%, #1A6B6B 100%)' }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedSection>
                        <span className="inline-block text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">
                            About Us
                        </span>
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight">
                            Two Decades of Water Treatment Excellence
                        </h1>
                        <p className="mt-5 text-white/75 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                            IndoChem is a Surat-based manufacturer and supplier of precision-grade water treatment chemicals and turnkey treatment plant solutions. Since 2002, we've served industries ranging from textiles to pharmaceuticals, cooling towers to sugar mills.
                        </p>
                    </AnimatedSection>
                </div>
            </div>

            {/* Stats */}
            <section className="py-16 bg-white" aria-label="Company statistics">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {stats.map((s, i) => (
                            <AnimatedSection key={s.label} delay={i * 60}>
                                <div className="text-center p-5 rounded-2xl bg-[#F8F5F0] border border-[#0D1B1B]/8">
                                    <div className="text-3xl font-bold text-[#0F4C4C]">{s.value}</div>
                                    <div className="text-xs font-semibold text-[#4B6B6B] uppercase tracking-wider mt-1">{s.label}</div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-20 px-5" aria-label="Our story">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection direction="left">
                            <span className="inline-block text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">Our Story</span>
                            <h2 className="text-3xl font-bold text-[#0D1B1B] tracking-tight mb-5">
                                Built on Science, Driven by Industry Needs
                            </h2>
                            <div className="space-y-4 text-[#4B6B6B] leading-relaxed">
                                <p>
                                    IndoChem was founded in 2002 in Surat, Gujarat — the heart of India's textile and industrial belt. Our founders recognized a critical gap: industries needed specialist, high-purity water treatment chemicals that were both effective and economical.
                                </p>
                                <p>
                                    Today, we manufacture and distribute over 59 products across 11 categories — including RO antiscalants, cooling tower chemicals, boiler water treatment chemicals, effluent treatment chemicals, and complete treatment plants.
                                </p>
                                <p>
                                    ISO 9001:2008 certified, and trusted by 500+ clients across India, IndoChem continues to deliver precision chemistry that keeps industrial operations running efficiently.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection direction="right" delay={120}>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { c: '#F8F5F0', title: 'RO Antiscalants', sub: '12 formulations for all TDS ranges' },
                                    { c: '#EFF8F8', title: 'Cooling Tower', sub: 'Scale, corrosion & biocide treatment' },
                                    { c: '#FFF8EE', title: 'ETP Plants', sub: 'Turnkey effluent treatment systems' },
                                    { c: '#F0FFF5', title: 'Boiler Treatment', sub: 'Oxygen scavenging & pH control' },
                                ].map((card) => (
                                    <div
                                        key={card.title}
                                        className="rounded-2xl p-5 border border-[#0D1B1B]/8"
                                        style={{ background: card.c }}
                                    >
                                        <h3 className="font-semibold text-[#0D1B1B] text-sm">{card.title}</h3>
                                        <p className="text-xs text-[#4B6B6B] mt-1 leading-relaxed">{card.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white px-5" aria-label="Our values">
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">Why Choose Us</span>
                            <h2 className="text-3xl font-bold text-[#0D1B1B] tracking-tight">What sets IndoChem apart</h2>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {values.map((v, i) => (
                            <AnimatedSection key={v.title} delay={i * 80}>
                                <div className="flex gap-4 p-6 rounded-2xl bg-[#F8F5F0] border border-[#0D1B1B]/8 hover:border-[#0F4C4C]/20 transition-colors">
                                    <div className="text-3xl flex-shrink-0">{v.icon}</div>
                                    <div>
                                        <h3 className="font-semibold text-[#0D1B1B] mb-1">{v.title}</h3>
                                        <p className="text-sm text-[#4B6B6B] leading-relaxed">{v.desc}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <AnimatedSection>
                <section className="py-16 px-5 text-center bg-[#F8F5F0]">
                    <h2 className="text-2xl font-bold text-[#0D1B1B] mb-4">Ready to work with us?</h2>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link to="/products" className="inline-flex items-center justify-center gap-2 bg-[#0F4C4C] hover:bg-[#1A6B6B] text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5">
                            Browse Products
                        </Link>
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5">
                            WhatsApp Us
                        </a>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    )
}
