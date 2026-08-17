import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from './Terminal';
import { 
    FaCode, 
    FaDatabase, 
    FaBrain, 
    FaRobot, 
    FaChartLine, 
    FaLayerGroup, 
    FaServer, 
    FaCloud, 
    FaMicrochip,
    FaTerminal,
    FaUserCheck
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const skillCategories = [
    {
        title: "Languages",
        icon: <FaCode className="text-primary" />,
        skills: ["Python", "JavaScript", "SQL (MySQL)", "HTML5", "CSS3", "Java"]
    },
    {
        title: "Databases",
        icon: <FaDatabase className="text-cyan-400" />,
        skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase"]
    },
    {
        title: "AI / ML Frameworks",
        icon: <FaBrain className="text-secondary" />,
        skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "NLTK"]
    },
    {
        title: "Generative AI & LLMs",
        icon: <FaRobot className="text-fuchsia-400" />,
        skills: ["LangChain", "RAG Pipelines", "Google Gemini API", "Prompt Engineering", "Generative AI"]
    },
    {
        title: "Classical ML",
        icon: <FaChartLine className="text-emerald-400" />,
        skills: ["Random Forest", "K-Means Clustering", "Decision Trees", "Data Augmentation"]
    },
    {
        title: "Deep Learning & RL",
        icon: <FaLayerGroup className="text-purple-400" />,
        skills: ["CNNs", "LSTMs", "Reinforcement Learning", "Neural Networks"]
    },
    {
        title: "Data Science",
        icon: <FaChartLine className="text-amber-400" />,
        skills: ["Pandas", "NumPy", "Matplotlib", "Statistical Analysis", "Jupyter Notebook"]
    },
    {
        title: "Web / Backend",
        icon: <FaServer className="text-blue-400" />,
        skills: ["React.js", "Flask", "REST APIs", "Firebase", "Vite"]
    },
    {
        title: "Cloud & Tools",
        icon: <FaCloud className="text-sky-400" />,
        skills: ["Google Cloud Platform (GCP)", "AWS", "Git", "Jupyter Notebook", "Docker (Basic)", "VS Code", "Linux"]
    },
    {
        title: "CS Fundamentals",
        icon: <FaMicrochip className="text-rose-400" />,
        skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems"]
    }
];

const About = () => {
    const [viewMode, setViewMode] = useState('visual'); // 'visual' | 'terminal'

    return (
        <section id="about" className="pt-6 md:pt-10 pb-16 md:pb-24 relative">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 font-label text-xs tracking-[0.25em] uppercase font-semibold text-primary mb-3">
                            <span className="w-6 h-[1.5px] bg-primary rounded-full inline-block" />
                            <span>Background & Capabilities</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
                            About <span className="text-gradient">Me</span>
                        </h2>
                    </div>

                    {/* View Switcher Tabs */}
                    <div className="inline-flex p-1.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md self-start md:self-auto">
                        <button
                            onClick={() => setViewMode('visual')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-label text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                                viewMode === 'visual'
                                    ? 'bg-primary/20 text-white border border-primary/40 shadow-sm'
                                    : 'text-on-surface-variant hover:text-white'
                            }`}
                        >
                            <FaUserCheck className="text-xs" />
                            <span>Story & Skills</span>
                        </button>
                        <button
                            onClick={() => setViewMode('terminal')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-label text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                                viewMode === 'terminal'
                                    ? 'bg-primary/20 text-white border border-primary/40 shadow-sm'
                                    : 'text-on-surface-variant hover:text-white'
                            }`}
                        >
                            <FaTerminal className="text-xs text-primary" />
                            <span>Developer CLI</span>
                        </button>
                    </div>
                </motion.div>

                {/* View Mode Toggle Content */}
                <AnimatePresence mode="wait">
                    {viewMode === 'terminal' ? (
                        <motion.div
                            key="terminal-view"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-4xl mx-auto"
                        >
                            <Terminal />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="visual-view"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-16"
                        >
                            {/* 1. Sequential Block: Professional Overview */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="w-full"
                            >
                                <div className="glass-card p-7 md:p-10 relative overflow-hidden group">
                                    {/* Accent corner glow */}
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-bl-full blur-3xl group-hover:bg-primary/20 transition-colors pointer-events-none" />

                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-primary">
                                            <HiSparkles size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-extrabold text-xl md:text-2xl text-white">
                                                Professional Overview
                                            </h3>
                                            <span className="font-label text-xs uppercase tracking-wider text-on-surface-muted">
                                                Core Profile & Objective
                                            </span>
                                        </div>
                                    </div>

                                    <div className="font-body text-on-surface-variant leading-relaxed text-sm md:text-base space-y-4 max-w-4xl">
                                        <p>
                                            Shreedhar Shiragur is a Computer Science graduate with a strong foundation in AI/ML and software development, passionate about building intelligent systems that solve real-world problems.
                                        </p>
                                        <p>
                                            He has hands-on experience in designing and delivering end-to-end software and machine learning solutions-from data ingestion to deployment, achieving measurable performance gains.
                                        </p>
                                        <p>
                                            Highly motivated and eager to bring technical depth, structural fundamentals, and a problem-solving mindset to challenging AI/ML, Data Science, or Software Development roles.
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2.5">
                                        <span className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label text-xs uppercase tracking-wider font-semibold">
                                            AI / ML Solutions
                                        </span>
                                        <span className="px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-label text-xs uppercase tracking-wider font-semibold">
                                            Full-Stack Engineering
                                        </span>
                                        <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-label text-xs uppercase tracking-wider font-semibold">
                                            CS Fundamentals
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 2. Sequential Block: Skills & Expertise */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="w-full"
                            >
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-2 font-label text-xs tracking-[0.2em] uppercase font-semibold text-primary mb-2">
                                        <span className="w-4 h-[1.5px] bg-primary rounded-full inline-block" />
                                        <span>Technical Stack</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                                        Skills & <span className="text-gradient">Expertise</span>
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                    {skillCategories.map((cat, index) => (
                                        <motion.div
                                            key={cat.title}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.04 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            className="glass-card p-5 md:p-6 hover:border-primary/30 transition-all duration-300 group"
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                                                    {cat.icon}
                                                </div>
                                                <h4 className="font-label text-xs md:text-sm font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors">
                                                    {cat.title}
                                                </h4>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-2">
                                                {cat.skills.map((skill) => (
                                                    <span 
                                                        key={skill}
                                                        className="tech-pill cursor-default"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default About;
