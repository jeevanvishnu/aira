import React from 'react';
import './PromotionalBanner.css';
import promoImage from '../assets/promotional_banner.png';

const PromotionalBanner: React.FC = () => {
  return (
    <section className="promotional-banner">
      <div className="promotional-banner-image-container">
        <img 
          src={promoImage} 
          alt="Model wearing delicate gold jewelry" 
          className="promotional-banner-image"
        />
      </div>
      <div className="promotional-banner-content-container">
        <div className="promotional-banner-content">
          <h2 className="promotional-banner-title">
            EFFORTLESS ELEGANCE<br />
            IN EVERY GRAM
          </h2>
          <p className="promotional-banner-description">
            DISCOVER OUR EXCLUSIVE COLLECTION OF LIGHTWEIGHT GOLD JEWELRY — <br className="hidden-mobile" />
            PERFECT FOR EVERYDAY WEAR AND SPECIAL MOMENTS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
