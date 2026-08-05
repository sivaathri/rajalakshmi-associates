import React from 'react';
import { 
  Building2, 
  Scale, 
  FileCheck, 
  Briefcase, 
  FileSpreadsheet, 
  ShieldAlert, 
  ArrowRight 
} from 'lucide-react';

export const ServicesSection = ({ onOpenConsultation }) => {
  const services = [
    {
      icon: Building2,
      title: 'Property Registration & Title Legal Opinion',
      desc: 'Thorough scrutiny of parent documents, Patta, Chitta, Adangal, EC, and Drafting Sale Deeds, Lease Deeds, Settlement & Gift Deeds.',
      badge: 'Popular'
    },
    {
      icon: Scale,
      title: 'Civil & Partition Suits Litigation',
      desc: 'Representation in District Courts, Sub-Courts, Munisif Courts, and Madras High Court for land disputes and family partitions.',
      badge: 'High Court Practice'
    },
    {
      icon: Briefcase,
      title: 'Corporate & GST Compliance',
      desc: 'Company incorporation, partnership deeds, contract drafting, trademark filing, and ongoing statutory legal compliance.',
      badge: 'Business'
    },
    {
      icon: FileCheck,
      title: 'Wills, Trust & Probate Matters',
      desc: 'Drafting registered Wills, Codicils, Private Family Trusts, Estate Management, and Probate proceedings.',
      badge: 'Personal Legal'
    },
    {
      icon: FileSpreadsheet,
      title: 'Revenue & Revenue Record Correction',
      desc: 'Name transfer in Patta, joint Patta sub-division, Town Survey Land Records (TSLR) corrections across Puducherry & TN.',
      badge: 'Government Liaison'
    },
    {
      icon: ShieldAlert,
      title: 'Arbitration & Alternative Dispute Resolution',
      desc: 'Out-of-court settlement negotiations, arbitration agreements, and commercial dispute mediation for swift resolution.',
      badge: 'Fast Track'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/80 text-[#700619] text-xs font-bold uppercase tracking-wider">
            Practice Areas
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-brand font-bold text-slate-900">
            Comprehensive Legal Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Specialized legal solutions for individuals, landowners, businesses, and NRI clients across Puducherry and Tamil Nadu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div 
                key={idx}
                className="bg-gray-50/70 hover:bg-white rounded-2xl p-7 border border-gray-200/80 hover:border-rose-300 hover:shadow-xl transition-all duration-300 group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-rose-100 text-[#700619] group-hover:bg-[#700619] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-gray-200 text-slate-700 shadow-2xs">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif-brand text-slate-900 group-hover:text-[#700619] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center justify-between">
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-bold text-[#700619] group-hover:text-[#520311] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Legal Advice</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
