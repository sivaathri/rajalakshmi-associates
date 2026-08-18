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
  User,
  Check,
  ChevronRight,
  ExternalLink,
  Award,
  HelpCircle
} from 'lucide-react';

export const ContactUsPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeEnquiry, setActiveEnquiry] = useState('Loans');
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
    appointmentType: 'Direct', // 'Direct' or 'Phone Call'
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 01:00 PM)',
    remarks: ''
  });

  const handleEnquiryChange = (type) => {
    setActiveEnquiry(type);
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

  const handleAmountPreset = (amt) => {
    setFormData((prev) => ({
      ...prev,
      loanAmount: amt
    }));
  };

  const handleBudgetPreset = (budget) => {
    setFormData((prev) => ({
      ...prev,
      propertyBudget: budget
    }));
  };

  const handleCoveragePreset = (cov) => {
    setFormData((prev) => ({
      ...prev,
      insuranceCoverage: cov
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-[#FAF7F4] min-h-screen text-slate-800 font-sans pb-20 select-none overflow-x-hidden">
      
      {/* 1. LUXURY HERO BANNER */}
      <section className="w-full relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#FAF7F4] pt-4 pb-8 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14 border-b border-amber-900/5">
        
        {/* Right Slanted Hero Image */}
        <div className="absolute top-0 bottom-0 right-0 w-full lg:w-[48%] xl:w-[50%] hidden lg:block overflow-hidden z-10 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-2xl z-20 transition-transform duration-700 hover:scale-105"
            style={{ 
              backgroundImage: `url(${buildingHeroImg})`,
              clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-black/20 to-transparent" />
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/60 flex items-center gap-3 pointer-events-auto">
              <div className="w-10 h-10 rounded-full bg-[#700619] text-white flex items-center justify-center font-bold">
                <Award className="w-5 h-5 text-[#EBB638]" />
              </div>
              <div className="text-left">
                <div className="text-xs font-extrabold text-slate-900">15+ Years Experience</div>
                <div className="text-[11px] font-medium text-slate-600">Puducherry &amp; Tamil Nadu</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 relative z-20">
          <div className="max-w-xl lg:max-w-2xl text-left space-y-4 sm:space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#700619]">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                RAJALAKSHMY ASSOCIATES • CONSULTATION &amp; APPOINTMENT
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-brand font-bold text-slate-900 leading-[1.16]">
              Let's Discuss Your <br />
              <span className="bg-gradient-to-r from-[#700619] via-[#8C0720] to-[#D97706] bg-clip-text text-transparent">
                Loans, Properties &amp; Insurance
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Schedule a personalized consultation with our certified advisors in Puducherry. Choose your service category below to get started.
            </p>

            {/* Quick Feature Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-lg">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/70 backdrop-blur-xs px-3 py-2 rounded-xl border border-slate-200/60 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant Callback</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/70 backdrop-blur-xs px-3 py-2 rounded-xl border border-slate-200/60 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/70 backdrop-blur-xs px-3 py-2 rounded-xl border border-slate-200/60 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Confidential</span>
              </div>
            </div>

            {/* Action CTA Link */}
            <div className="pt-2">
              <a 
                href="#enquiry-form-section" 
                className="inline-flex items-center gap-2 bg-[#700619] hover:bg-[#580413] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-xl transition-all cursor-pointer group"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MAIN INTERACTIVE FORM & CONTACT SECTION */}
      <section id="enquiry-form-section" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 -mt-4 relative z-30 scroll-mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ============================================================ */}
          {/* LEFT SIDE: LUXURY ADVISORY CONTACT HUB (5 COLS) */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Main Info Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#700619]/10 text-[#700619] text-xs font-extrabold uppercase tracking-wider mb-2">
                  Direct Assistance
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                  Connect With Us
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Our expert financial, property &amp; insurance advisors are ready to assist you.
                </p>
              </div>

              <div className="space-y-4 divide-y divide-slate-100">
                
                {/* Phone Numbers */}
                <div className="flex items-start gap-4 pt-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#D97706] flex items-center justify-center shrink-0 shadow-xs border border-amber-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-400">Direct Hotline</h4>
                    <div className="flex flex-col gap-0.5">
                      <a href="tel:+917904634737" className="text-sm sm:text-base font-bold text-slate-800 hover:text-[#700619] transition-colors flex items-center gap-1.5">
                        <span>+91 79046 34737</span>
                        <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Primary</span>
                      </a>
                      <a href="tel:+919566675322" className="text-sm font-semibold text-slate-600 hover:text-[#700619] transition-colors">
                        +91 95666 75322
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4 pt-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#700619] flex items-center justify-center shrink-0 shadow-xs border border-rose-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-400">Email Inquiry</h4>
                    <a href="mailto:info@rajalakshmiassociates.com" className="text-xs sm:text-sm font-bold text-slate-800 hover:text-[#700619] transition-colors block break-all">
                      info@rajalakshmiassociates.com
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4 pt-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-700 flex items-center justify-center shrink-0 shadow-xs border border-slate-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-400">Gorimedu Head Office</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      1st Floor, No. 151/35, Plot 19, Tindivanam Byp Rd, near KBS Travels, Gorimedu, Puducherry - 605013
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 pt-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs border border-emerald-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-400">Consultation Timings</h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-800">Monday – Saturday: 9:30 AM – 6:30 PM</p>
                    <p className="text-[11px] text-slate-500 font-medium">Sunday: Open by Prior Appointment</p>
                  </div>
                </div>

              </div>

              {/* Direct Quick WhatsApp Action Button */}
              <div className="pt-2">
                <a 
                  href="https://wa.me/917904634737"
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Instantly</span>
                </a>
              </div>

            </div>

            {/* Trust Assurance Card */}
            <div className="bg-gradient-to-br from-[#700619] to-[#45020D] text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-3">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>Our Advisory Guarantee</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                Whether you need mortgage clearance, fast loan sanctions with nationalized banks, or verified DTCP property paperwork, our advisors handle every stage with 100% transparency.
              </p>
            </div>

          </div>

          {/* ============================================================ */}
          {/* RIGHT SIDE: MODERN MULTI-STEP ENQUIRY FORM (7 COLS) */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 shadow-xl shadow-slate-200/50 border border-slate-100 text-left">
            
            {/* Form Header */}
            <div className="space-y-2 mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                  Appointment &amp; Enquiry
                </h2>
                <span className="text-[11px] font-bold px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Direct Advisor Assignment
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                Choose your required service category, customize your requirements, and select your preferred schedule.
              </p>
            </div>

            {formSubmitted ? (
              /* SUBMISSION SUCCESS RECEIPT */
              <div className="bg-gradient-to-b from-emerald-50 to-white border border-emerald-200 p-6 sm:p-8 rounded-2xl text-center space-y-5 my-2">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/20 rotate-3">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                
                <div className="space-y-1">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                    Appointment Booked Successfully
                  </span>
                  <h3 className="text-2xl font-serif-brand font-bold text-slate-900 pt-2">
                    Thank You, {formData.name || 'Valued Client'}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    We have received your enquiry for <strong className="text-slate-900">{formData.enquiryType}</strong>. Our senior consultant will contact you shortly to confirm the appointment.
                  </p>
                </div>

                {/* Structured Receipt Summary */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2.5 text-slate-700 max-w-md mx-auto shadow-2xs">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Category:</span>
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
                          <span className="text-slate-500">Amount:</span>
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
                          <span className="text-slate-500">Budget Range:</span>
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
                    <span className="text-slate-500">Meeting Mode:</span>
                    <span className="font-bold text-emerald-800">
                      {formData.appointmentType === 'Direct' ? '🏢 Direct Office Meeting' : '📞 Phone Consultation'}
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
                      `Hello Rajalakshmy Associates, I have submitted an enquiry for ${formData.enquiryType} (${formData.appointmentType} appointment). My name is ${formData.name}.`
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
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* STEP 1: ENQUIRY CATEGORY SELECTOR CARDS */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#700619] text-white flex items-center justify-center text-[11px] font-extrabold">1</span>
                      <span>Select Enquiry Category <span className="text-rose-500">*</span></span>
                    </label>
                    <span className="text-[11px] font-semibold text-slate-400">Click to switch</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    
                    {/* Card 1: Loans */}
                    <button
                      type="button"
                      onClick={() => handleEnquiryChange('Loans')}
                      className={`p-4 rounded-2xl border-2 text-left transition-all relative overflow-hidden cursor-pointer ${
                        activeEnquiry === 'Loans'
                          ? 'border-[#700619] bg-gradient-to-br from-rose-50/90 to-amber-50/50 shadow-md ring-2 ring-[#700619]/10'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70'
                      }`}
                    >
                      {activeEnquiry === 'Loans' && (
                        <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#700619] text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 ${
                        activeEnquiry === 'Loans' ? 'bg-[#700619] text-white shadow-xs' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <IndianRupee className="w-5 h-5" />
                      </div>
                      <div className="font-bold text-slate-900 text-sm">Loans</div>
                      <div className="text-[11px] text-slate-500 font-medium">Business, Home, Car &amp; LAP</div>
                      <div className="text-[10px] font-bold text-[#D97706] mt-1">ROI from 8.5% p.a.</div>
                    </button>

                    {/* Card 2: Properties */}
                    <button
                      type="button"
                      onClick={() => handleEnquiryChange('Properties')}
                      className={`p-4 rounded-2xl border-2 text-left transition-all relative overflow-hidden cursor-pointer ${
                        activeEnquiry === 'Properties'
                          ? 'border-[#700619] bg-gradient-to-br from-rose-50/90 to-amber-50/50 shadow-md ring-2 ring-[#700619]/10'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70'
                      }`}
                    >
                      {activeEnquiry === 'Properties' && (
                        <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#700619] text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 ${
                        activeEnquiry === 'Properties' ? 'bg-[#700619] text-white shadow-xs' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <Home className="w-5 h-5" />
                      </div>
                      <div className="font-bold text-slate-900 text-sm">Properties</div>
                      <div className="text-[11px] text-slate-500 font-medium">Buy, Sell, Plots &amp; Patta</div>
                      <div className="text-[10px] font-bold text-emerald-700 mt-1">100% Legal Clearance</div>
                    </button>

                    {/* Card 3: Insurance */}
                    <button
                      type="button"
                      onClick={() => handleEnquiryChange('Insurance')}
                      className={`p-4 rounded-2xl border-2 text-left transition-all relative overflow-hidden cursor-pointer ${
                        activeEnquiry === 'Insurance'
                          ? 'border-[#700619] bg-gradient-to-br from-rose-50/90 to-amber-50/50 shadow-md ring-2 ring-[#700619]/10'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70'
                      }`}
                    >
                      {activeEnquiry === 'Insurance' && (
                        <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#700619] text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 ${
                        activeEnquiry === 'Insurance' ? 'bg-[#700619] text-white shadow-xs' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <Shield className="w-5 h-5" />
                      </div>
                      <div className="font-bold text-slate-900 text-sm">Insurance</div>
                      <div className="text-[11px] text-slate-500 font-medium">Health, Life &amp; Motor</div>
                      <div className="text-[10px] font-bold text-sky-700 mt-1">Cashless Claims Support</div>
                    </button>

                  </div>
                </div>

                {/* STEP 2: DYNAMIC CUSTOMIZED SERVICE DETAILS */}
                <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-4">
                  
                  {/* CASE A: LOANS DYNAMIC SECTION */}
                  {activeEnquiry === 'Loans' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#700619] flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          <span>Loan Customization</span>
                        </span>
                        <span className="text-[11px] font-medium text-slate-500">Lowest Interest Rate Offers</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Loan Type Dropdown */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">
                            Type of Loan <span className="text-rose-500">*</span>
                          </label>
                          <select
                            name="loanType"
                            required
                            value={formData.loanType}
                            onChange={handleChange}
                            className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white font-medium text-slate-800"
                          >
                            <option value="Business Loan">💼 Business Loan</option>
                            <option value="Car / Vehicle Loan">🚗 Car / Vehicle Loan</option>
                            <option value="Home Loan / Housing Construction">🏠 Home Loan / Construction</option>
                            <option value="Personal Loan">👤 Personal Loan</option>
                            <option value="Loan Against Property (LAP)">📑 Loan Against Property (LAP)</option>
                            <option value="MSME & Machinery Loan">🏭 MSME &amp; Machinery Loan</option>
                            <option value="Education Loan">🎓 Education Loan</option>
                            <option value="Gold Loan">✨ Gold Loan</option>
                            <option value="Commercial Project Loan">🏢 Commercial Project Funding</option>
                            <option value="Balance Transfer & Top-up">🔄 Balance Transfer &amp; Top-up</option>
                          </select>
                        </div>

                        {/* Loan Amount Input with Presets */}
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
                              placeholder="e.g. 10 Lakhs, 50 Lakhs"
                              className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white font-semibold text-slate-900"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Quick Amount Preset Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[11px] text-slate-400 font-medium mr-1">Quick Select:</span>
                        {['₹5 Lakhs', '₹15 Lakhs', '₹30 Lakhs', '₹50 Lakhs', '₹1 Crore+'].map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => handleAmountPreset(amt)}
                            className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                              formData.loanAmount === amt 
                                ? 'bg-[#700619] text-white border-[#700619]' 
                                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {amt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CASE B: PROPERTIES DYNAMIC SECTION */}
                  {activeEnquiry === 'Properties' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                          <Home className="w-4 h-4" />
                          <span>Property &amp; Legal Specifications</span>
                        </span>
                        <span className="text-[11px] font-medium text-slate-500">Puducherry &amp; TN Properties</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Property Service Dropdown */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">
                            Property Service Type <span className="text-rose-500">*</span>
                          </label>
                          <select
                            name="propertyType"
                            required
                            value={formData.propertyType}
                            onChange={handleChange}
                            className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition-all bg-white font-medium text-slate-800"
                          >
                            <option value="Buy Residential / Commercial Property">🏡 Buy Residential / Commercial</option>
                            <option value="Sell Property / Land Plots">🏷️ Sell Property / Plot</option>
                            <option value="DTCP & RERA Approved Plots">📐 DTCP &amp; RERA Approved Plots</option>
                            <option value="Patta & Legal Title Verification">📜 Patta &amp; Legal Title Verification</option>
                            <option value="Property Registration & Document Clearance">📑 Registration &amp; Documentation</option>
                            <option value="Property Valuation Advisory">📊 Valuation &amp; Legal Advisory</option>
                          </select>
                        </div>

                        {/* Property Budget */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">
                            Estimated Budget / Property Value <span className="text-slate-400 font-normal">(Optional)</span>
                          </label>
                          <input 
                            type="text"
                            name="propertyBudget"
                            value={formData.propertyBudget}
                            onChange={handleChange}
                            placeholder="e.g. ₹25 Lakhs - ₹75 Lakhs"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition-all bg-white font-semibold text-slate-900"
                          />
                        </div>
                      </div>

                      {/* Quick Budget Preset Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[11px] text-slate-400 font-medium mr-1">Quick Select:</span>
                        {['Below ₹25 Lakhs', '₹25L – ₹50L', '₹50L – ₹1 Crore', 'Above ₹1 Crore'].map((bg) => (
                          <button
                            key={bg}
                            type="button"
                            onClick={() => handleBudgetPreset(bg)}
                            className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                              formData.propertyBudget === bg 
                                ? 'bg-emerald-800 text-white border-emerald-800' 
                                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {bg}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CASE C: INSURANCE DYNAMIC SECTION */}
                  {activeEnquiry === 'Insurance' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-sky-800 flex items-center gap-1.5">
                          <Shield className="w-4 h-4" />
                          <span>Insurance Plan Selection</span>
                        </span>
                        <span className="text-[11px] font-medium text-slate-500">Leading Top Insurance Providers</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Insurance Type Dropdown */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">
                            Type of Insurance <span className="text-rose-500">*</span>
                          </label>
                          <select
                            name="insuranceType"
                            required
                            value={formData.insuranceType}
                            onChange={handleChange}
                            className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-700/30 focus:border-sky-700 transition-all bg-white font-medium text-slate-800"
                          >
                            <option value="Health & Medical Insurance">🏥 Health &amp; Medical Insurance</option>
                            <option value="Life & Term Insurance">🛡️ Life &amp; Term Insurance</option>
                            <option value="Car / Motor Vehicle Insurance">🚗 Car &amp; 2-Wheeler Motor Insurance</option>
                            <option value="Commercial Fleet Insurance">🚛 Commercial Fleet Insurance</option>
                            <option value="Shop & Commercial Insurance">🏬 Shop &amp; Business Insurance</option>
                            <option value="Home & Fire Property Insurance">🏡 Home &amp; Property Insurance</option>
                          </select>
                        </div>

                        {/* Desired Sum Insured */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">
                            Desired Sum Insured <span className="text-slate-400 font-normal">(Optional)</span>
                          </label>
                          <input 
                            type="text"
                            name="insuranceCoverage"
                            value={formData.insuranceCoverage}
                            onChange={handleChange}
                            placeholder="e.g. ₹5 Lakhs, ₹25 Lakhs, ₹1 Crore"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-700/30 focus:border-sky-700 transition-all bg-white font-semibold text-slate-900"
                          />
                        </div>
                      </div>

                      {/* Quick Coverage Preset Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[11px] text-slate-400 font-medium mr-1">Quick Select:</span>
                        {['₹5 Lakhs Cover', '₹10 Lakhs Cover', '₹25 Lakhs Cover', '₹50 Lakhs Cover', '₹1 Crore Cover'].map((cov) => (
                          <button
                            key={cov}
                            type="button"
                            onClick={() => handleCoveragePreset(cov)}
                            className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                              formData.insuranceCoverage === cov 
                                ? 'bg-sky-800 text-white border-sky-800' 
                                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {cov}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* STEP 3: TYPE OF APPOINTMENT (Direct Visit vs Phone Call) */}
                <div className="space-y-2.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#700619] text-white flex items-center justify-center text-[11px] font-extrabold">2</span>
                    <span>Type of Appointment <span className="text-rose-500">*</span></span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    
                    {/* Option 1: Direct Visit */}
                    <div 
                      onClick={() => setFormData({ ...formData, appointmentType: 'Direct' })}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3.5 ${
                        formData.appointmentType === 'Direct'
                          ? 'border-[#700619] bg-rose-50/40 shadow-xs ring-1 ring-[#700619]/20'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
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
                          <Building2 className="w-4 h-4 text-[#700619]" />
                          <span>Direct Office Visit</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          Meet face-to-face at our Gorimedu, Puducherry office for in-depth documentation review.
                        </p>
                      </div>
                    </div>

                    {/* Option 2: Phone Call */}
                    <div 
                      onClick={() => setFormData({ ...formData, appointmentType: 'Phone Call' })}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3.5 ${
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
                          <PhoneCall className="w-4 h-4 text-[#700619]" />
                          <span>Phone Call Consultation</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          Speak directly with our senior financial expert over a private phone call.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* STEP 4: PREFERRED SCHEDULE (Date & Time Slot) */}
                <div className="space-y-2.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#700619] text-white flex items-center justify-center text-[11px] font-extrabold">3</span>
                    <span>Preferred Schedule <span className="text-rose-500">*</span></span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>Preferred Date <span className="text-slate-400 font-normal">(Optional)</span></span>
                      </label>
                      <input 
                        type="date"
                        name="preferredDate"
                        min={today}
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white font-medium text-slate-800"
                      />
                    </div>

                    {/* Preferred Time Slot */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Preferred Time Slot <span className="text-rose-500">*</span></span>
                      </label>
                      <select 
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white font-medium text-slate-800"
                      >
                        <option value="Morning (10:00 AM - 01:00 PM)">🌅 Morning (10:00 AM – 01:00 PM)</option>
                        <option value="Afternoon (01:00 PM - 04:00 PM)">☀️ Afternoon (01:00 PM – 04:00 PM)</option>
                        <option value="Evening (04:00 PM - 07:00 PM)">🌆 Evening (04:00 PM – 07:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* STEP 5: CONTACT INFORMATION (Name, Phone, Email) */}
                <div className="space-y-2.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#700619] text-white flex items-center justify-center text-[11px] font-extrabold">4</span>
                    <span>Your Contact Details <span className="text-rose-500">*</span></span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600 flex items-center justify-between">
                        <span>Full Name <span className="text-rose-500">*</span></span>
                      </label>
                      <input 
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600 flex items-center justify-between">
                        <span>Mobile Number <span className="text-rose-500">*</span></span>
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
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5 pt-1">
                    <label className="text-xs font-semibold text-slate-600 flex items-center justify-between">
                      <span>Email Address <span className="text-slate-400 font-normal">(Optional for confirmation receipt)</span></span>
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white"
                    />
                  </div>
                </div>

                {/* STEP 6: REMARKS / ADDITIONAL NOTES */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center justify-between">
                    <span>Remarks / Specific Requirements <span className="text-slate-400 font-normal text-xs">(Optional)</span></span>
                  </label>
                  <textarea 
                    name="remarks"
                    rows={3}
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Tell us any specific details (e.g., existing loan balance transfer, property survey number, preferred bank, etc.)..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#700619]/30 focus:border-[#700619] transition-all bg-white resize-y"
                  />
                </div>

                {/* STEP 7: SUBMIT BUTTON & TRUST BADGES */}
                <div className="pt-2 space-y-3">
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#700619] via-[#8C0720] to-[#700619] hover:from-[#540413] hover:to-[#540413] text-white py-4 px-8 rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-[#700619]/25 hover:shadow-xl hover:shadow-[#700619]/35 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>Schedule Appointment &amp; Submit Enquiry</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium pt-1">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>100% Privacy Protected</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Zero Obligation Consultation</span>
                    </div>
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE OFFICE MAP & ROUTE DIRECTIONS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mt-16 sm:mt-20 mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Map Embed (7 Cols) */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-inner border border-slate-200 min-h-[340px] relative">
              <iframe 
                title="Rajalakshmy Associates Puducherry Office Map"
                src="https://maps.google.com/maps?q=Gorimedu,%20Tindivanam%20Byp%20Rd,%20Puducherry%20605013&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[340px] border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Visit Office Info (5 Cols) */}
            <div className="lg:col-span-5 text-left space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#700619] bg-rose-50 px-3 py-1 rounded-full">
                  Visit In Person
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                  Our Gorimedu Office
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Located conveniently on Tindivanam Bypass Road in Gorimedu, our office offers easy parking and comfortable consultation rooms.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm font-serif-brand">
                  <Building2 className="w-4 h-4 text-[#700619]" />
                  <span>Rajalakshmy Associates</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  1st Floor, No. 151/35, Plot 19, Tindivanam Byp Rd, near KBS Travels, Gorimedu, Puducherry – 605013, India
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="https://maps.google.com/maps?q=Gorimedu,%20Tindivanam%20Byp%20Rd,%20Puducherry%20605013"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D97706] hover:bg-[#B45309] text-white px-7 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <span>Open Google Maps Directions</span>
                  <Navigation className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OTHER WAYS TO CONNECT GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
            Other Ways to Connect
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Reach out via your preferred communication channel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: WhatsApp */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition text-left flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">WhatsApp</h4>
              <p className="text-xs text-slate-500">Quick queries &amp; document share</p>
              <a 
                href="https://wa.me/917904634737" 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs font-bold text-emerald-600 hover:underline block pt-1"
              >
                +91 79046 34737
              </a>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition text-left flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">Direct Call</h4>
              <p className="text-xs text-slate-500">Speak with an advisor directly</p>
              <a 
                href="tel:+919566675322" 
                className="text-xs font-bold text-sky-600 hover:underline block pt-1"
              >
                +91 95666 75322
              </a>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition text-left flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1 overflow-hidden">
              <h4 className="font-bold text-slate-900 text-sm">Email Us</h4>
              <p className="text-xs text-slate-500">Drop us your requirements</p>
              <a 
                href="mailto:info@rajalakshmiassociates.com" 
                className="text-xs font-bold text-purple-600 hover:underline block pt-1 truncate"
              >
                info@rajalakshmiassociates.com
              </a>
            </div>
          </div>

          {/* Card 4: Office Visit */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition text-left flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">Branch Visit</h4>
              <p className="text-xs text-slate-500">Gorimedu, Puducherry</p>
              <a 
                href="https://maps.google.com/maps?q=Gorimedu,%20Tindivanam%20Byp%20Rd,%20Puducherry%20605013"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1 pt-1"
              >
                <span>Get Directions</span>
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
