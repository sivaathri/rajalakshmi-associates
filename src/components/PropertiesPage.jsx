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
      
      {/* 1. HERO BANNER */}
      <section 
        className="w-full bg-[#350008] text-white relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[400px] lg:min-h-[460px] flex items-center"
        style={{ backgroundImage: `url(${bannerBgImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A000E] via-[#4A000E]/90 to-[#2A0007]/80 z-10" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-8 space-y-4 text-left animate-float-up">
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-extrabold text-[#EBB638] uppercase tracking-[0.2em]">
                  REAL ESTATE & PROPERTY LEGAL SERVICES
                </span>
                <span className="w-12 h-[2px] bg-[#EBB638] rounded-full inline-block" />
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-serif-brand font-bold text-white leading-[1.12]">
                Buy, Sell & Rent Properties <br />
                <span className="text-[#EBB638]">With Complete Legal Assurance.</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-rose-100/90 max-w-2xl font-normal leading-relaxed pt-1">
                Your trusted real estate partner in Puducherry & Tamilnadu. Certified title verification, DTCP/RERA plot sales, rental agreements, and registration assistance.
              </p>

              {/* Stats badges */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-amber-200 text-xs font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#EBB638]" /> 100% Verified Legal Title
                </span>
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-amber-200 text-xs font-semibold flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-[#EBB638]" /> EC & Patta Search
                </span>
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-amber-200 text-xs font-semibold flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#EBB638]" /> Buy, Sell & Rent Assistance
                </span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-4 hidden lg:flex justify-center">
              <div className="bg-white/10 p-5 rounded-3xl border border-white/20 backdrop-blur-md max-w-xs text-center space-y-3 shadow-2xl">
                <img src={propertiesHeroImg} alt="Property Legal Services" className="w-28 h-28 object-contain mx-auto" />
                <h3 className="text-lg font-bold text-white font-serif-brand">Need Property Assistance?</h3>
                <p className="text-xs text-rose-100/80">Get expert legal title opinion & property guidance from our advisors.</p>
                <button 
                  onClick={onOpenConsultation}
                  className="w-full bg-[#EBB638] hover:bg-[#d49f28] text-slate-950 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
                >
                  Consult Property Expert
                </button>
              </div>
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
