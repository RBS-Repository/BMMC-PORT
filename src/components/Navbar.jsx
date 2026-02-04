import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100, opacity: 0, x: "-50%" }}
                animate={{ y: 0, opacity: 1, x: "-50%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="navbar-content">
                    {/* Logo Area */}
                    <div className="navbar-logo">
                        <span className="logo-text">BMMC</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="desktop-links">
                        <Link to="/" className="nav-link">Home</Link>
                        {isHome ? (
                            <>
                                <a href="#projects" className="nav-link">Work</a>
                                <a href="#about" className="nav-link">About</a>
                                <a href="#team" className="nav-link">Team</a>
                                <a href="#contact" className="nav-link">Contact</a>
                            </>
                        ) : (
                            <>
                                <Link to="/#projects" className="nav-link">Work</Link>
                                <Link to="/#about" className="nav-link">About</Link>
                                <Link to="/#team" className="nav-link">Team</Link>
                                <Link to="/#contact" className="nav-link">Contact</Link>
                            </>
                        )}
                    </div>

                    {/* CTA Button */}
                    <div className="navbar-cta">
                        <button
                            className="start-project-btn"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Let's Talk
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className={`hamburger ${isOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="mobile-menu-content">
                            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                            {isHome ? (
                                <>
                                    <a href="#projects" onClick={() => setIsOpen(false)}>Work</a>
                                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                                    <a href="#team" onClick={() => setIsOpen(false)}>Team</a>
                                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                                </>
                            ) : (
                                <>
                                    <Link to="/#projects" onClick={() => setIsOpen(false)}>Work</Link>
                                    <Link to="/#about" onClick={() => setIsOpen(false)}>About</Link>
                                    <Link to="/#team" onClick={() => setIsOpen(false)}>Team</Link>
                                    <Link to="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                                </>
                            )}
                            <button
                                className="mobile-cta-btn"
                                onClick={() => {
                                    setIsOpen(false);
                                    setIsModalOpen(true);
                                }}
                            >
                                Let's Talk
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Global Contact Modal */}
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default Navbar;