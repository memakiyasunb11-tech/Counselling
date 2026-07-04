import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Registering...');
    setError('');
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Dynamically assign role based on email for testing purposes
      const lowerEmail = formData.email.toLowerCase();
      let userRole = 'student';
      if (lowerEmail.includes('admin')) {
        userRole = 'admin';
      } else if (lowerEmail.includes('counsellor')) {
        userRole = 'counsellor';
      }

      // Create a user document in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        role: userRole,
        createdAt: new Date().toISOString()
      });

      setStatus('Registration successful!');
      if (userRole === 'admin') navigate('/admin/dashboard');
      else if (userRole === 'counsellor') navigate('/counsellor/dashboard');
      else navigate('/student/dashboard');
    } catch (err: any) {
      console.error(err);
      setStatus('');
      setError(err.message || 'Failed to register account.');
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
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-[50px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 bg-sky-100 text-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <UserPlus size={32} />
          </div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-slate-900 tracking-tight">Create an Account</h2>
          <p className="mt-2 text-center text-sm text-slate-500 font-medium">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-sky-500 hover:text-sky-600 transition-colors">
              Log in here
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6 relative z-10" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                <input
                  type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
                  placeholder="John"
                  className="appearance-none relative block w-full px-4 py-3 border border-slate-200 bg-slate-50 placeholder-slate-400 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 focus:bg-white transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                <input
                  type="text" name="lastName" required value={formData.lastName} onChange={handleChange}
                  placeholder="Doe"
                  className="appearance-none relative block w-full px-4 py-3 border border-slate-200 bg-slate-50 placeholder-slate-400 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 focus:bg-white transition-all font-medium"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email address</label>
              <input
                type="email" name="email" required value={formData.email} onChange={handleChange}
                placeholder="e.g., student@eduforge.com"
                className="appearance-none relative block w-full px-4 py-3 border border-slate-200 bg-slate-50 placeholder-slate-400 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 focus:bg-white transition-all font-medium"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
              <input
                type="password" name="password" required value={formData.password} onChange={handleChange}
                placeholder="••••••••"
                className="appearance-none relative block w-full px-4 py-3 border border-slate-200 bg-slate-50 placeholder-slate-400 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 focus:bg-white transition-all font-medium"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 text-white font-bold rounded-xl bg-sky-500 hover:bg-sky-600 hover:-translate-y-0.5 shadow-lg shadow-sky-500/20 transition-all focus:outline-none"
            >
              Register
            </button>
          </div>
          {status && <p className="text-center text-sm font-bold text-sky-500">{status}</p>}
          {error && <p className="text-center text-sm font-bold text-red-500">{error}</p>}
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
