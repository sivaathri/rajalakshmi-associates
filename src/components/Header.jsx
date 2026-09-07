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
        { title: 'Loans', desc: 'Personal, Business, Housing, Mortgage & Vehicle Refinance', icon: Landmark, targetTab: 'Loans' },
        { title: 'Insurance', desc: 'Life, Health, General & Business Insurance Solutions', icon: ShieldCheck, targetTab: 'Insurance' },
        { title: 'Properties', desc: 'Buying, Selling, Rental & Property Legal Documentation', icon: Home, targetTab: 'Properties' },
      ]
    },
    { name: 'Why Choose Us', hasDropdown: false },
    { name: 'Gallery', hasDropdown: false },
    { name: 'Contact Us', hasDropdown: false },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      {/* 1. TOP ANNOUNCEMENT / INFO BAR - RESPONSIVE ALL SCREENS */}
      <div className="bg-[#700619] text-white py-1.5 sm:py-2 px-2.5 sm:px-4 lg:px-8 border-b border-[#880820]">
        <div className="max-w-7xl mx-auto relative flex items-center justify-between gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm min-h-[24px]">
          
          {/* Left: Location & Phone Numbers */}
          <div className="flex items-center gap-2 sm:gap-4 font-medium tracking-wide shrink-0 z-10">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-200 shrink-0" />
              <span>Puducherry<span className="hidden sm:inline"> & Tamilnadu</span></span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-amber-100/90 text-[11px] sm:text-xs">
              <Phone className="w-3 h-3 text-rose-200 shrink-0" />
              <a href="tel:+917904634737" className="hover:text-amber-200 transition-colors">+91 79046 34737</a>
            </div>
          </div>

          {/* Center: Tamil Regional Tagline */}
          <div className="absolute left-1/2 -translate-x-1/2 font-tamil font-semibold text-[11px] sm:text-xs md:text-sm lg:text-base tracking-wider text-amber-100 flex items-center justify-center text-center pointer-events-none whitespace-nowrap">
            <span>இராஜலட்சுமி இணை</span>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER - RESPONSIVE LAYOUT */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2">
        <div className="flex items-center justify-between gap-2">

          {/* BRAND LOGO - AUTO SCALES PER SCREEN SIZE */}
          <a 
            href="#home" 
            onClick={(e) => { 
              e.preventDefault(); 
              setActiveTab('Home'); 
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group cursor-pointer shrink-0"
          >
            <Logo className="h-9 xs:h-11 sm:h-13 md:h-14 lg:h-16" />
          </a>

          {/* DESKTOP & TABLET NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-7 text-xs xl:text-sm font-semibold text-slate-800">
            {navItems.map((item) => {
              const isServiceTab = ['Loans', 'Insurance', 'Properties', 'Our Services'].includes(activeTab);
              const isActive = activeTab === item.name || (item.name === 'Our Services' && isServiceTab);
              
              if (item.name === 'Our Services') {
                return (
                  <div 
                    key={item.name} 
                    className="relative group py-2"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button 
                      onClick={() => {
                        setActiveTab(item.name);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`relative py-1.5 flex items-center gap-1 transition-colors hover:text-[#700619] cursor-pointer focus:outline-none focus-visible:outline-none ${
                        isActive ? 'text-[#700619] font-bold' : 'text-slate-700'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#700619]' : 'text-slate-400'}`} />
                      {isActive && (
                        <span className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-[#700619] rounded-full transition-all duration-300" />
                      )}
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
                                href={`#${sub.targetTab || 'services'}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveTab(sub.targetTab || 'Our Services');
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                  setServicesDropdownOpen(false);
                                }}
                                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-rose-50/70 transition-colors group/sub cursor-pointer focus:outline-none focus-visible:outline-none"
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
                  onClick={() => {
                    setActiveTab(item.name);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative py-1.5 transition-colors hover:text-[#700619] whitespace-nowrap cursor-pointer focus:outline-none focus-visible:outline-none ${
                    isActive ? 'text-[#700619] font-bold' : 'text-slate-700'
                  }`}
                >
                  {item.name}
                  {/* Underline indicator for active state */}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-[#700619] rounded-full transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* RIGHT ACTION BUTTON: FREE CONSULTATION */}
          <div className="hidden sm:flex items-center shrink-0">
            <button 
              onClick={onOpenConsultation}
              className="bg-[#700619] hover:bg-[#570413] text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs lg:text-sm flex items-center gap-2 shadow-md shadow-[#700619]/25 hover:shadow-lg hover:shadow-[#700619]/35 transition-all duration-200 active:scale-95 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:outline-none"
            >
              <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-white stroke-none text-white -rotate-12" />
              <span>Free Consultation</span>
            </button>
          </div>

          {/* MOBILE & SMALL SCREEN TOGGLE BUTTON */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden bg-[#700619] text-white p-2 rounded-full shadow-md hover:bg-[#570413] cursor-pointer focus:outline-none focus-visible:outline-none"
              aria-label="Call for Free Consultation"
            >
              <Phone className="w-4 h-4 fill-white stroke-none text-white" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-slate-700 hover:text-[#700619] hover:bg-rose-50 rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:outline-none"
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
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors cursor-pointer focus:outline-none focus-visible:outline-none ${
                        ['Loans', 'Insurance', 'Properties', 'Our Services'].includes(activeTab)
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
                            href={`#${sub.targetTab || 'services'}`}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveTab(sub.targetTab || 'Our Services');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              setMobileMenuOpen(false);
                            }}
                            className="block py-1.5 px-2 text-xs font-medium text-slate-700 hover:text-[#700619] cursor-pointer focus:outline-none focus-visible:outline-none"
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
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors cursor-pointer focus:outline-none focus-visible:outline-none ${
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
              className="w-full bg-[#700619] hover:bg-[#570413] text-white py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-md focus:outline-none focus-visible:outline-none"
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
