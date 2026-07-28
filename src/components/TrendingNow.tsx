import React from 'react';
import './TrendingNow.css';

interface Category {
  id: number;
  name: string;
  image: string;
}

const trendingCategories: Category[] = [
  {
    id: 1,
    name: 'Auspicious Occasion',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b4549e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Gifting Jewellery',
    image: 'https://images.unsplash.com/photo-1599643478524-fb66f7220088?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Origami Edit',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'Everyday Essentials',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&q=80&w=800',
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
