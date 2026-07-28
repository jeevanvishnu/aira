import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logo_black_text.svg';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className="navbar" role="navigation">
        {/* Logo */}
        <a href="/" className="navbar-logo" onClick={closeMenus}>
          <img src={Logo} alt="Aira Jewels Logo" width="111" height="86" />
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar-menu navbar-menu--desktop">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#collections" className="navbar-link">Collections</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact</a>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="navbar-icons">
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
            <span className="mobile-menu-title">MENU</span>
          </div>
          
          <ul className="navbar-menu-mobile-list">
            <li><a href="#home" onClick={closeMenus}>Home</a></li>
            <li><a href="#about" onClick={closeMenus}>About Us</a></li>
            <li><a href="#collections" onClick={closeMenus}>Collections</a></li>
            <li><a href="#contact" onClick={closeMenus}>Contact</a></li>
          </ul>
          <div className="navbar-social">
            <span className="social-title">SOCIAL LINKS</span>
            <div className="social-links-wrapper">
              <a href="#" onClick={closeMenus}>Instagram</a>
              <a href="#" onClick={closeMenus}>Facebook</a>
              <a href="#" onClick={closeMenus}>Pinterest</a>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}
