import { useState, useEffect } from 'react';
import { Search, Heart, Menu, X } from 'lucide-react';
import Logo from '../assets/Logo_black_text.svg';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [wishlistCount] = useState(0);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle body scroll lock when menus are open
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isSearchOpen]);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} role="navigation">
        {/* Logo */}
        <a href="/" className="navbar-logo" onClick={closeMenus}>
          <img src={Logo} alt="Aira Jewels Logo" width="111" height="86" />
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar-menu navbar-menu--desktop">
          <li className="navbar-item" tabIndex={0}>
            <a href="#collections" className="navbar-link">Collections</a>
            {/* Dropdown Menu */}
            <ul className="navbar-dropdown">
              <li><a href="#rings">Rings</a></li>
              <li><a href="#necklaces">Necklaces</a></li>
              <li><a href="#bracelets">Bracelets</a></li>
              <li><a href="#earrings">Earrings</a></li>
            </ul>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#gallery" className="navbar-link">Gallery</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact</a>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="navbar-icons">
          <button 
            className="navbar-icon navbar-search" 
            aria-label="Search"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={24} strokeWidth={1.5} />
          </button>
          <a href="#wishlist" className="navbar-icon navbar-wishlist" aria-label="Wishlist">
            <Heart size={24} strokeWidth={1.5} className={wishlistCount > 0 ? 'heart-filled' : ''} />
            {wishlistCount > 0 && <span className="navbar-badge">{wishlistCount}</span>}
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
            <span className="mobile-menu-title">MENU</span>
          </div>
          
          <ul className="navbar-menu-mobile-list">
            <li className="mobile-has-submenu">
              <a href="#collections" onClick={closeMenus}>Collections</a>
              <ul className="navbar-submenu-mobile">
                <li><a href="#rings" onClick={closeMenus}>Rings</a></li>
                <li><a href="#necklaces" onClick={closeMenus}>Necklaces</a></li>
                <li><a href="#bracelets" onClick={closeMenus}>Bracelets</a></li>
                <li><a href="#earrings" onClick={closeMenus}>Earrings</a></li>
              </ul>
            </li>
            <li><a href="#about" onClick={closeMenus}>About Us</a></li>
            <li><a href="#gallery" onClick={closeMenus}>Gallery</a></li>
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

      {/* Search Modal */}
      <div className={`search-modal ${isSearchOpen ? 'active' : ''}`} id="searchModal">
        <button 
          className="search-modal-close" 
          aria-label="Close search"
          onClick={() => setIsSearchOpen(false)}
        >
          <X size={32} strokeWidth={1.5} />
        </button>
        <div className="search-modal-content">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search jewelry, collections..."
            autoFocus={isSearchOpen}
          />
          <div className="search-results">
            {/* Search results would go here */}
          </div>
        </div>
      </div>
    </>
  );
}
