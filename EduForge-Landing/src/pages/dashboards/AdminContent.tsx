import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Plus, Edit2, Trash2, X, Check, FileText } from 'lucide-react';

type TabType = 'faqs' | 'bonuses' | 'curriculum' | 'benefits';

const AdminContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('faqs');
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});

  const collectionsMap = {
    faqs: 'content_faqs',
    bonuses: 'content_bonuses',
    curriculum: 'content_curriculum',
    benefits: 'content_benefits',
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, collectionsMap[activeTab]));
      const items = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(items);
    } catch (err) {
      console.error("Failed to fetch content", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const handleOpenModal = (item?: any) => {
    if (item) {
      setEditingId(item.id);
      setFormData({ ...item });
    } else {
      setEditingId(null);
      setFormData({});
    }
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        const docRef = doc(db, collectionsMap[activeTab], editingId);
        await updateDoc(docRef, formData);
      } else {
        await addDoc(collection(db, collectionsMap[activeTab]), formData);
      }
      setIsModalOpen(false);
      fetchData();
    } catch (err) {
      console.error("Failed to save", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await deleteDoc(doc(db, collectionsMap[activeTab], id));
      fetchData();
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  const renderFormFields = () => {
    if (activeTab === 'faqs') {
      return (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Question</label>
            <input required type="text" className="w-full p-2 border rounded" value={formData.q || ''} onChange={e => setFormData({ ...formData, q: e.target.value })} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Answer</label>
            <textarea required className="w-full p-2 border rounded" rows={4} value={formData.a || ''} onChange={e => setFormData({ ...formData, a: e.target.value })} />
          </div>
        </>
      );
    }
    if (activeTab === 'bonuses') {
      return (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input required type="text" className="w-full p-2 border rounded" value={formData.title || ''} onChange={e => setFormData({ ...formData, title: e.target.value })} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Subtitle</label>
            <input required type="text" className="w-full p-2 border rounded" value={formData.subtitle || ''} onChange={e => setFormData({ ...formData, subtitle: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tag</label>
              <input required type="text" className="w-full p-2 border rounded" value={formData.tag || ''} onChange={e => setFormData({ ...formData, tag: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Value (e.g. ₹999)</label>
              <input required type="text" className="w-full p-2 border rounded" value={formData.value || ''} onChange={e => setFormData({ ...formData, value: e.target.value })} />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
            <input required type="text" className="w-full p-2 border rounded" value={formData.image || ''} onChange={e => setFormData({ ...formData, image: e.target.value })} />
          </div>
        </>
      );
    }
    if (activeTab === 'curriculum') {
      return (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Icon (Emoji)</label>
            <input required type="text" className="w-full p-2 border rounded" value={formData.icon || ''} onChange={e => setFormData({ ...formData, icon: e.target.value })} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input required type="text" className="w-full p-2 border rounded" value={formData.title || ''} onChange={e => setFormData({ ...formData, title: e.target.value })} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea required className="w-full p-2 border rounded" rows={3} value={formData.desc || ''} onChange={e => setFormData({ ...formData, desc: e.target.value })} />
          </div>
        </>
      );
    }
    if (activeTab === 'benefits') {
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1">Benefit Text</label>
          <input required type="text" className="w-full p-2 border rounded" value={formData.text || ''} onChange={e => setFormData({ ...formData, text: e.target.value })} />
        </div>
      );
    }
  };

  const renderTableRows = () => {
    return data.map((item, i) => (
      <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50">
        <td className="p-4 text-sm text-slate-900 font-medium">
          {activeTab === 'faqs' && item.q}
          {activeTab === 'bonuses' && item.title}
          {activeTab === 'curriculum' && item.title}
          {activeTab === 'benefits' && item.text}
        </td>
        <td className="p-4 text-sm text-slate-500">
          {activeTab === 'faqs' && (item.a?.substring(0, 50) + '...')}
          {activeTab === 'bonuses' && `${item.tag} | ${item.value}`}
          {activeTab === 'curriculum' && `${item.icon} | ${item.desc?.substring(0, 30)}...`}
        </td>
        <td className="p-4 flex gap-2 justify-end">
          <button onClick={() => handleOpenModal(item)} className="p-2 text-sky-500 hover:bg-sky-50 rounded-lg"><Edit2 size={16} /></button>
          <button onClick={() => handleDelete(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="font-sans w-full pb-20">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <FileText className="text-amber-500" /> Content Management
          </h1>
          <p className="text-slate-500 mt-2">Manage landing page content directly.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="bg-[#0f2e5a] text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-[#0a1e3b] transition-colors">
          <Plus size={18} /> Add New {activeTab.slice(0, -1)}
        </button>
      </div>

      <div className="flex gap-2 mb-6 bg-slate-100 p-1 rounded-xl w-max">
        {(['faqs', 'bonuses', 'curriculum', 'benefits'] as TabType[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-bold text-sm capitalize transition-colors ${activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-12 text-center text-slate-500 font-medium animate-pulse">Loading content...</div>
        ) : data.length === 0 ? (
          <div className="p-12 text-center text-slate-500 font-medium">No items found. Default hardcoded content will be shown on the live site.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Primary Info</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Secondary Info</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {renderTableRows()}
            </tbody>
          </table>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-lg text-slate-900 capitalize">{editingId ? 'Edit' : 'Add'} {activeTab.slice(0, -1)}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600"><X size={20} /></button>
            </div>
            <form onSubmit={handleSave} className="p-6">
              {renderFormFields()}
              <div className="flex justify-end gap-3 mt-8">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-lg font-bold text-slate-600 hover:bg-slate-100">Cancel</button>
                <button type="submit" className="bg-[#ff6b00] text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 shadow-sm shadow-[#ff6b00]/20 hover:brightness-110">
                  <Check size={18} /> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContent;
