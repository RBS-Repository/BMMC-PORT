import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import './Contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                    text: 'Your message has been sent successfully!',
                    icon: 'success',
                    background: '#0a0a0a',
                    color: '#fff',
                    confirmButtonColor: '#fff',
                    customClass: { confirmButton: 'swal-white-btn' }
                });
                e.target.reset();
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong.',
                icon: 'error',
                background: '#0a0a0a',
                color: '#fff'
            });
        }
        setIsSubmitting(false);
    };

    return (
        <section className="contact-premium" id="contact">
            <div className="contact-grid-container">
                <div className="contact-bento">
                    {/* Header Block */}
                    <div className="bento-item header-block">
                        <span className="bento-label">Contact / 04</span>
                        <h2 className="bento-title">Let’s craft <br /> something <br /> legendary.</h2>
                    </div>

                    {/* Email Block */}
                    <div className="bento-item info-block email">
                        <span className="info-label">Email us</span>
                        <a href="mailto:budaquecreations@gmail.com" className="info-value">budaquecreations@googlemail.com</a>
                    </div>

                    {/* Phone Block */}
                    <div className="bento-item info-block phone">
                        <span className="info-label">Call us</span>
                        <a href="tel:+639762926882" className="info-value">+63 976 292 6882</a>
                    </div>

                    {/* Form Block */}
                    <div className="bento-item form-block">
                        <form onSubmit={handleSubmit} className="premium-form">
                            <div className="input-group">
                                <input type="text" name="name" placeholder="Name" required />
                                <input type="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="input-group">
                                <select name="service" required>
                                    <option value="">Select Service</option>
                                    <option value="Web">Web Development</option>
                                    <option value="Mobile">Mobile Apps</option>
                                    <option value="Design">UI/UX Design</option>
                                    <option value="AI">AI Solutions</option>
                                </select>
                            </div>
                            <textarea name="message" placeholder="Project details..." rows="6" required></textarea>
                            <button type="submit" disabled={isSubmitting} className="submit-p-btn">
                                {isSubmitting ? "Sending..." : "Send Proposal"}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Social Block */}
                    <div className="bento-item social-block">
                        <span className="info-label">Follow</span>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank">Facebook</a>
                            <a href="https://instagram.com" target="_blank">Instagram</a>
                            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                        </div>
                    </div>

                    {/* Location Block */}
                    <div className="bento-item location-block">
                        <span className="info-label">Location</span>
                        <p className="info-value">Rodriguez, Rizal, PH</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;