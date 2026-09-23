import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { referenceServices } from '../data/services';

export default function NavDrawer({ isOpen, onClose, currentView, onNavigate }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  if (!isOpen) return null;

  const handleNavClick = (view, sectionId = null) => {
    onNavigate(view, sectionId);
    onClose();
  };

  const whatsappUrl = `https://wa.me/91${companyInfo.phoneRaw}?text=${companyInfo.whatsappMessage}`;

  return (
    <div className="nav-drawer-overlay" onClick={onClose}>
      <aside 
        className="nav-drawer" 
        onClick={(e) => e.stopPropagation()}
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header matching Frame 10 */}
        <div className="drawer-header">
          <div className="drawer-brand" onClick={() => handleNavClick('home')}>
            <img 
              src="/images/sanware_st_logo.png" 
              alt="Sanware Integrated Solutions Logo" 
              className="drawer-logo"
            />
            <div className="drawer-brand-text">
              <span className="drawer-brand-title">SANWARE</span>
              <span className="drawer-brand-sub">INTEGRATED SOLUTIONS</span>
            </div>
          </div>
          <button 
            className="drawer-close-btn" 
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu Items List */}
        <nav className="drawer-nav">
          <button 
            className={`drawer-link ${currentView === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            <span>Home</span>
          </button>

          {/* Our Services with accordion dropdown */}
          <div className="drawer-accordion-group">
            <button 
              className={`drawer-link accordion-toggle ${currentView === 'services' ? 'active' : ''}`}
              onClick={() => setServicesExpanded(!servicesExpanded)}
            >
              <span>Our Services</span>
              <ChevronDown 
                size={18} 
                className={`accordion-chevron ${servicesExpanded ? 'rotated' : ''}`} 
              />
            </button>

            {servicesExpanded && (
              <div className="drawer-submenu">
                <button 
                  className="submenu-item view-all"
                  onClick={() => handleNavClick('services')}
                >
                  <ChevronRight size={14} />
                  <span>All Services & CCTV Solutions</span>
                </button>
                {referenceServices.map((srv) => (
                  <button 
                    key={srv.id}
                    className="submenu-item"
                    onClick={() => handleNavClick('services', srv.id)}
                  >
                    <ChevronRight size={14} />
                    <span>{srv.shortTitle}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            className={`drawer-link ${currentView === 'industries' ? 'active' : ''}`}
            onClick={() => handleNavClick('industries')}
          >
            <span>Industries We Serve</span>
          </button>

          <button 
            className={`drawer-link ${currentView === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            <span>About Us</span>
          </button>

          <button 
            className={`drawer-link ${currentView === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            <span>Contact Us</span>
          </button>
        </nav>

        {/* Action Button & Badges inside drawer matching Frame 10 */}
        <div className="drawer-cta-section">
          <a 
            href={`tel:${companyInfo.phoneTel}`} 
            className="drawer-call-btn"
          >
            <Phone size={16} />
            <span>CALL FOR INSTANT QUOTE</span>
          </a>
          
          <p className="drawer-cta-subtext">Free Site Visit & Same Day Callback</p>

          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="drawer-whatsapp-btn"
          >
            <MessageCircle size={16} />
            <span>WhatsApp Quick Support</span>
          </a>

          <div className="drawer-iso-badge">
            <ShieldCheck size={28} className="iso-icon" />
            <div className="iso-text">
              <strong>ISO 9001:2015 CERTIFIED</strong>
              <span>Government MSME UDYAM-HR-05-0193038</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
