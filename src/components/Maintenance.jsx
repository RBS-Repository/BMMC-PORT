import React from 'react';
import './Maintenance.css';

const Maintenance = () => {
    const plans = [
        {
            name: "Basic",
            price: "3,500",
            freq: "mo",
            desc: "Essential security and backups.",
            features: ["Monthly Updates", "Regular Backups", "Uptime Monitoring"]
        },
        {
            name: "Standard",
            price: "6,500",
            freq: "mo",
            isPopular: true,
            desc: "Performance tuning and content updates.",
            features: ["Weekly Updates", "Daily Backups", "Performance Tuning", "5h Content Updates"]
        },
        {
            name: "Enterprise",
            price: "12,000",
            freq: "mo",
            desc: "Dedicated support and full management.",
            features: ["Real-time Security", "Hourly Backups", "Dedicated Support", "Priority 24/7 Access"]
        }
    ];

    return (
        <section className="maint-section-swiss" id="maintenance">
            <div className="maint-container">
                <div className="maint-header-swiss">
                    <h2>Maintenance Plans</h2>
                    <p>Transparent pricing. No hidden fees. Cancel anytime.</p>
                </div>

                <div className="pricing-grid-swiss">
                    {plans.map((plan, i) => (
                        <div key={i} className={`pricing-card-swiss ${plan.isPopular ? 'highlight' : ''}`}>
                            <div className="card-top">
                                <h3>{plan.name}</h3>
                                <p className="desc">{plan.desc}</p>
                            </div>

                            <div className="card-price">
                                <span className="currency">₱</span>
                                <span className="amt">{plan.price}</span>
                                <span className="duration">/{plan.freq}</span>
                            </div>

                            <ul className="features-swiss">
                                {plan.features.map((f, idx) => (
                                    <li key={idx}>{f}</li>
                                ))}
                            </ul>

                            <button className="btn-swiss">Select Plan</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Maintenance;