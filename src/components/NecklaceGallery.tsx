import React from 'react';
import { Link } from 'react-router-dom';
import './NecklaceGallery.css';
import ScrollReveal from './ScrollReveal';

import necklace1 from '../assetss/necklaces/necklaces_1.jpeg';
import necklace2 from '../assetss/necklaces/necklaces_2.jpeg';
import necklace3 from '../assetss/necklaces/necklaces_3.jpeg';
import necklace4 from '../assetss/necklaces/necklaces_4.jpeg';
import necklace5 from '../assetss/necklaces/necklaces_5.jpeg';
import necklace6 from '../assetss/necklaces/necklaces_6.jpeg';
import necklace7 from '../assetss/necklaces/necklaces_7.jpeg';
import necklace8 from '../assetss/necklaces/necklaces_8.jpeg';
import necklace9 from '../assetss/necklaces/necklaces_9.jpeg';

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
    <section id="necklaces" className="ng-section">
      <div className="ng-container">
        <ScrollReveal direction="up" className="ng-header">
          <span className="ng-eyebrow">THE NECKLACE GALLERY</span>
          <h2 className="ng-title">Exquisite Signature Necklaces</h2>
          <div className="ng-divider"></div>

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
                  <Link to={`/product/necklace-${necklace.id}`} className="ng-btn">View Details</Link>
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
