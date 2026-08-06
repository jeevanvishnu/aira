import React from 'react';
import './BraceletGallery.css';
import ScrollReveal from './ScrollReveal';

import bracelet1 from '../assetss/bracelets/bracelets_1.png';
import bracelet2 from '../assetss/bracelets/bracelets_2.png';
import bracelet3 from '../assetss/bracelets/bracelets_3.png';
import bracelet4 from '../assetss/bracelets/bracelet.png';

const braceletCollection = [
  { id: 1, name: 'Eternity Diamond Bangle', material: '18k White Gold & Diamonds', image: bracelet1 },
  { id: 2, name: 'Classic Tennis Bracelet', material: '18k Yellow Gold & Diamonds', image: bracelet2 },
  { id: 3, name: 'Sapphire Halo Bracelet', material: 'Platinum & Blue Sapphire', image: bracelet3 },
  { id: 4, name: 'Interlocking Chain Link', material: 'Rose Gold & Mixed Metals', image: bracelet4 },
];

const BraceletGallery: React.FC = () => {
  return (
    <section id="bracelets" className="bg-section">
      <div className="bg-container">
        <ScrollReveal direction="up" className="bg-header">
          <span className="bg-eyebrow">THE BRACELET GALLERY</span>
          <h2 className="bg-title">Elegant Wristwear</h2>
          <div className="bg-divider"></div>
          <p className="bg-subtitle">
            Refined elegance for your wrist — from classic tennis styles to statement bangles.
          </p>
        </ScrollReveal>

        <div className="bg-grid">
          {braceletCollection.map((bracelet) => (
            <ScrollReveal
              key={bracelet.id}
              direction="up"
              delay={bracelet.id * 0.1}
              className="bg-card"
            >
              <div className="bg-image-wrapper">
                <img
                  src={bracelet.image}
                  alt={bracelet.name}
                  className="bg-image"
                  loading="lazy"
                />
                <div className="bg-overlay">
                  <a href="#contact" className="bg-btn">Inquire Now</a>
                </div>
              </div>
              <div className="bg-details">
                <h4 className="bg-name">{bracelet.name}</h4>
                <p className="bg-material">{bracelet.material}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <ScrollReveal direction="up" className="bg-trust-badges">
        <div className="bg-trust-badge">
          <div className="bg-trust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h4>Hypoallergenic</h4>
          <p>18k gold & nickel-free, perfect for sensitive skin.</p>
        </div>
        <div className="bg-trust-badge">
          <div className="bg-trust-icon">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h4>Smooth Edges</h4>
          <p>Carefully rounded designs to prevent any snagging.</p>
        </div>
        <div className="bg-trust-badge">
          <div className="bg-trust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          </div>
          <h4>Secure Locks</h4>
          <p>Sturdy clasps and screw-backs built for active play.</p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default BraceletGallery;
