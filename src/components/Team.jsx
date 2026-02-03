import React from 'react';
import './Team.css';

const Team = () => {
    const team = [
        {
            name: "Jasper Rubis",
            role: "Lead Architect",
            image: "https://media.istockphoto.com/id/1327592449/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=yqoos7g9jmufJhfkbQsk-mdhKEsih6Di4WZ66t_ib7I=",
            desc: "Specializing in scalable system architecture and full-stack solutions."
        },
        {
            name: "Jhanell De Mesa",
            role: "Backend Operations",
            image: "https://i.pinimg.com/736x/8b/57/0c/8b570c0676a1dabc40c88e214b2079d1.jpg",
            desc: "Focusing on data integrity, API security, and server optimization."
        },
        {
            name: "Sobel Anne",
            role: "UI/UX Specialist",
            image: "https://cwc.gov.ph/wp-content/uploads/2024/05/Female_Profile.png",
            desc: "Creating intuitive, user-centric interfaces with pixel-perfect precision."
        }
    ];

    return (
        <section className="team-section" id="team">
            <div className="team-container">
                <div className="team-header-minimal">
                    <h2>Our Team</h2>
                    <div className="team-line"></div>
                </div>

                <div className="team-grid-clean">
                    {team.map((member, index) => (
                        <div key={index} className="team-member-clean">
                            <div className="img-wrapper-clean">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className="info-clean">
                                <h3>{member.name}</h3>
                                <span className="role-clean">{member.role}</span>
                                <p className="desc-clean">{member.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;