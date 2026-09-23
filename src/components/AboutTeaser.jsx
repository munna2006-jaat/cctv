import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function AboutTeaser({ onLearnMore }) {
  return (
    <section className="about-teaser-section">
      <div className="about-teaser-card">
        {/* Team hands photo with rounded corners matching Frame 2 */}
        <div className="about-teaser-image-wrap">
          <img 
            src="/images/ref_about_hands.webp" 
            alt="Sanware Integrated Solutions Team" 
            className="about-teaser-img"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="about-teaser-content">
          <div className="section-pill-badge">
            <Shield size={14} className="pill-icon" />
            <span>About Us</span>
          </div>

          <h2 className="about-teaser-heading">
            Sanware – Trusted Security & Surveillance Company in Gurgaon
          </h2>

          <p className="about-teaser-desc">
            Our vision is simple – to make India a safer, more connected place for every business and resident. Established in 2020, <strong>SANWARE INTEGRATED SOLUTIONS PVT LTD</strong> delivers end-to-end security installations across Gurgaon (Gurugram) and Delhi NCR, specializing in 4K CCTV surveillance, fire alarm systems, biometric access control, and enterprise networking.
          </p>

          <button 
            className="btn-gold-action"
            onClick={onLearnMore}
          >
            <span>LEARN MORE</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
