import React from 'react';
import { Shield, Scale, Award, ArrowRight, PhoneCall, CheckCircle } from 'lucide-react';

export const HeroSection = ({ onOpenConsultation }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/50 via-white to-gray-50 py-16 lg:py-24">
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#700619_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Regional Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/70 border border-rose-200/60 text-[#700619] text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#700619] animate-pulse"></span>
              <span>Trusted Legal Practice in Puducherry &amp; Tamil Nadu</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-brand font-bold text-slate-900 leading-[1.15]">
              Premier Legal Advocates &amp; Corporate Consultants
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              At <strong className="text-[#700619] font-semibold">Rajalakshmi Associates</strong>, we deliver uncompromised legal expertise in property registration, civil litigation, title deeds, and corporate compliance across Puducherry and Tamil Nadu.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'High Court & District Court Practice',
                'Fast-Track Title Verification & Deed Registration',
                'Civil & Land Dispute Resolution',
                'Transparent & Confidential Legal Advisory'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle className="w-4 h-4 text-[#700619] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="bg-[#700619] hover:bg-[#540312] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-[#700619]/25 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-5 h-5 text-amber-300" />
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-white/80" />
              </button>

              <a
                href="#services"
                className="bg-white hover:bg-rose-50/50 text-slate-800 border border-gray-200 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
              >
                <span>Explore Practice Areas</span>
              </a>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/80">
              <div>
                <div className="text-2xl sm:text-3xl font-serif-brand font-extrabold text-[#700619]">25+</div>
                <div className="text-xs text-slate-500 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif-brand font-extrabold text-[#700619]">5,000+</div>
                <div className="text-xs text-slate-500 font-medium">Cases Resolved</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif-brand font-extrabold text-[#700619]">100%</div>
                <div className="text-xs text-slate-500 font-medium">Client Privacy</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Card / Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#700619]/20 to-amber-500/20 rounded-3xl blur-xl opacity-70"></div>

              {/* Legal Card Box */}
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 space-y-6">
                
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#700619] rounded-lg flex items-center justify-center text-white font-serif-brand font-bold text-xl shadow-md">
                      R
                    </div>
                    <div>
                      <h4 className="font-serif-brand font-bold text-slate-900 text-base">Rajalakshmi Associates</h4>
                      <p className="text-xs text-[#700619] font-medium font-tamil">இராஜலட்சுமி இணை</p>
                    </div>
                  </div>
                  <Scale className="w-6 h-6 text-[#700619]/60" />
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100 flex items-start gap-3.5">
                    <Shield className="w-6 h-6 text-[#700619] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">Property &amp; Real Estate Title Verification</h5>
                      <p className="text-xs text-slate-600 mt-1">
                        Comprehensive 30-year mother deed verification, EC checks, and EC encumbrance search in Tamil Nadu &amp; Puducherry sub-registrar offices.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-100 flex items-start gap-3.5">
                    <Award className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">Civil &amp; High Court Advocates</h5>
                      <p className="text-xs text-slate-600 mt-1">
                        Seasoned trial lawyers and legal legal advisors for partition suits, injunctions, and commercial disputes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#700619] text-white p-4 rounded-xl flex items-center justify-between text-xs font-semibold">
                  <span>Direct Legal Helpline:</span>
                  <a href="tel:+919876543210" className="text-amber-200 underline font-mono text-sm">
                    +91 98423 00000
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
