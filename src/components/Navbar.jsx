import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                    <img src="/profile.jpg" alt="Profile" className="w-16 h-16 rounded-full border-2 border-primary object-cover" />
                    <div className="text-3xl font-bold font-heading text-white tracking-widest uppercase">
                        <span className="text-secondary">श्रीಧR</span>_S
                    </div>
                </div>

                <ul className="flex space-x-8">
                    {['About', 'Journey', 'Projects', 'Achievements', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                className="text-gray-300 hover:text-secondary cursor-pointer transition-colors duration-300 font-medium"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
