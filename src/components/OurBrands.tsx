import React, { useState } from 'react';
import './OurBrands.css';
import ScrollReveal from './ScrollReveal';
import butterflyBrandLogo from '../assets/butterfly-brand-logo.png';

interface BrandStory {
  meaning: string;
  connection: string;
  history: string;
}

interface Brand {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  story: BrandStory;
}

const brands: Brand[] = [
  {
    id: 1,
    name: 'Butterfly',
    subtitle: 'For Kids',
    description: 'Playful, safe, and enchanting designs crafted specifically for the little ones.',
    story: {
      meaning: 'An elegant wing silhouette made of fine, organic continuous lines, representing childhood growth, purity, and the whimsical flutter of imagination.',
      connection: 'Just like the primary Aira logo uses a single continuous loop (symbolizing respect, unity, and a heartfelt connection), Butterfly extends this philosophy into organic flowing lines—weaving a continuous thread that connects children\'s dreams to our legacy of craft.',
      history: 'Conceived as a tribute to the delicate beginnings of life, Butterfly was crafted to provide safe, lightweight, hypoallergenic gold jewellery for kids. Every piece is an heirloom designed to tell a story of transformation, protection, and wonder.'
    }
  },
  {
    id: 2,
    name: 'Zam',
    subtitle: 'Diamonds',
    description: 'Exquisite diamond jewellery that radiates brilliance and timeless elegance.',
    story: {
      meaning: 'A geometric diamond configuration symbolizing symmetry, absolute clarity, and the eternal beauty of natural diamonds.',
      connection: 'The crystalline facets of the Zam icon mirror the radiant welcome of Aira\'s logo. It embodies the premium, light-catching brilliance that connects our core values of trust and high artistry.',
      history: 'Zam began with a mission to source the highest quality diamonds and set them in modern, architectural designs. Each stone is carefully hand-selected to celebrate life\'s most brilliant, unforgettable moments.'
    }
  },
  {
    id: 3,
    name: 'Feather',
    subtitle: 'Light Weight Gold',
    description: 'Effortless everyday wear featuring ultra-lightweight, contemporary gold designs.',
    story: {
      meaning: 'A minimalist floating feather representing weightlessness, fluid movement, and contemporary ease.',
      connection: 'Reflecting the gentle and warm relationship Aira shares with its patrons, Feather translates that bond into comfortable, effortless everyday jewellery that sits like a second skin.',
      history: 'Created for the modern lifestyle, Feather reimagined traditional, heavy gold jewellery. Through precision engineering, we crafted durable, hollow-core and lightweight gold styles that make luxury an everyday experience.'
    }
  },
];

const OurBrands: React.FC = () => {
  const [activeBrandId, setActiveBrandId] = useState<number | null>(null);

  const activeBrand = brands.find(b => b.id === activeBrandId);

  return (
    <section className="our-brands-section bg-pattern-gold">
      <div className="brands-container">
        <ScrollReveal direction="up" className="brands-header">
          <span className="brands-eyebrow">HOUSE OF AIRA</span>
          <h2 className="brands-title">Our Brands</h2>
          <div className="brands-header-divider"></div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2} className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-card">
              <div className="brand-card-inner">
                <div className="brand-logo-container">
                  {brand.id === 1 ? (
                    <img src={butterflyBrandLogo} alt="Butterfly Logo" className="brand-logo-img" />
                  ) : brand.id === 2 ? (
                    <svg className="brand-logo-svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <path d="M30 10 L50 25 L30 50 L10 25 Z" stroke="#C9A96E" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M30 10 L30 50" stroke="#C9A96E" strokeWidth="0.8" strokeDasharray="3 3"/>
                      <path d="M10 25 L50 25" stroke="#C9A96E" strokeWidth="0.8" strokeDasharray="3 3"/>
                    </svg>
                  ) : (
                    <svg className="brand-logo-svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <path d="M22 42 C26 34 32 22 45 15 C35 25 32 34 26 42 Z" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
                      <path d="M23 41 L15 49" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>
                <h3 className="brand-name">{brand.name}</h3>
                <h4 className="brand-subtitle">{brand.subtitle}</h4>
                <div className="brand-line"></div>
                <p className="brand-description">{brand.description}</p>
                <button 
                  onClick={() => setActiveBrandId(brand.id)} 
                  className="brand-explore-btn"
                >
                  Discover Legacy
                </button>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>

      {/* Legacy Story Modal */}
      {activeBrand && (
        <div className="brand-story-modal-overlay" onClick={() => setActiveBrandId(null)}>
          <div className="brand-story-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="brand-story-modal-close" onClick={() => setActiveBrandId(null)}>&times;</button>
            <div className="brand-story-modal-header">
              <div className="modal-logo-wrapper">
                {activeBrand.id === 1 ? (
                  <img src={butterflyBrandLogo} alt="Butterfly Logo" className="modal-logo-img" />
                ) : activeBrand.id === 2 ? (
                  <svg width="80" height="80" viewBox="0 0 60 60" fill="none">
                    <path d="M30 10 L50 25 L30 50 L10 25 Z" stroke="#C9A96E" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M30 10 L30 50" stroke="#C9A96E" strokeWidth="0.8" strokeDasharray="3 3"/>
                    <path d="M10 25 L50 25" stroke="#C9A96E" strokeWidth="0.8" strokeDasharray="3 3"/>
                  </svg>
                ) : (
                  <svg width="80" height="80" viewBox="0 0 60 60" fill="none">
                    <path d="M22 42 C26 34 32 22 45 15 C35 25 32 34 26 42 Z" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
                    <path d="M23 41 L15 49" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
              </div>
              <h2 className="modal-brand-name">{activeBrand.name}</h2>
              <span className="modal-brand-subtitle">{activeBrand.subtitle}</span>
              <div className="modal-divider"></div>
            </div>
            
            <div className="brand-story-modal-body">
              <div className="story-section">
                <h3>Visual Identity</h3>
                <p>{activeBrand.story.meaning}</p>
              </div>
              <div className="story-section">
                <h3>Connection to Aira Jewels</h3>
                <p>{activeBrand.story.connection}</p>
              </div>
              <div className="story-section">
                <h3>Heritage & Story</h3>
                <p>{activeBrand.story.history}</p>
              </div>
            </div>
            
            <div className="brand-story-modal-footer">
              <a href="#contact" className="modal-contact-link" onClick={() => setActiveBrandId(null)}>Inquire About {activeBrand.name}</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurBrands;


