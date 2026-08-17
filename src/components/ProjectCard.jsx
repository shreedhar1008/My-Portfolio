import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const ProjectCard = ({ title, description, tags, link, demo, index, badge, metric }) => {
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative flex flex-col h-full rounded-2xl glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-2xl"
        >
            {/* Dynamic Spotlight Glow following cursor */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: isHovered
                        ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(96, 165, 250, 0.15), transparent 80%)`
                        : 'none',
                }}
            />

            {/* Inner Content */}
            <div className="p-6 md:p-7 flex-grow flex flex-col z-10">
                {/* Header: Project Badge & Metric */}
                <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-label text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {badge || "Project"}
                    </span>
                    {metric && (
                        <span className="font-label text-[11px] font-semibold text-secondary flex items-center gap-1.5">
                            <HiSparkles className="text-xs" />
                            {metric}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-heading font-extrabold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span 
                            key={tag} 
                            className="font-label text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] text-on-surface-variant border border-white/10 group-hover:border-primary/20 group-hover:text-white transition-all duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-label text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg bg-white/[0.05] hover:bg-primary hover:text-dark-surface border border-white/10 hover:border-primary text-white font-bold transition-all duration-300 flex items-center gap-2 shadow-sm"
                    >
                        <FaGithub size={14} /> <span>Code</span>
                    </a>
                    {demo && (
                        <a 
                            href={demo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-label text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg bg-secondary/10 hover:bg-secondary hover:text-dark-surface border border-secondary/20 hover:border-secondary text-secondary font-bold transition-all duration-300 flex items-center gap-2 shadow-sm"
                        >
                            <FaExternalLinkAlt size={12} /> <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
