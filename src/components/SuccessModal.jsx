import React from 'react';
import { CheckCircle2, MessageCircle, Phone, X } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function SuccessModal({ leadData, onClose }) {
  if (!leadData) return null;

  const quoteMessage = encodeURIComponent(
    `Hello Sanware Team, my name is ${leadData.name} (Phone: ${leadData.phone}). I just submitted a CCTV installation quote inquiry on your website. Please share estimate and schedule a free site check in Gurgaon/Delhi NCR.`
  );

  const directWhatsappUrl = `https://wa.me/91${companyInfo.phoneRaw}?text=${quoteMessage}`;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      zIndex: 2000
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        maxWidth: '420px',
        width: '100%',
        padding: '28px 24px',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
        animation: 'modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label="Close"
        >
          <X size={18} color="#475569" />
        </button>

        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: '#dcfce7',
          color: '#16a34a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
        }}>
          <CheckCircle2 size={38} strokeWidth={2.5} />
        </div>

        <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
          Quote Request Received!
        </h3>

        <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.5, marginBottom: '20px' }}>
          Thank you, <strong style={{ color: '#0f172a' }}>{leadData.name}</strong>. Our surveillance specialist will call you at <strong style={{ color: '#0f172a' }}>+91 {leadData.phone}</strong> within 15 minutes to schedule your free site risk check.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#22c55e',
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '14.5px',
              padding: '12px 18px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            <MessageCircle size={18} />
            <span>Connect on WhatsApp Instantly</span>
          </a>

          <a
            href={`tel:${companyInfo.phoneTel}`}
            style={{
              background: '#d99726',
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '14.5px',
              padding: '12px 18px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            <Phone size={18} />
            <span>Call Expert Directly</span>
          </a>
        </div>
      </div>
    </div>
  );
}
