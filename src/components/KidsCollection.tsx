import React from 'react';
import './KidsCollection.css';
import kidsTall from '../assets/kids-collection-tall.png';
import kidsSquare from '../assets/kids-collection-square.png';

const KidsCollection: React.FC = () => {
  return (
    <section className="kids-collection-section">
      <div className="kids-container">
        <div className="kids-content">
          <h4 className="kids-subtitle">Little Treasures</h4>
          <h2 className="kids-title">KIDS COLLECTION</h2>
          <p className="kids-description">
            Discover our enchanting collection of fine jewelry designed specially for the little ones. Crafted with exceptional care, safety, and a touch of magic for those precious early moments.
          </p>
          <button className="kids-btn" onClick={() => window.location.href = '#contact'}>Explore Collection</button>
        </div>
        
        <div className="kids-visuals">
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
        </div>
      </div>
    </section>
  );
};

export default KidsCollection;
