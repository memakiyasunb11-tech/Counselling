import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "I am completely confused about my career. Is this workshop for me?",
      a: "Yes! This workshop is specifically designed to help you discover your strengths, map out potential career paths, and gain absolute clarity even if you currently have zero direction."
    },
    {
      q: "How is this different from free YouTube content?",
      a: "YouTube gives you generic advice. This workshop provides a step-by-step, scientifically backed framework that has been proven to work for thousands of Indian students, tailored to the current job market."
    },
    {
      q: "What if I cannot attend live?",
      a: "If you register now, you will receive the full recording of the workshop and all the bonus playbooks directly in your inbox, so you can watch it at your own pace."
    },
    {
      q: "Is the money-back guarantee real?",
      a: "100%. If you attend the workshop and feel like you didn't get at least 10x the value of what you paid, just email us within 24 hours and we'll refund your ₹149 immediately. No questions asked."
    },
    {
      q: "₹149 seems too cheap. What's the catch?",
      a: "There is no catch. We price it at ₹149 to make it accessible to every student in India while ensuring you have enough 'skin in the game' to actually show up and take it seriously."
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, you will receive a digital Certificate of Participation from EduForge upon completing the workshop."
    },
    {
      q: "Can my parents attend the workshop with me?",
      a: "Absolutely! We highly encourage parents to sit in on the workshop so they can understand the career mapping process and support your decisions."
    },
    {
      q: "Is this only for high school students?",
      a: "While high school students get the most benefit from early planning, college students who are confused about their specialization or first job will also find immense value in our frameworks."
    }
  ];

  return (
    <section className="py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-3xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-[#0f2e5a] mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[#e2e8f0] last:border-0 pb-2">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-4 flex items-center justify-between text-left group"
              >
                <span className="font-bold text-[#0f2e5a] group-hover:text-[#ff6b00] transition-colors pr-8">
                  {faq.q}
                </span>
                <span className="text-[#ff6b00] font-medium text-xl flex-shrink-0 transition-transform duration-300 transform">
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[#334155] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
