import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function BottomBar({ onOpenQuote }) {
  const whatsappUrl = `https://wa.me/91${companyInfo.phoneRaw}?text=${companyInfo.whatsappMessage}`;

  return (
    <nav className="fixed-bottom-bar" aria-label="Quick Mobile Actions">
      <div className="bottom-bar-inner">
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bottom-btn whatsapp"
          aria-label="WhatsApp Us"
        >
          <MessageCircle size={18} fill="currentColor" />
          <span>WhatsApp</span>
        </a>

        <a 
          href={`tel:${companyInfo.phoneTel}`} 
          className="bottom-btn call"
          aria-label="Call Us"
        >
          <Phone size={18} fill="currentColor" />
          <span>Call Now</span>
        </a>

        <button 
          className="bottom-btn quote"
          onClick={onOpenQuote}
          aria-label="Book Free Site Survey"
        >
          <Calendar size={18} />
          <span>Book Survey</span>
        </button>
      </div>
    </nav>
  );
}
