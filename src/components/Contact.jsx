import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CopyButton from './CopyButton';
import Swal from 'sweetalert2';
import './Contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0,
            y: 20
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const services = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Digital Strategy",
        "Cloud Solutions",
        "Custom Software Development"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch("https://formspree.io/f/mnnqoeel", {
                method: "POST",
                body: new FormData(e.target),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent successfully!',
                    icon: 'success',
                    confirmButtonColor: 'var(--primary)',
                    background: 'var(--background)',
                    color: 'var(--text)',
                    position: 'center',
                    showConfirmButton: true,
                    confirmButtonText: 'OK',
                    timer: 3000,
                    timerProgressBar: true,
                    customClass: {
                        popup: 'swal-custom-popup',
                        confirmButton: 'swal-custom-confirm'
                    }
                });
                e.target.reset();
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to send message. Please try again.',
                    icon: 'error',
                    confirmButtonColor: 'var(--primary)',
                    background: 'var(--background)',
                    color: 'var(--text)',
                    position: 'center'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonColor: 'var(--primary)',
                background: 'var(--background)',
                color: 'var(--text)',
                position: 'center'
            });
        }
        
        setIsSubmitting(false);
    };

    return (
        <section className="contact-section" id="contact" itemScope itemType="https://schema.org/ContactPage">
            <div className="contact-video-background" aria-hidden="true">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="contact-background-video"
                    loading="lazy"
                >
                    <source src="/contact.mp4" type="video/mp4" />
                </video>
                <div className="contact-video-overlay"></div>
            </div>
            
            <div className="contact-overlay" aria-hidden="true"></div>
            <div className="contact-blur-overlay" aria-hidden="true"></div>

            <div className="contact-container">
                <motion.div 
                    className="contact-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div 
                        className="contact-info"
                        variants={itemVariants}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            itemProp="name"
                        >
                            Get In Touch
                        </motion.h2>
                        <div className="section-line" aria-hidden="true"></div>
                        <p className="section-subtitle" itemProp="description">Let's Create Something Amazing Together</p>
                        
                        <motion.div 
                            className="contact-details"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            itemScope 
                            itemType="https://schema.org/Organization"
                        >
                            <div itemProp="name" className="hidden-seo">Budaque Multi Media Creations</div>
                            <div itemProp="alternateName" className="hidden-seo">BMMC</div>
                            
                            <motion.div 
                                className="contact-item"
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                                itemProp="address" 
                                itemScope 
                                itemType="https://schema.org/PostalAddress"
                            >
                                <motion.div 
                                    className="contact-icon"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    aria-hidden="true"
                                >
                                    📍
                                </motion.div>
                                <div>
                               
                                    <CopyButton 
                                        text="Montalban Town Center, Rodriguez, 1860 Rizal" 
                                        type="Location"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="contact-item"
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                            >
                                <motion.div 
                                    className="contact-icon"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    aria-hidden="true"
                                >
                                    📧
                                </motion.div>
                                <div>
                                    <h3>Email</h3>
                                 
                                    <CopyButton 
                                        text="budaquecreations@gmail.com" 
                                        type="Email"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="contact-item"
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                            >
                                <motion.div 
                                    className="contact-icon"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    aria-hidden="true"
                                >
                                    📱
                                </motion.div>
                                <div>
                                    <h3>Phone</h3>
                                   
                                    <CopyButton  color="var(--primary)"
                                        text="+63 976 292 6882" 
                                        type="Phone"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="contact-form-container"
                        variants={itemVariants}
                    >
                        <motion.form 
                            onSubmit={handleSubmit} 
                            className="contact-form"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            itemScope 
                            itemType="https://schema.org/ContactForm"
                            role="form"
                            aria-label="Contact Form"
                        >
                            <motion.div 
                                className="form-group"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="name" className="sr-only">Your Name</label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    aria-required="true"
                                    itemProp="name"
                                />
                            </motion.div>
                            
                            <motion.div 
                                className="form-group"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <label htmlFor="email" className="sr-only">Your Email</label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    aria-required="true"
                                    itemProp="email"
                                />
                            </motion.div>
                            
                            <motion.div 
                                className="form-group"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <label htmlFor="service" className="sr-only">Select Service</label>
                                <select 
                                    name="service" 
                                    id="service" 
                                    required 
                                    aria-required="true"
                                    itemProp="serviceType"
                                >
                                    <option value="">Select Service</option>
                                    {services.map((service, index) => (
                                        <option key={index} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                            </motion.div>

                            <motion.div 
                                className="form-group"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <label htmlFor="message" className="sr-only">Your Message</label>
                                <textarea 
                                    name="message" 
                                    id="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    required
                                    aria-required="true"
                                    itemProp="message"
                                ></textarea>
                            </motion.div>

                            <motion.button 
                                type="submit" 
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={isSubmitting ? "Sending your message" : "Send Message"}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="loader"></span>
                                        <span>Sending...</span>
                                    </>
                                ) : "Send Message"}
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </motion.div>
            </div>
            
            <div className="hidden-seo">
                <p>Contact Budaque Multi Media Creations (BMMC) for professional web development, mobile app development, UI/UX design services in Rodriguez, Rizal, Philippines.</p>
                <p>Get in touch with BMMC's team of experts for your next digital project. We offer custom web applications, e-commerce solutions, and responsive website development.</p>
                <p>Email us at budaquecreations@gmail.com or call +63 976 292 6882 for a free consultation.</p>
            </div>
        </section>
    );
};

export default Contact; 