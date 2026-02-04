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

const RevealOnScroll = ({ children }) => {
    // Disable reveal transformation on mobile for better scroll stability
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    return (
        <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 30 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ willChange: "opacity" }}
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
        // Only initialize Lenis on non-touch devices for better mobile performance
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (isTouchDevice) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            infinite: false,
            smoothWheel: true,
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
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, [location.pathname]); // Re-sync on path change to ensure state stability

    // Reset scroll on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

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