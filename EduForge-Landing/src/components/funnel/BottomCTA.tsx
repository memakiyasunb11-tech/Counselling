import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const BottomCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky bottom CTA after scrolling past the hero (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 w-full z-50 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="max-w-4xl mx-auto mb-6 px-4">
        <div className="bg-[#1A1816] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between shadow-2xl border border-[#332e29]">
          
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <div className="bg-white rounded-lg p-2 h-12 flex items-center justify-center">
              <img src={logo} alt="EduForge Logo" className="h-8 object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="text-[#f1f5f9] font-medium text-sm">Register, show up, and leave with a plan.</p>
              <p className="text-[#475569] text-xs mt-0.5">No pre-work. No complicated onboarding.</p>
            </div>
          </div>

          <Link 
            to="/checkout"
            className="w-full sm:w-auto bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] hover:from-[#ffa333] hover:to-[#ff8533] text-[#1A1816] font-bold py-3 px-8 rounded-xl shadow-[0_4px_14px_0_rgba(241,196,15,0.39)] transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap text-center"
          >
            REGISTER NOW FOR ₹149/- <span className="line-through text-[#475569] ml-1 text-xs">₹4,000</span>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default BottomCTA;
