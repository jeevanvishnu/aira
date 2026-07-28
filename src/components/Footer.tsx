import React from 'react';
import './Footer.css';
import logoBlack from '../assets/Logo_black_text.svg';
import { ArrowRight, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      
      {/* Main Footer Links */}
      <div className="footer-main">
        
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <img src={logoBlack} alt="Aira Jewels" className="footer-logo" />
          <p className="footer-brand-desc">
            Crafting timeless elegance and modern artistry. Aira Jewels brings you masterpieces designed to be cherished for generations.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 5 13.5 8 13.5c-1.5-.3-3-1.4-3-3 1.1.2 2.2.2 3.3 0C5 8.5 5 6 5 6c1.1 1.2 2.6 2 4.4 2.2-1.5-3.5 1-7.5 4.5-6.5 1.5-.1 2.9.4 4 1.3 1.2-.2 2.3-.7 3.3-1.3-.4 1.2-1.2 2.1-2 2.7.9-.1 1.7-.3 2.5-.7z"/></svg>
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Rings & Bands</a></li>
            <li><a href="#">Necklaces & Pendants</a></li>
            <li><a href="#">Bridal Collection</a></li>
            <li><a href="#">Kids Collection</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Ring Size Guide</a></li>
            <li><a href="#">Jewelry Care</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Boutiques</h4>
          <ul className="boutique-info">
            <li className="location-item">
              <MapPin size={16} strokeWidth={1.5} className="location-icon" />
              <span>Sharjah, UAE</span>
            </li>
            <li>8th Street, Al Ghuwair</li>
            <li>Near Rolla Square Park</li>
            <li>+971 50 184 7916</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aira Jewels. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
