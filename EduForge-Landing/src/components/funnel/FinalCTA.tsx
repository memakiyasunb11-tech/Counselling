import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-bold text-[#0f2e5a] mb-6 leading-tight"
        >
          Your Career Trajectory Won't Change Unless You Do.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#334155] text-lg mb-12 max-w-2xl leading-relaxed"
        >
          A year from now, you'll wish you had started today. This is your moment. For just ₹149, get the complete roadmap that has helped 10,000+ students secure their dream careers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-xl mb-6"
        >
          <Link to="/checkout" className="w-full bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] hover:from-[#ffa333] hover:to-[#ff8533] text-[#1A1816] rounded-2xl py-6 px-6 shadow-[0_10px_25px_-5px_rgba(241,196,15,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:brightness-110 duration-300 active:scale-95 flex flex-col items-center justify-center">
            <span className="font-extrabold text-lg sm:text-xl md:text-2xl tracking-tight mb-1">
              YES! I Want To Find My True Career Path
            </span>
            <span className="text-sm font-semibold opacity-80">
              Get Instant Access for just ₹149 <span className="line-through ml-1 opacity-60">₹4,000</span>
            </span>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-[#475569] uppercase tracking-wider mb-24"
        >
          <div className="flex items-center gap-1.5"><Lock size={14} className="text-[#ff6b00]" /> Secure payment</div>
          <span className="px-1 text-[#e2e8f0]">•</span>
          <div>Instant access</div>
          <span className="px-1 text-[#e2e8f0]">•</span>
          <div>100% money-back guarantee</div>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;
