import React, { useState } from 'react';
import { useAuthStore } from '../../store/authStore';
import { Settings, User, Clock, Shield } from 'lucide-react';

const CounsellorSettings: React.FC = () => {
  const { profile } = useAuthStore();
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
          <Settings className="text-sky-500" size={32} />
          Counsellor Settings
        </h1>
        <p className="text-slate-500 mt-2 font-medium">Manage your professional profile and availability.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Navigation */}
        <div className="w-full md:w-64 shrink-0">
          <nav className="space-y-2">
            {[
              { id: 'profile', label: 'Professional Profile', icon: User },
              { id: 'availability', label: 'Availability Hours', icon: Clock },
              { id: 'security', label: 'Security & Password', icon: Shield },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                  activeTab === tab.id 
                  ? 'bg-sky-500 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          {activeTab === 'profile' && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Professional Information</h2>
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                    <input type="text" defaultValue={profile?.firstName} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                    <input type="text" defaultValue={profile?.lastName} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all font-medium" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" defaultValue={profile?.email} disabled className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-100 text-slate-500 font-medium cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Professional Bio</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-500 transition-all font-medium resize-none" defaultValue="Expert in technical and engineering career paths with 10+ years of guidance experience."></textarea>
                </div>
                <div className="pt-4 flex justify-end">
                  <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md">
                    Save Profile
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'availability' && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Working Hours</h2>
              <div className="space-y-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <div key={day} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl bg-slate-50">
                    <span className="font-bold text-slate-700 w-24">{day}</span>
                    <div className="flex items-center gap-4">
                      <select className="px-3 py-2 border border-slate-200 rounded-lg bg-white font-medium text-slate-600">
                        <option>09:00 AM</option>
                        <option>10:00 AM</option>
                      </select>
                      <span className="text-slate-400 font-bold">to</span>
                      <select className="px-3 py-2 border border-slate-200 rounded-lg bg-white font-medium text-slate-600">
                        <option>05:00 PM</option>
                        <option>06:00 PM</option>
                      </select>
                    </div>
                  </div>
                ))}
                <div className="pt-6 flex justify-end">
                  <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md">
                    Update Availability
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Security</h2>
              <p className="text-slate-500 font-medium">Security settings are managed centrally by the platform administrators.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CounsellorSettings;
