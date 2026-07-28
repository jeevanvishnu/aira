import React from 'react';
import './KidsCollection.css';

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
          <button className="kids-btn">Explore Collection</button>
        </div>
        
        <div className="kids-visuals">
          <div className="kids-image-wrapper img-tall">
            <img 
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600" 
              alt="Kids jewelry collection" 
              className="kids-image"
            />
          </div>
          <div className="kids-image-wrapper img-square">
            <img 
              src="https://images.unsplash.com/photo-1596357395217-80de13130e92?auto=format&fit=crop&q=80&w=500" 
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
