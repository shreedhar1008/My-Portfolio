import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', to: 'about' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'journey' },
        { name: 'Contact', to: 'contact' }
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none pt-6">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-[90%] max-w-3xl pointer-events-auto"
            >
                <div className={`flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ${
                    scrolled
                        ? 'bg-[#0a0f1e]/80 backdrop-blur-xl border border-white/15 shadow-neon'
                        : 'bg-transparent border border-transparent'
                }`}>
                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-neon">
                            <span className="font-heading font-extrabold text-slate-900 text-sm">SS</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    className="font-label text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary cursor-pointer transition-colors duration-300 font-semibold"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-1 focus:outline-none"
                    >
                        {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="md:hidden mt-3 bg-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-neon"
                        >
                            <ul className="flex flex-col items-center gap-5">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.to}
                                            smooth={true}
                                            duration={500}
                                            onClick={() => setIsOpen(false)}
                                            className="font-label text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary cursor-pointer transition-colors duration-300 font-semibold"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};

export default Navbar;
