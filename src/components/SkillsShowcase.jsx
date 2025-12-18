import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SkillsShowcase.css';

const SkillsShowcase = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');

    const categories = [
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'design', name: 'Design' },
        { id: 'tools', name: 'Tools & DevOps' }
    ];

    const skills = {
        frontend: [
            { name: 'React', level: 95, icon: 'devicon-react-original colored' },
            { name: 'Vue.js', level: 90, icon: 'devicon-vuejs-plain colored' },
            { name: 'Angular', level: 80, icon: 'devicon-angularjs-plain colored' },
            { name: 'Next.js', level: 92, icon: 'devicon-nextjs-original' },
            { name: 'TypeScript', level: 88, icon: 'devicon-typescript-plain colored' },
            { name: 'JavaScript', level: 95, icon: 'devicon-javascript-plain colored' },
            { name: 'Tailwind CSS', level: 90, icon: 'devicon-tailwindcss-plain colored' },
            { name: 'SCSS/SASS', level: 85, icon: 'devicon-sass-original colored' }
        ],
        backend: [
            { name: 'Node.js', level: 90, icon: 'devicon-nodejs-plain colored' },
            { name: 'Express', level: 88, icon: 'devicon-express-original' },
            { name: 'PHP', level: 85, icon: 'devicon-php-plain colored' },
            { name: 'Laravel', level: 82, icon: 'devicon-laravel-plain colored' },
            { name: 'Python', level: 78, icon: 'devicon-python-plain colored' },
            { name: 'Django', level: 75, icon: 'devicon-django-plain' },
            { name: 'MongoDB', level: 86, icon: 'devicon-mongodb-plain colored' },
            { name: 'MySQL', level: 88, icon: 'devicon-mysql-plain colored' }
        ],
        design: [
            { name: 'Figma', level: 92, icon: 'devicon-figma-plain colored' },
            { name: 'Adobe XD', level: 85, icon: 'devicon-xd-plain colored' },
            { name: 'Photoshop', level: 80, icon: 'devicon-photoshop-plain colored' },
            { name: 'Illustrator', level: 78, icon: 'devicon-illustrator-plain colored' },
            { name: 'UI Design', level: 90, icon: 'fa-solid fa-palette' },
            { name: 'UX Design', level: 88, icon: 'fa-solid fa-user-gear' },
            { name: 'Wireframing', level: 94, icon: 'fa-solid fa-pencil' },
            { name: 'Prototyping', level: 91, icon: 'fa-solid fa-bezier-curve' }
        ],
        tools: [
            { name: 'Git', level: 90, icon: 'devicon-git-plain colored' },
            { name: 'Docker', level: 85, icon: 'devicon-docker-plain colored' },
            { name: 'AWS', level: 80, icon: 'devicon-amazonwebservices-original colored' },
            { name: 'GitHub Actions', level: 82, icon: 'devicon-github-original' },
            { name: 'Webpack', level: 78, icon: 'devicon-webpack-plain colored' },
            { name: 'Vite', level: 88, icon: 'fa-solid fa-bolt' },
            { name: 'Jest', level: 85, icon: 'devicon-jest-plain colored' },
            { name: 'CI/CD', level: 84, icon: 'fa-solid fa-code-branch' }
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const skillVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    // Generate hexagon coordinates for skill web
    const generateHexagonPoints = (count) => {
        const points = [];
        const angleIncrement = (2 * Math.PI) / count;
        const radius = 200;
        const centerX = 250;
        const centerY = 250;
        
        for (let i = 0; i < count; i++) {
            const angle = i * angleIncrement - Math.PI / 2; // Start from top
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            points.push({ x, y });
        }
        
        return points;
    };

    const renderSkillWeb = () => {
        const currentSkills = skills[activeCategory].slice(0, 6); // Only use 6 skills for the web
        const points = generateHexagonPoints(currentSkills.length);
        
        return (
            <div className="skill-web-container">
                <svg width="500" height="500" viewBox="0 0 500 500" className="skill-web">
                    {/* Center point */}
                    <circle cx="250" cy="250" r="5" fill="var(--primary, #00f3ff)" />
                    
                    {/* Skill area */}
                    <motion.path 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        d={`M${currentSkills.map((skill, i) => {
                            const point = points[i];
                            const factor = skill.level / 100;
                            const offsetX = 250 + (point.x - 250) * factor;
                            const offsetY = 250 + (point.y - 250) * factor;
                            return `${i === 0 ? 'M' : 'L'}${offsetX},${offsetY}`;
                        }).join(' ')}Z`}
                        fill="rgba(0, 243, 255, 0.1)"
                        stroke="var(--primary, #00f3ff)"
                        strokeWidth="2"
                    />
                    
                    {/* Lines from center to each skill */}
                    {currentSkills.map((skill, i) => {
                        const point = points[i];
                        const factor = skill.level / 100;
                        const offsetX = 250 + (point.x - 250) * factor;
                        const offsetY = 250 + (point.y - 250) * factor;
                        
                        return (
                            <motion.line 
                                key={`line-${i}`}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.3 }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                x1="250" 
                                y1="250" 
                                x2={offsetX} 
                                y2={offsetY} 
                                stroke="var(--primary, #00f3ff)" 
                                strokeWidth="1" 
                                strokeDasharray="4 4"
                            />
                        );
                    })}
                    
                    {/* Skill points and labels */}
                    {currentSkills.map((skill, i) => {
                        const point = points[i];
                        const factor = skill.level / 100;
                        const offsetX = 250 + (point.x - 250) * factor;
                        const offsetY = 250 + (point.y - 250) * factor;
                        
                        // Calculate text position (outside the polygon)
                        const textFactor = 1.1;
                        const textX = 250 + (point.x - 250) * textFactor;
                        const textY = 250 + (point.y - 250) * textFactor;
                        
                        // Text alignment based on position
                        const textAnchor = 
                            textX < 250 - 20 ? "end" : 
                            textX > 250 + 20 ? "start" : "middle";
                        
                        // Vertical alignment
                        const dy = 
                            textY < 250 - 100 ? "-1em" : 
                            textY > 250 + 100 ? "1em" : "0.3em";
                        
                        return (
                            <g key={`skill-${i}`}>
                                <motion.circle 
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                                    cx={offsetX} 
                                    cy={offsetY} 
                                    r="8"
                                    fill="var(--primary, #00f3ff)"
                                />
                                <motion.text 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                                    x={textX} 
                                    y={textY} 
                                    fill="white"
                                    textAnchor={textAnchor}
                                    dy={dy}
                                    fontSize="14"
                                    fontWeight="500"
                                >
                                    {skill.name}
                                </motion.text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        );
    };

    return (
        <section className="skills-section" id="skills">
            <div className="skills-container">
                <motion.div 
                    className="skills-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Our Technical Expertise</h2>
                    <div className="section-line"></div>
                    <p className="section-subtitle">Technology Stack & Professional Skills</p>
                </motion.div>

                <div className="skills-categories">
                    {categories.map(category => (
                        <motion.button
                            key={category.id}
                            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.name}
                        </motion.button>
                    ))}
          
                </div>
                <div className="skills-content">
                    <div className="skills-visualization">
                        {renderSkillWeb()}
                    </div>

                    <motion.div 
                        className="skills-list"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        key={activeCategory} // To reset animation when category changes
                    >
                        {skills[activeCategory].map((skill, index) => (
                            <motion.div 
                                key={skill.name} 
                                className="skill-item"
                                variants={skillVariants}
                            >
                                <div className="skill-icon">
                                    <i className={skill.icon}></i>
                                </div>
                                <div className="skill-info">
                                    <div className="skill-header">
                                        <h3>{skill.name}</h3>
                                        <span className="skill-level">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar-container">
                                        <motion.div 
                                            className="skill-bar"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div 
                    className="skills-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p>Need expertise in a specific technology for your project?</p>
                    <a href="#contact" className="cta-button">Discuss Your Requirements</a>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsShowcase; 