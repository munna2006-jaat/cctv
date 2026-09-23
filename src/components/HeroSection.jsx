import React from 'react';
import { Phone, FileCheck, ShieldCheck } from 'lucide-react';
import QuoteForm from './QuoteForm';
import TrustBadges from './TrustBadges';
import { companyInfo } from '../data/companyInfo';

export default function HeroSection({ onQuoteSuccess, onScrollToForm }) {
  return (
    <section className="hero-ref-section" id="hero">
      {/* Top Banner Tagline */}
      <div className="hero-top-badge">
        <ShieldCheck size={14} />
        <span>Gurgaon & Delhi NCR's Trusted Security & CCTV Surveillance Partner</span>
      </div>

      {/* Main Top Lead Form matching Frame 0 & Frame 1 */}
      <div className="hero-lead-form-wrapper">
        <QuoteForm onSuccess={onQuoteSuccess} />
      </div>

      {/* Instant Action CTA Buttons matching Frame 9 */}
      <div className="hero-cta-action-strip">
        <a 
          href="#quote" 
          className="btn-gold-action-strip"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector('.quote-form-container');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <FileCheck size={17} />
          <span>REQUEST FREE RISK ASSESSMENT</span>
        </a>

        <a 
          href={`tel:${companyInfo.phoneTel}`} 
          className="btn-white-action-strip"
        >
          <Phone size={17} />
          <span>CALL FOR INSTANT QUOTE</span>
        </a>

        <p className="hero-guarantee-note">
          Free Site Visit & Same Day Callback
        </p>
      </div>

      {/* Accreditations Carousel */}
      <TrustBadges />
    </section>
  );
}
