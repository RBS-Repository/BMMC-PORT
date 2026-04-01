import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FloatingPaths } from './ui/background-paths';
import './Hero.css';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Advanced dynamic transformations
    const y1 = useTransform(scrollY, [0, 500], [0, 180]);
    const y2 = useTransform(scrollY, [0, 500], [0, -120]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
    const blur = useTransform(scrollY, [0, 300], [0, 10]);

    const titleVariants = {
        hidden: { opacity: 0, scale: 0.8, filter: "blur(20px)" },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                delay: 0.2 + (i * 0.15),
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <section className="hero-container" ref={containerRef}>
            <motion.div
                className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
                style={{ opacity, scale, filter: `blur(${blur}px)` }}
            >
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </motion.div>

            <div className="noise-overlay"></div>

            <motion.div
                className="hero-content"
                style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
            >
                <div className="hero-header">
                    {/* Visually hidden H1 for SEO — crawlers read this, users see the display title below */}
                    <h1 className="sr-only">AI-Powered Web Developer in the Philippines — BMMC, Rodriguez, Rizal</h1>

                    <motion.div
                        className="hero-label"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <span className="label-line"></span>
                        <span className="label-text">BMMC · RODRIGUEZ, RIZAL, PH</span>
                    </motion.div>

                    <h2 className="hero-title" aria-label="Digital Alchemist — BMMC">
                        <span className="title-row overflow-hidden">
                            <motion.span
                                className="outline-text block"
                                variants={titleVariants}
                                initial="hidden"
                                animate="visible"
                                custom={0}
                                style={{ x: y2 }}
                            >
                                DIGITAL
                            </motion.span>
                        </span>
                        <span className="title-row overflow-hidden">
                            <motion.span
                                className="filled-text block"
                                variants={titleVariants}
                                initial="hidden"
                                animate="visible"
                                custom={1}
                                style={{ x: y1 }}
                            >
                                ALCHEMIST
                            </motion.span>
                        </span>
                    </h2>
                </div>

                <motion.div
                    className="hero-footer"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1.2 }}
                >
                    <div className="hero-description">
                        <p>We build AI-powered websites, custom web apps, and Web3 platforms for Philippine businesses ready to compete at a global level.</p>
                    </div>

                    <div className="hero-cta">
                        <a href="#projects" className="circle-btn" aria-label="View our work">
                            <motion.span
                                className="btn-text"
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 2, -2, 0]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                VIEW<br />WORK
                            </motion.span>
                            <div className="btn-border"></div>
                        </a>
                        <a href="#contact" className="hero-quote-link" aria-label="Get a free project quote">
                            Get a Free Quote →
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;