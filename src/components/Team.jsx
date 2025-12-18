import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const Team = () => {
    const teamMembers = [
        {
            name: "Jhanell De Mesa",
            role: "Backend Developer",
            image: "https://i.pinimg.com/736x/8b/57/0c/8b570c0676a1dabc40c88e214b2079d1.jpg",
            portfolio: "https://jhanel.vercel.app/",
            social: {
                facebook: "https://www.facebook.com/profile.php?id=61561468725812",
                email: "mailto:budaquecreations@gmail.com"
            }
        },
        {
            name: "Jasper Rubis",
            role: "Lead Developer",
            image: "https://media.istockphoto.com/id/1327592449/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=yqoos7g9jmufJhfkbQsk-mdhKEsih6Di4WZ66t_ib7I=",
            portfolio: "https://jasper-mu.vercel.app/",
            social: {
                facebook: "https://www.facebook.com/Mrsofthack5",
                email: "mailto:budaquecreations@gmail.com"
            }
        },
      
        {
            name: "Sobel Anne",
            role: "Frontend Developer",
            image: "https://cwc.gov.ph/wp-content/uploads/2024/05/Female_Profile.png",
            portfolio: "https://sobel-portfolio.example.com",
            social: {
                facebook: "https://www.facebook.com/sobel.anne.12",
                email: "mailto:budaquecreations@gmail.com"
            }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="team-section" id="team">
            <div className="video-background">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="background-video"
                >
                    <source src="/team-bg.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>
            
            <div className="team-overlay"></div>
            <div className="blur-overlay"></div>

            <div className="team-container">
                <motion.div 
                    className="team-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Our Team</h2>
                    <div className="section-line"></div>
                    <p className="section-subtitle">The Minds Behind the Innovation</p>
                </motion.div>

                <motion.div 
                    className="team-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div 
                            key={index}
                            className="team-member-card"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="member-image">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="image-error-overlay">
                                    <span>Professional Headshot<br/>not supported by your browser</span>
                                </div>
                                <div className="social-links">
                                    <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                                        <FacebookIcon />
                                    </a>
                                    <a href={member.social.email}>
                                        <EmailIcon />
                                    </a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                                <motion.a 
                                    href={member.portfolio}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-button"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <PortfolioIcon /> View Portfolio
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// SVG Icons
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
    </svg>
);

const PortfolioIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
    </svg>
);

export default Team; 