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
            className="group flex flex-col h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-neon transition-all duration-300 relative"
        >
            {/* Inner Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="p-6 flex-grow flex flex-col z-10">
                <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-[10px] font-semibold bg-white/5 border border-white/10 text-gray-300 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white hover:bg-primary hover:shadow-neon transition-all">
                        <FaGithub size={14} />
                    </a>
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white hover:bg-secondary hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all">
                            <FaExternalLinkAlt size={12} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
