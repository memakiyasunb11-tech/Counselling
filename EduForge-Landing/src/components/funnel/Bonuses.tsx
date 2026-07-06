import React from 'react';
import { motion } from 'framer-motion';

const Bonuses: React.FC = () => {
  const bonuses = [
    {
      title: "4 Ways to Map Your Career.",
      subtitle: "The 4 Pillars of Career Mapping",
      tag: "Roadmap",
      value: "₹999",
    },
    {
      title: "How to Choose Your College the Right Way.",
      subtitle: "College Admission Checklist",
      tag: "Admissions",
      value: "₹999",
    },
    {
      title: "7 Wrong Mindsets That Keep Students Confused.",
      subtitle: "7 Wrong Mindsets to Avoid",
      tag: "Mindset",
      value: "₹799",
    },
    {
      title: "The 4 Ts of Building a Standout Resume.",
      subtitle: "The 4 Ts of Resume Building",
      tag: "Skills",
      value: "₹699",
    },
    {
      title: "The 5 Cs for Consistent Academic Growth.",
      subtitle: "The 5 Cs of Academic Growth",
      tag: "Growth",
      value: "₹499",
    },
    {
      title: "5 Strategies to Crack Top Universities.",
      subtitle: "5 Strategies to Crack Admissions",
      tag: "Strategy",
      value: "₹899",
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#F0EBE1] text-[#D9A05B] text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-sm mb-6 border border-[#E5DCCB]"
        >
          🎁 WORKSHOP BONUSES
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-[#2C2825] mb-4 text-center"
        >
          Plus 6 EduForge Playbooks, Yours FREE
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#6C635B] font-medium text-center max-w-2xl mb-16"
        >
          6 deep-dive PDF playbooks covering roadmaps, college admissions, mindset, and more. Total value <strong className="text-[#2C2825]">₹4,894</strong>, included free when you register before the timer ends.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-20">
          {bonuses.map((bonus, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-white rounded-2xl p-4 border border-[#E5DCCB] shadow-sm flex flex-col"
            >
              {/* Cover Art */}
              <div className="bg-[#1A1816] rounded-xl p-6 aspect-[4/3] flex flex-col justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2a2723] to-[#12110f] pointer-events-none"></div>
                <h3 className="relative z-10 text-[#EFE8DD] font-bold text-xl leading-snug font-serif">
                  {bonus.title}
                </h3>
              </div>

              {/* Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#D9A05B] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">FREE</span>
                <span className="text-[#D9A05B] border border-[#D9A05B]/30 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">{bonus.tag}</span>
              </div>

              {/* Title & Value */}
              <h4 className="font-bold text-[#2C2825] text-sm mb-4">{bonus.subtitle}</h4>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#F0EBE1] text-xs font-bold text-[#8c7a6b]">
                <span className="line-through">{bonus.value}</span>
                <span className="text-[#2C2825]">INCLUDED</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Bonuses;
