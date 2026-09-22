import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faqs';

export default function FAQSection() {
  // Default open question 2 matching the screen recording (where question 2 was initially viewed open)
  const [openId, setOpenId] = useState(2);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-header-block">
        <h2 className="section-main-title">Frequently Asked Questions</h2>
        <p className="section-subtitle-text">
          Clear answers to common questions regarding CCTV installation, AMC, warranties, and mobile access.
        </p>
      </div>

      <div className="faq-accordion-list">
        {faqs.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div 
              key={item.id} 
              className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
            >
              <button 
                className="faq-accordion-trigger"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{item.question}</span>
                <ChevronDown size={18} className="faq-chevron-icon" />
              </button>

              {isOpen && (
                <div className="faq-accordion-body">
                  <p>{item.answer}</p>
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="faq-bullets-list">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="faq-bullet-item">
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
