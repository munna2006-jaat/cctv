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
import './styles/index.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/faq.css';
import './styles/footer.css';

export default function App() {
  const [leadSuccessData, setLeadSuccessData] = useState(null);

  const handleQuoteSuccess = (data) => {
    setLeadSuccessData(data);
  };

  return (
    <div className="app-viewport-wrapper">
      {/* Main Mobile-First Website Shell */}
      <main className="mobile-app-container">
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
