import React from 'react';

const MenuBar = () => {
    return (
        <nav className="sonna-menubar">
            <div className="sonna-logo">SONNA-AI</div>
            <div className="sonna-nav-items">
                <button className="sonna-nav-btn sonna-join">Join a Class</button>
                <button className="sonna-nav-btn sonna-homework">Homework</button>
            </div>
            <div className="sonna-cta-buttons">
                <button className="sonna-cta-btn sonna-pricing">See Pricing</button>
                <button className="sonna-cta-btn sonna-try-free">Try for Free</button>
            </div>

            <style jsx>{`
        .sonna-menubar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #000000;
          color: #ffffff;
          font-family: Arial, sans-serif;
        }

        .sonna-logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .sonna-logo span {
          color: #3b82f6;
        }

        .sonna-nav-items,
        .sonna-cta-buttons {
          display: flex;
          gap: 1rem;
        }

        .sonna-nav-btn,
        .sonna-cta-btn {
          padding: 0.5rem 1rem;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .sonna-nav-btn {
          background-color: transparent;
          border: 1px solid #ffffff;
          color: #ffffff;
        }

        .sonna-nav-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .sonna-cta-btn {
          border: none;
        }

        .sonna-pricing {
          background-color: transparent;
          color: #3b82f6;
        }

        .sonna-try-free {
          background-color: #3b82f6;
          color: #ffffff;
        }

        .sonna-try-free:hover {
          background-color: #2563eb;
        }

        @media (max-width: 768px) {
          .sonna-menubar {
            flex-direction: column;
            gap: 1rem;
          }

          .sonna-nav-items,
          .sonna-cta-buttons {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
        </nav>
    );
};

export default MenuBar;