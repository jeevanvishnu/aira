import React from 'react';
import './KidsCollection.css';
import kidsTall from '../assets/kids-collection-tall.png';
import kidsSquare from '../assets/kids-collection-square.png';
import ScrollReveal from './ScrollReveal';

const KidsCollection: React.FC = () => {
  return (
    <section className="kids-collection-section">
      <div className="kids-container">
        <ScrollReveal direction="left" className="kids-content">
          <span className="kids-eyebrow">LITTLE TREASURES</span>
          <h2 className="kids-title">Kids Collection</h2>
          <div className="kids-divider"></div>
          <p className="kids-description">
            Discover our enchanting collection of fine jewelry designed specially for the little ones.
            Crafted with exceptional care, safety, and a touch of magic for those precious early moments.
          </p>
          <a href="#contact" className="btn-outline-gold kids-btn">
            Explore Collection
          </a>
        </ScrollReveal>

        <ScrollReveal direction="right" className="kids-visuals">
          <div className="kids-image-wrapper img-tall">
            <img
              src={kidsTall}
              alt="Kids jewelry collection"
              className="kids-image"
            />
          </div>
          <div className="kids-image-wrapper img-square">
            <img
              src={kidsSquare}
              alt="Kids delicate necklace"
              className="kids-image"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default KidsCollection;

