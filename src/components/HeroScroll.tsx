import React, { useState, useEffect } from 'react';
import './HeroScroll.css';
import image1 from '../assets/Firefly_Gemini Flash.webp';
import image2 from '../assets/Firefly_Gemini Flash__ An elegant flat-lay composition on a pristine white marble surface- _a delicate go 888705.webp';
import image3 from '../assets/Firefly_Gemini Flash_ radiant Indian bride adorned in a full traditional bridal jewellery set — _heavy gol 854521.webp';

const slides = [
  {
    image: image1,
    tagline: "ELEGANT CRAFTSMANSHIP",
    title: "Where Timeless Beauty Meets Modern Artistry",
    description: "Discover exquisitely crafted fine jewelry designed to celebrate your unique elegance, every single day.",
    link: "#collections"
  },
  {
    image: image2,
    tagline: "THE BRIDAL SAGA",
    title: "Where Two Stories Become One Beautiful Journey",
    description: "Exquisite bridal masterpieces crafted with pure gold, diamonds, and heritage polki wedding stones.",
    link: "#collections"
  },
  {
    image: image3,
    tagline: "EVERYDAY LUXURY",
    title: "A Delicate Medley of Desire and Daily Sparkle",
    description: "Charming rings, necklaces, and bangles designed to add the perfect touch of modern luxury to your everyday look.",
    link: "#collections"
  }
];

const HeroScroll: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`hero-slide ${index === current ? 'hero-slide--active' : ''}`}
        >
          <div className="hero-background-container">
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-background-image"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
            <div className="hero-gradient-overlay"></div>
          </div>
          
          <div className="hero-content">
            <span className="hero-tagline">{slide.tagline}</span>
            <h1 className="hero-headline">
              {slide.title}
            </h1>
            <p className="hero-description">
              {slide.description}
            </p>
            
            <div className="hero-cta">
              <a href={slide.link} className="btn-hero">
                Explore Collections
                <span className="btn-hero-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination indicators */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button 
            key={index} 
            className={`hero-dot ${index === current ? 'hero-dot--active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroScroll;

