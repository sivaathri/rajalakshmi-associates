import React, { useState } from 'react';
import { Header } from './components/Header';
import { ContactUsPage } from './components/ContactUsPage';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState('Contact Us');

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col selection:bg-[#700619] selection:text-white">
      {/* Header UI */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenConsultation={() => setActiveTab('Contact Us')}
      />

      {/* Contact Us Page UI */}
      <main className="flex-grow">
        <ContactUsPage />
      </main>

      {/* Footer UI */}
      <Footer onOpenConsultation={() => setActiveTab('Contact Us')} />
    </div>
  );
}

export default App;
