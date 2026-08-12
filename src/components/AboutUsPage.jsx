import React from 'react';
import bannerBgImg from '../assets/contactbg.png';
import aboutHandshakeImg from '../assets/about_handshake.png';
import officeReceptionImg from '../assets/office_reception.png';
import buildingHeroImg from '../assets/contact_hero_building.png';
import aboutHeroDeskImg from '../assets/about_hero_desk.png';
import { 
  Award, 
  Users, 
  Building2, 
  Target, 
  ShieldCheck, 
  HeartHandshake, 
  Scale, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Clock, 
  Landmark, 
  Compass, 
  Sparkles,
  FileCheck2,
  TrendingUp
} from 'lucide-react';

export const AboutUsPage = ({ onOpenConsultation = () => {}, setActiveTab = () => {} }) => {
  const stats = [
    { icon: Award, number: "8.5+", label: "Years of Excellence", desc: "Trusted financial advisory since inception" },
    { icon: Users, number: "30+", label: "Professional Team", desc: "Dedicated loan & legal consultants" },
    { icon: Building2, number: "2", label: "Branch Offices", desc: "Serving Puducherry & Tamilnadu" },
    { icon: Target, number: "90%", label: "Success Ratio", desc: "Smooth loan & documentation approval" },
  ];

  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Integrity & Transparency",
      desc: "100% honest guidance with zero hidden charges or ambiguous terms. We keep you informed at every step."
    },
    {
      icon: TrendingUp,
      title: "Speed & Efficiency",
      desc: "Fast-track processing, quick bank sanctioning, and hassle-free documentation to save your valuable time."
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric Approach",
      desc: "Every financial requirement is unique. We provide customized solutions tailored to your specific budget and goals."
    },
    {
      icon: Scale,
      title: "Legal & Regulatory Compliance",
      desc: "Strict adherence to RBI guidelines, banking norms, and statutory property laws for complete peace of mind."
    }
  ];

  const servicesBreakdown = [
    {
      title: "Financial & Loan Solutions",
      desc: "End-to-end guidance for Home Loans, Mortgage Loans, Business Expansion Loans, and Personal Funding with competitive interest rates.",
      icon: Landmark,
      features: ["Low interest rates", "Doorstep documentation", "Flexible tenure options"]
    },
    {
      title: "Insurance Services",
      desc: "Comprehensive coverage plans for Life, Health, Motor, and Commercial assets to safeguard your family's future and business stability.",
      icon: ShieldCheck,
      features: ["Customized policy selection", "Quick claim assistance", "Family protection plans"]
    },
    {
      title: "Property & Legal Documentation",
      desc: "Expert legal opinion, encumbrance verification, property registration, title search, and notary documentation support.",
      icon: FileCheck2,
      features: ["Title verification", "Registration assistance", "Encumbrance certificates"]
    }
  ];

  const bankingPartners = [
    "State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", 
    "Canara Bank", "Indian Bank", "Bank of Baroda", "Bajaj Finserv", 
    "LIC Housing Finance", "Sundaram Finance"
  ];

  return (
    <div className="bg-[#FAF7F4] min-h-screen text-slate-800 font-sans pb-12 select-none overflow-x-hidden">
      
      {/* 1. HERO BANNER MATCHING EXACT REFERENCE IMAGE */}
      <section className="w-full relative overflow-hidden bg-[#FAF7F2] pt-2 pb-6 sm:pt-3 sm:pb-8 lg:pt-4 lg:pb-10 flex items-start">
        
        {/* RIGHT FULL-BLEED IMAGE CONTAINER (STRETCHES 100% TO RIGHT SCREEN EDGE) */}
        <div className="absolute top-0 bottom-0 right-0 w-full lg:w-[48%] xl:w-[50%] hidden lg:block overflow-hidden z-10 pointer-events-none">
          
          {/* Slanted Image Container Stretching to Right Edge */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-2xl z-20"
            style={{ 
              backgroundImage: `url(${aboutHeroDeskImg})`,
              clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          >
            {/* Warm ambient gradient over image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

        </div>

        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 pt-1 pb-6 sm:pt-2 sm:pb-8 lg:pt-2 lg:pb-8 relative z-20">
          
          {/* LEFT COLUMN: TEXT CONTENT (MAX-W-2XL) */}
          <div className="max-w-xl lg:max-w-2xl text-left space-y-4 sm:space-y-5 relative">
            
            {/* Background Accent 1: Golden Concentric Circles in Top Left */}
            <svg className="absolute top-0 left-0 w-28 h-28 sm:w-32 sm:h-32 opacity-30 pointer-events-none -translate-x-5 -translate-y-5" viewBox="0 0 100 100" fill="none">
              <circle cx="20" cy="20" r="20" stroke="#EBB638" strokeWidth="1" />
              <circle cx="20" cy="20" r="35" stroke="#EBB638" strokeWidth="1" />
              <circle cx="20" cy="20" r="50" stroke="#EBB638" strokeWidth="1" />
              <circle cx="20" cy="20" r="65" stroke="#EBB638" strokeWidth="1" />
            </svg>

            {/* Background Accent 2: Golden Dot Matrix Pattern in Bottom Left */}
            <div className="absolute bottom-4 left-4 opacity-25 pointer-events-none hidden sm:grid grid-cols-5 gap-1.5">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#EBB638]" />
              ))}
            </div>

            {/* Category Tagline with Horizontal Line Rules */}
            <div className="flex items-center gap-3 relative z-10">
              <span className="w-8 sm:w-12 h-[1.5px] bg-[#EBB638] rounded-full inline-block" />
              <span className="text-[11px] sm:text-xs font-extrabold text-slate-800 tracking-[0.2em] uppercase">
                ABOUT RAJALAKSHMY ASSOCIATES
              </span>
              <span className="w-8 sm:w-12 h-[1.5px] bg-[#EBB638] rounded-full inline-block" />
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-serif-brand font-bold text-slate-900 leading-[1.18] relative z-10">
              Pioneering Trust & Excellence <br />
              in <span className="text-[#700619]">Financial & Legal Solutions</span>
            </h1>

            {/* Separator Accent Line with Diamond */}
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-12 h-[2.5px] bg-[#EBB638] rounded-full" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#EBB638]" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-xl relative z-10">
              <p>
                With a steadfast commitment to integrity, transparency, and client success, Rajalakshmy Associates has been a trusted partner for individuals, families, and businesses across Puducherry & Tamilnadu.
              </p>
              <p>
                We combine deep domain expertise with personalized solutions to navigate your financial and legal journey with confidence.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 relative z-10">
              <button 
                onClick={() => setActiveTab('Loans')}
                className="bg-[#700619] hover:bg-[#520412] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Explore Loans</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={onOpenConsultation}
                className="bg-transparent hover:bg-rose-50 text-[#700619] border-2 border-[#700619] px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 2. WHO WE ARE (OUR STORY & LEGACY) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em]">
                WHO WE ARE
              </span>
              <span className="w-10 h-[2px] bg-[#EBB638] rounded-full inline-block" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif-brand font-bold text-slate-900 leading-tight">
              Bridging Dreams & Financial Opportunities with <span className="text-[#700619]">Absolute Integrity</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              At <strong className="text-slate-900 font-semibold">Rajalakshmy Associates</strong>, we believe financial peace of mind is the cornerstone of every successful family and business. Established in Puducherry, we have built a reputation for excellence by guiding clients through the intricacies of loans, insurance, and legal property documentation.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Our expert advisors work closely with leading public and private banks to ensure fast approvals, minimal paperwork, and customized solutions that fit your budget and long-term aspirations.
            </p>

            {/* Checklist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Direct Tie-ups with 25+ Leading Banks",
                "Dedicated Personal Loan Manager",
                "Doorstep Document Collection",
                "Complete Transparency No Hidden Fees",
                "Expert Legal Title Search & Notary",
                "Tailored Insurance Protection Plans"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-slate-100 shadow-xs">
                  <div className="w-5 h-5 rounded-full bg-[#700619] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-3 flex flex-wrap gap-4">
              <button 
                onClick={onOpenConsultation}
                className="bg-[#700619] hover:bg-[#520412] text-white px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider"
              >
                <span>Speak to Our Experts</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Layered Images & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img 
                src={aboutHandshakeImg} 
                alt="Rajalakshmy Associates Handshake" 
                className="w-full h-[320px] sm:h-[400px] object-cover object-center transform hover:scale-103 transition-transform duration-500"
              />
            </div>

            {/* Secondary Overlapping Image */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl z-20">
              <img 
                src={officeReceptionImg} 
                alt="Office Reception" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-4 -right-4 bg-[#700619] text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-rose-900/60 z-30 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#EBB638]">8.5+</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-100">Years of Trust</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. STATS HIGHLIGHT GRID */}
      <section className="w-full bg-[#6B0416] border-y border-[#8B0820] text-white py-8 sm:py-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center space-y-2 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
                  <div className="w-12 h-12 rounded-full bg-[#EBB638]/20 flex items-center justify-center text-[#EBB638] mb-1">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">{stat.number}</span>
                  <span className="text-xs sm:text-sm font-bold text-amber-200 uppercase tracking-wide">{stat.label}</span>
                  <p className="text-[11px] sm:text-xs text-rose-100/75 leading-tight">{stat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION DUAL SHOWCASE */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em]">
            OUR GUIDING PRINCIPLES
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-brand font-bold text-slate-900">
            Driven by Purpose. Grounded in Values.
          </h2>
          <div className="w-16 h-[2.5px] bg-[#EBB638] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Vision Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-rose-100 shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#700619]" />
            <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-[#700619] mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-brand font-bold text-[#700619] mb-3">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be the most reliable, client-preferred, and transparent financial consultancy in South India—empowering individuals and businesses to turn their dreams into reality with financial confidence.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-rose-100 shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#EBB638]" />
            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-[#966810] mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-brand font-bold text-[#966810] mb-3">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To deliver end-to-end loan assistance, insurance protection, and property legal verification with utmost clarity, speed, and integrity, ensuring an effortless experience for every customer.
            </p>
          </div>

        </div>
      </section>

      {/* 5. CORE VALUES GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-16">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em]">
            WHY CHOOSE US
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-brand font-bold text-slate-900">
            Our Core Values
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            The foundation of everything we do at Rajalakshmy Associates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => {
            const IconComp = value.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl hover:border-rose-100 transition-all duration-300 flex flex-col items-start text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-[#700619] mb-4 group-hover:bg-[#700619] group-hover:text-white transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-[#700619] transition-colors">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. OUR SERVICES OFFERING BREAKDOWN */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-16">
        <div className="bg-[#FFFDF9] border border-rose-100/80 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em]">
              WHAT WE DO
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-brand font-bold text-slate-900">
              Comprehensive Legal & Financial Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesBreakdown.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#700619] text-white flex items-center justify-center shadow-sm">
                    <ServiceIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif-brand font-bold text-slate-900">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                  
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#700619]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BANKING PARTNERS NETWORK */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-16 text-center">
        <div className="space-y-3 mb-8">
          <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em]">
            OUR NETWORK
          </span>
          <h2 className="text-xl sm:text-3xl font-serif-brand font-bold text-slate-900">
            Associated Banks & Financial Institutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            We collaborate with India’s leading financial giants to secure the best rates for you.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {bankingPartners.map((bank, bIdx) => (
            <span 
              key={bIdx} 
              className="bg-white border border-slate-200 px-4 py-2 rounded-full text-xs font-bold text-slate-700 shadow-xs hover:border-[#700619] hover:text-[#700619] transition-colors"
            >
              {bank}
            </span>
          ))}
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-gradient-to-r from-[#5B0010] via-[#700619] to-[#4A000D] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left z-10">
            <h3 className="text-2xl sm:text-3xl font-serif-brand font-bold text-white">
              Ready to Secure Your Loans, Insurance & Property?
            </h3>
            <p className="text-xs sm:text-sm text-rose-100/90 max-w-xl">
              Get in touch with our expert team today for a free consultation and seamless service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full sm:w-auto">
            <button 
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-[#EBB638] hover:bg-[#d49f28] text-slate-950 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer uppercase tracking-wider text-center"
            >
              Book Free Consultation
            </button>
            <a 
              href="tel:+917904634737"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>+91 79046 34737</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
