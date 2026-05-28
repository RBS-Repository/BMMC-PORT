import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Projects.css'; // Reusing premium project styles

const AllProjects = () => {
    const [filter, setFilter] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState([]);

    const projects = [
        {
            title: "RiftNest Movies",
            description: "Curated free movie streaming sites with no ads and no signups required. A hub for the best cinematic experiences.",
            tech: ["React", "HTML", "CSS"],
            image: "https://i.imgur.com/g49PQ4J.png",
            category: "Web",
            link: "https://www.riftnest.giize.com/movies"
        },
        {
            title: "Haven Windows",
            description: "Modern, high-performance website for Haven Windows & Doors NZ. ",
            tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
            image: "/project3354335.jpg",
            category: "Web",
            link: "https://www.havenwindows.co.nz/"
        },

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
            title: "Himari AI Web3",
            description: "Future AI entity bridging human-AI understanding.",
            tech: ["Vue.js", "AWS", "Python"],
            image: "/project2.png",
            category: 'Web',
            link: "https://himari-ai.vercel.app/overview",
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
            title: "Beauty lab cleanic product",
            description: "A ecommerce website designed for Korean Beauty lab cleanic product",
            tech: ["Vue.js", "AWS", "Python"],
            image: "/project21.png",
            category: 'Web',
            link: "https://shop.blcpcorp.com/",
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
            description: "A  modern cocktail website featuring their menu",
            tech: ["Angular", "Node.js", "MySQL"],
            image: "/project6.png",
            category: 'Web',
            link: "https://www.theviolethour.com/",
        },
        {
            title: "Nalen Ayurveda",
            description: "A skincare e-commerce platform showcasing Bright Face Cleanser's products",
            tech: ["React", "Socket.io", "MongoDB"],
            image: "/project7.png",
            category: 'Web',
            link: "https://www.nalenayurveda.com/",
        },
        {
            title: "Cloe Cassandro",
            description: "A sustainable fashion brand offering unique and stylish clothing",
            tech: ["Web3.js", "React", "Solidity"],
            image: "/project8.png",
            category: 'Other',
            link: "https://cloecassandro.com/",
        },
        {
            title: "Magic Spoon Cereal",
            description: "A modern e-commerce platform selling healthy, low-carb cereals with unique flavors",
            tech: ["Vue.js", "MQTT", "GraphQL"],
            image: "/project9.png",
            category: 'Web',
            link: "https://magicspoon.com/",
        },
        {
            title: "Blakes Sweet Treats",
            description: "A delightful e-commerce website specializing in crispy sweet treats and desserts, ",
            tech: ["Unity", "ARKit", "React Native"],
            image: "/project10.png",
            category: 'Mobile',
            link: "https://www.eatblakes.com/",
        },
        {
            title: "L'ATELIER Restaurant",
            description: "An elegant French restaurant website showcasing their exquisite menu",
            tech: ["React", "Node.js", "AWS"],
            image: "/project11.png",
            category: 'Web',
            link: "https://www.ateliersaintbarth.fr/",
        },
        {
            title: "E-Commerce Website",
            description: "A full-featured online store built with React, Node.js, and MongoDB",
            tech: ["Angular", "Python", "TensorFlow"],
            image: "/project12.png",
            category: 'Web',
            link: "https://eastwing23.vercel.app/",
        },
        {
            title: "Photography Portfolio",
            description: "A photographer's portfolio showcasing their masterpiece into digital world,",
            tech: ["Angular", "Python", "TensorFlow"],
            image: "/project13.png",
            category: 'Web',
            link: "https://www.elizabethweinberg.com/"
        },
        {
            title: "Fashion E-Commerce Website",
            description: "A modern fashion retail platform featuring a curated collection of clothing,",
            tech: ["Angular", "Python", "TensorFlow"],
            image: "/project14.png",
            category: 'Web',
            link: "https://www.shenannz.com/",
        },

    ];

    const categories = ['All', ...new Set(projects.map(p => p.category))];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(p => p.category === filter));
        }
    }, [filter]);

    return (
        <section className="projects-premium-section archive-page">
            <div className="archive-ambient-glow"></div>
            <div className="premium-container">
                <div className="premium-header archive-header">
                    <div className="header-labels">
                        <Link to="/" className="back-home-link">← Back to Selection</Link>
                        <span> Archive / 2024 — 2026</span>
                    </div>
                    <div className="archive-title-wrap">
                        <h2 className="premium-title">Complete <br /> Works</h2>
                        <div className="filter-minimal">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`filter-text-btn ${filter === cat ? 'active' : ''}`}
                                    onClick={() => setFilter(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div layout className="glass-projects-grid">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.a
                                layout
                                key={project.title}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-project-card"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
                            >
                                <div className="glass-card-image-wrapper">
                                    <img src={project.image} alt={project.title} className="glass-card-image" loading="lazy" />
                                    <div className="glass-card-badge">{project.category}</div>
                                </div>
                                <div className="glass-card-content">
                                    <div className="glass-card-header">
                                        <h3 className="glass-card-title">{project.title}</h3>
                                        <div className="glass-card-arrow">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="19" x2="19" y2="5"></line>
                                                <polyline points="9 5 19 5 19 15"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="glass-card-desc">{project.description}</p>
                                    <div className="glass-card-tech">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="glass-tech-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default AllProjects;
