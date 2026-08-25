import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import SplashLoader from './components/SplashLoader'
import PageTransition from './components/PageTransition'
import { LenisContext } from './context/LenisContext'

import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'
import IndustriesPage from './pages/IndustriesPage'
import ContactPage from './pages/ContactPage'

// Scroll to top on every route change
function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [pathname])
    return null
}

function AppContent() {
    const lenisRef = useRef<Lenis | null>(null)

    // Lenis smooth scroll
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
        lenisRef.current = lenis
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return () => { lenis.destroy(); lenisRef.current = null }
    }, [])

    return (
        <LenisContext.Provider value={lenisRef}>
            <div className="min-h-screen bg-[#F8F5F0]">
                <ScrollToTop />
                <Navbar />
                <PageTransition>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/industries" element={<IndustriesPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        {/* Fallback */}
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </PageTransition>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </LenisContext.Provider>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            {/* Splash loader — sits outside routes, shows once per session */}
            <SplashLoader />
            <AppContent />
        </BrowserRouter>
    )
}
