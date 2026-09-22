import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Header() {
  const whatsappUrl = `https://wa.me/91${companyInfo.phoneRaw}?text=${companyInfo.whatsappMessage}`;

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#hero" className="header-logo-container">
          <img 
            src="/images/sanware_st_logo.png" 
            alt="Sanware Integrated Solutions Logo" 
            className="header-logo-img"
          />
          <div className="header-brand-text">
            <span className="brand-title">SANWARE</span>
            <span className="brand-subtitle">INTEGRATED SOLUTIONS</span>
          </div>
        </a>

        <div className="header-actions">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-header-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={15} fill="currentColor" />
            <span>Whatsapp NOW!</span>
          </a>

          <a 
            href={`tel:${companyInfo.phoneTel}`} 
            className="btn-header-call"
            aria-label="Call Now"
          >
            <Phone size={15} fill="currentColor" />
            <span>Call NOW!</span>
          </a>
        </div>
      </div>
    </header>
  );
}
