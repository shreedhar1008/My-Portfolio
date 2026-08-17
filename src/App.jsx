import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import ParticleBackground from './components/ParticleBackground';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <div className="relative min-h-screen bg-dark text-on-surface overflow-x-hidden selection:bg-primary/30 selection:text-white">
            {/* Ambient Dynamic WebGL Background */}
            <ParticleBackground />

            {/* Navigation Bar */}
            <Navbar />

            {/* Main Content Sections */}
            <main className="relative z-10">
                <Hero />
                <About />
                <Projects />
                <Journey />
                <Achievements />
                <Contact />
            </main>

            {/* Scroll To Top Action */}
            <ScrollToTop />

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/10 bg-[#030611]/80 backdrop-blur-xl py-10 px-6">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                    <div>
                        <div className="font-heading font-bold text-white text-base">
                            Shreedhar Shiragur
                        </div>
                        <p className="text-on-surface-muted text-xs font-body mt-1">
                            Designed & Built with precision. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-label text-on-surface-muted">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                            <span>Bengaluru, India</span>
                        </span>
                        <span>•</span>
                        <span>AI / ML & Software</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
