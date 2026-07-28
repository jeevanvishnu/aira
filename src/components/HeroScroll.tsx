import React from 'react';
import './HeroScroll.css';
import heroBg from '../assets/model-hero-bg.png';

const HeroScroll: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background-container">
        <img src={heroBg} alt="Luxury Pearl and Gold Jewelry" className="hero-background-image" />
        <div className="hero-gradient-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-headline">
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Where Timeless Beauty</span>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Meets Modern Craft</span>
        </h1>
        <p className="hero-description">
          Discover exquisitely crafted jewelry designed to celebrate your elegance, every day.
        </p>
        
        <div className="hero-cta">
          <button className="btn-solid-white">
            Explore Collection
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroScroll;
