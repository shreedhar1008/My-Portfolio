import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMobile } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative max-w-xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-10"
            >
                <h3 className="text-gray-300 text-sm tracking-widest uppercase mb-2 font-semibold">Contact</h3>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
                    Get In Touch
                </h2>

                <div className="flex justify-center gap-4">
                    <a href="mailto:shreedharshiragur@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-neon">
                        <FaEnvelope size={16} />
                    </a>
                    <a href="https://www.linkedin.com/in/shreedhar-shiragur-0a8926291" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-neon">
                        <FaLinkedin size={16} />
                    </a>
                    <a href="https://github.com/shreedhar1008" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-neon">
                        <FaGithub size={16} />
                    </a>
                    <a href="tel:+919019981312" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-neon">
                        <FaMobile size={16} />
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-6 md:p-8"
            >
                <form className="flex flex-col space-y-4">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary focus:shadow-neon transition-all"
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary focus:shadow-neon transition-all"
                    />
                    <textarea 
                        placeholder="Message" 
                        rows="4"
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary focus:shadow-neon transition-all resize-none"
                    />
                    <button 
                        type="button"
                        onClick={() => window.open('https://wa.me/919019981312', '_blank')}
                        className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-full shadow-neon hover:shadow-neon-strong transition-all transform hover:-translate-y-1"
                    >
                        Contact
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
