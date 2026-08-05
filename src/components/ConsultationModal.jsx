import React, { useState } from 'react';
import { X, Phone, Send, CheckCircle2 } from 'lucide-react';

export const ConsultationModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Puducherry',
    service: 'Property Registration & Title Search',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 relative">
        
        {/* Header Bar */}
        <div className="bg-[#700619] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-rose-900/60 rounded-xl border border-rose-400/30">
              <Phone className="w-6 h-6 text-amber-200" />
            </div>
            <div>
              <h3 className="text-xl font-serif-brand font-bold text-white">Book Free Legal Consultation</h3>
              <p className="text-xs text-rose-100 mt-0.5">Speak with senior advocates in Puducherry &amp; Tamil Nadu</p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-800">Consultation Requested!</h4>
            <p className="text-sm text-slate-600 max-w-xs mx-auto">
              Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our legal experts will call you at <span className="font-semibold text-slate-900">{formData.phone}</span> shortly.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 bg-[#700619] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#570413]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Anand Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#700619] focus:border-transparent outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#700619] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Location *</label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#700619] focus:border-transparent outline-none bg-white"
                >
                  <option value="Puducherry">Puducherry</option>
                  <option value="Chennai">Chennai, Tamil Nadu</option>
                  <option value="Cuddalore">Cuddalore, Tamil Nadu</option>
                  <option value="Villupuram">Villupuram, Tamil Nadu</option>
                  <option value="Coimbatore">Coimbatore, Tamil Nadu</option>
                  <option value="Other">Other Region</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Service Required</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#700619] focus:border-transparent outline-none bg-white"
              >
                <option value="Property Registration & Title Search">Property Registration &amp; Title Search</option>
                <option value="Civil & Commercial Litigation">Civil &amp; Commercial Litigation</option>
                <option value="Corporate Law & GST Registration">Corporate Law &amp; GST Registration</option>
                <option value="Wills & Inheritence Documentation">Wills &amp; Inheritence Documentation</option>
                <option value="General Legal Advisory">General Legal Advisory</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Brief Description</label>
              <textarea
                rows={3}
                placeholder="Describe your legal requirement or property inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#700619] focus:border-transparent outline-none resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#700619] hover:bg-[#570413] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#700619]/25 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Consultation Request</span>
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-400">
              🔒 Your privacy is strictly protected. Confidential legal guidance guaranteed.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
