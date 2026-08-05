import React from 'react';
import { ShieldCheck, Clock, Users, MapPin } from 'lucide-react';

export const WhyChooseUsSection = () => {
  const points = [
    {
      icon: MapPin,
      title: 'Regional Expertise in Puducherry & TN',
      desc: 'Deep familiarity with French Puducherry legal codes, Tamil Nadu Panchayats Act, revenue laws, and local court procedures.'
    },
    {
      icon: ShieldCheck,
      title: 'Impeccable Title Deed Clearance',
      desc: 'Multi-tiered legal audit for real estate deals to prevent land scams, encumbrance risks, and boundary disputes.'
    },
    {
      icon: Clock,
      title: 'Time-Bound Legal Solutions',
      desc: 'Agile documentation and proactive court filings designed to minimize unnecessary legal delays for our clients.'
    },
    {
      icon: Users,
      title: 'Dedicated NRI & Outstation Desk',
      desc: 'Seamless legal assistance, power of attorney handling, and property management representation for non-resident Indians.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#700619] text-white relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-semibold tracking-wider">
              Why Rajalakshmi Associates
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-brand font-bold text-white leading-tight">
              Uncompromising Integrity &amp; Proven Courtroom Success
            </h2>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              We combine decade-long legal tradition with modern case analysis. Our team ensures that every legal document, title search, and court petition is executed with precision.
            </p>
            <div className="pt-2 flex items-center gap-6">
              <div className="border-l-2 border-amber-300 pl-4">
                <p className="font-serif-brand font-bold text-2xl text-amber-200">100%</p>
                <p className="text-xs text-rose-200">Confidentiality Guarantee</p>
              </div>
              <div className="border-l-2 border-amber-300 pl-4">
                <p className="font-serif-brand font-bold text-2xl text-amber-200">Bilingual</p>
                <p className="text-xs text-rose-200">Tamil &amp; English Legal Advisory</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-amber-300/40 transition-colors space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-200 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-serif-brand text-white">{pt.title}</h3>
                  <p className="text-xs text-rose-100/80 leading-relaxed">{pt.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
