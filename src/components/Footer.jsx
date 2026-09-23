import React from 'react';
import { Phone, Mail, MapPin, Shield, ChevronRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ref-site-footer">
      <div className="footer-inner">
        {/* Brand & About Column matching Frame 26 */}
        <div className="footer-column about-col">
          <div className="footer-brand" onClick={() => onNavigate('home')} role="button" tabIndex={0}>
            <img 
              src="/images/sanware_st_logo.png" 
              alt="Sanware Integrated Solutions Logo" 
              className="footer-logo"
            />
            <div className="footer-brand-title-wrap">
              <span className="footer-brand-main">SANWARE</span>
              <span className="footer-brand-sub">INTEGRATED SOLUTIONS</span>
            </div>
          </div>

          <h4 className="footer-heading">About Sanware</h4>
          <p className="footer-text">
            Sanware provides professional security and surveillance systems with certified engineering personnel to ensure safety and protection across industries.
          </p>

          <div className="footer-action-links">
            <button 
              className="footer-text-btn"
              onClick={() => onNavigate('about')}
            >
              <span>Read more</span>
              <ChevronRight size={14} />
            </button>
            <button 
              className="footer-highlight-link"
              onClick={() => onNavigate('contact')}
            >
              Free Consultation Now
            </button>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column links-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-nav-list">
            <li>
              <button onClick={() => onNavigate('home')}>Home</button>
            </li>
            <li>
              <button onClick={() => onNavigate('services')}>CCTV Installation & AMC</button>
            </li>
            <li>
              <button onClick={() => onNavigate('services')}>Fire Alarm & Smoke Detection</button>
            </li>
            <li>
              <button onClick={() => onNavigate('services')}>Access Control & Biometrics</button>
            </li>
            <li>
              <button onClick={() => onNavigate('industries')}>Industries We Serve</button>
            </li>
            <li>
              <button onClick={() => onNavigate('about')}>About Us</button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')}>Contact Security Experts</button>
            </li>
          </ul>
        </div>

        {/* Contact Details Column matching Frame 26 */}
        <div className="footer-column contact-col">
          <h4 className="footer-heading">Contact Details</h4>
          <div className="footer-contact-stack">
            <p className="footer-contact-line">
              <strong>Address:</strong> {companyInfo.address}
            </p>
            <p className="footer-contact-line">
              <strong>Phone:</strong>{' '}
              <a href={`tel:${companyInfo.phoneTel}`} className="footer-link-active">
                {companyInfo.phoneDisplay}
              </a>
            </p>
            <p className="footer-contact-line">
              <strong>Email:</strong>{' '}
              <a href={`mailto:${companyInfo.primaryEmail}`} className="footer-link-active">
                {companyInfo.primaryEmail}
              </a>
            </p>
            <p className="footer-contact-line">
              <strong>Director:</strong> {companyInfo.director}
            </p>
            
            <div className="footer-legal-tags">
              <span>CIN: {companyInfo.cin}</span>
              <span>GSTIN: {companyInfo.gstin}</span>
              <span>MSME: {companyInfo.msme}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright-bar">
        <p>
          © 2026 <strong>SANWARE INTEGRATED SOLUTIONS PVT. LTD.</strong> | All Rights Reserved!
        </p>
      </div>
    </footer>
  );
}
