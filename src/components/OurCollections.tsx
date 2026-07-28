import React from 'react';
import './OurCollections.css';
import ringsImg from '../assets/rings-collection.png';
import necklacesImg from '../assets/necklaces-collection.png';
import braceletsImg from '../assets/bracelets-collection.png';
import earringsImg from '../assets/earrings-collection.png';
import ScrollReveal from './ScrollReveal';

const collections = [
  { id: 'rings', title: 'Rings', subtitle: 'Eternity & Engagement', image: ringsImg },
  { id: 'necklaces', title: 'Necklaces', subtitle: 'Statement & Pendants', image: necklacesImg },
  { id: 'bracelets', title: 'Bracelets', subtitle: 'Bangles & Chains', image: braceletsImg },
  { id: 'earrings', title: 'Earrings', subtitle: 'Studs & Drops', image: earringsImg },
];

const OurCollections: React.FC = () => {
  return (
    <section id="collections" className="collections-section">
      <ScrollReveal direction="up" className="collections-header">
        <span className="collections-eyebrow">OUR SELECTIONS</span>
        <h2 className="collections-title">Discover The Collections</h2>
        <div className="collections-header-divider"></div>
        <p className="collections-subtitle">Handcrafted fine masterpieces curated for life's celebrated moments.</p>
      </ScrollReveal>

      <div className="collections-grid">
        {collections.map((item, index) => (
          <div key={item.id} className="collection-card">
            <div className="collection-card-inner">
              <img src={item.image} alt={item.title} className="collection-image" />
              <div className="collection-overlay"></div>
              <div className="collection-frame"></div>
              <div className="collection-content">
                <h3 className="collection-name">{item.title}</h3>
                <p className="collection-sub">{item.subtitle}</p>
                <div className="collection-line"></div>
                <span className="collection-explore">
                  Explore Collection
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCollections;

