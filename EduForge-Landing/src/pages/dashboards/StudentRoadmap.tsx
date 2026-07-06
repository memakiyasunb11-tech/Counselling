import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, MapPin, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const milestones = [
  {
    id: 1,
    title: 'Complete Psychometric Test',
    description: 'Finish the initial career and personality assessment.',
    status: 'completed',
    date: 'Oct 15, 2026',
  },
  {
    id: 2,
    title: 'First Counselling Session',
    description: 'Meet with your assigned counsellor to discuss the report.',
    status: 'completed',
    date: 'Oct 18, 2026',
  },
  {
    id: 3,
    title: 'Shortlist Top 3 Careers',
    description: 'Review the career library and select your top choices.',
    status: 'in-progress',
    date: 'Oct 25, 2026',
  },
  {
    id: 4,
    title: 'University Research',
    description: 'Identify top 5 colleges offering your chosen courses.',
    status: 'pending',
    date: 'Nov 05, 2026',
  },
  {
    id: 5,
    title: 'Finalize Roadmap',
    description: 'Confirm entrance exams and application deadlines.',
    status: 'pending',
    date: 'Nov 15, 2026',
  },
];

const StudentRoadmap: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
          <MapPin className="text-amber-500" size={32} />
          My Career Roadmap
        </h1>
        <p className="text-slate-500 mt-2 font-medium">Your personalized step-by-step journey to career success.</p>
      </div>

      <div className="relative border-l-4 border-slate-200 ml-6 space-y-12 pb-12">
        {milestones.map((milestone, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={milestone.id} 
            className="relative pl-10"
          >
            {/* Timeline Marker */}
            <div className={`absolute -left-[26px] top-1 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center shadow-sm
              ${milestone.status === 'completed' ? 'bg-emerald-500 text-white' : 
                milestone.status === 'in-progress' ? 'bg-amber-500 text-white' : 
                'bg-slate-200 text-slate-400'}`}
            >
              {milestone.status === 'completed' ? <CheckCircle2 size={24} /> : 
               milestone.status === 'in-progress' ? <Target size={24} /> : 
               <Clock size={24} />}
            </div>

            {/* Content Card */}
            <div className={`bg-white rounded-2xl p-6 border shadow-sm transition-all
              ${milestone.status === 'in-progress' ? 'border-amber-300 ring-4 ring-amber-50' : 'border-slate-200'}
            `}>
              <div className="flex justify-between items-start mb-2">
                <h3 className={`text-xl font-bold ${milestone.status === 'pending' ? 'text-slate-500' : 'text-slate-900'}`}>
                  {milestone.title}
                </h3>
                <span className="text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  {milestone.date}
                </span>
              </div>
              <p className="text-slate-500 font-medium">{milestone.description}</p>
              
              {milestone.status === 'in-progress' && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Link to="/library/careers" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-6 rounded-xl transition-colors shadow-md shadow-amber-500/20">
                    Continue Task
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StudentRoadmap;
