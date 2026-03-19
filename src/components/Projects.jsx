import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="refined-project-card horizontal-slide"
        >
            <div className="project-card-inner">
                <div className="project-image-container">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        loading="lazy"
                    />
                    <div className="project-category-badge">{project.category}</div>
                </div>
                <div className="project-content">
                    <div className="project-meta">
                        <span className="project-index">0{index + 1}</span>
                        <div className="project-tech-stack">
                            {project.tech.map((t, i) => (
                                <span key={i} className="tech-tag">{t}</span>
                            ))}
                        </div>
                    </div>
                    <h3 className="project-display-title">{project.title}</h3>
                    <p className="project-display-description">{project.description}</p>
                </div>
                <div className="project-card-overlay">
                    <div className="project-link-cta">
                        <span>View Project</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    );
};

const Projects = () => {
    const triggerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: triggerRef,
        offset: ["start start", "end end"]
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Horizontal movement intensity
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    const projects = [
        {
            title: "Jasmine AI Beta",
            description: "Jasmine AI is AI companion with the capability of different personality",
            tech: ["React", "Node.js", "MongoDB"],
            image: "/project27.png",
            category: 'Web',
            link: "https://jasmine-ai.vercel.app/",
        },
        {
            title: "Dandelion Chocolate",
            description: "A bean-to-bar chocolate maker in San Francisco's Mission District crafting single-origin dark chocolate from just cocoa beans and organic sugar for over 10 years.",
            tech: ["React", "Node.js", "MongoDB"],
            image: "/project25.png",
            category: 'Web',
            link: "https://www.dandelionchocolate.com/",
        },
        {
            title: "Memecoin Web3",
            description: "A cryptocurrency platform designed for meme enthusiasts",
            tech: ["React", "Node.js", "MongoDB"],
            image: "/project1.png",
            category: 'Web',
            link: "https://memecoin-woad.vercel.app/",
        },
        {
            title: "Beauty lab cleanic product",
            description: "A ecommerce website designed for Korean Beauty lab cleanic product",
            tech: ["Vue.js", "AWS", "Python"],
            image: "/project21.png",
            category: 'Web',
            link: "https://shop.blcpcorp.com/",
        },
        {
            title: "Fear of God",
            description: "A platform for the latest news and updates on Fear of God.",
            tech: ["Next.js", "OpenAI", "PostgreSQL"],
            image: "/project3.png",
            category: 'Design',
            link: "https://fearofgod.com/en-ph"
        },
        {
            title: "Personal Portfolio",
            description: "A dynamic portfolio with chatbot implementation,",
            tech: ["React Native", "Firebase", "Three.js"],
            image: "/project4.png",
            category: 'Mobile',
            link: "https://rbs-repository.github.io/Ronelp/",
        },
        {
            title: "Two14 Cafe",
            description: "A modern cafe website designed to showcase their diverse menu offerings",
            tech: ["Python", "React", "TensorFlow"],
            image: "/project5.png",
            category: 'Web',
            link: "https://two14coffee.com.au/",
        },
        {
            title: "The Violet Hour",
            description: "A modern cocktail website featuring their menu",
            tech: ["Angular", "Node.js", "MySQL"],
            image: "/project6.png",
            category: 'Web',
            link: "https://www.theviolethour.com/",
        },
    ];

    return (
        <section className="horizontal-scroll-root" id="projects" ref={triggerRef}>
            <div className={`sticky-wrapper ${isMobile ? 'mobile-vertical' : ''}`}>
                <div className="premium-header horizontal-header">
                    <div className="premium-container">
                        <motion.div
                            className="header-content"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-subtitle">Selected Work</span>
                            <h2 className="premium-title">Featured Projects</h2>
                        </motion.div>
                    </div>
                </div>

                <div className="horizontal-track-container">
                    <motion.div
                        className="projects-horizontal-track"
                        style={isMobile ? {} : { x }}
                    >
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}

                        {/* View Full Archive Slide */}
                        <Link to="/all-projects" className="refined-project-card archive-slide">
                            <div className="archive-slide-content">
                                <span className="archive-label">View Full Archive</span>
                                <div className="archive-arrow">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;