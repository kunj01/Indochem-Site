import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const WA_ENQUIRY = (name: string, company: string, req: string, phone: string) =>
    `https://wa.me/919157808873?text=Hi%2C%20I%27m%20${encodeURIComponent(name)}%20from%20${encodeURIComponent(company)}.%20Requirement%3A%20${encodeURIComponent(req)}.%20My%20phone%3A%20${encodeURIComponent(phone)}.%20Please%20share%20pricing%20%26%20MOQ.`

export default function Contact() {
    const { ref, style } = useScrollReveal()
    const [form, setForm] = useState({ name: '', company: '', requirement: '', phone: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { name, company, requirement, phone } = form
        window.open(WA_ENQUIRY(name, company, requirement, phone), '_blank', 'noopener,noreferrer')
    }

    const inputClass =
        'w-full bg-[#F8F5F0] border border-[#0D1B1B]/10 rounded-xl px-4 py-3 text-sm text-[#0D1B1B] placeholder-[#4B6B6B]/60 focus:outline-none focus:border-[#0F4C4C]/50 focus:ring-2 focus:ring-[#0F4C4C]/10 transition-all'

    return (
        <section id="contact" aria-label="Contact Indo Chem — Get a Quote" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
                {/* Header */}
                <div ref={ref} style={style} className="mb-12 lg:mb-14">
                    <span className="inline-block text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">
                        Get In Touch
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0D1B1B] tracking-tight">
                        Let's talk water treatment
                    </h2>
                    <p className="mt-4 text-[#4B6B6B] max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed">
                        Share your requirement and we'll reply with product recommendations, pricing, and MOQ details — usually within hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* LEFT: Contact info */}
                    <div className="flex flex-col gap-6">
                        {/* WhatsApp */}
                        <motion.a
                            whileHover={{ x: 4 }}
                            href="https://wa.me/919157808873?text=Hi%2C%20I%27m%20interested%20in%20your%20water%20treatment%20chemicals."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-[#F0FFF5] border border-[#25D366]/20 rounded-2xl p-5 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-[#25D366] uppercase tracking-wider">WhatsApp</p>
                                <p className="font-semibold text-[#0D1B1B] group-hover:text-[#25D366] transition-colors">Kunj Dudhatra</p>
                                <p className="text-sm text-[#0D1B1B]/70">+91 91578 08873</p>
                                <p className="text-xs text-[#4B6B6B] mt-0.5">Click to open chat with pre-filled message</p>
                            </div>
                        </motion.a>

                        {/* Call */}
                        <motion.a
                            whileHover={{ x: 4 }}
                            href="tel:+919825408873"
                            className="flex items-center gap-4 bg-[#F8F5F0] border border-[#0D1B1B]/8 rounded-2xl p-5 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#0F4C4C] flex items-center justify-center flex-shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-[#0F4C4C] uppercase tracking-wider">Call Us</p>
                                <p className="font-semibold text-[#0D1B1B] group-hover:text-[#0F4C4C] transition-colors">Ashwin Dudhatra</p>
                                <p className="text-sm text-[#0D1B1B]/70">+91 98254 08873</p>
                                <p className="text-xs text-[#4B6B6B] mt-0.5">Mon–Sat, 9am to 6pm IST</p>
                            </div>
                        </motion.a>

                        {/* Address */}
                        <div className="flex items-start gap-4 bg-[#F8F5F0] border border-[#0D1B1B]/8 rounded-2xl p-5">
                            <div className="w-12 h-12 rounded-xl bg-[#0F4C4C]/10 flex items-center justify-center flex-shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#0F4C4C" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-[#0F4C4C] uppercase tracking-wider">Office Address</p>
                                <address className="not-italic text-sm text-[#0D1B1B] mt-1 leading-relaxed font-medium">
                                    GF-33, Polaris Mall<br />
                                    Vesu Canal Road<br />
                                    Surat — 395 011, Gujarat<br />
                                    India
                                </address>
                                <p className="text-xs text-[#4B6B6B] mt-1">GST Registered · PAN India Delivery</p>
                            </div>
                        </div>

                        {/* Map embed */}
                        <div className="rounded-2xl overflow-hidden border border-[#0D1B1B]/8 h-64">
                            <iframe
                                title="Indo Chem — GF-33 Polaris Mall, Vesu Canal Road, Surat"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.9267075440582!2d72.87327733862506!3d21.197981295123526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa9e747a14b%3A0xd177b782489cbc24!2sPolaris%20Mall!5e0!3m2!1sen!2sin!4v1787638437729!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* RIGHT: Enquiry Form */}
                    <div>
                        <div className="bg-[#F8F5F0] rounded-2xl p-7 lg:p-8 border border-[#0D1B1B]/8">
                            <h3 className="font-semibold text-[#0D1B1B] text-lg mb-1">Send an Enquiry</h3>
                            <p className="text-sm text-[#4B6B6B] mb-6">
                                Fill this form and we'll open a pre-filled WhatsApp chat for you — fast and direct.
                            </p>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                                <div>
                                    <label htmlFor="name" className="block text-xs font-semibold text-[#0F4C4C] uppercase tracking-wider mb-1.5">
                                        Your Name *
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Rajesh Patel"
                                        className={inputClass}
                                        autoComplete="name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-xs font-semibold text-[#0F4C4C] uppercase tracking-wider mb-1.5">
                                        Company Name *
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        required
                                        value={form.company}
                                        onChange={handleChange}
                                        placeholder="e.g. Patel Textile Pvt Ltd"
                                        className={inputClass}
                                        autoComplete="organization"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="requirement" className="block text-xs font-semibold text-[#0F4C4C] uppercase tracking-wider mb-1.5">
                                        Requirement *
                                    </label>
                                    <textarea
                                        id="requirement"
                                        name="requirement"
                                        required
                                        rows={3}
                                        value={form.requirement}
                                        onChange={handleChange}
                                        placeholder="e.g. RO Antiscalant for 500 LPH RO plant, need pricing and MOQ"
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-semibold text-[#0F4C4C] uppercase tracking-wider mb-1.5">
                                        Phone / WhatsApp *
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98XXX XXXXX"
                                        className={inputClass}
                                        autoComplete="tel"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="mt-2 flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-green-500/20 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Send via WhatsApp
                                </button>
                                <p className="text-xs text-center text-[#4B6B6B]">
                                    This will open WhatsApp with your message pre-filled. No data is stored.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
