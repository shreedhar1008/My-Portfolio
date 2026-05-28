import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
    const experiences = [
        {
            title: "Virtual Intern – Android App (GenAI)",
            institution: "MindMatrix",
            period: "Feb 2026 - May 2026",
            description: "Developing Android apps using Generative AI, focusing on AI-assisted development workflows and intelligent features."
        },
        {
            title: "Virtual Intern",
            institution: "Infosys Springboard",
            period: "Nov 2025 - Jan 2026",
            description: "Built an AI system predicting dropout risk and recommending personalized study habits using Machine Learning."
        },
        {
            title: "Bachelor of Engineering (CSE)",
            institution: "EWIT, Bengaluru",
            period: "2022 - 2026",
            description: "CGPA: 8.12/10. Focused on strong fundamentals in DSA, DBMS, and AI/ML."
        },
        {
            title: "PUC (PCMB)",
            institution: "Smt. Vidhya P Hanchinmani",
            period: "2020 - 2022",
            description: "Completed Pre-University Course. Scored 89%."
        }
    ];

    return (
        <section id="journey" className="py-20 relative">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-gray-500 text-xs tracking-[0.2em] uppercase mb-2 font-semibold">Experience</h3>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                        Experience
                    </h2>
                </motion.div>

                {/* Timeline container */}
                <div className="relative max-w-2xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-3 md:left-[140px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

                    <div className="space-y-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative flex items-start gap-6 md:gap-8"
                            >
                                {/* Date - left side on desktop */}
                                <div className="hidden md:block w-[120px] flex-shrink-0 text-right pt-5">
                                    <span className="text-gray-500 text-xs font-medium whitespace-nowrap">{exp.period}</span>
                                </div>

                                {/* Dot */}
                                <div className="relative flex-shrink-0 mt-5">
                                    <div className="w-[7px] h-[7px] rounded-full bg-primary shadow-neon" />
                                </div>

                                {/* Card */}
                                <div className="flex-1 glass-card p-5 md:p-6 hover:border-primary/30 transition-colors">
                                    <div className="md:hidden text-primary text-xs font-medium mb-2">{exp.period}</div>
                                    <h4 className="text-white font-bold mb-1">{exp.title}</h4>
                                    <div className="text-gray-400 text-sm mb-2">{exp.institution}</div>
                                    <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
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
