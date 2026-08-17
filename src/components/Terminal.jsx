import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaCircle } from 'react-icons/fa';

const commands = {
    help: "Available commands: help, about, skills, projects, journey, contact, clear",
    about: "Shreedhar Shiragur - Computer Science graduate with a strong foundation in AI/ML and software development. Passionate about building intelligent systems that solve real-world problems. Hands-on experience in designing and delivering end-to-end software and ML solutions from data ingestion to deployment.",
    skills: "• Languages: Python, JavaScript, SQL (MySQL), HTML5, CSS3, Java\n• Databases: MySQL, PostgreSQL, MongoDB, SQLite, Firebase\n• AI/ML: TensorFlow, Keras, PyTorch, Scikit-learn, OpenCV, NLTK\n• GenAI & LLMs: LangChain, RAG Pipelines, Google Gemini API, Prompt Engineering\n• Classical ML: Random Forest, K-Means Clustering, Decision Trees, Data Augmentation\n• Deep Learning: CNNs, LSTMs, Neural Networks, Reinforcement Learning\n• Web & Cloud: React.js, Flask, REST APIs, GCP, AWS, Docker (Basic), Git",
    projects: "1. DeepFake Detection System (CNN + LSTM, 89% accuracy Final-Year project)\n2. Voyage - Agentic Travel Planner (Gemini API, React, Node.js, Express, MongoDB)\n3. Fruit Classification Using CNN (TensorFlow, OpenCV, Data Augmentation, 90% accuracy)\n4. StudyTrack Student Habit Recommender (Python, Random Forest, Flask REST API)",
    journey: "• Python Full-Stack Developer Intern @ Infosys Springboard (Nov 2025 - Jan 2026)\n• B.E. Computer Science & Engineering @ East West Institute of Technology (2022 - 2026, CGPA: 8.19/10)\n• PUC (PCMB) @ Smt. Vidhya P Hanchinmani PU College (89%)\n• SSLC @ SJBVP Hosahalli (84.16%)",
    contact: "• Email: shreedharshiragur@gmail.com\n• LinkedIn: linkedin.com/in/shreedhar-shiragur-0a8926291\n• GitHub: github.com/shreedhar1008\n• Phone: +91-9019981312",
    clear: "CLEAR"
};

const suggestionList = ["help", "about", "skills", "projects", "journey", "contact", "clear"];

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'system', content: 'Portfolio CLI v2.4.0 (x86_64-portfolio-kernel)' },
        { type: 'system', content: 'Type a command or click one of the quick chips below to explore.' }
    ]);
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        if (!trimmedCmd) return;

        if (trimmedCmd === 'clear') {
            setHistory([]);
            return;
        }

        const output = commands[trimmedCmd] || `Command not found: "${trimmedCmd}". Type "help" for a list of commands.`;

        setHistory(prev => [
            ...prev,
            { type: 'input', content: cmd },
            { type: 'output', content: output }
        ]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="w-full rounded-2xl bg-[#040814]/90 border border-white/10 shadow-2xl overflow-hidden font-code text-xs md:text-sm flex flex-col backdrop-blur-xl">
            {/* Terminal Window Header */}
            <div className="bg-[#080f22]/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
                    <span className="ml-3 text-on-surface-muted text-xs font-mono flex items-center gap-1.5">
                        <FaTerminal className="text-[10px] text-primary" /> shreedhar@portfolio:~ (zsh)
                    </span>
                </div>
                <span className="text-[11px] text-primary/70 font-mono hidden sm:inline">Interactive Shell</span>
            </div>

            {/* Quick Command Suggestion Chips */}
            <div className="px-4 py-2 bg-white/[0.02] border-b border-white/5 flex items-center gap-2 overflow-x-auto custom-scrollbar">
                <span className="text-[11px] text-on-surface-muted font-label uppercase tracking-wider flex-shrink-0">Quick run:</span>
                {suggestionList.map(cmd => (
                    <button
                        key={cmd}
                        onClick={() => {
                            handleCommand(cmd);
                            setInput('');
                        }}
                        className="px-2.5 py-0.5 rounded-md bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-[11px] font-mono transition-all flex-shrink-0 hover:scale-105 active:scale-95"
                    >
                        ${cmd}
                    </button>
                ))}
            </div>

            {/* Terminal Body */}
            <div
                ref={scrollRef}
                className="p-5 overflow-y-auto max-h-[360px] min-h-[260px] custom-scrollbar text-on-surface space-y-3"
                onClick={() => inputRef.current?.focus()}
            >
                {history.map((line, i) => (
                    <div key={i} className="leading-relaxed">
                        {line.type === 'input' && (
                            <div className="flex items-center gap-2 text-white font-semibold">
                                <span className="text-emerald-400">➜</span>
                                <span className="text-primary font-mono">~</span>
                                <span>{line.content}</span>
                            </div>
                        )}
                        {line.type === 'system' && (
                            <div className="text-on-surface-muted italic font-mono text-[11px]">
                                # {line.content}
                            </div>
                        )}
                        {line.type === 'output' && (
                            <div className="text-on-surface-variant font-mono pl-4 border-l-2 border-primary/30 whitespace-pre-wrap py-1 text-xs">
                                {line.content}
                            </div>
                        )}
                    </div>
                ))}

                {/* Input Prompt */}
                <div className="flex items-center gap-2 text-white pt-1">
                    <span className="text-emerald-400 font-bold">➜</span>
                    <span className="text-primary font-mono">~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a command (e.g. skills)..."
                        className="bg-transparent border-none outline-none flex-1 font-mono text-white placeholder:text-on-surface-muted/50 caret-primary text-xs md:text-sm"
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
