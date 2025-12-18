import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer" id="footer" itemScope itemType="https://schema.org/WPFooter">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <motion.div 
                            className="footer-logo-container"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img 
                                src="/BMMC BANNER PNG.png" 
                                alt="BMMC Logo" 
                                className="footer-logo-img" 
                                width="150"
                                height="auto"
                                loading="lazy"
                            />
                            <span className="visually-hidden">BMMC</span>
                        </motion.div>
                        <motion.p 
                            className="footer-tagline"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Transforming businesses with intelligent AI solutions
                        </motion.p>
                    </div>
                    
                    <div className="footer-links">
                        <motion.div 
                            className="footer-links-column"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3>Navigation</h3>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#testimonials">Testimonials</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </motion.div>
                        
                        <motion.div 
                            className="footer-links-column"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3>Services</h3>
                            <ul>
                                <li>AI Development</li>
                                <li>Business AI Integration</li>
                                <li>Web Development</li>
                                <li>Mobile Apps</li>
                                <li>UI/UX Design</li>
                            </ul>
                        </motion.div>
                        
                        <motion.div 
                            className="footer-links-column"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3>Contact</h3>
                            <ul>
                                <li>budaquecreations@gmail.com</li>
                                <li>+63 976 292 6882</li>
                                <li>Rodriguez, Rizal, Philippines</li>
                            </ul>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/profile.php?id=61571984564554" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                        
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                <motion.div 
                    className="footer-bottom"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="copyright">
                        © {currentYear} BMMC (Budaqe Multi Media Creation). All rights reserved.
                    </div>
                    <div className="footer-legal">
                        <a href="/privacy">Privacy Policy</a>
                        <span className="separator">|</span>
                        <a href="/terms">Terms of Service</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer; 