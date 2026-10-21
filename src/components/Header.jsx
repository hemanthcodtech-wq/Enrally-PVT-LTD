import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Menu, X, PhoneCall, Phone, MessageCircle, ChevronDown, Users, ShieldCheck, 
  Sparkles, Wrench, Sun, Building2, ArrowRight 
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownTimeoutRef = React.useRef(null);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 120);
  };

  const closeMenu = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const servicesList = [
    { name: 'HR & Manpower Supply', path: '/services/hr-manpower', icon: <Users size={16} /> },
    { name: 'Cleaning & Housekeeping', path: '/services/cleaning-housekeeping', icon: <Sparkles size={16} /> },
    { name: 'Security & Surveillance', path: '/services/security-surveillance', icon: <ShieldCheck size={16} /> },
    { name: 'Civil & Construction Maintenance', path: '/services/civil-construction', icon: <Wrench size={16} /> },
    { name: 'Solar Manpower & Upkeep', path: '/services/solar-manpower', icon: <Sun size={16} /> },
  ];

  return (
    <header className={`enrally-navbar ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container nav-content-wrapper">
        {/* Brand Logo with subtle hover lift */}
        <Link to="/" className="enrally-logo" onClick={closeMenu} aria-label="Enrally Home">
          <img src="/logo.png" alt="ENRALLY (OPC) PVT. LTD." className="header-brand-img" />
        </Link>

        {/* Center Nav Links with Left-to-Right Animated Underlines */}
        <nav 
          id="main-navigation"
          className={`nav-links-menu ${mobileMenuOpen ? 'open' : ''}`}
          aria-label="Main Navigation"
        >
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => `enrally-nav-item ${isActive ? 'active' : ''}`} 
            onClick={closeMenu}
            style={{ '--nav-idx': 0 }}
          >
            Home
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => `enrally-nav-item ${isActive ? 'active' : ''}`} 
            onClick={closeMenu}
            style={{ '--nav-idx': 1 }}
          >
            About Us
          </NavLink>

          {/* Services with Smooth Mega/Dropdown Menu */}
          <div 
            className={`nav-dropdown-wrapper ${servicesDropdownOpen ? 'open' : ''}`}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
            style={{ '--nav-idx': 2 }}
          >
            <NavLink 
              to="/services" 
              className={({ isActive }) => `enrally-nav-item has-dropdown ${isActive ? 'active' : ''}`}
              onClick={(e) => {
                if (window.innerWidth <= 992) {
                  // In mobile view allow toggle
                  setServicesDropdownOpen(!servicesDropdownOpen);
                } else {
                  closeMenu();
                }
              }}
            >
              <span>Services</span>
              <ChevronDown size={14} className="dropdown-arrow-icon" />
            </NavLink>

            {/* Smooth dropdown menu */}
            <div className="services-dropdown-menu">
              <div className="dropdown-inner-grid">
                <div className="dropdown-header-banner">
                  <span className="dd-tag">Core Disciplines</span>
                  <p>Enterprise Manpower & Facility Solutions</p>
                </div>
                <div className="dropdown-items-list">
                  {servicesList.map((srv, sIdx) => (
                    <Link 
                      key={sIdx} 
                      to={srv.path} 
                      className="dropdown-link-item"
                      onClick={closeMenu}
                    >
                      <span className="dd-icon-box">{srv.icon}</span>
                      <span className="dd-text">{srv.name}</span>
                      <ArrowRight size={13} className="dd-arrow" />
                    </Link>
                  ))}
                </div>
                <Link to="/services" className="dropdown-view-all" onClick={closeMenu}>
                  <span>Explore All Services</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <NavLink 
            to="/why-enrally" 
            className={({ isActive }) => `enrally-nav-item ${isActive ? 'active' : ''}`} 
            onClick={closeMenu}
            style={{ '--nav-idx': 3 }}
          >
            Why Enrally
          </NavLink>

          <NavLink 
            to="/testimonials" 
            className={({ isActive }) => `enrally-nav-item ${isActive ? 'active' : ''}`} 
            onClick={closeMenu}
            style={{ '--nav-idx': 4 }}
          >
            Testimonials
          </NavLink>

          <NavLink 
            to="/gallery" 
            className={({ isActive }) => `enrally-nav-item ${isActive ? 'active' : ''}`} 
            onClick={closeMenu}
            style={{ '--nav-idx': 5 }}
          >
            Gallery
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => `enrally-nav-item ${isActive ? 'active' : ''}`} 
            onClick={closeMenu}
            style={{ '--nav-idx': 6 }}
          >
            Contact
          </NavLink>

          {/* Mobile Only Direct Call & Quote buttons */}
          <div className="mobile-menu-actions" style={{ '--nav-idx': 7 }}>
            <a href="tel:+918277611643" className="header-phone-badge mobile-only" onClick={closeMenu}>
              <PhoneCall size={16} className="phone-pulse-icon" />
              <span>+91 82776 11643</span>
            </a>
            <Link to="/contact" className="btn-cyan-header mobile-nav-btn" onClick={closeMenu}>
              <span>Request a Quote</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </nav>

        {/* Header Right Action: Phone Helpline + Single Request Quote Button */}
        <div className="nav-right-area">
          <a href="tel:+918277611643" className="header-phone-badge" aria-label="Call Enrally 24/7 Helpline">
            <span className="phone-icon-circle">
              <PhoneCall size={15} />
            </span>
            <div className="phone-text-block">
              <span className="phone-label">24/7 Helpline</span>
              <strong className="phone-number">+91 82776 11643</strong>
            </div>
          </a>

          <Link to="/contact" className="btn-cyan-header">
            <span>Request a Quote</span>
            <ArrowRight size={15} className="btn-arrow-icon" />
          </Link>

          {/* Mobile Beside-Menu Action Icons (WhatsApp & Call) */}
          <div className="mobile-header-actions">
            <a 
              href="https://wa.me/918277611643?text=Hello%20Enrally%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mobile-header-icon-btn whatsapp" 
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
              <span className="mobile-icon-ripple"></span>
            </a>

            <a 
              href="tel:+918277611643" 
              className="mobile-header-icon-btn call" 
              aria-label="Call +91 82776 11643"
            >
              <Phone size={17} />
              <span className="mobile-icon-ripple"></span>
            </a>
          </div>

          <button 
            className="mobile-hamburger" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="main-navigation"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
}


