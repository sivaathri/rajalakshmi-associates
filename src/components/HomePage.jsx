import React from 'react';
import homeBg from '../assets/homebg.png';
import { 
  Award, 
  Users, 
  Building, 
  Target, 
  Handshake, 
  ArrowRight,
  ShieldCheck,
  Landmark,
  FileCheck,
  Percent
} from 'lucide-react';

export const HomePage = ({ onOpenConsultation = () => {} }) => {
  return (
    <div className="bg-[#FBF8F5] min-h-screen text-slate-800 font-sans pb-16 select-none">
      
      {/* 1. HERO SECTION WITH FULL PANORAMIC COVER BG & DIAGONAL CORNER ACCENTS */}
      <section 
        className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat border-b border-slate-200/60 pt-12 pb-20 lg:py-28 min-h-[460px] flex items-center"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
       
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-30 w-full">
          <div className="max-w-2xl text-left space-y-6">
            
            {/* Category Header */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-extrabold text-[#700619] tracking-[0.18em] uppercase">
                YOUR TRUSTED LOAN PARTNER
              </span>
            </div>

            {/* Main Headline with Serif Typography & Gold Underline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-serif-brand font-bold text-slate-900 leading-[1.12]">
              Building Trust. <br />
              Empowering Growth. <br />
              <span className="relative inline-block text-[#700619] pb-1">
                Creating Financial Success.
                {/* Brush stroke underline */}
                <span className="absolute bottom-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-[#EBB638] via-[#EBB638] to-amber-300 rounded-full"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-slate-700 font-medium leading-relaxed max-w-xl">
              At Rajalakshimi Associates, we provide ethical, transparent and result-oriented financial solutions to help you achieve your dreams.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onOpenConsultation}
                className="bg-[#700619] hover:bg-[#570413] text-white px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-[#700619]/25 hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={onOpenConsultation}
                className="bg-[#FFFDF7] hover:bg-[#FFF8E6] text-[#700619] border border-[#EBB638] px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-xs"
              >
                Know More
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES SECTION HEADER */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-8 text-center space-y-2">
        <div className="flex items-center justify-center gap-3">
          <span className="w-12 h-[2px] bg-[#EBB638]"></span>
          <span className="text-xs font-extrabold text-[#700619] uppercase tracking-[0.2em]">
            OUR SERVICES
          </span>
          <span className="w-12 h-[2px] bg-[#EBB638]"></span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif-brand font-bold text-slate-900">
          Comprehensive <span className="text-[#700619]">Financial Solutions</span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          All your financial needs, under one trusted roof.
        </p>
      </section>

      {/* 3. PRACTICE SERVICES CARDS GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all text-left space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#700619] flex items-center justify-center group-hover:bg-[#700619] group-hover:text-white transition-colors">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Home &amp; Business Loans</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tailored loan assistance for residential property, commercial expansion, and personal funding with competitive interest rates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all text-left space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#700619] flex items-center justify-center group-hover:bg-[#700619] group-hover:text-white transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Insurance Solutions</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comprehensive health, term life, motor, and property insurance policies ensuring maximum risk protection for your family.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all text-left space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#700619] flex items-center justify-center group-hover:bg-[#700619] group-hover:text-white transition-colors">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Property Verification</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Expert legal scrutiny of land title documents, encumbrance certificates (EC), mother deeds, and revenue records.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all text-left space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#700619] flex items-center justify-center group-hover:bg-[#700619] group-hover:text-white transition-colors">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Online Documentation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fast-track online processing for deeds, legal affidavits, notarization, and financial advisory consultation.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
