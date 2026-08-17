import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const progressBarRef = useRef(null);
    const scrolledRef = useRef(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const isScrolledNow = scrollY > 20;

                    if (scrolledRef.current !== isScrolledNow) {
                        scrolledRef.current = isScrolledNow;
                        setScrolled(isScrolledNow);
                    }
                    
                    // Directly update progress bar style without triggering React re-renders during scroll
                    if (progressBarRef.current) {
                        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                        const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
                        progressBarRef.current.style.width = `${progress}%`;
                    }

                    ticking = false;
                });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', to: 'about' },
        { name: 'Projects', to: 'projects' },
        { name: 'Journey', to: 'journey' },
        { name: 'Achievements', to: 'achievements' },
        { name: 'Contact', to: 'contact' }
    ];

    return (
        <>
            {/* Top Reading Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent pointer-events-none">
                <div 
                    ref={progressBarRef}
                    className="h-full bg-gradient-to-r from-primary via-secondary to-primary shadow-[0_0_12px_rgba(96,165,250,0.8)]"
                    style={{ width: '0%' }}
                />
            </div>

            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 ${
                scrolled ? 'pt-2 sm:pt-3' : 'pt-4 sm:pt-5'
            }`}>
                <div className="max-w-5xl mx-auto">
                    <nav className={`w-full px-5 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 flex items-center justify-between ${
                        scrolled 
                            ? 'glass-nav shadow-2xl backdrop-blur-2xl border border-white/10' 
                            : 'bg-dark/40 backdrop-blur-md border border-white/5'
                    }`}>
                        {/* Logo Monogram */}
                        <Link
                            to="hero"
                            smooth={true}
                            duration={600}
                            className="flex items-center gap-3 cursor-pointer group"
                        >
                            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:shadow-neon transition-all duration-300">
                                <span className="font-heading font-black text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:scale-105 transition-transform duration-300">
                                    SS
                                </span>
                                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                            </div>
                            <span className="hidden sm:inline font-heading font-bold text-sm tracking-tight text-white/90 group-hover:text-white transition-colors">
                                Shreedhar Shiragur
                            </span>
                        </Link>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center gap-1 lg:gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={600}
                                    onSetActive={() => setActiveSection(item.to)}
                                    className="relative px-3.5 py-1.5 font-label text-xs uppercase tracking-wider text-on-surface-variant hover:text-white cursor-pointer transition-colors duration-200 font-semibold"
                                >
                                    {item.name}
                                    {activeSection === item.to && (
                                        <motion.div
                                            layoutId="activeNavPill"
                                            className="absolute inset-0 bg-primary/10 border border-primary/30 rounded-lg -z-10 shadow-[0_0_15px_rgba(96,165,250,0.15)]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Right Status / CTA */}
                        <div className="hidden sm:flex items-center gap-3">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-label font-medium tracking-wide">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span>Available</span>
                            </div>
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                            className="md:hidden text-on-surface hover:text-white p-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none transition-colors"
                        >
                            {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
                        </button>
                    </nav>
                </div>

                {/* Mobile Menu Drawer */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -12, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="md:hidden max-w-5xl mx-auto mt-2"
                        >
                            <div className="w-full bg-[#070e1e]/95 backdrop-blur-2xl border border-white/15 rounded-2xl py-5 px-6 shadow-2xl">
                                <ul className="flex flex-col gap-3">
                                    {navItems.map((item, idx) => (
                                        <motion.li 
                                            key={item.name}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                        >
                                            <Link
                                                to={item.to}
                                                smooth={true}
                                                offset={-70}
                                                duration={600}
                                                onClick={() => setIsOpen(false)}
                                                className="font-label text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer transition-all duration-200 font-semibold flex items-center justify-between"
                                            >
                                                <span>{item.name}</span>
                                                <span className="text-primary/40 text-xs">→</span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                    <li className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-on-surface-variant px-3">
                                        <span className="font-label uppercase tracking-wider text-[11px] text-emerald-400 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                            Open to Opportunities
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Navbar;
