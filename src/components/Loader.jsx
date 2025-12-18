import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
    // Add text animation for brand letters
    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + (i * 0.1),
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    // Brand text to animate letter by letter
    const brandText = "BMMC";

    return (
        <div className="loader-container">
            <div className="loader-content">
                {/* Particle background */}
                <div className="loader-particles"></div>
                
                {/* Logo animation */}
                <motion.div 
                    className="loader-logo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        duration: 0.8, 
                        ease: "easeOut" 
                    }}
                >
                    {/* Animated circles */}
                    <div className="logo-circles">
                        <motion.div 
                            className="circle circle-1"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 0.2,
                                duration: 0.8, 
                                ease: "easeOut" 
                            }}
                        ></motion.div>
                        <motion.div 
                            className="circle circle-2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 0.4,
                                duration: 0.8, 
                                ease: "easeOut" 
                            }}
                        ></motion.div>
                        <motion.div 
                            className="circle circle-3"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 0.6,
                                duration: 0.8, 
                                ease: "easeOut" 
                            }}
                        ></motion.div>
                    </div>
                    
                    {/* Animated brand text */}
                    <div className="logo-text">
                        {brandText.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                custom={index}
                                variants={letterVariants}
                                initial="hidden"
                                animate="visible"
                                className="logo-letter"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
                
                {/* Progress bar */}
                <div className="loader-progress-container">
                    <motion.div 
                        className="loader-progress-bar"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ 
                            duration: 2,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div 
                        className="loader-status"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Loading Experience
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Loader; 