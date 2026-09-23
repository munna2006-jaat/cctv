import React from 'react';
import { X } from 'lucide-react';
import QuoteForm from './QuoteForm';

export default function QuoteModal({ isOpen, onClose, onSuccess }) {
  if (!isOpen) return null;

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div 
        className="quote-modal-card animate-scale-up" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="quote-modal-close-btn" 
          onClick={onClose}
          aria-label="Close form"
        >
          <X size={20} />
        </button>

        <QuoteForm 
          onSuccess={(data) => {
            onClose();
            onSuccess(data);
          }}
          formTitle="Book Free Site Visit Today"
        />
      </div>
    </div>
  );
}
