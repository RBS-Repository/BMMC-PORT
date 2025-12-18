import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import HowWeWork from './components/HowWeWork';
import FAQ from './components/FAQ';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import VideoIntro from './components/VideoIntro';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import Loader from './components/Loader';
import './App.css';
import SplineScene from './components/SplineScene';
import Team from './components/Team';
import LiveChat from './components/LiveChat';
import SkillsShowcase from './components/SkillsShowcase';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import AIServices from './components/AIServices';
import Maintenance from './components/Maintenance';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            // Ensure the loader stays visible for exactly 2 seconds
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2000); // Changed to 2000ms (2 seconds)

            return () => clearTimeout(timer);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="relative">
                    <div className="app-container">
                        <Navbar />
                        <Hero />
                        <Marquee />
                        <Projects />
                        <AIServices />
                        <Maintenance />
                        <Team />
                        <About />
                     
                        <SkillsShowcase />
                        <WhatWeDo />
                        <HowWeWork />
                        <VideoIntro />
                   
                        <CaseStudies />
                        <Testimonials />
                        <FAQ />
                        <Contact />
                        <Footer />
                        <LiveChat />
                    </div>
                </div>
            )}
        </>
    );
};

export default App;