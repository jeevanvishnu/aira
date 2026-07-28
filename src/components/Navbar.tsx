import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../assets/Logo_black_text.svg';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll class toggle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle body scroll lock when menus are open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : 'navbar--transparent'}`} role="navigation">
        {/* Desktop Left Menu */}
        <ul className="navbar-menu navbar-menu--left navbar-menu--desktop">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">Our Story</a>
          </li>
        </ul>

        {/* Center Logo */}
        <a href="/" className="navbar-logo" onClick={closeMenus}>
          <img src={Logo} alt="Aira Jewels Logo" width="110" height="85" />
        </a>

        {/* Desktop Right Menu */}
        <ul className="navbar-menu navbar-menu--right navbar-menu--desktop">
          <li className="navbar-item">
            <a href="#collections" className="navbar-link">Collections</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact Us</a>
          </li>
        </ul>

        {/* Header Actions */}
        <div className="navbar-actions">
          <a href="tel:+919999999999" className="navbar-action-btn navbar-action-btn--desktop" aria-label="Call Us">
            <Phone size={18} strokeWidth={1.5} />
          </a>
          <button 
            className="navbar-toggle navbar-toggle--mobile" 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`navbar-menu-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="navbar-menu-mobile-header">
            <button 
              className="navbar-close" 
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} strokeWidth={1.5} />
            </button>
            <span className="mobile-menu-title">AIRA JEWELS</span>
          </div>
          
          <ul className="navbar-menu-mobile-list">
            <li><a href="#home" onClick={closeMenus}>Home</a></li>
            <li><a href="#about" onClick={closeMenus}>Our Story</a></li>
            <li><a href="#collections" onClick={closeMenus}>Collections</a></li>
            <li><a href="#contact" onClick={closeMenus}>Contact Us</a></li>
          </ul>
          
          <div className="navbar-social">
            <span className="social-title">CONNECT WITH US</span>
            <div className="social-links-wrapper">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" onClick={closeMenus}>Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" onClick={closeMenus}>Facebook</a>
              <a href="tel:+919999999999" onClick={closeMenus}>Call Showroom</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

