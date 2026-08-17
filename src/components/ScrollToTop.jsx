import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const currentProgress = (window.scrollY / totalHeight) * 100;
                setScrollPercentage(currentProgress);
                setIsVisible(window.scrollY > 300);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.7, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.7, y: 20 }}
                    onClick={scrollToTop}
                    aria-label="Scroll back to top"
                    className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-dark-surface/90 border border-white/20 text-white shadow-2xl backdrop-blur-xl hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group flex items-center justify-center"
                >
                    {/* SVG Circular Progress Ring */}
                    <svg className="absolute w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
                        <circle
                            cx="22"
                            cy="22"
                            r="18"
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.1)"
                            strokeWidth="2.5"
                        />
                        <circle
                            cx="22"
                            cy="22"
                            r="18"
                            fill="none"
                            stroke="#60a5fa"
                            strokeWidth="2.5"
                            strokeDasharray="113.097"
                            strokeDashoffset={113.097 - (113.097 * scrollPercentage) / 100}
                            strokeLinecap="round"
                            className="transition-all duration-150"
                        />
                    </svg>

                    <FaArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
