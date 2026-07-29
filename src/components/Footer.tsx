import React from 'react';
import './Footer.css';
import logoBlack from '../assets/Logo_black_text.svg';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="tel:+919999999999" aria-label="Phone Call">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col-links">
          <h4 className="footer-title">Explore</h4>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">Our Story</a>
            <a href="#collections">Collections</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-col-contact">
          <h4 className="footer-title">Boutique Location</h4>
          <div className="contact-address">
            <p>8th Street, Al Ghuwair</p>
            <p>Near Rolla Square Park</p>
            <p>Rolla - 97629, Sharjah - UAE</p>
          </div>
          
          <div className="contact-details-footer">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-contact-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +971 50 184 7916
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-contact-icon"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <a href="mailto:info@airajewels.ae">info@airajewels.ae</a>
            </p>
          </div>
        </div>
        
      </div>

      {/* Bottom Bar */}
      <div className="footer-classic-bottom">
        <p>&copy; {new Date().getFullYear()} Aira Jewels. All rights reserved.</p>
        <div className="footer-bottom-links">
          <button className="footer-scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            Back to Top ↑
          </button>
        </div>
      </div>

      {/* Floating WhatsApp FAB */}
      <a 
        href="https://wa.me/971501847916" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M12.012 2C6.485 2 2 6.485 2 12.012c0 1.767.46 3.427 1.267 4.888L2 22l5.244-1.378c1.411.77 3.018 1.21 4.768 1.21 5.527 0 10.012-4.485 10.012-10.012C22.024 6.485 17.537 2 12.012 2zm6.059 13.916c-.244.686-1.22 1.258-1.688 1.341-.456.082-.916.14-2.883-.637-2.52-.992-4.122-3.553-4.244-3.716-.123-.162-.99-1.31-.99-2.5 0-1.189.626-1.774.846-2.013.22-.24.472-.3.626-.3.155 0 .31.002.443.012.146.01.342-.054.536.41.199.479.679 1.656.737 1.777.059.12.099.261.018.423-.081.162-.121.261-.244.409-.123.147-.258.327-.367.439-.123.123-.252.257-.107.505.146.248.653 1.077 1.401 1.745.966.86 1.778 1.127 2.03.123.252-.104.58-.248.826-.371.248-.124.496-.104.743-.01.248.094 1.564.738 1.83.87.266.133.443.199.509.31.066.113.066.653-.178 1.339z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;

