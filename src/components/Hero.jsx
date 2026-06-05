import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-28 pb-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="mb-8 relative"
            >
                {/* Glowing ring behind image */}
                <div className="absolute inset-[-6px] rounded-full bg-gradient-to-tr from-primary via-secondary to-primary animate-spin-slow opacity-20 blur-lg" />
                
                {/* Profile Image container */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-[2px] bg-gradient-to-tr from-primary to-secondary">
                    <div className="w-full h-full rounded-full overflow-hidden bg-dark">
                        <img 
                            src="/profile.jpg" 
                            alt="Shreedhar Shiragur" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center max-w-3xl"
            >
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-extrabold mb-6 tracking-tight leading-[1.1] text-white">
                    <span className="block text-on-surface">Shreedhar</span>
                    <span className="block text-gradient">Shiragur</span>
                </h1>

                <div className="text-lg md:text-2xl text-on-surface-variant mb-10 h-8 font-body font-light flex items-center justify-center gap-2">
                    <span className="font-label text-primary font-medium">I am a</span>
                    <TypeAnimation
                        sequence={[
                            'AI/ML Engineer',
                            2000,
                            'Software Developer',
                            2000,
                            'Problem Solver',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-white text-gradient"
                    />
                </div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-label font-bold text-slate-900 shadow-neon hover:shadow-neon-strong cursor-pointer transition-all duration-300 text-sm hover:scale-[1.02] active:scale-[0.98]"
                    >
                        View My Work
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
