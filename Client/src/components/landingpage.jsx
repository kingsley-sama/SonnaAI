import React from 'react';
import "./refference.css"
const ClientPage = () => {
    return (
        <div className="landing-page">
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Learn<br />something<br /><span className="highlight">New</span> Today
                    </h1>
                    <p className="hero-description">
                        Unlock your child's potential with intelligent learning tools that make education engaging, personalized, and fun—powered by AI.
                    </p>
                    <div className="cta-buttons">
                        <button className="cta-button parents">Parents</button>
                        <button className="cta-button learner">Learner</button>
                    </div>
                </div>
                <div className="hero-image">
                    {/* This is a placeholder for the abstract image */}
                    <div className="abstract-image"></div>
                </div>
            </div>

            <div className="facts-section">
                <h2 className="facts-title">The Landingfolio Facts</h2>
                <p className="facts-description">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <div className="facts-grid">
                    <div className="fact-item">
                        <h3 className="fact-number">100</h3>
                        <p className="fact-label">Leads Delivered This Month</p>
                    </div>
                    <div className="fact-item">
                        <h3 className="fact-number">500</h3>
                        <p className="fact-label">AI Customers</p>
                    </div>
                    <div className="fact-item">
                        <h3 className="fact-number">98.29%</h3>
                        <p className="fact-label">Satisfaction Rate</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ClientPage;