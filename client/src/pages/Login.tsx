import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Login: React.FC = () => {
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-[2rem] border border-slate-200 shadow-2xl relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/10 blur-[50px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 bg-amber-100 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <LogIn size={32} />
          </div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-slate-900 tracking-tight">Welcome Back</h2>
          <p className="mt-2 text-center text-sm text-slate-500 font-medium">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-amber-500 hover:text-amber-600 transition-colors">
              Register here
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6 relative z-10" onSubmit={e => e.preventDefault()}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email address</label>
              <input
                type="email"
                placeholder="e.g., yourname@email.com"
                className="appearance-none relative block w-full px-4 py-3 border border-slate-200 bg-slate-50 placeholder-slate-400 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all font-medium"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="appearance-none relative block w-full px-4 py-3 border border-slate-200 bg-slate-50 placeholder-slate-400 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all font-medium"
              />
            </div>
          </div>
        </form>

        <div className="relative mt-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-slate-500 font-bold">Or quick login as</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 relative z-10">
          <button
            onClick={() => {
              setStatus('Logging in as Student...');
              setTimeout(() => navigate('/student/dashboard'), 800);
            }}
            className="flex flex-col items-center justify-center p-3 border-2 border-amber-400 bg-amber-50 hover:bg-amber-400 rounded-xl transition-all duration-300 group"
          >
            <span className="text-2xl mb-1">🎓</span>
            <span className="text-xs font-bold text-slate-900 group-hover:text-white">Student</span>
          </button>

          <button
            onClick={() => {
              setStatus('Logging in as Counsellor...');
              setTimeout(() => navigate('/counsellor/dashboard'), 800);
            }}
            className="flex flex-col items-center justify-center p-3 border-2 border-sky-400 bg-sky-50 hover:bg-sky-400 rounded-xl transition-all duration-300 group"
          >
            <span className="text-2xl mb-1">🤝</span>
            <span className="text-xs font-bold text-slate-900 group-hover:text-white">Counsellor</span>
          </button>

          <button
            onClick={() => {
              setStatus('Logging in as Admin...');
              setTimeout(() => navigate('/admin/dashboard'), 800);
            }}
            className="flex flex-col items-center justify-center p-3 border-2 border-emerald-400 bg-emerald-50 hover:bg-emerald-400 rounded-xl transition-all duration-300 group"
          >
            <span className="text-2xl mb-1">⚙️</span>
            <span className="text-xs font-bold text-slate-900 group-hover:text-white">Admin</span>
          </button>
        </div>
        
        {status && <p className="text-center text-sm font-bold text-slate-500 mt-6 animate-pulse relative z-10">{status}</p>}
      </motion.div>
    </div>
  );
};

export default Login;
