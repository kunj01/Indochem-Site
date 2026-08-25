import Products from '../components/Products'
import AnimatedSection from '../components/AnimatedSection'

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-[#F8F5F0]">
            {/* Page hero */}
            <div
                className="pt-32 pb-16 px-5 text-center"
                style={{ background: 'linear-gradient(135deg, #0A3333 0%, #0F4C4C 60%, #1A6B6B 100%)' }}
            >
                <AnimatedSection>
                    <span className="inline-block text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">
                        Full Catalogue
                    </span>
                    <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
                        Our Product Catalogue
                    </h1>
                    <p className="mt-4 text-white/70 max-w-xl mx-auto text-base leading-relaxed">
                        59 products across 11 categories — precision-grade water treatment chemicals and plant solutions from IndoChem, Surat.
                    </p>
                </AnimatedSection>
            </div>

            {/* Products component */}
            <AnimatedSection>
                <Products />
            </AnimatedSection>
        </div>
    )
}
