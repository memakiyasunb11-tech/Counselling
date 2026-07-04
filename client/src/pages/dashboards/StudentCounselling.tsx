import React from 'react';
import { motion } from 'framer-motion';
import { Video, Calendar, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentCounselling: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
          <Video className="text-amber-500" size={32} />
          My Counselling Sessions
        </h1>
        <p className="text-slate-500 mt-2 font-medium">Manage your 1-on-1 sessions with your expert career counsellor.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Section */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Upcoming Session</h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 border border-amber-200 shadow-xl shadow-amber-500/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[40px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between relative z-10">
              <div>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  Confirmed
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Psychometric Report Review</h3>
                <div className="flex items-center gap-4 text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5"><Calendar size={18} /> Tomorrow</div>
                  <div className="flex items-center gap-1.5"><Clock size={18} /> 10:00 AM (45 mins)</div>
                </div>
              </div>
              
              <button 
                onClick={() => navigate('/session-room')}
                className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <Video size={20} />
                Join Session Room
              </button>
            </div>
          </motion.div>

          <h2 className="text-xl font-bold text-slate-900 mt-12 mb-4">Past Sessions</h2>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center hover:bg-slate-50 transition-colors">
              <div>
                <h4 className="font-bold text-slate-900">Introductory Consultation</h4>
                <p className="text-sm text-slate-500 font-medium">Oct 12, 2026 • 30 mins</p>
              </div>
              <button className="text-amber-500 font-bold text-sm flex items-center gap-1 hover:text-amber-600">
                View Notes <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Your Counsellor</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full border-2 border-amber-400 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Sarah+Jenkins&background=f8fafc&color=0f172a" alt="Counsellor" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Sarah Jenkins</h4>
                <p className="text-sm text-slate-500 font-medium">Sr. Career Expert</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed">
              Sarah specializes in engineering, tech, and study abroad placements. She has over 8 years of experience guiding students to Ivy League colleges.
            </p>
            <button className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors">
              Send Message
            </button>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl">
            <h3 className="text-lg font-bold mb-2">Need to Reschedule?</h3>
            <p className="text-slate-400 text-sm mb-6">You can reschedule up to 24 hours before the session time without any penalties.</p>
            <button className="w-full py-3 border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors">
              Request Reschedule
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentCounselling;
