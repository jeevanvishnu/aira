import React from 'react';
import './PromotionalBanner.css';
import promoImage from '../assets/promotional_banner.png';
import ScrollReveal from './ScrollReveal';

const PromotionalBanner: React.FC = () => {
  return (
    <ScrollReveal direction="up" className="promotional-banner">
      <div className="promotional-banner-image-container">
        <img 
          src={promoImage} 
          alt="Model wearing delicate gold jewelry" 
          className="promotional-banner-image"
        />
        <div className="promotional-banner-image-overlay"></div>
      </div>
      <div className="promotional-banner-content-container">
        <div className="promotional-banner-content">
          <span className="promotional-banner-tagline">LIMITED EDITION</span>
          <h2 className="promotional-banner-title">
            Effortless Elegance<br />
            in Every Gram
          </h2>
          <div className="promotional-banner-divider"></div>
          <p className="promotional-banner-description">
            Discover our exclusive collection of lightweight gold jewelry — 
            perfect for everyday wear and special moments.
          </p>
          <a href="#collections" className="btn-gold promotional-banner-cta">
            Shop The Collection
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default PromotionalBanner;

