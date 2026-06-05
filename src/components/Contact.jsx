import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMobile } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-lg mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h3 className="font-label text-xs tracking-[0.2em] uppercase mb-2 font-semibold text-primary">Contact</h3>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-8">
                        Get In Touch
                    </h2>

                    <div className="flex justify-center gap-3">
                        {[
                            { href: "mailto:shreedharshiragur@gmail.com", icon: <FaEnvelope size={15} /> },
                            { href: "https://www.linkedin.com/in/shreedhar-shiragur-0a8926291", icon: <FaLinkedin size={15} /> },
                            { href: "https://github.com/shreedhar1008", icon: <FaGithub size={15} /> },
                            { href: "tel:+919019981312", icon: <FaMobile size={15} /> },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-white hover:bg-primary/20 hover:border-primary/40 hover:shadow-neon transition-all duration-300"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 md:p-8"
                >
                    <form className="flex flex-col gap-4">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="font-body w-full bg-[#050810]/60 border border-white/10 rounded-lg px-4 py-3 text-on-surface placeholder-gray-600 text-sm focus:outline-none focus:border-primary/50 focus:shadow-neon transition-all"
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="font-body w-full bg-[#050810]/60 border border-white/10 rounded-lg px-4 py-3 text-on-surface placeholder-gray-600 text-sm focus:outline-none focus:border-primary/50 focus:shadow-neon transition-all"
                        />
                        <textarea 
                            placeholder="Message" 
                            rows="4"
                            className="font-body w-full bg-[#050810]/60 border border-white/10 rounded-lg px-4 py-3 text-on-surface placeholder-gray-600 text-sm focus:outline-none focus:border-primary/50 focus:shadow-neon transition-all resize-none"
                        />
                        <button 
                            type="button"
                            onClick={() => window.open('https://wa.me/919019981312', '_blank')}
                            className="font-label text-xs uppercase tracking-wider w-full bg-gradient-to-r from-primary to-secondary text-slate-900 font-bold py-3.5 rounded-lg shadow-neon hover:shadow-neon-strong transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] mt-2"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
