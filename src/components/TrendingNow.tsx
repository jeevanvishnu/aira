import React from 'react';
import './TrendingNow.css';

import auspiciousImg from '../assets/trending-auspicious.png';
import giftingImg from '../assets/trending-gifting.png';
import origamiImg from '../assets/trending-origami-v2.png';
import everydayImg from '../assets/trending-everyday.png';
import ScrollReveal from './ScrollReveal';

interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}

const trendingCategories: Category[] = [
  {
    id: 1,
    name: 'Auspicious Occasion',
    image: auspiciousImg,
    description: 'Heritage styles crafted for traditional celebrations'
  },
  {
    id: 2,
    name: 'Gifting Jewellery',
    image: giftingImg,
    description: 'Thoughtful designs to celebrate your loved ones'
  },
  {
    id: 3,
    name: 'Origami Edit',
    image: origamiImg,
    description: 'Contemporary geometry sculpted in fine metals'
  },
  {
    id: 4,
    name: 'Everyday Essentials',
    image: everydayImg,
    description: 'Minimalist statement items for daily sophistication'
  },
];

const TrendingNow: React.FC = () => {
  return (
    <section className="trending-section">
      <div className="trending-container">

        {/* Header Panel */}
        <ScrollReveal direction="up" className="trending-header">
          <span className="trending-eyebrow">POPULAR EDITS</span>
          <h2 className="trending-title">Trending Now</h2>
          <div className="trending-header-divider"></div>
          <p className="trending-subtitle">Finest designer jewellery pieces making waves this season.</p>
        </ScrollReveal>

        {/* Right Side: Full-bleed image cards */}
        <div className="trending-grid">
          {trendingCategories.map((category, index) => (
            <div key={category.id} className="category-card">
              <div className="category-image-container">
                <img src={category.image} alt={category.name} className="category-image" />
                <div className="category-overlay"></div>
              </div>
              <div className="category-info">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-desc">{category.description}</p>
                <div className="category-divider"></div>
                <span className="category-link">View Gallery</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrendingNow;
