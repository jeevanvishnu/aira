import React from 'react';
import './OurCollections.css';
import ringsImg from '../assetss/rings.webp';
import necklacesImg from '../assetss/necklaces.webp';
import braceletsImg from '../assetss/bracelet.webp';
import earringsImg from '../assetss/earring.webp';
import ScrollReveal from './ScrollReveal';

import ring1 from '../assetss/rings/ChatGPT Image Aug 6, 2026, 11_27_47 AM.webp';
import ring2 from '../assetss/rings/ChatGPT Image Aug 6, 2026, 11_28_02 AM.webp';
import ring3 from '../assetss/rings/ChatGPT Image Aug 6, 2026, 11_28_08 AM.webp';
import ring4 from '../assetss/rings/ChatGPT Image Aug 6, 2026, 11_28_15 AM.webp';
import ring5 from '../assetss/rings/ChatGPT Image Aug 6, 2026, 11_28_21 AM.webp';
import ring6 from '../assetss/rings/ChatGPT Image Aug 6, 2026, 11_28_28 AM.webp';


const collections = [
  { id: 'rings', title: 'Rings', subtitle: 'Eternity & Engagement', image: ringsImg },
  { id: 'necklaces', title: 'Necklaces', subtitle: 'Statement & Pendants', image: necklacesImg },
  { id: 'bracelets', title: 'Bracelets', subtitle: 'Bangles & Chains', image: braceletsImg },
  { id: 'earrings', title: 'Earrings', subtitle: 'Studs & Drops', image: earringsImg },
];

const ringCollection = [
  { id: 1, name: "Art Deco Lattice Ring", material: "Rose Gold & Diamonds", image: ring1 },
  { id: 2, name: "Minimalist Chevron Band", material: "18k Yellow Gold", image: ring2 },
  { id: 3, name: "Marquise Laurel Leaf Ring", material: "Rose Gold & Diamonds", image: ring3 },
  { id: 4, name: "Turquoise Carabiner Ring", material: "18k Gold & Turquoise", image: ring4 },
  { id: 5, name: "Triple Band Crossover Ring", material: "18k Yellow Gold Plating", image: ring5 },
  { id: 6, name: "Quilted Pyramid Signet Ring", material: "18k Yellow Gold", image: ring6 },
];


const OurCollections: React.FC = () => {
  return (
    <>
      <section id="collections" className="collections-section">
      <ScrollReveal direction="up" className="collections-header">
        <span className="collections-eyebrow">OUR SELECTIONS</span>
        <h2 className="collections-title">Discover The Collections</h2>
        <div className="collections-header-divider"></div>
      </ScrollReveal>

      <div className="collections-grid">
        {collections.map((item) => (
          <div key={item.id} className="collection-card">
            <div className="collection-card-inner">
              <img src={item.image} alt={item.title} className="collection-image" loading="lazy" />
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

    <section className="rings-showcase-section">
      <div className="rings-showcase-container">
        <ScrollReveal direction="up" className="rings-showcase-header">
          <span className="rings-eyebrow">THE RING GALLERY</span>
          <h3 className="rings-title">Exquisite Signature Rings</h3>
          <div className="rings-header-divider"></div>
        </ScrollReveal>
        
        <div className="rings-grid">
          {ringCollection.map((ring) => (
            <ScrollReveal key={ring.id} direction="up" delay={ring.id * 0.1} className="ring-card-item">
              <div className="ring-image-wrapper">
                <img src={ring.image} alt={ring.name} className="ring-image" loading="lazy" />
                <div className="ring-card-overlay">
                  <a href="#contact" className="ring-inquire-btn">Inquire Now</a>
                </div>
              </div>
              <div className="ring-details">
                <h4 className="ring-name">{ring.name}</h4>
                <p className="ring-subtext">{ring.material}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    </>

  );
};

export default OurCollections;

