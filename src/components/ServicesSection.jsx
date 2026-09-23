import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { referenceServices } from '../data/services';

export default function ServicesSection({ onServiceSelect }) {
  return (
    <section className="services-section" id="services">
      <div className="section-pill-badge">
        <Shield size={14} className="pill-icon" />
        <span>Our Services</span>
      </div>

      <h2 className="section-title">
        Security Solutions for Homes, Offices, Institutions & Retail
      </h2>
      <p className="section-subtitle">
        End-to-end electronic security, optical surveillance, and smart IT systems tailored for Gurgaon & Delhi NCR.
      </p>

      <div className="services-card-grid">
        {referenceServices.map((service) => (
          <div key={service.id} className="service-ref-card">
            <div className="service-card-media">
              <img 
                src={service.image} 
                alt={service.title} 
                className="service-card-img"
                loading="lazy"
              />
            </div>
            
            <div className="service-card-body">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              
              <button 
                className="service-learn-more-btn"
                onClick={() => onServiceSelect(service.id)}
              >
                <span>Learn More</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
