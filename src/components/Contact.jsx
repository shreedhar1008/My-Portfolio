import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMobile, FaCopy, FaCheck, FaPaperPlane } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const Contact = () => {
    const [copiedKey, setCopiedKey] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSent, setIsSent] = useState(false);

    const contactMethods = [
        {
            key: "email",
            title: "Email",
            value: "shreedharshiragur@gmail.com",
            href: "mailto:shreedharshiragur@gmail.com",
            icon: <FaEnvelope className="text-primary" size={18} />,
            copyable: true
        },
        {
            key: "phone",
            title: "Phone",
            value: "+91 9019981312",
            href: "tel:+919019981312",
            icon: <FaMobile className="text-emerald-400" size={18} />,
            copyable: true
        },
        {
            key: "linkedin",
            title: "LinkedIn",
            value: "shreedhar-shiragur",
            href: "https://www.linkedin.com/in/shreedhar-shiragur-0a8926291",
            icon: <FaLinkedin className="text-sky-400" size={18} />,
            copyable: false
        },
        {
            key: "github",
            title: "GitHub",
            value: "shreedhar1008",
            href: "https://github.com/shreedhar1008",
            icon: <FaGithub className="text-secondary" size={18} />,
            copyable: false
        }
    ];

    const handleCopy = (text, key, e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hi Shreedhar,%0A%0AMy Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`;
        window.open(`https://wa.me/919019981312?text=${text}`, '_blank');
        setIsSent(true);
        setTimeout(() => setIsSent(false), 4000);
    };

    return (
        <section id="contact" className="py-16 md:py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 font-label text-xs tracking-[0.25em] uppercase font-semibold text-primary mb-3">
                        <span className="w-6 h-[1.5px] bg-primary rounded-full inline-block" />
                        <span>Initiate Collaboration</span>
                        <span className="w-6 h-[1.5px] bg-primary rounded-full inline-block" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Direct Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:col-span-5 space-y-4"
                    >
                        <div className="glass-card p-6 md:p-7">
                            <h3 className="text-xl font-heading font-extrabold text-white mb-2">
                                Let's Connect
                            </h3>
                            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
                                I am currently open to exciting opportunities in AI/ML Engineering, Data Science, and Full-Stack Development. Feel free to reach out directly.
                            </p>

                            <div className="space-y-3">
                                {contactMethods.map((item) => (
                                    <div
                                        key={item.key}
                                        className="group p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all duration-300 flex items-center justify-between"
                                    >
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3.5 flex-1 min-w-0"
                                        >
                                            <div className="p-2.5 rounded-lg bg-dark-surface border border-white/10 group-hover:scale-105 transition-transform flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <div className="min-w-0">
                                                <span className="block font-label text-[10px] uppercase tracking-wider text-on-surface-muted">
                                                    {item.title}
                                                </span>
                                                <span className="block text-sm font-semibold text-white truncate group-hover:text-primary transition-colors">
                                                    {item.value}
                                                </span>
                                            </div>
                                        </a>

                                        {item.copyable && (
                                            <button
                                                onClick={(e) => handleCopy(item.value, item.key, e)}
                                                aria-label={`Copy ${item.title}`}
                                                className="p-2 rounded-lg bg-white/[0.05] hover:bg-primary/20 text-on-surface-variant hover:text-primary border border-transparent hover:border-primary/30 transition-all ml-2 flex-shrink-0"
                                                title="Copy to clipboard"
                                            >
                                                {copiedKey === item.key ? (
                                                    <span className="flex items-center gap-1 text-emerald-400 text-xs font-label">
                                                        <FaCheck size={12} /> Copied
                                                    </span>
                                                ) : (
                                                    <FaCopy size={13} />
                                                )}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="glass-card p-6 md:p-8 relative">
                            <h3 className="text-xl font-heading font-extrabold text-white mb-6 flex items-center gap-2">
                                <HiSparkles className="text-primary" />
                                <span>Send a Direct Message</span>
                            </h3>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div>
                                    <label className="block font-label text-xs uppercase tracking-wider text-on-surface-muted mb-2 font-medium">
                                        Your Name
                                    </label>
                                    <input 
                                        type="text" 
                                        required
                                        placeholder="e.g. Alex Smith" 
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="font-body w-full bg-[#050b18]/80 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(96,165,250,0.25)] transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block font-label text-xs uppercase tracking-wider text-on-surface-muted mb-2 font-medium">
                                        Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        required
                                        placeholder="e.g. alex@company.com" 
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="font-body w-full bg-[#050b18]/80 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(96,165,250,0.25)] transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block font-label text-xs uppercase tracking-wider text-on-surface-muted mb-2 font-medium">
                                        Your Message
                                    </label>
                                    <textarea 
                                        required
                                        placeholder="Let's discuss project opportunities or collaborations..." 
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="font-body w-full bg-[#050b18]/80 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(96,165,250,0.25)] transition-all duration-300 resize-none"
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full btn-gradient-primary font-label text-xs uppercase tracking-wider font-bold py-4 rounded-xl flex items-center justify-center gap-2 mt-2 cursor-pointer shadow-lg"
                                >
                                    <FaPaperPlane size={13} />
                                    <span>Send Message via WhatsApp / Web</span>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
