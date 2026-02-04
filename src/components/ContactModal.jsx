import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Prevent scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/mnnqoeel", {
                method: "POST",
                body: new FormData(e.target),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your proposal has been received. We will contact you soon.',
                    icon: 'success',
                    background: '#0a0a0a',
                    color: '#fff',
                    confirmButtonColor: '#fff',
                    customClass: { confirmButton: 'swal-white-btn' }
                });
                e.target.reset();
                onClose();
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                background: '#0a0a0a',
                color: '#fff'
            });
        }
        setIsSubmitting(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="contact-modal-content"
                        initial={{ y: 50, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close-btn" onClick={onClose}>×</button>

                        <div className="modal-grid">
                            <div className="modal-sidebar">
                                <div className="sidebar-top">
                                    <span className="sidebar-label">Proposal / 24</span>
                                    <h2>Start a <br /> Project</h2>
                                </div>
                                <div className="sidebar-bottom">
                                    <p>Tell us about your mission. <br /> We'll help you reach it.</p>
                                    <div className="sidebar-contact">
                                        <span>budaquecreations@googlemail.com</span>
                                        <span>+63 976 292 6882</span>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-form-area">
                                <form onSubmit={handleSubmit} className="modal-form">
                                    <div className="modal-input-group">
                                        <div className="field-box">
                                            <label>Full Name</label>
                                            <input type="text" name="name" placeholder="John Doe" required />
                                        </div>
                                        <div className="field-box">
                                            <label>Email Address</label>
                                            <input type="email" name="email" placeholder="john@example.com" required />
                                        </div>
                                    </div>

                                    <div className="field-box">
                                        <label>Service Category</label>
                                        <select name="service" required>
                                            <option value="">Select a service</option>
                                            <option value="Web">Web Development</option>
                                            <option value="Mobile">Mobile Experience</option>
                                            <option value="Design">UI/UX Strategy</option>
                                            <option value="AI">AI Implementation</option>
                                        </select>
                                    </div>

                                    <div className="field-box">
                                        <label>Project Brief</label>
                                        <textarea name="message" placeholder="Describe your vision..." rows="5" required></textarea>
                                    </div>

                                    <button type="submit" className="modal-submit-btn" disabled={isSubmitting}>
                                        {isSubmitting ? "TRANSMITTING..." : "INITIATE PROJECT"}
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
