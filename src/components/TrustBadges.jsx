import React from 'react';

export default function TrustBadges() {
  const badges = [
    { name: "Startup India", img: "/images/badge_startupindia.webp", alt: "Startup India Recognised" },
    { name: "ISO 9001:2015", img: "/images/badge_iso.webp", alt: "ISO 9001:2015 Quality Certified" },
    { name: "MSME Registered", img: "/images/badge_msme.webp", alt: "Government MSME Registered UDYAM-HR-05-0193038" },
    { name: "Make in India", textBadge: "🇮🇳 MAKE IN INDIA", alt: "Make in India Certified Partner" }
  ];

  return (
    <section className="trust-badges-bar" aria-label="Official Accreditations & Certifications">
      <div className="trust-badges-wrapper">
        {badges.map((b, i) => (
          <div key={i} className="trust-badge-item">
            {b.img ? (
              <img src={b.img} alt={b.alt} className="trust-badge-img" loading="lazy" />
            ) : (
              <span className="trust-badge-text-tag">{b.textBadge}</span>
            )}
            <span className="trust-badge-name">{b.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
