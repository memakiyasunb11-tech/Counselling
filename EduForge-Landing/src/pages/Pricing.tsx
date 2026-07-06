import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for students getting started.',
    features: ['1 Basic Assessment', 'General Career Library Access', 'Email Support'],
    buttonText: 'Get Started',
    popular: false,
    color: 'bg-white'
  },
  {
    name: 'Pro',
    price: '₹1,999',
    period: '/one-time',
    description: 'Comprehensive analysis & guidance.',
    features: ['Full Psychometric Suite', 'Detailed AI Career Report', '1-on-1 Counsellor Session', 'Priority Support', 'University Shortlisting'],
    buttonText: 'Choose Pro',
    popular: true,
    color: 'bg-slate-900 text-white'
  },
  {
    name: 'School / Bulk',
    price: 'Custom',
    description: 'For educational institutions.',
    features: ['Bulk Assessments', 'Admin Dashboard', 'White-labeled Reports', 'Dedicated Account Manager'],
    buttonText: 'Contact Sales',
    popular: false,
    color: 'bg-white'
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-transparent font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Simple, Transparent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Pricing</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Invest in your future. Choose a plan that fits your career planning needs.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className={`relative rounded-[2rem] p-10 border transition-all duration-300 hover:-translate-y-2
                ${plan.popular ? 'border-amber-400 shadow-[0_20px_50px_rgba(251,191,36,0.2)] bg-slate-900' : 'border-slate-200 bg-white shadow-xl'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
              <p className={`text-sm mb-6 font-medium ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
              
              <div className="mb-8">
                <span className={`text-5xl font-black ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                {plan.period && <span className={`text-lg font-medium ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>}
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className={`shrink-0 ${plan.popular ? 'text-amber-400' : 'text-emerald-500'}`} size={20} />
                    <span className={`font-medium ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all shadow-md
                ${plan.popular 
                  ? 'bg-amber-400 text-slate-900 hover:bg-amber-500' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
