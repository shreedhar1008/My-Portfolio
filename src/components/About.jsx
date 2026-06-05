import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "JavaScript", "SQL (MySQL)", "HTML5", "CSS3", "Java"]
    },
    {
        title: "AI / ML",
        skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "NLTK", "Pandas", "NumPy", "Matplotlib"]
    },
    {
        title: "Web / Backend",
        skills: ["React.js", "Flask", "REST APIs", "Firebase"]
    },
    {
        title: "Cloud & Tools",
        skills: ["Google Cloud Platform", "AWS", "Git", "Jupyter Notebook", "VS Code", "Vite"]
    },
    {
        title: "CS Fundamentals",
        skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Linux"]
    }
];

const About = () => {
    return (
        <section className="py-12 md:py-20 relative">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <h3 className="font-label text-xs tracking-[0.2em] uppercase mb-4 font-semibold text-primary">About</h3>
                        <div className="glass-card p-6 md:p-8 sticky top-28">
                            <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                                Shreedhar Shiragur is a Computer Science graduate with a strong foundation in AI/ML and software development, passionate about building intelligent systems that solve real-world problems.
                                <br /><br />
                                He has hands-on experience in designing and delivering end-to-end software and machine learning solutions—from data ingestion to deployment, achieving measurable performance gains.
                                <br /><br />
                                Highly motivated and eager to bring technical depth, structural fundamentals, and a problem-solving mindset to challenging AI/ML, Data Science, or Software Development roles.
                            </p>
                        </div>
                    </motion.div>

                    {/* Skills Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <h3 className="font-label text-xs tracking-[0.2em] uppercase mb-4 font-semibold text-primary">Skills & Expertise</h3>
                        <div className="space-y-4">
                            {skillCategories.map((cat, index) => (
                                <motion.div
                                    key={cat.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                    className="glass-card p-5 hover:border-primary/20 transition-all duration-300"
                                >
                                    <h4 className="font-label text-xs font-bold uppercase tracking-wider mb-3 text-secondary">
                                        {cat.title}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map((skill) => (
                                            <span 
                                                key={skill}
                                                className="font-label text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/25 transition-all duration-300 cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
