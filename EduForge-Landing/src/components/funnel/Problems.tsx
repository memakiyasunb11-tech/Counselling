import React from 'react';
import { motion } from 'framer-motion';

const Problems: React.FC = () => {
  const problems = [
    { emoji: "😕", text: "Confused about which stream to choose after 10th?" },
    { emoji: "😟", text: "Pressured by peers or parents to choose Engineering or Medical?" },
    { emoji: "🤯", text: "Overwhelmed by too many career options and no clear roadmap?" },
    { emoji: "🤔", text: "No idea how to identify your true strengths and aptitudes?" },
    { emoji: "📉", text: "Scared of choosing the wrong degree and wasting 4 years?" },
    { emoji: "💸", text: "Worried about the high cost of college without knowing the ROI?" },
  ];

  return (
    <section className="py-20 px-6 bg-transparent relative z-10">
      <div className="max-w-3xl mx-auto flex flex-col items-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-[#0f2e5a] mb-4 text-center"
        >
          Does This Sound Like You?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#475569] font-medium mb-12 text-center"
        >
          If even ONE of these is true, this workshop was made for you.
        </motion.p>

        <div className="w-full space-y-5 mb-16">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="flex items-start gap-4"
            >
              <span className="text-2xl mt-0.5">{problem.emoji}</span>
              <p className="text-[#0f2e5a] font-medium text-lg leading-relaxed">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 text-center shadow-inner"
        >
          <p className="text-[#0f2e5a] font-serif font-bold text-lg md:text-xl">
            What if you could <span className="text-[#ff6b00]">fix ALL of this</span> in just one workshop?
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Problems;
