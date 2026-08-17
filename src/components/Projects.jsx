import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'DeepFake Detection System',
        description: 'B.E. Final-Year Project: Built a CNN + LSTM pipeline that analyses temporal video sequences to identify manipulated frames, facial inconsistencies, and abnormal motion patterns, achieving 89% detection accuracy on 500+ test videos. Developed a parallel NLP authenticity module to flag AI-generated text, reducing combined false-positive rate by 11%.',
        tags: ['Python', 'TensorFlow', 'OpenCV', 'NLTK', 'Scikit-learn', 'CNN + LSTM'],
        link: 'https://github.com/shreedhar1008',
        category: 'AI / ML',
        badge: 'B.E. Final-Year Project',
        metric: '89% Accuracy (500+ Videos)'
    },
    {
        title: 'Voyage - Agentic Travel Planner',
        description: 'Personal Project: Developed a full-stack travel planning application that generates personalized itineraries using Gemini API. Features a mobile-responsive UI with interactive Leaflet maps, JWT-based secure user authentication, and profile settings. Engineered end-to-end utilizing entirely cost-free third-party APIs.',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'Tailwind CSS v4', 'Leaflet'],
        link: 'https://github.com/shreedhar1008/Voyage-Agentic_Travel_Planner',
        category: 'Full-Stack',
        badge: 'Personal Project',
        metric: 'Gemini AI + Leaflet Maps'
    },
    {
        title: 'Fruit Classification Using CNN',
        description: 'B.E. Academic Project: Trained a CNN model on 10,000+ images across multiple fruit categories using data augmentation and preprocessing, achieving 90% test accuracy outperforming a non-augmented baseline by 12%. Built an end-to-end pipeline covering data ingestion, training, evaluation, and reporting.',
        tags: ['Python', 'TensorFlow', 'OpenCV', 'NumPy', 'Matplotlib', 'CNN'],
        link: 'https://github.com/shreedhar1008/Fruit-Classification-using-CNN',
        category: 'AI / ML',
        badge: 'Academic Project',
        metric: '90% Accuracy (10,000+ Images)'
    },
    {
        title: 'StudyTrack Student Habit Recommender',
        description: 'Infosys Springboard Intern Project: Built an AI-based study habit recommender system using a hybrid ML pipeline (Random Forest and K-Means clustering) trained on 8000+ student records. Exposed the trained models as a Flask REST API to deliver real-time personalized study recommendations.',
        tags: ['Python', 'Machine Learning', 'Flask', 'REST API', 'Git'],
        link: 'https://github.com/shreedhar1008/StudyTrack_Ai-Based-Student-Study-Habit-Recommender',
        category: 'AI / ML',
        badge: 'Infosys Springboard',
        metric: '8,000+ Records'
    }
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="py-16 md:py-24 relative">
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
                            <span>Featured Showcase</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
                            Key <span className="text-gradient">Projects</span>
                        </h2>
                    </div>

                    {/* Filter Pills */}
                    <div className="inline-flex p-1.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md self-start md:self-auto">
                        {['All', 'AI / ML', 'Full-Stack'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveFilter(tab)}
                                className={`px-4 py-2 rounded-lg font-label text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                                    activeFilter === tab
                                        ? 'bg-primary/20 text-white border border-primary/40 shadow-sm'
                                        : 'text-on-surface-variant hover:text-white'
                                }`}
                            >
                                {tab === 'All' ? 'All Projects' : tab}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.title} index={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
