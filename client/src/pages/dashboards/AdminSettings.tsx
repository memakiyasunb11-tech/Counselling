import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Settings, Save } from 'lucide-react';

interface SettingsData {
  maintenanceMode: boolean;
  registrationEnabled: boolean;
  supportEmail: string;
}

const defaultSettings: SettingsData = {
  maintenanceMode: false,
  registrationEnabled: true,
  supportEmail: 'support@edufordge.com'
};

const AdminSettings: React.FC = () => {
  const [settings, setSettings] = useState<SettingsData>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const docRef = doc(db, 'platform_settings', 'global');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSettings(docSnap.data() as SettingsData);
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
      setLoading(false);
    };
    fetchSettings();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await setDoc(doc(db, 'platform_settings', 'global'), settings);
      alert('Settings saved successfully!');
    } catch (error) {
      console.error("Error saving settings:", error);
      alert("Failed to save settings");
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="font-sans w-full max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 flex items-center gap-3">
          <Settings className="text-emerald-500" size={36} />
          Platform Settings
        </h1>
        <p className="text-slate-500 font-medium mt-2">Manage global application settings and preferences.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-8"
      >
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">General Settings</h3>
          
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div>
              <p className="font-bold text-slate-900">Maintenance Mode</p>
              <p className="text-sm text-slate-500">Temporarily disable access to the platform for all non-admin users.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" name="maintenanceMode" checked={settings.maintenanceMode} onChange={handleChange} className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div>
              <p className="font-bold text-slate-900">Enable Registrations</p>
              <p className="text-sm text-slate-500">Allow new users to sign up for an account.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" name="registrationEnabled" checked={settings.registrationEnabled} onChange={handleChange} className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
            </label>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <label className="block font-bold text-slate-900 mb-2">Support Email Address</label>
            <input 
              type="email" 
              name="supportEmail" 
              value={settings.supportEmail} 
              onChange={handleChange}
              className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-emerald-500 focus:border-emerald-500 block p-3"
            />
            <p className="text-sm text-slate-500 mt-2">This email will be displayed to users for help and support.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex justify-end">
          <button 
            onClick={handleSave} 
            disabled={saving}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 font-bold rounded-xl transition-colors shadow-md shadow-emerald-500/20 disabled:opacity-70"
          >
            {saving ? 'Saving...' : <><Save size={18} /> Save Settings</>}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminSettings;
