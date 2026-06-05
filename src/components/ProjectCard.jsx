import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, link, demo, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group flex flex-col h-full glass-card overflow-hidden transition-all duration-300 relative"
        >
            {/* Inner Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="p-6 flex-grow flex flex-col z-10">
                <h3 className="text-xl font-heading font-extrabold mb-3 text-white group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span 
                            key={tag} 
                            className="font-label text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-default"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-label text-xs uppercase tracking-wider px-4 py-2 border border-primary/20 rounded-lg bg-primary/5 text-primary hover:bg-primary/20 hover:border-primary/40 transition-all flex items-center gap-2 font-medium"
                    >
                        <FaGithub size={14} /> GitHub
                    </a>
                    {demo && (
                        <a 
                            href={demo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-label text-xs uppercase tracking-wider px-4 py-2 border border-secondary/20 rounded-lg bg-secondary/5 text-secondary hover:bg-secondary/20 hover:border-secondary/40 transition-all flex items-center gap-2 font-medium"
                        >
                            <FaExternalLinkAlt size={12} /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
