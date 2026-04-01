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
                        THE STUDIO <br /> BEHIND THE CODE
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
                        { num: "01 // THE ORIGIN", title: "From Rizal to the World", text: "We started as a simple idea in Rodriguez, Rizal: that functional code should be inseparable from beautiful design. BMMC (Budaque Multi Media Creations) was built not just as an agency, but as a laboratory for digital experiments — serving clients from the Philippines to Southeast Asia and beyond." },
                        { num: "02 // THE PHILOSOPHY", title: "Code That Feels Alive", text: "We believe the best digital experiences are the ones you feel before you understand. The subtle animation that greets you. The hover state that surprises you. The page that loads before you notice. These aren't extras — they're the difference between a website people tolerate and one they remember.", highlight: true },
                        { num: "03 // THE FUTURE", title: "Writing Tomorrow's Web, Today", text: "Web3, AI, spatial computing — we aren't just watching the future happen; we're writing the code for it. Our mission is to help Philippine businesses harness the same technology as global companies, at a price point that makes sense locally." }
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