import React, { useState } from 'react';
import { Header } from './components/Header';

export function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-[#700619] selection:text-white">
      {/* Exact Header UI matching your reference image */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenConsultation={() => alert('Free Consultation Clicked')}
      />
    </div>
  );
}

export default App;
