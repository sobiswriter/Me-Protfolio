import ThemeToggle from "./components/ThemeToggle";
import FaultyTerminal from "./components/FaultyTerminal";

export default function Home() {
    return (
        <>
            {/* Faulty Terminal Background */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -10,
                opacity: 0.12,
                pointerEvents: 'none'
            }}>
                <FaultyTerminal
                    scale={1.5}
                    gridMul={[2, 1]}
                    digitSize={1.2}
                    timeScale={0.5}
                    pause={false}
                    scanlineIntensity={0.5}
                    glitchAmount={1}
                    flickerAmount={1}
                    noiseAmp={1}
                    chromaticAberration={0}
                    dither={0}
                    curvature={0.1}
                    tint="#00ff41"
                    mouseReact={true}
                    mouseStrength={0.5}
                    pageLoadAnimation={true}
                    brightness={0.6}
                />
            </div>

            <main className="min-h-screen">
                <ThemeToggle />

                {/* Hero Section */}
                <section className="hero">
                    <h1>Souradip (Sobi) Biswas</h1>
                    <p className="tagline">
                        AI / ML Systems • Applied AI • Creative Tooling
                    </p>
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

                        {/* LegalLM */}
                        <div className="card">
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>LegalLM</h3>
                                    <span className="type-badge">AI Application</span>
                                </div>
                                <p className="text-sm text-slate-400 mb-2">Featured Flagship Project</p>
                                <p className="text-slate-300 text-sm">
                                    AI-driven platform for uploading, parsing, and analyzing legal documents using NLP-based approaches.
                                </p>
                            </div>
                            <div className="tech-stack">
                                <span className="tech-tag">TypeScript</span>
                                <span className="tech-tag">AI/NLP Stack</span>
                            </div>
                        </div>

                        {/* Project AIC */}
                        <div className="card">
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>Project AIC</h3>
                                    <span className="type-badge">AI Bot / System</span>
                                </div>
                                <p className="text-sm text-slate-400 mb-2">Core Long-term Personal Project</p>
                                <p className="text-slate-300 text-sm">
                                    Python-based intelligent bot system exploring behavior, interaction, and decision logic.
                                </p>
                            </div>
                            <div className="tech-stack">
                                <span className="tech-tag">Python</span>
                            </div>
                        </div>

                        {/* The Shadow Diary */}
                        <div className="card">
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>The Shadow Diary</h3>
                                    <span className="type-badge">AI Journaling</span>
                                </div>
                                <p className="text-slate-300 text-sm">
                                    Journaling platform that uses AI to rewrite and reinterpret entries, inspired by psychological and Jungian themes.
                                </p>
                            </div>
                            <div className="tech-stack">
                                <span className="tech-tag">TypeScript</span>
                            </div>
                        </div>

                        {/* PersonaVerse */}
                        <div className="card">
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>PersonaVerse</h3>
                                    <span className="type-badge">Desktop AI App</span>
                                </div>
                                <p className="text-slate-300 text-sm">
                                    Persona creation and interaction playground enabling users to build and converse with AI-driven personalities.
                                </p>
                            </div>
                            <div className="tech-stack">
                                <span className="tech-tag">Node.js</span>
                                <span className="tech-tag">Electron</span>
                            </div>
                        </div>

                        {/* AI Overlay */}
                        <div className="card">
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>AI Overlay</h3>
                                    <span className="type-badge">Desktop Utility</span>
                                </div>
                                <p className="text-slate-300 text-sm">
                                    Lightweight AI overlay tool designed for productivity and real-time assistance.
                                </p>
                            </div>
                            <div className="tech-stack">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">Tkinter</span>
                            </div>
                        </div>

                        {/* Inviter */}
                        <div className="card">
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>Inviter</h3>
                                    <span className="type-badge">Web Application</span>
                                </div>
                                <p className="text-slate-300 text-sm">
                                    Invitation management system integrating messaging and email services for automated communication workflows.
                                </p>
                            </div>
                            <div className="tech-stack">
                                <span className="tech-tag">Node.js</span>
                                <span className="tech-tag">Next.js</span>
                                <span className="tech-tag">Twilio</span>
                                <span className="tech-tag">SMTP APIs</span>
                            </div>
                        </div>

                        {/* Business Venture App */}
                        <div className="card">
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>Business Venture App</h3>
                                    <span className="type-badge">Desktop Application</span>
                                </div>
                                <p className="text-slate-300 text-sm">
                                    Business-focused application supporting financial tracking, reporting, and internal workflows.
                                </p>
                            </div>
                            <div className="tech-stack">
                                <span className="tech-tag">Node.js</span>
                                <span className="tech-tag">Electron</span>
                            </div>
                        </div>

                        {/* Cosmos Anomaly */}
                        <div className="card">
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>Cosmos Anomaly</h3>
                                    <span className="type-badge">Experimental System</span>
                                </div>
                                <p className="text-slate-300 text-sm">
                                    Narrative-driven and system-oriented project exploring timeline manipulation and anomaly-based logic.
                                </p>
                            </div>
                            <div className="tech-stack">
                                <span className="tech-tag">TypeScript</span>
                            </div>
                        </div>

                        {/* Timeline Twist (V2) */}
                        <div className="card">
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>Timeline Twist (V2)</h3>
                                    <span className="type-badge">Iterative System</span>
                                </div>
                                <p className="text-slate-300 text-sm">
                                    Second iteration of a timeline-based project, emphasizing refactoring and architectural improvement.
                                </p>
                            </div>
                            <div className="tech-stack">
                                <span className="tech-tag">TypeScript</span>
                            </div>
                        </div>

                        {/* PowerShell Utility Suite */}
                        <div className="card">
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>PS Utility Suite</h3>
                                    <span className="type-badge">Automation Tool Collection</span>
                                </div>
                                <p className="text-slate-300 text-sm">
                                    Collection of PowerShell modules including web scraping, scheduling, stopwatch utilities, image editing, and automation tools.
                                </p>
                            </div>
                            <div className="tech-stack">
                                <span className="tech-tag">PowerShell</span>
                            </div>
                        </div>

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

                {/* Footer */}
                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Souradip Biswas. Built with Next.js & passion.</p>
                    <div className="mt-4">
                        <a href="https://github.com/sobiswriter" className="mx-3 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/sobiswriter/" className="mx-3 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </footer>
            </main>
        </>
    );
}
