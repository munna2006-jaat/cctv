import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import { companyInfo } from '../data/companyInfo';

export default function ServicesSection() {
  const handleInquire = (serviceTitle) => {
    const msg = encodeURIComponent(
      `Hello Sanware Team, I am interested in your "${serviceTitle}" service in Gurgaon/Delhi NCR. Please share camera package pricing and installation details.`
    );
    window.open(`https://wa.me/91${companyInfo.phoneRaw}?text=${msg}`, '_blank');
  };

  return (
    <section className="content-section section-light" id="services">
      <div className="section-header-block">
        <h2 className="section-main-title">Our Services</h2>
        <p className="section-subtitle-text">
          Best CCTV Installation in Gurgaon &amp; Delhi NCR.
        </p>
      </div>

      <div className="services-cards-grid">
        {services.map((svc) => (
          <div key={svc.id} className="service-card-item">
            <div className="service-img-container">
              <img 
                src={svc.image} 
                alt={svc.title} 
                className="service-img" 
                loading="lazy"
              />
              <span className="service-badge-tag">{svc.category}</span>
            </div>

            <div className="service-card-body">
              <h3 className="service-card-title">{svc.title}</h3>
              <p className="service-card-desc">{svc.description}</p>

              {svc.features && svc.features.length > 0 && (
                <ul className="service-bullets-list">
                  {svc.features.map((feat, idx) => (
                    <li key={idx} className="service-bullet-item">
                      <CheckCircle2 size={14} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}

              <button 
                className="btn-service-inquire"
                onClick={() => handleInquire(svc.title)}
                aria-label={`Inquire about ${svc.title}`}
              >
                <MessageCircle size={15} />
                <span>Get Instant Quote for {svc.title}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
