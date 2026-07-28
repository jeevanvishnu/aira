import React from 'react';
import './TrendingNow.css';

import auspiciousImg from '../assets/trending-auspicious.png';
import giftingImg from '../assets/trending-gifting.png';
import origamiImg from '../assets/trending-origami-v2.png';
import everydayImg from '../assets/trending-everyday.png';

interface Category {
  id: number;
  name: string;
  image: string;
}

const trendingCategories: Category[] = [
  {
    id: 1,
    name: 'Auspicious Occasion',
    image: auspiciousImg,
  },
  {
    id: 2,
    name: 'Gifting Jewellery',
    image: giftingImg,
  },
  {
    id: 3,
    name: 'Origami Edit',
    image: origamiImg,
  },
  {
    id: 4,
    name: 'Everyday Essentials',
    image: everydayImg,
  },
];

const TrendingNow: React.FC = () => {
  return (
    <section className="trending-section">
      <div className="trending-container">
        <div className="trending-header">
          <h2 className="trending-title">Trending Now</h2>
          <p className="trending-subtitle">Jewellery pieces everyone’s eyeing right now</p>
        </div>
        
        <div className="trending-grid">
          {trendingCategories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image-container">
                <img src={category.image} alt={category.name} className="category-image" />
              </div>
              <div className="category-info">
                <h3 className="category-name">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
