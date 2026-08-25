import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import WhyIndoChem from '../components/WhyIndoChem'
import Industries from '../components/Industries'
import Testimonials from '../components/Testimonials'
import AnimatedSection from '../components/AnimatedSection'
import { Link } from 'react-router-dom'

const WA_LINK = 'https://wa.me/919157808873?text=Hi%2C%20I%27m%20interested%20in%20your%20water%20treatment%20chemicals%20%E2%80%94%20please%20share%20pricing%20%26%20MOQ'

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#F8F5F0]">
            <Hero />
            <AnimatedSection>
                <TrustStrip />
            </AnimatedSection>
            <AnimatedSection delay={80}>
                <WhyIndoChem />
            </AnimatedSection>
            <AnimatedSection delay={80}>
                <Industries />
            </AnimatedSection>
            <AnimatedSection delay={80}>
                <Testimonials />
            </AnimatedSection>

            {/* Bottom CTA strip */}
            <AnimatedSection>
                <section className="py-20 bg-[#0F4C4C]" aria-label="Call to action">
                    <div className="max-w-4xl mx-auto px-5 text-center">
                        <span className="inline-block text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-4">
                            Ready to get started?
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                            Explore our complete product catalogue
                        </h2>
                        <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
                            59 products across 11 categories — from RO antiscalants to ETP plants. Find exactly what you need.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0D1B1B] font-bold text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                            >
                                View All Products
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </Link>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    )
}
