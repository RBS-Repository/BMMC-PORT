import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import HowWeWork from './components/HowWeWork';
import FAQ from './components/FAQ';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';
import Testimonials from './components/Testimonials';
import VideoIntro from './components/VideoIntro';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import Loader from './components/Loader';
import './App.css';

import Team from './components/Team';
import LiveChat from './components/LiveChat';
import SkillsShowcase from './components/SkillsShowcase';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import AIServices from './components/AIServices';
import Maintenance from './components/Maintenance';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { Routes, Route, useLocation } from 'react-router-dom';

// Optimized Reveal Component
const RevealOnScroll = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }} // Hardware acceleration hint
        >
            {children}
        </motion.div>
    );
};

const Home = () => (
    <>
        <RevealOnScroll><Hero /></RevealOnScroll>
        <RevealOnScroll><Marquee /></RevealOnScroll>
        <RevealOnScroll><Projects /></RevealOnScroll>
        <RevealOnScroll><AIServices /></RevealOnScroll>
        <RevealOnScroll><Maintenance /></RevealOnScroll>
        <RevealOnScroll><Team /></RevealOnScroll>
        <RevealOnScroll><About /></RevealOnScroll>

        <RevealOnScroll><SkillsShowcase /></RevealOnScroll>
        <RevealOnScroll><WhatWeDo /></RevealOnScroll>
        <RevealOnScroll><HowWeWork /></RevealOnScroll>
        <RevealOnScroll><VideoIntro /></RevealOnScroll>

        <RevealOnScroll><CaseStudies /></RevealOnScroll>
        <RevealOnScroll><Testimonials /></RevealOnScroll>
        <RevealOnScroll><FAQ /></RevealOnScroll>
        <RevealOnScroll><Contact /></RevealOnScroll>
    </>
);

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        // Initialize Lenis Smooth Scroll
        const lenis = new Lenis({
            duration: 1, // Shorter duration for snappier feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 1.5,
            infinite: false,
            smoothWheel: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        const handleLoad = () => {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2000);
            return () => clearTimeout(timer);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="relative">
                    <div className="app-container">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/all-projects" element={<AllProjects />} />
                        </Routes>
                        <RevealOnScroll><Footer /></RevealOnScroll>
                        <LiveChat />
                    </div>
                </div>
            )}
        </>
    );
};

export default App;