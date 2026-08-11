import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  MapPin, 
  ChevronDown, 
  Phone, 
  Menu, 
  X,
  Landmark,
  ShieldCheck,
  Building2,
  Home
} from 'lucide-react';

export const Header = ({ 
  activeTab = 'Home', 
  setActiveTab = () => {},
  onOpenConsultation = () => {}
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navItems = [
    { name: 'Home', hasDropdown: false },
    { name: 'About Us', hasDropdown: false },
    { 
      name: 'Our Services', 
      hasDropdown: true,
      items: [
        { title: 'Loans', desc: 'Customized loan solutions for individuals & businesses', icon: Landmark },
        { title: 'Insurance', desc: 'Life, health, general & business insurance solutions', icon: ShieldCheck },
        { title: 'Property', desc: 'Property registration, legal verification & documentation', icon: Home },
      ]
    },
    { name: 'Why Choose Us', hasDropdown: false },
    { name: 'Contact Us', hasDropdown: false },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      {/* 1. TOP ANNOUNCEMENT / INFO BAR - RESPONSIVE ALL SCREENS */}
      <div className="bg-[#700619] text-white py-1.5 sm:py-2 px-2.5 sm:px-4 lg:px-8 border-b border-[#880820]">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm">
          
          {/* Left: Location & Phone Numbers */}
          <div className="flex items-center gap-2 sm:gap-4 font-medium tracking-wide shrink-0">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-200 shrink-0" />
              <span>Puducherry & Tamilnadu</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-amber-100/90 text-[11px] sm:text-xs">
              <Phone className="w-3 h-3 text-rose-200 shrink-0" />
              <a href="tel:+917904634737" className="hover:text-amber-200 transition-colors">+91 79046 34737</a>
              <span className="text-rose-300/60">|</span>
              <a href="tel:+919566675322" className="hover:text-amber-200 transition-colors">+91 95666 75322</a>
            </div>
          </div>

          {/* Center: Tamil Regional Tagline */}
          <div className="font-tamil font-semibold text-[11px] sm:text-xs md:text-sm lg:text-base tracking-wider text-amber-100 flex items-center gap-2">
            <span>இராஜலட்சுமி இணை</span>
          </div>

          {/* Right: Social Media Links */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-white/90 shrink-0">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-amber-200 transition-colors p-0.5 sm:p-1 hover:bg-white/10 rounded-full"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-amber-200 transition-colors p-0.5 sm:p-1 hover:bg-white/10 rounded-full"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
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
              className="hover:text-amber-200 transition-colors p-0.5 sm:p-1 hover:bg-white/10 rounded-full"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-0.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-amber-200 transition-colors p-0.5 sm:p-1 hover:bg-white/10 rounded-full"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER - RESPONSIVE LAYOUT */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2">
        <div className="flex items-center justify-between gap-2">

          {/* BRAND LOGO - AUTO SCALES PER SCREEN SIZE */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); setActiveTab('Home'); }}
            className="flex items-center group cursor-pointer shrink-0"
          >
            <Logo className="h-9 xs:h-11 sm:h-13 md:h-14 lg:h-16" />
          </a>

          {/* DESKTOP & TABLET NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-7 text-xs xl:text-sm font-semibold text-slate-800">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              
              if (item.name === 'Our Services') {
                return (
                  <div 
                    key={item.name} 
                    className="relative group py-2"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button 
                      onClick={() => setActiveTab(item.name)}
                      className={`flex items-center gap-1 transition-colors hover:text-[#700619] cursor-pointer ${
                        isActive ? 'text-[#700619]' : 'text-slate-700'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#700619]' : 'text-slate-400'}`} />
                    </button>

                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="space-y-1">
                          {item.items?.map((sub, idx) => {
                            const IconComp = sub.icon;
                            return (
                              <a
                                key={idx}
                                href={`#service-${idx}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveTab('Our Services');
                                  setServicesDropdownOpen(false);
                                }}
                                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-rose-50/70 transition-colors group/sub cursor-pointer"
                              >
                                <div className="p-2 bg-rose-100/60 rounded-md text-[#700619] group-hover/sub:bg-[#700619] group-hover/sub:text-white transition-colors shrink-0">
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-slate-900 group-hover/sub:text-[#700619]">
                                    {sub.title}
                                  </div>
                                  <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                    {sub.desc}
                                  </div>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`relative py-2 transition-colors hover:text-[#700619] whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-[#700619] font-bold' : 'text-slate-700'
                  }`}
                >
                  {item.name}
                  {/* Underline indicator for active state */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#700619] rounded-full transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* RIGHT ACTION BUTTON: FREE CONSULTATION */}
          <div className="hidden sm:flex items-center shrink-0">
            <button 
              onClick={onOpenConsultation}
              className="bg-[#700619] hover:bg-[#570413] text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs lg:text-sm flex items-center gap-2 shadow-md shadow-[#700619]/25 hover:shadow-lg hover:shadow-[#700619]/35 transition-all duration-200 active:scale-95 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-white stroke-none text-white -rotate-12" />
              <span>Free Consultation</span>
            </button>
          </div>

          {/* MOBILE & SMALL SCREEN TOGGLE BUTTON */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden bg-[#700619] text-white p-2 rounded-full shadow-md hover:bg-[#570413] cursor-pointer"
              aria-label="Call for Free Consultation"
            >
              <Phone className="w-4 h-4 fill-white stroke-none text-white" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-slate-700 hover:text-[#700619] hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE RESPONSIVE DRAWER OVERLAY */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              if (item.name === 'Our Services') {
                return (
                  <div key={item.name} className="flex flex-col">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors cursor-pointer ${
                        activeTab === item.name 
                          ? 'bg-rose-50 text-[#700619]' 
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#700619]' : ''}`} />
                    </button>

                    {/* Mobile Services Sub-items */}
                    {mobileServicesOpen && (
                      <div className="pl-4 pr-2 py-1 space-y-1.5 bg-rose-50/40 rounded-lg my-1">
                        {item.items?.map((sub, idx) => (
                          <a
                            key={idx}
                            href={`#service-${idx}`}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveTab('Our Services');
                              setMobileMenuOpen(false);
                            }}
                            className="block py-1.5 px-2 text-xs font-medium text-slate-700 hover:text-[#700619] cursor-pointer"
                          >
                            • {sub.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors cursor-pointer ${
                    activeTab === item.name 
                      ? 'bg-rose-50 text-[#700619] border-l-4 border-[#700619]' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100">
            <button 
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#700619] hover:bg-[#570413] text-white py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4 fill-white stroke-none text-white" />
              <span>Free Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
