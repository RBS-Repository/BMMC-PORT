import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Technical Capabilities",
            answer: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, and digital strategy consulting. Our team specializes in creating custom solutions tailored to your specific needs."
        },
        {
            question: "Delivery Timeline",
            answer: "Project timelines vary depending on scope and complexity. A typical website project takes 6-12 weeks, while larger applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
        },
        {
            question: "Foundational Process",
            answer: "Our development process follows an agile methodology with five key phases: Discovery, Strategy, Design, Development, and Launch. We maintain clear communication and regular updates throughout the project lifecycle."
        },
        {
            question: "Support & Maintenance",
            answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support to ensure your solution continues to perform optimally."
        },
        {
            question: "Modern Tech-Stack",
            answer: "We work with modern technologies including React, Node.js, Next.js, and various cloud platforms. Our tech stack is chosen based on project requirements to ensure the best performance and scalability."
        }
    ];

    return (
        <section className="faq-architectural" id="faq">
            <div className="arch-container">
                <div className="arch-grid">
                    <div className="arch-side">
                        <span className="arch-label">Inquiry / 03</span>
                        <h2 className="arch-title">Frequently <br /> Asked</h2>
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