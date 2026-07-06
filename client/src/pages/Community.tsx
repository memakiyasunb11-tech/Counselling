import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Award, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Community: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-600 text-sm font-bold tracking-widest uppercase">EduFordge Network</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Community</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Connect with peers, share experiences, and learn from mentors who have successfully navigated their educational journeys.
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {[
            {
              icon: MessageSquare,
              title: "Discussion Forums",
              desc: "Ask questions and get answers from our vibrant community of students and alumni.",
              color: "text-blue-500 bg-blue-100"
            },
            {
              icon: Users,
              title: "Study Groups",
              desc: "Find like-minded peers and form study groups to prepare for upcoming entrance exams.",
              color: "text-emerald-500 bg-emerald-100"
            },
            {
              icon: Award,
              title: "Mentor AMAs",
              desc: "Participate in live Q&A sessions with industry professionals and top-tier university students.",
              color: "text-amber-500 bg-amber-100"
            }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Upcoming Event Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} /> Upcoming Live Event
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Navigating Ivy League Admissions</h2>
              <p className="text-slate-400 font-medium mb-8 max-w-xl">
                Join our panel of recent Harvard, Yale, and Princeton admits as they share their unfiltered application stories and tips.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button 
                  onClick={() => alert('RSVP successful! We will send you an email with event details.')}
                  className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/30 w-full sm:w-auto"
                >
                  RSVP Now
                </button>
                <span className="text-slate-300 font-medium">Sept 12, 2026 • 6:00 PM EST</span>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop" 
                alt="Live Event" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Community;
