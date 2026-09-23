import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, UserCheck } from 'lucide-react';
import QuoteForm from '../QuoteForm';
import { companyInfo } from '../../data/companyInfo';

export default function ContactPage({ onQuoteSuccess }) {
  const whatsappUrl = `https://wa.me/91${companyInfo.phoneRaw}?text=${companyInfo.whatsappMessage}`;

  return (
    <div className="inner-page-view contact-page animate-fade-in">
      {/* Banner matching Frame 34 */}
      <div className="inner-page-banner">
        <div className="banner-overlay" />
        <div className="banner-content">
          <h1 className="banner-title">Contact Us</h1>
          <p className="banner-subtitle">
            Get in Touch With Our Security & Surveillance Specialists
          </p>
        </div>
      </div>

      <div className="inner-page-content">
        {/* Intro */}
        <section className="about-block text-center">
          <h2 className="block-title">Get in Touch With Our Security Experts</h2>
          <p className="block-text">
            We specialize in personalized <strong>Gurgaon & Delhi NCR security solutions</strong>, offering rapid deployment, certified technicians, and 24/7 dedicated support. Whether you need a fresh installation, an urgent repair, or an Annual Maintenance Contract (AMC), we are here to help.
          </p>
        </section>

        {/* Lead Callback Form matching Frame 35 */}
        <section className="contact-form-section">
          <QuoteForm 
            onSuccess={onQuoteSuccess} 
            formTitle="Request a Callback"
          />
        </section>

        {/* Contact Info Cards */}
        <section className="contact-info-cards-grid">
          <div className="contact-info-card">
            <div className="contact-info-icon-box">
              <Phone size={22} />
            </div>
            <h3 className="contact-info-card-title">Call Us Directly</h3>
            <p className="contact-info-card-desc">Immediate telephone consultation with an engineer.</p>
            <a href={`tel:${companyInfo.phoneTel}`} className="contact-info-link">
              {companyInfo.phoneDisplay}
            </a>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon-box whatsapp">
              <MessageCircle size={22} />
            </div>
            <h3 className="contact-info-card-title">WhatsApp Chat</h3>
            <p className="contact-info-card-desc">Share floor plans, photos or ask quick questions.</p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-info-link whatsapp"
            >
              Chat on WhatsApp Now
            </a>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon-box">
              <Mail size={22} />
            </div>
            <h3 className="contact-info-card-title">Email Inquiries</h3>
            <p className="contact-info-card-desc">Send formal RFPs, tender bids, or proposal requests.</p>
            <div className="email-links-stack">
              <a href="mailto:sispt@outlook.com" className="contact-info-link">
                sispt@outlook.com
              </a>
              <a href="mailto:sanware@outlook.in" className="contact-info-link">
                sanware@outlook.in
              </a>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon-box">
              <MapPin size={22} />
            </div>
            <h3 className="contact-info-card-title">Registered Head Office</h3>
            <p className="contact-info-card-desc">{companyInfo.address}</p>
            <span className="contact-info-sub">Gurugram, Haryana - 122505</span>
          </div>
        </section>

        {/* Leadership & Corporate Credentials Card */}
        <section className="leadership-card">
          <div className="leader-info-row">
            <div className="leader-avatar">
              <UserCheck size={28} />
            </div>
            <div>
              <h3 className="leader-name">Harshit Yadav</h3>
              <p className="leader-role">Director, Sanware Integrated Solutions Pvt Ltd</p>
            </div>
          </div>
          <div className="leader-meta-tags">
            <span className="meta-tag"><strong>CIN:</strong> {companyInfo.cin}</span>
            <span className="meta-tag"><strong>GSTIN:</strong> {companyInfo.gstin}</span>
            <span className="meta-tag"><strong>MSME:</strong> {companyInfo.msme}</span>
            <span className="meta-tag"><strong>Established:</strong> 2020</span>
          </div>
        </section>

        {/* Interactive Google Map embed matching Frame 34 */}
        <section className="map-embed-section">
          <h3 className="map-title text-center">Head Office Location</h3>
          <p className="map-sub text-center">Sector 93, Hayatpur Road, Gurugram, Haryana 122505</p>

          <div className="map-iframe-container">
            <iframe 
              title="Sanware Integrated Solutions Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14041.569429411985!2d76.9312!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d02b5555555%3A0x6b5a3717d23a1a1!2sSector%2093%2C%20Gurugram%2C%20Haryana%20122505!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              width="100%" 
              height="340" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
