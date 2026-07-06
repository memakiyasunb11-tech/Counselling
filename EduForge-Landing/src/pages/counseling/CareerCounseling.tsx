import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, Target, Compass, ArrowRight, Brain, ArrowLeft } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const services = [
  {
    icon: Compass,
    title: 'Career Discovery',
    description: 'Explore potential career paths mapped to your psychometric profile and innate strengths.',
    color: 'text-amber-500 bg-amber-100'
  },
  {
    icon: Brain,
    title: 'Psychometric Analysis',
    description: 'Understand your personality type, aptitudes, and work-style preferences.',
    color: 'text-purple-500 bg-purple-100'
  },
  {
    icon: Target,
    title: 'Skill Mapping',
    description: 'Identify gaps between your current skill set and your dream job requirements.',
    color: 'text-sky-500 bg-sky-100'
  },
  {
    icon: Briefcase,
    title: 'Transition Strategy',
    description: 'Get a step-by-step roadmap for switching careers successfully and smoothly.',
    color: 'text-emerald-500 bg-emerald-100'
  }
];

const CareerCounseling: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-transparent font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Back Link */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-8">
          <Link to="/counseling" className="inline-flex items-center text-slate-500 hover:text-amber-500 font-medium transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Counseling
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          className="text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-amber-600 text-sm font-bold tracking-widest uppercase">Career Counseling</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Design Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Dream Career</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium mb-10">
            Our specialized career counsellors help you align your passion with market realities. Gain clarity, build a roadmap, and take the next big step in your professional life.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center">
            <Link to="/login" className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2">
              Book Career Session <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="bg-white border border-slate-200 rounded-[2rem] p-10 shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.color}`}>
                  <service.icon size={32} className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-6">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CareerCounseling;
