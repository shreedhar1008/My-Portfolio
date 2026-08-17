import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="flex flex-col items-center justify-center relative px-6 pt-28 sm:pt-36 pb-8 md:pb-12 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                {/* Status Pill */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 shadow-sm hover:border-primary/40 transition-colors"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-medium">
                        Open to Software Development Roles
                    </span>
                </motion.div>

                {/* Profile Image with Animated Orbital Rings */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
                    className="mb-8 relative group"
                >
                    {/* Outer Ambient Glow */}
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/30 via-secondary/20 to-primary/30 animate-spin-slow opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Spinning Gradient Border Ring */}
                    <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-[2px] bg-gradient-to-tr from-primary via-secondary to-primary shadow-2xl">
                        <div className="w-full h-full rounded-full overflow-hidden bg-dark-surface p-1">
                            <img 
                                src="/profile.jpg" 
                                alt="Shreedhar Shiragur" 
                                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                                width={176}
                                height={176}
                                loading="eager"
                                fetchpriority="high"
                                decoding="async"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Main Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.8 }}
                    className="mb-5"
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight leading-[1.12] text-white">
                        <span className="text-white/95">Shreedhar </span>
                        <span className="text-gradient">Shiragur</span>
                    </h1>
                </motion.div>

                {/* Subtitle / Value Proposition */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="text-xs sm:text-sm md:text-base text-on-surface-variant mb-8 sm:mb-10 font-body font-normal text-center w-full max-w-4xl px-4 sm:whitespace-nowrap tracking-wide"
                >
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-secondary">
                        Software Engineer
                    </span>
                    <span className="text-slate-300"> — Turning prototypes into production‑ready systems.</span>
                </motion.div>

                {/* CTA Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.7 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        offset={-70}
                        duration={600}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 btn-gradient-primary rounded-xl font-label font-bold text-xs uppercase tracking-wider cursor-pointer group"
                    >
                        <span>View My Work</span>
                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        to="contact"
                        smooth={true}
                        offset={-70}
                        duration={600}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 btn-ghost-glow rounded-xl font-label font-semibold text-xs uppercase tracking-wider cursor-pointer"
                    >
                        <span>Get In Touch</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
