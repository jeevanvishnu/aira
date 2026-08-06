import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';
import ScrollReveal from './ScrollReveal';

const CallToAction: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <ScrollReveal direction="up">
          <span className="cta-eyebrow">EXPERIENCE AIRA</span>
          <h2 className="cta-title">Ready to Find Your Perfect Piece?</h2>
          <div className="cta-divider"></div>
          <p className="cta-description">
            Book a personalized consultation with our experts or explore our exquisite collections to discover jewelry crafted for eternity.
          </p>
          <div className="cta-btn-wrapper">
            <Link to="/contact" className="btn-gold">
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CallToAction;
