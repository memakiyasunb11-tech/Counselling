import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { Users, Briefcase, Settings, FileText } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({ users: 0, leads: 0, activeSessions: 34 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const usersSnap = await getDocs(collection(db, 'users'));
        const leadsSnap = await getDocs(collection(db, 'leads'));
        setStats(prev => ({ ...prev, users: usersSnap.size, leads: leadsSnap.size }));
      } catch (error) {
        console.error("Failed to fetch stats");
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="font-sans w-full">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">Admin Overview</h1>
        <p className="text-slate-500 font-medium mt-2">Manage platform operations, user analytics, and CRM leads.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { label: 'Total Users', value: stats.users, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Active Sessions', value: stats.activeSessions, color: 'text-sky-500', bg: 'bg-sky-50' },
          { label: 'CRM Leads', value: stats.leads, color: 'text-amber-500', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className={`text-4xl font-black ${stat.color}`}>{stat.value}</h3>
            </div>
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center`}>
              <div className={`w-3 h-3 rounded-full ${stat.color.replace('text', 'bg')}`}></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Links */}
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/admin/users" className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform">
            <Users size={32} />
          </div>
          <h3 className="font-bold text-lg text-slate-900">Manage Users</h3>
          <p className="text-slate-500 text-sm mt-2">View, edit roles, and delete registered users.</p>
        </Link>
        <Link to="/admin/leads" className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform">
            <Briefcase size={32} />
          </div>
          <h3 className="font-bold text-lg text-slate-900">CRM Leads</h3>
          <p className="text-slate-500 text-sm mt-2">Track prospect stages and enquiry details.</p>
        </Link>
        <Link to="/admin/settings" className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-sky-50 text-sky-500 rounded-2xl flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform">
            <Settings size={32} />
          </div>
          <h3 className="font-bold text-lg text-slate-900">Platform Settings</h3>
          <p className="text-slate-500 text-sm mt-2">Configure maintenance mode and globals.</p>
        </Link>
        <Link to="/admin/content" className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-fuchsia-50 text-fuchsia-500 rounded-2xl flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform">
            <FileText size={32} />
          </div>
          <h3 className="font-bold text-lg text-slate-900">Content Management</h3>
          <p className="text-slate-500 text-sm mt-2">Add, Edit, and Delete landing page content.</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
