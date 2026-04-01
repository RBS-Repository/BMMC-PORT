import React from 'react';
import { motion } from 'framer-motion';
import './WhatWeDo.css';

const WhatWeDo = () => {
    const services = [
        {
            icon: "01",
            title: "AI Development",
            description: "We build custom AI systems — chatbots, recommendation engines, and automation tools — that reduce manual work and increase revenue for your business.",
            tags: ["LLMs", "Machine Learning", "Automation"]
        },
        {
            icon: "02",
            title: "Business Integration",
            description: "Already have a system? We connect AI and modern APIs to your existing tools, so your team works smarter without starting from scratch.",
            tags: ["Strategy", "API Design", "Cloud Ops"]
        },
        {
            icon: "03",
            title: "Web Engineering",
            description: "Fast, SEO-ready, mobile-first websites and web apps built with React and Next.js — engineered to rank, convert, and scale with your growth.",
            tags: ["React", "Next.js", "WebGL"]
        },
        {
            icon: "04",
            title: "Digital Strategy",
            description: "Not sure where to start? We map out your entire digital journey — from first website to AI-powered platform — with a clear, phased roadmap.",
            tags: ["Consulting", "Analytics", "Growth"]
        }
    ];

    return (
        <section className="whatwedo-section-arch" id="services">
            <div className="arch-container">
                <div className="arch-header">
                    <h2>Web &amp; AI Development Services — Philippines</h2>
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