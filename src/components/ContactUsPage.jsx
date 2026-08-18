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
  Shield
} from 'lucide-react';

export const ContactUsPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    appointmentType: 'Direct',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 01:00 PM)',
    remarks: ''
  });

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

  // Get today's date formatted as YYYY-MM-DD for min date attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-[#FAF7F4] min-h-screen text-slate-800 font-sans pb-16 select-none overflow-x-hidden">
      
      {/* 1. HERO BANNER MATCHING EXACT REFERENCE DESIGN */}
      <section className="w-full relative overflow-hidden bg-[#FAF7F2] pt-2 pb-6 sm:pt-3 sm:pb-8 lg:pt-4 lg:pb-10 flex items-start mb-8 sm:mb-12">
        
        {/* RIGHT FULL-BLEED IMAGE CONTAINER */}
        <div className="absolute top-0 bottom-0 right-0 w-full lg:w-[48%] xl:w-[50%] hidden lg:block overflow-hidden z-10 pointer-events-none">
          {/* Slanted Image Container */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-2xl z-20"
            style={{ 
              backgroundImage: `url(${buildingHeroImg})`,
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
                CONTACT RAJALAKSHMY ASSOCIATES
              </span>
              <span className="w-8 sm:w-12 h-[1.5px] bg-[#EBB638] rounded-full inline-block" />
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-serif-brand font-bold text-slate-900 leading-[1.18] relative z-10">
              Get In Touch With <br />
              <span className="text-[#700619]">Our Financial &amp; Legal Experts</span>
            </h1>

            {/* Separator Accent Line */}
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-12 h-[2.5px] bg-[#EBB638] rounded-full" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#EBB638]" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-xl relative z-10">
              <p>
                Have questions or need personalized loan, insurance, or property legal advisory? We are here to assist you with fast response and expert guidance.
              </p>
              <p>
                Visit our office branches in Puducherry or request a direct meeting / phone consultation today.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 relative z-10">
              <a 
                href="#contact-form"
                className="bg-[#700619] hover:bg-[#520412] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Book Appointment &amp; Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 2. TOP SECTION: GET IN TOUCH & SEND US A MESSAGE / BOOK CONSULTATION */}
      <section id="contact-form" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-10 sm:mb-14 scroll-mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CARD: GET IN TOUCH */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 shadow-md border border-slate-100/80 space-y-6 text-left">
            
            {/* Header with Orange Bar */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                Get In Touch
              </h2>
              <div className="w-12 h-[3px] bg-[#D97706] rounded-full" />
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                Have a question or need assistance? Reach out to us using the details below or book an appointment.
              </p>
            </div>

            {/* Contact Items List */}
            <div className="space-y-6 pt-2">
              
              {/* Item 1: Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Phone</h4>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700 flex flex-wrap gap-2 items-center">
                    <a href="tel:+917904634737" className="hover:text-[#D97706] transition-colors">+91 79046 34737</a>
                    <span className="text-slate-300">|</span>
                    <a href="tel:+919566675322" className="hover:text-[#D97706] transition-colors">+91 95666 75322</a>
                  </div>
                </div>
              </div>

              {/* Item 2: Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Email</h4>
                  <a href="mailto:info@rajalakshmiassociates.com" className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#D97706] transition-colors block break-all">
                    info@rajalakshmiassociates.com
                  </a>
                </div>
              </div>

              {/* Item 3: Office Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Office Address</h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                    1st Floor, No. 151/35, Plot 19, Tindivanam Byp Rd, near KBS Travels, Gorimedu, Puducherry - 605013, India
                  </p>
                </div>
              </div>

              {/* Item 4: Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Working Hours</h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-600">Mon - Sat: 9:30 AM - 6:30 PM</p>
                  <p className="text-xs font-medium text-slate-500">Sunday: By Appointment</p>
                </div>
              </div>

            </div>

            {/* Quick Highlights Badge */}
            <div className="bg-[#FFFDF7] border border-amber-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D97706] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Why Rajalakshmy Associates?</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 font-medium list-disc list-inside">
                <li>Instant loan sanction assistance &amp; lowest ROI</li>
                <li>Clear title verification &amp; Patta assistance</li>
                <li>Direct consultation across Puducherry &amp; TN</li>
              </ul>
            </div>

          </div>

          {/* RIGHT CARD: ENQUIRY & APPOINTMENT FORM */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 shadow-md border border-slate-100/80 text-left">
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                  Enquiry &amp; Appointment
                </h2>
                <span className="text-xs font-semibold px-3 py-1 bg-amber-50 text-[#D97706] border border-amber-200 rounded-full">
                  Free Consultation
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Select your enquiry type, loan / service preferences, and preferred appointment time.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 sm:p-8 rounded-2xl text-center space-y-4 my-2">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-serif-brand font-bold text-emerald-950">Thank You, {formData.name || 'Valued Customer'}!</h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Your enquiry for <span className="font-bold">{formData.enquiryType}</span> has been received successfully.
                  </p>
                </div>

                {/* Summary Box */}
                <div className="bg-white/80 border border-emerald-200 rounded-xl p-4 text-left text-xs sm:text-sm space-y-2 text-slate-700 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500">Enquiry Category:</span>
                    <span className="font-bold text-slate-900">{formData.enquiryType}</span>
                  </div>
                  {formData.enquiryType === 'Loans' && (
                    <>
                      <div className="flex justify-between border-b border-slate-100 pb-1.5">
                        <span className="text-slate-500">Loan Type:</span>
                        <span className="font-bold text-slate-900">{formData.loanType}</span>
                      </div>
                      {formData.loanAmount && (
                        <div className="flex justify-between border-b border-slate-100 pb-1.5">
                          <span className="text-slate-500">Required Amount:</span>
                          <span className="font-bold text-[#D97706]">{formData.loanAmount}</span>
                        </div>
                      )}
                    </>
                  )}
                  {formData.enquiryType === 'Properties' && (
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">Property Service:</span>
                      <span className="font-bold text-slate-900">{formData.propertyType}</span>
                    </div>
                  )}
                  {formData.enquiryType === 'Insurance' && (
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">Insurance Type:</span>
                      <span className="font-bold text-slate-900">{formData.insuranceType}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500">Appointment Mode:</span>
                    <span className="font-bold text-emerald-800">
                      {formData.appointmentType === 'Direct' ? '🏢 Direct Office Visit' : '📞 Phone Call Consultation'}
                    </span>
                  </div>
                  {formData.preferredDate && (
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">Preferred Date:</span>
                      <span className="font-bold text-slate-900">{formData.preferredDate}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-500">Preferred Time:</span>
                    <span className="font-bold text-slate-900">{formData.preferredTime}</span>
                  </div>
                </div>

                <p className="text-xs text-emerald-700">
                  Our advisor will contact you on <span className="font-bold">{formData.phone}</span> to confirm your schedule.
                </p>

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
                  className="mt-2 inline-block bg-emerald-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow hover:bg-emerald-800 transition cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* 1. Personal Details: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center justify-between">
                      <span>Your Name <span className="text-rose-500">*</span></span>
                    </label>
                    <input 
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition-all bg-slate-50/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center justify-between">
                      <span>Your Phone Number <span className="text-rose-500">*</span></span>
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* 2. Email */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center justify-between">
                    <span>Email Address <span className="text-slate-400 font-normal">(Optional)</span></span>
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition-all bg-slate-50/50"
                  />
                </div>

                {/* 3. TYPE OF ENQUIRY (Loans, Properties, Insurance) */}
                <div className="space-y-2 pt-1">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <span>Type of Enquiry <span className="text-rose-500">*</span></span>
                  </label>
                  
                  {/* Category Pills / Dropdown */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { id: 'Loans', label: 'Loans', icon: IndianRupee },
                      { id: 'Properties', label: 'Properties', icon: Home },
                      { id: 'Insurance', label: 'Insurance', icon: Shield }
                    ].map((item) => {
                      const Icon = item.icon;
                      const isSelected = formData.enquiryType === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, enquiryType: item.id })}
                          className={`flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all border cursor-pointer ${
                            isSelected 
                              ? 'bg-[#700619] text-white border-[#700619] shadow-sm ring-2 ring-[#700619]/20' 
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                          }`}
                        >
                          <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? 'text-[#EBB638]' : 'text-slate-500'}`} />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. CONDITIONAL FIELDS BASED ON ENQUIRY TYPE */}
                {/* CASE A: LOANS SELECTED */}
                {formData.enquiryType === 'Loans' && (
                  <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-4 sm:p-5 space-y-4 animate-fadeIn">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#D97706] uppercase tracking-wider">
                      <Briefcase className="w-4 h-4" />
                      <span>Loan Specifications</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Type of Loan Dropdown */}
                      <div className="space-y-1.5">
                        <label className="text-xs sm:text-sm font-bold text-slate-800">
                          Type of Loan <span className="text-rose-500">*</span>
                        </label>
                        <select
                          name="loanType"
                          required
                          value={formData.loanType}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-amber-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition-all bg-white font-medium text-slate-800"
                        >
                          <option value="Business Loan">Business Loan</option>
                          <option value="Car / Vehicle Loan">Car / Vehicle Loan</option>
                          <option value="Home Loan / Construction Loan">Home / Construction Loan</option>
                          <option value="Personal Loan">Personal Loan</option>
                          <option value="Loan Against Property (LAP) / Mortgage">Loan Against Property (LAP)</option>
                          <option value="MSME / Machinery Loan">MSME / Machinery Loan</option>
                          <option value="Education Loan">Education Loan</option>
                          <option value="Gold Loan">Gold Loan</option>
                          <option value="Project Funding / Commercial Loan">Project Funding / Commercial Loan</option>
                          <option value="Balance Transfer & Top-up">Balance Transfer &amp; Top-up</option>
                          <option value="Other Loan Type">Other Loan Requirement</option>
                        </select>
                      </div>

                      {/* Amount of the Loan */}
                      <div className="space-y-1.5">
                        <label className="text-xs sm:text-sm font-bold text-slate-800">
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
                            className="w-full pl-8 pr-4 py-2.5 sm:py-3 rounded-xl border border-amber-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition-all bg-white font-medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CASE B: PROPERTIES SELECTED */}
                {formData.enquiryType === 'Properties' && (
                  <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 space-y-4 animate-fadeIn">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      <Home className="w-4 h-4" />
                      <span>Property Requirements</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Property Type Dropdown */}
                      <div className="space-y-1.5">
                        <label className="text-xs sm:text-sm font-bold text-slate-800">
                          Property Service / Type <span className="text-rose-500">*</span>
                        </label>
                        <select
                          name="propertyType"
                          required
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-emerald-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/40 focus:border-emerald-600 transition-all bg-white font-medium text-slate-800"
                        >
                          <option value="Buy Residential / Commercial Property">Buy Residential / Commercial</option>
                          <option value="Sell Property / Land">Sell Property / Land</option>
                          <option value="DTCP / RERA Approved Plots">DTCP / RERA Approved Plots</option>
                          <option value="Patta & Legal Title Verification">Patta &amp; Legal Title Verification</option>
                          <option value="Property Registration & Documentation">Property Registration &amp; Documentation</option>
                          <option value="Valuation & Legal Advisory">Valuation &amp; Legal Advisory</option>
                          <option value="Rental / Lease Management">Rental / Lease Management</option>
                        </select>
                      </div>

                      {/* Budget / Property Value */}
                      <div className="space-y-1.5">
                        <label className="text-xs sm:text-sm font-bold text-slate-800">
                          Estimated Budget / Value <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input 
                          type="text"
                          name="propertyBudget"
                          value={formData.propertyBudget}
                          onChange={handleChange}
                          placeholder="e.g. ₹35 Lakhs - ₹80 Lakhs"
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-emerald-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/40 focus:border-emerald-600 transition-all bg-white font-medium"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* CASE C: INSURANCE SELECTED */}
                {formData.enquiryType === 'Insurance' && (
                  <div className="bg-sky-50/60 border border-sky-200/80 rounded-2xl p-4 sm:p-5 space-y-4 animate-fadeIn">
                    <div className="flex items-center gap-2 text-xs font-bold text-sky-800 uppercase tracking-wider">
                      <Shield className="w-4 h-4" />
                      <span>Insurance Requirements</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Insurance Type Dropdown */}
                      <div className="space-y-1.5">
                        <label className="text-xs sm:text-sm font-bold text-slate-800">
                          Type of Insurance <span className="text-rose-500">*</span>
                        </label>
                        <select
                          name="insuranceType"
                          required
                          value={formData.insuranceType}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-sky-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-600/40 focus:border-sky-600 transition-all bg-white font-medium text-slate-800"
                        >
                          <option value="Health & Medical Insurance">Health &amp; Medical Insurance</option>
                          <option value="Life & Term Insurance">Life &amp; Term Insurance</option>
                          <option value="Car / 2-Wheeler / Motor Insurance">Car &amp; Motor Vehicle Insurance</option>
                          <option value="Commercial Vehicle Insurance">Commercial Vehicle Insurance</option>
                          <option value="Shop & Business Insurance">Shop &amp; Business Insurance</option>
                          <option value="Home & Property Insurance">Home &amp; Property Insurance</option>
                          <option value="Personal Accident Cover">Personal Accident Cover</option>
                        </select>
                      </div>

                      {/* Desired Coverage */}
                      <div className="space-y-1.5">
                        <label className="text-xs sm:text-sm font-bold text-slate-800">
                          Desired Sum Insured / Coverage <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input 
                          type="text"
                          name="insuranceCoverage"
                          value={formData.insuranceCoverage}
                          onChange={handleChange}
                          placeholder="e.g. ₹10 Lakhs, ₹1 Crore"
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-sky-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-600/40 focus:border-sky-600 transition-all bg-white font-medium"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. TYPE OF APPOINTMENT (Direct or Phone Call) */}
                <div className="space-y-2 pt-1">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <span>Type of Appointment <span className="text-rose-500">*</span></span>
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Direct Visit */}
                    <label 
                      onClick={() => setFormData({ ...formData, appointmentType: 'Direct' })}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.appointmentType === 'Direct'
                          ? 'border-[#D97706] bg-amber-50/50 shadow-xs ring-1 ring-[#D97706]'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="appointmentType" 
                        value="Direct"
                        checked={formData.appointmentType === 'Direct'}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#D97706] focus:ring-[#D97706] accent-[#D97706]"
                      />
                      <div className="space-y-0.5">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#D97706]" />
                          <span>Direct Visit (Office Meeting)</span>
                        </div>
                        <p className="text-[11px] text-slate-500">Visit our office in Gorimedu, Puducherry</p>
                      </div>
                    </label>

                    {/* Phone Call */}
                    <label 
                      onClick={() => setFormData({ ...formData, appointmentType: 'Phone Call' })}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.appointmentType === 'Phone Call'
                          ? 'border-[#D97706] bg-amber-50/50 shadow-xs ring-1 ring-[#D97706]'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="appointmentType" 
                        value="Phone Call"
                        checked={formData.appointmentType === 'Phone Call'}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#D97706] focus:ring-[#D97706] accent-[#D97706]"
                      />
                      <div className="space-y-0.5">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                          <span>Phone Call Consultation</span>
                        </div>
                        <p className="text-[11px] text-slate-500">Discuss with our specialist over a phone call</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* 6. PREFERRED DATE & TIME */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>Preferred Date <span className="text-slate-400 font-normal">(Optional)</span></span>
                    </label>
                    <input 
                      type="date"
                      name="preferredDate"
                      min={today}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition-all bg-slate-50/50"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>Preferred Time Slot <span className="text-rose-500">*</span></span>
                    </label>
                    <select 
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition-all bg-slate-50/50 font-medium"
                    >
                      <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                      <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM - 04:00 PM)</option>
                      <option value="Evening (04:00 PM - 07:00 PM)">Evening (04:00 PM - 07:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* 7. REMARKS */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center justify-between">
                    <span>Remarks / Additional Details <span className="text-slate-400 font-normal">(Optional)</span></span>
                  </label>
                  <textarea 
                    name="remarks"
                    rows={3}
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Tell us any specific requirements, current loan status, or queries..."
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition-all bg-slate-50/50 resize-y"
                  />
                </div>

                {/* 8. Submit Button */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                  <button 
                    type="submit"
                    className="bg-[#D97706] hover:bg-[#B45309] text-white px-7 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Enquiry &amp; Schedule</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>100% confidential &amp; zero obligation consultation</span>
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* 3. MIDDLE SECTION: MAP EMBED & VISIT OUR OFFICE CARD */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* MAP EMBED (7 COLS) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 min-h-[320px] sm:min-h-[380px] relative">
            <iframe 
              title="Rajalakshmy Associates Office Location Map"
              src="https://maps.google.com/maps?q=Gorimedu,%20Tindivanam%20Byp%20Rd,%20Puducherry%20605013&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[320px] sm:min-h-[380px] border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* VISIT OUR OFFICE CARD (5 COLS) */}
          <div className="lg:col-span-5 bg-[#FFFDF7] border border-amber-200/70 rounded-3xl p-7 sm:p-9 shadow-md flex flex-col justify-between text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                Visit Our Office
              </h2>
              <div className="w-12 h-[3px] bg-[#D97706] rounded-full" />
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                We welcome you to visit our office for personalized assistance.
              </p>
            </div>

            {/* Office Badge Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base font-serif-brand">
                  Rajalakshmy Associates
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  1st Floor, No. 151/35, Plot 19, Tindivanam Byp Rd, near KBS Travels, Gorimedu, Puducherry - 605013, India
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <a 
                href="https://maps.google.com/maps?q=Gorimedu,%20Tindivanam%20Byp%20Rd,%20Puducherry%20605013"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#D97706] text-[#D97706] hover:bg-[#D97706] hover:text-white px-7 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-xs"
              >
                <span>Get Directions</span>
                <Navigation className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 4. BOTTOM SECTION: OTHER WAYS TO CONNECT DIVIDER & 4 CARDS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading Divider with Gold Line Accents */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 text-center">
          <span className="h-[1.5px] w-16 sm:w-32 bg-gradient-to-r from-transparent to-[#D97706] rounded-full inline-block" />
          <h2 className="text-xl sm:text-2xl font-serif-brand font-bold text-slate-900 flex items-center gap-2">
            <span className="text-[#D97706] text-xs">◆</span> Other Ways to Connect <span className="text-[#D97706] text-xs">◆</span>
          </h2>
          <span className="h-[1.5px] w-16 sm:w-32 bg-gradient-to-l from-transparent to-[#D97706] rounded-full inline-block" />
        </div>

        {/* 4-Card Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: WhatsApp */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-left flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-base">WhatsApp</h3>
              <p className="text-xs text-slate-500 leading-snug">Chat with us for quick assistance</p>
              <a 
                href="https://wa.me/917904634737" 
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-bold text-[#10B981] hover:underline block pt-1"
              >
                +91 79046 34737
              </a>
            </div>
          </div>

          {/* Card 2: Call Us */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-left flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#0284C7] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-base">Call Us</h3>
              <p className="text-xs text-slate-500 leading-snug">Speak directly with our experts</p>
              <a 
                href="tel:+919566675322" 
                className="text-xs sm:text-sm font-bold text-[#0284C7] hover:underline block pt-1"
              >
                +91 95666 75322
              </a>
            </div>
          </div>

          {/* Card 3: Email Us */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-left flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1 overflow-hidden">
              <h3 className="font-bold text-slate-900 text-base">Email Us</h3>
              <p className="text-xs text-slate-500 leading-snug">Drop us an email anytime</p>
              <a 
                href="mailto:info@rajalakshmiassociates.com" 
                className="text-xs font-bold text-[#8B5CF6] hover:underline block pt-1 truncate"
              >
                info@rajalakshmiassociates.com
              </a>
            </div>
          </div>

          {/* Card 4: Visit Office */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-left flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#D97706] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-base">Visit Office</h3>
              <p className="text-xs text-slate-500 leading-snug">Come and meet our team</p>
              <a 
                href="https://maps.google.com/maps?q=Gorimedu,%20Tindivanam%20Byp%20Rd,%20Puducherry%20605013"
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-bold text-[#D97706] hover:underline flex items-center gap-1 pt-1"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};

export default ContactUsPage;
