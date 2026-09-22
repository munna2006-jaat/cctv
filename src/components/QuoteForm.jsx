import React, { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/companyInfo';

export default function QuoteForm({ onSuccess }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [isVerifyingCaptcha, setIsVerifyingCaptcha] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCaptchaClick = () => {
    if (captchaChecked || isVerifyingCaptcha) return;
    setIsVerifyingCaptcha(true);
    setTimeout(() => {
      setIsVerifyingCaptcha(false);
      setCaptchaChecked(true);
      setErrorMessage('');
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!captchaChecked) {
      setErrorMessage('Please complete the verification checkbox.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      // Trigger festive celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      if (onSuccess) {
        onSuccess({ name, phone: cleanPhone });
      }
    }, 500);
  };

  return (
    <form className="lead-form-card" onSubmit={handleSubmit}>
      {errorMessage && (
        <div style={{
          background: '#fee2e2',
          border: '1px solid #ef4444',
          color: '#b91c1c',
          padding: '8px 12px',
          borderRadius: '6px',
          fontSize: '13px',
          marginBottom: '12px'
        }}>
          {errorMessage}
        </div>
      )}

      {/* Name Input */}
      <div className="form-group">
        <input 
          type="text" 
          className="form-input-text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Phone Input with India Flag */}
      <div className="form-group">
        <div className="phone-input-wrap">
          <div className="country-flag-select">
            <span className="flag-emoji">🇮🇳</span>
            <span>+91</span>
          </div>
          <input 
            type="tel" 
            className="phone-input-field"
            placeholder="Enter Your Mobile Number"
            maxLength={10}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Interactive reCAPTCHA Box */}
      <div 
        className="recaptcha-box" 
        onClick={handleCaptchaClick}
        role="button"
        tabIndex={0}
      >
        <div className="recaptcha-left">
          <div className={`recaptcha-checkbox ${captchaChecked ? 'checked' : ''}`}>
            {isVerifyingCaptcha && (
              <Loader2 size={16} className="animate-spin text-gray-500" />
            )}
            {captchaChecked && (
              <Check size={18} color="#22c55e" strokeWidth={3} />
            )}
          </div>
          <span className="recaptcha-label">I'm not a robot</span>
        </div>

        <div className="recaptcha-right">
          <svg className="recaptcha-logo-icon" viewBox="0 0 48 48" fill="none">
            <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24" stroke="#4285F4" strokeWidth="4" strokeLinecap="round"/>
            <path d="M38 10L44 4L44 14L34 14" fill="#4285F4"/>
            <path d="M24 14C18.48 14 14 18.48 14 24C14 29.52 18.48 34 24 34" stroke="#34A853" strokeWidth="4" strokeLinecap="round"/>
          </svg>
          <span>reCAPTCHA</span>
          <span style={{ fontSize: '8px', color: '#888' }}>Privacy - Terms</span>
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="btn-submit-quote"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <span>Get Quote Now!</span>
        )}
      </button>
    </form>
  );
}
