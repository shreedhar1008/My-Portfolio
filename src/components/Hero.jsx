import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-28 pb-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="mb-10 relative"
            >
                {/* Glowing ring behind image */}
                <div className="absolute inset-[-6px] rounded-full bg-gradient-to-tr from-primary via-secondary to-primary animate-spin-slow opacity-60 blur-md" />
                
                {/* Profile Image container */}
                <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full p-[3px] bg-dark">
                    <img 
                        src="/profile.jpg" 
                        alt="Shreedhar Shiragur" 
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center max-w-2xl"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight leading-[1.1] text-white">
                    Developing Intelligent<br />
                    AI/ML & Software Solutions
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-10 font-light">
                    <span className="text-gray-200 font-medium">Shreedhar Shiragur</span>
                    <span className="mx-3 text-white/20">|</span>
                    AI/ML Engineer & Software Developer
                </p>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-white shadow-neon cursor-pointer transition-shadow hover:shadow-neon-strong text-sm"
                    >
                        View Work
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
