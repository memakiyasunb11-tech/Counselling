import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Home, Video, Map, Settings, Users, FileText,
  Menu, X, Bell, UserCircle, LogOut, Briefcase
} from 'lucide-react';
import logo from '../../assets/logo.png';

const DashboardLayout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine role based on URL path
  let role: 'student' | 'counsellor' | 'admin' = 'student';
  if (location.pathname.startsWith('/admin')) role = 'admin';
  else if (location.pathname.startsWith('/counsellor')) role = 'counsellor';

  const roleConfigs = {
    student: {
      name: 'Student Portal',
      theme: 'amber',
      links: [
        { name: 'Dashboard', path: '/student/dashboard', icon: Home },
        { name: 'My Roadmap', path: '/student/roadmap', icon: Map },
        { name: 'Assessments', path: '/assessments', icon: FileText },
        { name: 'Counselling', path: '/student/counselling', icon: Video },
        { name: 'Settings', path: '/student/settings', icon: Settings },
      ]
    },
    counsellor: {
      name: 'Counsellor Portal',
      theme: 'sky',
      links: [
        { name: 'Overview', path: '/counsellor/dashboard', icon: Home },
        { name: 'My Students', path: '/counsellor/students', icon: Users },
        { name: 'Upcoming Sessions', path: '/counsellor/sessions', icon: Video },
        { name: 'Reports', path: '/counsellor/reports', icon: FileText },
        { name: 'Settings', path: '/counsellor/settings', icon: Settings },
      ]
    },
    admin: {
      name: 'Admin Portal',
      theme: 'emerald',
      links: [
        { name: 'Dashboard', path: '/admin/dashboard', icon: Home },
        { name: 'Manage Users', path: '/admin/users', icon: Users },
        { name: 'CRM Leads', path: '/admin/leads', icon: Briefcase },
        { name: 'Platform Settings', path: '/admin/settings', icon: Settings },
      ]
    }
  };

  const config = roleConfigs[role];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-slate-200 fixed h-full z-20">
        <div className="h-20 flex items-center px-6 border-b border-slate-100 shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="EduFordge Logo" className="h-8 w-auto" />
            <span className="font-bold text-slate-900 text-lg">EduFordge</span>
          </Link>
        </div>

        <div className="px-6 py-4">
          <div className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-${config.theme}-50 text-${config.theme}-600 inline-block mb-4`}>
            {config.name}
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {config.links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${isActive
                    ? `bg-${config.theme}-500 text-white shadow-md shadow-${config.theme}-500/20`
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
              >
                <Icon size={20} className={isActive ? 'text-white' : `text-slate-400`} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl font-medium text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-colors"
          >
            <LogOut size={20} className="text-slate-400" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">

        {/* Topbar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-slate-800 lg:hidden">
              {config.name}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors relative"
              >
                <Bell size={20} />
                <span className={`absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500`}></span>
              </button>
              
              {/* Notifications Dropdown */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden z-50">
                  <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h3 className="font-bold text-slate-900">Notifications</h3>
                    <button 
                      onClick={() => setIsNotificationsOpen(false)}
                      className="text-xs text-slate-500 hover:text-sky-600 font-medium"
                    >
                      Mark all as read
                    </button>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {[
                      { title: 'New Message', desc: 'You have a new message from Counsellor.', time: '5m ago', unread: true },
                      { title: 'System Update', desc: 'EduFordge platform updated successfully.', time: '2h ago', unread: false },
                      { title: 'Reminder', desc: 'Your scheduled session is tomorrow at 2 PM.', time: '1d ago', unread: false },
                    ].map((notif, idx) => (
                      <div key={idx} className={`p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors ${notif.unread ? 'bg-sky-50/30' : ''}`}>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={`text-sm font-bold ${notif.unread ? 'text-slate-900' : 'text-slate-700'}`}>{notif.title}</h4>
                          <span className="text-xs text-slate-400">{notif.time}</span>
                        </div>
                        <p className="text-xs text-slate-500">{notif.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-slate-100 text-center bg-slate-50">
                    <button 
                      onClick={() => setIsNotificationsOpen(false)}
                      className="text-sm font-bold text-sky-600 hover:text-sky-700"
                    >
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-bold text-slate-900 leading-tight">Alex Johnson</p>
                <p className="text-xs text-slate-500 font-medium capitalize">{role}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white shadow-sm flex items-center justify-center text-slate-500">
                <UserCircle size={24} />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>

          <aside className="relative w-72 bg-white h-full shadow-2xl flex flex-col">
            <div className="h-20 flex items-center justify-between px-6 border-b border-slate-100 shrink-0">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="EduFordge Logo" className="h-8 w-auto" />
                <span className="font-bold text-slate-900 text-lg">EduFordge</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-lg">
                <X size={20} />
              </button>
            </div>

            <div className="px-6 py-6">
              <div className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-${config.theme}-50 text-${config.theme}-600 inline-block mb-6`}>
                {config.name}
              </div>
              <nav className="space-y-2">
                {config.links.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${isActive
                          ? `bg-${config.theme}-500 text-white shadow-md shadow-${config.theme}-500/20`
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                    >
                      <Icon size={20} className={isActive ? 'text-white' : `text-slate-400`} />
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
