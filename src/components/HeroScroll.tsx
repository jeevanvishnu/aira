import React from 'react';
import './HeroScroll.css';
import heroBg from '../assets/model-hero-bg.png';

const HeroScroll: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background-container">
        <img src={heroBg} alt="Luxury Pearl and Gold Jewelry" className="hero-background-image" />
        <div className="hero-gradient-overlay"></div>
      </div>

      {/* Floating luxury badge — mobile only */}
      <div className="hero-badge">
        <span className="hero-badge-text">Hand&shy;crafted{'\n'}Pure Gold</span>
      </div>
      
      <div className="hero-content">
        {/* Gold accent line — mobile only */}
        <div className="hero-accent-line"></div>

        <h1 className="hero-headline">
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Where Timeless Beauty</span>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Meets Modern Craft</span>
        </h1>
        <p className="hero-description">
          Discover exquisitely crafted jewelry designed to celebrate your elegance, every day.
        </p>
        
        <div className="hero-cta">
          <button className="btn-solid-white" onClick={() => window.location.href = '#contact'}>
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
