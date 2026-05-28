import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import ParticleBackground from './components/ParticleBackground';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
    return (
        <div className="relative min-h-screen">
            <ParticleBackground />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Journey />
                <Achievements />
                <Contact />
            </main>
            <footer className="text-center py-8 text-gray-500 text-sm border-t border-white/5">
                <p>Designed & Built by Shreedhar Shiragur. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
