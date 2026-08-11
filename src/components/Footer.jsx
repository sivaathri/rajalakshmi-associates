import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer = ({ onOpenConsultation = () => {}, setActiveTab = () => {} }) => {
  return (
    <footer className="bg-gradient-to-r from-[#4E010F] via-[#670216] to-[#4E010F] text-white pt-12 pb-5 border-t border-[#850D24] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* MAIN 4-COLUMN GRID WITH VERTICAL DIVIDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10">
          
          {/* COLUMN 1: BRAND LOGO & TAGLINE & SOCIAL ICONS (4 COLS) */}
          <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-6 lg:border-r border-[#850D24]/70">
            {/* Logo Image */}
            <div className="flex items-center">
              <Logo variant="light" className="h-14 sm:h-16" />
            </div>

            {/* Tagline */}
            <p className="text-xs sm:text-[13px] text-rose-100/90 leading-relaxed max-w-sm font-normal">
              Building trust, empowering growth and creating financial &amp; legal success through ethical and transparent solutions.
            </p>

            {/* Circle Social Icons matching reference image */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white hover:text-[#670216] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white hover:text-[#670216] transition-all"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white hover:text-[#670216] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-0.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/>
                </svg>
              </a>

              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white hover:text-[#670216] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (2.5 COLS) */}
          <div className="lg:col-span-2 space-y-3.5 px-0 lg:px-4 lg:border-r border-[#850D24]/70">
            <h4 className="text-sm font-bold text-[#EBB638] uppercase tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-white/90">
              <li><button onClick={() => setActiveTab('Home')} className="hover:text-[#EBB638] transition-colors cursor-pointer text-left">Home</button></li>
              <li><button onClick={() => setActiveTab('About Us')} className="hover:text-[#EBB638] transition-colors cursor-pointer text-left">About Us</button></li>
              <li><button onClick={() => setActiveTab('Loans')} className="hover:text-[#EBB638] transition-colors cursor-pointer text-left">Loans</button></li>
              <li><button onClick={() => setActiveTab('Why Choose Us')} className="hover:text-[#EBB638] transition-colors cursor-pointer text-left">Why Choose Us</button></li>
              <li><button onClick={() => setActiveTab('Gallery')} className="hover:text-[#EBB638] transition-colors cursor-pointer text-left">Gallery</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-[#EBB638] transition-colors cursor-pointer text-left">Contact Us</button></li>
            </ul>
          </div>

          {/* COLUMN 3: OUR SERVICES (2.5 COLS) */}
          <div className="lg:col-span-2 space-y-3.5 px-0 lg:px-4 lg:border-r border-[#850D24]/70">
            <h4 className="text-sm font-bold text-[#EBB638] uppercase tracking-wider">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-white/90">
              <li><button onClick={() => setActiveTab('Loans')} className="hover:text-[#EBB638] transition-colors cursor-pointer text-left">Loans</button></li>
              <li><button onClick={() => setActiveTab('Insurance')} className="hover:text-[#EBB638] transition-colors cursor-pointer text-left">Insurance</button></li>
              <li><button onClick={() => setActiveTab('Properties')} className="hover:text-[#EBB638] transition-colors cursor-pointer text-left">Properties</button></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT US (3 COLS) */}
          <div className="lg:col-span-4 space-y-3.5 pl-0 lg:pl-4">
            <h4 className="text-sm font-bold text-[#EBB638] uppercase tracking-wider">
              CONTACT US
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm font-medium text-white/90">
              
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+917904634737" className="hover:text-[#EBB638] transition-colors">+91 79046 34737</a>
                  <a href="tel:+919566675322" className="hover:text-[#EBB638] transition-colors">+91 95666 75322</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href="mailto:info@rajalakshmiassociates.com" className="hover:text-[#EBB638] transition-colors">
                  info@rajalakshmiassociates.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="leading-snug">
                  1st Floor, No. 151/35, Plot 19, Tindivanam Byp Rd, near KBS Travels, Gorimedu, Puducherry - 605013
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-white shrink-0" />
                <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-4 border-t border-[#850D24]/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/90 font-medium">
          <p>© {new Date().getFullYear()} Pondy IT Solutions</p>
          
          <div className="flex items-center space-x-4 text-white/90">
            <a href="#privacy" className="hover:text-[#EBB638] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-[#EBB638] transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
