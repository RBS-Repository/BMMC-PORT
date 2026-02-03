import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effect for the background
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="hero-container" ref={containerRef}>
            <div className="aurora-background">
                <div className="aurora-blob blob-1"></div>
                <div className="aurora-blob blob-2"></div>
                <div className="aurora-blob blob-3"></div>
            </div>

            <div className="noise-overlay"></div>

            <div className="hero-content">
                <motion.div
                    className="hero-header"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="hero-label">
                        <span className="label-line"></span>
                        <span className="label-text">EST. 2025</span>
                    </div>

                    <h1 className="hero-title">
                        <span className="title-row">
                            <motion.span
                                className="outline-text"
                                style={{ x: y2 }}
                            >
                                DIGITAL
                            </motion.span>
                        </span>
                        <span className="title-row">
                            <motion.span
                                className="filled-text"
                                style={{ x: y1 }}
                            >
                                ALCHEMIST
                            </motion.span>
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    className="hero-footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="hero-description">
                        <p>Crafting immersive digital experiences through code, design, and innovation.</p>
                    </div>

                    <div className="hero-cta">
                        <a href="#projects" className="circle-btn">
                            <span className="btn-text">VIEW<br />WORK</span>
                            <div className="btn-border"></div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;