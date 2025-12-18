import React from 'react';
import { motion } from 'framer-motion';
import './Maintenance.css';

const Maintenance = () => {
    const maintenancePlans = [
        {
            icon: "🛠️",
            title: "Basic",
            price: "₱3,500",
            period: "per month",
            description: "Essential maintenance to keep your website running smoothly",
            features: [
                "Monthly security updates",
                "Regular backups",
                "Basic performance monitoring",
                "Up to 2 hours of content updates"
            ],
            recommended: false
        },
        {
            icon: "⚙️",
            title: "Standard",
            price: "₱6,500",
            period: "per month",
            description: "Comprehensive maintenance with regular improvements",
            features: [
                "Weekly security updates",
                "Daily automated backups",
                "Performance optimization",
                "Up to 5 hours of content updates",
                "Monthly analytics report"
            ],
            recommended: true
        },
        {
            icon: "🚀",
            title: "Premium",
            price: "₱12,000",
            period: "per month",
            description: "Advanced maintenance with priority support and enhancements",
            features: [
                "Real-time security monitoring",
                "Daily manual & automated backups",
                "Advanced performance optimization",
                "Up to 10 hours of content updates",
                "Weekly analytics reports",
                "Priority support (24-hour response)",
                "Monthly feature enhancement"
            ],
            recommended: false
        },
        {
            icon: "👑",
            title: "Enterprise",
            price: "₱25,000",
            period: "per month",
            description: "Complete maintenance solution with dedicated support and continuous improvements",
            features: [
                "24/7 security monitoring & response",
                "Continuous backup system",
                "Dedicated performance optimization",
                "Unlimited content updates",
                "Custom analytics dashboard",
                "Priority support (4-hour response)",
                "Monthly feature development",
                "Dedicated account manager"
            ],
            recommended: false
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
        <section className="maintenance-section" id="maintenance">
            <div className="maintenance-bg"></div>
            <div className="maintenance-container">
                <motion.div 
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Maintenance Plans</h2>
                    <div className="section-line"></div>
                    <p className="section-subtitle">Keep Your Digital Assets Running at Peak Performance</p>
                </motion.div>

                <motion.p 
                    className="maintenance-intro"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    After development, your digital product requires ongoing maintenance to ensure security, performance, and relevance. Our maintenance plans provide peace of mind with regular updates, monitoring, and improvements to protect your investment.
                </motion.p>

                <motion.div 
                    className="maintenance-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {maintenancePlans.map((plan, index) => (
                        <motion.div 
                            key={index} 
                            className={`maintenance-card ${plan.recommended ? 'recommended' : ''}`}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {plan.recommended && (
                                <div className="recommended-badge">MOST POPULAR</div>
                            )}
                            <div className="maintenance-icon">
                                {plan.icon}
                            </div>
                            <h3>{plan.title}</h3>
                            <div className="price-container">
                                <span className="price">{plan.price}</span>
                                <span className="period">{plan.period}</span>
                            </div>
                            <p>{plan.description}</p>
                            <ul className="features-list">
                                {plan.features.map((feature, i) => (
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
                            <motion.a 
                                href="#contact" 
                                className="plan-button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Started
                                <span className="button-glow"></span>
                            </motion.a>
                            <div className="maintenance-hover-effect"></div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="maintenance-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h3>Need a custom maintenance plan?</h3>
                    <p>We can create a tailored maintenance solution specific to your project's needs and budget.</p>
                    <a href="#contact" className="maintenance-cta-button">
                        <span>Contact Us for Custom Plans</span>
                        <span className="button-glow"></span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Maintenance; 