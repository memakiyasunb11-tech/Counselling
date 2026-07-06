import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, Target, BookOpen, Compass, ArrowRight, PlayCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import CounselingExtra from '../components/CounselingExtra';

const services = [
  {
    icon: Compass,
    title: 'Career Discovery',
    description: 'Explore potential career paths mapped to your psychometric profile and innate strengths.',
    color: 'text-amber-500 bg-amber-100'
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Work with expert counsellors to establish achievable short-term and long-term academic goals.',
    color: 'text-sky-500 bg-sky-100'
  },
  {
    icon: BookOpen,
    title: 'College Planning',
    description: 'Get step-by-step guidance on university selection, applications, and entrance exam preparation.',
    color: 'text-emerald-500 bg-emerald-100'
  },
  {
    icon: Users,
    title: '1-on-1 Mentorship',
    description: 'Connect with industry professionals who provide real-world insights into your desired field.',
    color: 'text-rose-500 bg-rose-100'
  }
];

const Counseling: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-transparent font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
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
            <span className="text-amber-600 text-sm font-bold tracking-widest uppercase">Expert Guidance</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Find Your True <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Calling</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium mb-10">
            Our certified career counsellors help you navigate the complexities of education and career planning with data-driven insights and personalized attention.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center">
            <Link to="/login" className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2">
              Book a Session <Calendar size={20} />
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
              {/* Decorative hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.color}`}>
                  <service.icon size={32} className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-6">{service.description}</p>
                
                <div className="flex items-center text-slate-400 group-hover:text-amber-500 font-bold text-sm transition-colors cursor-pointer w-fit">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Media Gallery Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="text-4xl font-extrabold text-slate-900 mb-4">
              Real Stories, Real Results
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-500 max-w-2xl mx-auto">
              A glimpse into our counseling environment and the students we've helped achieve their goals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="md:col-span-2 relative aspect-video rounded-3xl overflow-hidden shadow-xl group">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop" alt="Counseling Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-slate-900/40">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 hover:bg-white/30 transition-all">
                  <PlayCircle size={40} className="fill-white text-slate-900" />
                </div>
              </div>
            </motion.div>
            
            <div className="flex flex-col gap-6">
              <motion.div variants={fadeInUp} className="relative flex-1 rounded-3xl overflow-hidden shadow-lg group">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop" alt="Counseling Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold">Expert Mentors</span>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="relative flex-1 rounded-3xl overflow-hidden shadow-lg group">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" alt="Student Planning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold">Career Planning</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-white mb-16">The Counseling Journey</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Assessment', desc: 'Take our comprehensive psychometric test to discover your unique profile.' },
                { step: '02', title: 'Analysis', desc: 'Our AI engine processes your results to generate tailored career paths.' },
                { step: '03', title: 'Consultation', desc: 'Discuss your report in a 1-on-1 session with an expert career counsellor.' }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="text-5xl font-black text-slate-800 absolute -top-8 left-1/2 -translate-x-1/2 z-0">{item.step}</div>
                  <div className="relative z-10 pt-6">
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <CounselingExtra />
      </div>
    </div>
  );
};

export default Counseling;
