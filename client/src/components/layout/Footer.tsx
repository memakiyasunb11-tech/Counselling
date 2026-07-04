import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-xl font-extrabold text-slate-900 tracking-tight mb-4">
              <img src={logo} alt="EduFordge Logo" className="h-8 w-auto object-contain" />
              <span>EduFordge</span>
            </Link>
            <p className="mt-4 text-sm text-slate-500 font-medium leading-relaxed">
              Forge Your Future with Clarity. Career decisions, backed by science and expert mentorship.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/features" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">Career Counselling</Link></li>
              <li><Link to="/assessments" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">Psychometric Tests</Link></li>
              <li><Link to="/features" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">College Planning</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase">Subscribe</h3>
            <p className="mt-4 text-sm text-slate-500 font-medium">Get the latest career insights.</p>
            <div className="mt-4 flex">
              <input type="email" placeholder="Enter your email" className="w-full bg-slate-50 border border-slate-200 rounded-l-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
              <button className="bg-[#171717] hover:bg-[#262626] px-5 py-3 rounded-r-xl text-white text-sm font-bold transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-100 pt-8 flex items-center justify-between">
          <p className="text-sm text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} EduFordge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
