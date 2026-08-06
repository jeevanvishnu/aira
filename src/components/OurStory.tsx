import React from 'react';
import './OurStory.css';
import ourStoryImg from '../assetss/about/ChatGPT Image Aug 6, 2026, 04_27_25 PM.png';
import ScrollReveal from './ScrollReveal';

const OurStory: React.FC = () => {
  return (
    <section id="about" className="story-section">
      <div className="story-container">
        
        {/* Left Side: Clean Editorial Content */}
        <ScrollReveal direction="left" className="story-content-wrapper">
          <div className="story-text-card">
            <h2 className="story-title">Our Story</h2>
            
            <div className="story-description">
              <p>
                Aira Jewels is a trusted jewellery destination in the heart of Rolla, Sharjah, offering over 6,000 exquisite pieces sourced from 10 countries. Embracing the "Lighter Side of Luxury," our collection features stunning yet lightweight jewellery for every style.
              </p>
              <p>
                We specialize in 22K and 18K gold, certified diamonds, and luxury gemstones, including elegant bridal sets and custom designs.
              </p>
            </div>
            
            <a href="#collections" className="story-cta-link">
              VIEW COLLECTION CATALOG
            </a>
          </div>
        </ScrollReveal>

        {/* Right Side: Image */}
        <ScrollReveal direction="right" className="story-visuals">
          <div className="story-image-main">
            <img
              src={ourStoryImg}
              alt="Aira Jewels Our Story"
              className="story-img"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default OurStory;

