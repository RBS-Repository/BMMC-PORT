import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './CaseStudies.css';

const CaseStudies = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

    // Define case studies with detailed metrics
    const caseStudies = [
        {
            id: "beauty-lab-ecommerce",
            title: "E-commerce Platform Launch",
            client: "Beauty Lab Cleanic",
            tags: ["E-commerce", "Brand Launch", "Digital Transformation"],
            image: "/project21.png",
            challenge: "Beauty Lab Cleanic needed to establish their first online presence and transition from a traditional retail model to e-commerce, with no prior digital infrastructure.",
            solution: "We created a comprehensive e-commerce platform from scratch focusing on mobile-first design, intuitive product discovery, and a streamlined checkout process to showcase their Korean beauty products.",
            results: [
                { label: "Online Sales", before: "₱0", after: "₱2.5M/yr", increase: "New Revenue" },
                { label: "Page Load Time", before: "N/A", after: "1.3s", increase: "Fast Start" },
                { label: "Mobile Visitors", before: "0%", after: "62%", increase: "New Channel" },
                { label: "Customer Base", before: "Local", after: "Nationwide", increase: "Expanded" }
            ],
            testimonial: {
                quote: "N/A",
                author: "Alee, Marketing Manager"
            },
            technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Stripe API"],
            showExpectedResults: true,
            color: "var(--primary)" // Primary brand color
        },
        {
            id: "two14-cafe-digital",
            title: "Digital Cafe Experience",
            client: "Two14 Cafe",
            tags: ["Mobile App", "Digital Menu", "Customer Loyalty"],
            image: "/project5.png",
            challenge: "Two14 Cafe needed to modernize their traditional cafe experience with digital ordering, a loyalty program, and improved customer engagement during post-pandemic recovery.",
            solution: "We developed an integrated digital ecosystem including a mobile app with online ordering, digital menu with dynamic pricing, and a customer loyalty program with gamification elements.",
            results: [
                { label: "Order Value", before: "₱180", after: "₱240", increase: "+33%" },
                { label: "Customer Return Rate", before: "22%", after: "48%", increase: "+118%" },
                { label: "Order Processing Time", before: "8 min", after: "3 min", increase: "-62%" },
                { label: "Revenue", before: "₱35K/wk", after: "₱62K/wk", increase: "+77%" }
            ],
            testimonial: {
                quote: "The digital transformation completely revitalized our cafe. Regular customers love the loyalty program, and the streamlined ordering has significantly improved our operations.",
                author: "Marco Diaz, Owner"
            },
            technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Stripe", "QR Technology"],
            showExpectedResults: false,
            color: "var(--primary-dark)" // Primary dark variant
        },
        {
            id: "ai-customer-support",
            title: "Decentralized AI Assistant Platform",
            client: "Himari AI",
            tags: ["Web3", "Decentralized AI", "Blockchain"],
            image: "/project2.png",
            challenge: "Himari AI wanted to create a decentralized alternative to centralized AI chatbots like GPT, with enhanced privacy, user data ownership, and blockchain-based token economics.",
            solution: "We built a web3-native AI assistant platform with decentralized storage, blockchain authentication, token-based incentives, and cutting-edge language models running on distributed infrastructure.",
            results: [
                { label: "User Queries", before: "0/day", after: "500K/day", increase: "Rapid Growth" },
                { label: "Response Time", before: "N/A", after: "0.8s", increase: "Industry Leading" },
                { label: "User Satisfaction", before: "N/A", after: "92%", increase: "High Quality" },
                { label: "Token Value", before: "₱0", after: "₱42M", increase: "Market Success" }
            ],
            testimonial: {
                quote: "BMMC delivered beyond our expectations. Their understanding of both AI and blockchain technologies created a truly decentralized alternative to mainstream AI systems.",
                author: "Alex Chen, CTO"
            },
            technologies: ["Vue.js", "TensorFlow.js", "Ethereum", "IPFS", "Solidity", "WebAssembly"],
            showExpectedResults: false,
            color: "var(--primary-light)" // Primary light variant
        },
        {
            id: "travel-booking-platform",
            title: "Travel Booking Platform Revamp",
            client: "Rodriguez Rizal Travel",
            tags: ["Full-Stack Development", "Payment Integration", "Booking System"],
            image: "/project20.png",
            challenge: "The client's outdated travel booking system was causing booking errors, payment issues, and limiting business growth.",
            solution: "We built a new end-to-end booking platform with real-time availability, secure payment processing, and personalized recommendations.",
            results: [
                { label: "Booking Completion", before: "53%", after: "87%", increase: "+64%" },
                { label: "Revenue per User", before: "₱13K", after: "₱21K", increase: "+62%" },
                { label: "Repeat Bookings", before: "22%", after: "47%", increase: "+114%" },
                { label: "System Errors", before: "15/day", after: "0.2/day", increase: "-99%" }
            ],
            testimonial: {
                quote: "Since implementing the new system, we've expanded to three new locations. The platform scales with us seamlessly.",
                author: "Maria Rodriguez, CEO"
            },
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS S3"],
            showExpectedResults: false,
            color: "var(--secondary)" // Secondary brand color
        }
    ];

    const handleTabChange = (index) => {
        if (isAnimating || index === activeTab) return;
        setIsAnimating(true);
        setActiveTab(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const nextCase = () => {
        if (isAnimating) return;
        const nextIndex = (activeTab + 1) % caseStudies.length;
        handleTabChange(nextIndex);
    };

    const prevCase = () => {
        if (isAnimating) return;
        const prevIndex = (activeTab - 1 + caseStudies.length) % caseStudies.length;
        handleTabChange(prevIndex);
    };

    // Add structured data for SEO
    useEffect(() => {
        // Create structured data for case studies
        const caseStudiesSchema = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": caseStudies.map((study, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "Article",
                    "headline": study.title,
                    "description": `${study.challenge} ${study.solution}`,
                    "image": study.image,
                    "author": {
                        "@type": "Organization",
                        "name": "Budaque Multi Media Creations"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "BMMC",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "/favicon.png"
                        }
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://bmmc.ph/case-studies/${study.id}`
                    },
                    "about": {
                        "@type": "Thing",
                        "name": study.client
                    },
                    "keywords": study.tags.join(", ")
                }
            }))
        };

        // Add structured data to document head
        let script = document.getElementById('case-studies-schema');
        if (!script) {
            script = document.createElement('script');
            script.id = 'case-studies-schema';
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(caseStudiesSchema);

        // Clean up when component unmounts
        return () => {
            const scriptToRemove = document.getElementById('case-studies-schema');
            if (scriptToRemove) document.head.removeChild(scriptToRemove);
        };
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const activeStudy = caseStudies[activeTab];

    return (
        <section className="case-studies-section" id="case-studies" ref={ref} itemScope itemType="https://schema.org/CollectionPage">
            <div className="background-gradient"></div>
            <div className="background-grid"></div>
            
            <motion.div 
                className="case-studies-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.div 
                    className="case-studies-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 itemProp="name">Case Studies</h2>
                    <div className="section-line"></div>
                    <p className="section-subtitle" itemProp="description">Real Results for Real Businesses</p>
                </motion.div>

                <div className="case-navigation">
                    <button 
                        className="nav-arrow prev"
                        onClick={prevCase}
                        disabled={isAnimating}
                        aria-label="Previous case study"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    
                    <div className="case-studies-tabs" role="tablist" aria-label="Case Studies Tabs">
                        {caseStudies.map((study, index) => (
                            <button 
                                key={index}
                                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                                onClick={() => handleTabChange(index)}
                                id={`tab-${index}`}
                                role="tab"
                                aria-selected={activeTab === index}
                                aria-controls={`panel-${index}`}
                                disabled={isAnimating}
                                style={{
                                    '--accent-color': study.color,
                                    '--active-opacity': activeTab === index ? 1 : 0.6
                                }}
                            >
                                <span className="client-name">{study.client}</span>
                                <span className="case-indicator" style={{ backgroundColor: study.color }}></span>
                            </button>
                        ))}
                    </div>
                    
                    <button 
                        className="nav-arrow next"
                        onClick={nextCase}
                        disabled={isAnimating}
                        aria-label="Next case study"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeTab}
                        className="case-study-content"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        role="tabpanel"
                        id={`panel-${activeTab}`}
                        aria-labelledby={`tab-${activeTab}`}
                        itemScope
                        itemType="https://schema.org/Article"
                        style={{
                            '--case-accent': activeStudy.color
                        }}
                    >
                        <meta itemProp="headline" content={activeStudy.title} />
                        <meta itemProp="image" content={activeStudy.image} />
                        
                        <div className="case-study-showcase">
                            <motion.div className="case-study-image-wrapper" variants={itemVariants}>
                                <div className="image-decoration" style={{ backgroundColor: activeStudy.color }}></div>
                                <img 
                                    src={activeStudy.image} 
                                    alt={activeStudy.title} 
                                    itemProp="image" 
                                    loading="lazy" 
                                    className="case-study-image"
                                />
                            </motion.div>
                            
                            <motion.div className="case-study-intro" variants={itemVariants}>
                                <div className="case-intro-content">
                                    <h3 itemProp="name">{activeStudy.title}</h3>
                                    <div className="case-study-tags">
                                        {activeStudy.tags.map((tag, idx) => (
                                            <span 
                                                key={idx} 
                                                className="case-tag" 
                                                itemProp="keywords"
                                                style={{ backgroundColor: `${activeStudy.color}22` }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="case-info-blocks">
                                        <div className="case-challenge">
                                            <h4>The Challenge</h4>
                                            <p itemProp="description">{activeStudy.challenge}</p>
                                        </div>
                                        
                                        <div className="case-solution">
                                            <h4>Our Solution</h4>
                                            <p itemProp="description">{activeStudy.solution}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        
                        <motion.div className="case-study-details-grid" variants={itemVariants}>
                            <div className="case-study-results-container">
                                <h4 className="results-heading">
                                    {activeStudy.showExpectedResults ? "Expected Results" : "The Results"}
                                </h4>
                                
                                <div className="results-timeline">
                                    {activeStudy.results.map((result, idx) => (
                                        <motion.div 
                                            key={idx} 
                                            className="timeline-item"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + (idx * 0.1) }}
                                        >
                                            <div className="timeline-connector" style={{ backgroundColor: activeStudy.color }}></div>
                                            
                                            <div className="timeline-content">
                                                <h5>{result.label}</h5>
                                                
                                                <div className="timeline-comparison">
                                                    <div className="timeline-before">
                                                        <span className="result-value">{result.before}</span>
                                                        <span className="result-label">Before</span>
                                                    </div>
                                                    
                                                    <div className="timeline-progress">
                                                        <div 
                                                            className="progress-indicator" 
                                                            style={{ backgroundColor: activeStudy.color }}
                                                        ></div>
                                                        <div className="progress-arrow">→</div>
                                                    </div>
                                                    
                                                    <div className="timeline-after">
                                                        <span className="result-value">{result.after}</span>
                                                        <span className="result-label">After</span>
                                                    </div>
                                                </div>
                                                
                                                <div 
                                                    className="timeline-improvement"
                                                    style={{ backgroundColor: `${activeStudy.color}22`, color: activeStudy.color }}
                                                >
                                                    {result.increase}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="case-study-sidebar">
                                <motion.div 
                                    className="case-study-tech-stack"
                                    variants={itemVariants}
                                >
                                    <h4>Technologies Used</h4>
                                    <div className="tech-stack" itemProp="keywords">
                                        {activeStudy.technologies.map((tech, idx) => (
                                            <span 
                                                key={idx} 
                                                className="tech-item"
                                                style={{ 
                                                    border: `1px solid ${activeStudy.color}55`,
                                                    backgroundColor: `${activeStudy.color}11`
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    className="case-study-testimonial" 
                                    variants={itemVariants} 
                                    itemProp="review" 
                                    itemScope 
                                    itemType="https://schema.org/Review"
                                    style={{ borderLeft: `3px solid ${activeStudy.color}` }}
                                >
                                    <div className="quote-mark" aria-hidden="true" style={{ color: activeStudy.color }}>❝</div>
                                    <p itemProp="reviewBody">{activeStudy.testimonial.quote}</p>
                                    <cite itemProp="author">— {activeStudy.testimonial.author}</cite>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="case-study-cta"
                            variants={itemVariants}
                        >
                            <a 
                                href="#contact" 
                                className="cta-button"
                                style={{ backgroundColor: activeStudy.color }}
                            >
                                Start Your Project
                            </a>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default CaseStudies; 