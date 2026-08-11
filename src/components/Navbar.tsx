import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../assets/Logo_black_text.svg';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
      <nav className={`navbar ${(!isHomePage || isScrolled) ? 'navbar--scrolled' : 'navbar--transparent'}`} role="navigation">
        {/* Desktop Left Menu */}
        <ul className="navbar-menu navbar-menu--left navbar-menu--desktop">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/shop" className="navbar-link">Shop</Link>
          </li>
          <li className="navbar-item">
            <Link to="/#about" className="navbar-link">Our Story</Link>
          </li>
        </ul>

        {/* Center Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenus}>
          <img src={Logo} alt="Aira Jewels Logo" width="110" height="85" />
        </Link>

        {/* Desktop Right Menu */}
        <ul className="navbar-menu navbar-menu--right navbar-menu--desktop">
          <li className="navbar-item">
            <Link to="/#collections" className="navbar-link">Collections</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact Us</Link>
          </li>
        </ul>

        {/* Header Actions */}
        <div className="navbar-actions">
          <a href="tel:+971501847916" className="navbar-action-btn navbar-action-btn--desktop" aria-label="Call Us">
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
            <img src={Logo} alt="Aira Jewels Logo" width="90" className="mobile-menu-logo" />
          </div>
          
          <ul className="navbar-menu-mobile-list">
            <li><Link to="/" onClick={closeMenus}>Home</Link></li>
            <li><Link to="/shop" onClick={closeMenus}>Shop All Jewellery</Link></li>
            <li><Link to="/#about" onClick={closeMenus}>Our Story</Link></li>
            <li><Link to="/#collections" onClick={closeMenus}>Collections</Link></li>
            <li><Link to="/contact" onClick={closeMenus}>Contact Us</Link></li>
          </ul>
          
          <div className="navbar-social">
            <span className="social-title">CONNECT WITH US</span>
            <div className="social-links-wrapper">
              <a href="https://www.instagram.com/airajewels.uae/" target="_blank" rel="noopener noreferrer" onClick={closeMenus}>Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61577557102396" target="_blank" rel="noopener noreferrer" onClick={closeMenus}>Facebook</a>
              <a href="https://www.tiktok.com/@airajewels?_t=ZN-8yQLIcJXMko&_r=1" target="_blank" rel="noopener noreferrer" onClick={closeMenus}>TikTok</a>
              <a href="https://in.pinterest.com/airajewels916/" target="_blank" rel="noopener noreferrer" onClick={closeMenus}>Pinterest</a>
              <a href="https://wa.me/971501847916" target="_blank" rel="noopener noreferrer" onClick={closeMenus}>WhatsApp</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

