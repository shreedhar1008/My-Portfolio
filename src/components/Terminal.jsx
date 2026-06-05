import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const commands = {
    help: "Available commands: help, about, skills, projects, contact, clear",
    about: "Shreedhar Shiragur - Computer Science graduate with a strong foundation in AI/ML and software development. Passionate about building intelligent systems that solve real-world problems.",
    skills: "Languages: Python, JavaScript, SQL (MySQL), HTML5, CSS3, Java\nAI / ML: TensorFlow, Keras, PyTorch, Scikit-learn, OpenCV, NLTK, Pandas, NumPy, Matplotlib\nWeb / Backend: React.js, Flask, REST APIs, Firebase\nCloud & Tools: GCP, AWS, Git, Jupyter, VS Code, Vite\nCS Fundamentals: DSA, DBMS, OS, Linux",
    projects: "1. DeepFake Detection System (CNN + LSTM, 89% accuracy Final-Year project)\n2. Nomad AI - Personal Travel Assistant (Gemini 2.0 Flash, React, Glassmorphism)\n3. Fruit Classification Using CNN (TensorFlow, OpenCV, Data Augmentation)\n4. StudyTrack Student Habit Recommender (Python, Random Forest, Flask REST API)",
    contact: "Email: shreedharshiragur@gmail.com\nLinkedIn: linkedin.com/in/shreedhar-shiragur-0a8926291\nGitHub: github.com/shreedhar1008\nPhone: +91-9019981312",
    clear: "CLEAR"
};

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'output', content: 'Portfolio CLI [Version 1.0.0] (c) 2026 Shreedhar. All rights reserved.' },
        { type: 'output', content: 'Type "help" to see available commands.' }
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

        if (trimmedCmd === 'clear') {
            setHistory([]);
            return;
        }

        const output = commands[trimmedCmd] || `Command not found: ${trimmedCmd}. Type "help" for a list of commands.`;

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
        <motion.div
            className="w-full max-w-2xl h-[400px] md:h-[500px] bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden font-mono text-sm md:text-base flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        >
            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-500 text-xs">shreedhar@portfolio: ~</span>
            </div>

            <div
                ref={scrollRef}
                className="flex-1 p-4 overflow-y-auto custom-scrollbar"
                onClick={() => inputRef.current?.focus()}
            >
                {history.map((line, i) => (
                    <div key={i} className={`mb-2 ${line.type === 'input' ? 'text-gray-900' : 'text-primary'}`}>
                        {line.type === 'input' ? (
                            <span><span className="text-secondary">➜</span> ~ {line.content}</span>
                        ) : (
                            <span className="whitespace-pre-wrap">{line.content}</span>
                        )}
                    </div>
                ))}

                <div className="flex items-center gap-2 text-gray-900">
                    <span className="text-secondary">➜</span>
                    <span>~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent border-none outline-none flex-1 font-mono text-gray-900 caret-primary"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Terminal;
