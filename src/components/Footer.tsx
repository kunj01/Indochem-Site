const WA_LINK = 'https://wa.me/919157808873?text=Hi%2C%20I%27m%20interested%20in%20your%20water%20treatment%20chemicals%20%E2%80%94%20please%20share%20pricing%20%26%20MOQ'

const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Industries', href: '#industries' },
    { label: 'Contact', href: '#contact' },
]

export default function Footer() {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="bg-[#0A3333] text-white/70">
            {/* CTA Banner */}
            <div className="bg-[#0F4C4C] border-b border-white/10">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-tight">
                            Ready to optimize your water treatment?
                        </h3>
                        <p className="text-white/60 text-sm mt-1">
                            Get in touch for a free consultation and product recommendation.
                        </p>
                    </div>
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center gap-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#0D1B1B] font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Get a Free Quote
                    </a>
                </div>
            </div>

            {/* Footer body */}
            <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="mb-5">
                            <img
                                src="/logo-dark.png"
                                alt="Indo Chem — Water Treatment Chemicals"
                                className="h-24 w-auto object-contain"
                                style={{ background: 'transparent' }}
                            />
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            ISO 9001:2008 certified manufacturer &amp; trader of water treatment chemicals.
                            23+ years of trusted service across India.
                        </p>
                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 text-xs bg-white/8 border border-white/15 px-3 py-1.5 rounded-full">
                                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 1.5C4.4 1.5 1.5 4.4 1.5 8S4.4 14.5 8 14.5 14.5 11.6 14.5 8 11.6 1.5 8 1.5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 8.5l2 2 3.5-3.5" />
                                </svg>
                                ISO 9001:2008
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs bg-white/8 border border-white/15 px-3 py-1.5 rounded-full">
                                GST Registered
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs bg-white/8 border border-white/15 px-3 py-1.5 rounded-full">
                                Est. 2002
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className="text-sm hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <a
                                href="https://wa.me/919157808873"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366]" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                +91 98254 08873
                            </a>
                            <a
                                href="tel:+919825408873"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Now
                            </a>
                            <address className="not-italic flex items-start gap-2 leading-relaxed">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Surat, Gujarat — 395 011, India
                            </address>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <p>© {new Date().getFullYear()} Indo Chem. All rights reserved.</p>
                    <p>
                        Manufacturer &amp; Trader · Surat, Gujarat, India ·{' '}
                        <span className="text-[#F59E0B]">ISO 9001:2008</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
