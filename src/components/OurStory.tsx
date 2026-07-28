import React from 'react';
import './OurStory.css';
import brandAmbassador from '../assets/brand_ambassador.png';
import ScrollReveal from './ScrollReveal';

const OurStory: React.FC = () => {
  return (
    <section id="about" className="story-section">
      <div className="story-container">
        
        {/* Left Side: Editorial Image */}
        <ScrollReveal direction="left" className="story-image-side">
          <div className="story-image-wrapper">
            <img
              src={brandAmbassador}
              alt="Aira Jewels Brand Ambassador"
              className="story-image"
            />
            <div className="story-image-overlay"></div>
          </div>
        </ScrollReveal>

        {/* Right Side: Editorial Content */}
        <ScrollReveal direction="right" className="story-text-side">
          <div className="story-text-content">
            <span className="story-eyebrow">THE BRAND</span>
            <h2 className="story-title">Crafting Legacies of Light & Gold</h2>
            <div className="story-divider"></div>
            
            <div className="story-description">
              <p>
                Aira Jewels was born from a passion for handcrafted perfection and timeless luxury. 
                With decades of heritage in custom design, we select only the finest ethically sourced 
                metals and stones, sculpting them into elegant modern legacies.
              </p>
              <p>
                Every piece is a collaborative journey of artistry, precision, and soul. From delicate daily diamonds 
                to majestic bridal heirlooms, we compose stories of grace, brilliance, and joyous self-expression.
              </p>
            </div>
            
            <a href="#collections" className="btn-outline-gold story-cta">
              Discover Heritage
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default OurStory;

