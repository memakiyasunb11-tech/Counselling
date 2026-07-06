import React from 'react';
import { motion } from 'framer-motion';

const Curriculum: React.FC = () => {
  const modules = [
    {
      icon: "🧠",
      title: "7 Myths Quietly Ruining Your Career",
      desc: "Seven 'truths' nearly every student believes, and at least four are silently sabotaging your future right now. Revealed live."
    },
    {
      icon: "🏛️",
      title: "The 4 Foundations of a Clear Path",
      desc: "Most students master one and quietly ignore the other three, which is exactly why their future feels unpredictable."
    },
    {
      icon: "👔",
      title: "You're Not 'Just a Student'",
      desc: "The single identity shift that separates graduates who stay unemployed from those booked out by top recruiters."
    },
    {
      icon: "📈",
      title: "3 Changes That Unlock Growth",
      desc: "Three habits that feel completely normal but are leaking your potential every single month. The exact swaps are shared inside."
    },
    {
      icon: "🔓",
      title: "The Assets You're Ignoring",
      desc: "Every unprotected skill you develop quietly works against you. There is a way to stay in control and get paid for your talent."
    },
    {
      icon: "🧰",
      title: "The Toolkit That Runs It All",
      desc: "The exact stack that protects your applications, brings opportunities on autopilot, and saves 15+ hours a week."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        <div className="text-center max-w-2xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl font-bold text-[#2C2825] mb-6"
          >
            What You'll Learn Inside
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#6C635B] font-medium"
          >
            In two focused hours we unpack the exact system behind a successful career roadmap. Here is a glimpse, the real depth is reserved for those who show up live.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {modules.map((mod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-white rounded-2xl p-8 border border-[#E5DCCB] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#F9F6F0] rounded-xl flex items-center justify-center text-2xl mb-6 border border-[#E5DCCB]">
                {mod.icon}
              </div>
              <h3 className="font-bold text-[#2C2825] text-lg mb-3">{mod.title}</h3>
              <p className="text-[#8c7a6b] text-sm leading-relaxed">{mod.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Curriculum;
