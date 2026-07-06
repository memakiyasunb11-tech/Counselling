import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { DollarSign, ShieldCheck, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'leads'), {
        name: formData.name,
        contactInfo: {
          email: formData.email,
          phone: formData.phone
        },
        enquiryType: 'Workshop Registration',
        stage: 'New',
        createdAt: new Date().toISOString()
      });
      setIsSuccess(true);
    } catch (error) {
      console.error("Error saving registration:", error);
      alert("Failed to process registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Registration Successful!</h2>
          <p className="text-slate-500 mb-6">
            Your seat for the Career Clarity Workshop is confirmed. We've sent the details to <strong>{formData.email}</strong>.
          </p>
          <Link to="/" className="block w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-xl transition-colors">
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-800 py-12 px-4 sm:px-6">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-2xl font-bold text-slate-800">Career Clarity Workshop</h1>
        <p className="text-slate-500 text-sm mt-1">Powered by EduForge</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column */}
        <div className="md:col-span-7 space-y-6">
          
          {/* Payment Details */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-lg flex items-center justify-center">
                <DollarSign size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm">Payment Details</p>
                <p className="text-slate-500 text-xs">Career Clarity Workshop</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-sm text-slate-500">Amount</p>
              <p className="font-extrabold text-lg">₹149.00</p>
            </div>
          </div>

          {/* Banner Card */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-sm relative">
            <div className="p-6 text-white relative z-10">
              <div className="bg-[#D9A05B] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm inline-block mb-3">
                LIVE WORKSHOP
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">Career Clarity Workshop</h3>
              <p className="text-slate-300 text-sm max-w-sm">
                Master your career roadmap. Build a profitable future you love.
              </p>
            </div>
            {/* Abstract background shapes */}
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -mr-10 -mb-10"></div>
            <div className="absolute right-20 top-0 w-32 h-32 bg-[#D9A05B]/20 rounded-full blur-xl -mt-10"></div>
          </div>

          {/* User Details Form */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="font-bold text-lg mb-1">Your details</h2>
            <p className="text-slate-500 text-sm mb-6">Required for each payment on this link.</p>
            
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone <span className="text-red-500">*</span></label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-slate-500 sm:text-sm">
                    IN +91
                  </span>
                  <input 
                    type="tel" 
                    required
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="flex-1 min-w-0 block w-full px-4 py-2.5 rounded-none rounded-r-lg border border-slate-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                  />
                </div>
              </div>
            </form>
          </div>

        </div>

        {/* Right Column (Summary) */}
        <div className="md:col-span-5">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-6">
            <h2 className="font-bold mb-6">Payment Summary</h2>
            
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-100">
              <span className="text-slate-600 font-medium">Amount</span>
              <span className="font-bold">₹149.00</span>
            </div>

            <button 
              type="submit"
              form="checkout-form"
              disabled={isSubmitting}
              className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mb-6"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <LockIcon /> Pay ₹149.00
                </>
              )}
            </button>

            {/* Test Mode Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-3 mb-6">
              <div className="text-amber-500 mt-0.5">⚠️</div>
              <p className="text-xs text-amber-700">
                <strong>Test Mode:</strong> This is a simulation. Submitting this form will instantly add you as a Lead on the Admin Dashboard.
              </p>
            </div>

            <div className="flex items-center gap-3 text-emerald-600 text-xs mb-8">
              <ShieldCheck size={16} />
              <span>Your payment is secured with 256-bit SSL encryption</span>
            </div>

            <div className="text-xs text-slate-500">
              <p className="font-bold mb-2">Questions?</p>
              <div className="flex items-center gap-2 mb-1">
                <Mail size={14} /> info@eduforge.in
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} /> +91 81800 04661
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Simple Lock Icon component
const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

export default Checkout;
