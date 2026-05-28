import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Fruit Classification',
        description: 'A deep learning model utilizing Convolutional Neural Networks to classify various fruit images with high accuracy. Implemented using TensorFlow and Keras.',
        tags: ['Python', 'TensorFlow', 'CNN'],
        link: 'https://github.com/shreedhar1008/Fruit-Classification-using-CNN'
    },
    {
        title: 'DeepFake Detection',
        description: 'Advanced AI system designed to detect manipulated media and DeepFakes. Uses ensemble learning techniques to analyze facial artifacts and inconsistencies.',
        tags: ['Python', 'PyTorch', 'AI Security'],
        link: 'https://github.com/shreedhar1008'
    },
    {
        title: 'StudyTrack',
        description: 'An AI-based system that predicts student dropout risk and recommends personalized study habits by analyzing academic and behavioral data using machine learning techniques.',
        tags: ['Python', 'Machine Learning', 'Flask'],
        link: 'https://github.com/shreedhar1008/StudyTrack_Ai-Based-Student-Study-Habit-Recommender'
    },
    {
        title: 'AI Trip Planner',
        description: "Built an AI-powered Trip Planner that creates personalized itineraries using user location, preferences, and trip duration. Integrated Google Maps for distance and navigation.",
        tags: ['Generative AI', 'React', 'Google Maps'],
        link: 'https://github.com/shreedhar1008/AI-Trip-Planner'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative max-w-5xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h3 className="text-gray-300 text-sm tracking-widest uppercase mb-2 font-semibold">Projects</h3>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                    Featured Projects
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} index={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
