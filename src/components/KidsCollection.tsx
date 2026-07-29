import React, { useState } from 'react';
import './KidsCollection.css';
import necklaceImg from "../assets/Firefly_Gemini Flash_A close-up, high-fashion flat lay of a delicate 18k gold star pendant necklace design 174694.png";
import braceletImg from "../assets/Firefly_Gemini Flash_ A beautiful macro close-up of a child's delicate wrist wearing a tiny 18k gold link  174694.png";
import earringsImg from "../assets/Firefly_Gemini Flash_ A macro shot of tiny, cute 18k gold safety stud earrings shaped like little flowers. 174694.png";
import lifestyleImg from "../assets/Firefly_Gemini Flash_A tender lifestyle photograph of a toddler's hands playing with a smooth wooden toy,  174694.png";
import kidsTall from '../assets/kids-collection-tall.png';
import kidsSquare from '../assets/kids-collection-square.png';
import ScrollReveal from './ScrollReveal';

// Mock data for the tabs
const kidsCategories = [
  {
    id: 'necklaces',
    label: 'Sweet Necklaces',
    title: 'Delicate Star Necklaces',
    description: 'Discover our enchanting collection of fine necklaces designed specially for the little ones. Crafted with exceptional care, safety, and a touch of magic for those precious early moments.',
    specs: ['18k Gold Plated', 'Adjustable Chain', 'Hypoallergenic'],
    images: { main: necklaceImg, secondary: kidsSquare }
  },
  {
    id: 'bracelets',
    label: 'Little Bracelets',
    title: 'Charming Baby Bracelets',
    description: 'Adorn their little wrists with our secure and charming bracelets. Designed for comfort with smooth links and sturdy clasps to withstand active play without compromising on elegance.',
    specs: ['Sterling Silver', 'Secure Clasp', 'Smooth Edges'],
    images: { main: braceletImg, secondary: lifestyleImg }
  },
  {
    id: 'earrings',
    label: 'Safety Studs',
    title: 'Comfortable Safety Studs',
    description: 'Perfect for their first piercings. Our safety studs feature screw-on flat backs for maximum comfort during sleep and play, ensuring their delicate ears are always protected.',
    specs: ['Nickel-free', 'Screw-back', 'Rounded Design'],
    images: { main: earringsImg, secondary: kidsTall }
  }
];

const KidsCollection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(kidsCategories[0]);
  const [isFading, setIsFading] = useState(false);

  const handleTabChange = (category: typeof kidsCategories[0]) => {
    if (category.id === activeTab.id) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(category);
      setIsFading(false);
    }, 300); // match css transition
  };

  return (
    <section className="kids-collection-section" id="kids-collection">
      <div className="kids-bg-glow"></div>
      <div className="kids-container">
        
        {/* Left Side: Interactive Content */}
        <ScrollReveal direction="left" className="kids-content">
          <span className="kids-eyebrow">LITTLE TREASURES</span>
          <h2 className="kids-title">Kids Collection</h2>
          <div className="kids-divider"></div>
          
          <div className="kids-tabs">
            {kidsCategories.map(cat => (
              <button
                key={cat.id}
                className={`kids-tab-btn ${activeTab.id === cat.id ? 'active' : ''}`}
                onClick={() => handleTabChange(cat)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className={`kids-tab-content ${isFading ? 'fade-out' : 'fade-in'}`}>
            <h3 className="kids-tab-title">{activeTab.title}</h3>
            <p className="kids-description">{activeTab.description}</p>
            
            <ul className="kids-specs">
              {activeTab.specs.map((spec, i) => (
                <li key={i}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  {spec}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-gold kids-btn">
              Explore {activeTab.label}
            </a>
          </div>
        </ScrollReveal>

        {/* Right Side: Dynamic Visuals */}
        <ScrollReveal direction="right" className="kids-visuals">
          <div className={`kids-visuals-inner ${isFading ? 'fade-out' : 'fade-in'}`}>
            <div className="kids-image-wrapper img-tall">
              <img
                src={activeTab.images.main}
                alt={activeTab.title}
                className="kids-image"
              />
            </div>
            <div className="kids-image-wrapper img-square">
              <img
                src={activeTab.images.secondary}
                alt={`${activeTab.title} detail`}
                className="kids-image"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Trust Badges */}
      <ScrollReveal direction="up" className="kids-trust-badges">
        <div className="trust-badge">
          <div className="trust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h4>Hypoallergenic</h4>
          <p>18k gold & nickel-free, perfect for sensitive skin.</p>
        </div>
        <div className="trust-badge">
          <div className="trust-icon">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h4>Smooth Edges</h4>
          <p>Carefully rounded designs to prevent any snagging.</p>
        </div>
        <div className="trust-badge">
          <div className="trust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          </div>
          <h4>Secure Locks</h4>
          <p>Sturdy clasps and screw-backs built for active play.</p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default KidsCollection;

