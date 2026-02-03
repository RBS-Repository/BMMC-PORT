import React from 'react';
import './SkillsShowcase.css';

const SkillsShowcase = () => {
    const skills = [
        "React", "Node.js", "Python", "Three.js", "TypeScript",
        "MongoDB", "AWS", "Framer", "UI/UX", "WebGL", "Next.js", "Solidity"
    ];

    return (
        <section className="skills-section" id="skills">
            {/* Reduced stars for performance */}
            <div className="space-bg-optimized"></div>

            <div className="skills-container-centered">
                <h2>Technical Stack</h2>

                <div className="skills-tag-cloud">
                    {skills.map((skill, i) => (
                        <div key={skill} className="skill-tag">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsShowcase;