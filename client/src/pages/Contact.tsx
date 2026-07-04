import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'Career Counselling',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      // Assuming server is on port 5000 and proxy or full URL is used
      const res = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Consultation requested successfully! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', enquiryType: 'Career Counselling' });
      } else {
        setStatus('Failed to request consultation.');
      }
    } catch (error) {
      setStatus('Failed to connect to the server.');
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Take the First Step Toward Your Future</h1>
          <p className="text-gray-400 text-lg mb-8">
            Book a free consultation with our expert career counsellors to discuss your goals, clear your doubts, and build a tailored career roadmap.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">📞</div>
              <div>
                <h4 className="text-white font-medium">Call Us</h4>
                <p className="text-gray-400">+1 (800) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400">✉️</div>
              <div>
                <h4 className="text-white font-medium">Email Us</h4>
                <p className="text-gray-400">hello@eduforge.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1E293B] p-8 rounded-2xl border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Book Free Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
              <input 
                type="text" name="name" required value={formData.name} onChange={handleChange}
                className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
              <input 
                type="email" name="email" required value={formData.email} onChange={handleChange}
                className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
              <input 
                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Enquiry Type</label>
              <select 
                name="enquiryType" value={formData.enquiryType} onChange={handleChange}
                className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
              >
                <option>Career Counselling</option>
                <option>Psychometric Assessment</option>
                <option>College Planning</option>
                <option>Other</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Request Consultation
            </button>
            {status && <p className="text-center text-sm mt-4 text-cyan-400">{status}</p>}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
