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
            description: "CGPA: 8.00/10. Focused on strong fundamentals in DSA, DBMS, and AI/ML."
        },
        {
            title: "PUC (PCMB)",
            institution: "Smt. Vidhya P Hanchinmani",
            period: "2020 - 2022",
            description: "Completed Pre-University Course. Scored 89%."
        }
    ];

    return (
        <section id="journey" className="py-20 relative max-w-5xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h3 className="text-gray-300 text-sm tracking-widest uppercase mb-2 font-semibold">Experience</h3>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                    Experience
                </h2>
            </motion.div>

            <div className="relative pl-6 md:pl-0 md:flex md:justify-center">
                {/* Timeline Line */}
                <div className="absolute left-[27px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />

                <div className="w-full md:w-2/3 lg:w-1/2 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-16"
                        >
                            {/* Glowing Dot */}
                            <div className="absolute left-[-21px] md:left-[-35px] top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-neon border-2 border-dark z-10" />

                            {/* Date Label (absolute left on desktop, inline on mobile) */}
                            <div className="hidden md:block absolute left-[-150px] top-1/2 transform -translate-y-1/2 text-gray-400 text-xs w-[100px] text-right font-medium">
                                {exp.period}
                            </div>

                            {/* Card */}
                            <div className="glass-card p-6 rounded-xl relative group hover:border-primary/50 transition-colors">
                                <div className="md:hidden text-primary text-xs font-medium mb-2">{exp.period}</div>
                                <h4 className="text-white font-bold mb-1 text-lg">{exp.title}</h4>
                                <div className="text-gray-300 text-sm mb-3 font-medium">{exp.institution}</div>
                                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
