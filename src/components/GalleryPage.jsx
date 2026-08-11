import React, { useState } from 'react';
import bannerBgImg from '../assets/contactbg.png';
import aboutHandshakeImg from '../assets/about_handshake.png';
import officeReceptionImg from '../assets/office_reception.png';
import buildingHeroImg from '../assets/contact_hero_building.png';
import homeBgImg from '../assets/homebg.png';
import loanImg from '../assets/loan.png';
import insuranceImg from '../assets/insurance.png';
import propertiesImg from '../assets/properties.png';
import onlineServicesImg from '../assets/online services.png';

import { 
  Camera, 
  Image as ImageIcon, 
  X, 
  Sparkles, 
  Building2, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Phone
} from 'lucide-react';

export const GalleryPage = ({ onOpenConsultation = () => {} }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Main Headquarters & Legal Reception",
      category: "Office & Infrastructure",
      image: officeReceptionImg,
      desc: "Our modern welcoming reception area in Gorimedu, Puducherry."
    },
    {
      id: 2,
      title: "Client Partnership & Successful Agreement",
      category: "Client Success",
      image: aboutHandshakeImg,
      desc: "Empowering client growth with transparent loan advisory."
    },
    {
      id: 3,
      title: "Corporate Building & Advisory Center",
      category: "Office & Infrastructure",
      image: buildingHeroImg,
      desc: "Premier financial consulting offices serving Puducherry & Tamilnadu."
    },
    {
      id: 4,
      title: "Home & Mortgage Loan Processing",
      category: "Financial Services",
      image: loanImg,
      desc: "Customized loan solutions with 25+ associated banks."
    },
    {
      id: 5,
      title: "Comprehensive Insurance Advisory",
      category: "Financial Services",
      image: insuranceImg,
      desc: "Protecting lives, health, and commercial property assets."
    },
    {
      id: 6,
      title: "Property & Real Estate Legal Guidance",
      category: "Financial Services",
      image: propertiesImg,
      desc: "Flawless title search, encumbrance check, and land registration."
    },
    {
      id: 7,
      title: "Digital Consultation & Online Portal",
      category: "Financial Services",
      image: onlineServicesImg,
      desc: "Fast digital application and doorstep documentation."
    },
    {
      id: 8,
      title: "Executive Business Center & Advisory Lounge",
      category: "Office & Infrastructure",
      image: homeBgImg,
      desc: "Dedicated consultation rooms for personalized 1-on-1 financial planning."
    }
  ];

  const categories = ["All", "Office & Infrastructure", "Financial Services", "Client Success"];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-[#FAF7F4] min-h-screen text-slate-800 font-sans pb-12 select-none overflow-x-hidden">
      
      {/* 1. HERO BANNER MATCHING EXACT REFERENCE DESIGN */}
      <section className="w-full relative overflow-hidden bg-[#FAF7F2] min-h-[460px] lg:min-h-[500px] flex items-center">
        
        {/* RIGHT FULL-BLEED IMAGE CONTAINER (STRETCHES 100% TO RIGHT SCREEN EDGE) */}
        <div className="absolute top-0 bottom-0 right-0 w-full lg:w-[48%] xl:w-[50%] hidden lg:block overflow-hidden z-10 pointer-events-none">
          
          {/* Slanted Crimson Divider Bar */}
          <div 
            className="absolute inset-0 bg-[#5B0010] z-10"
            style={{ 
              clipPath: 'polygon(0 0, 16% 0, 4% 100%, 0 100%)'
            }}
          />

          {/* Slanted Image Container Stretching to Right Edge */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-2xl z-20"
            style={{ 
              backgroundImage: `url(${officeReceptionImg})`,
              clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

        </div>

        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 py-10 lg:py-14 relative z-20">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="max-w-xl lg:max-w-2xl text-left space-y-5 relative">
            
            {/* Background Accent 1: Golden Concentric Circles */}
            <svg className="absolute top-0 left-0 w-36 h-36 opacity-30 pointer-events-none -translate-x-6 -translate-y-6" viewBox="0 0 100 100" fill="none">
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
                RAJALAKSHMY ASSOCIATES GALLERY
              </span>
              <span className="w-8 sm:w-12 h-[1.5px] bg-[#EBB638] rounded-full inline-block" />
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-serif-brand font-bold text-slate-900 leading-[1.18] relative z-10">
              Moments of Trust, Excellence <br />
              & <span className="text-[#700619]">Financial Growth</span>
            </h1>

            {/* Separator Accent Line */}
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-12 h-[2.5px] bg-[#EBB638] rounded-full" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#EBB638]" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-xl relative z-10">
              <p>
                Explore snapshots of our modern infrastructure, client consultations, financial advisory sessions, and legal property documentation processes.
              </p>
              <p>
                Showcasing our journey of building enduring relationships with families and business owners across Puducherry & Tamilnadu.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 relative z-10">
              <button 
                onClick={onOpenConsultation}
                className="bg-[#700619] hover:bg-[#520412] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
          {categories.map((cat, idx) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'bg-[#700619] text-white shadow-md shadow-[#700619]/25 scale-105' 
                    : 'bg-white text-slate-700 hover:bg-rose-50 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. GALLERY PHOTO GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-bold text-amber-200 flex items-center gap-1.5">
                    <Camera className="w-4 h-4" /> View Image
                  </span>
                </div>
                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-[#700619] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-2">
                <h3 className="font-serif-brand font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#700619] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[65vh] overflow-hidden bg-slate-900">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-full object-contain max-h-[65vh] mx-auto"
              />
            </div>

            <div className="p-6 text-left space-y-2 bg-white">
              <span className="text-xs font-bold text-[#700619] uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-brand font-bold text-slate-900">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 5. CALL TO ACTION */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-gradient-to-r from-[#5B0010] via-[#700619] to-[#4A000D] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left z-10">
            <h3 className="text-2xl sm:text-3xl font-serif-brand font-bold text-white">
              Looking for Trusted Financial & Legal Advisory?
            </h3>
            <p className="text-xs sm:text-sm text-rose-100/90 max-w-xl">
              Visit our offices in Puducherry or request a free doorstep consultation with our experts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full sm:w-auto">
            <button 
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-[#EBB638] hover:bg-[#d49f28] text-slate-950 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer uppercase tracking-wider text-center"
            >
              Book Free Consultation
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default GalleryPage;
