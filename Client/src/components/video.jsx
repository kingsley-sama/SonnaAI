import React from 'react';
import "./video.css"
const ProductivityAppLanding = () => {
    return (
        <div className="prod-landing-container">
            <div className="prod-content-wrapper">
                <h1 className="prod-main-title">One app to rule all your productivity needs</h1>
                <p className="prod-description">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
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
                        <img src="/api/placeholder/300/600" alt="App screenshot" className="prod-app-image" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductivityAppLanding;