import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Briefcase, Download, Trash2 } from 'lucide-react';

interface LeadData {
  id: string;
  name: string;
  contactInfo: {
    email: string;
    phone: string;
  };
  enquiryType: string;
  stage: string;
  createdAt: string;
}

const AdminLeads: React.FC = () => {
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'leads'));
      const leadsData: LeadData[] = [];
      querySnapshot.forEach((doc) => {
        leadsData.push({ id: doc.id, ...doc.data() } as LeadData);
      });
      setLeads(leadsData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStageChange = async (id: string, newStage: string) => {
    try {
      await updateDoc(doc(db, 'leads', id), { stage: newStage });
      setLeads(leads.map(l => l.id === id ? { ...l, stage: newStage } : l));
    } catch (error) {
      console.error("Error updating stage:", error);
      alert("Failed to update stage");
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    try {
      await deleteDoc(doc(db, 'leads', id));
      setLeads(leads.filter(l => l.id !== id));
    } catch (error) {
      console.error("Error deleting lead:", error);
      alert("Failed to delete lead");
    }
  };

  return (
    <div className="font-sans w-full">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 flex items-center gap-3">
            <Briefcase className="text-amber-500" size={36} />
            CRM Leads
          </h1>
          <p className="text-slate-500 font-medium mt-2">Manage prospective students and counselling inquiries.</p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:text-emerald-700 px-5 py-2.5 font-bold rounded-xl transition-colors">
          <Download size={18} /> Export CSV
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
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
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {leads.length > 0 ? (
                  leads.map((lead, i) => (
                    <motion.tr 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={lead.id} 
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-900 font-bold">{lead.name}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-500 font-medium">
                        {lead.contactInfo?.email || 'N/A'}<br />
                        <span className="text-xs text-slate-400">{lead.contactInfo?.phone || 'N/A'}</span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">{lead.enquiryType || 'General'}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <select
                          value={lead.stage || 'New'}
                          onChange={(e) => handleStageChange(lead.id, e.target.value)}
                          className={`bg-slate-50 border border-slate-200 text-sm rounded-lg block w-full p-2 font-bold ${
                            lead.stage === 'New' ? 'text-sky-600' :
                            lead.stage === 'Contacted' ? 'text-amber-600' :
                            'text-emerald-600'
                          }`}
                        >
                          <option value="New" className="text-sky-600">New</option>
                          <option value="Contacted" className="text-amber-600">Contacted</option>
                          <option value="Qualified" className="text-emerald-600">Qualified</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-500 font-medium">
                        {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-500 font-medium">
                        <button onClick={() => handleDelete(lead.id)} className="text-red-500 hover:text-red-700 transition-colors bg-red-50 p-2 rounded-lg">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-slate-400 font-medium text-sm">
                      No leads found in the database.
                    </td>
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

export default AdminLeads;
