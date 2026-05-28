import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-dark">
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[150px]"
                animate={{
                    x: [0, -40, 0],
                    y: [0, -50, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]"
                animate={{
                    x: [0, -60, 0],
                    y: [0, 60, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default ParticleBackground;
