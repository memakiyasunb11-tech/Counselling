import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';

const CounsellorDashboard: React.FC = () => {
  return (
    <div className="font-sans w-full">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">Counsellor Dashboard</h1>
        <p className="text-slate-500 font-medium mt-2">Manage your students, career counselling sessions, and reports.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Quick Stats */}
        <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Active Students', value: '24', color: 'text-amber-500' },
            { label: 'Pending Reports', value: '3', color: 'text-rose-500' },
            { label: 'Sessions Today', value: '4', color: 'text-sky-500' },
            { label: 'New Leads', value: '7', color: 'text-emerald-500' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-xl hover:-translate-y-1 transition-transform"
            >
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">{stat.label}</div>
              <div className={`text-5xl font-black ${stat.color}`}>{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Area: Upcoming Sessions & Students Table */}
        <div className="lg:col-span-3 space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-sky-500">📅</span> Upcoming Sessions
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Alex Johnson', type: 'Career Counselling', time: 'Today, 4:00 PM', status: 'Ready' },
                { name: 'Sarah Williams', type: 'General Counselling', time: 'Oct 15, 2:00 PM', status: 'Upcoming' },
              ].map((session, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center space-x-5">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-sky-500">
                      <Video size={24} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold">{session.name}</h4>
                      <p className="text-sm font-medium text-slate-500 mt-1">{session.type} • {session.time}</p>
                    </div>
                  </div>
                  {session.status === 'Ready' ? (
                    <Link to="/session-room" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded-xl transition-colors shadow-md">
                      Join Call
                    </Link>
                  ) : (
                    <div className="bg-slate-200 text-slate-500 font-bold px-6 py-2 rounded-xl cursor-not-allowed">
                      Upcoming
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-xl overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-amber-500">👥</span> Assigned Students
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-100">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Grade</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { name: 'Alex Johnson', grade: '12th' },
                    { name: 'Sarah Williams', grade: '11th' },
                    { name: 'Michael Chen', grade: '10th' },
                  ].map((student, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-5 whitespace-nowrap text-sm font-bold text-slate-700">{student.name}</td>
                      <td className="px-4 py-5 whitespace-nowrap text-sm font-medium text-slate-500">{student.grade}</td>
                      <td className="px-4 py-5 whitespace-nowrap text-sm font-medium">
                        <button className="text-amber-500 hover:text-amber-600 font-bold bg-amber-50 px-4 py-1.5 rounded-lg">View Profile</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Sidebar: New Leads */}
        <div className="lg:col-span-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-[50px] rounded-full pointer-events-none"></div>
            
            <h3 className="text-xl font-bold text-white mb-6 relative z-10 flex items-center gap-2">
              <span className="text-amber-400">🔥</span> New Leads
            </h3>
            <div className="space-y-4 relative z-10">
              {[
                { name: 'David Lee', intent: 'Engineering' },
                { name: 'Emma Davis', intent: 'Medical' },
              ].map((lead, i) => (
                <div key={i} className="p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-colors">
                  <h4 className="text-white font-bold">{lead.name}</h4>
                  <p className="text-sm text-slate-400 mt-1 font-medium">Intent: <span className="text-amber-400">{lead.intent}</span></p>
                  <button className="mt-4 w-full bg-slate-700 hover:bg-slate-600 text-white text-sm font-bold py-2 rounded-lg transition-colors">Contact</button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CounsellorDashboard;
