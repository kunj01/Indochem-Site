import Contact from '../components/Contact'
import AnimatedSection from '../components/AnimatedSection'

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Page hero */}
            <div
                className="pt-32 pb-16 px-5 text-center"
                style={{ background: 'linear-gradient(135deg, #0A3333 0%, #0F4C4C 60%, #1A6B6B 100%)' }}
            >
                <AnimatedSection>
                    <span className="inline-block text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">
                        Reach Out
                    </span>
                    <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
                        Contact IndoChem
                    </h1>
                    <p className="mt-4 text-white/70 max-w-xl mx-auto text-base leading-relaxed">
                        We respond within hours. Share your water treatment requirement and get pricing, MOQ, and expert guidance.
                    </p>
                </AnimatedSection>
            </div>

            <AnimatedSection>
                <Contact />
            </AnimatedSection>
        </div>
    )
}
