import React from 'react';
import { Link } from 'react-router-dom';
import './EarringGallery.css';
import ScrollReveal from './ScrollReveal';

import earring1 from '../assetss/earrings/earrings_1.jpeg';
import earring2 from '../assetss/earrings/earrings_2.jpeg';

const earringCollection = [
  { id: 1, name: 'Luminous Pearl Drops', material: '18k Gold & Freshwater Pearl', image: earring1 },
  { id: 2, name: 'Diamond Solitaire Studs', material: 'Platinum & Brilliant Cut Diamonds', image: earring2 },
  { id: 3, name: 'Luminous Pearl Drops', material: '18k Gold & Freshwater Pearl', image: earring1 },
  { id: 4, name: 'Diamond Solitaire Studs', material: 'Platinum & Brilliant Cut Diamonds', image: earring2 },
  { id: 5, name: 'Luminous Pearl Drops', material: '18k Gold & Freshwater Pearl', image: earring1 },
  { id: 6, name: 'Diamond Solitaire Studs', material: 'Platinum & Brilliant Cut Diamonds', image: earring2 },
  { id: 7, name: 'Luminous Pearl Drops', material: '18k Gold & Freshwater Pearl', image: earring1 },
  { id: 8, name: 'Diamond Solitaire Studs', material: 'Platinum & Brilliant Cut Diamonds', image: earring2 },
];

const EarringGallery: React.FC = () => {
  return (
    <section id="earrings" className="eg-section">
      <div className="eg-container">
        <ScrollReveal direction="up" className="eg-header">
          <span className="eg-eyebrow">THE EARRING GALLERY</span>
          <h2 className="eg-title">Statement Earrings</h2>
          <div className="eg-divider"></div>

        </ScrollReveal>

        <div className="eg-grid">
          {earringCollection.map((earring) => (
            <ScrollReveal
              key={earring.id}
              direction="up"
              delay={earring.id * 0.15}
              className="eg-card"
            >
              <div className="eg-image-wrapper">
                <img
                  src={earring.image}
                  alt={earring.name}
                  className="eg-image"
                  loading="lazy"
                />
                <div className="eg-overlay">
                  <Link to={`/product/earring-${earring.id}`} className="eg-btn">View Details</Link>
                </div>
              </div>
              <div className="eg-details">
                <h4 className="eg-name">{earring.name}</h4>
                <p className="eg-material">{earring.material}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarringGallery;
