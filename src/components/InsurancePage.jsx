import React, { useState } from 'react';
import bannerBgImg from '../assets/contactbg.png';
import insuranceHeroImg from '../assets/insurance.png';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Activity, 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Clock, 
  FileText, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  Award,
  Users,
  Car,
  Building2,
  Stethoscope,
  Heart,
  Briefcase
} from 'lucide-react';

export const InsurancePage = ({ onOpenConsultation = () => {} }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  const insuranceCategories = [
    {
      id: 'life',
      title: 'Life Insurance',
      tagline: 'Secure Your Family’s Financial Future',
      icon: HeartHandshake,
      badge: 'Family Security',
      overview: 'Protect your family against life’s uncertainties with comprehensive term insurance, savings plans, and retirement income solutions.',
      types: [
        { name: 'Term Life Insurance', desc: 'High financial cover at competitive premiums for peace of mind.' },
        { name: 'Guaranteed Savings Plans', desc: 'Family protection combined with assured benefits, subject to policy terms.' },
        { name: 'Child Education Plans', desc: 'Ensure your child’s dream education funding even in your absence.' },
        { name: 'Retirement & Pension Plans', desc: 'Planned monthly income to enjoy your golden post-retirement years.' }
      ],
      benefits: [
        'High sum assured options at competitive premiums',
        'Tax benefits and guaranteed/assured benefits, subject to policy terms and applicable tax laws',
        'Critical illness & accidental death benefit riders',
        'Dedicated claim assistance throughout the claim process'
      ],
      documents: [
        'Aadhaar Card & PAN Card',
        'Last 3 months payslips or 2 years ITR (Income proof)',
        'Last 6 months bank account statement',
        'Recent passport size photograph'
      ]
    },
    {
      id: 'health',
      title: 'Health Insurance',
      tagline: 'Cashless Medical Protection for Your Family',
      icon: Stethoscope,
      badge: 'Extensive Cashless Network',
      overview: 'Safeguard your hard-earned savings against medical inflation, sudden hospitalizations, surgery expenses, and critical illness treatments.',
      types: [
        { name: 'Individual Health Cover', desc: 'Dedicated sum insured for single person medical protection.' },
        { name: 'Family Floater Health Plan', desc: 'Single umbrella policy covering spouse, children, and parents.' },
        { name: 'Senior Citizen Health Plan', desc: 'Tailored medical coverage for parents including pre-existing diseases.' },
        { name: 'Critical Illness Protection', desc: 'Lump sum payout upon diagnosis of major critical illnesses.' }
      ],
      benefits: [
        'Extensive cashless hospital network across India',
        'Pre- and post-hospitalization expenses, as specified in the policy',
        'Tax deduction under Section 80D, as per applicable tax rules',
        'Cumulative No Claim Bonus (NCB) booster, subject to policy terms'
      ],
      documents: [
        'Aadhaar Card & PAN Card of proposer',
        'Age proof & medical history details of insured members',
        'Past medical records / prescriptions (if any pre-existing disease)',
        'Passport size photograph'
      ]
    },
    {
      id: 'general',
      title: 'General Insurance',
      tagline: 'Vehicle, Commercial Property & Asset Security',
      icon: Shield,
      badge: 'Instant Renewal',
      overview: 'Protect your personal cars, commercial transport fleets, factory, shop, and business assets from accident damage, fire, theft, or natural disasters.',
      types: [
        { name: 'Car & Two-Wheeler Insurance', desc: 'Comprehensive & 3rd party liability cover with optional add-ons.' },
        { name: 'Commercial Fleet Insurance', desc: 'Protection for commercial trucks, buses, tippers, & delivery vans.' },
        { name: 'Shop & Fire Insurance', desc: 'Safeguard shop inventory, equipment, and building against fire & theft.' },
        { name: 'Personal Accident & Travel Cover', desc: 'Accidental disability cover & overseas emergency travel protection.' }
      ],
      benefits: [
        'Instant policy issuance & hassle-free online renewal',
        'Cashless repair network at authorized workshops & garages',
        'Zero-Depreciation & 24/7 Roadside Assistance (RSA) as available add-ons',
        'Protection against third-party property damage & legal liability'
      ],
      documents: [
        'Vehicle RC Book copy (for Motor Insurance)',
        'Existing policy copy (for policy transfer or renewal)',
        'Owner ID & Address Proof (Aadhaar / PAN)',
        'Shop / Business Registration copy (for Commercial Fire Insurance)'
      ]
    }
  ];

  const insurancePartners = [
    "LIC of India", "HDFC ERGO", "Star Health Insurance", 
    "ICICI Lombard", "Care Health Insurance", "Niva Bupa", 
    "Bajaj Allianz", "Tata AIG", "SBI General", "New India Assurance"
  ];

  const faqs = [
    {
      q: "Why should I consult Rajalakshmy Associates for insurance?",
      a: "We offer guidance and policy comparison across multiple leading insurance companies, personalized advice matching your exact requirements, and dedicated support throughout the claim process."
    },
    {
      q: "What is cashless hospitalization in Health Insurance?",
      a: "With cashless hospitalization, eligible medical bills are settled directly between the insurance company and the network hospital, subject to policy terms and limits."
    },
    {
      q: "Can I port or transfer my existing health insurance policy?",
      a: "Yes! Porting or renewing your existing health or motor insurance is possible. Eligible continuity benefits and accumulated credits can be carried forward, subject to portability rules and insurer terms."
    },
    {
      q: "What tax benefits can I claim under Life & Health Insurance?",
      a: "Life Insurance premiums qualify for tax deductions under Section 80C, while Health Insurance premiums qualify under Section 80D, as per applicable tax laws and policy terms."
    }
  ];

  return (
    <div className="bg-[#FAF7F4] min-h-screen text-slate-800 font-sans pb-16 select-none overflow-x-hidden">
      
      {/* 1. HERO BANNER */}
      <section 
        className="w-full bg-[#350008] text-white relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[380px] lg:min-h-[440px] flex items-center"
        style={{ backgroundImage: `url(${bannerBgImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A000E] via-[#4A000E]/90 to-[#2A0007]/80 z-10" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-8 space-y-4 text-left animate-float-up">
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-extrabold text-[#EBB638] uppercase tracking-[0.2em]">
                  COMPARE. CHOOSE. PROTECT.
                </span>
                <span className="w-12 h-[2px] bg-[#EBB638] rounded-full inline-block" />
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-serif-brand font-bold text-white leading-[1.12]">
                Personalized Insurance Solutions <br />
                <span className="text-[#EBB638]">For Family, Health & Business.</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-rose-100/90 max-w-2xl font-normal leading-relaxed pt-1">
                Get personalized insurance solutions for your family, health, vehicles, and business from leading insurance providers — with guidance from policy selection to claims.
              </p>

              {/* Stats badges */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-amber-200 text-xs font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#EBB638]" /> Dedicated Claim Guidance
                </span>
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-amber-200 text-xs font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#EBB638]" /> Multiple Leading Insurers
                </span>
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-amber-200 text-xs font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#EBB638]" /> Tax Savings Under 80C & 80D
                </span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-4 hidden lg:flex justify-center">
              <div className="bg-white/10 p-5 rounded-3xl border border-white/20 backdrop-blur-md max-w-xs text-center space-y-3 shadow-2xl">
                <img src={insuranceHeroImg} alt="Insurance Protection" className="w-28 h-28 object-contain mx-auto" />
                <h3 className="text-lg font-bold text-white font-serif-brand">Need Free Insurance Consultation?</h3>
                <p className="text-xs text-rose-100/80">Compare policy options with our experienced insurance advisors.</p>
                <button 
                  onClick={onOpenConsultation}
                  className="w-full bg-[#EBB638] hover:bg-[#d49f28] text-slate-950 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
                >
                  Get Free Quote
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CATEGORY TABS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200/80 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'all' 
                ? 'bg-[#700619] text-white shadow-md' 
                : 'text-slate-700 hover:bg-rose-50'
            }`}
          >
            All Insurance Plans ({insuranceCategories.length})
          </button>

          {insuranceCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === cat.id 
                    ? 'bg-[#700619] text-white shadow-md' 
                    : 'text-slate-700 hover:bg-rose-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. INSURANCE CATEGORIES DETAILED CARDS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        {insuranceCategories
          .filter(cat => activeTab === 'all' || activeTab === cat.id)
          .map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div 
                key={cat.id}
                id={cat.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Header Title Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-rose-100/70 text-[#700619] flex items-center justify-center shrink-0 shadow-xs">
                      <CatIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                          {cat.title}
                        </h2>
                        <span className="bg-amber-100 text-[#966810] text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-amber-200">
                          {cat.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#700619] font-semibold mt-0.5">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={onOpenConsultation}
                    className="bg-[#700619] hover:bg-[#520412] text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all shrink-0 cursor-pointer uppercase tracking-wider"
                  >
                    <span>Enquire About {cat.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Overview Paragraph */}
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-8 bg-amber-50/40 p-4 rounded-2xl border border-amber-100/60">
                  {cat.overview}
                </p>

                {/* 3 Columns: Policy Types | Key Benefits | Required Documents */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  
                  {/* Col 1: Popular Policy Options */}
                  <div className="bg-rose-50/40 p-5 rounded-2xl border border-rose-100/60 space-y-3">
                    <h3 className="text-sm font-bold text-[#700619] uppercase tracking-wider flex items-center gap-2 border-b border-rose-100 pb-2">
                      <Sparkles className="w-4 h-4 text-[#EBB638]" /> Popular Policy Options
                    </h3>
                    <div className="space-y-3 text-xs text-slate-700">
                      {cat.types.map((type, tIdx) => (
                        <div key={tIdx} className="space-y-0.5">
                          <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#700619]" />
                            {type.name}
                          </h4>
                          <p className="text-[11px] text-slate-600 pl-3 leading-snug">{type.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Col 2: Key Benefits */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 space-y-3">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-2">
                      <ShieldCheck className="w-4 h-4 text-[#700619]" /> Key Benefits & Coverage
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                      {cat.benefits.map((ben, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#700619] shrink-0 mt-0.5" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 3: Documents Required */}
                  <div className="bg-amber-50/30 p-5 rounded-2xl border border-amber-100/60 space-y-3">
                    <h3 className="text-sm font-bold text-[#966810] uppercase tracking-wider flex items-center gap-2 border-b border-amber-100 pb-2">
                      <FileText className="w-4 h-4 text-[#966810]" /> Documents Required
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                      {cat.documents.map((doc, dIdx) => (
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

      {/* 4. INSURER PARTNERS SHOWCASE */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 text-center">
        <div className="space-y-3 mb-8">
          <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em]">
            OUR INSURER NETWORK
          </span>
          <h2 className="text-xl sm:text-3xl font-serif-brand font-bold text-slate-900">
            Associated Insurance Companies
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            We collaborate with leading insurance providers to help you compare and select appropriate policy coverage.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {insurancePartners.map((partner, pIdx) => (
            <span 
              key={pIdx} 
              className="bg-white border border-slate-200 px-4 py-2 rounded-full text-xs font-bold text-slate-700 shadow-xs hover:border-[#700619] hover:text-[#700619] transition-colors"
            >
              {partner}
            </span>
          ))}
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em]">
              FAQ & HELP
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-brand font-bold text-slate-900">
              Frequently Asked Questions About Insurance
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

      {/* FOOTER DISCLAIMER */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 text-center">
        <p className="text-[11px] sm:text-xs text-slate-500 max-w-3xl mx-auto leading-relaxed italic border-t border-slate-200/60 pt-4">
          * Benefits, coverage, tax deductions, hospital networks, and claim processes are subject to specific policy terms, conditions, exclusions, and applicable regulatory guidelines.
        </p>
      </div>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-10">
        <div className="bg-gradient-to-r from-[#5B0010] via-[#700619] to-[#4A000D] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left z-10">
            <h3 className="text-2xl sm:text-3xl font-serif-brand font-bold text-white">
              Ready to Protect What Matters Most?
            </h3>
            <p className="text-xs sm:text-sm text-rose-100/90 max-w-xl">
              Talk to our insurance advisors for policy comparison and guidance throughout the claim process.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full sm:w-auto">
            <button 
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-[#EBB638] hover:bg-[#d49f28] text-slate-950 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer uppercase tracking-wider text-center"
            >
              Get Free Insurance Quote
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

export default InsurancePage;
