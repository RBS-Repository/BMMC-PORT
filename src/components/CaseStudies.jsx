import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CaseStudies.css';

const CaseStudies = () => {
    const studies = [
        {
            id: 1,
            client: "Beauty Lab Cleanic",
            title: "Reimagining Digital Retail for Korean Beauty",
            category: "E-Commerce",
            image: "/project21.png",
            result: "250% Increase in Online Sales"
        },
        {
            id: 2,
            client: "Two14 Cafe",
            title: "A Digital Ecosystem for Modern Dining",
            category: "Mobile App",
            image: "/project5.png",
            result: "33% Higher Order Value"
        },
        {
            id: 3,
            client: "Himari AI",
            title: "Decentralizing Intelligence on the Blockchain",
            category: "Web3",
            image: "/project2.png",
            result: "500K Daily Interactions"
        }
    ];

    const [activeId, setActiveId] = useState(studies[0].id);

    return (
        <section className="case-section-mag" id="case-studies">
            <div className="mag-container">
                <div className="mag-header">
                    <h2>Selected Stories</h2>
                    <div className="mag-line"></div>
                </div>

                <div className="mag-layout">
                    <div className="mag-nav">
                        {studies.map(study => (
                            <div
                                key={study.id}
                                className={`mag-nav-item ${activeId === study.id ? 'active' : ''}`}
                                onClick={() => setActiveId(study.id)}
                            >
                                <span className="mag-nav-cat">{study.category}</span>
                                <h4>{study.client}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="mag-display">
                        <AnimatePresence mode="wait">
                            {studies.map(study => (
                                study.id === activeId && (
                                    <motion.div
                                        key={study.id}
                                        className="mag-content"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="mag-image-wrapper">
                                            <img src={study.image} alt={study.title} />
                                            <div className="mag-overlay">
                                                <span className="mag-result">{study.result}</span>
                                            </div>
                                        </div>
                                        <div className="mag-details">
                                            <h3>{study.title}</h3>
                                            <button className="mag-btn">Read Case Study</button>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;