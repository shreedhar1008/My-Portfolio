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
            <main className="container mx-auto px-4 pt-20 md:pt-14 space-y-4">
                <Hero />
                <About />
                <Journey />
                <Projects />
                <Achievements />
                <Contact />
            </main>
            <footer className="text-center py-8 text-gray-500 text-sm border-t border-gray-200 bg-gray-50/50 backdrop-blur-sm">
                <p>&copy; {new Date().getFullYear()} Shreedhar Shiragur. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default App;
