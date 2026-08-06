import React, { useEffect, useRef } from 'react';
import './BabyCollection.css';
import ScrollReveal from './ScrollReveal';

import img1 from '../assetss/baby/AND00489.webp';
import img2 from '../assetss/baby/AND00490.webp';
import img3 from '../assetss/baby/AND00491.webp';
import img4 from '../assetss/baby/AND00516.webp';
import img5 from '../assetss/baby/AND00521.webp';
import img6 from '../assetss/baby/AND00525.webp';
import img7 from '../assetss/baby/AND00531.webp';
import img8 from '../assetss/baby/AND00550.webp';
import img9 from '../assetss/baby/AND00551.webp';
import img10 from '../assetss/baby/AND00564.webp';
import img11 from '../assetss/baby/AND00580.webp';
import img12 from '../assetss/baby/AND00649.webp';

const babyImages = [
  { id: 1, image: img1, name: 'Little Precious 1' },
  { id: 2, image: img2, name: 'Little Precious 2' },
  { id: 3, image: img3, name: 'Little Precious 3' },
  { id: 4, image: img4, name: 'Little Precious 4' },
  { id: 5, image: img5, name: 'Little Precious 5' },
  { id: 6, image: img6, name: 'Little Precious 6' },
  { id: 7, image: img7, name: 'Little Precious 7' },
  { id: 8, image: img8, name: 'Little Precious 8' },
  { id: 9, image: img9, name: 'Little Precious 9' },
  { id: 10, image: img10, name: 'Little Precious 10' },
  { id: 11, image: img11, name: 'Little Precious 11' },
  { id: 12, image: img12, name: 'Little Precious 12' }
];

const BabyCollection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clone items for infinite scroll effect if the user stops hovering
    // But CSS animation is usually enough. We will use a pure CSS marquee.
  }, []);

  return (
    <section className="bc-section">
      <div className="bc-container">
        <ScrollReveal direction="up" className="bc-header">
          <span className="bc-eyebrow">FOR THE LITTLE ONES</span>
          <h2 className="bc-title">Baby Collection</h2>
          <div className="bc-divider"></div>
          <p className="bc-subtitle">
            Cherish their earliest moments with delicate, safely-crafted jewelry designed especially for babies and toddlers.
          </p>
        </ScrollReveal>
      </div>

      <div className="bc-carousel-wrapper">
        <div className="bc-carousel-track" ref={carouselRef}>
          {/* Double the images for seamless infinite looping */}
          {[...babyImages, ...babyImages].map((item, index) => (
            <div key={`${item.id}-${index}`} className="bc-carousel-card">
              <div className="bc-image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="bc-image"
                  loading="lazy"
                />
                <div className="bc-overlay">
                  <span className="bc-explore-text">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BabyCollection;
