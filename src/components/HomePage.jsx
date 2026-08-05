import React from 'react';
import homeBg from '../assets/homebg.png';
import aboutHandshakeImg from '../assets/about_handshake.png';
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
  Percent,
  Headphones,
  FileText,
  Search,
  BadgeCheck
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
 {/* 2. STATS & ACHIEVEMENTS BAR */}
      <section className="w-full bg-[#6B0416] border-y border-[#8B0820] text-white select-none py-4 sm:py-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/20">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center text-center p-4 sm:p-5 space-y-2">
            <Award className="w-10 h-10 text-[#EBB638] stroke-[1.5]" />
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">8.5+</span>
            <span className="text-[11px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
              YEARS OF<br />EXCELLENCE
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center text-center p-4 sm:p-5 space-y-2">
            <Users className="w-10 h-10 text-[#EBB638] stroke-[1.5]" />
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">30+</span>
            <span className="text-[11px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
              PROFESSIONAL<br />EMPLOYEES
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center text-center p-4 sm:p-5 space-y-2">
            <Building className="w-10 h-10 text-[#EBB638] stroke-[1.5]" />
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">2</span>
            <span className="text-[11px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
              BRANCH<br />OFFICES
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center text-center p-4 sm:p-5 space-y-2">
            <Target className="w-10 h-10 text-[#EBB638] stroke-[1.5]" />
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">90%</span>
            <span className="text-[11px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
              LOAN SUCCESS<br />RATIO
            </span>
          </div>

          {/* Stat 5 */}
          <div className="flex flex-col items-center justify-center text-center p-4 sm:p-5 space-y-2 col-span-2 md:col-span-1">
            <Handshake className="w-10 h-10 text-[#EBB638] stroke-[1.5]" />
            <span className="text-xl sm:text-2xl font-serif-brand font-bold text-white tracking-wider uppercase">THOUSANDS</span>
            <span className="text-[11px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
              OF HAPPY<br />CUSTOMERS
            </span>
          </div>

        </div>
        
      </section>
{/* 2. ABOUT US SECTION */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="space-y-5 text-left">
            
            {/* Tagline */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-[#700619] uppercase tracking-normal">
                ABOUT US
              </span>
              <span className="w-10 h-[2px] bg-[#EBB638] inline-block rounded-full"></span>
            </div>

            {/* Headline with Gold Accent Line */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif-brand font-bold text-slate-900 leading-tight">
                Your Trusted Loan Partner
              </h2>
              <div className="w-16 h-[2px] bg-[#EBB638] rounded-full"></div>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xl">
              We are committed to delivering ethical, transparent and result-oriented financial solutions.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-1">
              {[
                "Ethical & Transparent Practices",
                "Expert Financial Guidance",
                "Fast Processing & Quick Approvals",
                "Strong Network with Banks & Financial Institutions"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#700619] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button 
                onClick={onOpenConsultation}
                className="bg-[#700619] hover:bg-[#500412] text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
              >
                <span>KNOW MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Handshake Image with Floating Card Badge */}
          <div className="relative lg:pl-4 pb-8 sm:pb-10 lg:pb-0 pr-2 sm:pr-6">
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img 
                src={aboutHandshakeImg} 
                alt="Your Trusted Loan Partner - Handshake" 
                className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover object-center transform hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Floating Contact / Financial Success Badge (Overlapping Bottom-Right) */}
            <div className="absolute -bottom-4 right-0 sm:-right-2 bg-[#FFFDF7] border border-rose-100/90 rounded-2xl px-4 py-4.5 sm:px-4.5 sm:py-5 shadow-2xl flex flex-col items-center justify-center text-center w-[140px] sm:w-[160px] z-20">
              
              {/* 2 Support Agents Icon */}
              <svg className="w-8 h-8 text-[#700619] mb-2" viewBox="0 0 32 32" fill="currentColor">
                {/* Headset Arc */}
                <path d="M 7 13 C 7 7.5 11 4 16 4 C 21 4 25 7.5 25 13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                {/* Earpieces */}
                <rect x="5" y="11" width="3" height="5" rx="1.5" fill="currentColor" />
                <rect x="24" y="11" width="3" height="5" rx="1.5" fill="currentColor" />
                {/* Person 1 */}
                <circle cx="12" cy="11" r="2.8" fill="currentColor" />
                <path d="M 8.5 18 C 8.5 15.5 10 14.2 12 14.2 C 14 14.2 15.5 15.5 15.5 18 Z" fill="currentColor" />
                {/* Person 2 */}
                <circle cx="20" cy="11" r="2.8" fill="currentColor" />
                <path d="M 16.5 18 C 16.5 15.5 18 14.2 20 14.2 C 22 14.2 23.5 15.5 23.5 18 Z" fill="currentColor" />
              </svg>

              <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-snug">We are here</p>
              <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-snug mb-0.5">for your</p>

              <h4 className="font-serif-brand font-bold text-base sm:text-lg text-[#700619] leading-tight">
                Financial
              </h4>
              <h4 className="font-serif-brand font-bold text-base sm:text-lg text-[#700619] leading-tight">
                Success
              </h4>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OUR PROCESS SECTION */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
        <div className="bg-[#FFFDF9] border border-rose-100/70 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs text-center">
          
          {/* Header */}
          <div className="space-y-2 mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#EBB638] inline-block rounded-full"></span>
              <span className="text-xs sm:text-sm font-bold text-[#700619] uppercase tracking-normal">
                OUR PROCESS
              </span>
              <span className="w-8 h-[1.5px] bg-[#EBB638] inline-block rounded-full"></span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-brand font-bold text-slate-900">
              Simple Steps to Your Financial Success
            </h2>
          </div>

          {/* 5 Steps Process Flow */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            
            {/* Connecting Dashed Line (Desktop) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[1.5px] border-t-2 border-dashed border-slate-300 z-0"></div>

            {/* Step 1: Consultation */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#700619] flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                <Users className="w-8 h-8 stroke-[1.8]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-500 mb-1">01</span>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1.5">Consultation</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[180px]">
                Share your needs with our experts.
              </p>
            </div>

            {/* Step 2: Documentation */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#700619] flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                <FileText className="w-8 h-8 stroke-[1.8]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-500 mb-1">02</span>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1.5">Documentation</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[180px]">
                Submit the required documents.
              </p>
            </div>

            {/* Step 3: Verification */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#700619] flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                <Search className="w-8 h-8 stroke-[1.8]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-500 mb-1">03</span>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1.5">Verification</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[180px]">
                Quick verification and assessment.
              </p>
            </div>

            {/* Step 4: Approval */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#700619] flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                <BadgeCheck className="w-8 h-8 stroke-[1.8]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-500 mb-1">04</span>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1.5">Approval</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[180px]">
                Get fast approval with best offers.
              </p>
            </div>

            {/* Step 5: Disbursement */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#700619] flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-9 h-9 text-white" viewBox="0 0 32 32" fill="currentColor">
                  <rect x="3" y="15" width="2.8" height="9" rx="0.6" fill="currentColor" />
                  <circle cx="4.4" cy="22" r="0.5" fill="#700619" />
                  <path d="M6.8 15h5.5c1.8 0 3.2 0.8 4.2 2.2l3.8 1.9c1.2 0.6 1.4 2.2 0.4 3.1l-2.8 2.2c-1 0.8-2.2 1.1-3.4 1.1H6.8V15z" fill="currentColor" />
                  <rect x="18" y="2.5" width="3" height="1.8" rx="0.6" fill="currentColor" />
                  <circle cx="19.5" cy="10" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="19.5" cy="10" r="4.8" fill="currentColor" />
                  <text x="19.5" y="12.2" fontSize="6.2" fontWeight="bold" fontFamily="sans-serif" fill="#700619" textAnchor="middle">₹</text>
                  <rect x="18" y="16.5" width="3" height="1.5" rx="0.4" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-500 mb-1">05</span>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1.5">Disbursement</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[180px]">
                Loan disbursed quickly into your account.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
