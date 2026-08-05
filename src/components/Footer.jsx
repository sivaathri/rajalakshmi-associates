import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#700619] rounded-lg flex items-center justify-center text-white font-serif-brand font-bold text-xl border border-rose-500/30">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-serif-brand text-2xl font-bold text-white">
                  Rajalakshimi
                </span>
                <span className="font-serif-brand text-[10px] font-bold text-rose-300 uppercase tracking-[0.35em]">
                  Associates
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Premier legal practitioners and corporate legal advisors serving clients across Puducherry, Chennai, Cuddalore, Villupuram, and Tamil Nadu.
            </p>

            <div className="font-tamil text-amber-200 text-sm font-medium pt-1">
              இராஜலட்சுமி இணை - Puducherry &amp; Tamil Nadu
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#700619] text-slate-300 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#700619] text-slate-300 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#700619] text-slate-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-0.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#700619] text-slate-300 hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Practice Areas */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-brand">Practice Areas</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-amber-200 transition-colors">Property Registration</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">Title Search Legal Opinion</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">Civil Partition Suits</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">Madras High Court Litigation</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">Wills &amp; Probate Drafting</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">Corporate &amp; GST Compliance</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-brand">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-amber-200 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-200 transition-colors">Why Choose Us</a></li>
              <li><a href="#" className="hover:text-amber-200 transition-colors">NRI Legal Desk</a></li>
              <li><a href="#" className="hover:text-amber-200 transition-colors">Legal Articles &amp; Insights</a></li>
              <li><button onClick={onOpenConsultation} className="hover:text-amber-200 transition-colors text-left">Free Consultation</button></li>
              <li><a href="#" className="hover:text-amber-200 transition-colors">Contact Office</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Office */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-brand">Our Offices</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Puducherry Office: Anna Salai, Heritage Town, Puducherry 605001</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Tamil Nadu Branch: High Court Chamber, Chennai, TN 600104</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <span>+91 98423 00000 / +91 0413 2345678</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <span>legal@rajalakshmiassociates.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Rajalakshmi Associates. All rights reserved. Puducherry &amp; Tamil Nadu.</p>
          <div className="flex items-center space-x-6 text-slate-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Practice</a>
            <a href="#" className="hover:text-white">Legal Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
