import React from 'react';
import './OurBrands.css';
import ScrollReveal from './ScrollReveal';

const brands = [
  {
    id: 1,
    name: 'Butterfly',
    subtitle: 'For Kids',
    description: 'Playful, safe, and enchanting designs crafted specifically for the little ones.',
  },
  {
    id: 2,
    name: 'Zam',
    subtitle: 'Diamonds',
    description: 'Exquisite diamond jewellery that radiates brilliance and timeless elegance.',
  },
  {
    id: 3,
    name: 'Feather',
    subtitle: 'Light Weight Gold',
    description: 'Effortless everyday wear featuring ultra-lightweight, contemporary gold designs.',
  },
];

const OurBrands: React.FC = () => {
  return (
    <section className="our-brands-section">
      <div className="brands-container">
        <ScrollReveal direction="up" className="brands-header">
          <span className="brands-eyebrow">HOUSE OF AIRA</span>
          <h2 className="brands-title">Our Brands</h2>
          <div className="brands-header-divider"></div>
          <p className="brands-intro">
            Modern artistry and timeless elegance. Our sub-brands celebrate fine craftsmanship with designs that speak to your unique style.
          </p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2} className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-card">
              <div className="brand-card-inner">
                <h3 className="brand-name">{brand.name}</h3>
                <h4 className="brand-subtitle">{brand.subtitle}</h4>
                <div className="brand-line"></div>
                <p className="brand-description">{brand.description}</p>
                <a href="#contact" className="brand-explore">
                  Discover Brand
                </a>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OurBrands;

