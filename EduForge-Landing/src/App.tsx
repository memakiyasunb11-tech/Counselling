import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="w-full min-h-screen font-sans bg-[#F9FAFB]">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
