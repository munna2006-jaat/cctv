import React, { useState } from 'react';
import Header from './components/Header';
import BottomBar from './components/BottomBar';
import HeroSection from './components/HeroSection';
import UrgencyBanner from './components/UrgencyBanner';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import CameraSolutions from './components/CameraSolutions';
import ProcessSection from './components/ProcessSection';
import Certifications from './components/Certifications';
import ClientsMarquee from './components/ClientsMarquee';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import SuccessModal from './components/SuccessModal';
import { Smartphone, Monitor } from 'lucide-react';
import './styles/index.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/faq.css';
import './styles/footer.css';

export default function App() {
  const [isDesktopMode, setIsDesktopMode] = useState(false);
  const [leadSuccessData, setLeadSuccessData] = useState(null);

  const handleQuoteSuccess = (data) => {
    setLeadSuccessData(data);
  };

  return (
    <div className={`app-viewport-wrapper ${isDesktopMode ? 'desktop-mode-active' : ''}`}>
      {/* Top Preview Control Bar on Desktop */}
      <div className="viewport-control-bar">
        <div className="brand-indicator">
          <span className="dot"></span>
          <span>SANWARE CCTV WEB PREVIEW</span>
        </div>

        <div className="view-toggle-btns">
          <button 
            className={`view-btn ${!isDesktopMode ? 'active' : ''}`}
            onClick={() => setIsDesktopMode(false)}
            aria-label="Mobile Simulation View"
          >
            <Smartphone size={14} />
            <span>Mobile View (Ref. Match)</span>
          </button>

          <button 
            className={`view-btn ${isDesktopMode ? 'active' : ''}`}
            onClick={() => setIsDesktopMode(true)}
            aria-label="Desktop Expanded View"
          >
            <Monitor size={14} />
            <span>Expanded Desktop View</span>
          </button>
        </div>
      </div>

      {/* Main Mobile-First Website Shell */}
      <main className={`mobile-app-container ${isDesktopMode ? 'desktop-mode' : ''}`}>
        <Header />
        <HeroSection onQuoteSuccess={handleQuoteSuccess} />
        <UrgencyBanner />
        <WhyChooseUs />
        <ServicesSection />
        <CameraSolutions />
        <ProcessSection />
        <Certifications />
        <ClientsMarquee />
        <Testimonials />
        <FAQSection />
        <Footer />
        <BottomBar />
      </main>

      {/* Lead Confirmation Popup */}
      <SuccessModal 
        leadData={leadSuccessData} 
        onClose={() => setLeadSuccessData(null)} 
      />
    </div>
  );
}
