import React from 'react';
import { Menu, Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Header({ currentView, onNavigate, onToggleMenu }) {
  const whatsappUrl = `https://wa.me/91${companyInfo.phoneRaw}?text=${companyInfo.whatsappMessage}`;

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand Logo & Name */}
        <div 
          className="header-logo-container" 
          onClick={() => onNavigate('home')}
          role="button"
          tabIndex={0}
        >
          <img 
            src="/images/sanware_st_logo.png" 
            alt="Sanware Integrated Solutions Logo" 
            className="header-logo-img"
          />
          <div className="header-brand-text">
            <span className="brand-title">SANWARE</span>
            <span className="brand-subtitle">INTEGRATED SOLUTIONS</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="header-desktop-nav">
          <button 
            className={`desktop-nav-link ${currentView === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
          <button 
            className={`desktop-nav-link ${currentView === 'services' ? 'active' : ''}`}
            onClick={() => onNavigate('services')}
          >
            Our Services
          </button>
          <button 
            className={`desktop-nav-link ${currentView === 'industries' ? 'active' : ''}`}
            onClick={() => onNavigate('industries')}
          >
            Industries
          </button>
          <button 
            className={`desktop-nav-link ${currentView === 'about' ? 'active' : ''}`}
            onClick={() => onNavigate('about')}
          >
            About Us
          </button>
          <button 
            className={`desktop-nav-link ${currentView === 'contact' ? 'active' : ''}`}
            onClick={() => onNavigate('contact')}
          >
            Contact Us
          </button>
        </nav>

        {/* Right Actions: WhatsApp, Call & Hamburger Button */}
        <div className="header-actions">
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="header-btn-quick whatsapp"
            title="Chat on WhatsApp"
            aria-label="WhatsApp"
          >
            <MessageCircle size={17} />
            <span className="header-btn-label">WhatsApp</span>
          </a>

          <a 
            href={`tel:${companyInfo.phoneTel}`} 
            className="header-btn-quick call"
            title="Call Support"
            aria-label="Call Now"
          >
            <Phone size={16} />
            <span className="header-btn-label">Call Now</span>
          </a>

          {/* Hamburger toggle button matching reference recording */}
          <button 
            className="header-hamburger-btn"
            onClick={onToggleMenu}
            aria-label="Open Navigation Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
