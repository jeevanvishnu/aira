import React from 'react';
import './Footer.css';
import logoBlack from '../assets/Logo_black_text.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer-classic">
      <div className="footer-classic-container">
        
        {/* Column 1: Brand & Socials */}
        <div className="footer-col-brand">
          <img src={logoBlack} alt="Aira Jewels" className="footer-logo" />
          <p className="footer-description">
            Elevating everyday moments with timeless artistry and pure gold craftsmanship. Crafted for eternity.
          </p>
          <div className="footer-social-icons">
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 5 13.5 8 13.5c-1.5-.3-3-1.4-3-3 1.1.2 2.6 2 4.4 2.2-1.5-3.5 1-7.5 4.5-6.5 1.5-.1 2.9.4 4 1.3 1.2-.2 2.3-.7 3.3-1.3-.4 1.2-1.2 2.1-2 2.7.9-.1 1.7-.3 2.5-.7z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col-links">
          <h4>Explore</h4>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Collection</a>
            <a href="#">Butterfly Kids</a>
            <a href="#">Contact</a>
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-col-contact">
          <h4>Boutique Location</h4>
          <div className="contact-address">
            <p>8th street, Al ghuwair</p>
            <p>Near rolla square park</p>
            <p>Rolla - 97629, Sharjah - UAE</p>
          </div>
          
          <div className="contact-details">
            <p><strong>P:</strong> +971 50 184 7916  |  +971 65 64 6425</p>
            <p><strong>E:</strong> <a href="mailto:info@airajewels.ae">info@airajewels.ae</a></p>
          </div>
        </div>
        
      </div>

      {/* Bottom Bar */}
      <div className="footer-classic-bottom">
        <p>&copy; {new Date().getFullYear()} Aira Jewels. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
