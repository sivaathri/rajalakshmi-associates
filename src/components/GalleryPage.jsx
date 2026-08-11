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
      
      {/* 1. HERO BANNER */}
      <section 
        className="w-full bg-[#350008] text-white relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[340px] lg:min-h-[380px] flex items-center"
        style={{ backgroundImage: `url(${bannerBgImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A000E] via-[#4A000E]/90 to-[#2A0007]/80 z-10" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16 relative z-20 w-full">
          <div className="max-w-3xl text-left space-y-4 animate-float-up">
            
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-extrabold text-[#EBB638] uppercase tracking-[0.2em]">
                RAJALAKSHMY ASSOCIATES GALLERY
              </span>
              <span className="w-12 h-[2px] bg-[#EBB638] rounded-full inline-block" />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-serif-brand font-bold text-white leading-[1.12]">
              Moments of Trust, Excellence <br />
              <span className="text-[#EBB638]">& Financial Growth.</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-rose-100/90 max-w-xl font-normal leading-relaxed pt-1">
              Explore snapshots of our modern infrastructure, client consultations, financial advisory sessions, and legal property documentation processes.
            </p>

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
