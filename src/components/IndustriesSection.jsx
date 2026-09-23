import React from 'react';
import { Building2, ChevronRight } from 'lucide-react';
import { industriesList } from '../data/services';

export default function IndustriesSection({ onNavigateIndustries }) {
  return (
    <section className="industries-section" id="industries">
      <div className="section-pill-badge">
        <Building2 size={14} className="pill-icon" />
        <span>Who We Protect</span>
      </div>

      <h2 className="section-title">Industries We Serve</h2>
      <p className="section-subtitle">
        Custom surveillance and electronic security architectures designed for diverse environments across Gurugram.
      </p>

      <div className="industries-grid">
        {industriesList.map((item) => (
          <div 
            key={item.id} 
            className="industry-card"
            onClick={() => onNavigateIndustries(item.id)}
            role="button"
            tabIndex={0}
          >
            <div className="industry-img-wrapper">
              <img 
                src={item.image} 
                alt={item.title} 
                className="industry-img"
                loading="lazy"
              />
              <div className="industry-gradient-overlay" />
            </div>
            <div className="industry-card-content">
              <h3 className="industry-card-title">{item.title}</h3>
              <p className="industry-card-sub">{item.subtitle}</p>
              <div className="industry-learn-more">
                <span>View Details</span>
                <ChevronRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
