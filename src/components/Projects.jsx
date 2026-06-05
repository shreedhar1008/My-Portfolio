import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'DeepFake Detection System',
        description: 'B.E. Final-Year Project: Built a CNN + LSTM pipeline that analyses temporal video sequences to identify manipulated frames, facial inconsistencies, and abnormal motion patterns, achieving 89% detection accuracy on 500+ test videos. Developed a parallel NLP authenticity module to flag AI-generated text, reducing combined false-positive rate by 11%.',
        tags: ['Python', 'TensorFlow', 'OpenCV', 'NLTK', 'Scikit-learn', 'CNN + LSTM'],
        link: 'https://github.com/shreedhar1008'
    },
    {
        title: 'Nomad AI - Personal Travel Assistant',
        description: 'Personal Project: Built and deployed a full-stack AI travel planner using Google Gemini 2.0 Flash with Search Grounding to generate structured, real-time day-by-day itineraries tailored to destination, budget, and interests. Shipped a dark-mode Glassmorphism UI with Google Maps links and Lucide React icons.',
        tags: ['React', 'Gemini 2.0 Flash', 'Tailwind CSS v4', 'Vite', 'Google Maps'],
        link: 'https://github.com/shreedhar1008/AI-Trip-Planner'
    },
    {
        title: 'Fruit Classification Using CNN',
        description: 'B.E. Academic Project: Trained a CNN model on 10,000+ images across multiple fruit categories using data augmentation and preprocessing, achieving 90% test accuracy outperforming a non-augmented baseline by 12%. Built an end-to-end pipeline covering data ingestion, training, evaluation, and reporting.',
        tags: ['Python', 'TensorFlow', 'OpenCV', 'NumPy', 'Matplotlib', 'CNN'],
        link: 'https://github.com/shreedhar1008/Fruit-Classification-using-CNN'
    },
    {
        title: 'StudyTrack Student Habit Recommender',
        description: 'Infosys Springboard Intern Project: Built an AI-based study habit recommender system using a hybrid ML pipeline (Random Forest and K-Means clustering) trained on 8000+ student records. Exposed the trained models as a Flask REST API to deliver real-time personalized study recommendations.',
        tags: ['Python', 'Machine Learning', 'Flask', 'REST API', 'Git'],
        link: 'https://github.com/shreedhar1008/StudyTrack_Ai-Based-Student-Study-Habit-Recommender'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h3 className="font-label text-xs tracking-[0.2em] uppercase mb-2 font-semibold text-primary">Projects</h3>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">
                        Featured Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} index={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
