import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  MessageSquare, 
  HelpCircle, 
  ChevronDown,
  ExternalLink
} from 'lucide-react';

export const ContactUsPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Puducherry',
    service: 'Property Registration & Title Legal Opinion',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const offices = [
    {
      title: 'Puducherry Main Office',
      tagline: 'Headquarters',
      address: 'No. 142, Anna Salai, Near Grand Bazaar, Heritage Town, Puducherry - 605001',
      phone: '+91 98423 00000 / 0413 2345678',
      email: 'puducherry@rajalakshimiassociates.com',
      hours: 'Mon - Sat: 9:00 AM - 8:00 PM',
      mapUrl: 'https://maps.google.com/?q=Puducherry'
    },
    {
      title: 'Madras High Court Branch',
      tagline: 'Litigation & Appeals',
      address: 'Chamber No. 412, Lawyers Block, High Court Buildings, Chennai, Tamil Nadu - 600104',
      phone: '+91 98423 11111 / 044 25340000',
      email: 'highcourt@rajalakshimiassociates.com',
      hours: 'Mon - Fri: 10:00 AM - 6:00 PM',
      mapUrl: 'https://maps.google.com/?q=Madras+High+Court'
    }
  ];

  const faqs = [
    {
      q: 'How fast can Rajalakshimi Associates issue a Legal Opinion on Property Title?',
      a: 'Standard 30-year mother deed title scrutiny and Encumbrance Certificate (EC) verification takes 48 to 72 business hours after receiving document copies.'
    },
    {
      q: 'Do you represent clients in District Courts outside Puducherry?',
      a: 'Yes. We regularly represent clients across Puducherry, Cuddalore, Villupuram, Chennai, Coimbatore, and Madras High Court.'
    },
    {
      q: 'Can NRIs schedule virtual legal consultations?',
      a: 'Absolutely. We offer dedicated video consultations via Zoom/Google Meet and handle Power of Attorney (POA) drafting for NRI clients worldwide.'
    },
    {
      q: 'What documents are needed for initial property consultation?',
      a: 'Please bring or email copies of Parent Deed, Current Sale Deed, Patta/Chitta, Encumbrance Certificate (EC), and Property Tax receipts.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-16">
      
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-b from-[#700619] via-[#850820] to-[#700619] text-white py-14 sm:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-200 text-xs sm:text-sm font-semibold border border-white/15">
            <MapPin className="w-4 h-4 text-amber-300" />
            <span>Puducherry &amp; Tamil Nadu Offices</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-brand font-bold text-white leading-tight">
            Contact Rajalakshimi Associates
          </h1>
          <p className="text-rose-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get confidential legal advice from senior advocates for property registration, civil litigation, title deeds, and corporate advisory.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID: OFFICE CARDS + FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: OFFICE LOCATIONS & DIRECT HELPLINES (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Badge */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-rose-50 text-[#700619] rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Direct Legal Helpline</h3>
                  <p className="text-xs text-slate-500">Available Mon - Sat (9am - 8pm)</p>
                </div>
              </div>
              
              <div className="p-3.5 bg-[#700619] text-white rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-rose-200 uppercase font-semibold tracking-wider">Call Senior Advocate</div>
                  <div className="text-lg font-bold font-mono text-amber-200">+91 98423 00000</div>
                </div>
                <a 
                  href="tel:+919842300000"
                  className="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Office Cards */}
            {offices.map((off, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <h3 className="font-serif-brand text-lg font-bold text-slate-900">{off.title}</h3>
                    <span className="text-[11px] font-semibold text-[#700619] bg-rose-50 px-2.5 py-0.5 rounded-full">
                      {off.tagline}
                    </span>
                  </div>
                  <Building2 className="w-6 h-6 text-[#700619]/60" />
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#700619] shrink-0 mt-1" />
                    <span>{off.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#700619] shrink-0" />
                    <span className="font-semibold text-slate-800">{off.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#700619] shrink-0" />
                    <span>{off.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-500">
                    <Clock className="w-4 h-4 text-[#700619] shrink-0" />
                    <span>{off.hours}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a 
                    href={off.mapUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#700619] hover:underline"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}

          </div>

          {/* RIGHT: INTERACTIVE CONTACT FORM (7 COLS) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              
              <div className="mb-6 space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#700619] uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confidential Inquiry</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                  Schedule Legal Consultation
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Fill out the form below. Our legal team will review your requirement and respond within 2 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 bg-rose-50/50 rounded-xl border border-rose-100">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif-brand font-bold text-slate-900">Inquiry Received Successfully!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Senior advocates at Rajalakshimi Associates will contact you at <span className="font-semibold text-slate-900">{formData.phone}</span> shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 bg-[#700619] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#570413]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. K. Vasanth Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#700619] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#700619] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#700619] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Location & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Branch *
                      </label>
                      <select 
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#700619] focus:border-transparent outline-none bg-white transition-all"
                      >
                        <option value="Puducherry">Puducherry Office</option>
                        <option value="Chennai">Madras High Court / Chennai</option>
                        <option value="Cuddalore">Cuddalore District Court</option>
                        <option value="Villupuram">Villupuram District Court</option>
                        <option value="NRI Desk">NRI Remote Virtual Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Practice Area *
                      </label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#700619] focus:border-transparent outline-none bg-white transition-all"
                      >
                        <option value="Property Title Opinion">Property Title Search &amp; Opinion</option>
                        <option value="Deed Drafting">Sale / Gift / Partition Deed Drafting</option>
                        <option value="Civil Court Suit">Civil &amp; Land Injunction Suit</option>
                        <option value="Madras High Court">Madras High Court Writ Petition</option>
                        <option value="Corporate GST">Corporate Law &amp; GST Registration</option>
                        <option value="Wills Probate">Wills &amp; Probate Administration</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Case Details / Message *
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Please provide brief details about your land, property, or court matter..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#700619] focus:border-transparent outline-none resize-none transition-all"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full bg-[#700619] hover:bg-[#570413] text-white py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#700619]/25 hover:shadow-xl transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Legal Consultation Request</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Strict Advocate-Client Legal Confidentiality Maintained</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#700619] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Common Queries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#700619] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#700619]' : ''}`} />
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-gray-100 pt-3 bg-rose-50/20">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default ContactUsPage;
