import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AIServices.css';

const AIServices = () => {
    const aiServices = [
        {
            icon: "🧠",
            title: "Large Language Models",
            description: "Custom-trained and fine-tuned LLMs tailored to your business needs and industry knowledge",
            features: [
                "GPT, LLaMA, and Claude integration",
                "Domain-specific training",
                "Continuous learning implementation",
                "Business knowledge embeddings"
            ]
        },
        {
            icon: "🤖",
            title: "AI Assistants & Chatbots",
            description: "Intelligent virtual assistants that understand context, learn from interactions, and provide seamless customer support",
            features: [
                "24/7 automated customer service",
                "Multi-language support",
                "Integration with business systems",
                "Progressive learning capabilities"
            ]
        },
        {
            icon: "⚙️",
            title: "Business Process Automation",
            description: "Smart workflows powered by AI that streamline operations, reduce manual tasks, and improve efficiency",
            features: [
                "Document processing & analysis",
                "Predictive maintenance systems",
                "Inventory optimization",
                "Automated decision support"
            ]
        },
        {
            icon: "📊",
            title: "Predictive Analytics",
            description: "Advanced AI models that analyze data patterns to forecast trends, behaviors, and business outcomes",
            features: [
                "Customer behavior prediction",
                "Sales and demand forecasting",
                "Risk assessment models",
                "Market trend analysis"
            ]
        },
        {
            icon: "👁️",
            title: "Computer Vision Solutions",
            description: "AI systems that can interpret and understand visual information from the world, enabling new capabilities",
            features: [
                "Image recognition & classification",
                "Object detection & tracking",
                "Visual quality control",
                "Augmented reality integration"
            ]
        },
        {
            icon: "🔊",
            title: "Natural Language Processing",
            description: "Systems that understand, interpret, and generate human language in useful and meaningful ways",
            features: [
                "Sentiment analysis",
                "Content summarization",
                "Multilingual translation",
                "Voice recognition integration"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 30
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="ai-services-section" id="ai-services">
            <div className="ai-services-bg"></div>
            <div className="ai-services-container">
                <motion.div 
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>AI Services</h2>
                    <div className="section-line"></div>
                    <p className="section-subtitle">Powering Business Intelligence with Advanced AI Solutions</p>
                </motion.div>

                <motion.p 
                    className="ai-services-intro"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Our specialized AI services leverage cutting-edge machine learning and neural network technologies to provide intelligent solutions that adapt to your business challenges and evolve with your needs.
                </motion.p>

                <motion.div 
                    className="ai-services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {aiServices.map((service, index) => (
                        <motion.div 
                            key={index} 
                            className="ai-service-card"
                            variants={cardVariants}
                            whileHover={{ 
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="ai-service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul className="ai-features-list">
                                {service.features.map((feature, i) => (
                                    <motion.li 
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                                    >
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="ai-service-hover-effect"></div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="ai-services-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h3>Ready to transform your business with AI?</h3>
                    <p>Let's discuss how our AI solutions can address your specific challenges and opportunities.</p>
                    <a href="#contact" className="ai-cta-button">
                        <span>Get Started with AI</span>
                        <span className="button-glow"></span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default AIServices; 