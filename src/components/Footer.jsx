import React from 'react';
import { Phone, Mail, MapPin, Shield, Building2 } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Brand & Director Header */}
      <div className="footer-top-brand">
        <div className="footer-logo-row">
          <img 
            src="/images/sanware_st_logo.png" 
            alt="Sanware Integrated Solutions" 
            className="footer-logo-img" 
          />
          <div>
            <h3 className="footer-company-name">{companyInfo.name}</h3>
            <span className="footer-director-badge">{companyInfo.director}</span>
          </div>
        </div>
        <p style={{ fontSize: '12.5px', color: '#94a3b8', marginTop: '6px' }}>
          Established in {companyInfo.establishedYear} with {companyInfo.experienceYears} years of delivering cutting-edge surveillance, structured networking, and home automation solutions across Delhi NCR.
        </p>
      </div>

      {/* Official Corporate Credentials Box */}
      <div className="footer-credentials-grid">
        <div className="credential-item">
          <span className="credential-label">Corporate Identification No. (CIN)</span>
          <span className="credential-value">{companyInfo.cin}</span>
        </div>

        <div className="credential-item">
          <span className="credential-label">Goods &amp; Services Tax (GSTIN)</span>
          <span className="credential-value">{companyInfo.gstin}</span>
        </div>

        <div className="credential-item">
          <span className="credential-label">Govt. MSME Registration</span>
          <span className="credential-value">{companyInfo.msme}</span>
        </div>
      </div>

      {/* Contact & Address Details */}
      <div className="footer-contact-info">
        <h4 className="footer-contact-title">Head Office &amp; Contact</h4>

        <div className="footer-contact-row">
          <MapPin size={16} className="footer-contact-icon" />
          <span>{companyInfo.address}</span>
        </div>

        <div className="footer-contact-row">
          <Phone size={16} className="footer-contact-icon" />
          <a href={`tel:${companyInfo.phoneTel}`} style={{ color: 'var(--primary-gold-light)', fontWeight: '600' }}>
            {companyInfo.phoneDisplay}
          </a>
        </div>

        <div className="footer-contact-row">
          <Mail size={16} className="footer-contact-icon" />
          <span>{companyInfo.emails.join(' | ')}</span>
        </div>
      </div>

      {/* Disclaimer & Privacy Policy from Reference Video */}
      <div className="footer-disclaimer-box">
        <h5 className="disclaimer-heading">Disclaimer &amp; Privacy Policy:</h5>
        <p className="disclaimer-text">
          The information provided on this website is for general reference and is subject to change without prior notice. Visuals are illustrative and may differ from actual hardware offerings. By submitting your details, you authorize Sanware Integrated Solutions Private Limited to contact you via phone, SMS, or email for service-related communication. We are committed to maintaining data privacy and confidentiality.
        </p>
      </div>

      <div className="footer-copyright">
        © {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
