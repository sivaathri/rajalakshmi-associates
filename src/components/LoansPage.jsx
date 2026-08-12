import React, { useState } from 'react';
import bannerBgImg from '../assets/contactbg.png';
import loanHeroImg from '../assets/loan.png';
import aboutHandshakeImg from '../assets/about_handshake.png';
import { 
  User, 
  Briefcase, 
  Home, 
  Building, 
  Car, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Clock, 
  Percent, 
  FileText, 
  Sparkles, 
  Landmark, 
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export const LoansPage = ({ onOpenConsultation = () => {} }) => {
  const [activeLoanTab, setActiveLoanTab] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  const loanTypes = [
    {
      id: 'personal',
      title: 'Personal Loan',
      tagline: 'Instant Unsecured Financial Support',
      icon: User,
      badge: 'Quick Disbursal',
      overview: 'Fulfill your urgent personal financial needs without collateral. Ideal for medical emergencies, weddings, higher education, travel, or debt consolidation.',
      features: [
        'No collateral or guarantor required',
        'Quick approval & disbursal within 24-48 hours',
        'Flexible repayment tenure from 12 to 60 months',
        'Competitive interest rates with minimal documentation'
      ],
      eligibility: [
        'Salaried employees & self-employed professionals',
        'Age between 21 and 60 years',
        'Minimum monthly net income of ₹20,000',
        'CIBIL score of 700+ preferred'
      ],
      documents: [
        'Aadhaar Card',
        'PAN Card',
        'Last 3 months payslips',
        'Last 6 months bank account statement',
        'Employee ID card',
        'Form 16'
      ]
    },
    {
      id: 'business',
      title: 'Business Loan',
      tagline: 'Capital for Growth & MSME Expansion',
      icon: Briefcase,
      badge: 'High Quantum',
      overview: 'Fuel your enterprise growth with tailored business loans for working capital, machinery purchase, inventory expansion, or business scaling.',
      features: [
        'Loan amounts up to ₹1 Crore for eligible businesses',
        'Collateral-free CGTMSE options available',
        'Flexible EMI structures matching business cash flows',
        'Special schemes for MSMEs and Women Entrepreneurs'
      ],
      eligibility: [
        'Proprietorships, Partnerships & Pvt Ltd Companies',
        'Minimum 2 years of operational business vintage',
        'Annual business turnover of ₹20 Lakhs+',
        'Clean financial track record & banking history'
      ],
      documents: [
        'Basic KYC (Applicant & Co-applicant): Aadhaar, PAN',
        'Bank account statement (6 months or 1 year) - Current / Savings / OD',
        'Last 2 years IT papers',
        'GST certificate',
        'MSME certificate',
        'Selfie photo',
        'Own house proof'
      ]
    },
    {
      id: 'housing',
      title: 'Housing Loan',
      tagline: 'Turn Your Dream Home Into Reality',
      icon: Home,
      badge: 'Lowest Interest',
      overview: 'Low interest home loans for ready-to-move flats, plot purchase, house construction, home extension, or balance transfer from existing banks.',
      features: [
        'Attractive interest rates from top PSU & Private banks',
        'Longest repayment tenure up to 30 years',
        'PMAY Subsidy assistance & Balance Transfer facility',
        'Up to 80% to 90% property value financing'
      ],
      eligibility: [
        'Salaried & self-employed individuals',
        'Age between 21 and 65 years',
        'Stable source of regular income',
        'Clear legal title of the property'
      ],
      documents: [
        'Basic KYC (Applicant & Co-applicant): Aadhaar, PAN',
        'If both are salaried: Last 3 months payslips, last 6 months bank account statement',
        'If one is salaried & one is business (Salaried): Last 3 months payslips, last 6 months bank account statement',
        'If one is salaried & one is business (Business): Last 2 years IT papers, GST certificate, MSME certificate, last 1 year bank account statement (current/savings/OD)',
        'Property documents: Full set including mother document / parent document, patta, EC, house tax, EB bill, water tax',
        'For construction: Approval copy or plan and estimation copy',
        'Photos: 3 passport size photos each for applicant and co-applicant',
        'Note: Additional income (rental, home business, other business, agricultural, etc.) can also be considered with valid supporting documents as per lender policy.'
      ]
    },
    {
      id: 'mortgage',
      title: 'Mortgage Loan (LAP)',
      tagline: 'Loan Against Residential & Commercial Property',
      icon: Building,
      badge: 'Maximum Value',
      overview: 'Unlock the high market value of your residential, commercial, or industrial property to raise substantial funds for personal or business needs.',
      features: [
        'High LTV funding up to 75% of market valuation',
        'Much lower interest rates compared to personal loans',
        'Extended repayment tenure up to 15 years',
        'Retain ownership while utilizing the property equity'
      ],
      eligibility: [
        'Individuals, business owners & property title holders',
        'Clear, marketable & unencumbered property title',
        'Adequate repayment capacity based on income',
        'Property located in Puducherry or Tamilnadu'
      ],
      documents: [
        'Basic KYC (Applicant & Co-applicant): Aadhaar, PAN',
        'If both are salaried: Last 3 months payslips, last 6 months bank account statement',
        'If one is salaried & one is business (Salaried): Last 3 months payslips, last 6 months bank account statement',
        'If one is salaried & one is business (Business): Last 2 years IT papers, GST certificate, MSME certificate, last 1 year bank account statement (current/savings/OD)',
        'Property documents: Full set including mother document / parent document, Patta, EC, house tax, EB bill, water tax',
        'Photos: 3 passport size photos each for applicant and co-applicant',
        'Note: Additional income (rental, home business, other business, agricultural, etc.) can also be submitted and considered as per lender policy.'
      ]
    },
    {
      id: 'vehicle-refinance',
      title: 'Used Car Loans & Commercial Vehicle Refinance',
      tagline: 'Cash Against Vehicle & Loan Refinancing',
      icon: Car,
      badge: 'Easy Liquidity',
      overview: 'Extract maximum cash liquidity against your existing cars, commercial trucks, buses, or heavy vehicles, or refinance your existing vehicle loan for lower EMIs.',
      features: [
        'Refinance funding up to 150% of vehicle market value',
        'Quick vehicle inspection & fast door-step disbursal',
        'Specialized fleet funding for commercial transport owners',
        'Lower interest rates & extended tenure to reduce EMIs'
      ],
      eligibility: [
        'Individual car owners & commercial vehicle operators',
        'Commercial trucks, buses, tippers, trailers & personal cars',
        'Vehicle age up to 10-12 years (based on vehicle category)',
        'Clear RC with active insurance & fitness certificates'
      ],
      documents: [
        'Applicant (Vehicle Owner): Aadhaar Card, PAN Card',
        'Vehicle RC Book copy',
        'Active Insurance copy',
        '6 to 8 clear photos of the vehicle',
        'Last 6 months bank account statement',
        'If salaried: Last 3 months payslips, last 6 months bank statement, employee ID card, Form 16',
        'If business owner: GST certificate, MSME certificate, last 6 months bank account statement'
      ]
    }
  ];

  const faqs = [
    {
      q: "How fast can my loan get sanctioned?",
      a: "Personal loans are usually sanctioned in 24 to 48 hours. Housing, Mortgage, and Business loans take 3 to 7 working days upon complete document submission."
    },
    {
      q: "Do you charge any upfront upfront fees for loan consultation?",
      a: "No! At Rajalakshmy Associates, we maintain 100% transparency. We do not charge hidden upfront fees."
    },
    {
      q: "Which banks and NBFCs do you partner with?",
      a: "We collaborate with 25+ leading financial institutions including State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Canara Bank, Indian Bank, Bajaj Finserv, LIC Housing Finance, and Sundaram Finance."
    },
    {
      q: "Can I get a loan if my CIBIL score is low?",
      a: "We evaluate every profile individually. Even with low or zero credit score, we have customized loan options through specialized NBFCs and property mortgage solutions."
    }
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
              backgroundImage: `url(${aboutHandshakeImg})`,
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
                COMPREHENSIVE LOAN PORTFOLIO
              </span>
              <span className="w-8 sm:w-12 h-[1.5px] bg-[#EBB638] rounded-full inline-block" />
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-serif-brand font-bold text-slate-900 leading-[1.18] relative z-10">
              Customized Loan Solutions <br />
              for <span className="text-[#700619]">Every Stage of Life & Business</span>
            </h1>

            {/* Separator Accent Line */}
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-12 h-[2.5px] bg-[#EBB638] rounded-full" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#EBB638]" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-xl relative z-10">
              <p>
                From Personal Loans and Home Purchases to MSME Expansion and Commercial Vehicle Refinancing—get doorstep service, lowest interest rates, and seamless bank approvals.
              </p>
              <p>
                Partnered with 25+ top PSU banks, private banks, and NBFCs across Puducherry & Tamilnadu for fast-track processing.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 relative z-10">
              <button 
                onClick={onOpenConsultation}
                className="bg-[#700619] hover:bg-[#520412] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Apply For Loan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a 
                href="#loan-types"
                className="bg-transparent hover:bg-rose-50 text-[#700619] border-2 border-[#700619] px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>View Loan Categories</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 2. LOAN CATEGORY NAVIGATION TABS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200/80 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveLoanTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeLoanTab === 'all' 
                ? 'bg-[#700619] text-white shadow-md' 
                : 'text-slate-700 hover:bg-rose-50'
            }`}
          >
            All Loans ({loanTypes.length})
          </button>

          {loanTypes.map((loan) => {
            const Icon = loan.icon;
            return (
              <button
                key={loan.id}
                onClick={() => setActiveLoanTab(loan.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeLoanTab === loan.id 
                    ? 'bg-[#700619] text-white shadow-md' 
                    : 'text-slate-700 hover:bg-rose-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{loan.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. DETAILED LOAN TYPES SECTIONS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        {loanTypes
          .filter(loan => activeLoanTab === 'all' || activeLoanTab === loan.id)
          .map((loan, idx) => {
            const LoanIcon = loan.icon;
            return (
              <div 
                key={loan.id}
                id={loan.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Header Title Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-rose-100/70 text-[#700619] flex items-center justify-center shrink-0 shadow-xs">
                      <LoanIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                          {loan.title}
                        </h2>
                        <span className="bg-amber-100 text-[#966810] text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-amber-200">
                          {loan.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#700619] font-semibold mt-0.5">
                        {loan.tagline}
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={onOpenConsultation}
                    className="bg-[#700619] hover:bg-[#520412] text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all shrink-0 cursor-pointer uppercase tracking-wider"
                  >
                    <span>Apply for {loan.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Overview Paragraph */}
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-8 bg-amber-50/40 p-4 rounded-2xl border border-amber-100/60">
                  {loan.overview}
                </p>

                {/* 3 Columns: Key Features | Eligibility | Required Documents */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  
                  {/* Col 1: Key Features */}
                  <div className="bg-rose-50/40 p-5 rounded-2xl border border-rose-100/60 space-y-3">
                    <h3 className="text-sm font-bold text-[#700619] uppercase tracking-wider flex items-center gap-2 border-b border-rose-100 pb-2">
                      <Sparkles className="w-4 h-4 text-[#EBB638]" /> Key Benefits & Features
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                      {loan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#700619] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 2: Eligibility Criteria */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 space-y-3">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-2">
                      <User className="w-4 h-4 text-[#700619]" /> Eligibility Criteria
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                      {loan.eligibility.map((elig, eIdx) => (
                        <li key={eIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#700619] shrink-0 mt-1.5" />
                          <span>{elig}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 3: Required Documents */}
                  <div className="bg-amber-50/30 p-5 rounded-2xl border border-amber-100/60 space-y-3">
                    <h3 className="text-sm font-bold text-[#966810] uppercase tracking-wider flex items-center gap-2 border-b border-amber-100 pb-2">
                      <FileText className="w-4 h-4 text-[#966810]" /> Documents Required
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                      {loan.documents.map((doc, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#966810] shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em]">
              FAQ & HELP
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-brand font-bold text-slate-900">
              Frequently Asked Questions About Loans
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-bold text-sm sm:text-base text-slate-900 hover:text-[#700619] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-[#700619]' : 'text-slate-400'}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-12">
        <div className="bg-gradient-to-r from-[#5B0010] via-[#700619] to-[#4A000D] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left z-10">
            <h3 className="text-2xl sm:text-3xl font-serif-brand font-bold text-white">
              Ready to Sanction Your Loan with Best Terms?
            </h3>
            <p className="text-xs sm:text-sm text-rose-100/90 max-w-xl">
              Talk to our financial advisors for instant guidance and hassle-free documentation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full sm:w-auto">
            <button 
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-[#EBB638] hover:bg-[#d49f28] text-slate-950 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer uppercase tracking-wider text-center"
            >
              Get Free Loan Advice
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

export default LoansPage;
