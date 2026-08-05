import React from 'react';
import homeBg from '../assets/homebg.png';
import loanImg from '../assets/loan.png';
import insuranceImg from '../assets/insurance.png';
import propertiesImg from '../assets/properties.png';
import onlineServicesImg from '../assets/online services.png';
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
          <div className="max-w-2xl text-left space-y-6 animate-float-up">
            
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
        <div className="flex items-center justify-center gap-4 max-w-3xl mx-auto px-4">
          <span className="h-[1.5px] sm:h-[2px] flex-1 max-w-[140px] sm:max-w-[220px] bg-gradient-to-r from-transparent via-[#EBB638] to-[#EBB638] rounded-full"></span>
          <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.22em] shrink-0">
            OUR SERVICES
          </span>
          <span className="h-[1.5px] sm:h-[2px] flex-1 max-w-[140px] sm:max-w-[220px] bg-gradient-to-r from-[#EBB638] via-[#EBB638] to-transparent rounded-full"></span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif-brand font-bold text-slate-900">
          Comprehensive <span className="text-[#700619]">Financial Solutions</span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          All your financial needs, under one trusted roof.
        </p>
      </section>

      {/* 3. PRACTICE SERVICES CARDS GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Loans */}
          <div 
            onClick={onOpenConsultation}
            className="bg-white p-7 rounded-2xl border border-rose-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-20 h-20 mb-5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src={loanImg} alt="Loans" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-serif-brand font-bold text-2xl text-[#700619] mb-3">Loans</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium max-w-[240px] flex-grow">
              Customized loan solutions for individuals, businesses and professionals.
            </p>
            <div className="text-[#700619] font-bold text-sm flex items-center justify-center gap-1.5 group-hover:gap-2.5 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 2: Insurance */}
          <div 
            onClick={onOpenConsultation}
            className="bg-white p-7 rounded-2xl border border-rose-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-20 h-20 mb-5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src={insuranceImg} alt="Insurance" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-serif-brand font-bold text-2xl text-[#700619] mb-3">Insurance</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium max-w-[240px] flex-grow">
              Protect what matters most with our reliable insurance solutions.
            </p>
            <div className="text-[#700619] font-bold text-sm flex items-center justify-center gap-1.5 group-hover:gap-2.5 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 3: Properties */}
          <div 
            onClick={onOpenConsultation}
            className="bg-white p-7 rounded-2xl border border-rose-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-20 h-20 mb-5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src={propertiesImg} alt="Properties" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-serif-brand font-bold text-2xl text-[#700619] mb-3">Properties</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium max-w-[240px] flex-grow">
              Find your dream property or list with us for the right opportunity.
            </p>
            <div className="text-[#700619] font-bold text-sm flex items-center justify-center gap-1.5 group-hover:gap-2.5 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 4: Online Services */}
          <div 
            onClick={onOpenConsultation}
            className="bg-white p-7 rounded-2xl border border-rose-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-20 h-20 mb-5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src={onlineServicesImg} alt="Online Services" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-serif-brand font-bold text-2xl text-[#700619] mb-3">Online Services</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium max-w-[240px] flex-grow">
              Experience convenience with our quick and secure online services.
            </p>
            <div className="text-[#700619] font-bold text-sm flex items-center justify-center gap-1.5 group-hover:gap-2.5 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
