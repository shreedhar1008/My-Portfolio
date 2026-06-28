import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
    const experiences = [
        {
            title: "Python Full-Stack Developer Intern",
            institution: "Infosys Springboard - StudyTrack Project",
            period: "Nov 2025 - Jan 2026",
            description: [
                "Built an AI-based Student Study Habit Recommender System using a hybrid ML pipeline (Random Forest and K-Means clustering) trained on 8000+ student records.",
                "Exposed trained models as Flask REST APIs to deliver real-time predictions and personalized recommendations consumed by a web front-end.",
                "Managed source control and CI workflow with Git; authored API documentation and model-evaluation reports."
            ]
        },
        {
            title: "B.E. (Computer Science & Engineering)",
            institution: "East West Institute of Technology, Bengaluru, Karnataka",
            period: "2022 - 2026",
            description: [
                "CGPA: 8.19 / 10",
                "Focused on strong CS fundamentals, AI/ML, and Software Development."
            ]
        },
        {
            title: "PUC (PCMB)",
            institution: "Smt. Vidhya P Hanchinmani PU College, Dharwad, Karnataka",
            period: "2020 - 2022",
            description: [
                "Score: 89%",
                "Pre-University Course in Physics, Chemistry, Mathematics, and Biology."
            ]
        },
        {
            title: "SSLC",
            institution: "SJBVP Hosahalli, Gadag, Karnataka",
            period: "2020",
            description: [
                "Score: 84.16%",
                "Secondary School Leaving Certificate."
            ]
        }
    ];

    return (
        <section id="journey" className="py-12 md:py-20 relative">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-8 md:mb-16"
                >
                    <h3 className="font-label text-xs tracking-[0.2em] uppercase mb-2 font-semibold text-primary">Experience & Education</h3>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">
                        My Journey
                    </h2>
                </motion.div>

                {/* Timeline container */}
                <div className="relative max-w-2xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-[15px] md:left-[140px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

                    <div className="space-y-6 md:space-y-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="relative flex items-start gap-4 md:gap-0"
                            >
                                {/* Date - left side on desktop */}
                                <div className="hidden md:block w-[120px] flex-shrink-0 text-right pt-5">
                                    <span className="font-label text-xs font-bold uppercase tracking-wider text-primary">{exp.period}</span>
                                </div>

                                {/* Dot */}
                                <div className="w-[31px] md:w-[41px] flex-shrink-0 flex justify-center mt-5 z-10">
                                    <div className="w-[7px] h-[7px] rounded-full bg-primary shadow-neon" />
                                </div>

                                {/* Card */}
                                <div className="flex-1 glass-card p-5 md:p-6 transition-all duration-300">
                                    <div className="md:hidden font-label text-xs font-bold uppercase tracking-wider text-primary mb-2">{exp.period}</div>
                                    <h4 className="text-lg font-heading font-extrabold text-white mb-1">{exp.title}</h4>
                                    <div className="font-label text-xs font-semibold text-secondary uppercase tracking-wider mb-3">{exp.institution}</div>
                                    <ul className="font-body list-disc ml-4 space-y-1.5 text-on-surface-variant text-sm leading-relaxed">
                                        {exp.description.map((bullet, bIdx) => (
                                            <li key={bIdx}>{bullet}</li>
                                        ))}
                                    </ul>
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
