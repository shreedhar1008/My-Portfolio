import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Fruit Classification Using CNN',
        description: 'A deep learning model utilizing Convolutional Neural Networks to classify various fruit images with high accuracy. Implemented using TensorFlow and Keras.',
        tags: ['Python', 'TensorFlow', 'CNN', 'Deep Learning'],
        link: 'https://github.com/shreedhar1008/Fruit-Classification-using-CNN'
    },
    {
        title: 'DeepFake Detection',
        description: 'Advanced AI system designed to detect manipulated media and DeepFakes. Uses ensemble learning techniques to analyze facial artifacts and inconsistencies.',
        tags: ['Python', 'OpenCV', 'PyTorch', 'AI Security'],
        link: 'https://github.com/shreedhar1008'
    },
    {
        title: 'StudyTrack AI Based Student Study Habit Recommender System',
        description: 'An AI-based system that predicts student dropout risk and recommends personalized study habits by analyzing academic and behavioral data using machine learning techniques.',
        tags: ['Python', 'Machine Learning', 'Random Forest', 'K-Means', 'Data Analysis', 'Flask'],
        link: 'https://github.com/shreedhar1008/StudyTrack_Ai-Based-Student-Study-Habit-Recommender'
    },
    {
        title: 'AI Trip Planner',
        description: "Built an AI-powered Trip Planner that creates personalized itineraries using user location, preferences, and trip duration. Integrated Google Maps for distance and navigation, along with smart recommendations for tourist spots, hotels, and restaurants.",
        tags: ['Artificial Intelligence', 'Machine Learning', 'Generative AI', 'Full Stack Development', 'Google Maps API', 'Recommendation Systems'],
        link: 'https://github.com/shreedhar1008/AI-Trip-Planner'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-heading font-bold text-center mb-16 text-white">
                    Featured <span className="text-gradient">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
