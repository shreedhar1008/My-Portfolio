import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-10 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto glass-card p-6 md:p-10 rounded-2xl border-l-4 border-secondary"
            >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-white">
                    About <span className="text-gradient">Me</span>
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Hello! I'm <span className="text-white font-semibold">Shreedhar Shiragur</span>, a passionate CS Engineer specializing in AI/ML and Cloud technologies.
                    I love bridging the gap between complex algorithms and real-world applications.
                </p>

                <p className="text-gray-400 leading-relaxed">
                    With a strong foundation in Python, TensorFlow, and Cloud platforms, I build scalable intelligent systems.
                    When I'm not coding, I'm exploring the latest in generative AI or optimizing cloud architectures.
                </p>

            </motion.div>
        </section>
    );
};

export default About;
