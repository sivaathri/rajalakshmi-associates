import React, { useState } from 'react';
import { Header } from './components/Header';
import { ContactUsPage } from './components/ContactUsPage';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState('Contact Us');

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col selection:bg-[#700619] selection:text-white">
      {/* Responsive Header UI */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenConsultation={() => setActiveTab('Contact Us')}
      />

      {/* Dynamic View based on Active Tab */}
      <main className="flex-grow">
        {activeTab === 'Contact Us' ? (
          <ContactUsPage />
        ) : (
          <>
            <HeroSection onOpenConsultation={() => setActiveTab('Contact Us')} />
            <ServicesSection onOpenConsultation={() => setActiveTab('Contact Us')} />
            <WhyChooseUsSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => setActiveTab('Contact Us')} />
    </div>
  );
}

export default App;
