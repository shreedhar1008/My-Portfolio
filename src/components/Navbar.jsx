import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 20);
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
        { name: 'Experience', to: 'journey' },
        { name: 'Contact', to: 'contact' }
    ];

    return (
        <header className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-[#051424]/95 border-b border-white/10 shadow-xl' 
                : 'bg-transparent border-b border-transparent'
        }`}>
            <div className="flex justify-between items-center w-full px-6 py-4 max-w-5xl mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-neon">
                        <span className="font-heading font-extrabold text-slate-900 text-sm">SS</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className="font-label text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary cursor-pointer transition-colors duration-300 font-semibold"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-1 focus:outline-none"
                >
                    {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
                </button>
            </div>

            {/* Mobile Menu Container */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden w-full bg-[#051424]/95 backdrop-blur-xl border-b border-white/10 py-5 px-6"
                    >
                        <ul className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="font-label text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary cursor-pointer transition-colors duration-300 font-semibold block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
