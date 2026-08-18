import React, { useState } from 'react';
import buildingHeroImg from '../assets/contact_hero_building.png';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  Building2, 
  Navigation, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  IndianRupee, 
  Briefcase, 
  Home, 
  Shield,
  Sparkles,
  PhoneCall,
  Check,
  Award,
  ChevronRight,
  MapPinned
} from 'lucide-react';

export const ContactUsPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('Loans'); // 'Loans' | 'Properties' | 'Insurance'
  const [selectedMapBranch, setSelectedMapBranch] = useState('gorimedu'); // 'gorimedu' | 'thilaspet'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Loans',
    loanType: 'Business Loan',
    loanAmount: '',
    propertyType: 'Buy Residential / Commercial Property',
    propertyBudget: '',
    insuranceType: 'Health & Medical Insurance',
    insuranceCoverage: '',
    appointmentType: 'Direct', // 'Direct' | 'Phone Call'
    preferredBranch: 'Branch 1: Gorimedu (Head Office)',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 01:00 PM)',
    remarks: ''
  });

  const branches = [
    {
      id: 'gorimedu',
      label: 'Branch 1: Gorimedu (Head Office)',
      shortName: 'Gorimedu Head Office',
      badge: 'Main Branch',
      address: '1st Floor, No. 151/35, Plot 19, Tindivanam Byp Rd, near KBS Travels, Gorimedu, Puducherry – 605013',
      mapSrc: 'https://maps.google.com/maps?q=Gorimedu,%20Tindivanam%20Byp%20Rd,%20Puducherry%20605013&t=&z=15&ie=UTF8&iwloc=&output=embed',
      directionsUrl: 'https://maps.google.com/maps?q=Gorimedu,%20Tindivanam%20Byp%20Rd,%20Puducherry%20605013',
      phone: '+91 79046 34737',
      timing: 'Mon – Sat: 9:30 AM – 8:00 PM (Sunday: Based on Appointment)'
    },
    {
      id: 'thilaspet',
      label: 'Branch 2: Thilaspet Branch',
      shortName: 'Thilaspet Branch',
      badge: 'Branch 2',
      address: 'No. 76B, Iyyanar Kovil Street, Thilaspet, Pondicherry – 605009',
      mapSrc: 'https://maps.google.com/maps?q=76B,+Iyyanar+Kovil+Street,+Thilaspet,+Puducherry+605009&t=&z=15&ie=UTF8&iwloc=&output=embed',
      directionsUrl: 'https://maps.google.com/maps?q=76B,+Iyyanar+Kovil+Street,+Thilaspet,+Puducherry+605009',
      phone: '+91 79046 34737',
      timing: 'Mon – Sat: 9:30 AM – 8:00 PM (Sunday: Based on Appointment)'
    }
  ];

  const currentBranch = branches.find((b) => b.id === selectedMapBranch) || branches[0];

  const handleTabChange = (type) => {
    setActiveTab(type);
    setFormData((prev) => ({
      ...prev,
      enquiryType: type
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-slate-800 font-sans pb-20 select-none overflow-x-hidden">
      
      {/* 1. PLEASANT & SERENE HERO SECTION */}
      <section className="w-full relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#FAF8F5] pt-4 pb-8 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14 border-b border-amber-900/5">
        
        {/* Right Slanted Hero Image with Soft Warm Lighting */}
        <div className="absolute top-0 bottom-0 right-0 w-full lg:w-[48%] xl:w-[50%] hidden lg:block overflow-hidden z-10 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-2xl z-20 transition-transform duration-700 hover:scale-105"
            style={{ 
              backgroundImage: `url(${buildingHeroImg})`,
              clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-black/20 to-transparent" />
            <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/60 flex items-center gap-3 pointer-events-auto">
              <div className="w-10 h-10 rounded-full bg-[#700619] text-white flex items-center justify-center font-bold">
                <Award className="w-5 h-5 text-[#EBB638]" />
              </div>
              <div className="text-left">
                <div className="text-xs font-extrabold text-slate-900">2 Branch Offices</div>
                <div className="text-[11px] font-medium text-slate-500">Gorimedu &amp; Thilaspet, Puducherry</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 relative z-20">
          <div className="max-w-xl lg:max-w-2xl text-left space-y-4 sm:space-y-5">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#700619]">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                RAJALAKSHMY ASSOCIATES • APPOINTMENT &amp; ENQUIRY
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-brand font-bold text-slate-900 leading-[1.18]">
              Warm Guidance for Your <br />
              <span className="bg-gradient-to-r from-[#700619] via-[#8C0720] to-[#D97706] bg-clip-text text-transparent">
                Loans, Properties &amp; Insurance
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Book a peaceful, personalized consultation with our certified advisors in Puducherry across our Gorimedu &amp; Thilaspet branches.
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 max-w-lg">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 backdrop-blur-xs px-3 py-2 rounded-xl border border-amber-900/10 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant Assistance</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 backdrop-blur-xs px-3 py-2 rounded-xl border border-amber-900/10 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>2 Puducherry Branches</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 backdrop-blur-xs px-3 py-2 rounded-xl border border-amber-900/10 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Confidential</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a 
                href="#enquiry-form-card" 
                className="inline-flex items-center gap-2 bg-[#700619] hover:bg-[#580413] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-xl transition-all cursor-pointer group"
              >
                <span>Book Appointment &amp; Enquiry</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MAIN APPOINTMENT & CONTACT CARD SECTION */}
      <section id="enquiry-form-card" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 -mt-4 relative z-30 scroll-mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ============================================================ */}
          {/* LEFT SIDE: CALM & PLEASANT CONTACT HUB (5 COLS) */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.05)] border border-amber-100/80 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#700619]/10 text-[#700619] text-xs font-extrabold uppercase tracking-wider mb-2">
                  Get In Touch
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                  We're Here to Help
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Have a question or prefer speaking directly? Connect with our dedicated advisory team at either branch.
                </p>
              </div>

              <div className="space-y-4 divide-y divide-slate-100">
                
                {/* Phone Numbers */}
                <div className="flex items-start gap-4 pt-1">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFFBEB] text-[#D97706] flex items-center justify-center shrink-0 shadow-2xs border border-amber-200/60">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400">Phone Support</h4>
                    <a href="tel:+917904634737" className="text-sm sm:text-base font-bold text-slate-800 hover:text-[#700619] transition-colors block">
                      +91 79046 34737
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4 pt-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFF1F2] text-[#700619] flex items-center justify-center shrink-0 shadow-2xs border border-rose-200/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400">Email Address</h4>
                    <a href="mailto:info@rajalakshmiassociates.com" className="text-xs sm:text-sm font-bold text-slate-800 hover:text-[#700619] transition-colors block break-all">
                      info@rajalakshmiassociates.com
                    </a>
                  </div>
                </div>

                {/* Branch 1 Location */}
                <div className="flex items-start gap-4 pt-4">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 shadow-2xs border border-amber-200/60">
                    <MapPin className="w-5 h-5 text-amber-700" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-900">Branch 1 (Head Office)</h4>
                      <span className="text-[10px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.2 rounded-full">Gorimedu</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      1st Floor, No. 151/35, Plot 19, Tindivanam Byp Rd, near KBS Travels, Gorimedu, Puducherry – 605013
                    </p>
                  </div>
                </div>

                {/* Branch 2 Location */}
                <div className="flex items-start gap-4 pt-4">
                  <div className="w-11 h-11 rounded-2xl bg-rose-50 text-[#700619] flex items-center justify-center shrink-0 shadow-2xs border border-rose-200/60">
                    <MapPinned className="w-5 h-5 text-[#700619]" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-900">Branch 2 (Thilaspet)</h4>
                      <span className="text-[10px] font-semibold bg-rose-100 text-rose-800 px-2 py-0.2 rounded-full">Puducherry - 09</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      No. 76B, Iyyanar Kovil Street, Thilaspet, Pondicherry – 605009
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 pt-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#ECFDF5] text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs border border-emerald-200/60">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400">Consultation Timings</h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-800">Mon – Sat: 9:30 AM – 8:00 PM</p>
                    <p className="text-[11px] text-[#D97706] font-semibold">Sunday: Based on Appointment</p>
                  </div>
                </div>

              </div>

              {/* WhatsApp Quick Action Button */}
              <div className="pt-2">
                <a 
                  href="https://wa.me/917904634737"
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Reassurance Banner */}
            <div className="bg-gradient-to-br from-[#700619] to-[#45020D] text-white rounded-3xl p-6 sm:p-7 shadow-md space-y-2.5">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>Our Advisory Promise</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                Zero hidden costs, certified legal title verification for properties, and prompt loan approvals with leading banks across Puducherry &amp; Tamil Nadu.
              </p>
            </div>

          </div>

          {/* ============================================================ */}
          {/* RIGHT SIDE: BEAUTIFULLY STYLED ENQUIRY & APPOINTMENT FORM (7 COLS) */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.05)] border border-amber-100/80 text-left">
            
            {/* Form Title & Tag */}
            <div className="space-y-2 mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                  Enquiry &amp; Appointment
                </h2>
                <span className="text-xs font-semibold px-3 py-1 bg-amber-50 text-[#D97706] border border-amber-200 rounded-full">
                  Free Advisory
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                Please fill in the details below. Our senior consultant will get in touch at your convenient time.
              </p>
            </div>

            {formSubmitted ? (
              /* SUBMISSION SUCCESS CONFIRMATION RECEIPT */
              <div className="bg-gradient-to-b from-emerald-50 to-white border border-emerald-200 p-6 sm:p-8 rounded-2xl text-center space-y-5 my-2">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/20 rotate-3">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                
                <div className="space-y-1">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                    Enquiry Received
                  </span>
                  <h3 className="text-2xl font-serif-brand font-bold text-slate-900 pt-2">
                    Thank You, {formData.name || 'Valued Customer'}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    We have recorded your enquiry for <strong className="text-slate-900">{formData.enquiryType}</strong>. Our advisor will reach out to you shortly.
                  </p>
                </div>

                {/* Structured Summary Receipt */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2.5 text-slate-700 max-w-md mx-auto shadow-2xs">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Service Category:</span>
                    <span className="font-bold text-slate-900">{formData.enquiryType}</span>
                  </div>
                  
                  {formData.enquiryType === 'Loans' && (
                    <>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Loan Type:</span>
                        <span className="font-bold text-slate-900">{formData.loanType}</span>
                      </div>
                      {formData.loanAmount && (
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-500">Loan Amount:</span>
                          <span className="font-bold text-[#700619]">₹ {formData.loanAmount}</span>
                        </div>
                      )}
                    </>
                  )}

                  {formData.enquiryType === 'Properties' && (
                    <>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Property Service:</span>
                        <span className="font-bold text-slate-900">{formData.propertyType}</span>
                      </div>
                      {formData.propertyBudget && (
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-500">Estimated Budget:</span>
                          <span className="font-bold text-slate-900">{formData.propertyBudget}</span>
                        </div>
                      )}
                    </>
                  )}

                  {formData.enquiryType === 'Insurance' && (
                    <>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Insurance Plan:</span>
                        <span className="font-bold text-slate-900">{formData.insuranceType}</span>
                      </div>
                      {formData.insuranceCoverage && (
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-500">Sum Insured:</span>
                          <span className="font-bold text-slate-900">{formData.insuranceCoverage}</span>
                        </div>
                      )}
                    </>
                  )}

                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Appointment Mode:</span>
                    <span className="font-bold text-emerald-800">
                      {formData.appointmentType === 'Direct' ? `🏢 Direct Visit (${formData.preferredBranch})` : '📞 Phone Consultation'}
                    </span>
                  </div>

                  {formData.preferredDate && (
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500">Preferred Date:</span>
                      <span className="font-bold text-slate-900">{formData.preferredDate}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-slate-500">Preferred Time Slot:</span>
                    <span className="font-bold text-slate-900">{formData.preferredTime}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/917904634737?text=${encodeURIComponent(
                      `Hello Rajalakshmy Associates, I have submitted an enquiry for ${formData.enquiryType} (${formData.appointmentType === 'Direct' ? formData.preferredBranch : 'Phone Consultation'}). My name is ${formData.name}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow transition cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm via WhatsApp</span>
                  </a>

                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        enquiryType: 'Loans',
                        loanType: 'Business Loan',
                        loanAmount: '',
                        propertyType: 'Buy Residential / Commercial Property',
                        propertyBudget: '',
                        insuranceType: 'Health & Medical Insurance',
                        insuranceCoverage: '',
                        appointmentType: 'Direct',
                        preferredBranch: 'Branch 1: Gorimedu (Head Office)',
                        preferredDate: '',
                        preferredTime: 'Morning (10:00 AM - 01:00 PM)',
                        remarks: ''
                      });
                    }}
                    className="inline-flex items-center justify-center bg-slate-100 text-slate-700 hover:bg-slate-200 px-6 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* 1. TYPE OF ENQUIRY (Pleasant 3-Tab Selector) */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-between">
                    <span>Type of Enquiry <span className="text-rose-500">*</span></span>
                    <span className="text-[11px] font-normal text-slate-400">Choose a service</span>
                  </label>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/60">
                    {[
                      { id: 'Loans', label: 'Loans', icon: IndianRupee },
                      { id: 'Properties', label: 'Properties', icon: Home },
                      { id: 'Insurance', label: 'Insurance', icon: Shield }
                    ].map((tab) => {
                      const Icon = tab.icon;
                      const isSelected = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => handleTabChange(tab.id)}
                          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                            isSelected 
                              ? 'bg-white text-[#700619] shadow-sm border border-amber-200/50 ring-2 ring-[#700619]/10' 
                              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-[#700619]' : 'text-slate-400'}`} />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. CONDITIONAL SPECIFIC FIELDS BASED ON ENQUIRY TYPE */}
                <div className="bg-[#FAF8F5] border border-amber-200/60 rounded-2xl p-4 sm:p-5 space-y-4">
                  
                  {/* CASE A: LOANS */}
                  {activeTab === 'Loans' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#700619] flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>Loan Requirements</span>
                        </span>
                        <span className="text-[11px] font-medium text-slate-400">Lowest Interest Rates</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Type of Loan */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">
                            Type of Loan <span className="text-rose-500">*</span>
                          </label>
                          <select
                            name="loanType"
                            required
                            value={formData.loanType}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white font-medium text-slate-800"
                          >
                            <option value="Business Loan">💼 Business Loan</option>
                            <option value="Car / Vehicle Loan">🚗 Car / Vehicle Loan</option>
                            <option value="Home Loan / Construction Loan">🏠 Home Loan / Construction</option>
                            <option value="Personal Loan">👤 Personal Loan</option>
                            <option value="Loan Against Property (LAP)">📑 Loan Against Property (LAP)</option>
                            <option value="MSME / Machinery Loan">🏭 MSME &amp; Machinery Loan</option>
                            <option value="Education Loan">🎓 Education Loan</option>
                            <option value="Gold Loan">✨ Gold Loan</option>
                            <option value="Commercial Project Loan">🏢 Commercial Project Loan</option>
                            <option value="Balance Transfer & Top-up">🔄 Balance Transfer &amp; Top-up</option>
                          </select>
                        </div>

                        {/* Amount of the Loan */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">
                            Loan Amount Required <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                              ₹
                            </span>
                            <input 
                              type="text"
                              name="loanAmount"
                              required
                              value={formData.loanAmount}
                              onChange={handleChange}
                              placeholder="e.g. 5,00,000 or 25 Lakhs"
                              className="w-full pl-8 pr-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white font-medium text-slate-900"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CASE B: PROPERTIES */}
                  {activeTab === 'Properties' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                          <Home className="w-3.5 h-3.5" />
                          <span>Property Specifications</span>
                        </span>
                        <span className="text-[11px] font-medium text-slate-400">100% Legal Clearance</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Property Service */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">
                            Property Service Type <span className="text-rose-500">*</span>
                          </label>
                          <select
                            name="propertyType"
                            required
                            value={formData.propertyType}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition-all bg-white font-medium text-slate-800"
                          >
                            <option value="Buy Residential / Commercial Property">🏡 Buy Residential / Commercial</option>
                            <option value="Sell Property / Land Plots">🏷️ Sell Property / Plot</option>
                            <option value="DTCP & RERA Approved Plots">📐 DTCP &amp; RERA Approved Plots</option>
                            <option value="Patta & Legal Title Verification">📜 Patta &amp; Legal Title Verification</option>
                            <option value="Property Registration & Documentation">📑 Registration &amp; Documentation</option>
                            <option value="Property Valuation Advisory">📊 Valuation &amp; Legal Advisory</option>
                          </select>
                        </div>

                        {/* Property Budget */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">
                            Estimated Budget / Value <span className="text-slate-400 font-normal">(Optional)</span>
                          </label>
                          <input 
                            type="text"
                            name="propertyBudget"
                            value={formData.propertyBudget}
                            onChange={handleChange}
                            placeholder="e.g. ₹25 Lakhs - ₹60 Lakhs"
                            className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition-all bg-white font-medium text-slate-900"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CASE C: INSURANCE */}
                  {activeTab === 'Insurance' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-sky-800 flex items-center gap-1.5">
                          <Shield className="w-3.5 h-3.5" />
                          <span>Insurance Plan</span>
                        </span>
                        <span className="text-[11px] font-medium text-slate-400">Cashless Claims Support</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Insurance Type */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">
                            Type of Insurance <span className="text-rose-500">*</span>
                          </label>
                          <select
                            name="insuranceType"
                            required
                            value={formData.insuranceType}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-700/30 focus:border-sky-700 transition-all bg-white font-medium text-slate-800"
                          >
                            <option value="Health & Medical Insurance">🏥 Health &amp; Medical Insurance</option>
                            <option value="Life & Term Insurance">🛡️ Life &amp; Term Insurance</option>
                            <option value="Car / Motor Vehicle Insurance">🚗 Car &amp; 2-Wheeler Motor Insurance</option>
                            <option value="Commercial Vehicle Insurance">🚛 Commercial Vehicle Insurance</option>
                            <option value="Shop & Commercial Insurance">🏬 Shop &amp; Business Insurance</option>
                            <option value="Home & Property Insurance">🏡 Home &amp; Property Insurance</option>
                          </select>
                        </div>

                        {/* Desired Sum Insured */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">
                            Sum Insured / Coverage <span className="text-slate-400 font-normal">(Optional)</span>
                          </label>
                          <input 
                            type="text"
                            name="insuranceCoverage"
                            value={formData.insuranceCoverage}
                            onChange={handleChange}
                            placeholder="e.g. ₹10 Lakhs, ₹50 Lakhs"
                            className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-700/30 focus:border-sky-700 transition-all bg-white font-medium text-slate-900"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* 3. TYPE OF APPOINTMENT (Direct vs Phone Call) */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-800">
                    Type of Appointment <span className="text-rose-500">*</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Direct Visit */}
                    <div 
                      onClick={() => setFormData({ ...formData, appointmentType: 'Direct' })}
                      className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between gap-2.5 ${
                        formData.appointmentType === 'Direct'
                          ? 'border-[#700619] bg-rose-50/40 shadow-xs ring-1 ring-[#700619]/20'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input 
                          type="radio" 
                          name="appointmentType" 
                          value="Direct"
                          checked={formData.appointmentType === 'Direct'}
                          onChange={handleChange}
                          className="w-4 h-4 mt-0.5 accent-[#700619] cursor-pointer"
                        />
                        <div className="space-y-0.5">
                          <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 text-[#700619]" />
                            <span>Direct Office Visit</span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-snug">
                            Visit our Gorimedu or Thilaspet office in Puducherry.
                          </p>
                        </div>
                      </div>

                      {/* Branch Choice Dropdown if Direct is selected */}
                      {formData.appointmentType === 'Direct' && (
                        <div className="pt-1 pl-7">
                          <select
                            name="preferredBranch"
                            value={formData.preferredBranch}
                            onChange={handleChange}
                            className="w-full text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-amber-200 bg-white text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#700619]"
                          >
                            <option value="Branch 1: Gorimedu (Head Office)">Branch 1: Gorimedu (Head Office)</option>
                            <option value="Branch 2: Thilaspet Branch">Branch 2: Thilaspet Branch</option>
                          </select>
                        </div>
                      )}
                    </div>

                    {/* Phone Call */}
                    <div 
                      onClick={() => setFormData({ ...formData, appointmentType: 'Phone Call' })}
                      className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3 ${
                        formData.appointmentType === 'Phone Call'
                          ? 'border-[#700619] bg-rose-50/40 shadow-xs ring-1 ring-[#700619]/20'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="appointmentType" 
                        value="Phone Call"
                        checked={formData.appointmentType === 'Phone Call'}
                        onChange={handleChange}
                        className="w-4 h-4 mt-0.5 accent-[#700619] cursor-pointer"
                      />
                      <div className="space-y-0.5">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                          <PhoneCall className="w-3.5 h-3.5 text-[#700619]" />
                          <span>Phone Call Consultation</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          Speak directly with our senior advisor over a private call.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. PREFERRED SCHEDULE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>Preferred Date <span className="text-slate-400 font-normal">(Optional)</span></span>
                    </label>
                    <input 
                      type="date"
                      name="preferredDate"
                      min={today}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white font-medium text-slate-800"
                    />
                  </div>

                  {/* Time */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Preferred Time Slot <span className="text-rose-500">*</span></span>
                    </label>
                    <select 
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white font-medium text-slate-800"
                    >
                      <option value="Morning (10:00 AM - 01:00 PM)">🌅 Morning (10:00 AM – 01:00 PM)</option>
                      <option value="Afternoon (01:00 PM - 04:00 PM)">☀️ Afternoon (01:00 PM – 04:00 PM)</option>
                      <option value="Evening (04:00 PM - 07:00 PM)">🌆 Evening (04:00 PM – 07:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* 5. PERSONAL DETAILS (Name, Phone, Email) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                        +91
                      </span>
                      <input 
                        type="tel"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        className="w-full pl-12 pr-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Email (Optional) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                    <span>Email Address <span className="text-slate-400 font-normal">(Optional)</span></span>
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white"
                  />
                </div>

                {/* Remarks */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                    <span>Remarks / Any Specific Queries <span className="text-slate-400 font-normal">(Optional)</span></span>
                  </label>
                  <textarea 
                    name="remarks"
                    rows={3}
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Tell us any specific requirements or questions..."
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 space-y-3">
                  <button 
                    type="submit"
                    className="w-full bg-[#700619] hover:bg-[#540413] text-white py-3.5 px-8 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Enquiry &amp; Book Appointment</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Your information is completely safe &amp; confidential.</span>
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE OFFICE MAP WITH BOTH BRANCHES */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mt-14 sm:mt-18 mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.05)] border border-amber-100/80">
          
          {/* Section Heading & Branch Switch Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="text-left space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#700619] bg-rose-50 px-3 py-1 rounded-full">
                Our Office Locations
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                Visit Either of Our 2 Puducherry Branches
              </h3>
            </div>

            {/* Branch Switcher Buttons */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
              {branches.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedMapBranch(b.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedMapBranch === b.id
                      ? 'bg-[#700619] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{b.shortName}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
            
            {/* Map Embed (7 Cols) */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-inner border border-slate-200 min-h-[340px] relative">
              <iframe 
                title={`${currentBranch.label} Map`}
                src={currentBranch.mapSrc}
                className="w-full h-full min-h-[340px] border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Selected Branch Info Card (5 Cols) */}
            <div className="lg:col-span-5 text-left space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">
                    {currentBranch.badge}
                  </span>
                  <span className="text-xs font-medium text-emerald-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open Now
                  </span>
                </div>
                <h4 className="text-2xl font-serif-brand font-bold text-slate-900">
                  {currentBranch.label}
                </h4>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-amber-200/60 space-y-2">
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-[#700619] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {currentBranch.address}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800 pt-1 border-t border-amber-100">
                  <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                  <a href={`tel:${currentBranch.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#700619]">
                    {currentBranch.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{currentBranch.timing}</span>
                </div>
              </div>

              <div className="pt-1 flex flex-wrap gap-2.5">
                <a 
                  href={currentBranch.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition cursor-pointer"
                >
                  <span>Get Directions on Google Maps</span>
                  <Navigation className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OTHER WAYS TO CONNECT GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center space-y-1.5 mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
            Other Ways to Connect
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Reach out via your preferred communication channel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: WhatsApp */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition text-left flex items-start gap-4 group">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">WhatsApp</h4>
              <p className="text-xs text-slate-500">Fast replies &amp; documents</p>
              <a 
                href="https://wa.me/917904634737" 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs font-bold text-emerald-600 hover:underline block pt-0.5"
              >
                +91 79046 34737
              </a>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition text-left flex items-start gap-4 group">
            <div className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">Direct Call</h4>
              <p className="text-xs text-slate-500">Speak directly with us</p>
              <a 
                href="tel:+917904634737" 
                className="text-xs font-bold text-sky-600 hover:underline block pt-0.5"
              >
                +91 79046 34737
              </a>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition text-left flex items-start gap-4 group">
            <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-1 overflow-hidden">
              <h4 className="font-bold text-slate-900 text-sm">Email Us</h4>
              <p className="text-xs text-slate-500">Drop us your details</p>
              <a 
                href="mailto:info@rajalakshmiassociates.com" 
                className="text-xs font-bold text-purple-600 hover:underline block pt-0.5 truncate"
              >
                info@rajalakshmiassociates.com
              </a>
            </div>
          </div>

          {/* Card 4: Office Visit */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition text-left flex items-start gap-4 group">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">2 Branches</h4>
              <p className="text-xs text-slate-500">Gorimedu &amp; Thilaspet</p>
              <a 
                href="#enquiry-form-card" 
                className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1 pt-0.5"
              >
                <span>View Locations</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactUsPage;
