import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutUsPage } from './components/AboutUsPage';
import { ContactUsPage } from './components/ContactUsPage';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export function App() {
  const [activeTab, setActiveTab] = useState('Home');

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
        ) : (
          <HomePage onOpenConsultation={() => setActiveTab('Contact Us')} />
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
