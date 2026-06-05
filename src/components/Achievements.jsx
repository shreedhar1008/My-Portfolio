import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Achievements = () => {
    const achievements = [
        {
            title: "HackerRank 5-Star Python",
            description: "Rated top-tier problem-solving badge demonstrating strong algorithmic and coding ability.",
            icon: <FaCode className="text-3xl text-primary" />,
        },
        {
            title: "Google Cloud Arcade Novice",
            description: "Arcade Game Novice status with 40+ GCP skill badges, covering BigQuery, Kubernetes, Vertex AI, and more.",
            icon: <FaCloud className="text-3xl text-secondary" />,
        },
        {
            title: "LeetCode Practice",
            description: "Actively solving DSA problems (50+ Easy/Medium/Hard) to build competitive programming foundations.",
            icon: <SiLeetcode className="text-3xl text-yellow-500" />,
        },
    ];

    return (
        <section id="achievements" className="py-20 relative">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h3 className="font-label text-xs tracking-[0.2em] uppercase mb-2 font-semibold text-center text-primary">Achievements</h3>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center text-white">
                        Credentials & Badges
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group glass-card p-6 flex flex-col items-start gap-4 transition-all duration-300"
                        >
                            <div className="p-3 bg-dark rounded-lg border border-white/10">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-heading font-extrabold mb-2 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
