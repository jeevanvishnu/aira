import React from 'react';
import './OurStory.css';
import brandAmbassador from '../assets/brand_ambassador.png';
import ScrollReveal from './ScrollReveal';

const OurStory: React.FC = () => {
  return (
    <section id="about" className="story-section">
      <div className="story-container">
        
        {/* Left Side: Edge-to-Edge Image */}
        <ScrollReveal direction="left" className="story-visuals">
          <div className="story-image-main">
            <img
              src={brandAmbassador}
              alt="Aira Jewels Brand Ambassador"
              className="story-img"
            />
          </div>
        </ScrollReveal>

        {/* Right Side: Clean Editorial Content */}
        <ScrollReveal direction="right" className="story-content-wrapper">
          <div className="story-text-card">
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

            {/* Subtle Milestones */}
            <div className="story-milestones-minimal">
              <span>1998 Heritage</span>
              <span className="dot">•</span>
              <span>100% Ethical</span>
              <span className="dot">•</span>
              <span>Artisan Crafted</span>
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

