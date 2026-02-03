import React from 'react';
import { motion } from 'framer-motion';
import './WhatWeDo.css';

const WhatWeDo = () => {
    const services = [
        {
            icon: "01",
            title: "AI Development",
            description: "We engineer intelligent systems that automate complex workflows and generate actionable insights.",
            tags: ["LLMs", "Machine Learning", "Automation"]
        },
        {
            icon: "02",
            title: "Business Integration",
            description: "Seamlessly embedding AI architectures into existing ecosystems to drive efficiency and scale.",
            tags: ["Strategy", "API Design", "Cloud Ops"]
        },
        {
            icon: "03",
            title: "Web Engineering",
            description: "Building performance-first web applications with cutting-edge frameworks and responsive design.",
            tags: ["React", "Next.js", "WebGL"]
        },
        {
            icon: "04",
            title: "Digital Strategy",
            description: "Comprehensive roadmaps for digital transformation, ensuring long-term technological resilience.",
            tags: ["Consulting", "Analytics", "Growth"]
        }
    ];

    return (
        <section className="whatwedo-section-arch" id="services">
            <div className="arch-container">
                <div className="arch-header">
                    <h2>Our Expertise</h2>
                    <div className="header-line"></div>
                </div>

                <div className="arch-grid">
                    {services.map((service, index) => (
                        <div key={index} className="arch-card">
                            <span className="arch-number">{service.icon}</span>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="arch-tags">
                                {service.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;