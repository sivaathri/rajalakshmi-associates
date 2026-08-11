import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutUsPage } from './components/AboutUsPage';
import { LoansPage } from './components/LoansPage';
import { InsurancePage } from './components/InsurancePage';
import { PropertiesPage } from './components/PropertiesPage';
import { WhyChooseUsPage } from './components/WhyChooseUsPage';
import { GalleryPage } from './components/GalleryPage';
import { ContactUsPage } from './components/ContactUsPage';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export function App() {
  const [activeTab, setActiveTab] = useState('Home');

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col selection:bg-[#700619] selection:text-white">
      {/* Header UI */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenConsultation={() => setActiveTab('Contact Us')}
      />

      {/* Main Content Area - Smooth keyframe transition on tab change */}
      <main key={activeTab} className="flex-grow animate-page-entry">
        {activeTab === 'Contact Us' ? (
          <ContactUsPage />
        ) : activeTab === 'About Us' ? (
          <AboutUsPage onOpenConsultation={() => setActiveTab('Contact Us')} />
        ) : activeTab === 'Loans' ? (
          <LoansPage onOpenConsultation={() => setActiveTab('Contact Us')} />
        ) : activeTab === 'Insurance' ? (
          <InsurancePage onOpenConsultation={() => setActiveTab('Contact Us')} />
        ) : activeTab === 'Properties' ? (
          <PropertiesPage onOpenConsultation={() => setActiveTab('Contact Us')} />
        ) : activeTab === 'Why Choose Us' ? (
          <WhyChooseUsPage onOpenConsultation={() => setActiveTab('Contact Us')} />
        ) : activeTab === 'Gallery' ? (
          <GalleryPage onOpenConsultation={() => setActiveTab('Contact Us')} />
        ) : (
          <HomePage 
            onOpenConsultation={() => setActiveTab('Contact Us')} 
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Footer UI */}
      <Footer 
        onOpenConsultation={() => setActiveTab('Contact Us')} 
        setActiveTab={setActiveTab}
      />

      {/* Floating Bottom Right Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
