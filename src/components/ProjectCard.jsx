import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, link, demo }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full min-h-[400px] md:min-h-[450px] h-auto rounded-xl bg-white border border-gray-200 shadow-md p-6 md:p-8 cursor-pointer group perspective-1000"
        >
            <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="h-full flex flex-col">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm md:text-base">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                        <FaGithub size={20} /> Code
                    </a>
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                            <FaExternalLinkAlt size={18} /> Demo
                        </a>
                    )}
                </div>
            </div>

            {/* Glow effect handled by CSS via group-hover or just static subtle glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
        </motion.div>
    );
};

export default ProjectCard;
