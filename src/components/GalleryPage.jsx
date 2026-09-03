import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import bannerBgImg from '../assets/contactbg.png';
import aboutHandshakeImg from '../assets/about_handshake.png';
import officeReceptionImg from '../assets/office_reception.png';
import buildingHeroImg from '../assets/contact_hero_building.png';
import homeBgImg from '../assets/homebg.png';
import loanImg from '../assets/loan.png';
import insuranceImg from '../assets/insurance.png';
import propertiesImg from '../assets/properties.png';
import onlineServicesImg from '../assets/online services.png';

// Dynamically load ALL images from Office & Infrastructure folder (includes all 18 photos and any new ones added)
const officeImagesModules = import.meta.glob(
  '../assets/Office & Infrastructure/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
  { eager: true, import: 'default' }
);

// Sort so that the executive cabin (ChatGPT Image) appears first
const officeImageEntries = Object.entries(officeImagesModules).sort(([pathA], [pathB]) => {
  if (pathA.includes('ChatGPT')) return -1;
  if (pathB.includes('ChatGPT')) return 1;
  return pathA.localeCompare(pathB);
});

// Featured Hero Image
const executiveCabinImg = officeImageEntries.find(([path]) => path.includes('ChatGPT'))?.[1] || officeImageEntries[0]?.[1];

// Generate clean photo gallery items for all Office & Infrastructure images (No title, no category badge, no desc)
const officeGalleryItems = officeImageEntries.map(([path, imgUrl], idx) => ({
  id: `office-${idx + 1}`,
  category: "Office & Infrastructure",
  image: imgUrl
}));

// Dynamically load ALL images from Customer Interaction folder (25+ photos)
const customerImagesModules = import.meta.glob(
  [
    '../assets/Customer Intraction/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
    '../assets/Customer Interaction/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}'
  ],
  { eager: true, import: 'default' }
);

const customerImageEntries = Object.entries(customerImagesModules).sort(([pathA], [pathB]) => 
  pathA.localeCompare(pathB)
);

// Generate clean photo gallery items for all Customer Interaction images
const customerGalleryItems = customerImageEntries.map(([path, imgUrl], idx) => ({
  id: `customer-${idx + 1}`,
  category: "Customer Interaction",
  image: imgUrl
}));

// Dynamically load Banker Interaction images if folder exists
const bankerImagesModules = import.meta.glob(
  [
    '../assets/Banker Interaction/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
    '../assets/Banker Intraction/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
    '../assets/Banker*/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}'
  ],
  { eager: true, import: 'default' }
);

const bankerImageEntries = Object.entries(bankerImagesModules).sort(([pathA], [pathB]) => 
  pathA.localeCompare(pathB)
);

const bankerGalleryItems = bankerImageEntries.map(([path, imgUrl], idx) => ({
  id: `banker-${idx + 1}`,
  category: "Banker Interaction",
  image: imgUrl
}));

import { 
  Camera, 
  Image as ImageIcon, 
  X, 
  Sparkles, 
  Building2, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone
} from 'lucide-react';

export const GalleryPage = ({ onOpenConsultation = () => {} }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    ...officeGalleryItems,
    ...customerGalleryItems,
    ...bankerGalleryItems
  ];

  const categories = ["All", "Office & Infrastructure", "Customer Interaction", "Banker Interaction"];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Lightbox navigation helpers
  const currentIndex = selectedImage 
    ? filteredItems.findIndex(item => item.id === selectedImage.id) 
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && filteredItems.length > 0) {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedImage(filteredItems[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (currentIndex >= 0 && filteredItems.length > 0) {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedImage(filteredItems[prevIndex]);
    }
  };

  // Keyboard navigation and body scroll locking
  useEffect(() => {
    if (selectedImage) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setSelectedImage(null);
        } else if (e.key === 'ArrowRight') {
          handleNext();
        } else if (e.key === 'ArrowLeft') {
          handlePrev();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedImage, currentIndex, filteredItems]);

  return (
    <div className="bg-[#FAF7F4] min-h-screen text-slate-800 font-sans pb-12 select-none overflow-x-hidden">
      
      {/* 1. HERO BANNER MATCHING EXACT REFERENCE DESIGN */}
      <section className="w-full relative overflow-hidden bg-[#FAF7F2] pt-2 pb-6 sm:pt-3 sm:pb-8 lg:pt-4 lg:pb-10 flex items-start">
        
        {/* RIGHT FULL-BLEED IMAGE CONTAINER (STRETCHES 100% TO RIGHT SCREEN EDGE) */}
        <div className="absolute top-0 bottom-0 right-0 w-full lg:w-[48%] xl:w-[50%] hidden lg:block overflow-hidden z-10 pointer-events-none">
          
          {/* Slanted Image Container Stretching to Right Edge */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-2xl z-20"
            style={{ 
              backgroundImage: `url("${executiveCabinImg}")`,
                 clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

        </div>

        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 pt-1 pb-6 sm:pt-2 sm:pb-8 lg:pt-2 lg:pb-8 relative z-20">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="max-w-xl lg:max-w-2xl text-left space-y-4 sm:space-y-5 relative">
            
            {/* Background Accent 1: Golden Concentric Circles */}
            <svg className="absolute top-0 left-0 w-28 h-28 sm:w-32 sm:h-32 opacity-30 pointer-events-none -translate-x-5 -translate-y-5" viewBox="0 0 100 100" fill="none">
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
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200 p-8 col-span-full">
              <div className="w-14 h-14 bg-rose-50 text-[#700619] rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-serif-brand font-bold text-lg text-slate-800">
                {activeFilter} Photos Coming Soon
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Photos under {activeFilter} will be updated here shortly.
              </p>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isPurePhoto = !item.title && !item.desc;

              // Clean pure photo card for Office & Infrastructure & Customer Interaction (No title, no category, no desc)
              if (isPurePhoto) {
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedImage(item)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer bg-slate-100 border border-slate-200/80"
                  >
                    <img 
                      src={item.image} 
                      alt={item.category || "Rajalakshmy Associates Photo"} 
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-xs font-bold text-amber-200 flex items-center gap-1.5">
                        <Camera className="w-4 h-4" /> View Photo
                      </span>
                    </div>
                  </div>
                );
              }

              // Standard card with info for other categories
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col transform hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title || "Gallery"} 
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-xs font-bold text-amber-200 flex items-center gap-1.5">
                        <Camera className="w-4 h-4" /> View Image
                      </span>
                    </div>
                    {/* Category Badge */}
                    {item.category && (
                      <span className="absolute top-3 left-3 bg-[#700619] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        {item.category}
                      </span>
                    )}
                  </div>

                  {/* Text Info */}
                  {(item.title || item.desc) && (
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-2">
                      {item.title && (
                        <h3 className="font-serif-brand font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#700619] transition-colors leading-snug">
                          {item.title}
                        </h3>
                      )}
                      {item.desc && (
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL (RENDERED VIA PORTAL DIRECTLY INTO BODY FOR PERFECT VIEWPORT CENTERING) */}
      {selectedImage && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Previous Button */}
          {filteredItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous Image"
              className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-[#700619] text-white border border-white/20 flex items-center justify-center transition-all shadow-xl hover:scale-110 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {filteredItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next Image"
              className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-[#700619] text-white border border-white/20 flex items-center justify-center transition-all shadow-xl hover:scale-110 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Modal Container */}
          <div 
            className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative border border-white/15 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Count and Close Button */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/80 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2.5">
                {selectedImage.category && selectedImage.category !== 'Office & Infrastructure' && (
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#EBB638] bg-[#EBB638]/10 px-2.5 py-1 rounded-md border border-[#EBB638]/20">
                    {selectedImage.category}
                  </span>
                )}
                {filteredItems.length > 1 && (
                  <span className="text-xs text-slate-400 font-medium">
                    {currentIndex + 1} / {filteredItems.length}
                  </span>
                )}
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="flex-1 min-h-0 bg-black/90 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title || "Office & Infrastructure"} 
                className="w-auto h-auto max-h-[64vh] sm:max-h-[70vh] max-w-full object-contain rounded-lg mx-auto shadow-lg"
              />
            </div>

            {/* Footer / Description */}
            {(selectedImage.title || selectedImage.desc) ? (
              <div className="p-4 sm:p-5 text-left bg-slate-900 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                <div className="space-y-1">
                  {selectedImage.title && (
                    <h3 className="text-base sm:text-lg font-serif-brand font-bold text-white leading-snug">
                      {selectedImage.title}
                    </h3>
                  )}
                  {selectedImage.desc && (
                    <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                      {selectedImage.desc}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    onOpenConsultation();
                  }}
                  className="shrink-0 bg-[#700619] hover:bg-[#8e0921] text-white px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 justify-center cursor-pointer shadow-md"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="px-5 py-3 bg-slate-950/80 border-t border-white/10 flex items-center justify-end">
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    onOpenConsultation();
                  }}
                  className="bg-[#700619] hover:bg-[#8e0921] text-white px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 justify-center cursor-pointer shadow-md"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>,
        document.body
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
