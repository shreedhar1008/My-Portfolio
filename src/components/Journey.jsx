import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Journey = () => {
    const experiences = [
        {
            title: "Virtual Intern – Android App Development (GenAI)",
            institution: "MindMatrix",
            location: "Remote",
            period: "Feb 2026 - May 2026",
            description: "Currently working as a Virtual Intern on Android app development using Generative AI, focusing on AI-assisted development workflows, app design, and intelligent feature integration.",
            type: "internship",
            icon: <FaBriefcase />,
            tags: ["Virtual Internship", "Android Development", "Generative AI"]
        },
        {
            title: "Virtual Intern",
            institution: "Infosys Springboard",
            location: "Remote",
            period: "Nov 2025 - Jan 2026",
            description: "Built an AI-based system that predicts student dropout risk and recommends personalized study habits by analyzing academic and behavioral data using machine learning techniques.",
            type: "internship",
            icon: <FaBriefcase />,
            tags: ["Virtual Internship", "Python Technology Stack", "Backend Development", "Machine Learning", "Web development"]
        },
        {
            title: "Bachelor of Engineering",
            institution: "East West Institute of Technology",
            location: "Bengaluru, Karnataka",
            period: "2022 - 2026",
            description: "Computer Science and Engineering. Current CGPA: 8.00/10 (till 7th sem). Focused on strong fundamentals in Data Structures, Algorithms, DBMS, and AI/ML.",
            type: "education",
            icon: <FaGraduationCap />,
            tags: ["B.E. (CSE)"]
        },
        {
            title: "PUC (PCMB)",
            institution: "Smt. Vidhya P Hanchinmani PU College",
            location: "Dharwad, Karnataka",
            period: "2020 - 2022",
            description: "Completed Pre-University Course with focus on Physics, Chemistry, Mathematics, and Biology. Scored 89%.",
            type: "education",
            icon: <FaGraduationCap />,
            tags: ["PUC"]
        },
        {
            title: "SSLC",
            institution: "SJBVP Hosahalli",
            location: "Gadag, Karnataka",
            period: "2020",
            description: "Completed secondary education with achievement of 84.16%.",
            type: "education",
            icon: <FaGraduationCap />,
            tags: ["SSLC"]
        }
    ];

    return (
        <section id="journey" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                        My <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Focused on backend development, scalable APIs, and ML-integrated full-stack systems.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative px-4 md:px-0">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center justify-between w-full relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content Card */}
                                <div className="w-full md:w-[45%] ml-12 md:ml-0 glass-card p-5 md:p-6 rounded-xl hover:border-secondary/50 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-secondary font-bold text-base md:text-lg">{exp.title}</span>
                                    </div>
                                    <h4 className="text-gray-900 font-semibold mb-1 text-sm md:text-base">{exp.institution} <span className="text-gray-500 text-[10px] md:text-xs font-normal">@{exp.location}</span></h4>
                                    <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 text-[9px] md:text-[10px] font-semibold bg-gray-100 border border-gray-200 text-gray-600 rounded-md uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Icon / Center Marker */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 bg-white p-2 md:p-3 rounded-full border-2 border-primary shadow-md my-4 md:my-0">
                                    <div className="text-primary text-lg md:text-xl">
                                        {exp.icon}
                                    </div>
                                </div>

                                {/* Date Area */}
                                <div className={`w-full md:w-[45%] flex mt-4 md:mt-0 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                    <div className="flex items-center gap-2 text-gray-600 font-mono text-[10px] md:text-sm bg-white px-3 md:px-4 py-1 rounded-full border border-gray-200 shadow-sm">
                                        <span className="w-2 h-2 rounded-full bg-secondary" />
                                        {exp.period}
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
