import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaAward, FaSchool } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const Journey = () => {
    const experiences = [
        {
            type: "Internship",
            title: "Python Full-Stack Developer Intern",
            institution: "Infosys Springboard - StudyTrack Project",
            period: "Nov 2025 - Jan 2026",
            icon: <FaBriefcase className="text-primary" />,
            badgeColor: "bg-primary/10 text-primary border-primary/20",
            description: [
                "Built an AI-based Student Study Habit Recommender System using a hybrid ML pipeline (Random Forest and K-Means clustering) trained on 8000+ student records.",
                "Exposed trained models as Flask REST APIs to deliver real-time predictions and personalized recommendations consumed by a web front-end.",
                "Managed source control and CI workflow with Git; authored API documentation and model-evaluation reports."
            ]
        },
        {
            type: "Bachelor Degree",
            title: "B.E. (Computer Science & Engineering)",
            institution: "East West Institute of Technology, Bengaluru, Karnataka",
            period: "2022 - 2026",
            icon: <FaGraduationCap className="text-secondary" />,
            badgeColor: "bg-secondary/10 text-secondary border-secondary/20",
            highlight: "CGPA: 8.19 / 10",
            description: [
                "CGPA: 8.19 / 10",
                "Focused on strong CS fundamentals, AI/ML, and Software Development."
            ]
        },
        {
            type: "Pre-University",
            title: "PUC (PCMB)",
            institution: "Smt. Vidhya P Hanchinmani PU College, Dharwad, Karnataka",
            period: "2020 - 2022",
            icon: <FaAward className="text-amber-400" />,
            badgeColor: "bg-amber-400/10 text-amber-400 border-amber-400/20",
            highlight: "Score: 89%",
            description: [
                "Score: 89%",
                "Pre-University Course in Physics, Chemistry, Mathematics, and Biology."
            ]
        },
        {
            type: "High School",
            title: "SSLC",
            institution: "SJBVP Hosahalli, Gadag, Karnataka",
            period: "2020",
            icon: <FaSchool className="text-emerald-400" />,
            badgeColor: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
            highlight: "Score: 84.16%",
            description: [
                "Score: 84.16%",
                "Secondary School Leaving Certificate."
            ]
        }
    ];

    return (
        <section id="journey" className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-12 md:mb-16 text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 font-label text-xs tracking-[0.25em] uppercase font-semibold text-primary mb-3">
                        <span className="w-6 h-[1.5px] bg-primary rounded-full inline-block" />
                        <span>Experience & Education</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
                        My <span className="text-gradient">Journey</span>
                    </h2>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Glowing Vertical Line */}
                    <div className="absolute left-4 md:left-[170px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent" />

                    <div className="space-y-6 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="relative flex items-start group"
                            >
                                {/* Period Badge - Desktop Left Column */}
                                <div className="hidden md:block w-[150px] flex-shrink-0 text-right pr-6 pt-5">
                                    <span className="font-label text-xs font-bold uppercase tracking-wider text-primary">
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Glowing Center Node */}
                                <div className="absolute left-0 md:relative md:left-auto w-8 h-8 md:w-10 md:h-10 flex-shrink-0 rounded-full bg-dark-surface border border-white/20 flex items-center justify-center shadow-lg group-hover:border-primary group-hover:shadow-neon transition-all duration-300 z-10 mt-4 md:mt-4">
                                    <div className="text-xs md:text-sm">
                                        {exp.icon}
                                    </div>
                                </div>

                                {/* Main Timeline Card */}
                                <div className="flex-1 min-w-0 ml-11 md:ml-6">
                                    <div className="glass-card p-5 sm:p-7 hover:border-primary/40 transition-all duration-300 group-hover:shadow-2xl">
                                        {/* Mobile Period & Tag Header */}
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                            <span className="md:hidden font-label text-xs font-bold uppercase tracking-wider text-primary">
                                                {exp.period}
                                            </span>
                                            <span className={`font-label text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
                                                {exp.type}
                                            </span>
                                        </div>

                                        <h3 className="text-base sm:text-xl font-heading font-extrabold text-white group-hover:text-primary transition-colors mb-1">
                                            {exp.title}
                                        </h3>

                                        <div className="font-label text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
                                            {exp.institution}
                                        </div>

                                        <ul className="space-y-2 font-body text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                                            {exp.description.map((bullet, bIdx) => (
                                                <li key={bIdx} className="flex items-start gap-2">
                                                    <span className="text-primary mt-1 text-xs flex-shrink-0">▹</span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
