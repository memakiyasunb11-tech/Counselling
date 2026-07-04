import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Features from '../pages/Features';
import Pricing from '../pages/Pricing';
import Counseling from '../pages/Counseling';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import StudentDashboard from '../pages/dashboards/StudentDashboard';
import CounsellorDashboard from '../pages/dashboards/CounsellorDashboard';
import AdminDashboard from '../pages/dashboards/AdminDashboard';
import Assessments from '../pages/Assessments';
import CareerLibrary from '../pages/CareerLibrary';
import SessionRoom from '../pages/dashboards/SessionRoom';
import MainLayout from '../components/layout/MainLayout';
import DashboardLayout from '../components/layout/DashboardLayout';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Public Website Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/counseling" element={<Counseling />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/library/careers" element={<CareerLibrary />} />
        </Route>
        
        {/* Authenticated Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/counsellor/dashboard" element={<CounsellorDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/assessments" element={<Assessments />} />
        </Route>

        {/* Standalone/Fullscreen Routes */}
        <Route path="/session-room" element={<SessionRoom />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
