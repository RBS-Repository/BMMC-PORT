import React, { useState, useEffect } from 'react';
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
            result: "250% Increase in Online Sales",
            challenge: "The brand struggled with a fragmented mobile experience that led to high cart abandonment rates and low user engagement in the competitive K-Beauty market.",
            solution: "We implemented a mobile-first headless commerce architecture with a highly optimized checkout flow and AI-driven product recommendations.",
            fullResults: [
                "250% increase in conversion rate",
                "45% reduction in page load time",
                "60% higher repeat purchase rate"
            ]
        },
        {
            id: 2,
            client: "Two14 Cafe",
            title: "A Digital Ecosystem for Modern Dining",
            category: "Mobile App",
            image: "/project5.png",
            result: "33% Higher Order Value",
            challenge: "Manual order processing at the cafe caused long wait times during peak hours, significantly limiting throughput and customer satisfaction.",
            solution: "Designed and deployed a cross-platform mobile ordering system integrated with real-time kitchen display units and loyalty rewards.",
            fullResults: [
                "33% increase in average order value",
                "50% reduction in queue wait times",
                "15k active loyalty members in 3 months"
            ]
        },
        {
            id: 3,
            client: "Himari AI",
            title: "Decentralizing Intelligence on the Blockchain",
            category: "Web3",
            image: "/project2.png",
            result: "500K Daily Interactions",
            challenge: "Traditional AI entities lacked verifiable transparency and true user ownership, creating a trust gap in automated decision-making systems.",
            solution: "Developed a decentralized AI protocol that uses zero-knowledge proofs to verify AI compute without exposing proprietary model weights.",
            fullResults: [
                "500k+ daily on-chain interactions",
                "99.9% verifiable compute accuracy",
                "$2M total value locked in protocol"
            ]
        }
    ];

    const [activeId, setActiveId] = useState(studies[0].id);
    const [selectedStudy, setSelectedStudy] = useState(null);

    // Close modal on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setSelectedStudy(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (selectedStudy) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedStudy]);

    return (
        <section className="case-section-mag" id="case-studies">
            <div className="mag-container">
                <div className="mag-layout">
                    <div className="mag-side-sticky">
                        <div className="mag-header-content">
                            <span className="mag-label">Case Studies / 03</span>
                            <h2 className="mag-title">Selected <br /> Stories</h2>
                            <div className="mag-line"></div>
                            <p className="mag-desc">Deep dives into the protocols, platforms, and ecosystems we've engineered.</p>
                        </div>

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
                                            <img src={study.image} alt={`${study.client} ${study.category} case study — ${study.result}`} />
                                            <div className="mag-overlay">
                                                <span className="mag-result">{study.result}</span>
                                            </div>
                                        </div>
                                        <div className="mag-details">
                                            <h3>{study.title}</h3>
                                            <button
                                                className="mag-btn"
                                                onClick={() => setSelectedStudy(study)}
                                            >
                                                Read Case Study
                                            </button>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Immersive Case Study Modal */}
            <AnimatePresence>
                {selectedStudy && (
                    <motion.div
                        className="study-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedStudy(null)}
                    >
                        <motion.div
                            className="study-modal-content"
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setSelectedStudy(null)}>×</button>

                            <div className="modal-grid">
                                <div className="modal-visual">
                                    <img src={selectedStudy.image} alt={`${selectedStudy.client} ${selectedStudy.category} case study — ${selectedStudy.result}`} />
                                    <div className="modal-stat">
                                        <span className="stat-label">Key Result</span>
                                        <span className="stat-value">{selectedStudy.result}</span>
                                    </div>
                                </div>
                                <div className="modal-info">
                                    <span className="modal-label">{selectedStudy.category} / {selectedStudy.client}</span>
                                    <h2>{selectedStudy.title}</h2>

                                    <div className="modal-body-section">
                                        <h4>The Challenge</h4>
                                        <p>{selectedStudy.challenge}</p>
                                    </div>

                                    <div className="modal-body-section">
                                        <h4>Our Solution</h4>
                                        <p>{selectedStudy.solution}</p>
                                    </div>

                                    <div className="modal-body-section">
                                        <h4>Impact</h4>
                                        <ul className="modal-results-list">
                                            {selectedStudy.fullResults.map((r, i) => (
                                                <li key={i}>{r}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="modal-actions">
                                        <button className="modal-btn-contact" onClick={() => {
                                            setSelectedStudy(null);
                                            window.location.href = '#contact';
                                        }}>Start a similar project</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CaseStudies;