import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import './Hero.css';

const Hero = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSplineVisible, setIsSplineVisible] = useState(false);
    const [loadingScreenFadeOut, setLoadingScreenFadeOut] = useState(false);
    
    const handleSplineLoad = () => {
        // First fade out the loading screen
        setLoadingScreenFadeOut(true);
        
        // After the loading screen fades out, remove it and start fading in the Spline
        setTimeout(() => {
            setIsLoading(false);
            // Then start fading in the Spline with a short delay
            setTimeout(() => {
                setIsSplineVisible(true);
            }, 100);
        }, 600); // Match this with the CSS transition time
    };
    
    return (
        <section className="hero-container" id="home" itemScope itemType="https://schema.org/WPHeader">
            <div className={`spline-background ${isSplineVisible ? 'fade-in' : ''}`} aria-hidden="true">
                <Spline 
                    scene="https://prod.spline.design/MF1dSuDJV1pLzFTQ/scene.splinecode"
                    onLoad={handleSplineLoad}
                />
                {isLoading && (
                    <div className={`loading-screen ${loadingScreenFadeOut ? 'fade-out' : ''}`}>
                        <div className="loader"></div>
                        <p>Loading 3D Scene...</p>
                    </div>
                )}
                <div className="spline-overlay"></div>
            </div>

            <div className="blur-overlay" aria-hidden="true"></div>

            <div className="hero-content">
                <div className="hero-main">
                    <div className="hero-text-container">
                        <div className="hero-heading">
                            <motion.h1 
                                style={{fontSize: '100px'}}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                itemProp="headline"
                            >
                                <span className="gradient-text">BMMC</span>
                            </motion.h1>
                            <div className="title-line" aria-hidden="true"></div>
                        </div>
                        <motion.h2 
                            style={{textAlign: 'center'}}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            itemProp="alternativeHeadline"
                        >
                            Budaqe Multi Media Creation
                        </motion.h2>
                        <div className="hero-tags" role="list" aria-label="Our specialties">
                            <span className="tag" role="listitem">AI Solutions</span>
                            <span className="dot" aria-hidden="true">•</span>
                            <span className="tag" role="listitem">Web Development</span>
                            <span className="dot" aria-hidden="true">•</span>
                            <span className="tag" role="listitem">Intelligent Design</span>
                        </div>
                    </div>

                    <div className="hero-description">
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            itemProp="description"
                        >
                            Transforming businesses through AI-powered digital solutions. We create intelligent experiences that harness the power of artificial intelligence and cutting-edge web technology.
                        </motion.p>
                    </div>

                    <div className="cta-wrapper">
                        <motion.a 
                            href="#projects"
                            className="cta-button primary"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            aria-label="View our project portfolio"
                        >
                            <span>View Our Work</span>
                            <span className="button-glow" aria-hidden="true"></span>
                        </motion.a>
                        <motion.a 
                            href="#about"
                            className="cta-button secondary"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            aria-label="Learn more about BMMC"
                        >
                            <span>About Us</span>
                            <span className="button-glow" aria-hidden="true"></span>
                        </motion.a>
                    </div>
                </div>
            </div>

            <div className="hero-stats" itemScope itemType="https://schema.org/Organization">
                <div className="stat-item">
                    <span className="stat-number" itemProp="numberOfItems">50+</span>
                    <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number" itemProp="numberOfEmployees">30+</span>
                    <span className="stat-label">Clients</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number" itemProp="foundingDate" content="2018">5+</span>
                    <span className="stat-label">Years</span>
                </div>
            </div>
            
            <div className="hidden-seo">
                <h2>AI Development & Digital Design Agency - BMMC (Budaque Multi Media Creation)</h2>
                <p>BMMC is a premier AI development and digital design agency based in Rodriguez, Rizal, Philippines. We specialize in creating intelligent digital solutions, AI-powered applications, custom chatbots, smart websites, and transformative AI experiences.</p>
                <p>Our services include AI application development, large language model integration, business AI automation, responsive web design, e-commerce development, custom web applications, UI/UX design, mobile app development, and AI-driven digital marketing solutions.</p>
                <p>With over 5 years of experience, we've successfully integrated AI into 50+ projects for 30+ satisfied clients across various industries including retail, healthcare, education, and technology.</p>
                <p>Contact us today at budaquecreations@gmail.com or +63 976 292 6882 to discuss how our AI expertise can transform your business and digital presence.</p>
            </div>
        </section>
    );
};

export default Hero; 