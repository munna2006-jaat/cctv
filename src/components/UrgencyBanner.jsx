import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function UrgencyBanner() {
  const whatsappUrl = `https://wa.me/91${companyInfo.phoneRaw}?text=${companyInfo.whatsappMessage}`;

  return (
    <section className="urgency-banner-section">
      <p className="urgency-callout-text">
        Break-ins happen every 3 minutes in Gurgaon. Protect your family with CCTV installed today.
      </p>

      <div className="urgency-cta-stack">
        <a 
          href={`tel:${companyInfo.phoneTel}`} 
          className="btn-urgency-call"
        >
          <Phone size={17} fill="currentColor" />
          <span>Call CCTV Expert Now</span>
        </a>

        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-urgency-whatsapp"
        >
          <MessageCircle size={17} fill="currentColor" />
          <span>WhatsApp To Get Quote</span>
        </a>
      </div>
    </section>
  );
}
