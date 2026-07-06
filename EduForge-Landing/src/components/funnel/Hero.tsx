import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Lock, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">

      {/* Logo */}
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        src={logo}
        alt="EduForge"
        className="h-32 md:h-48 mb-8 object-contain w-auto"
      />

      {/* Limited Time Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ delay: 0.1 }}
        className="border border-[#ff6b00] rounded-full px-6 py-1.5 mb-10 inline-block bg-white shadow-sm hover:shadow-md hover:bg-orange-50 cursor-pointer transition-colors duration-300"
      >
        <span className="text-[#ff6b00] text-xs font-bold tracking-widest uppercase">
          LIMITED TIME WORKSHOP
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#0f2e5a] leading-[1.1] tracking-tight mb-8"
      >
        Unlock Your True Potential.<br />
        Build Your <span className="text-[#ff6b00] italic">Ultimate Career Roadmap.</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[#334155] text-lg md:text-xl max-w-3xl mb-12 font-medium leading-relaxed"
      >
        Join the <strong className="text-[#0f2e5a]">Career Clarity Workshop</strong> that has helped <strong className="text-[#0f2e5a]">10,000+</strong> students across India transform their confusion into a concrete roadmap, even if you're completely lost right now.
      </motion.p>

      {/* Event Details Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white border border-[#e2e8f0] rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 shadow-sm mb-12"
      >
        <div className="flex items-center gap-2 text-[#0f2e5a] font-bold">
          <Calendar className="text-[#ff6b00]" size={20} />
          <span>Saturday, 11 July 2026</span>
        </div>
        <div className="hidden md:block w-1.5 h-1.5 bg-[#e2e8f0] rounded-full"></div>
        <div className="text-[#334155] font-semibold flex items-center gap-2">
          <span>11:00 AM - 1:00 PM IST</span>
        </div>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-3 divide-x divide-[#e2e8f0] border-y border-[#e2e8f0] py-6 mb-12 w-full max-w-2xl"
      >
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-[#0f2e5a]">80,000+</span>
          <span className="text-[10px] text-[#475569] font-bold tracking-widest uppercase mt-1">Students Guided</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-[#0f2e5a]">485+</span>
          <span className="text-[10px] text-[#475569] font-bold tracking-widest uppercase mt-1">Colleges Placed</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-[#0f2e5a]">4.5/5</span>
          <span className="text-[10px] text-[#475569] font-bold tracking-widest uppercase mt-1">Average Rating</span>
        </div>
      </motion.div>

      {/* Main CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-xl"
      >
        <Link to="/checkout" className="w-full bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] hover:from-[#ffa333] hover:to-[#ff8533] text-[#1A1816] rounded-2xl py-5 px-6 shadow-[0_10px_25px_-5px_rgba(241,196,15,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:brightness-110 duration-300 active:scale-95 flex flex-col items-center justify-center">
          <span className="font-extrabold text-lg sm:text-xl md:text-2xl tracking-tight mb-1">
            YES! I Want To Find My True Career Path
          </span>
          <span className="text-sm font-semibold opacity-80">
            Get Instant Access for just ₹149 <span className="line-through ml-1 opacity-60">₹4,000</span>
          </span>
        </Link>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs font-bold text-[#475569] uppercase tracking-wider"
      >
        <div className="flex items-center gap-1.5"><Lock size={14} className="text-[#ff6b00]" /> Secure Payment</div>
        <div className="flex items-center gap-1.5"><Zap size={14} className="text-[#ff6b00]" /> Instant Access</div>
        <div className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#ff6b00]" /> Money-Back Guarantee</div>
      </motion.div>

    </section>
  );
};

export default Hero;
