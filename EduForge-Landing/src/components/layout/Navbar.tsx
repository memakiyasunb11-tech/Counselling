import React from 'react';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full z-50 pt-4 px-4 sm:px-6 lg:px-8">
      <nav className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-2xl">
        <div className="flex justify-between items-center h-16 px-6">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="EduForge Logo" className="h-10 md:h-12 w-auto object-contain" />
            </a>

          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-amber-500 font-semibold text-sm">Home</a>
            <a href="#features" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Features</a>
            <a href="#assessments" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Assessments</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Pricing</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">About us</a>
            <a href="#blog" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Blog</a>
            <a href="#community" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Community</a>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#login" className="text-slate-600 hover:text-slate-900 text-sm font-medium">Log in</a>
            <a href="#contact" className="bg-[#171717] hover:bg-[#262626] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center space-x-2">
              <span>Book Consultation</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
