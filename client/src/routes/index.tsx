import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
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

const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: string[] }) => {
  const { user, profile, loading } = useAuthStore();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50"><div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div></div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && profile && !allowedRoles.includes(profile.role as string)) {
    // If user doesn't have the right role, send them to their own dashboard
    return <Navigate to={`/${profile.role}/dashboard`} replace />;
  }

  return <>{children}</>;
};

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
        <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route path="/student/dashboard" element={<ProtectedRoute allowedRoles={['student']}><StudentDashboard /></ProtectedRoute>} />
          <Route path="/counsellor/dashboard" element={<ProtectedRoute allowedRoles={['counsellor']}><CounsellorDashboard /></ProtectedRoute>} />
          <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
          <Route path="/assessments" element={<Assessments />} />
        </Route>

        {/* Standalone/Fullscreen Routes */}
        <Route path="/session-room" element={<ProtectedRoute><SessionRoom /></ProtectedRoute>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
