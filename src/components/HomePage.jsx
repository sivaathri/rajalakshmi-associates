import React from 'react';
import homeBg from '../assets/homebg.png';
import aboutHandshakeImg from '../assets/about_handshake.png';
import loanImg from '../assets/loan.png';
import insuranceImg from '../assets/insurance.png';
import propertiesImg from '../assets/properties.png';
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
  BadgeCheck,
  Star,
  ChevronLeft,
  ChevronRight,
  PhoneCall
} from 'lucide-react';

export const HomePage = ({ onOpenConsultation = () => {}, setActiveTab = () => {} }) => {
  const testimonials = [
    {
      id: 1,
      quote: "Rajalakshimi Associates made my home loan process so smooth and hassle-free. Their dedication and support are truly commendable.",
      name: "Karthik S.",
      role: "Home Loan Customer",
      rating: 5
    },
    {
      id: 2,
      quote: "Excellent service and quick response from the team. They guided me at every step and got me the best loan offer.",
      name: "Priya M.",
      role: "Business Loan Customer",
      rating: 5
    },
    {
      id: 3,
      quote: "Very professional and transparent approach. I highly recommend Rajalakshimi Associates for anyone looking for financial solutions.",
      name: "Ramesh T.",
      role: "Personal Loan Customer",
      rating: 5
    },
    {
      id: 4,
      quote: "Outstanding support from Rajalakshimi Associates. They handled our documentation seamlessly and got the approval in record time.",
      name: "Anand R.",
      role: "Commercial Loan Customer",
      rating: 5
    },
    {
      id: 5,
      quote: "Extremely helpful advisors who guided us through the complex loan options and secured the lowest interest rate for our dream home.",
      name: "Sowmya V.",
      role: "Housing Loan Customer",
      rating: 5
    },
    {
      id: 6,
      quote: "Fast-track processing and transparent guidance. Rajalakshimi Associates is the most reliable financial partner in Puducherry.",
      name: "Venkatesh K.",
      role: "Property Loan Customer",
      rating: 5
    }
  ];

  const [activeSlide, setActiveSlide] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlideIndex = Math.max(0, testimonials.length - itemsPerPage);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? maxSlideIndex : prev - 1));
  };

  return (
    <div className="bg-[#FBF8F5] min-h-screen text-slate-800 font-sans pb-2 select-none overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH FULL PANORAMIC COVER BG & DIAGONAL CORNER ACCENTS */}
      <section 
        className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat border-b border-slate-200/60 pt-2 pb-8 sm:pt-3 sm:pb-12 lg:pt-4 lg:pb-14 flex items-start"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
       
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-30 w-full">
          <div className="max-w-2xl text-left space-y-4 sm:space-y-6 animate-float-up">
            
            {/* Category Header */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-[#700619] tracking-[0.15em] sm:tracking-[0.18em] uppercase">
                YOUR TRUSTED LOAN PARTNER
              </span>
            </div>

            {/* Main Headline with Serif Typography & Gold Underline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-serif-brand font-bold text-slate-900 leading-[1.15] sm:leading-[1.12]">
              Building Trust. <br />
              Empowering Growth. <br />
              <span className="relative inline-block text-[#700619] pb-1">
                Creating Financial Success.
                {/* Brush stroke underline */}
                <span className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[3.5px] bg-gradient-to-r from-[#EBB638] via-[#EBB638] to-amber-300 rounded-full"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-slate-700 font-medium leading-relaxed max-w-xl">
              At Rajalakshimi Associates, we provide ethical, transparent and result-oriented financial solutions to help you achieve your dreams.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button 
                onClick={onOpenConsultation}
                className="bg-[#700619] hover:bg-[#570413] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#700619]/25 hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => setActiveTab('Loans')}
                className="bg-[#FFFDF7] hover:bg-[#FFF8E6] text-[#700619] border border-[#EBB638] px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-xs text-center"
              >
                Explore Loans
              </button>
            </div>

          </div>
        </div>
      </section>

      
     
      {/* 2. OUR SERVICES SECTION HEADER */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-12 pb-6 sm:pb-8 text-center space-y-2">
        <div className="flex items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto px-2 sm:px-4">
          <span className="h-[1.5px] sm:h-[2px] flex-1 max-w-[80px] sm:max-w-[220px] bg-gradient-to-r from-transparent via-[#EBB638] to-[#EBB638] rounded-full"></span>
          <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em] sm:tracking-[0.22em] shrink-0">
            OUR SERVICES
          </span>
          <span className="h-[1.5px] sm:h-[2px] flex-1 max-w-[80px] sm:max-w-[220px] bg-gradient-to-r from-[#EBB638] via-[#EBB638] to-transparent rounded-full"></span>
        </div>

        <h2 className="text-xl sm:text-3xl md:text-4xl font-serif-brand font-bold text-slate-900">
          Comprehensive <span className="text-[#700619]">Financial Solutions</span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          All your financial needs, under one trusted roof.
        </p>
      </section>

      {/* 3. PRACTICE SERVICES CARDS GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: Loans */}
          <div 
            onClick={() => setActiveTab('Loans')}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-rose-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src={loanImg} alt="Loans" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-serif-brand font-bold text-xl sm:text-2xl text-[#700619] mb-2 sm:mb-3">Loans</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 sm:mb-6 font-medium max-w-[240px] flex-grow">
              Customized loan solutions for individuals, businesses and professionals.
            </p>
            <div className="text-[#700619] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 group-hover:gap-2.5 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 2: Insurance */}
          <div 
            onClick={() => setActiveTab('Insurance')}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-rose-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src={insuranceImg} alt="Insurance" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-serif-brand font-bold text-xl sm:text-2xl text-[#700619] mb-2 sm:mb-3">Insurance</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 sm:mb-6 font-medium max-w-[240px] flex-grow">
              Protect what matters most with our reliable insurance solutions.
            </p>
            <div className="text-[#700619] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 group-hover:gap-2.5 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 3: Properties */}
          <div 
            onClick={() => setActiveTab('Properties')}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-rose-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src={propertiesImg} alt="Properties" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-serif-brand font-bold text-xl sm:text-2xl text-[#700619] mb-2 sm:mb-3">Properties</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 sm:mb-6 font-medium max-w-[240px] flex-grow">
              Find your dream property or list with us for the right opportunity.
            </p>
            <div className="text-[#700619] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 group-hover:gap-2.5 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

        </div>
      </section>

      {/* STATS & ACHIEVEMENTS BAR */}
      <section className="w-full bg-[#6B0416] border-y border-[#8B0820] text-white select-none py-4 sm:py-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 divide-white/15">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center text-center p-3 sm:p-5 space-y-1.5 sm:space-y-2">
            <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#EBB638] stroke-[1.5]" />
            <span className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">8.5+</span>
            <span className="text-[10px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
              YEARS OF<br />EXCELLENCE
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center text-center p-3 sm:p-5 space-y-1.5 sm:space-y-2">
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#EBB638] stroke-[1.5]" />
            <span className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">30+</span>
            <span className="text-[10px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
              PROFESSIONAL<br />EMPLOYEES
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center text-center p-3 sm:p-5 space-y-1.5 sm:space-y-2">
            <Building className="w-8 h-8 sm:w-10 sm:h-10 text-[#EBB638] stroke-[1.5]" />
            <span className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">2</span>
            <span className="text-[10px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
              BRANCH<br />OFFICES
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center text-center p-3 sm:p-5 space-y-1.5 sm:space-y-2">
            <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[#EBB638] stroke-[1.5]" />
            <span className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">90%</span>
            <span className="text-[10px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
              LOAN SUCCESS<br />RATIO
            </span>
          </div>

          {/* Stat 5 */}
          <div className="flex flex-col items-center justify-center text-center p-3 sm:p-5 space-y-1.5 sm:space-y-2 col-span-2 sm:col-span-1">
            <Handshake className="w-8 h-8 sm:w-10 sm:h-10 text-[#EBB638] stroke-[1.5]" />
            <span className="text-lg sm:text-2xl font-serif-brand font-bold text-white tracking-wider uppercase">THOUSANDS</span>
            <span className="text-[10px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
              OF HAPPY<br />CUSTOMERS
            </span>
          </div>

        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="space-y-4 sm:space-y-5 text-left">
            
            {/* Tagline */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-[#700619] uppercase tracking-normal">
                ABOUT US
              </span>
              <span className="w-8 sm:w-10 h-[2px] bg-[#EBB638] inline-block rounded-full"></span>
            </div>

            {/* Headline with Gold Accent Line */}
            <div className="space-y-2.5 sm:space-y-3">
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-serif-brand font-bold text-slate-900 leading-tight">
                Your Trusted Loan Partner
              </h2>
              <div className="w-14 sm:w-16 h-[2px] bg-[#EBB638] rounded-full"></div>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xl">
              We are committed to delivering ethical, transparent and result-oriented financial solutions.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              {[
                "Ethical & Transparent Practices",
                "Expert Financial Guidance",
                "Fast Processing & Quick Approvals",
                "Strong Network with Banks & Financial Institutions"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#700619] text-white flex items-center justify-center shrink-0 shadow-xs">
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
                className="w-full sm:w-auto bg-[#700619] hover:bg-[#500412] text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
              >
                <span>KNOW MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Handshake Image with Floating Card Badge */}
          <div className="relative lg:pl-4 pb-6 sm:pb-8 lg:pb-0 pr-1 sm:pr-4">
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img 
                src={aboutHandshakeImg} 
                alt="Your Trusted Loan Partner - Handshake" 
                className="w-full h-[280px] xs:h-[320px] sm:h-[380px] lg:h-[420px] object-cover object-center transform hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Floating Contact / Financial Success Badge (Overlapping Bottom-Right) */}
            <div className="absolute -bottom-3 right-0 sm:-right-2 bg-[#FFFDF9] border border-rose-100/90 rounded-2xl px-3.5 py-4 sm:px-4.5 sm:py-5 shadow-2xl flex flex-col items-center justify-center text-center w-[130px] xs:w-[145px] sm:w-[160px] z-20">
              
              {/* 2 Support Agents Icon */}
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#700619] mb-1.5 sm:mb-2" viewBox="0 0 32 32" fill="currentColor">
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

              <p className="text-[10px] sm:text-xs text-slate-600 font-medium leading-snug">We are here</p>
              <p className="text-[10px] sm:text-xs text-slate-600 font-medium leading-snug mb-0.5">for your</p>

              <h4 className="font-serif-brand font-bold text-sm sm:text-lg text-[#700619] leading-tight">
                Financial
              </h4>
              <h4 className="font-serif-brand font-bold text-sm sm:text-lg text-[#700619] leading-tight">
                Success
              </h4>
            </div>

          </div>

        </div>
      </section>

      {/* OUR PROCESS SECTION */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-12">
        <div className="bg-[#FFFDF9] border border-rose-100/70 rounded-3xl p-5 sm:p-10 lg:p-12 shadow-xs text-center">
          
          {/* Header */}
          <div className="space-y-2 mb-8 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 sm:gap-3">
              <span className="w-6 sm:w-8 h-[1.5px] bg-[#EBB638] inline-block rounded-full"></span>
              <span className="text-xs sm:text-sm font-bold text-[#700619] uppercase tracking-normal">
                OUR PROCESS
              </span>
              <span className="w-6 sm:w-8 h-[1.5px] bg-[#EBB638] inline-block rounded-full"></span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif-brand font-bold text-slate-900">
              Simple Steps to Your Financial Success
            </h2>
          </div>

          {/* 5 Steps Process Flow */}
          <div className="relative grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4">
            
            {/* Connecting Dashed Line (Desktop) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[1.5px] border-t-2 border-dashed border-slate-300 z-0"></div>

            {/* Step 1: Consultation */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#700619] flex items-center justify-center text-white shadow-lg mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-500 mb-1">01</span>
              <h3 className="font-bold text-sm sm:text-lg text-slate-900 mb-1">Consultation</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[180px]">
                Share your needs with our experts.
              </p>
            </div>

            {/* Step 2: Documentation */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#700619] flex items-center justify-center text-white shadow-lg mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <FileText className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-500 mb-1">02</span>
              <h3 className="font-bold text-sm sm:text-lg text-slate-900 mb-1">Documentation</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[180px]">
                Submit the required documents.
              </p>
            </div>

            {/* Step 3: Verification */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#700619] flex items-center justify-center text-white shadow-lg mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <Search className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-500 mb-1">03</span>
              <h3 className="font-bold text-sm sm:text-lg text-slate-900 mb-1">Verification</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[180px]">
                Quick verification and assessment.
              </p>
            </div>

            {/* Step 4: Approval */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#700619] flex items-center justify-center text-white shadow-lg mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <BadgeCheck className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-500 mb-1">04</span>
              <h3 className="font-bold text-sm sm:text-lg text-slate-900 mb-1">Approval</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[180px]">
                Get fast approval with best offers.
              </p>
            </div>

            {/* Step 5: Disbursement */}
            <div className="relative z-10 flex flex-col items-center text-center group xs:col-span-2 sm:col-span-1">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#700619] flex items-center justify-center text-white shadow-lg mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" viewBox="0 0 32 32" fill="currentColor">
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
              <h3 className="font-bold text-sm sm:text-lg text-slate-900 mb-1">Disbursement</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[180px]">
                Loan disbursed quickly into your account.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHAT OUR CLIENTS SAY SECTION */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-14">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-6 sm:mb-12">
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#EBB638] inline-block rounded-full"></span>
          <span className="text-xs sm:text-sm font-bold text-[#700619] uppercase tracking-normal">
            WHAT OUR CLIENTS SAY
          </span>
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#EBB638] inline-block rounded-full"></span>
        </div>

        {/* Carousel Container with Side Arrows */}
        <div className="relative flex items-center gap-1.5 sm:gap-4">
          
          {/* Left Arrow Button */}
          <button 
            onClick={prevSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#700619] text-[#700619] flex items-center justify-center hover:bg-[#700619] hover:text-white transition-colors cursor-pointer shrink-0 z-20 shadow-xs"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>

          {/* Sliding Track Viewport */}
          <div className="overflow-hidden w-full py-2">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeSlide * (100 / itemsPerPage)}%)`
              }}
            >
              {testimonials.map((item) => (
                <div 
                  key={item.id}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2 sm:px-3"
                >
                  <div className="bg-[#FFFDF9] border border-rose-100/80 rounded-2xl p-5 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left h-full group">
                    <div>
                      {/* Quote Icon */}
                      <div className="text-slate-800 text-2xl sm:text-3xl font-serif leading-none mb-2 sm:mb-3 font-bold select-none">
                        “
                      </div>
                      
                      {/* Testimonial Quote Text */}
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4 sm:mb-6">
                        {item.quote}
                      </p>
                    </div>

                    <div>
                      {/* 5 Rating Stars */}
                      <div className="flex items-center gap-1 mb-2.5 sm:mb-3">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#DDA82A] text-[#DDA82A]" />
                        ))}
                      </div>

                      {/* Author Name */}
                      <p className="text-xs sm:text-sm font-semibold text-slate-700">
                        – {item.name}
                      </p>

                      {/* Author Role */}
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={nextSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#700619] text-[#700619] flex items-center justify-center hover:bg-[#700619] hover:text-white transition-colors cursor-pointer shrink-0 z-20 shadow-xs"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: maxSlideIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeSlide === idx 
                  ? "w-6 h-2 bg-[#700619]" 
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </section>

      {/* NEED FINANCIAL ASSISTANCE CTA BANNER */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-6 pt-2">
        <div className="bg-[#FFFDF9] border border-rose-100/80 rounded-2xl p-5 sm:p-8 lg:px-10 lg:py-7 shadow-xs flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 sm:gap-6">
          
          {/* Left: Phone Circle Badge + Text */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#700619] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#700619]/20">
              <PhoneCall className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-serif-brand font-bold text-lg sm:text-2xl lg:text-3xl text-slate-900 mb-1">
                Need Financial Assistance?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Our experts are ready to help you with the right solutions.
              </p>
            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="w-full sm:w-auto shrink-0">
            <button 
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-[#700619] hover:bg-[#500412] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
            >
              <span>CONTACT US TODAY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
