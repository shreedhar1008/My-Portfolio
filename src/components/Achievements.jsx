import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaCode } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiGooglecloud } from 'react-icons/si';
import { HiSparkles } from 'react-icons/hi2';

const Achievements = () => {
    const achievements = [
        {
            title: "HackerRank 5-Star Python",
            description: "Rated top-tier problem-solving badge demonstrating strong algorithmic and coding ability.",
            icon: <SiHackerrank className="text-3xl text-emerald-400" />,
            badge: "5-Star Badge",
            highlight: "Gold Problem Solver",
            accentColor: "border-emerald-500/30 hover:border-emerald-500/60",
            glowColor: "rgba(52, 211, 153, 0.15)"
        },
        {
            title: "Google Cloud Arcade Novice",
            description: "Arcade Game Novice status with 40+ GCP skill badges, covering BigQuery, Kubernetes, Vertex AI, and more.",
            icon: <SiGooglecloud className="text-3xl text-primary" />,
            badge: "40+ Badges",
            highlight: "Vertex AI & Cloud",
            accentColor: "border-primary/30 hover:border-primary/60",
            glowColor: "rgba(96, 165, 250, 0.15)"
        },
        {
            title: "LeetCode Practice",
            description: "Actively solving DSA problems (50+ Easy/Medium/Hard) to build competitive programming foundations.",
            icon: <SiLeetcode className="text-3xl text-amber-400" />,
            badge: "50+ Solved",
            highlight: "Data Structures & Algos",
            accentColor: "border-amber-500/30 hover:border-amber-500/60",
            glowColor: "rgba(251, 191, 36, 0.15)"
        },
    ];

    return (
        <section id="achievements" className="py-16 md:py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-14 text-center"
                >
                    <div className="inline-flex items-center gap-2 font-label text-xs tracking-[0.25em] uppercase font-semibold text-primary mb-3">
                        <span className="w-6 h-[1.5px] bg-primary rounded-full inline-block" />
                        <span>Honors & Certifications</span>
                        <span className="w-6 h-[1.5px] bg-primary rounded-full inline-block" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
                        Credentials & <span className="text-gradient">Badges</span>
                    </h2>
                </motion.div>

                {/* Achievements Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -6 }}
                            className={`group glass-card p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${item.accentColor}`}
                        >
                            {/* Inner Radial Glow on Hover */}
                            <div 
                                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ backgroundColor: item.glowColor }}
                            />

                            <div>
                                <div className="flex items-center justify-between gap-4 mb-6">
                                    <div className="p-3.5 bg-dark-surface rounded-2xl border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="font-label text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white group-hover:border-primary/40 transition-colors">
                                        {item.badge}
                                    </span>
                                </div>

                                <h3 className="text-xl font-heading font-extrabold mb-2.5 text-white group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                
                                <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-label text-on-surface-muted">
                                <span className="flex items-center gap-1.5 text-secondary">
                                    <HiSparkles className="text-xs" />
                                    {item.highlight}
                                </span>
                                <span className="text-emerald-400 font-semibold">Verified</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
