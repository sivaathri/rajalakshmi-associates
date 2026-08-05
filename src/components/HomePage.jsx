import React from 'react';
import homeHeroBgImg from '../assets/home_hero_bg.png';
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
      
      {/* 1. HERO SECTION WITH DIAGONAL CORNER RIBBONS & FLOATING STATS */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#FFFBF7] via-[#FFF8F0] to-[#F5ECE2] border-b border-slate-200/60 pt-10 pb-16 lg:py-20">
        
        {/* Top-Left Crimson/Gold Diagonal Ribbon Accent */}
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-44 sm:h-44 bg-gradient-to-br from-[#700619] via-[#8D0822] to-[#EBB638] transform -translate-x-16 -translate-y-16 rotate-45 z-10 shadow-lg pointer-events-none"></div>

        {/* Bottom-Right Crimson/Gold Diagonal Ribbon Accent */}
        <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-tl from-[#700619] via-[#8D0822] to-[#EBB638] transform translate-x-20 translate-y-20 rotate-45 z-10 shadow-xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT CONTENT (6.5 COLS) */}
            <div className="lg:col-span-7 space-y-6 text-left pr-0 lg:pr-4">
              
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
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#EBB638] via-[#EBB638] to-amber-300 rounded-full"></span>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
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

            {/* RIGHT SIDE: FLOATING STATS BADGE & HERO BUILDING (5.5 COLS) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white min-h-[320px] lg:min-h-[380px] group">
                
                {/* Building Image */}
                <img 
                  src={homeHeroBgImg} 
                  alt="Rajalakshimi Associates Headquarters" 
                  className="w-full h-full object-cover min-h-[320px] lg:min-h-[380px] transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Center-Left Translucent Floating Stats Card */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/80 space-y-3.5 z-30 max-w-[210px] text-left">
                  
                  {/* Stat 1 */}
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-[#700619] flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 leading-tight">8.5+</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Years of Excellence</div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-[#700619] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 leading-tight">30+</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Professional Employees</div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-[#700619] flex items-center justify-center shrink-0">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 leading-tight">2</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Branch Offices</div>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-[#700619] flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 leading-tight">90%</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Loan Success Ratio</div>
                    </div>
                  </div>

                  {/* Stat 5 */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-[#700619] flex items-center justify-center shrink-0">
                      <Handshake className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#700619] leading-tight">Thousands</div>
                      <div className="text-[10px] text-slate-500 font-semibold">of Happy Customers</div>
                    </div>
                  </div>

                </div>

              </div>
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
