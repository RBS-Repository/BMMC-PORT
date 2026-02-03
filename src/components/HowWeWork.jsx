import React from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
    const steps = [
        {
            num: "01",
            title: "Discovery & Strategy",
            desc: "We begin by deconstructing your vision, understanding your market position, and defining technical requirements."
        },
        {
            num: "02",
            title: "Architectural Design",
            desc: "Blueprinting the system infrastructure and user flow to ensure scalability and intuitive navigation."
        },
        {
            num: "03",
            title: "Agile Development",
            desc: "Iterative sprints with regular feedback loops, focusing on clean, maintainable code."
        },
        {
            num: "04",
            title: "Optimization & Launch",
            desc: "Rigorous performance testing, SEO fine-tuning, and a seamless deployment process."
        }
    ];

    return (
        <section className="how-section" id="process">
            <div className="how-container">
                <div className="how-header">
                    <h2>Our Process</h2>
                    <p>A systematic approach to digital excellence.</p>
                </div>

                <div className="process-list">
                    {steps.map((step, index) => (
                        <div key={index} className="process-item">
                            <div className="process-meta">
                                <span className="process-num">{step.num}</span>
                                <div className="process-line"></div>
                            </div>
                            <div className="process-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;