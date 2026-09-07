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
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href="tel:+917904634737" className="hover:text-[#EBB638] transition-colors">+91 79046 34737</a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href="mailto:info@rajalakshmiassociates.com" className="hover:text-[#EBB638] transition-colors">
                  info@rajalakshmiassociates.com
                </a>
              </div>

              {/* Branch 1 */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EBB638] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="text-[11px] font-bold text-[#EBB638] uppercase tracking-wider">Branch 1 (Head Office):</div>
                  <span className="leading-snug text-white/85 text-[11px] sm:text-xs">
                    1st Floor, No. 151/35, Plot 19, Tindivanam Byp Rd, near KBS Travels, Gorimedu, Puducherry - 605013
                  </span>
                </div>
              </div>

              {/* Branch 2 */}
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#EBB638] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="text-[11px] font-bold text-[#EBB638] uppercase tracking-wider">Branch 2 (Thilaspet):</div>
                  <span className="leading-snug text-white/85 text-[11px] sm:text-xs">
                    No. 76B, Iyyanar Kovil Street, Thilaspet, Puducherry - 605009
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-xs sm:text-[13px]">
                  <div>Mon - Sat: 9:30 AM - 8:00 PM</div>
                  <div className="text-[11px] text-[#EBB638] font-normal">Sunday: Based on Appointment</div>
                </div>
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
