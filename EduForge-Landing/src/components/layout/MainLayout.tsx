import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import KeyBenefits from './KeyBenefits';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-slate-900 font-sans relative overflow-x-hidden">
      {/* Soft warm radial gradients for background */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-100/50 via-[#FAFAFA]/0 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-[#FAFAFA]/0 to-transparent pointer-events-none -z-10" />

      <Navbar />
      <main className="flex-grow pt-24">
        {children || <Outlet />}
      </main>
      <KeyBenefits />
      <Footer />
    </div>
  );
};

export default MainLayout;
