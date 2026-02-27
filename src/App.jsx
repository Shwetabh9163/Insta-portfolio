import React from 'react'
import { INFLUENCER_DATA } from './constants/assets'
import HeroSection from './sections/HeroSection'
import AboutMe from './sections/AboutMe'
import StatsSection from './sections/StatsSection'
import EnhancedShowcase from './sections/EnhancedShowcase'
import BrandWall from './sections/BrandWall'
import ServicesOffer from './sections/ServicesOffer'
import AudienceInsights from './sections/AudienceInsights'
import { Testimonials, ContactCTA } from './sections/Testimonials'

import Atmosphere from './components/Atmosphere'
import GrainOverlay from './components/GrainOverlay'

function App() {
    return (
        <div className="min-h-screen text-white bg-[#0A0A0A] selection:bg-white selection:text-black">
            <Atmosphere />
            <GrainOverlay />

            <div className="relative z-10">
                {/* Minimal Navigation */}
                <nav className="fixed top-0 w-full z-[100] px-6 md:px-12 py-10 flex justify-between items-center pointer-events-none">
                    <div className="pointer-events-auto">
                        <span className="text-xl font-black tracking-widest uppercase leading-none">{INFLUENCER_DATA.name}</span>
                        <div className="h-px w-full bg-white/20 mt-1" />
                    </div>
                    <div className="flex gap-12 text-[10px] uppercase font-black text-white/20 pointer-events-auto">
                        <a href="#work" className="hover:text-white transition-all transform hover:-translate-y-1">Archive</a>
                        <a href="#contact" className="hover:text-white transition-all transform hover:-translate-y-1">Contact</a>
                    </div>
                </nav>

                <main>
                    <HeroSection />
                    <AboutMe />
                    <StatsSection />
                    <EnhancedShowcase />
                    <BrandWall />
                    <ServicesOffer />
                    <AudienceInsights />
                    <Testimonials />
                    <ContactCTA />
                </main>

                <footer className="py-20 border-t border-white/5 text-center px-6">
                    <p className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] mb-6 text-white/20">Aditi &copy; </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-[10px] md:text-sm font-black uppercase tracking-widest text-white/40">
                        <a href="https://www.instagram.com/aditisinghrathoree/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
                        <a href="https://www.youtube.com/@aditisinghrathoree/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">YouTube</a>
                        <a href="https://www.twitter.com/aditisinghrathoree/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Twitter</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
