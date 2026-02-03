import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
    return (
        <div className="premium-loader">
            <div className="loader-wrap">
                <div className="loader-brand-reveal">
                    <motion.div
                        className="reveal-line"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <div className="reveal-text-mask">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            BMMC
                        </motion.h1>
                    </div>
                    <div className="reveal-sub-mask">
                        <motion.p
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        >
                            DIGITAL AGENCY © 24 — 26
                        </motion.p>
                    </div>
                </div>

                <div className="loader-bottom">
                    <div className="loading-counter">
                        <motion.div
                            className="counter-bar"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2.5, ease: "linear" }}
                        />
                    </div>
                    <div className="loading-info">
                        <span>INITIATING SYSTEM</span>
                        <span>0% — 100%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;