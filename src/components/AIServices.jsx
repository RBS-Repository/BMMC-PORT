import React from 'react';
import { motion } from 'framer-motion';
import './AIServices.css';

const AIServices = () => {
    const services = [
        {
            num: "01",
            title: "NEURAL LLM",
            desc: "Custom-trained language models tailored to your business DNA. GPT-4 & Claude integration with domain fine-tuning.",
        },
        {
            num: "02",
            title: "COGNITIVE BOTS",
            desc: "Context-aware agents that evolve with every interaction. 24/7 autonomy with sentiment analysis core.",
        },
        {
            num: "03",
            title: "AUTO-SYSTEMS",
            desc: "Self-optimizing autonomous business processes. RPA 2.0 with smart document processing.",
        },
        {
            num: "04",
            title: "VISION CORE",
            desc: "Systems that interpret the visual world with human-like accuracy. Object detection and visual QC.",
        },
        {
            num: "05",
            title: "PREDICTIVE AX",
            desc: "Forecasting engines that see the future of your data. Trend analysis and risk modeling.",
        },
        {
            num: "06",
            title: "NLP ENGINE",
            desc: "Bridging the gap between human intent and machine execution. Voice synthesis and intent classification.",
        }
    ];

    return (
        <section className="ai-premium" id="ai-services">
            <div className="ai-p-container">
                <div className="ai-p-header">
                    <span className="ai-p-label">Intelligence / 02</span>
                    <h2 className="ai-p-title">Future <br /> Proofing</h2>
                    <p className="ai-p-lead">We engineer next-generation AI solutions designed for the high-end digital landscape.</p>
                </div>

                <div className="ai-p-grid">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            className="ai-p-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
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