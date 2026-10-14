import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const phoneNumber = '+918277611643';
  const whatsappNumber = '918277611643';
  const defaultMessage = encodeURIComponent('Hello Enrally team, I would like to enquire about your facility management and manpower services.');

  return (
    <div className="floating-quick-actions">
      {/* WhatsApp Action Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn whatsapp-btn"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="floating-label">WhatsApp</span>
      </a>

      {/* Direct Call Action Button */}
      <a 
        href={`tel:${phoneNumber}`} 
        className="floating-btn call-btn"
        aria-label="Call Enrally Directly"
        title="Call +91 82776 11643"
      >
        <Phone size={24} />
        <span className="floating-label">Call Now</span>
      </a>
    </div>
  );
}
