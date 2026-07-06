import React from 'react';
import { motion } from 'framer-motion';

const Mentor: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Mentor Image Card */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-sm"
        >
          <div className="bg-white rounded-[2rem] p-4 shadow-xl border border-[#e2e8f0] relative">
            <div className="rounded-3xl overflow-hidden bg-[#f1f5f9] aspect-[4/5] relative">
              {/* Replace with actual mentor image */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                alt="Dr. Anant Shah" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-6 mb-4">
              <h3 className="font-serif text-2xl font-bold text-[#0f2e5a]">Dr. Anant Shah</h3>
              <p className="text-[#ff6b00] text-xs font-bold tracking-widest uppercase mt-1">Founder & Lead Mentor</p>
            </div>
          </div>
        </motion.div>

        {/* Mentor Bio */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="text-[#475569] text-xs font-bold tracking-widest uppercase mb-4">Meet Your Mentor</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0f2e5a] leading-tight mb-8">
            He didn't just study careers. He built a system to <span className="text-[#ff6b00]">predict success</span> behind them.
          </h2>
          
          <div className="space-y-6 text-[#334155] font-medium leading-relaxed">
            <p>
              Dr. Anant Shah started his journey as an engineer, pivoting into education psychology after realizing that over 80% of students were choosing careers based on peer pressure rather than aptitude.
            </p>
            <p>
              Along the way, he researched and developed scientifically validated psychometric frameworks that have been adopted by top educational institutes across <strong>India, the UK, Germany, and the UAE</strong>.
            </p>
            <p>
              He then founded <strong>EduForge</strong> with a clear mission: to help Indian students navigate the overwhelming maze of career choices without the anxiety of the unknown. Through EduForge, he has worked with <strong>thousands of students</strong>, giving them the exact blueprints to secure admission to their dream universities and build thriving, fulfilling careers.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Mentor;
