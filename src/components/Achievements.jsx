import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaCode } from 'react-icons/fa';

const Achievements = () => {
    const achievements = [
        {
            title: "Google Cloud SkillBoost",
            description: "Completed comprehensive cloud architecture tracks. Proficient in deploying scalable apps on GCP.",
            icon: <FaCloud className="text-4xl text-secondary" />,
            link: "https://www.cloudskillsboost.google/public_profiles/..." // Placeholder or real link if known
        },
        {
            title: "HackerRank Gold Badge",
            description: "Achieved 5-star rating in Problem Solving and Python. Top percentile in algorithms.",
            icon: <FaCode className="text-4xl text-primary" />,
            link: "https://www.hackerrank.com/..."
        },
        {
            title: "Google Cloud Arcade Novice",
            description: "Earned the Arcade Novice badge by completing hands-on Google Cloud labs and skill-based challenges, demonstrating foundational cloud computing and GCP service knowledge.",
            icon: <FaCloud className="text-4xl text-primary" />,
            link: "https://www.cloudskillsboost.google/public_profiles/your-profile-id"
        },
    ];

    return (
        <section id="achievements" className="py-20 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-4xl font-heading font-bold text-center mb-16 text-gray-900">
                    <span className="text-secondary">Credentials</span> & Badges
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card p-6 md:p-8 rounded-xl flex flex-col sm:flex-row items-start gap-6 hover:border-secondary/50 transition-colors"
                        >
                            <div className="p-4 bg-gray-50 rounded-full border border-gray-200">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                                <a href="#" className="text-secondary text-sm font-semibold hover:underline">Verify Credential →</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Achievements;
