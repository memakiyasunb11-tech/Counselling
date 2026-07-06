import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Authenticating...');
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user profile from Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role;

        setStatus('Login successful!');
        if (role === 'admin') navigate('/admin/dashboard');
        else if (role === 'counsellor') navigate('/counsellor/dashboard');
        else navigate('/student/dashboard');
      } else {
        throw new Error('User profile not found in database.');
      }
    } catch (err: any) {
      console.error(err);
      setStatus('');
      setError(err.message || 'Failed to login.');
    }
  };

  const handleDemoLogin = async (role: 'student' | 'counsellor' | 'admin') => {
    setStatus(`Authenticating demo ${role}...`);
    setError('');

    const demoEmail = `demo_account_${role}@EduFordge.com`;
    const demoPassword = 'password123';

    try {
      // Try logging in first
      try {
        await signInWithEmailAndPassword(auth, demoEmail, demoPassword);
      } catch (err: any) {
        // If the user doesn't exist, create it on the fly
        if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential' || err.code === 'auth/invalid-login-credentials') {
          const creds = await createUserWithEmailAndPassword(auth, demoEmail, demoPassword);
          await setDoc(doc(db, 'users', creds.user.uid), {
            uid: creds.user.uid,
            firstName: 'Demo',
            lastName: role,
            email: demoEmail,
            role: role,
            createdAt: new Date().toISOString()
          });
        } else {
          throw err;
        }
      }

      setStatus('Login successful!');
      if (role === 'admin') navigate('/admin/dashboard');
      else if (role === 'counsellor') navigate('/counsellor/dashboard');
      else navigate('/student/dashboard');

    } catch (err: any) {
      console.error(err);
      setStatus('');
      setError('Demo login failed: ' + err.message);
    }
  };

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

        <form className="mt-8 space-y-6 relative z-10" onSubmit={handleLogin}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g., yourname@email.com"
                className="appearance-none relative block w-full px-4 py-3 border border-slate-200 bg-slate-50 placeholder-slate-400 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all font-medium"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="appearance-none relative block w-full px-4 py-3 border border-slate-200 bg-slate-50 placeholder-slate-400 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition-all font-medium"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 text-white font-bold rounded-xl bg-amber-500 hover:bg-amber-600 hover:-translate-y-0.5 shadow-lg shadow-amber-500/20 transition-all focus:outline-none"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="relative mt-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-slate-500 font-bold">Or quick login as (Demo only)</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 relative z-10">
          <button
            onClick={() => handleDemoLogin('student')}
            className="flex flex-col items-center justify-center p-3 border-2 border-amber-400 bg-amber-50 hover:bg-amber-400 rounded-xl transition-all duration-300 group"
          >
            <span className="text-2xl mb-1">🎓</span>
            <span className="text-xs font-bold text-slate-900 group-hover:text-white">Student</span>
          </button>

          <button
            onClick={() => handleDemoLogin('counsellor')}
            className="flex flex-col items-center justify-center p-3 border-2 border-sky-400 bg-sky-50 hover:bg-sky-400 rounded-xl transition-all duration-300 group"
          >
            <span className="text-2xl mb-1">🤝</span>
            <span className="text-xs font-bold text-slate-900 group-hover:text-white">Counsellor</span>
          </button>

          <button
            onClick={() => handleDemoLogin('admin')}
            className="flex flex-col items-center justify-center p-3 border-2 border-emerald-400 bg-emerald-50 hover:bg-emerald-400 rounded-xl transition-all duration-300 group"
          >
            <span className="text-2xl mb-1">⚙️</span>
            <span className="text-xs font-bold text-slate-900 group-hover:text-white">Admin</span>
          </button>
        </div>

        {status && <p className="text-center text-sm font-bold text-amber-500 mt-6 animate-pulse relative z-10">{status}</p>}
        {error && <p className="text-center text-sm font-bold text-red-500 mt-6 relative z-10">{error}</p>}
      </motion.div>
    </div>
  );
};

export default Login;
