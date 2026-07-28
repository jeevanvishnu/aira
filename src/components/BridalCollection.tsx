import React from 'react';
import './BridalCollection.css';

const BridalCollection: React.FC = () => {
  return (
    <section className="bridal-section">
      <div className="bridal-container">
        
        {/* Text Block - Left Side */}
        <div className="bridal-text-block">
          <h4 className="bridal-subtitle">The Bridal Edit</h4>
          <h2 className="bridal-title">EVERLASTING ELEGANCE</h2>
          <div className="bridal-divider"></div>
          <p className="bridal-description">
            Celebrate your most precious moments with masterpieces crafted for eternity. Our exclusive bridal collection meticulously blends traditional heritage with contemporary design, ensuring you shine with unmatched brilliance on your special day.
          </p>
          <button className="bridal-btn">Explore The Collection</button>
        </div>

        {/* Image Grid - Right Side */}
        <div className="bridal-grid">
          {/* Main Tall Image */}
          <div className="bridal-img-wrapper tall-img">
            <img 
              src="https://images.unsplash.com/photo-1601121853354-e6e866bd22fa?auto=format&fit=crop&q=80&w=800" 
              alt="Bridal Jewelry" 
              className="bridal-img" 
            />
          </div>
          
          {/* Stacked Smaller Images */}
          <div className="bridal-stacked-imgs">
            <div className="bridal-img-wrapper small-img">
              <img 
                src="https://images.unsplash.com/photo-1595844730298-b960fad9736c?auto=format&fit=crop&q=80&w=600" 
                alt="Bridal Necklace Close-up" 
                className="bridal-img" 
              />
            </div>
            <div className="bridal-img-wrapper small-img">
              <img 
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600" 
                alt="Bridal Rings" 
                className="bridal-img" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BridalCollection;
