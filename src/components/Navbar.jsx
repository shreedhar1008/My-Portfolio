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
        { name: 'Experience', to: 'journey' }, // mapping Experience to journey section
        { name: 'Contact', to: 'contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-4xl`}
        >
            <div className={`flex justify-between items-center px-6 py-4 rounded-full transition-all duration-300 ${scrolled ? 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-neon' : 'bg-transparent'}`}>
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-neon">
                        <span className="font-heading font-bold text-white text-xl">SS</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className="text-gray-300 hover:text-white hover:shadow-[0_0_10px_#fff] cursor-pointer transition-all duration-300 font-medium text-sm tracking-wide"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2 focus:outline-none"
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden mt-4 bg-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-neon"
                    >
                        <ul className="flex flex-col items-center space-y-6">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg text-gray-300 hover:text-primary cursor-pointer transition-colors duration-300 font-medium"
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
    );
};

export default Navbar;
