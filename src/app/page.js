"use client";

import { useRef, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import LiquidEther from "./components/LiquidEther";
import NavDock from "./components/NavDock";
import Shuffle from "./components/Shuffle";
import TextType from "./components/TextType";

const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;

        // Strength of the magnetic pull
        const strength = 0.15;

        setPosition({
            x: dx * strength,
            y: dy * strength
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            className="card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                transition: position.x === 0 ? 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'transform 0.1s ease-out'
            }}
        >
            <div className="card-content">
                <div className="card-header">
                    <h3>{project.title}</h3>
                    <span className="type-badge">{project.type}</span>
                </div>
                <p className="text-sm text-slate-400 mb-2">{project.desc}</p>
                <p className="text-slate-300 text-sm">
                    {project.summary}
                </p>
                <div className="card-reveal">
                    <p>{project.details}</p>
                    <div className="card-actions">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn github">
                                GitHub
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-btn demo">
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="tech-stack">
                {project.stack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                ))}
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <>
            {/* Liquid Ether Background */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -10,
                opacity: 0.25,
                pointerEvents: 'none'
            }}>
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={35}
                    cursorSize={75}
                    isViscous={true}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={20}
                    resolution={0.3}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.55}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>

            <main className="min-h-screen">
                <ThemeToggle />

                {/* Hero Section */}
                <section id="hero" className="hero">
                    <TextType
                        as="h1"
                        text={["Souradip Biswas", "sobiswriter", "Souradip (Sobi) Biswas"]}
                        typingSpeed={80}
                        pauseDuration={4000}
                        showCursor
                        cursorCharacter=" |"
                        loop={true}
                    />
                    <Shuffle
                        text="AI / ML Systems • Applied AI • Creative Tooling"
                        className="tagline"
                        shuffleDirection="right"
                        duration={1}
                        animationMode="evenodd"
                        shuffleTimes={4}
                        ease="power3.out"
                        stagger={0.09}
                        threshold={0.1}
                        triggerOnce={true}
                        triggerOnHover
                        respectReducedMotion={true}
                        loop={false}
                        loopDelay={0}
                    />
                    <div className="hero-sub">
                        <p>
                            AI-focused developer and researcher building <strong>applied systems</strong> rather than toy demos.
                            <br />
                            College student, independent developer, researcher-oriented.
                        </p>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/sobiswriter" target="_blank" rel="noopener noreferrer" className="btn">
                            <span>GitHub →</span>
                        </a>
                        <a href="https://www.linkedin.com/in/sobiswriter/" target="_blank" rel="noopener noreferrer" className="btn">
                            <span>LinkedIn →</span>
                        </a>
                    </div>
                </section>

                {/* Professional Overview */}
                <section id="about">
                    <h2>Professional Overview</h2>
                    <div className="space-y-4 text-slate-300 text-lg">
                        <p>
                            I am an AI-focused developer and researcher dedicated to building <span className="text-gradient font-semibold">applied systems</span> rather than just prototypes.
                            My work is driven by a strong interest in <span className="text-gradient font-semibold">document intelligence, generative AI, NLP, and persona-based systems</span>.
                        </p>
                        <p>
                            I combine <span className="text-gradient font-semibold">AI + interfaces + tooling</span> into complete end-to-end products, and I am comfortable with
                            experimentation, iteration, and rebuilding systems from scratch to achieve the best architecture.
                        </p>
                    </div>
                </section>

                {/* Technical Skills */}
                <section id="skills">
                    <h2>Technical Skills</h2>

                    <div className="grid">
                        <div className="skill-category">
                            <h3>Programming Languages</h3>
                            <div className="skill-list">
                                <span className="skill-item">Python</span>
                                <span className="skill-item">TypeScript</span>
                                <span className="skill-item">JavaScript</span>
                                <span className="skill-item">PowerShell</span>
                                <span className="skill-item">Java (Familiarity)</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>AI / Machine Learning</h3>
                            <div className="skill-list">
                                <span className="skill-item">NLP & GenAI</span>
                                <span className="skill-item">Document Analysis</span>
                                <span className="skill-item">Transformers (Applied)</span>
                                <span className="skill-item">AI Rewriting Pipelines</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Application Development</h3>
                            <div className="skill-list">
                                <span className="skill-item">Electron (Desktop)</span>
                                <span className="skill-item">Tkinter</span>
                                <span className="skill-item">Node.js & Next.js</span>
                                <span className="skill-item">UI/UX Logic for AI</span>
                                <span className="skill-item">API Architectures</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Systems & Tooling</h3>
                            <div className="skill-list">
                                <span className="skill-item">Modular AI Design</span>
                                <span className="skill-item">Automation Pipelines</span>
                                <span className="skill-item">CLI & PowerShell Utils</span>
                                <span className="skill-item">3rd Party Integrations</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Major Projects */}
                <section id="projects">
                    <h2>Major Projects</h2>
                    <div className="bento-grid">
                        {
                            [
                                {
                                    title: "Wassap",
                                    type: "Real-time Communication",
                                    desc: "WhatsApp Clone with AI Integration",
                                    summary: "A modern remake of WhatsApp featuring real-time messaging with integrated AI bot capabilities and enhanced user experience.",
                                    details: "Full-featured messaging platform with real-time chat, AI-powered assistance, modern UI/UX, and seamless communication workflows. Built with cutting-edge web technologies for optimal performance.",
                                    stack: ["TypeScript", "Next.js", "AI Integration", "WebSocket"],
                                    github: "https://github.com/sobiswriter/Wassap",
                                    demo: "https://wassap-rho.vercel.app/"
                                },
                                {
                                    title: "EquityEcho",
                                    type: "FinTech / AI Application",
                                    desc: "Stock Market Prediction Platform",
                                    summary: "AI-driven financial application for stock market analysis and prediction, providing real-time insights and forecasting capabilities.",
                                    details: "Comprehensive stock analysis platform leveraging machine learning models for price prediction, trend analysis, and portfolio recommendations. Features interactive charts, real-time data processing, and intelligent forecasting algorithms.",
                                    stack: ["TypeScript", "Next.js", "ML Models", "Financial APIs"],
                                    github: "https://github.com/sobiswriter/EquityEcho-Stocks-Predictor"
                                },
                                {
                                    title: "DevineClub",
                                    type: "Competition Project",
                                    desc: "AIFusion IIT Ropar Hackathon",
                                    summary: "Advanced AI application developed for the AIFusion hackathon at IIT Ropar, showcasing innovative AI system design and implementation.",
                                    details: "Competition-grade project demonstrating cutting-edge AI capabilities, system architecture, and practical problem-solving. Built under time constraints with a focus on scalability and real-world applicability.",
                                    stack: ["TypeScript", "Next.js", "AI/ML Stack", "Competition-Ready"],
                                    github: "https://github.com/sobiswriter/DevineClub"
                                },
                                {
                                    title: "CosmicCanvas",
                                    type: "Experimental UI",
                                    desc: "Generative Art & Color Playground",
                                    summary: "A dynamic canvas to draw and experiment with colors, fluid geometry, and interactive patterns.",
                                    details: "Built to explore WebGL-based color blending and procedural strokes. It serves as a creative playground for digital art experiments.",
                                    stack: ["JavaScript", "WebGL", "Canvas API"],
                                    github: "https://github.com/sobiswriter/CosmicCanvas",
                                    demo: "https://sobiswriter.github.io/CosmicCanvas/"
                                },
                                {
                                    title: "LegalLM",
                                    type: "AI Application",
                                    desc: "Featured Flagship Project",
                                    summary: "AI-driven platform for uploading, parsing, and analyzing legal documents using NLP-based approaches.",
                                    details: "Leverages large language models to extract key clauses, identify risks, and summarize complex legal jargon into actionable insights. Built for speed and accuracy.",
                                    stack: ["TypeScript", "AI/NLP Stack", "Next.js"],
                                    github: "https://github.com/sobiswriter/LegalLM",
                                    demo: "https://legal-lmx24-git-main-sobiswriters-projects.vercel.app/"
                                },
                                {
                                    title: "Project AIC",
                                    type: "AI Bot / System",
                                    desc: "Core Long-term Personal Project",
                                    summary: "Python-based intelligent bot system exploring behavior, interaction, and decision logic.",
                                    details: "An experimental autonomous agent designed to simulate long-term memory and adaptive personality traits. Focuses on 'ghost in the machine' behavioral patterns.",
                                    stack: ["Python", "PyTorch", "Transformers"],
                                    github: "https://github.com/sobiswriter/Project-AIC"
                                },
                                {
                                    title: "The Shadow Diary",
                                    type: "AI Journaling",
                                    desc: "Psychological AI Tool",
                                    summary: "Journaling platform that uses AI to rewrite and reinterpret entries, inspired by psychological and Jungian themes.",
                                    details: "Transforms raw user thoughts into structured narratives, offering psychoanalytic perspectives (e.g., Shadow Work). Features a moody, immersive interface.",
                                    stack: ["TypeScript", "Next.js", "OpenAI API"],
                                    github: "https://github.com/sobiswriter/The-Shadow-Diary",
                                    demo: "https://the-shadow-diary.vercel.app/"
                                },
                                {
                                    title: "PersonaVerse",
                                    type: "Desktop AI App",
                                    desc: "Interactive Playground",
                                    summary: "Persona creation and interaction playground enabling users to build and converse with AI-driven personalities.",
                                    details: "A comprehensive tool for drafting character backstories, voice settings, and behavioral constraints. Includes a real-time chat simulation environment.",
                                    stack: ["Node.js", "Electron", "React"],
                                    github: "https://github.com/sobiswriter/PersonaVerse"
                                },
                                {
                                    title: "AI Overlay",
                                    type: "Desktop Utility",
                                    desc: "Productivity Tool",
                                    summary: "Lightweight AI overlay tool designed for productivity and real-time assistance.",
                                    details: "Hover-based AI assistant that functions as a smart layer over your OS. capable of reading screen context and providing instant answers.",
                                    stack: ["Python", "Tkinter", "OCR"],
                                    github: "https://github.com/sobiswriter/AI-Overlay"
                                },
                                {
                                    title: "Inviter",
                                    type: "Web Application",
                                    desc: "Event Management",
                                    summary: "Invitation management system integrating messaging and email services for automated communication workflows.",
                                    details: "Streamlines the RSVP process with automated follow-ups via SMS and Email. Includes a dashboard for tracking guest status in real-time.",
                                    stack: ["Node.js", "Next.js", "Twilio", "SMTP"],
                                    github: "https://github.com/sobiswriter/Inviter"
                                },
                                {
                                    title: "Business Venture App",
                                    type: "Desktop Application",
                                    desc: "Enterprise Solution",
                                    summary: "Business-focused application supporting financial tracking, reporting, and internal workflows.",
                                    details: "Secure desktop environment for managing accounts, generating invoice PDFs, and visualizing cash flow data.",
                                    stack: ["Node.js", "Electron", "SQLite"],
                                    github: "https://github.com/sobiswriter/Business-Venture-App"
                                },
                                {
                                    title: "Cosmos Anomaly",
                                    type: "Experimental System",
                                    desc: "Narrative Engine",
                                    summary: "Narrative-driven and system-oriented project exploring timeline manipulation and anomaly-based logic.",
                                    details: "A game-like simulation where users influence the timeline, causing ripple effects (anomalies). Heavily relies on graph-based state management.",
                                    stack: ["TypeScript", "WebGL", "State Machines"],
                                    github: "https://github.com/sobiswriter/Cosmos-Anomaly",
                                    demo: "https://cosmos-anomaly.vercel.app/"
                                },
                                {
                                    title: "Timeline Twist (V2)",
                                    type: "Iterative System",
                                    desc: "System Refactor",
                                    summary: "Second iteration of a timeline-based project, emphasizing refactoring and architectural improvement.",
                                    details: "Focused on clean architecture and performance, rebuilding the core timeline engine to support infinite branching.",
                                    stack: ["TypeScript", "React", "Redux"],
                                    github: "https://github.com/sobiswriter/TimeLine-Twist-V2",
                                    demo: "https://time-line-twist-v2.vercel.app/"
                                },
                                {
                                    title: "PS Utility Suite",
                                    type: "Automation Tool Collection",
                                    desc: "DevOps / Scripting",
                                    summary: "Collection of PowerShell modules including web scraping, scheduling, stopwatch utilities, and automation tools.",
                                    details: "A power-user toolkit for Windows, automating mundane tasks like file organization, data scraping, and system monitoring.",
                                    stack: ["PowerShell", ".NET"],
                                    github: "https://github.com/sobiswriter/PowerShell-Utility-Suite"
                                }
                            ].map((project, index) => (
                                <ProjectCard key={index} project={project} />
                            ))
                        }

                    </div>
                </section>

                {/* Experience & Achievements */}
                <section id="achievements">
                    <h2>Experience & Recognition</h2>

                    <div className="card mb-8">
                        <div className="card-header px-0 pt-0">
                            <h3 className="text-gradient">Collaborations & Programs</h3>
                        </div>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li>
                                <strong className="text-white">India Accelerator – OpenXAI 2025</strong>
                                <br />
                                <span className="text-sm ml-5 block text-slate-400">
                                    Collaborative project under Blockseblock Labs. Participation in accelerator-style development environment. Focus on scalable AI system development.
                                </span>
                            </li>
                            <li>
                                <strong className="text-white">LegalLm – HacktoSkill 2025</strong>
                                <br />
                                <span className="text-sm ml-5 block text-slate-400">
                                    A collaborative project under Google's HacktoSkill program. Participation in accelerator-style development environment. Focus on scalable AI Legal Systems.
                                </span>
                            </li>
                            <li>
                                <strong className="text-white">Espanola – Grade B*</strong>
                                <br />
                                <span className="text-sm ml-5 block text-slate-400">
                                    Hola! Soy Aprender espanol, ¿Como estas? Mucho gusto senorita.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="grid">
                        <div className="card">
                            <h3>Achievements</h3>
                            <ul className="list-disc pl-4 mt-4 space-y-2 text-sm text-slate-300">
                                <li><strong className="text-white">Patent Publication (IPR)</strong>: Published a patent demonstrating original technical innovation and applied research.</li>
                                <li><strong className="text-white">Tech Fest – IIT Ropar</strong>: Recognition for technical performance and innovation.</li>
                                <li><strong className="text-white">Hackathons & Ideathons</strong>: Winner/participant in multiple events involving rapid prototyping and problem-solving.</li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3>Public Presence & Signals</h3>
                            <ul className="list-disc pl-4 mt-4 space-y-2 text-sm text-slate-300">
                                <li><strong className="text-white">HackerRank</strong>: 5★ in Problem Solving, 5★ in Python.</li>
                                <li><strong className="text-white">Conference Participation</strong>: Attended ODDO Meet (Gandhinagar) and IMC Conference (Delhi).</li>
                                <li><strong className="text-white">GitHub & LinkedIn</strong>: Active profile with multiple featured projects, stars, and technical posts on AI systems/interfaces.</li>
                                <li><strong className="text-white">Core Themes</strong>: "AI as a system, not a demo" & "Persona, identity, and behavior modeling".</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Resume Section */}
                <section id="resume">
                    <h2>Resume / CV</h2>
                    <div className="card">
                        <div className="card-content">
                            <div className="card-header">
                                <h3 className="text-gradient">Curriculum Vitae</h3>
                                <span className="type-badge">Professional PDF</span>
                            </div>
                            <p className="text-slate-300">
                                My resume provides a comprehensive overview of my technical expertise in AI systems, research projects, patent publications, and professional background.
                            </p>

                            {/* Resume Preview */}
                            <div className="resume-preview-container">
                                <iframe
                                    src="/resume.pdf#toolbar=0"
                                    className="resume-iframe"
                                    title="Resume Preview"
                                />
                            </div>

                            <div className="mt-8 flex gap-4">
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn flex-1 text-center">
                                    <span>View Resume →</span>
                                </a>
                                <a href="/resume.pdf" download="Souradip_Biswas_Resume.pdf" className="btn flex-1 text-center border-accent hover:border-accent">
                                    <span>Download CV ↓</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Souradip Biswas. Built with Next.js & passion.</p>
                    <div className="mt-4">
                        <a href="https://github.com/sobiswriter" className="mx-3 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/sobiswriter/" className="mx-3 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </footer>
            </main>
            <NavDock />
        </>
    );
}
