import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);
    const projectsPerPage = 6; // Show 6 projects initially (2 rows of 3)
    const [activeIndex, setActiveIndex] = useState(null);
    
    // Effect for structured data injection
    useEffect(() => {
        // Create Schema.org ProjectCollection structured data
        const projectsStructuredData = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": projects.map((project, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "CreativeWork",
                    "name": project.title,
                    "description": project.description,
                    "image": project.image,
                    "url": project.link,
                    "keywords": project.tech.join(", "),
                    "creator": {
                        "@type": "Organization",
                        "name": "Budaque Multi Media Creations",
                        "alternateName": "BMMC"
                    },
                    "genre": project.category,
                    "datePublished": project.dateAdded
                }
            }))
        };

        // Add or update structured data script tag
        let script = document.getElementById('projects-structured-data');
        if (!script) {
            script = document.createElement('script');
            script.id = 'projects-structured-data';
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(projectsStructuredData);

        // Clean up when component unmounts
        return () => {
            const scriptToRemove = document.getElementById('projects-structured-data');
            if (scriptToRemove) document.head.removeChild(scriptToRemove);
        };
    }, [showAll]); // Re-run when showAll changes to update structure with current visible projects

    const projects = [
        {
            title: "Jasmine AI Beta",
            description: "Jasmine AI is AI companion with the capability of different personality",
            tech: ["React", "Node.js", "MongoDB"],
            image: "/project27.png",
            category: 'Web',
            link: "https://jasmine-ai.vercel.app/",
            dateAdded: "2025-04-09"
        },
        {
            title: "Dandelion Chocolate",
            description: "A bean-to-bar chocolate maker in San Francisco's Mission District crafting single-origin dark chocolate from just cocoa beans and organic sugar for over 10 years.",
            tech: ["React", "Node.js", "MongoDB"],
            image: "/project25.png",
            category: 'Web', 
            link: "https://www.dandelionchocolate.com/",
            dateAdded: "2025-04-11"
        },
        {
            title: "Squeaky Bean",
            description: "A plant-based food company making deliciously craveable meat alternatives and ready meals.",
            tech: ["React", "Node.js", "MongoDB"],
            image: "/project24.png", 
            category: 'Web',
            link: "https://www.squeakybean.co.uk/",
            dateAdded: "2025-04-10"
        },
        {
            title: "DedCool",
            description: "A modern fragrance brand founded by Carina, who grew up in her mother's beauty lab. ",
            tech: ["React", "Node.js", "MongoDB"],
            image: "/project23.png",
            category: 'Web',
            link: "https://dedcool.com/",
            dateAdded: "2025-04-10"
        },
        {
            title: "Jasmine AI Prototype",
            description: "Jasmine AI is AI companion with the capability of therapist",
            tech: ["React", "Node.js", "MongoDB"],
            image: "/project22.png",
            category: 'Web',
            link: "https://rbs-repository.github.io/Jasmine-AI/",
            dateAdded: "2025-04-09"
        },
        {
            title: "Rodriguez Rizal Travel",
            description: "A travel agency website designed for Rodriguez Rizal Travel",
            tech: ["React", "Node.js", "MongoDB"],
            image: "/project20.png",
            category: 'Web',
            link: "https://rodriguez-rizal-travel.vercel.app/",
            dateAdded: "2025-04-05"
        },
        {
            title: "Beauty lab cleanic product",
            description: "A ecommerce website designed for Korean Beauty lab cleanic product",
            tech: ["React", "Node.js", "MongoDB"],
            image: "/project21.png",
            category: 'Web',
            link: "https://shop.blcpcorp.com/",
            dateAdded: "2025-04-02"
        },
        {
            title: "Crypto Web3",
            description: "A cryptocurrency platform designed for meme enthusiasts",
            tech: ["React", "Node.js", "MongoDB"],
            image: "/project1.png",
            category: 'Web',
            link: "https://memecoin-woad.vercel.app/",
            dateAdded: "2025-03-30"
        },
        {
            title: "Himari AI Web3",
            description: "Future AI entity bridging human-AI understanding.",
            tech: ["Vue.js", "AWS", "Python"],
            image: "/project2.png",
            category: 'Web',
            link: "https://www.himari.io/",
            dateAdded: "2025-03-20"
        },
        {
            title: "Fear of God",
            description: "A platform for the latest news and updates on Fear of God.",
            tech: ["Next.js", "OpenAI", "PostgreSQL"],
            image: "/project3.png",
            category: 'Design',
            link: "https://fearofgod.com/en-ph",
            dateAdded: "2025-03-15"
        },
        {
            title: "Two14 Cafe",
            description: "A modern cafe website designed to showcase their diverse menu offerings",
            tech: ["Python", "React", "TensorFlow"],
            image: "/project5.png",
            category: 'Web',
            link: "https://two14coffee.com.au/",
            dateAdded: "2025-03-10"
        },
        {
            title: "Personal Porfolio",
            description: "A dynamic portfolio with chatbot implementation,",
            tech: ["React Native", "Firebase", "Three.js"],
            image: "/project4.png",
            category: 'Mobile',
            link: "https://rbs-repository.github.io/Ronelp/",
            dateAdded: "2025-02-25"
        },
        {
            title: "The Violet hour",
            description: "A  modern cocktail website featuring their menu",
            tech: ["Angular", "Node.js", "MySQL"],
            image: "/project6.png",
            category: 'Web',
            link: "https://www.theviolethour.com/",
            dateAdded: "2025-02-20"
        },
        {
            title: "Nalen Ayurveda",
            description: "A skincare e-commerce platform showcasing Bright Face Cleanser's products",
            tech: ["React", "Socket.io", "MongoDB"],
            image: "/project7.png",
            category: 'Web',
            link: "https://www.nalenayurveda.com/",
            dateAdded: "2024-08-15"
        },
        {
            title: "Cloe Cassandro",
            description: "A sustainable fashion brand offering unique and stylish clothing",
            tech: ["Web3.js", "React", "Solidity"],
            image: "/project8.png",
            category: 'Other',
            link: "https://cloecassandro.com/",
            dateAdded: "2024-07-10"
        },
        {
            title: "Magic Spoon Cereal",
            description: "A modern e-commerce platform selling healthy, low-carb cereals with unique flavors",
            tech: ["Vue.js", "MQTT", "GraphQL"],
            image: "/project9.png",
            category: 'Web',
            link: "https://magicspoon.com/",
            dateAdded: "2024-06-30"
        },
        {
            title: "Blakes Sweet Treats",
            description: "A delightful e-commerce website specializing in crispy sweet treats and desserts, ",
            tech: ["Unity", "ARKit", "React Native"],
            image: "/project10.png",
            category: 'Mobile',
            link: "https://www.eatblakes.com/",
            dateAdded: "2024-05-20"
        },
        {
            title: "L'ATELIER Restaurant",
            description: "An elegant French restaurant website showcasing their exquisite menu",
            tech: ["React", "Node.js", "AWS"],
            image: "/project11.png",
            category: 'Web',
            link: "https://www.ateliersaintbarth.fr/",
            dateAdded: "2024-04-10"
        },
        {
            title: "E-Commerce Website",
            description: "A full-featured online store built with React, Node.js, and MongoDB",
            tech: ["Angular", "Python", "TensorFlow"],
            image: "/project12.png",
            category: 'Web',
            link: "https://eastwing23.vercel.app/",
            dateAdded: "2024-03-05"
        },
        {
            title: "Photography Portfolio",
            description: "A photographer's portfolio showcasing their masterpiece into digital world,",
            tech: ["Angular", "Python", "TensorFlow"],
            image: "/project13.png",
            category: 'Web',
            link: "https://www.elizabethweinberg.com/",
            dateAdded: "2023-03-05"
        },
        {
            title: "Fashion E-Commerce Website",
            description: "A modern fashion retail platform featuring a curated collection of clothing,",
            tech: ["Angular", "Python", "TensorFlow"],
            image: "/project14.png",
            category: 'Web',
            link: "https://www.shenannz.com/",
            dateAdded: "2023-02-15"
        }
 
    ];

    // Function to format date in a more stylish way
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('en-US', { month: 'short' });
        const day = date.getDate();
        const year = date.getFullYear();
        
        return `${month} ${day}, ${year}`;
    };

    const displayedProjects = showAll ? projects : projects.slice(0, projectsPerPage);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 20
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const handleCardClick = (index) => {
        if (window.matchMedia('(hover: none)').matches) {
            setActiveIndex(activeIndex === index ? null : index);
        }
    };

    return (
        <section className="projects-section" id="projects" aria-label="Our Projects Portfolio">
            <div className="video-background" aria-hidden="true">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="background-video"
                >
                    <source src="/duness.mp4" type="video/mp4" />
              
                </video>
                <div className="video-overlay"></div>
            </div>
            
            <div className="projects-overlay" aria-hidden="true"></div>
            <div className="blur-overlay" aria-hidden="true"></div>

            <div className="projects-container">
                <motion.header 
                    className="projects-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 id="projects-heading">Our Projects</h2>
                    <div className="section-line" aria-hidden="true"></div>
                    <p className="section-subtitle">Showcasing Our Creative Work</p>
                </motion.header>

                <motion.div 
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    role="list"
                    aria-labelledby="projects-heading"
                    itemScope 
                    itemType="https://schema.org/ItemList"
                >
                    {displayedProjects.map((project, index) => (
                        <motion.article 
                            key={project.title}
                            className={`project-card ${activeIndex === index ? 'active' : ''}`}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            layout
                            onClick={() => handleCardClick(index)}
                            role="listitem"
                            itemScope 
                            itemType="https://schema.org/CreativeWork"
                            itemProp="itemListElement"
                        >
                            <meta itemProp="position" content={index + 1} />
                            <div className="project-image">
                                <img 
                                    src={project.image} 
                                    alt={`${project.title} - ${project.description}`} 
                                    loading="lazy" 
                                    itemProp="image"
                                    width="400" 
                                    height="300"
                                />
                                <div className="date-badge">
                                    <span>{formatDate(project.dateAdded)}</span>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-details">
                                        <h3 itemProp="name">{project.title}</h3>
                                        <p itemProp="description">{project.description}</p>
                                        <div className="tech-tags" aria-label="Technologies used">
                                            {project.tech.map((tech, i) => (
                                                <span key={i} className="tech-tag" itemProp="keywords">{tech}</span>
                                            ))}
                                        </div>
                                        <div className="project-links">
                                            {project.link && (
                                                <a 
                                                    href={project.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="view-project"
                                                    itemProp="url"
                                                    aria-label={`View live project: ${project.title}`}
                                                >
                                                    View Live
                                                </a>
                                            )}
                                            {project.github && (
                                                <a 
                                                    href={project.github} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="view-project github"
                                                    aria-label={`View ${project.title} GitHub repository`}
                                                >
                                                    GitHub
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <meta itemProp="genre" content={project.category} />
                                <meta itemProp="creator" content="Budaque Multi Media Creations" />
                                <meta itemProp="datePublished" content={project.dateAdded} />
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {projects.length > projectsPerPage && (
                    <motion.div 
                        className="view-more-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <button 
                            className="view-more-button"
                            onClick={() => setShowAll(!showAll)}
                            aria-expanded={showAll}
                            aria-controls="projects-grid"
                        >
                            {showAll ? 'View Less' : 'View More'}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects; 