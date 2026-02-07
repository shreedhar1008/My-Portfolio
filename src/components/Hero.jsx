import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Terminal from './Terminal';

const Hero = () => {
    return (
        <section id="about" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden py-10">

            <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div className="text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                            Hi, I'm <br />
                            <span className="text-gradient">Shreedhar Shiragur</span>
                        </h1>
                    </motion.div>

                    <div className="text-2xl md:text-3xl font-light text-gray-300 mb-6 h-16 flex items-center">
                        <TypeAnimation
                            sequence={[
                                'CS Engineer',
                                2000,
                                'AI/ML Specialist',
                                2000,
                                'Cloud Enthusiast',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-secondary opacity-90 font-mono"
                        />
                    </div>

                    <motion.p
                        className="text-gray-400 max-w-lg text-lg leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Building intelligent systems in the cloud. Passionate about Deep Learning, Computer Vision, and scalable architecture.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex gap-4"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-black hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(108,99,255,0.5)] cursor-pointer"
                        >
                            View Work
                        </Link>
                    </motion.div>
                </div>

                {/* Right Content - Terminal */}
                <div className="flex justify-center lg:justify-end">
                    <Terminal />
                </div>

            </div>

            {/* Floating abstract shapes */}
            <motion.div
                className="absolute top-1/4 left-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-float -z-10"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float -z-10"
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
        </section>
    );
};

export default Hero;
