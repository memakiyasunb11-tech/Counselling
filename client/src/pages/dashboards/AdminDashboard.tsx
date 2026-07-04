import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        // Mocking for the UI demo since the backend might not be fully up
        setTimeout(() => {
          setLeads([
            { name: 'Sarah Connor', contactInfo: { email: 'sarah@example.com', phone: '555-0101' }, enquiryType: 'B.Tech Admissions', stage: 'New', createdAt: new Date().toISOString() },
            { name: 'John Smith', contactInfo: { email: 'john@example.com', phone: '555-0102' }, enquiryType: 'Career Counselling', stage: 'Contacted', createdAt: new Date().toISOString() },
            { name: 'Emma Watson', contactInfo: { email: 'emma@example.com', phone: '555-0103' }, enquiryType: 'Study Abroad', stage: 'Qualified', createdAt: new Date().toISOString() },
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Failed to fetch leads');
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  return (
    <div className="font-sans w-full">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">Admin Overview</h1>
        <p className="text-slate-500 font-medium mt-2">Manage platform operations, user analytics, and CRM leads.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Total Users', value: '1,248', color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Active Sessions', value: '34', color: 'text-sky-500', bg: 'bg-sky-50' },
          { label: 'New Leads Today', value: '12', color: 'text-amber-500', bg: 'bg-amber-50' },
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

      {/* Leads Table */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Recent CRM Leads</h2>
          <div className="flex gap-4">
            <button 
              onClick={async () => {
                const { seedDatabase } = await import('../../utils/seedData');
                try {
                  await seedDatabase();
                  alert('Database seeded successfully!');
                } catch (e: any) {
                  alert('Failed to seed: ' + e.message);
                }
              }}
              className="flex items-center gap-2 bg-amber-50 text-amber-600 hover:bg-amber-100 hover:text-amber-700 px-5 py-2.5 font-bold rounded-xl transition-colors"
            >
              Seed Database
            </button>
            <button className="flex items-center gap-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:text-emerald-700 px-5 py-2.5 font-bold rounded-xl transition-colors">
              <Download size={18} /> Export CSV
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Contact</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Enquiry Type</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Stage</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {leads.length > 0 ? (
                  leads.map((lead, i) => (
                    <motion.tr 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={i} 
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-900 font-bold">{lead.name}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-500 font-medium">
                        {lead.contactInfo?.email}<br />
                        <span className="text-xs text-slate-400">{lead.contactInfo?.phone}</span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">{lead.enquiryType}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          lead.stage === 'New' ? 'bg-sky-50 text-sky-600' :
                          lead.stage === 'Contacted' ? 'bg-amber-50 text-amber-600' :
                          'bg-emerald-50 text-emerald-600'
                        }`}>
                          {lead.stage}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-500 font-medium">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-slate-400 font-medium text-sm">No leads found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
