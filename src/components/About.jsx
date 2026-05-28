import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Python", "React", "AWS", "AI/ML", "TensorFlow", "Node.js", "MongoDB", "SQL"
];

const About = () => {
    return (
        <section className="py-20 relative">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-gray-500 text-xs tracking-[0.2em] uppercase mb-4 font-semibold">About</h3>
                        <div className="glass-card p-6 md:p-8">
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Shreedhar Shiragur is a software engineer specializing in web design, 
                                cloud architecture, and machine learning. He has a passion for building 
                                intelligent, scalable systems and constantly pushing the boundaries of 
                                what's possible on the web.
                                <br /><br />
                                With a strong foundation in Python, TensorFlow, and Cloud platforms, 
                                he builds robust backends and integrates complex AI models into seamless 
                                user experiences.
                            </p>
                        </div>
                    </motion.div>

                    {/* Skills Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-gray-500 text-xs tracking-[0.2em] uppercase mb-4 font-semibold">Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 text-sm font-medium shadow-[0_0_12px_rgba(99,102,241,0.1)] hover:shadow-neon hover:border-primary/40 transition-all cursor-default"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
