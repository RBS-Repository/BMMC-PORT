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
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// Import official React Lenis wrapper
import { ReactLenis } from 'lenis/react';
import { Routes, Route, useLocation } from 'react-router-dom';

const RevealOnScroll = ({ children }) => {
    const targetRef = React.useRef(null);
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    // Desktop unique animations: Dynamic scale, opacity and vertical parallax
    const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.93, 1, 1, 0.93]);
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [50, 0, 0, -50]);

    // Use spring for smoother interpolation
    const smoothScale = useSpring(scale, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

    if (isMobile) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ width: "100%" }}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            ref={targetRef}
            style={{
                scale: smoothScale,
                opacity,
                y: smoothY,
                willChange: "transform, opacity",
                width: "100%"
            }}
        >
            {children}
        </motion.div>
    );
};

const Home = () => (
    <>
        <RevealOnScroll><Hero /></RevealOnScroll>
        <RevealOnScroll><Marquee /></RevealOnScroll>
        {/* Projects section explicitly not wrapped in RevealOnScroll to preserve its horizontal scroll animation */}
        <Projects />
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
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, [location.pathname]);

    // Reset scroll on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, touchMultiplier: 2 }}>
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
        </ReactLenis>
    );
};

export default App;