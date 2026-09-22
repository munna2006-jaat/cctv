import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-header-block">
        <h2 className="section-main-title" style={{ color: '#ffffff' }}>What Our Clients Say</h2>
        <p className="section-subtitle-text" style={{ color: '#cbd5e1' }}>
          Our Systems Saved Lives, Assets &amp; Business Revenue
        </p>
      </div>

      {/* Quote Speech Bubble */}
      <div className="testimonial-bubble-card">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '10px' }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#d99726" color="#d99726" />
          ))}
        </div>
        <p className="testimonial-quote-text">
          "{current.quote}"
        </p>
      </div>

      {/* Author Avatar & Details */}
      <div className="testimonial-author-avatar-wrap">
        <img 
          src={current.avatar} 
          alt={current.name} 
          className="testimonial-author-avatar" 
        />
      </div>
      <h3 className="testimonial-author-name">{current.name}</h3>
      <p className="testimonial-author-role">{current.role}, {current.company}</p>

      {/* Navigation Arrows */}
      <div className="carousel-nav-arrows" style={{ marginTop: '18px' }}>
        <button 
          className="carousel-arrow-btn" 
          onClick={handlePrev}
          aria-label="Previous Testimonial"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="carousel-dots">
          {testimonials.map((_, idx) => (
            <span 
              key={idx} 
              className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>

        <button 
          className="carousel-arrow-btn" 
          onClick={handleNext}
          aria-label="Next Testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
