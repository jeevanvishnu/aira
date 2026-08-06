import React from 'react';
import './BridalCollection.css';
import bridalMain from '../assets/bridal-main.webp';
import bridalNecklace from '../assets/bridal-necklace.webp';
import bridalRings from '../assets/bridal-rings.webp';
import ScrollReveal from './ScrollReveal';

const BridalCollection: React.FC = () => {
  return (
    <section className="bridal-section">
      <div className="bridal-container">
        
        {/* Text Block - Left Side */}
        <ScrollReveal direction="left" className="bridal-text-block">
          <span className="bridal-eyebrow">THE BRIDAL EDIT</span>
          <h2 className="bridal-title">Everlasting Elegance</h2>
          <div className="bridal-divider"></div>
          <p className="bridal-description">
            Celebrate your most precious moments with masterpieces crafted for eternity. 
            Our exclusive bridal collection meticulously blends traditional heritage with contemporary design, 
            ensuring you shine with unmatched brilliance on your special day.
          </p>
          <a href="#contact" className="btn-outline-gold bridal-btn">
            Explore The Collection
          </a>
        </ScrollReveal>

        {/* Image Grid - Right Side */}
        <ScrollReveal direction="right" className="bridal-grid">
          {/* Main Tall Image */}
          <div className="bridal-img-wrapper tall-img">
            <img 
              src={bridalMain} 
              alt="Bridal Jewelry Collection" 
              className="bridal-img"
              loading="lazy"
            />
            <div className="bridal-overlay"></div>
          </div>
          
          {/* Stacked Smaller Images */}
          <div className="bridal-stacked-imgs">
            <div className="bridal-img-wrapper small-img">
              <img 
                src={bridalNecklace} 
                alt="Bridal Necklace Close-up" 
                className="bridal-img"
                loading="lazy"
              />
              <div className="bridal-overlay"></div>
            </div>
            <div className="bridal-img-wrapper small-img">
              <img 
                src={bridalRings} 
                alt="Bridal Rings Close-up" 
                className="bridal-img"
                loading="lazy"
              />
              <div className="bridal-overlay"></div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default BridalCollection;

