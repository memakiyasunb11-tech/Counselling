import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full z-50 pt-4 px-4 sm:px-6 lg:px-8">
      <nav className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-2xl">
        <div className="flex justify-between items-center h-16 px-6">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-xl font-extrabold text-slate-900 tracking-tight">
              <img src={logo} alt="EduFordge Logo" className="h-8 w-auto object-contain" />
              <span>EduFordge</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-amber-500 font-semibold text-sm">Home</Link>
            <Link to="/features" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Features</Link>
            <Link to="/assessments" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Assessments</Link>
            <Link to="/pricing" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Pricing</Link>
            <Link to="/about" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">About us</Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link to="/login" className="text-slate-600 hover:text-slate-900 text-sm font-medium">Log in</Link>
            <Link to="/contact" className="bg-[#171717] hover:bg-[#262626] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center space-x-2">
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
