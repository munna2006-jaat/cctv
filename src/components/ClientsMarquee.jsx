import React, { useState } from 'react';
import { marqueeClients } from '../data/clients';

export default function ClientsMarquee() {
  const [showAllPills, setShowAllPills] = useState(false);
  const displayedPills = showAllPills ? marqueeClients : marqueeClients.slice(0, 20);

  return (
    <section className="clients-section" id="clients">
      <div className="section-header-block">
        <h2 className="section-main-title">Our Marquee Clients</h2>
        <p className="section-subtitle-text">
          Trusted by 500+ leading retail brands, corporate enterprises, and premier housing communities.
        </p>
      </div>

      {/* Official PDF Page 3 Client Logos Grid */}
      <div className="clients-pdf-container">
        <img 
          src="/images/pdf_all_clients_grid.png" 
          alt="Official Client Portfolio: Vijay Sales, Puma, IndianOil, Havells, Dell, Cobb, Unitech" 
          className="clients-pdf-grid-img" 
          loading="lazy"
        />
      </div>

      {/* Filterable / Expandable Brands List */}
      <div className="clients-pills-wrap">
        {displayedPills.map((client, idx) => (
          <span key={idx} className="client-brand-pill">
            {client}
          </span>
        ))}
      </div>

      {marqueeClients.length > 20 && (
        <button 
          onClick={() => setShowAllPills(!showAllPills)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--primary-gold-dark)',
            fontSize: '13px',
            fontWeight: '700',
            marginTop: '12px',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          {showAllPills ? "Show Less" : `View All ${marqueeClients.length}+ Clients...`}
        </button>
      )}
    </section>
  );
}
