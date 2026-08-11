import React, { useState } from 'react';
import bannerBgImg from '../assets/contactbg.png';
import propertiesHeroImg from '../assets/properties.png';
import buildingHeroImg from '../assets/contact_hero_building.png';
import officeReceptionImg from '../assets/office_reception.png';
import { 
  Home, 
  Building2, 
  Key, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  Search, 
  ChevronDown, 
  Award, 
  Tag, 
  Building, 
  Landmark, 
  Compass, 
  FileCheck2,
  Filter
} from 'lucide-react';

export const PropertiesPage = ({ onOpenConsultation = () => {} }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [propertyTypeFilter, setPropertyTypeFilter] = useState('All');

  const propertyServices = [
    {
      id: 'buy',
      title: 'Buy / Purchase Property',
      tagline: 'Verified Residential Plots, Houses & Commercial Spaces',
      icon: Home,
      badge: 'Legal Verified',
      overview: 'Find and purchase DTCP / RERA approved plots, independent villas, ready flats, and prime commercial real estate with 100% legal title verification and bank loan assistance.',
      features: [
        '30-Year Encumbrance Certificate (EC) & Mother document legal verification',
        'Direct tie-up with top banks for instant housing loan sanction',
        'Transparent property pricing with zero hidden commission markup',
        'Complete registration, stamp duty & Patta transfer support'
      ],
      categories: [
        'DTCP & RERA Approved Residential Plots',
        'Independent Houses & Luxury Villas',
        'Ready-to-Move 2 & 3 BHK Apartments',
        'Commercial Land, Shops & Office Buildings'
      ],
      documentsNeeded: [
        'Buyer Aadhaar Card & PAN Card',
        'Passport size photographs',
        'Bank income statement & loan approval letter',
        'Booking advance payment proof'
      ]
    },
    {
      id: 'sell',
      title: 'Sell Property',
      tagline: 'Fast Property Sale with Fair Market Valuation',
      icon: Tag,
      badge: 'Quick Buyer Match',
      overview: 'Sell your plot, house, apartment, or commercial building at optimum market rates with dedicated marketing, verified buyer matching, and legally secure sales agreements.',
      features: [
        'Free property market valuation & legal document check',
        'Verified buyer network across Puducherry & Tamilnadu',
        'Clear title opinion preparation by experienced legal counsel',
        'Hassle-free sales agreement drafting & registration assistance'
      ],
      categories: [
        'Plots & Vacant Land Sales',
        'Residential House & Villa Resale',
        'Commercial Building & Factory Premises',
        'Agricultural & Farm Land Sales'
      ],
      documentsNeeded: [
        'Original Title Deed & Parent Documents',
        'Patta, Chitta & Adangal Copy',
        'Encumbrance Certificate (EC) for 30 years',
        'Latest Property Tax & EB Bill receipts'
      ]
    },
    {
      id: 'rent',
      title: 'Rent / Lease Property',
      tagline: 'Residential Homes & Commercial Space Leasing',
      icon: Key,
      badge: 'Verified Tenants',
      overview: 'Rent or lease premium residential houses, apartments, retail shops, office spaces, and industrial godowns with legally enforceable lease agreements.',
      features: [
        'Tenant background verification & background screening',
        'Customized Rental / Lease agreement drafting & notary attestation',
        'Transparent security deposit & monthly rental terms',
        'Key handover and physical property inspection assistance'
      ],
      categories: [
        '1, 2 & 3 BHK Residential Flats for Rent',
        'Independent Houses & Portions for Families',
        'Prime Retail Shops & Commercial Showrooms',
        'Office Spaces, Warehouses & Industrial Godowns'
      ],
      documentsNeeded: [
        'Tenant Aadhaar Card & PAN Card',
        'Employment / Business Proof of tenant',
        'Passport size photographs of tenant',
        'Landlord property ownership proof'
      ]
    }
  ];

  const featuredListings = [
    {
      id: 1,
      title: "DTCP Approved Residential Plots",
      location: "Gorimedu / Villianur, Puducherry",
      category: "Buy",
      type: "Plots / Land",
      badge: "Popular",
      image: buildingHeroImg,
      desc: "Prime DTCP approved layout with clear mother document title, 30ft blacktop roads, groundwater, and clear EC."
    },
    {
      id: 2,
      title: "Commercial Office & Shop Building",
      location: "Lawspet / ECR, Puducherry",
      category: "Rent",
      type: "Commercial Space",
      badge: "Prime Location",
      image: officeReceptionImg,
      desc: "Spacious road-facing commercial space ideal for banks, IT offices, clinics, or retail showrooms with ample parking."
    },
    {
      id: 3,
      title: "3 BHK Independent Villa for Sale",
      location: "Muthialpet / Lawspet, Puducherry",
      category: "Buy",
      type: "House / Villa",
      badge: "Ready Move",
      image: propertiesHeroImg,
      desc: "Beautiful 3 BHK east-facing villa with car parking, modular kitchen, clear title deed, and approved building plan."
    }
  ];

  const faqs = [
    {
      q: "Why is legal title verification necessary before buying property?",
      a: "Legal title verification ensures the property has no existing legal disputes, pending bank mortgages, or title defects, guaranteeing 100% safe ownership for the buyer."
    },
    {
      q: "How does Rajalakshmy Associates assist in property selling?",
      a: "We assess your property's fair market value, verify your title documents, connect you with genuine buyers, and handle the entire legal sales agreement and registration process."
    },
    {
      q: "What is included in your Rental / Lease Agreement service?",
      a: "We draft legally compliant rental agreements incorporating clear clauses on monthly rent, advance deposit, maintenance, notice period, and arrange notary attestation."
    },
    {
      q: "Can I get a home loan or loan against property through your firm?",
      a: "Yes! We provide complete home loan and mortgage loan assistance through 25+ partner banks with doorstep document collection."
    }
  ];

  return (
    <div className="bg-[#FAF7F4] min-h-screen text-slate-800 font-sans pb-16 select-none overflow-x-hidden">
      
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
              backgroundImage: `url(${propertiesHeroImg})`,
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
                PROPERTY & LEGAL SOLUTIONS
              </span>
              <span className="w-8 sm:w-12 h-[1.5px] bg-[#EBB638] rounded-full inline-block" />
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-serif-brand font-bold text-slate-900 leading-[1.18] relative z-10">
              Buy, Sell & Rent Properties <br />
              with <span className="text-[#700619]">100% Legal Title Assurance</span>
            </h1>

            {/* Separator Accent Line */}
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-12 h-[2.5px] bg-[#EBB638] rounded-full" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#EBB638]" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-xl relative z-10">
              <p>
                Your trusted real estate partner in Puducherry & Tamilnadu. Transparent buying, selling, renting, title verification, Patta search, and registration support.
              </p>
              <p>
                Avoid land disputes and legal complications with certified legal opinions and legal documentation assistance.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 relative z-10">
              <button 
                onClick={onOpenConsultation}
                className="bg-[#700619] hover:bg-[#520412] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Consult Property Expert</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a 
                href="#property-listings"
                className="bg-transparent hover:bg-rose-50 text-[#700619] border-2 border-[#700619] px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Browse Listings</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 2. CATEGORY SELECTION TABS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200/80 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'all' 
                ? 'bg-[#700619] text-white shadow-md' 
                : 'text-slate-700 hover:bg-rose-50'
            }`}
          >
            All Property Services ({propertyServices.length})
          </button>

          {propertyServices.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === service.id 
                    ? 'bg-[#700619] text-white shadow-md' 
                    : 'text-slate-700 hover:bg-rose-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. PROPERTY SERVICES DETAILED CARDS (BUY | SELL | RENT) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        {propertyServices
          .filter(service => activeTab === 'all' || activeTab === service.id)
          .map((service) => {
            const ServiceIcon = service.icon;
            return (
              <div 
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Header Title Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-rose-100/70 text-[#700619] flex items-center justify-center shrink-0 shadow-xs">
                      <ServiceIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl sm:text-3xl font-serif-brand font-bold text-slate-900">
                          {service.title}
                        </h2>
                        <span className="bg-amber-100 text-[#966810] text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-amber-200">
                          {service.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#700619] font-semibold mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={onOpenConsultation}
                    className="bg-[#700619] hover:bg-[#520412] text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all shrink-0 cursor-pointer uppercase tracking-wider"
                  >
                    <span>Enquire for {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Overview Paragraph */}
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-8 bg-amber-50/40 p-4 rounded-2xl border border-amber-100/60">
                  {service.overview}
                </p>

                {/* 3 Columns: Key Features | Categories | Required Documents */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  
                  {/* Col 1: Key Service Features */}
                  <div className="bg-rose-50/40 p-5 rounded-2xl border border-rose-100/60 space-y-3">
                    <h3 className="text-sm font-bold text-[#700619] uppercase tracking-wider flex items-center gap-2 border-b border-rose-100 pb-2">
                      <Sparkles className="w-4 h-4 text-[#EBB638]" /> Key Benefits & Features
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#700619] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 2: Property Categories */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 space-y-3">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-2">
                      <Building className="w-4 h-4 text-[#700619]" /> Property Types Available
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                      {service.categories.map((cat, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#700619] shrink-0 mt-1.5" />
                          <span>{cat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 3: Required Documents */}
                  <div className="bg-amber-50/30 p-5 rounded-2xl border border-amber-100/60 space-y-3">
                    <h3 className="text-sm font-bold text-[#966810] uppercase tracking-wider flex items-center gap-2 border-b border-amber-100 pb-2">
                      <FileText className="w-4 h-4 text-[#966810]" /> Documents Needed
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                      {service.documentsNeeded.map((doc, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#966810] shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
      </section>

      {/* 4. FEATURED PROPERTY HIGHLIGHTS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em]">
            VERIFIED REAL ESTATE
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-brand font-bold text-slate-900">
            Featured Property Options
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Handpicked verified plots, houses, and commercial spaces with complete legal title check.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredListings.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-[#700619] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md">
                    {item.category}
                  </span>
                  <span className="absolute top-3 right-3 bg-amber-100 text-[#966810] border border-amber-300 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                </div>
                <div className="p-5 space-y-2 text-left">
                  <div className="flex items-center gap-1.5 text-xs text-[#700619] font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-serif-brand font-bold text-lg text-slate-900 group-hover:text-[#700619] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button 
                  onClick={onOpenConsultation}
                  className="w-full bg-rose-50 hover:bg-[#700619] text-[#700619] hover:text-white border border-rose-200 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Enquire Property</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs sm:text-sm font-extrabold text-[#700619] uppercase tracking-[0.18em]">
              FAQ & HELP
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-brand font-bold text-slate-900">
              Frequently Asked Questions About Properties
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-bold text-sm sm:text-base text-slate-900 hover:text-[#700619] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-[#700619]' : 'text-slate-400'}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 text-center">
        <p className="text-[11px] sm:text-xs text-slate-500 max-w-3xl mx-auto leading-relaxed italic border-t border-slate-200/60 pt-4">
          * Property registrations, legal title opinions, EC verifications, and rental agreements are subject to statutory land regulations, stamp duty norms, and local registration policies.
        </p>
      </div>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-10">
        <div className="bg-gradient-to-r from-[#5B0010] via-[#700619] to-[#4A000D] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left z-10">
            <h3 className="text-2xl sm:text-3xl font-serif-brand font-bold text-white">
              Looking to Buy, Sell, or Rent Property?
            </h3>
            <p className="text-xs sm:text-sm text-rose-100/90 max-w-xl">
              Talk to our real estate & legal title advisors for 100% verified property assistance in Puducherry & Tamilnadu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full sm:w-auto">
            <button 
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-[#EBB638] hover:bg-[#d49f28] text-slate-950 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer uppercase tracking-wider text-center"
            >
              Get Free Property Advice
            </button>
            <a 
              href="tel:+917904634737"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>+91 79046 34737</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default PropertiesPage;
