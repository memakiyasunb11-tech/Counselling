import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/counseling/BookingModal';

const StudentDashboard: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="font-sans w-full">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900">Student Dashboard</h1>
          <p className="text-slate-500 font-medium mt-2">Welcome back! Here is an overview of your career progress.</p>
        </div>
        <button 
          onClick={() => setIsBookingModalOpen(true)}
          className="bg-amber-400 hover:bg-amber-500 hover:-translate-y-1 transition-all px-6 py-3 rounded-xl font-bold text-slate-900 shadow-lg shadow-amber-500/20 flex items-center gap-2"
        >
          Book Session <CalendarIcon size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Alerts & Roadmap */}
        <div className="lg:col-span-2 space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-rose-50 border border-rose-100 rounded-[2rem] p-8 shadow-sm relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-200/40 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex items-start space-x-6 relative z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-rose-100">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Action Required</h3>
                <p className="text-slate-600 font-medium mb-6">You have pending psychometric assessments to complete before your next counselling session.</p>
                <Link to="/assessments" className="inline-block bg-white hover:bg-slate-50 text-slate-900 font-bold px-6 py-3 rounded-xl border border-slate-200 shadow-sm transition-all">
                  Take Assessment Now
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-amber-500">🗺️</span> My Career Roadmap
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Complete Aptitude Test', status: 'Pending', icon: '📝', color: 'bg-rose-100 text-rose-600' },
                { title: 'First Counselling Session', status: 'Upcoming', icon: <Video size={20} />, date: 'Oct 15, 02:00 PM', color: 'bg-sky-100 text-sky-600' },
                { title: 'Review College Shortlist', status: 'Locked', icon: '🏛️', color: 'bg-slate-100 text-slate-500' },
              ].map((task, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                  <div className="flex items-center space-x-5">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-xl">
                      {task.icon}
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold">{task.title}</h4>
                      {task.date && <p className="text-sm font-medium text-slate-500 mt-1">{task.date}</p>}
                    </div>
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${task.color}`}>
                    {task.status}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Reports & Quick Links */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-sky-500">📊</span> Latest Reports
            </h3>
            <div className="text-center p-8 border-2 border-dashed border-slate-200 bg-slate-50 rounded-2xl">
              <p className="text-slate-500 font-medium text-sm">No reports generated yet. Complete an assessment to get started.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-emerald-500">⭐</span> Saved Careers
            </h3>
            <ul className="space-y-4">
              {['Data Scientist', 'Software Engineer', 'Product Manager'].map((career, idx) => (
                <li key={idx} className="group p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50 cursor-pointer flex justify-between items-center transition-all">
                  <span className="font-bold text-slate-700 group-hover:text-slate-900">{career}</span>
                  <span className="text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all">→</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Booking Modal Instance */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
};

export default StudentDashboard;
