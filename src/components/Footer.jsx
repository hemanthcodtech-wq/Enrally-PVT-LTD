import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="enrally-footer">
      <div className="container footer-grid">
        {/* Col 1: Brand & CIN */}
        <div className="footer-col col-brand">
          <Link to="/" className="enrally-logo footer-logo-box">
            <img src="/logo.png" alt="ENRALLY (OPC) PVT. LTD." className="footer-brand-img" />
          </Link>
          <p className="footer-company-desc">
            Reliable manpower supply, comprehensive facility management, industrial services and project support for businesses across India.
          </p>
          <div className="footer-cin-tag">
            <strong>CIN:</strong> U78300KA2024OPC183145
          </div>
        </div>

        {/* Col 2: Services */}
        <div className="footer-col">
          <h4 className="footer-head">Services</h4>
          <ul className="footer-list">
            <li><Link to="/services/hr-manpower">HR & Human Resources</Link></li>
            <li><Link to="/services/cleaning-housekeeping">Cleaning & Housekeeping</Link></li>
            <li><Link to="/services/security-surveillance">Security & Surveillance</Link></li>
            <li><Link to="/services/solar-manpower">Solar Manpower</Link></li>
            <li><Link to="/services/civil-construction">Civil & Construction</Link></li>
            <li><Link to="/services">MEP & Government Tenders</Link></li>
          </ul>
        </div>

        {/* Col 3: Quick Navigation */}
        <div className="footer-col">
          <h4 className="footer-head">Quick Links</h4>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/why-enrally">Why Enrally</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/gallery">Gallery & Field Works</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Col 4: Registered Office */}
        <div className="footer-col col-office">
          <h4 className="footer-head">Registered Office</h4>
          <div className="footer-contact-rows">
            <p className="f-row">
              <MapPin size={16} />
              <span>Door No 47, Ward No 3, M P Prathiba Nagara, Hagaribommanahalli, Bellary, Karnataka - 583212</span>
            </p>
            <p className="f-row">
              <Phone size={16} />
              <a href="tel:+918277611643">+91 82776 11643</a>
            </p>
            <p className="f-row">
              <Mail size={16} />
              <a href="mailto:enrallyopcpvtltd@gmail.com">enrallyopcpvtltd@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-flex">
          <p>© {new Date().getFullYear()} ENRALLY (OPC) PVT. LTD. All rights reserved.</p>
          <div className="footer-legals">
            <Link to="/about">Privacy Policy</Link>
            <Link to="/about">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
