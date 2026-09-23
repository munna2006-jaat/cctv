import React from 'react';
import { Award, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { clientsList } from '../data/clients';

export default function WhyChooseUs({ onScheduleAssessment }) {
  const metrics = [
    { label: "Client Satisfaction & SLA Guarantee", pct: "100%" },
    { label: "Certified & Background-Verified Engineers", pct: "100%" },
    { label: "Genuine OEM Hardware (Hikvision, CP Plus, Dahua)", pct: "100%" },
    { label: "24/7 Rapid Emergency Breakdown Support", pct: "100%" }
  ];

  return (
    <section className="why-choose-section">
      <div className="section-pill-badge">
        <Award size={14} className="pill-icon" />
        <span>Why Choose Us</span>
      </div>

      <h2 className="section-title">
        Why Choose Sanware Integrated Solutions?
      </h2>
      <p className="why-choose-subtitle">
        As a top-rated security & surveillance agency in Gurgaon, Sanware brings together:
      </p>

      {/* 100% Progress Bars matching Frame 30 */}
      <div className="metrics-bars-container">
        {metrics.map((m, idx) => (
          <div key={idx} className="metric-bar-item">
            <div className="metric-label-row">
              <span className="metric-label">{m.label}</span>
              <span className="metric-pct">{m.pct}</span>
            </div>
            <div className="metric-track">
              <div className="metric-fill" style={{ width: m.pct }} />
            </div>
          </div>
        ))}
      </div>

      <p className="why-choose-statement">
        Our commitment to <strong>accountability</strong>, <strong>integrity</strong>, and <strong>on-demand responsiveness</strong> makes us the partner of choice for businesses and communities.
      </p>

      {/* CTA Card matching Frame 30 */}
      <div className="why-choose-cta-box">
        <h3 className="cta-box-title">
          Want a custom security plan designed for your specific needs in Gurgaon?
        </h3>
        
        <button 
          className="btn-gold-action large"
          onClick={onScheduleAssessment}
        >
          <span>SCHEDULE A FREE SITE ASSESSMENT</span>
          <ChevronRight size={18} />
        </button>

        <p className="cta-box-sublink">
          Trust Sanware—your local experts in <strong>Security Services in Gurgaon</strong>.
        </p>
      </div>

      {/* 50+ Client Logos Portfolio from PDF */}
      <div className="clients-portfolio-block">
        <div className="clients-header">
          <div className="stars-badge">
            <Star size={13} fill="#d49b28" color="#d49b28" />
            <Star size={13} fill="#d49b28" color="#d49b28" />
            <Star size={13} fill="#d49b28" color="#d49b28" />
            <Star size={13} fill="#d49b28" color="#d49b28" />
            <Star size={13} fill="#d49b28" color="#d49b28" />
            <span>Trusted By 50+ Corporate Leaders & Real Estate Giants</span>
          </div>
        </div>

        <div className="client-logos-marquee">
          <div className="marquee-track">
            {clientsList.concat(clientsList).map((client, idx) => (
              <div key={idx} className="client-logo-pill">
                <span className="client-name">{client.name}</span>
                <span className="client-sector">{client.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
