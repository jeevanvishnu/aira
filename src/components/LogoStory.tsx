import React from 'react';
import './LogoStory.css';
import logoMark from '../assets/logo-mark.svg';
import ScrollReveal from './ScrollReveal';

const LogoStory: React.FC = () => {
  return (
    <section className="logo-story-section">
      <div className="logo-story-pattern-overlay"></div>
      <div className="logo-story-container">
        <ScrollReveal direction="up" duration={1.2}>
          <div className="logo-story-content">
            <div className="logo-story-mark-wrapper">
              <img src={logoMark} alt="Aira Jewels Logo Symbol" className="logo-story-mark" />
            </div>
            
            <h2 className="logo-story-title">Why this logo</h2>
            
            <div className="logo-story-divider"></div>
            
            <div className="logo-story-text">
              <p>
                Our logo is a thoughtfully crafted symbol that conveys a warm and inviting welcome. 
                At its heart lies the folded hand gesture, subtly formed using the first letter of our name, "A", 
                symbolizing respect, unity, and a heartfelt connection. This gesture flows seamlessly into a radiant glow, 
                representing the bond between us and our customers — a relationship built on trust, warmth, and shared values.
              </p>
              
              <p>
                Designed using negative space, the logo balances simplicity with sophistication, encouraging a second glance 
                and deeper appreciation. The continuous, flowing line signifies the breadth and diversity of our offerings — 
                a unified thread that ties together a rich collection of experiences, styles, and ideas.
              </p>
              
              <p>
                This logo is not just a visual mark; it's a story — one of connection, elegance, and thoughtful design.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LogoStory;
