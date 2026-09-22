import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function BottomBar() {
  const whatsappUrl = `https://wa.me/91${companyInfo.phoneRaw}?text=${companyInfo.whatsappMessage}`;

  return (
    <nav className="bottom-floating-bar" aria-label="Quick Actions">
      <a 
        href={`tel:${companyInfo.phoneTel}`} 
        className="bottom-bar-btn bottom-bar-call"
        aria-label="Call Now"
      >
        <Phone size={18} fill="currentColor" />
        <span>Call NOW!</span>
      </a>

      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bottom-bar-btn bottom-bar-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={18} fill="currentColor" />
        <span>Whatsapp NOW!</span>
      </a>
    </nav>
  );
}
