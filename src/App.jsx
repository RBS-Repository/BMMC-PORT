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
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';
// Import official React Lenis wrapper
import { ReactLenis, useLenis } from 'lenis/react';
import { Routes, Route, useLocation } from 'react-router-dom';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-[9999]"
            style={{ scaleX }}
        />
    );
};

const RevealOnScroll = ({ children }) => {
    const targetRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    // Cinematic transforms
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
    const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [5, 0, 0, -5]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

    // Spring smoothed values
    const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
    const smoothRotate = useSpring(rotateX, { stiffness: 100, damping: 30 });

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    if (isMobile) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                style={{ width: "100%" }}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <div ref={targetRef} style={{ perspective: "1200px", width: "100%", overflow: "visible" }}>
            <motion.div
                style={{
                    opacity,
                    scale: smoothScale,
                    y: smoothY,
                    rotateX: smoothRotate,
                    transformOrigin: "center center",
                    willChange: "transform, opacity",
                    width: "100%"
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

const Home = () => (
    <>
        <ScrollProgress />
        <RevealOnScroll><Hero /></RevealOnScroll>
        <RevealOnScroll><Marquee /></RevealOnScroll>
        {/* Projects section preserved with its unique horizontal animation */}
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

    const lenis = useLenis();

    // Reset scroll on route change (only if no hash)
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        } else {
            // Give a small timeout for content to render if navigating from another page
            setTimeout(() => {
                const element = document.querySelector(location.hash);
                if (element && lenis) {
                    lenis.scrollTo(element);
                }
            }, 100);
        }
    }, [location.pathname, location.hash, lenis]);

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