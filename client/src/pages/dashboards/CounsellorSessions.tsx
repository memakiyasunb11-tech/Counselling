import React from 'react';
import { motion } from 'framer-motion';
import { Video, Calendar, Clock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CounsellorSessions: React.FC = () => {
  const navigate = useNavigate();
  const sessions = [
    { id: 1, studentName: 'Emily Chen', type: 'Psychometric Report Review', date: 'Tomorrow', time: '10:00 AM', status: 'Upcoming' },
    { id: 2, studentName: 'Marcus Johnson', type: 'College Selection Strategy', date: 'Oct 18, 2026', time: '2:30 PM', status: 'Upcoming' },
    { id: 3, studentName: 'Sophia Martinez', type: 'Introductory Consultation', date: 'Oct 12, 2026', time: '4:00 PM', status: 'Completed' },
  ];

  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
          <Video className="text-sky-500" size={32} />
          Upcoming Sessions
        </h1>
        <p className="text-slate-500 mt-2 font-medium">Manage your schedule and join video calls with students.</p>
      </div>

      <div className="space-y-6">
        {sessions.map((session, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={session.id}
            className={`bg-white rounded-3xl p-6 md:p-8 border shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center justify-between ${
              session.status === 'Upcoming' ? 'border-sky-200 ring-4 ring-sky-50' : 'border-slate-200 opacity-75'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                  session.status === 'Upcoming' ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-600'
                }`}>
                  {session.status}
                </span>
                <span className="text-sm font-bold text-slate-500 flex items-center gap-1">
                  <User size={16} /> {session.studentName}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">{session.type}</h3>
              <div className="flex flex-wrap items-center gap-4 text-slate-600 font-medium">
                <div className="flex items-center gap-1.5"><Calendar size={18} /> {session.date}</div>
                <div className="flex items-center gap-1.5"><Clock size={18} /> {session.time} (45 mins)</div>
              </div>
            </div>
            
            {session.status === 'Upcoming' ? (
              <button 
                onClick={() => navigate('/session-room')}
                className="w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 md:py-4 px-8 rounded-xl shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <Video size={20} />
                Join Room
              </button>
            ) : (
              <button className="w-full md:w-auto bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-3 md:py-4 px-8 rounded-xl transition-all shrink-0">
                View Notes
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CounsellorSessions;
