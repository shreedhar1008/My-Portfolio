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

    const navItems = ['About', 'Journey', 'Projects', 'Achievements', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-4 cursor-pointer">
                    <img src="/profile.jpg" alt="Profile" className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-primary object-cover" />
                    <div className="text-2xl md:text-3xl font-bold font-heading text-gray-900 tracking-widest uppercase">
                        <span className="text-primary">श्रीಧR</span>_S
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <li key={item}>
                            <Link
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                className="text-gray-600 hover:text-primary cursor-pointer transition-colors duration-300 font-medium"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-900 p-2 focus:outline-none"
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200"
                    >
                        <ul className="flex flex-col items-center py-6 space-y-6">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item.toLowerCase()}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl text-gray-600 hover:text-primary cursor-pointer transition-colors duration-300 font-medium"
                                    >
                                        {item}
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
