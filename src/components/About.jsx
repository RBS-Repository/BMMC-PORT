import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

const About = () => {
    const blockVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section className="about-section" id="about">
            <div className="about-grid">
                <div className="about-sticky">
                    <motion.h2
                        initial={{ opacity: 0, rotateX: -30, y: 50 }}
                        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        DIGITAL <br /> ALCHEMY
                    </motion.h2>
                    <motion.div
                        className="about-decor-line"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    ></motion.div>
                </div>

                <div className="about-stream">
                    {[
                        { num: "01 // THE ORIGIN", title: "From Code to Consciousness", text: "We started as a simple idea: that functional code should be inseparable from beautiful design. BMMC (Budaque Multi Media Creation) was born in Rodriguez, Rizal, not just as an agency, but as a laboratory for digital experiments." },
                        { num: "02 // THE PHILOSOPHY", title: "Useless but Happy?", text: "We believe in \"useless\" beauty—details that don't increase conversion rates but make a user smile. The small animations, the hidden interactions, the easter eggs. These aren't useless; they're the soul of the machine.", highlight: true },
                        { num: "03 // THE FUTURE", title: "Beyond the Screen", text: "Web3, AI, AR—we aren't just watching the future happen; we're writing the code for it. Our mission is to humanize technology, making the complex feel simple and the digital feel tangible." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className={`stream-block ${item.highlight ? 'highlight' : ''}`}
                            variants={blockVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <span className="chapter-marker">{item.num}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </motion.div>
                    ))}
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