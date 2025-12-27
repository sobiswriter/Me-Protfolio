'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const projects = [
        {
            title: "Solaris AI",
            description: "Next-gen neural interface for real-time data visualization.",
            tech: ["React", "Three.js", "GPT-4"],
            color: "#7000ff"
        },
        {
            title: "Ether Drive",
            description: "Decentralized storage solution with focus on privacy and speed.",
            tech: ["Rust", "Wasm", "IPFS"],
            color: "#00d4ff"
        },
        {
            title: "Vortex UI",
            description: "Premium design system for enterprise-level applications.",
            tech: ["Figma", "Stitches", "React"],
            color: "#ff0070"
        }
    ];

    return (
        <main>
            {/* Navigation */}
            <nav style={{
                background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
                borderColor: scrolled ? 'var(--card-border)' : 'transparent'
            }}>
                <div className="container nav-content">
                    <div className="logo" style={{ color: 'var(--foreground)' }}>SOURAV.</div>
                    <div className="nav-links">
                        <a href="#work">Work</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="container">
                <div className="reveal">
                    <p className="stagger-1" style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Available for projects</p>
                    <h1 className="stagger-2">
                        Crafting <span className="gradient-text">Digital</span><br />
                        Experiences.
                    </h1>
                    <p className="stagger-3" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.8 }}>
                        I'm a Full-Stack Developer & UI/UX Designer specialized in building
                        premium web applications with high performance and cinematic design.
                    </p>
                    <div className="stagger-3 hero-btns">
                        <a href="#work" className="btn">View Work</a>
                        <a href="#contact" className="btn btn-secondary">Get in Touch</a>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="work" className="container">
                <div className="reveal">
                    <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Selected Work</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {projects.map((project, i) => (
                            <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{
                                    height: '200px',
                                    background: `linear-gradient(45deg, ${project.color}22, ${project.color}44)`,
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '3rem'
                                }}>
                                    ✨
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{project.title}</h3>
                                <p style={{ fontSize: '1rem' }}>{project.description}</p>
                                <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                                    {project.tech.map((t, ii) => (
                                        <span key={ii} style={{
                                            fontSize: '0.75rem',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '100px',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid var(--card-border)'
                                        }}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="container">
                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I believe that design and code should live in harmony. With over 5 years of experience,
                            I've worked with startups and established brands to create digital products
                            that aren't just functional, but memorable.
                        </p>
                        <p>
                            My stack includes React, Next.js, Node.js, and I have a deep passion for
                            interactive design and motion.
                        </p>
                    </div>
                    <div className="glass-card" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ color: 'var(--foreground)', fontSize: '4rem', fontWeight: 800 }}>5+</p>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="container">
                <div className="reveal">
                    <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Tech Stack</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {['React', 'Next.js', 'Typescript', 'Node.js', 'PostgreSQL', 'Framer Motion', 'Cloudflare', 'Python'].map((skill, i) => (
                            <div key={i} className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', transition: 'all 0.3s ease' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⚡</div>
                                <div style={{ fontWeight: 600 }}>{skill}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
            <footer id="contact" style={{ padding: '80px 0', borderTop: '1px solid var(--card-border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '4rem', marginBottom: '2rem' }}>Let's Build Something.</h2>
                    <a href="mailto:hello@example.com" className="btn" style={{ fontSize: '1.25rem', padding: '1.5rem 3rem' }}>
                        Start a Conversation
                    </a>
                    <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem', opacity: 0.5 }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Twitter</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
                    </div>
                </div>
            </footer>

        </main>
    );
}
