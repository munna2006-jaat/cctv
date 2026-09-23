import React, { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/companyInfo';

export default function QuoteForm({ onSuccess, formTitle = "Book Free Site Visit Today" }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [serviceType, setServiceType] = useState('');
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
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!captchaChecked) {
      setErrorMessage('Please check the "I\'m not a robot" reCAPTCHA box.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }

      if (onSuccess) {
        onSuccess({ 
          name, 
          phone: cleanPhone, 
          email, 
          propertyType: propertyType || 'Residential / Commercial',
          serviceType: serviceType || 'CCTV Installation & AMC'
        });
      }
    }, 600);
  };

  return (
    <div className="quote-form-container">
      <h2 className="quote-form-main-title">{formTitle}</h2>

      <form className="ref-lead-form" onSubmit={handleSubmit}>
        {errorMessage && (
          <div className="form-error-banner">
            {errorMessage}
          </div>
        )}

        {/* Name Field */}
        <div className="form-field-group">
          <label className="form-field-label">
            Name <span className="req-star">*</span>
          </label>
          <input 
            type="text" 
            className="form-input"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Phone Field */}
        <div className="form-field-group">
          <label className="form-field-label">
            Phone <span className="req-star">*</span>
          </label>
          <div className="phone-input-row">
            <div className="phone-flag-box">
              <span className="flag-icon">🇮🇳</span>
              <span className="country-code">+91</span>
            </div>
            <input 
              type="tel" 
              className="form-input phone-input"
              placeholder="Enter Your Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="form-field-group">
          <label className="form-field-label">
            Email <span className="req-star">*</span>
          </label>
          <input 
            type="email" 
            className="form-input"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Property Type Dropdown */}
        <div className="form-field-group">
          <label className="form-field-label">
            Property Type <span className="req-star">*</span>
          </label>
          <select 
            className="form-select"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            required
          >
            <option value="">- Select -</option>
            <option value="Residential Society / Villa / Home">Residential Society / Villa / Home</option>
            <option value="Offices & Corporates">Offices & Corporates</option>
            <option value="Retail Showroom & Warehouses">Retail Showroom & Warehouses</option>
            <option value="School / Institution / Campus">School / Institution / Campus</option>
            <option value="Other Commercial Premise">Other Commercial Premise</option>
          </select>
        </div>

        {/* Interested Services Dropdown */}
        <div className="form-field-group">
          <label className="form-field-label">
            Interested Services <span className="req-star">*</span>
          </label>
          <select 
            className="form-select"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
          >
            <option value="">- Select -</option>
            <option value="CCTV Installation & AMC">CCTV Installation & AMC</option>
            <option value="Fire Alarm & Smoke Detection">Fire Alarm & Smoke Detection</option>
            <option value="Access Control & Biometric Systems">Access Control & Biometric Systems</option>
            <option value="Intrusion & Burglar Alarms">Intrusion & Burglar Alarms</option>
            <option value="Smart Home & Office Automation">Smart Home & Office Automation</option>
            <option value="Networking Solutions & Cabling">Networking Solutions & Cabling</option>
          </select>
        </div>

        {/* reCAPTCHA Widget matching Frame 0 */}
        <div className="recaptcha-widget" onClick={handleCaptchaClick} role="button" tabIndex={0}>
          <div className="recaptcha-left">
            <div className={`recaptcha-checkbox ${captchaChecked ? 'checked' : ''}`}>
              {isVerifyingCaptcha ? (
                <Loader2 size={16} className="animate-spin text-blue-600" />
              ) : captchaChecked ? (
                <Check size={18} className="text-green-600" strokeWidth={3} />
              ) : null}
            </div>
            <span className="recaptcha-text">I'm not a robot</span>
          </div>

          <div className="recaptcha-right">
            <img 
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
              alt="reCAPTCHA logo" 
              className="recaptcha-logo"
            />
            <span className="recaptcha-brand">reCAPTCHA</span>
            <span className="recaptcha-terms">Privacy - Terms</span>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="btn-gold-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex-center">
              <Loader2 size={18} className="animate-spin" />
              <span>Verifying & Sending...</span>
            </span>
          ) : (
            <span>GET FREE SITE SURVEY NOW!</span>
          )}
        </button>
      </form>
    </div>
  );
}
