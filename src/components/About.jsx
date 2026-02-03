import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-grid">
                <div className="about-sticky">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        DIGITAL <br /> ALCHEMY
                    </motion.h2>
                    <div className="about-decor-line"></div>
                </div>

                <div className="about-stream">
                    <div className="stream-block">
                        <span className="chapter-marker">01 // THE ORIGIN</span>
                        <h3>From Code to Consciousness</h3>
                        <p>
                            We started as a simple idea: that functional code should be inseparable from beautiful design.
                            BMMC (Budaque Multi Media Creation) was born in Rodriguez, Rizal, not just as an agency,
                            but as a laboratory for digital experiments.
                        </p>
                    </div>

                    <div className="stream-block highlight">
                        <span className="chapter-marker">02 // THE PHILOSOPHY</span>
                        <h3>Useless but Happy?</h3>
                        <p>
                            We believe in "useless" beauty—details that don't increase conversion rates but make a user smile.
                            The small animations, the hidden interactions, the easter eggs. These aren't useless; they're the soul of the machine.
                        </p>
                    </div>

                    <div className="stream-block">
                        <span className="chapter-marker">03 // THE FUTURE</span>
                        <h3>Beyond the Screen</h3>
                        <p>
                            Web3, AI, AR—we aren't just watching the future happen; we're writing the code for it.
                            Our mission is to humanize technology, making the complex feel simple and the digital feel tangible.
                        </p>
                    </div>
                </div>
            </div>

            <div className="scrolling-ticker">
                <div className="ticker-track">
                    <span>INNOVATION • WEB3 • AI • DESIGN • CODE • ART • INNOVATION • WEB3 • AI • DESIGN • CODE • ART •</span>
                </div>
            </div>
        </section>
    );
};

export default About;