import React from 'react';
import { Shield, CheckCircle2, Award, Users, Target, Phone, ChevronRight } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function AboutPage({ onOpenQuote }) {
  const pillars = [
    {
      title: "Proven Expertise",
      desc: "Our certified engineering team brings over 6+ years of specialized experience in IP surveillance, fire safety, structured networking, and building automation.",
      icon: Award
    },
    {
      title: "Uncompromising Quality",
      desc: "We exclusively deploy authentic, OEM-certified hardware from global leaders like Hikvision, CP Plus, Dahua, and Honeywell with full manufacturer warranty.",
      icon: Shield
    },
    {
      title: "Customer-Centric Approach",
      desc: "Every property has unique security challenges. We perform detailed on-site risk audits to deliver tailored, cost-effective security architectures.",
      icon: Users
    },
    {
      title: "Cutting-Edge Innovation",
      desc: "From 4K Ultra-HD starlight cameras to AI video analytics, facial recognition, and mobile IoT control, we stay ahead of security technology.",
      icon: Target
    }
  ];

  return (
    <div className="inner-page-view about-page animate-fade-in">
      {/* Banner matching Frame 16 */}
      <div className="inner-page-banner">
        <div className="banner-overlay" />
        <div className="banner-content">
          <h1 className="banner-title">About Us</h1>
          <p className="banner-subtitle">
            Sanware Integrated Solutions Private Limited
          </p>
        </div>
      </div>

      <div className="inner-page-content">
        {/* Welcome Section */}
        <section className="about-block text-center">
          <h2 className="block-title">Welcome to Sanware Integrated Solutions</h2>
          <p className="block-sub-lead">
            Your Trusted Security & Surveillance Partner in Gurgaon & Delhi NCR
          </p>
          <p className="block-text">
            Welcome to <strong>SANWARE INTEGRATED SOLUTIONS PVT LTD</strong>, the leading provider of cutting-edge technology solutions in <strong>Gurgaon (Gurugram)</strong>. Established in 2020, we are dedicated to protecting lives, residences, commercial offices, and industrial infrastructures with absolute trust and engineering excellence.
          </p>
          <p className="block-text">
            Discover the story, mission, and core values that drive our commitment to setting a new benchmark in personal and corporate security. At Sanware, security is not just a service — it is a responsibility we carry with honor.
          </p>

          <button 
            className="btn-gold-action large mx-auto"
            onClick={onOpenQuote}
          >
            <span>BOOK FREE SECURITY CONSULTATION NOW</span>
            <ChevronRight size={18} />
          </button>
        </section>

        {/* Our Story Section matching Frame 13 */}
        <section className="about-block story-block">
          <div className="section-pill-badge mx-auto">
            <Shield size={14} className="pill-icon" />
            <span>Our Foundation</span>
          </div>

          <h2 className="block-title">Our Story</h2>
          <p className="block-sub-lead">Building Trust, One Life at a Time</p>

          <div className="story-card">
            <p className="story-paragraph">
              In today's fast-growing urban landscape, security and surveillance often become an afterthought—activated only when danger strikes. We saw this vulnerability not merely as a business opportunity, but as a calling.
            </p>
            <blockquote className="story-quote">
              "Our purpose is bold yet simple: To make India, starting with Gurgaon & Delhi NCR, a safer and more secure environment for every family and enterprise who calls this region home."
            </blockquote>
            <p className="story-paragraph">
              Under the visionary leadership of Director <strong>Harshit Yadav</strong>, Sanware Integrated Solutions has expanded from a dedicated CCTV and networking team into an ISO 9001:2015 and MSME-certified security powerhouse, trusted by over 500+ residential communities, corporate offices, retail chains, and government projects.
            </p>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="about-block pillars-block">
          <h2 className="block-title text-center">Why Sanware Integrated Solutions?</h2>
          <p className="block-sub-lead text-center">Our Core Operating Principles</p>

          <div className="pillars-grid">
            {pillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div key={idx} className="pillar-card">
                  <div className="pillar-icon-box">
                    <IconComp size={24} />
                  </div>
                  <h3 className="pillar-title">{p.title}</h3>
                  <p className="pillar-desc">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Corporate Profile Details */}
        <section className="about-block corporate-details-card">
          <h3 className="corp-title">Corporate Credentials</h3>
          <div className="corp-grid">
            <div className="corp-item">
              <span className="corp-label">Company Name:</span>
              <strong className="corp-value">{companyInfo.name}</strong>
            </div>
            <div className="corp-item">
              <span className="corp-label">Director:</span>
              <strong className="corp-value">{companyInfo.director}</strong>
            </div>
            <div className="corp-item">
              <span className="corp-label">Corporate CIN:</span>
              <strong className="corp-value">{companyInfo.cin}</strong>
            </div>
            <div className="corp-item">
              <span className="corp-label">GSTIN:</span>
              <strong className="corp-value">{companyInfo.gstin}</strong>
            </div>
            <div className="corp-item">
              <span className="corp-label">MSME Registration:</span>
              <strong className="corp-value">{companyInfo.msme}</strong>
            </div>
            <div className="corp-item">
              <span className="corp-label">Registered Office:</span>
              <strong className="corp-value">{companyInfo.address}</strong>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
