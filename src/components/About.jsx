import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section className="about-section" id="about" itemScope itemType="https://schema.org/AboutPage">
  

            <div className="about-overlay" aria-hidden="true"></div>
            <div className="about-container">
                <motion.div 
                    className="about-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 itemProp="name">About BMMC</h2>
                    <div className="section-line" aria-hidden="true"></div>
                </motion.div>

                <div className="about-content">
                    <motion.div 
                        className="about-text-container"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="about-text">
                            <h3>Who We Are</h3>
                            <p itemProp="description">We are BMMC - Budaque Multi Media Creation, where innovation meets imagination. Simply press the arrow to explore our digital universe.</p>
                        </div>
                    </motion.div>

                    <div className="services-grid-container">
                        <div className="services-grid" itemScope itemType="https://schema.org/ItemList">
                            <meta itemProp="itemListOrder" content="Unordered" />
                            <meta itemProp="numberOfItems" content="4" />
                            {[
                                {
                                    icon: "🎨",
                                    title: "Creative Design",
                                    text: "Pushing boundaries with cutting-edge UI/UX and immersive digital experiences."
                                },
                                {
                                    icon: "💡",
                                    title: "Innovation Lab",
                                    text: "Transforming \"useless but happy\" ideas into captivating digital solutions."
                                },
                                {
                                    icon: "🚀",
                                    title: "Future Tech",
                                    text: "Crafting tomorrow's digital experiences with today's technology."
                                },
                                {
                                    icon: "🔮",
                                    title: "Digital Art",
                                    text: "Where functionality meets aesthetic in perfect digital harmony."
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="service-card"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.5,
                                        delay: 0.3 + (index * 0.1)
                                    }}
                                    itemScope 
                                    itemType="https://schema.org/Service"
                                    itemProp="itemListElement"
                                >
                                    <meta itemProp="position" content={index + 1} />
                                    <div className="service-icon" aria-hidden="true">{service.icon}</div>
                                    <h4 itemProp="name">{service.title}</h4>
                                    <p itemProp="description">{service.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="hidden-seo">
                <h3>About Budaque Multi Media Creations (BMMC)</h3>
                <p>BMMC is a premier digital agency specializing in web development, mobile applications, and creative design solutions based in Rodriguez, Rizal, Philippines.</p>
                <p>At BMMC, we combine technical expertise with artistic vision to deliver cutting-edge digital experiences that help businesses thrive in the digital landscape.</p>
                <p>Our team of skilled developers and designers are passionate about creating innovative solutions that solve real-world problems while pushing the boundaries of what's possible in digital media.</p>
                <p>Services we offer include web design and development, UI/UX design, mobile app development, digital art creation, and technology innovation solutions.</p>
            </div>
         
        </section>
    );
};

export default About; 