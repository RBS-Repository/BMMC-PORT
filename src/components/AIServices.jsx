import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './AIServices.css';

const AIServices = () => {
    const services = [
        { num: "01", title: "NEURAL LLM", desc: "Custom-trained language models tailored to your business DNA. GPT-4 & Claude integration with domain fine-tuning." },
        { num: "02", title: "COGNITIVE BOTS", desc: "Context-aware agents that evolve with every interaction. 24/7 autonomy with sentiment analysis core." },
        { num: "03", title: "AUTO-SYSTEMS", desc: "Self-optimizing autonomous business processes. RPA 2.0 with smart document processing." },
        { num: "04", title: "VISION CORE", desc: "Systems that interpret the visual world with human-like accuracy. Object detection and visual QC." },
        { num: "05", title: "PREDICTIVE AX", desc: "Forecasting engines that see the future of your data. Trend analysis and risk modeling." },
        { num: "06", title: "NLP ENGINE", desc: "Bridging the gap between human intent and machine execution. Voice synthesis and intent classification." }
    ];

    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Reactive scroll values for internal depth
    const cardY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const cardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -3]);
    const headerY = useTransform(scrollYProgress, [0, 1], [0, 80]);

    return (
        <section className="ai-premium" id="ai-services" ref={containerRef}>
            <div className="ai-p-container">
                <motion.div
                    className="ai-p-header"
                    style={{ y: headerY }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="ai-p-label">Intelligence / 02</span>
                    <h2 className="ai-p-title">Future <br /> Proofing</h2>
                    <p className="ai-p-lead">We engineer next-generation AI solutions designed for the high-end digital landscape.</p>
                </motion.div>

                <div className="ai-p-grid">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            className="ai-p-card"
                            style={{
                                y: i % 2 === 0 ? cardY : useTransform(scrollYProgress, [0, 1], [-30, 30]),
                                rotateX: cardRotate,
                                perspective: "1000px"
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.05 }}
                        >
                            <span className="card-num">{s.num}</span>
                            <div className="card-main">
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                            <div className="card-accent"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIServices;