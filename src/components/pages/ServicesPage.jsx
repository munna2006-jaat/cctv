import React from 'react';
import { Camera, ShieldCheck, Check, Phone, Mail, MapPin, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import QuoteForm from '../QuoteForm';
import { cameraSolutions } from '../../data/services';
import { companyInfo } from '../../data/companyInfo';
import { processSteps } from '../../data/process';

export default function ServicesPage({ onQuoteSuccess, onOpenQuote }) {
  // 6 Circular Cards matching Screenshots 2, 3, 4
  const installationCards = [
    {
      id: "cctv-camera",
      title: "CCTV Camera Installation in Gurgaon",
      image: "/images/CCTV-Camera-Installation-in-Gurgaon_-Rudra-Shield-300x300.png",
      description: "We install bullet, dome, night vision, and wireless CCTV cameras for homes, offices, shops, apartments, and warehouses. Monitor live footage remotely from your mobile, tablet, or desktop."
    },
    {
      id: "fire-alarm",
      title: "Fire Alarm System Installation",
      image: "/images/Fire-Alarm-System-Installation_-in-Gurgaon_-Rudra-Shield-300x300.png",
      description: "Protect lives and property with early-warning fire alarm systems installed by trained fire safety professionals. Includes heat sensors, manual call points, and centralized fire panels."
    },
    {
      id: "smoke-detector",
      title: "Smoke Detector Installation",
      image: "/images/Smoke-Detector-Installation_-in-Gurgaon_-Rudra-Shield-300x300.png",
      description: "Accurate smoke detectors for kitchens, hotels, server rooms, and high-risk zones. Standalone or integrated with fire alarms for instant alerts."
    },
    {
      id: "gps-tracking",
      title: "GPS Tracking for Vehicles & Assets",
      image: "/images/GPS-Tracking-for-Vehicles-Assets__-Rudra-Shield-300x300.png",
      description: "Live GPS trackers for cars, fleets, bikes, delivery vehicles, and high-value cargo. Real-time tracking with mobile app access, geofencing, and theft recovery features."
    },
    {
      id: "anti-theft",
      title: "Anti-Theft & Burglar Alarm Systems",
      image: "/images/Anti-Theft-Burglar-Alarm-Systems-Rudra-Shield-300x300.png",
      description: "Complete anti-theft systems including door sensors, motion detectors, glass break sensors, and sirens. Ideal for homes, retail shops, warehouses, ATMs, and banks."
    },
    {
      id: "smart-devices",
      title: "Smart Home & Office Security Devices",
      image: "/images/Smart-Home-Office-Security-Devices_-Rudra-Shield-300x300.png",
      description: "Smart digital door locks with biometric fingerprint access, two-way HD video door phones, and smart security automation devices for homes and offices."
    }
  ];

  // Timeline items matching Screenshot 5
  const whyChooseTimeline = [
    {
      title: "Free Site Inspection & Risk Audit",
      subtitle: "On-site property vulnerability assessment with zero obligation."
    },
    {
      title: "Trained Technicians & Certified Brands",
      subtitle: "Official hardware: Hikvision, CP Plus, Dahua, Honeywell & certified engineers."
    },
    {
      title: "End-to-End Installation & AMC",
      subtitle: "Complete wiring, mounting, cloud configuration & quarterly AMC audits."
    },
    {
      title: "Custom Solutions for Homes, Offices, Factories",
      subtitle: "Tailored camera angles, PoE networks & NVR storage capacity."
    },
    {
      title: "Fast Turnaround & Local Support in Gurgaon",
      subtitle: "Same-day deployment & 24/7 dedicated emergency assistance."
    }
  ];

  const handleScrollToForm = (e) => {
    e.preventDefault();
    const el = document.querySelector('.services-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuote) {
      onOpenQuote();
    }
  };

  return (
    <div className="inner-page-view services-page animate-fade-in">
      {/* Top Banner matching Screenshot 1 */}
      <section className="cctv-hero-banner">
        <div className="cctv-hero-content">
          <h1 className="cctv-hero-title">
            Secure Your Property with Smart Surveillance
          </h1>
          <p className="cctv-hero-subtitle">
            CCTV camera installation, fire alarms, GPS tracking, and home security systems for homes, offices, and commercial sites in Gurgaon.
          </p>

          <div className="cctv-hero-actions">
            <a 
              href="#assessment" 
              className="btn-gold-action large cctv-cta-pulse"
              onClick={handleScrollToForm}
            >
              <span>BOOK FREE RISK ASSESSMENT</span>
            </a>

            <a 
              href={`tel:${companyInfo.phoneTel}`} 
              className="btn-white-action large"
            >
              <Phone size={16} />
              <span>CALL NOW FOR QUICK CONSULTATION</span>
            </a>
          </div>

          <p className="cctv-hero-paragraph">
            <strong>Sanware Integrated Solutions</strong> offers <strong>CCTV installation in Gurgaon</strong> with cutting-edge surveillance systems for homes, businesses, and institutions. Our <strong>CCTV camera installation services in Gurgaon</strong> ensure complete coverage, smart monitoring, and 24/7 security.
          </p>
        </div>
      </section>

      <div className="inner-page-content">
        {/* Complete Security System Installation Section matching Screenshots 2, 3, 4 */}
        <section className="complete-security-section">
          <h2 className="complete-security-title text-center">
            Complete Security System Installation in Gurgaon
          </h2>
          <p className="complete-security-subtitle text-center">
            Looking for <strong>CCTV installation in Gurgaon</strong>? Our expert technicians install HD cameras with remote access and tamper alerts.
          </p>

          <div className="circular-cards-grid">
            {installationCards.map((card, idx) => (
              <div key={card.id} className="circular-card-item animate-scale-up" style={{ animationDelay: `${idx * 0.08}s` }}>
                <div className="circular-img-wrapper">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="circular-card-img" 
                    loading="lazy"
                  />
                </div>
                <h3 className="circular-card-title">{card.title}</h3>
                <p className="circular-card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Clients Choose Timeline matching Screenshot 5 */}
        <section className="why-choose-timeline-section">
          <h2 className="timeline-section-title text-center">
            Why Clients Choose Sanware for CCTV and Security Systems
          </h2>

          <div className="vertical-timeline-container">
            <div className="timeline-spine-line" />

            <div className="timeline-nodes-list">
              {whyChooseTimeline.map((item, idx) => (
                <div key={idx} className="timeline-node-row">
                  {/* Left Gold Checkmark Badge */}
                  <div className="timeline-node-circle">
                    <Check size={18} strokeWidth={3} className="node-check-icon" />
                  </div>

                  {/* Speech-Bubble Style Card with Left Notch */}
                  <div className="timeline-bubble-card">
                    <h3 className="timeline-bubble-title">{item.title}</h3>
                    {item.subtitle && (
                      <p className="timeline-bubble-sub">{item.subtitle}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5-Phase Implementation Plan from the PDF proposal */}
        <section className="implementation-plan-block">
          <h2 className="block-title text-center">5-Phase Implementation Plan</h2>
          <p className="block-sub-lead text-center">
            Official deployment roadmap from Sanware's corporate engineering proposal
          </p>

          <div className="phases-timeline">
            {processSteps.map((step, idx) => (
              <div key={idx} className="phase-card hover-glow">
                <div className="phase-badge">{step.phase}</div>
                <h3 className="phase-title">{step.title}</h3>
                <p className="phase-desc">{step.description}</p>
                <ul className="phase-deliverables">
                  {step.deliverables.map((del, dIdx) => (
                    <li key={dIdx}>
                      <ArrowRight size={13} className="text-gold shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 3 Camera Solutions from PDF Proposal */}
        <section className="camera-solutions-block">
          <h2 className="block-title text-center">Our Camera Installation Solutions</h2>
          <p className="block-sub-lead text-center">
            High-Definition IP Cameras, Continuous CCTV Systems & AI Video Analytics
          </p>

          <div className="camera-solutions-grid">
            {cameraSolutions.map((sol, idx) => (
              <div key={idx} className="camera-sol-card hover-lift">
                <div className="camera-sol-header">
                  <Camera size={22} className="camera-icon" />
                  <h3 className="camera-sol-title">{sol.title}</h3>
                </div>
                <p className="camera-sol-sub">{sol.subtitle}</p>

                <div className="camera-features-list">
                  {sol.features.map((feat, fIdx) => (
                    <div key={fIdx} className="camera-feat-item">
                      <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="camera-benefit-box">
                  <strong>Key Advantage:</strong> {sol.benefits}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dedicated Lead Form */}
        <section className="services-form-section">
          <QuoteForm 
            onSuccess={onQuoteSuccess} 
            formTitle="Get Free Site Survey & Custom CCTV Quote"
          />
        </section>

        {/* Contact Information & Map Box */}
        <section className="contact-help-box">
          <h2 className="help-box-title">Not Sure What You Need? We'll Help.</h2>
          <p className="help-box-sub">
            Before installation, we offer a <strong>free risk assessment and site survey</strong> to help you choose the right surveillance and security system for your property.
          </p>

          <div className="help-contact-items">
            <div className="help-item">
              <Mail size={18} className="help-icon" />
              <div>
                <span className="help-label">Email:</span>
                <a href={`mailto:${companyInfo.primaryEmail}`} className="help-val">
                  {companyInfo.primaryEmail}
                </a>
              </div>
            </div>

            <div className="help-item">
              <Phone size={18} className="help-icon" />
              <div>
                <span className="help-label">Phone:</span>
                <a href={`tel:${companyInfo.phoneTel}`} className="help-val">
                  {companyInfo.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="help-item">
              <MapPin size={18} className="help-icon" />
              <div>
                <span className="help-label">Head Office Address:</span>
                <p className="help-val">{companyInfo.address}</p>
              </div>
            </div>
          </div>

          <a 
            href="https://maps.google.com/?q=Sector+93+Gurugram+Hayatpur+Road" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-map-open"
          >
            <span>Open in Google Maps</span>
            <ExternalLink size={16} />
          </a>
        </section>
      </div>
    </div>
  );
}
