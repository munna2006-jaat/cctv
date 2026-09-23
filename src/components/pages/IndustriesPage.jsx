import React from 'react';
import { Building, Home, ShoppingBag, GraduationCap, ChevronRight, CheckCircle2 } from 'lucide-react';
import { industriesList } from '../../data/services';

export default function IndustriesPage({ onOpenQuote }) {
  const industrySpecs = [
    {
      id: "corporate",
      title: "Corporate Offices & IT Hubs",
      icon: Building,
      img: "/images/corporate-and-offices-1024x1024.webp",
      points: [
        "Biometric access control integrated with HR time-attendance",
        "Multi-floor IP surveillance with high-capacity NVR servers",
        "Executive boardroom privacy protection and soundproofing",
        "Server room thermal sensors and 24/7 moisture/smoke alerts"
      ]
    },
    {
      id: "residential",
      title: "Residential Societies, Villas & Apartments",
      icon: Home,
      img: "/images/residential-spaces-and-homes-1024x1024.webp",
      points: [
        "Boom barrier and automatic number plate recognition (ANPR)",
        "Clubhouse, playground, and basement parking surveillance",
        "Full Color Night Vision cameras along perimeter boundary walls",
        "Resident mobile app integration for instant visitor authorization"
      ]
    },
    {
      id: "retail",
      title: "Retail Stores, Malls & Logistics Hubs",
      icon: ShoppingBag,
      img: "/images/Warehouses-and-retail-stores-1024x1024.webp",
      points: [
        "POS billing counter cash register zoom and anti-pilferage",
        "AI customer footfall heatmapping and queue management",
        "Warehouse loading dock and pallet rack wide-angle coverage",
        "Acoustic glass-break detectors and silent emergency panic buttons"
      ]
    },
    {
      id: "education",
      title: "Schools, Colleges & Campuses",
      icon: GraduationCap,
      img: "/images/Schools-Institues-1024x1024.webp",
      points: [
        "School bus GPS tracking and on-board CCTV monitoring",
        "Campus entrance visitor log and ID card scanning gates",
        "Corridor and playground safety monitoring with zero blind spots",
        "Centralized principal's office security dashboard"
      ]
    }
  ];

  return (
    <div className="inner-page-view industries-page animate-fade-in">
      {/* Banner matching Frame 31 */}
      <div className="inner-page-banner">
        <div className="banner-overlay" />
        <div className="banner-content">
          <h1 className="banner-title">
            Corporate & Residential Security Services in Gurgaon for Every Industry
          </h1>
          <p className="banner-subtitle">
            Industry-Specific Electronic Security, CCTV & Automation Architectures
          </p>

          <button 
            className="btn-gold-action large mx-auto mt-4"
            onClick={onOpenQuote}
          >
            <span>GET A FREE SECURITY CONSULTATION</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="inner-page-content">
        <section className="about-block text-center">
          <h2 className="block-title">Why Industry-Specific Security Matters</h2>
          <p className="block-text">
            Gurgaon's rapid urban and commercial growth has transformed it into a powerhouse of corporate parks, high-rise luxury societies, and sprawling logistics warehouses. Each industry presents distinct operational and threat vulnerabilities that generic CCTV kits cannot solve.
          </p>
          <p className="block-text">
            <strong>Sanware Integrated Solutions Pvt Ltd</strong> engineers specialized, brand-agnostic security ecosystems tailored to your exact regulatory requirements, building layouts, and operational workflows.
          </p>
        </section>

        {/* Industry Cards Grid */}
        <section className="industry-specs-grid">
          {industrySpecs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="industry-spec-card">
                <div className="industry-spec-media">
                  <img src={item.img} alt={item.title} className="industry-spec-img" loading="lazy" />
                  <div className="industry-spec-tag">
                    <IconComp size={16} />
                    <span>{item.title}</span>
                  </div>
                </div>

                <div className="industry-spec-body">
                  <h3 className="industry-spec-heading">{item.title}</h3>
                  <div className="industry-spec-points">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="spec-pt-row">
                        <CheckCircle2 size={16} className="text-gold shrink-0 mt-1" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    className="btn-gold-action outline mt-4"
                    onClick={onOpenQuote}
                  >
                    <span>Request Proposal for this Sector</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
