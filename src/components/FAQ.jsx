import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Do you build websites for Philippine businesses specifically?",
            answer: "Yes — BMMC is based in Rodriguez, Rizal and we specialize in serving Filipino businesses ranging from small online shops to enterprise platforms. We understand local payment gateways (GCash, PayMaya), hosting preferences, and the Philippine market. We also work with international clients across Southeast Asia and the US."
        },
        {
            question: "How long does it take to build a website?",
            answer: "A standard business website takes 3–6 weeks from kickoff to launch. E-commerce sites typically take 6–10 weeks depending on catalog size. AI-powered and Web3 projects are scoped individually. We'll give you a clear timeline in your free consultation."
        },
        {
            question: "What is your development process?",
            answer: "We follow a 5-phase process: Discovery (goals + research), Strategy (architecture + wireframes), Design (UI prototypes), Development (clean, tested code), and Launch (deployment + SEO setup). You're involved at every sign-off stage with no surprises."
        },
        {
            question: "Do you offer post-launch support and maintenance?",
            answer: "Yes. All projects include a 14-day post-launch warranty at no extra cost. For ongoing care, we offer three maintenance plans starting at ₱3,500/month — covering updates, backups, uptime monitoring, and more. View our Maintenance Plans section for details."
        },
        {
            question: "What technologies do you use?",
            answer: "Our primary stack is React, Next.js, and Node.js for web, with Python and TensorFlow for AI services. We also work with Vue.js, Firebase, MongoDB, and AWS. For Web3, we use Solidity and ethers.js. Every stack decision is made based on what's best for your specific project."
        }
    ];

    return (
        <section className="faq-architectural" id="faq">
            <div className="arch-container">
                <div className="arch-grid">
                    <div className="arch-side">
                        <span className="arch-label">FAQ / 04</span>
                        <h2 className="arch-title">Frequently <br /> Asked Questions</h2>
                        <div className="arch-line"></div>
                        <p className="arch-desc">Everything you need to know about our collaboration model and delivery standards.</p>
                    </div>

                    <div className="arch-main">
                        {faqs.map((faq, index) => (
                            <div key={index} className="arch-item">
                                <button
                                    className={`arch-trigger ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                >
                                    <span className="arch-index">0{index + 1}</span>
                                    <span className="arch-question">{faq.question}</span>
                                    <div className="arch-plus">
                                        <div className="plus-line horizontal"></div>
                                        <div className={`plus-line vertical ${activeIndex === index ? 'collapsed' : ''}`}></div>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            className="arch-content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <div className="arch-inner">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;