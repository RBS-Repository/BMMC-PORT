import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from './ui/testimonial-cards';
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
        },
        {
            name: "David asasWong",
            role: "IT Director",
            text: "I was impressed by the clean code and performance optimizations. The website loads incredibly fast.",
            company: "DataPlus"
        }
    ];

    const [positions, setPositions] = useState(['front', 'middle', 'back', 'back2']);

    const handleShuffle = () => {
        const newPositions = [...positions];
        newPositions.unshift(newPositions.pop());
        setPositions(newPositions);
    };

    return (
        <section className="testimonials-modern" id="testimonials">
            <div className="modern-t-container">
                <div className="t-grid-layout">
                    <div className="t-header-block">
                        <span className="t-label">Testimonials / 05</span>
                        <h2 className="t-main-title">Voice of <br /> Our Partners</h2>
                        <div className="t-line"></div>
                        <p className="t-lead">We build relationships, not just interfaces. Here is what they say about our craft.</p>
                    </div>

                    <div className="relative w-full max-w-[450px] h-[550px] mx-auto lg:mx-0">
                        {reviews.map((item, index) => (
                            <TestimonialCard
                                key={index}
                                item={item}
                                testimonial={item.text}
                                handleShuffle={handleShuffle}
                                position={positions[index]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;