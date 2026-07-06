import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const defaultBonuses = [
    {
      title: "4 Ways to Map Your Career.",
      subtitle: "The 4 Pillars of Career Mapping",
      tag: "Roadmap",
      value: "₹999",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "How to Choose Your College the Right Way.",
      subtitle: "College Admission Checklist",
      tag: "Admissions",
      value: "₹999",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "7 Wrong Mindsets That Keep Students Confused.",
      subtitle: "7 Wrong Mindsets to Avoid",
      tag: "Mindset",
      value: "₹799",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "The 4 Ts of Building a Standout Resume.",
      subtitle: "The 4 Ts of Resume Building",
      tag: "Skills",
      value: "₹699",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "The 5 Cs for Consistent Academic Growth.",
      subtitle: "The 5 Cs of Academic Growth",
      tag: "Growth",
      value: "₹499",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "5 Strategies to Crack Top Universities.",
      subtitle: "5 Strategies to Crack Admissions",
      tag: "Strategy",
      value: "₹899",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Mastering the Scholarship Search.",
      subtitle: "Ultimate Scholarship Guide",
      tag: "Finance",
      value: "₹599",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Overcoming Exam Anxiety Effectively.",
      subtitle: "Stress Management Toolkit",
      tag: "Wellness",
      value: "₹699",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Building a Powerful Professional Network.",
      subtitle: "Networking for Students",
      tag: "Network",
      value: "₹899",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Acing the College Admission Interview.",
      subtitle: "Interview Mastery Manual",
      tag: "Interview",
      value: "₹999",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Extracurriculars That Actually Matter.",
      subtitle: "The Profile Building Blueprint",
      tag: "Profile",
      value: "₹899",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "How to Ask for Letters of Recommendation.",
      subtitle: "LOR Templates & Strategies",
      tag: "LOR",
      value: "₹499",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=600&auto=format&fit=crop"
    }
  ];

const Bonuses: React.FC = () => {
  const [bonuses, setBonuses] = useState(defaultBonuses);

  useEffect(() => {
    const fetchBonuses = async () => {
      try {
        const snap = await getDocs(collection(db, 'content_bonuses'));
        if (!snap.empty) {
          setBonuses(snap.docs.map(doc => doc.data() as any));
        }
      } catch (err) {
        console.error("Failed to load Bonuses", err);
      }
    };
    fetchBonuses();
  }, []);

  return (
    <section className="py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#f8fafc] text-[#ff6b00] text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-sm mb-6 border border-[#e2e8f0]"
        >
          🎁 WORKSHOP BONUSES
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-[#0f2e5a] mb-4 text-center"
        >
          Plus 12 EduForge Playbooks, Yours FREE
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#334155] font-medium text-center max-w-2xl mb-16"
        >
          12 deep-dive PDF playbooks covering roadmaps, college admissions, mindset, and more. Total value <strong className="text-[#0f2e5a]">₹9,388</strong>, included free when you register before the timer ends.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-20">
          {bonuses.map((bonus, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, translateY: -8 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.3 }}
              className="bg-white rounded-2xl p-4 border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-shadow flex flex-col cursor-pointer overflow-hidden group"
            >
              {/* Cover Art */}
              <div className="rounded-xl aspect-[4/3] flex flex-col justify-end p-4 mb-4 relative overflow-hidden">
                <img src={bonus.image} alt={bonus.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e5a]/90 via-[#0f2e5a]/40 to-transparent"></div>
                <h3 className="relative z-10 text-[#f1f5f9] font-bold text-lg leading-snug font-serif drop-shadow-md">
                  {bonus.title}
                </h3>
              </div>

              {/* Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#ff6b00] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">FREE</span>
                <span className="text-[#ff6b00] border border-[#ff6b00]/30 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">{bonus.tag}</span>
              </div>

              {/* Title & Value */}
              <h4 className="font-bold text-[#0f2e5a] text-sm mb-4">{bonus.subtitle}</h4>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#f8fafc] text-xs font-bold text-[#475569]">
                <span className="line-through">{bonus.value}</span>
                <span className="text-[#0f2e5a]">INCLUDED</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Bonuses;
