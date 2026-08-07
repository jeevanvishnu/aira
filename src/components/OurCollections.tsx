import React from 'react';
import { Link } from 'react-router-dom';
import './OurCollections.css';
import ringsImg from '../assetss/rings_1.png';
import necklacesImg from '../assetss/necklaces.webp';
import braceletsImg from '../assetss/bracelet.webp';
import earringsImg from '../assetss/earring.webp';
import ScrollReveal from './ScrollReveal';

import ring1 from '../assetss/rings/rings.webp';
import ring2 from '../assetss/rings/rings_2.webp';
import ring3 from '../assetss/rings/rings_3.webp';
import ring4 from '../assetss/rings/rings_4.webp';
import ring5 from '../assetss/rings/rings_5.webp';
import ring6 from '../assetss/rings/rings_6.webp';


const collections = [
  { id: 'rings', num: '01', title: 'Rings', subtitle: 'Eternity & Engagement', image: ringsImg },
  { id: 'necklaces', num: '02', title: 'Necklaces', subtitle: 'Statement & Pendants', image: necklacesImg },
  { id: 'bracelets', num: '03', title: 'Bracelets', subtitle: 'Bangles & Chains', image: braceletsImg },
  { id: 'earrings', num: '04', title: 'Earrings', subtitle: 'Studs & Drops', image: earringsImg },
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
        
        <div className="collections-content-layer">
          <ScrollReveal direction="up" className="collections-header">
            <span className="collections-eyebrow">OUR SELECTIONS</span>
            <h2 className="collections-title">Discover The Collections</h2>
            <div className="collections-header-divider"></div>
          </ScrollReveal>

          <div className="collections-card-grid">
            {collections.map((item) => (
              <a href={`#${item.id}`} key={item.id} className="premium-card">
                <div className="premium-card-image-wrapper">
                  <img src={item.image} alt={item.title} className="premium-card-image" loading="lazy" />
                  <div className="premium-card-overlay"></div>
                </div>
                <div className="premium-card-content">
                  <h3 className="premium-card-title">{item.title}</h3>
                  <div className="premium-card-divider"></div>
                  <span className="premium-card-explore">Explore Collection <span className="arrow">→</span></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    <section id="rings" className="rings-showcase-section">
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
                  <Link to={`/product/ring-${ring.id}`} className="ring-inquire-btn">View Details</Link>
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

