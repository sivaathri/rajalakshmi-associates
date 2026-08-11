import React, { useState } from 'react';
import bannerBgImg from '../assets/contactbg.png';
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
  CheckCircle2
} from 'lucide-react';

export const ContactUsPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F4] min-h-screen text-slate-800 font-sans pb-16 select-none overflow-x-hidden">
      
      {/* 1. HERO BANNER */}
      <section 
        className="w-full bg-[#350008] text-white relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[280px] sm:min-h-[340px] flex items-center mb-8 sm:mb-12"
        style={{ backgroundImage: `url(${bannerBgImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A000E] via-[#4A000E]/90 to-[#2A0007]/80 z-10" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 relative z-20 w-full">
          <div className="max-w-2xl text-left space-y-3 animate-float-up">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-extrabold text-[#EBB638] uppercase tracking-[0.2em]">
                CONTACT RAJALAKSHMY ASSOCIATES
              </span>
              <span className="w-12 h-[2px] bg-[#EBB638] rounded-full inline-block" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif-brand font-bold text-white leading-tight">
              Get In Touch With <br />
              <span className="text-[#EBB638]">Our Financial Experts.</span>
            </h1>

            <p className="text-xs sm:text-sm text-rose-100/90 max-w-xl font-normal leading-relaxed">
              Have questions or need personalized loan, insurance, or property legal advisory? We are here to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TOP SECTION: GET IN TOUCH & SEND US A MESSAGE (EXACT UI MATCHING REFERENCE IMAGE) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-10 sm:mb-14">
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
                Have a question or need assistance? Reach out to us using the details below.
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

          </div>

          {/* RIGHT CARD: SEND US A MESSAGE */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 shadow-md border border-slate-100/80 text-left">
            <div className="space-y-2 mb-6">
              <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Fill out the form below and our team will get back to you soon.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 sm:p-8 rounded-2xl text-center space-y-3 my-4">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif-brand font-bold text-emerald-950">Thank You! Message Sent.</h3>
                <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                  Our loan & legal advisory team at Rajalakshmy Associates will reach out to you shortly.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-800 underline hover:text-emerald-950 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-700">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition-all bg-slate-50/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-700">
                      Your Phone <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Row 2: Email */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition-all bg-slate-50/50"
                  />
                </div>

                {/* Row 3: Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition-all bg-slate-50/50"
                  />
                </div>

                {/* Row 4: Message */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/40 focus:border-[#D97706] transition-all bg-slate-50/50 resize-y"
                  />
                </div>

                {/* Submit Action Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                  <button 
                    type="submit"
                    className="bg-[#D97706] hover:bg-[#B45309] text-white px-7 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Your information is safe with us.</span>
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
