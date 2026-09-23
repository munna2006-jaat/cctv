import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NavDrawer from './components/NavDrawer';
import BottomBar from './components/BottomBar';
import HeroSection from './components/HeroSection';
import AboutTeaser from './components/AboutTeaser';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import WhyChooseUs from './components/WhyChooseUs';
import CameraSolutions from './components/CameraSolutions';
import ProcessSection from './components/ProcessSection';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import SuccessModal from './components/SuccessModal';
import QuoteModal from './components/QuoteModal';

// Dedicated Inner Pages matching reference recording
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import IndustriesPage from './components/pages/IndustriesPage';
import ContactPage from './components/pages/ContactPage';

import './styles/index.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/faq.css';
import './styles/footer.css';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [leadSuccessData, setLeadSuccessData] = useState(null);

  // Sync hash routing with view state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'industries', 'about', 'contact'].includes(hash)) {
        setCurrentView(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view, sectionId = null) => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const handleQuoteSuccess = (data) => {
    setLeadSuccessData(data);
  };

  return (
    <div className="app-viewport-wrapper">
      {/* Mobile & Desktop Shell */}
      <main className="main-site-container">
        {/* Persistent Header */}
        <Header 
          currentView={currentView}
          onNavigate={handleNavigate}
          onToggleMenu={() => setIsNavDrawerOpen(true)}
        />

        {/* View Router */}
        {currentView === 'home' && (
          <div className="view-container home-view animate-fade-in">
            <HeroSection onQuoteSuccess={handleQuoteSuccess} />
            <AboutTeaser onLearnMore={() => handleNavigate('about')} />
            <ServicesSection onServiceSelect={() => handleNavigate('services')} />
            <IndustriesSection onNavigateIndustries={() => handleNavigate('industries')} />
            <WhyChooseUs onScheduleAssessment={() => setIsQuoteModalOpen(true)} />
            <CameraSolutions />
            <ProcessSection />
            <Certifications />
            <Testimonials />
            <FAQSection />
          </div>
        )}

        {currentView === 'about' && (
          <AboutPage 
            onOpenQuote={() => setIsQuoteModalOpen(true)} 
          />
        )}

        {currentView === 'services' && (
          <ServicesPage 
            onQuoteSuccess={handleQuoteSuccess} 
          />
        )}

        {currentView === 'industries' && (
          <IndustriesPage 
            onOpenQuote={() => setIsQuoteModalOpen(true)} 
          />
        )}

        {currentView === 'contact' && (
          <ContactPage 
            onQuoteSuccess={handleQuoteSuccess} 
          />
        )}

        {/* Persistent Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Mobile Sticky Bottom Bar */}
        <BottomBar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      </main>

      {/* Mobile Slide-Out Drawer matching Frame 10 */}
      <NavDrawer 
        isOpen={isNavDrawerOpen}
        onClose={() => setIsNavDrawerOpen(false)}
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onSuccess={handleQuoteSuccess}
      />

      {/* Success Modal Confirmation */}
      <SuccessModal 
        leadData={leadSuccessData} 
        onClose={() => setLeadSuccessData(null)} 
      />
    </div>
  );
}
