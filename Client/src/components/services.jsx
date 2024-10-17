import React from 'react'
import "./services.css"
import img1 from '../assets/Sonna/52635999-edb0-4231-b2d4-13851bf58467.png';
import img2 from '../assets/Sonna/ai-in-education-1160x652.png';
import img3 from '../assets/Sonna/Business_performance_monitoring_1200x627.webp';
import img4 from '../assets/Sonna/original-d3b5a35b21ec59bf1b93458eae0593a6.png';

const images = [
  { src: img1, alt: 'Image 1' },
  { src: img2, alt: 'Image 2' },
  { src: img3, alt: 'Image 3' },
  { src: img4, alt: 'Image 4' },
];
const Services = () => {
  return (
      <div className="services-container">
        <h1 className="services-title">
          Unlock your child's potential with intelligent learning tools that make education engaging,
          personalized, and fun—powered by AI.
        </h1>
        <div className="services-grid">
          {images.map((image, index) => (
              <div className="service-item" key={index}>
                <img src={image.src} alt={image.alt} />
              </div>
          ))}
        </div>
      </div>
  );
};

export default Services;