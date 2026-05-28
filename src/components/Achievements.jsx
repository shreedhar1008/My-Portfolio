import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaCode } from 'react-icons/fa';

const Achievements = () => {
    const achievements = [
        {
            title: "Google Cloud SkillBoost",
            description: "Completed comprehensive cloud architecture tracks. Proficient in deploying scalable apps on GCP.",
            icon: <FaCloud className="text-3xl text-secondary" />,
        },
        {
            title: "HackerRank Gold Badge",
            description: "Achieved 5-star rating in Problem Solving and Python. Top percentile in algorithms.",
            icon: <FaCode className="text-3xl text-primary" />,
        },
        {
            title: "Google Cloud Arcade Novice",
            description: "Earned the Arcade Novice badge by completing hands-on Google Cloud labs and skill-based challenges.",
            icon: <FaCloud className="text-3xl text-primary" />,
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
                    <h3 className="text-gray-500 text-xs tracking-[0.2em] uppercase mb-2 font-semibold text-center">Achievements</h3>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-white">
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
                            className="group glass-card p-6 flex flex-col items-start gap-4 hover:border-primary/30 transition-all"
                        >
                            <div className="p-3 bg-white/[0.04] rounded-xl border border-white/10">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-heading mb-2 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
