import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMobile } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center px-4"
            >
                <h2 className="text-4xl font-heading font-bold mb-12 text-white">
                    Get In <span className="text-gradient">Touch</span>
                </h2>

                <p className="text-gray-400 mb-10 text-lg">
                    I'm currently open to new opportunities and collaborations. <br />
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex justify-center gap-8 mb-12">
                    <a href="mailto:shreedharshiragur@gmail.com" className="text-white hover:text-secondary transition-colors text-3xl">
                        <FaEnvelope />
                    </a>
                    <a href="https://www.linkedin.com/in/shreedhar-shiragur-0a8926291" className="text-white hover:text-primary transition-colors text-3xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/shreedhar1008" className="text-white hover:text-white/80 transition-colors text-3xl">
                        <FaGithub />
                    </a>
                    <a href="tel:+919019981312" className="text-white hover:text-blue-400 transition-colors text-3xl">
                        <FaMobile />
                    </a>
                </div>

                <a href="mailto:shreedharshiragur@gmail.com" className="inline-block px-10 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-white hover:bg-white/10 transition-all hover:scale-105">
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
