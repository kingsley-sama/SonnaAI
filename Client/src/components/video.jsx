import React from 'react';
import "./video.css"
import portrait from '../assets/images/portrait.jpg'
const ProductivityAppLanding = () => {
    return (
        <div className="prod-landing-container">
            <div className="prod-content-wrapper">
                <h1 className="prod-main-title">All your learning needs in one place</h1>
                <p className="prod-description">
                    We are prioritizing improve performance in learning by leveraging the power of AI
                    to aid kids learning needs. Do you want to know more about us this short video gives a brief overview of our
                    work.
                </p>
                <div className="prod-cta-container">
                    <button className="prod-cta-btn prod-play-btn">
                        <span className="prod-play-icon">▶</span> Play video
                    </button>
                    <button className="prod-cta-btn prod-start-btn">Get Started →</button>
                </div>
            </div>
            <div className="prod-device-container">
                <div className="prod-device-frame">
                    <div className="prod-device-screen">
                        <img src={portrait} alt="App screenshot" className="prod-app-image" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductivityAppLanding;