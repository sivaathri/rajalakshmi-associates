import React from 'react';
import bannerBgImg from '../assets/contactbg.png';
import officeReceptionImg from '../assets/office_reception.png';
import handshakeImg from '../assets/about_handshake.png';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Scale, 
  Landmark, 
  HeartHandshake, 
  Sparkles, 
  TrendingUp, 
  FileCheck2, 
  HelpCircle,
  Building2,
  Lock,
  ThumbsUp,
  MapPin
} from 'lucide-react';

export const WhyChooseUsPage = ({ onOpenConsultation = () => {} }) => {
  const corePillars = [
    {
      id: 'transparency',
      title: '100% Transparency & Zero Hidden Charges',
      icon: Lock,
      badge: 'Zero Hidden Fees',
      desc: 'We maintain absolute clarity across all loan interest rates, processing charges, insurance terms, and legal fees. No hidden clauses, no surprises.'
    },
    {
      id: 'network',
      title: 'Extensive 25+ Banking & Insurance Network',
      icon: Landmark,
      badge: 'Multi-Bank Tieup',
      desc: 'Partnered with India’s leading PSU banks, private financial institutions, NBFCs, and top insurance companies to get you the lowest interest rates and best coverage.'
    },
    {
      id: 'legal',
      title: 'Rigorous Legal Title Verification',
      icon: Scale,
      badge: 'Certified Legal Opinion',
      desc: 'Our legal expert panel conducts thorough 30-year Encumbrance Certificate (EC) searches, parent document checks, and Patta verification for complete peace of mind.'
    },
    {
      id: 'speed',
      title: 'Fast-Track Processing & Doorstep Service',
      icon: Clock,
      badge: 'Quick Disbursal',
      desc: 'We streamline documentation with free doorstep collection. Personal loans sanctioned in 24-48 hours, and business/property loans processed in record time.'
    },
    {
      id: 'support',
      title: 'Dedicated Claim & Post-Disbursal Assistance',
      icon: HeartHandshake,
      badge: 'Lifetime Support',
      desc: 'Our relationship doesn’t end with loan approval. We provide continuous support for insurance claim settlement, EMI optimization, and loan balance transfers.'
    },
    {
      id: 'tailored',
      title: 'Customized Financial Structuring',
      icon: TrendingUp,
      badge: 'Tailored Solutions',
      desc: 'We structure customized loan amounts and repayment EMIs tailored to your specific salary profile, business turnover, or cash flow cycle.'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Free Initial Consultation',
      desc: 'We analyze your financial requirements, credit score (CIBIL), and property details to identify ideal loan or insurance options.'
    },
    {
      step: '02',
      title: 'Document & Title Check',
      desc: 'Our team verifies your KYC, income papers, or property parent documents to ensure 100% eligibility and hassle-free processing.'
    },
    {
      step: '03',
      title: 'Bank / Insurer Matching',
      desc: 'We submit your application to multiple top lenders to negotiate the lowest interest rates, maximum loan quantum, or optimal insurance terms.'
    },
    {
      step: '04',
      title: 'Sanction & Disbursal',
      desc: 'Enjoy fast door-step loan disbursal or instant policy issuance with dedicated post-service assistance.'
    }
  ];

  const bankingPartners = [
    "State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", 
    "Canara Bank", "Indian Bank", "Bank of Baroda", "Kotak Mahindra",
    "Bajaj Finance", "TATA Capital", "LIC Housing Finance", "Sundaram Finance"
  ];

  const statsList = [
    { label: "Total Loans Disbursed", value: "₹250+ Cr", sub: "Empowering local growth" },
    { label: "Happy Clients Served", value: "5,000+", sub: "Families & Businesses" },
    { label: "Partner Financial Institutions", value: "25+", sub: "PSU & Private Banks" },
    { label: "Client Satisfaction Rate", value: "99.2%", sub: "Trusted in Puducherry & TN" }
  ];

  return (
    <div className="bg-[#FAF7F4] min-h-screen text-slate-800 font-sans pb-16 select-none overflow-x-hidden">
      
      {/* 1. HERO BANNER MATCHING EXACT REFERENCE DESIGN */}
      <section className="w-full relative overflow-hidden bg-[#FAF7F2] pt-2 pb-6 sm:pt-3 sm:pb-8 lg:pt-4 lg:pb-10 flex items-start">
        
        {/* RIGHT FULL-BLEED IMAGE CONTAINER (STRETCHES 100% TO RIGHT SCREEN EDGE) */}
        <div className="absolute top-0 bottom-0 right-0 w-full lg:w-[48%] xl:w-[50%] hidden lg:block overflow-hidden z-10 pointer-events-none">
          
          {/* Slanted Image Container Stretching to Right Edge */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-2xl z-20"
            style={{ 
              backgroundImage: `url(${handshakeImg})`,
              clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

        </div>

        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 pt-1 pb-6 sm:pt-2 sm:pb-8 lg:pt-2 lg:pb-8 relative z-20">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="max-w-xl lg:max-w-2xl text-left space-y-4 sm:space-y-5 relative">
            
            {/* Background Accent 1: Golden Concentric Circles */}
            <svg className="absolute top-0 left-0 w-28 h-28 sm:w-32 sm:h-32 opacity-30 pointer-events-none -translate-x-5 -translate-y-5" viewBox="0 0 100 100" fill="none">
              <circle cx="20" cy="20" r="20" stroke="#EBB638" strokeWidth="1" />
              <circle cx="20" cy="20" r="35" stroke="#EBB638" strokeWidth="1" />
              <circle cx="20" cy="20" r="50" stroke="#EBB638" strokeWidth="1" />
              <circle cx="20" cy="20" r="65" stroke="#EBB638" strokeWidth="1" />
            </svg>

            {/* Background Accent 2: Golden Dot Matrix Grid */}
            <div className="absolute bottom-4 left-4 opacity-25 pointer-events-none hidden sm:grid grid-cols-5 gap-1.5">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#EBB638]" />
              ))}
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-3 relative z-10">
              <span className="w-8 sm:w-12 h-[1.5px] bg-[#EBB638] rounded-full inline-block" />
              <span className="text-[11px] sm:text-xs font-extrabold text-slate-800 tracking-[0.2em] uppercase">
                WHY CHOOSE RAJALAKSHMY ASSOCIATES
              </span>
              <span className="w-8 sm:w-12 h-[1.5px] bg-[#EBB638] rounded-full inline-block" />
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-serif-brand font-bold text-slate-900 leading-[1.18] relative z-10">
              Your Most Trusted Financial <br />
              & <span className="text-[#700619]">Property Legal Advisor</span>
            </h1>

            {/* Separator Accent Line */}
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-12 h-[2.5px] bg-[#EBB638] rounded-full" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#EBB638]" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-xl relative z-10">
              <p>
                Empowering individuals, families, and businesses across Puducherry & Tamilnadu with transparent loan solutions, 100% legal title assurance, and dedicated doorstep assistance.
              </p>
              <p>
                Over 8.5+ years of proven track record, 5,000+ happy clients, direct ties with 25+ partner banks, and zero hidden charges.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 relative z-10">
              <button 
                onClick={onOpenConsultation}
                className="bg-[#700619] hover:bg-[#520412] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Talk To Expert</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a 
                href="#core-pillars"
                className="bg-transparent hover:bg-rose-50 text-[#700619] border-2 border-[#700619] px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Our Core Pillars</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 2. STATS HIGHLIGHTS ROW */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 -mt-8 relative z-30 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statsList.map((stat, idx) => (
            <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-md text-center space-y-1 transform hover:-translate-y-1 transition-transform">
              <span className="text-2xl sm:text-4xl font-serif-brand font-bold text-[#700619]">
                {stat.value}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">{stat.label}</h4>
              <p className="text-[11px] text-slate-500 font-medium">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 6 CORE PILLARS OF EXCELLENCE GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em]">
            THE RAJALAKSHMY ADVANTAGE
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-brand font-bold text-slate-900">
            6 Reasons Why Clients Choose Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            We combine deep banking relationships, senior legal expertise, and customer-first service to deliver exceptional financial results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {corePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-rose-100/80 text-[#700619] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="bg-amber-100 text-[#966810] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-amber-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-brand font-bold text-lg text-slate-900 group-hover:text-[#700619] transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={onOpenConsultation}
                    className="text-xs font-bold text-[#700619] hover:text-[#520412] flex items-center gap-1.5 group-hover:gap-2.5 transition-all cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WORKFLOW / HOW WE WORK TIMELINE */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md text-center space-y-10">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em]">
              OUR SIMPLE PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-brand font-bold text-slate-900">
              How We Work With You
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              A transparent, 4-step path to securing your loan, insurance policy, or property legal opinion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {workflowSteps.map((item, idx) => (
              <div key={idx} className="bg-[#FFFDF7] p-6 rounded-2xl border border-amber-200/60 relative space-y-3">
                <span className="text-3xl font-serif-brand font-extrabold text-[#EBB638]">
                  {item.step}
                </span>
                <h3 className="font-bold text-slate-900 text-base font-serif-brand">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BANKING & FINANCIAL PARTNERS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 text-center">
        <div className="space-y-2 mb-8">
          <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em]">
            TRUSTED PARTNER NETWORK
          </span>
          <h2 className="text-xl sm:text-3xl font-serif-brand font-bold text-slate-900">
            Associated Banks & Lenders
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            We work closely with premier public & private financial institutions across India.
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

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-10">
        <div className="bg-gradient-to-r from-[#5B0010] via-[#700619] to-[#4A000D] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left z-10">
            <h3 className="text-2xl sm:text-3xl font-serif-brand font-bold text-white">
              Experience Financial Clarity & Peace of Mind
            </h3>
            <p className="text-xs sm:text-sm text-rose-100/90 max-w-xl">
              Get in touch with our experts today for a free financial consultation and legal title opinion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full sm:w-auto">
            <button 
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-[#EBB638] hover:bg-[#d49f28] text-slate-950 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer uppercase tracking-wider text-center"
            >
              Get Free Consultation
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

export default WhyChooseUsPage;
