import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Workflow',
    description: 'Experience seamless career planning with our AI-powered intelligent matching system.',
    color: 'text-amber-500 bg-amber-100'
  },
  {
    icon: Shield,
    title: 'Data Privacy',
    description: 'Your psychometric test results and personal data are strictly secured and encrypted.',
    color: 'text-emerald-500 bg-emerald-100'
  },
  {
    icon: Globe,
    title: 'Global Opportunities',
    description: 'Discover universities and programs from all around the globe, mapped to your profile.',
    color: 'text-sky-500 bg-sky-100'
  }
];

const Features: React.FC = () => {
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
            Features Designed for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Student Success</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Everything you need to plan, track, and achieve your academic and career goals in one unified platform.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon size={32} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="w-full md:w-1/2 relative z-10">
            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
              Powerful Psychometric Engine
            </h2>
            <ul className="space-y-4">
              {[
                'Career Personality Profiling',
                'Aptitude & Skill Assessment',
                'Detailed Career Trajectory Reports'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle className="text-amber-400" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 relative z-10">
            <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-2xl">
              <div className="w-full h-48 bg-slate-700/50 rounded-2xl mb-4 flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
              <div className="h-4 w-3/4 bg-slate-700 rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Features;
