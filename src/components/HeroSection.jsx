import React from 'react';
import { Check } from 'lucide-react';
import QuoteForm from './QuoteForm';

export default function HeroSection({ onQuoteSuccess }) {
  const checkItems = [
    "ISO 9001:2015 & MSME Certified",
    "6+ Years of Industry Expertise",
    "500+ Satisfied Clients",
    "4.9 Out Of 5 Google Rating",
    "Free Security Consultation",
    "Same-Day Service Available"
  ];

  return (
    <section className="hero-section" id="hero">
      <div className="hero-mesh-overlay"></div>
      <div className="hero-glow-orb"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Secure Your Home &amp;<br />Business Today!
        </h1>

        <p className="hero-subtitle">
          Same-Day CCTV Installation in Gurgaon
        </p>

        <p className="hero-tagline">
          Free Risk Check.
        </p>

        <ul className="hero-checklist">
          {checkItems.map((item, idx) => (
            <li key={idx} className="checklist-item">
              <span className="check-icon-circle">
                <Check size={13} strokeWidth={3.5} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Instant Lead Capture Form */}
        <QuoteForm onSuccess={onQuoteSuccess} />
      </div>
    </section>
  );
}
