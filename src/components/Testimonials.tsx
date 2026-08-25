import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
    {
        id: 1,
        name: 'Rajesh Patel',
        company: 'Patel Textile Industries',
        location: 'Surat, Gujarat',
        rating: 5,
        text: 'We have been sourcing our RO antiscalant and cooling tower chemicals from Indo Chem for over 8 years. Consistent quality, reliable delivery, and their technical team actually understands our process. Highly recommended.',
    },
    {
        id: 2,
        name: 'Suresh Mehta',
        company: 'Mehta Dairy Products',
        location: 'Anaand, Gujarat',
        rating: 4,
        text: 'After switching to Indo Chem\'s boiler treatment chemicals, our blowdown frequency reduced significantly and scale formation is almost nil. Post-sales support is excellent — they respond quickly to any issue.',
    },
    {
        id: 3,
        name: 'Amit Joshi',
        company: 'Joshi Sugar Industries',
        location: 'Kolhapur, Maharashtra',
        rating: 4,
        text: 'Good quality flocculants and ETP chemicals at competitive prices. The team helped us optimize our effluent treatment process and we\'ve been meeting CETP norms consistently. Will continue sourcing from them.',
    },
]

function Stars({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    viewBox="0 0 20 20"
                    fill={star <= count ? '#F59E0B' : 'none'}
                    stroke={star <= count ? '#F59E0B' : '#D1D5DB'}
                    strokeWidth="1.5"
                    className="w-4 h-4"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

export default function Testimonials() {
    const [active, setActive] = useState(0)
    const { ref, style } = useScrollReveal()

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="py-20 lg:py-28 bg-[#F8F5F0]">
            <div className="max-w-5xl mx-auto px-5 lg:px-8">
                {/* Header */}
                <div ref={ref} style={style} className="mb-12 text-center">
                    <span className="inline-block text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">
                        Client Testimonials
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B1B] tracking-tight">
                        Trusted by 23 years of buyers
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-3">
                        <Stars count={4} />
                        <span className="text-sm font-medium text-[#4B6B6B]">4.2 avg. client rating</span>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden rounded-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="bg-white rounded-2xl p-6 lg:p-10 border border-[#0D1B1B]/6 shadow-sm"
                        >
                            {/* Quote mark */}
                            <div className="text-[#0F4C4C]/15 text-5xl lg:text-7xl font-serif leading-none mb-3 select-none" aria-hidden="true">&ldquo;</div>

                            <blockquote className="text-[#0D1B1B]/80 text-base lg:text-xl leading-relaxed font-medium -mt-6">
                                {testimonials[active].text}
                            </blockquote>

                            <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                                <div className="flex items-center gap-3">
                                    {/* Avatar (initials) */}
                                    <div className="w-10 h-10 rounded-full bg-[#0F4C4C] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                        {testimonials[active].name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#0D1B1B] text-sm">{testimonials[active].name}</p>
                                        <p className="text-xs text-[#4B6B6B]">{testimonials[active].company} · {testimonials[active].location}</p>
                                    </div>
                                </div>
                                <Stars count={testimonials[active].rating} />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                aria-label={`Go to testimonial ${i + 1}`}
                                className={`rounded-full transition-all duration-300 ${i === active
                                    ? 'w-6 h-2 bg-[#0F4C4C]'
                                    : 'w-2 h-2 bg-[#0F4C4C]/25 hover:bg-[#0F4C4C]/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
