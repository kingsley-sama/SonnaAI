import React, { useState } from 'react';
import "./bottomnavbar.css"
const Footer = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', { firstName, email });
  };

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="newsletter">
          <h2>Subscribe to our newsletter</h2>
          <form onSubmit={handleSubscribe}>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h3>Shop</h3>
            <ul>
              <li>Gift cards</li>
              <li>Sitemap</li>
              <li>Blog</li>
              <li>Login</li>
              <li>Sign up</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Sell</h3>
            <ul>
              <li>Sell on Etsy</li>
              <li>Teams</li>
              <li>Forums</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li>Etsy, Inc.</li>
              <li>Policies</li>
              <li>Investors</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Impact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Help</h3>
            <ul>
              <li>Help Center</li>
              <li>Trust and safety</li>
              <li>Privacy settings</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="dots">
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <p>© 2024 Etsy, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
