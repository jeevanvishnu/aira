import React from 'react';
import './NecklaceGallery.css';
import ScrollReveal from './ScrollReveal';

import necklace1 from '../assetss/necklaces/WhatsApp Image 2026-08-06 at 11.25.26 AM.jpeg';
import necklace2 from '../assetss/necklaces/WhatsApp Image 2026-08-06 at 11.27.18 AM.jpeg';
import necklace3 from '../assetss/necklaces/WhatsApp Image 2026-08-06 at 11.29.02 AM.jpeg';
import necklace4 from '../assetss/necklaces/WhatsApp Image 2026-08-06 at 11.31.07 AM.jpeg';
import necklace5 from '../assetss/necklaces/WhatsApp Image 2026-08-06 at 11.34.56 AM.jpeg';
import necklace6 from '../assetss/necklaces/WhatsApp Image 2026-08-06 at 11.37.54 AM.jpeg';
import necklace7 from '../assetss/necklaces/WhatsApp Image 2026-08-06 at 11.39.18 AM.jpeg';
import necklace8 from '../assetss/necklaces/WhatsApp Image 2026-08-06 at 11.40.34 AM.jpeg';
import necklace9 from '../assetss/necklaces/WhatsApp Image 2026-08-06 at 11.42.45 AM.jpeg';

const necklaceCollection = [
  { id: 1, name: 'Sakura Bloom Bar Necklace', material: '18k Gold & Pink Sapphires', image: necklace1 },
  { id: 2, name: 'Oval Pearl Pendant', material: '18k Gold & Freshwater Pearl', image: necklace2 },
  { id: 3, name: 'Infinity Heart Mangalsutra', material: '18k Gold & Diamonds', image: necklace3 },
  { id: 4, name: 'Clover Mangalsutra', material: '18k Gold & Diamonds', image: necklace4 },
  { id: 5, name: 'Cascade Drop Necklace', material: 'Sterling Silver & Diamonds', image: necklace5 },
  { id: 6, name: 'Celestial Charm Necklace', material: '18k Gold & Diamonds', image: necklace6 },
  { id: 7, name: 'Diamond Cluster Bar Necklace', material: 'Rose Gold & Diamonds', image: necklace7 },
  { id: 8, name: 'Pentagon Link Fringe Necklace', material: 'Rose Gold Plating', image: necklace8 },
  { id: 9, name: 'Floral Marquise Pendant', material: 'Rose Gold & Pink Tourmaline', image: necklace9 },
];

const NecklaceGallery: React.FC = () => {
  return (
    <section className="ng-section">
      <div className="ng-container">
        <ScrollReveal direction="up" className="ng-header">
          <span className="ng-eyebrow">THE NECKLACE GALLERY</span>
          <h2 className="ng-title">Exquisite Signature Necklaces</h2>
          <div className="ng-divider"></div>
          <p className="ng-subtitle">
            Handcrafted with precision — from delicate pendants to bold statement pieces.
          </p>
        </ScrollReveal>

        <div className="ng-grid">
          {necklaceCollection.map((necklace) => (
            <ScrollReveal
              key={necklace.id}
              direction="up"
              delay={necklace.id * 0.07}
              className="ng-card"
            >
              <div className="ng-image-wrapper">
                <img
                  src={necklace.image}
                  alt={necklace.name}
                  className="ng-image"
                  loading="lazy"
                />
                <div className="ng-overlay">
                  <a href="#contact" className="ng-btn">Inquire Now</a>
                </div>
              </div>
              <div className="ng-details">
                <h4 className="ng-name">{necklace.name}</h4>
                <p className="ng-material">{necklace.material}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NecklaceGallery;
