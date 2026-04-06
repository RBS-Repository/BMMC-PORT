import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HowWeWork.css';

const HowWeWork = () => {
    const [activePhase, setActivePhase] = useState(null);

    const phases = [
        {
            num: "01",
            title: "Discovery",
            icon: "🔍",
            tagline: "We listen before we build.",
            desc: "Every great project begins with understanding — not assumptions. We immerse ourselves in your world: your goals, your audience, your competitors, and the problems only you can see. Through in-depth consultations and research, we define a crystal-clear project brief that becomes our shared north star.",
            deliverable: "Project Brief & Scope Document"
        },
        {
            num: "02",
            title: "Wireframe & Strategy",
            icon: "✏️",
            tagline: "Blueprint before bricks.",
            desc: "Before a single pixel is placed, we architect the user journey. Wireframes, sitemaps, and interactive prototypes let you see the structure of your product — and approve it — before development begins. No wasted time, no expensive surprises.",
            deliverable: "Wireframes & Architecture Map"
        },
        {
            num: "03",
            title: "Development",
            icon: "⚡",
            tagline: "Where code meets craft.",
            desc: "Our engineers write clean, performant, production-grade code in iterative sprints with regular check-ins. You receive progress updates at every milestone so you're never left wondering. We build for speed, accessibility, and scale — because your growth shouldn't break your site.",
            deliverable: "Staged Builds & Sprint Reviews"
        },
        {
            num: "04",
            title: "Testing & QA",
            icon: "🛡️",
            tagline: "If it's not bulletproof, it doesn't ship.",
            desc: "Every feature is rigorously tested across devices, browsers, and edge cases. We run performance audits, security checks, SEO validations, and real-user testing. Bugs are caught here — not after launch. Your reputation depends on reliability, and so does ours.",
            deliverable: "QA Report & Performance Audit"
        },
        {
            num: "05",
            title: "Deployment & Launch",
            icon: "🚀",
            tagline: "The curtain rises — flawlessly.",
            desc: "We handle everything from server configuration to DNS migration to post-launch monitoring. Your site goes live with SEO fully configured, analytics tracking in place, and a 14-day warranty. We don't disappear after delivery — we make sure you're thriving.",
            deliverable: "Live Deployment & Launch Checklist"
        }
    ];

    const contractPoints = [
        {
            icon: "📋",
            title: "Defined Scope",
            desc: "Every feature, every page, every integration — documented and agreed upon before we write a single line of code."
        },
        {
            icon: "⏱️",
            title: "Fixed Timeline",
            desc: "Clear milestones with realistic deadlines. You'll always know where we are and when to expect delivery."
        },
        {
            icon: "💰",
            title: "Payment Milestones",
            desc: "Payments are tied to verified deliverables — never upfront guesswork. You pay for results, not promises."
        },
        {
            icon: "🔄",
            title: "Revision Limits",
            desc: "Transparent revision rounds built into the contract so scope never spirals. Additional rounds are available at fair, pre-agreed rates."
        }
    ];

    const phaseVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    const contractVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <section className="how-section" id="process">
            <div className="how-container">
                {/* --- HEADER --- */}
                <div className="how-header">
                    <motion.span
                        className="process-label"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        THE ALCHEMY / 05
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Structure Changes <br />Everything
                    </motion.h2>
                    <motion.p
                        className="how-subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Great work doesn't happen by accident. Behind every digital masterpiece 
                        is a proven system — transparent phases, signed agreements, and a relentless 
                        commitment to your peace of mind.
                    </motion.p>
                    <motion.div
                        className="how-header-line"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1.2 }}
                    />
                </div>

                {/* --- PHASE TIMELINE --- */}
                <div className="phases-section">
                    <motion.h3
                        className="section-subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        📋 Five Phases. Zero Guesswork.
                    </motion.h3>

                    <div className="process-list">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={index}
                                className={`process-item ${activePhase === index ? 'active' : ''}`}
                                variants={phaseVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-30px" }}
                                custom={index}
                                onClick={() => setActivePhase(activePhase === index ? null : index)}
                            >
                                <div className="process-meta">
                                    <span className="process-num">{phase.num}</span>
                                    <div className="process-line"></div>
                                </div>
                                <div className="process-content">
                                    <div className="process-title-row">
                                        <span className="phase-icon">{phase.icon}</span>
                                        <h3>{phase.title}</h3>
                                    </div>
                                    <p className="phase-tagline">{phase.tagline}</p>
                                    <AnimatePresence>
                                        {activePhase === index && (
                                            <motion.div
                                                className="phase-expanded"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                <p className="phase-desc">{phase.desc}</p>
                                                <span className="phase-deliverable">
                                                    Deliverable → {phase.deliverable}
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <span className="phase-expand-hint">
                                        {activePhase === index ? '— Collapse' : '+ Read more'}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- CONTRACTS & TRANSPARENCY --- */}
                <div className="contracts-section">
                    <motion.div
                        className="contracts-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3>📝 Contracts & Transparency</h3>
                        <p className="contracts-subtitle">
                            Non-negotiable. Every project is backed by a signed agreement that protects 
                            <em> you</em> — defining exactly what you'll receive, when you'll receive it, 
                            and what it will cost. No ambiguity, no scope creep, no surprises.
                        </p>
                    </motion.div>

                    <div className="contracts-grid">
                        {contractPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                className="contract-card"
                                variants={contractVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-20px" }}
                                custom={index}
                            >
                                <span className="contract-icon">{point.icon}</span>
                                <h4>{point.title}</h4>
                                <p>{point.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- DIGITAL ALCHEMIST TIE-IN --- */}
                <motion.div
                    className="alchemy-footer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="alchemy-footer-line" />
                    <p>
                        Alchemy isn't chaos — it's transformation through discipline. 
                        Every phase is a crucible. Every contract is a covenant. 
                        The result? Digital products that don't just function — they <em>endure</em>.
                    </p>
                    <a href="#contact" className="process-cta">
                        Start Your Project →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HowWeWork;