import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Certifications() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "ISO 9001:2015 Quality Management",
      subtitle: "Globally Recognized Security Installation & Systems Standards",
      image: "/images/certificate_iso_real.jpg"
    },
    {
      title: "Govt. of India MSME UDYAM Registered",
      subtitle: "Official MSME Registration No: UDYAM-HR-05-0193038",
      image: "/images/pdf_certifications_badges.png"
    },
    {
      title: "International Safety & Compliance",
      subtitle: "CE Certified, RoHS Compliant, ICV & GMP Standard Assured",
      image: "/images/pdf_certifications_badges.png"
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="certifications-section" id="certifications">
      <div className="section-header-block" style={{ marginBottom: '18px' }}>
        <h2 className="section-main-title">Certified &amp; Approved</h2>
        <p className="section-subtitle-text">
          Registered and certified with leading Indian &amp; International regulatory standards.
        </p>
      </div>

      {/* Official PDF Certifications Badges Bar */}
      <div className="cert-badges-banner-img">
        <img 
          src="/images/pdf_certifications_badges.png" 
          alt="CE, RoHS, Icv, GMP, ISO 9001:2015, MSME Certifications" 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* Interactive Certificate Carousel */}
      <div className="cert-carousel-wrap">
        <div className="cert-slide">
          <div style={{
            width: '100%',
            height: '210px',
            borderRadius: '8px',
            overflow: 'hidden',
            background: '#ffffff',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
            marginBottom: '14px',
            border: '1px solid #e2e8f0'
          }}>
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '6px'
              }}
            />
          </div>
          <h3 className="cert-title-badge">{slides[currentSlide].title}</h3>
          <p className="cert-subtext">{slides[currentSlide].subtitle}</p>
        </div>

        <div className="carousel-nav-arrows">
          <button 
            className="carousel-arrow-btn" 
            onClick={handlePrev}
            aria-label="Previous Certification"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="carousel-dots">
            {slides.map((_, idx) => (
              <span 
                key={idx} 
                className={`carousel-dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>

          <button 
            className="carousel-arrow-btn" 
            onClick={handleNext}
            aria-label="Next Certification"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
