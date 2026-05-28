import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Python", "React", "AWS", "AI/ML", "TensorFlow", "Node.js", "MongoDB", "SQL"
];

const About = () => {
    return (
        <section className="py-20 relative max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* About Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-gray-300 text-sm tracking-widest uppercase mb-4 font-semibold">About</h3>
                    <div className="glass-card p-8">
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
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-gray-300 text-sm tracking-widest uppercase mb-4 font-semibold">Skills</h3>
                    <div className="flex flex-wrap gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:border-primary/50 transition-all cursor-default"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
