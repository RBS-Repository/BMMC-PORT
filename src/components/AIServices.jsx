import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GlowingEffect } from './ui/glowing-effect';
import './AIServices.css';

const AIServices = () => {
    const services = [
        { num: "01", title: "NEURAL LLM", desc: "Custom language models trained on your business data. Integrate GPT-4 or Claude with fine-tuning for industry-specific accuracy. Ideal for customer support and document analysis." },
        { num: "02", title: "COGNITIVE BOTS", desc: "AI chatbots that understand context, remember history, and escalate to humans when needed. Runs 24/7 so your business never goes offline." },
        { num: "03", title: "AUTO-SYSTEMS", desc: "Automate repetitive tasks — invoice processing, data entry, report generation — with self-optimizing RPA pipelines that get smarter over time." },
        { num: "04", title: "VISION CORE", desc: "AI that reads images and video with human-level accuracy. Perfect for quality control, inventory management, and visual product search." },
        { num: "05", title: "PREDICTIVE AX", desc: "Know what your customers will do before they do it. Machine learning models that forecast demand, churn, and revenue trends from your existing data." },
        { num: "06", title: "NLP ENGINE", desc: "Build voice assistants, multilingual chatbots, and sentiment dashboards. Supports Filipino language processing for local market accuracy." }
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
                    <span className="ai-p-label">AI Services / 02</span>
                    <h2 className="ai-p-title">AI Intelligence <br /> Systems</h2>
                    <p className="ai-p-lead">We engineer next-generation AI solutions for Philippine businesses ready to automate, scale, and lead their industry.</p>
                </motion.div>

                <div className="ai-p-grid">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            className="relative min-h-[350px] list-none rounded-[1.25rem] border-[1px] border-white/5 p-2 lg:p-3"
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
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={3}
                            />
                            <div className="ai-p-card relative z-10 w-full h-full">
                                <span className="card-num">{s.num}</span>
                                <div className="card-main">
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                                <div className="card-accent"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIServices;