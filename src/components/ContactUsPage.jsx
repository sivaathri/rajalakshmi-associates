import React, { useState } from 'react';
import bannerBgImg from '../assets/contactbg.png';
import officeReceptionImg from '../assets/office_reception.png';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User, 
  FileText, 
  Edit3, 
  ArrowRight, 
  Headphones,
  CheckCircle2 
} from 'lucide-react';

export const ContactUsPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#F8F5F2] min-h-screen text-slate-800 font-sans pb-12 select-none">
      
      {/* 1. TOP PANORAMIC HERO BANNER WITH DARK CRIMSON OVERLAY */}
      <section 
        className="w-full bg-[#350008] text-white relative overflow-hidden bg-cover bg-center bg-no-reprat min-h-[320px] lg:min-h-[380px] flex items-center"
        style={{ backgroundImage: `url(${bannerBgImg})` }}
      >
        {/* Dark crimson gradient overlay fading from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#42000A] via-[#42000A]/90 to-transparent z-10"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16 relative z-20 w-full">
          <div className="max-w-2xl text-left space-y-4">
            
            {/* Category label with line */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#EBB638] uppercase tracking-[0.2em]">
                CONTACT US
              </span>
              <span className="w-12 h-[2px] bg-[#EBB638]"></span>
            </div>

            {/* Headline matching exact reference text & typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-serif-brand font-bold text-white leading-[1.12]">
              We’re Here to Help You <br />
              <span className="text-[#EBB638]">Achieve Your Financial Goals.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-rose-100/90 max-w-xl font-normal leading-relaxed pt-1">
              Have questions or need personalized financial solutions? <br />
              Our team is ready to assist you.
            </p>

            <div className="w-20 h-[2px] bg-[#EBB638] mt-2"></div>
          </div>
        </div>
      </section>

      {/* 2. MIDDLE CONTENT GRID (GET IN TOUCH | SEND MESSAGE | RECEPTION & CALL CARD) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* CARD 1: GET IN TOUCH (3.5 COLS) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-7 sm:p-8 shadow-md border border-slate-100/80 space-y-6 text-left">
            
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-[#6D0014] uppercase tracking-wider">
                GET IN TOUCH
              </h3>
              <span className="w-10 h-[2px] bg-[#EBB638]"></span>
            </div>

            {/* Contact Details List with Maroon Circle Badges */}
            <div className="space-y-5 text-xs sm:text-sm">
              
              {/* Call Us */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#6D0014] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Call Us</h4>
                  <p className="font-medium text-slate-800 text-xs sm:text-sm mt-0.5">+91 98423 00000</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Mon - Sat: 9:30 AM - 6:30 PM</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#6D0014] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Email Us</h4>
                  <p className="font-medium text-slate-800 text-xs sm:text-sm mt-0.5">info@rajalakshmiassociates.com</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">We reply within 24 hours</p>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#6D0014] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Visit Us</h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mt-0.5">
                    No: 123, MG Road, Pondicherry - 605001, Tamil Nadu, India.
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#6D0014] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Working Hours</h4>
                  <p className="text-slate-700 text-xs sm:text-sm mt-0.5">Mon - Sat: 9:30 AM - 6:30 PM</p>
                  <p className="text-slate-500 text-xs mt-0.5">Sunday: Closed</p>
                </div>
              </div>

            </div>

          </div>

          {/* CARD 2: SEND US A MESSAGE FORM (4.5 COLS) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-7 sm:p-8 shadow-md border border-slate-100/80 space-y-6 text-left">
            
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-[#6D0014] uppercase tracking-wider">
                SEND US A MESSAGE
              </h3>
              <span className="w-10 h-[2px] bg-[#EBB638]"></span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3 bg-rose-50/50 rounded-xl p-4 border border-rose-100">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Message Sent!</h4>
                <p className="text-xs text-slate-600">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 bg-[#6D0014] text-white px-5 py-2 rounded-full font-semibold text-xs hover:bg-[#52000F]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4.5">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#6D0014] focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input 
                      type="email" 
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#6D0014] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input 
                      type="tel" 
                      required
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#6D0014] focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input 
                      type="text" 
                      required
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#6D0014] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Textarea */}
                <div className="relative">
                  <Edit3 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <textarea 
                    required
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#6D0014] focus:border-transparent outline-none resize-none"
                  ></textarea>
                </div>

                {/* Submit Button matching reference image */}
                <div className="pt-1">
                  <button 
                    type="submit"
                    className="bg-[#6D0014] hover:bg-[#52000F] text-white px-7 py-3 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* RIGHT SIDE STACK (3 COLS: RECEPTION IMAGE + NEED ASSISTANCE CARD) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Top Reception Image */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 h-44">
              <img 
                src={officeReceptionImg} 
                alt="Rajalakshmi Associates Reception Interior" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom Dark Maroon Assistance Card */}
            <div className="bg-[#4D000E] text-white rounded-2xl p-5 shadow-lg space-y-3.5 text-left border border-white/10">
              
              <div className="w-10 h-10 rounded-full border border-[#EBB638] bg-[#6D0014] text-[#EBB638] flex items-center justify-center">
                <Headphones className="w-5 h-5" />
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-sm text-white">Need Immediate Assistance?</h4>
                <p className="text-[11px] text-rose-100/80 leading-snug">
                  Talk to our experts for quick support and the right financial advice.
                </p>
              </div>

              <a 
                href="tel:+919842300000"
                className="inline-flex items-center gap-2 bg-[#6D0014] hover:bg-[#52000F] border border-white/20 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all"
              >
                <span>Call Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* 3. BOTTOM EMBEDDED REAL GOOGLE MAP */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-6">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative bg-slate-200 h-72 sm:h-80 w-full">
          
          {/* Interactive Google Maps Iframe for Pondicherry */}
          <iframe
            title="Rajalakshmi Associates Puducherry Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.664426574246!2d79.827299!3d11.936306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536173a116b47d%3A0x6a0f7c22ab65a25c!2sMG%20Road%2C%20Puducherry!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>

          {/* Floating Location Overlay Badge */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-200 flex items-center gap-3 z-10">
            <div className="w-9 h-9 rounded-full bg-[#6D0014] text-white flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#EBB638] fill-[#EBB638]" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-[#6D0014]">Rajalakshmi Associates</div>
              <div className="text-[11px] text-slate-600 font-medium">No: 123, MG Road, Pondicherry - 605001</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactUsPage;
