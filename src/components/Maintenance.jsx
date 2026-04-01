import React from 'react';
import './Maintenance.css';

const Maintenance = () => {
    const plans = [
        {
            name: "Basic",
            price: "3,500",
            freq: "mo",
            currency: "PHP",
            desc: "Keep your site safe, stable, and always online — completely hands-free.",
            features: ["Monthly CMS & Plugin Updates", "Weekly Automated Backups", "24/7 Uptime Monitoring", "Monthly Performance Report"]
        },
        {
            name: "Standard",
            price: "6,500",
            freq: "mo",
            currency: "PHP",
            isPopular: true,
            desc: "For growing businesses that need a site that stays fast, fresh, and conversion-ready.",
            features: ["Weekly Updates & Bug Fixes", "Daily Encrypted Backups", "Performance & Speed Tuning", "5 Hours of Content Updates/mo", "SEO Health Check"]
        },
        {
            name: "Enterprise",
            price: "12,000",
            freq: "mo",
            currency: "PHP",
            desc: "Full-service care for complex platforms — you focus on the business, we handle the tech.",
            features: ["Real-time Security Monitoring", "Hourly Automated Backups", "Dedicated Support Engineer", "Priority 24/7 Emergency Access", "Monthly Strategy Review", "Unlimited Content Updates"]
        }
    ];

    return (
        <section className="maint-section-swiss" id="maintenance">
            <div className="maint-container">
                <div className="maint-header-swiss">
                    <h2>Website Maintenance Plans — Philippines</h2>
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
                                <span className="currency-label">&nbsp;PHP</span>
                            </div>

                            <ul className="features-swiss">
                                {plan.features.map((f, idx) => (
                                    <li key={idx}>{f}</li>
                                ))}
                            </ul>

                            <a href="#contact" className="btn-swiss" aria-label={`Select ${plan.name} maintenance plan`}>Select Plan</a>
                        </div>
                    ))}
                </div>
                <p className="maint-note" style={{ textAlign: 'center', marginTop: '2rem', color: '#888', fontSize: '0.9rem' }}>
                    All plans include a <strong>14-day post-launch warranty</strong>. Serving businesses across Rodriguez, Rizal, Metro Manila, and nationwide.
                </p>
            </div>
        </section>
    );
};

export default Maintenance;