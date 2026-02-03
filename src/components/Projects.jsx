import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
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
        <section className="projects-premium-section" id="projects">
            <div className="premium-container">
                <div className="premium-header">
                    <div className="header-labels">
                        <span>Selected Work</span>
                        <span>/ 2024 — 2026</span>
                    </div>
                    <h2 className="premium-title">Digital <br /> Craftsmanship</h2>
                </div>

                <div className="premium-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`premium-card ${index % 3 === 0 ? 'large' : 'small'}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className="card-inner">
                                <div className="image-box">
                                    <img src={project.image} alt={project.title} />
                                    <div className="card-hover-overlay">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-btn">
                                            Visit Live
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-info">
                                    <div className="info-top">
                                        <span className="info-cat">{project.category}</span>
                                        <span className="info-index">0{index + 1}</span>
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="premium-footer">
                    <Link to="/all-projects" className="explore-all-link">
                        <span className="link-text">Explore All Projects</span>
                        <div className="link-arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;