import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            name: "Grace Espiritu",
            role: "E-commerce Owner",
            text: "Grabe, sobrang ganda ng website ko ngayon! Hindi ko inexpect na ganito kaganda ang magiging outcome. Professional na professional tingnan!",
            company: "GE Boutique"
        },
        {
            name: "Tina Ignacio",
            role: "Restaurant Manager",
            text: "Ang dami na naming customers ngayon kasi ang smooth ng ordering system. Worth it talaga!",
            company: "Taste Haven"
        },
        {
            name: "Paolo Mendoza",
            role: "Marketing Director",
            text: "Super responsive ng team sa lahat ng requests namin. Kahit mga biglaan naming changes, inaacommodate nila.",
            company: "DigitalEdge"
        },
        {
            name: "David Wong",
            role: "IT Director",
            text: "I was impressed by the clean code and performance optimizations. The website loads incredibly fast.",
            company: "DataPlus"
        }
    ];

    return (
        <section className="testimonials-modern" id="testimonials">
            <div className="modern-t-container">
                <div className="t-grid-layout">
                    <div className="t-header-block">
                        <span className="t-label">Testimonials</span>
                        <h2 className="t-main-title">Voice of <br /> Our Partners</h2>
                        <p className="t-lead">We build relationships, not just interfaces. Here is what they say about our craft.</p>
                    </div>

                    <div className="t-reviews-stream">
                        {reviews.map((item, index) => (
                            <motion.div
                                key={index}
                                className="t-review-card"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <div className="t-card-accent"></div>
                                <p className="t-text">"{item.text}"</p>
                                <div className="t-author">
                                    <div className="t-author-info">
                                        <h4>{item.name}</h4>
                                        <p>{item.role} @ {item.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;