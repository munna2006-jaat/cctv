import React from 'react';

export default function WhyChooseUs() {
  const cards = [
    {
      title: "50+ Trained Technicians",
      description: "Certified, and skilled Engineers trained in handling all types of CCTV installations & surveillance systems.",
      image: "/images/why_technicians.jpg"
    },
    {
      title: "500+ Satisfied Clients",
      description: "From homes and shops to corporate offices & industries, our track record speaks for itself.",
      image: "/images/service_automation.jpg"
    },
    {
      title: "24/7 Reliable Support & AMC",
      description: "Support Reliable after-sales service with 24/7 monitoring & maintenance to ensure your systems operate seamlessly.",
      image: "/images/why_monitoring_247.jpg"
    },
    {
      title: "6+ Years of Proven Expertise",
      description: "Our team of certified professionals has extensive experience and knowledge in networking, camera installation, and automation technologies.",
      image: "/images/service_amc_real.jpg"
    }
  ];

  return (
    <section className="content-section section-white" id="why-choose-us">
      <div className="section-header-block">
        <h2 className="section-main-title">Why Choose Us?</h2>
        <p className="section-subtitle-text">
          Leading Gurgaon &amp; Delhi NCR with dependable CCTV installations, cutting-edge hardware, and unmatched customer support.
        </p>
      </div>

      <div className="cards-vertical-list">
        {cards.map((card, idx) => (
          <div key={idx} className="feature-card-item">
            <div className="feature-card-img-wrap">
              <img 
                src={card.image} 
                alt={card.title} 
                className="feature-card-img" 
                loading="lazy" 
              />
            </div>
            <div className="feature-card-body">
              <h3 className="feature-card-title">{card.title}</h3>
              <p className="feature-card-desc">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
