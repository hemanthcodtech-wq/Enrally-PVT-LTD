import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const phoneNumber = '+918277611643';
  const whatsappNumber = '918277611643';
  const defaultMessage = encodeURIComponent('Hello Enrally team, I would like to enquire about your facility management and manpower services.');

  return (
    <aside className="floating-quick-actions" aria-label="Quick Connect Actions">
      {/* WhatsApp Action Button with Dynamic Aura Wave */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn whatsapp-btn"
        aria-label="Chat with Enrally on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <span className="floating-btn-pulse-wave"></span>
        <span className="floating-btn-pulse-wave secondary"></span>
        <MessageCircle size={26} className="floating-icon-svg" />
        <span className="floating-label">Chat on WhatsApp</span>
      </a>

      {/* Direct Call Action Button with Dynamic Pulse Waves */}
      <a 
        href={`tel:${phoneNumber}`} 
        className="floating-btn call-btn"
        aria-label="Call Enrally 24/7 Helpline"
        title="Call +91 82776 11643"
      >
        <span className="floating-btn-pulse-wave call-wave"></span>
        <span className="floating-btn-pulse-wave call-wave secondary"></span>
        <Phone size={24} className="floating-icon-svg call-icon-wiggle" />
        <span className="floating-label">Call 24/7 Helpline</span>
      </a>
    </aside>
  );
}
