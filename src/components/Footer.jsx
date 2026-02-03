import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-premium">
            <div className="footer-main-container">
                <div className="footer-cta-block">
                    <h2 className="footer-big-title">READY TO START?</h2>
                    <Link to="/#contact" className="footer-contact-link">Get in touch — Let's build something great.</Link>
                </div>

                <div className="footer-nav-grid">
                    <div className="footer-brand-side">
                        <div className="footer-brand-logo">BMMC</div>
                        <p className="footer-about">We are a boutique creative studio dedicated to crafting high-performance digital experiences for forward-thinking brands.</p>
                        <div className="footer-social">
                            <a href="#">FB</a>
                            <a href="#">IG</a>
                            <a href="#">LI</a>
                        </div>
                    </div>

                    <div className="footer-nav-column">
                        <span className="nav-col-title">Navigation</span>
                        <Link to="/">Home</Link>
                        <Link to="/all-projects">Projects</Link>
                        <Link to="/#about">About</Link>
                        <Link to="/#contact">Contact</Link>
                    </div>

                    <div className="footer-nav-column">
                        <span className="nav-col-title">Services</span>
                        <a href="#">Web Design</a>
                        <a href="#">Development</a>
                        <a href="#">AI Integration</a>
                        <a href="#">Branding</a>
                    </div>

                    <div className="footer-nav-column">
                        <span className="nav-col-title">Inquiries</span>
                        <p>budaquecreations@gmail.com</p>
                        <p>+63 976 292 6882</p>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <div className="copyright">© 2024 Budaqe Multi Media Creation. All rights reserved.</div>
                    <div className="footer-legal">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;