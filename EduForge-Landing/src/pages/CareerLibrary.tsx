import React from 'react';
import { motion } from 'framer-motion';

const mockCareers = [
  { title: 'Data Scientist', category: 'Technology', salary: '$100k - $150k', growth: 'High' },
  { title: 'Clinical Psychologist', category: 'Healthcare', salary: '$80k - $120k', growth: 'Medium' },
  { title: 'Investment Banker', category: 'Finance', salary: '$120k - $200k', growth: 'High' },
];

const CareerLibrary: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Career Library</h1>
        <p className="text-xl text-gray-400">Explore comprehensive guides on 500+ career paths.</p>
        
        <div className="mt-8 max-w-2xl mx-auto flex">
          <input 
            type="text" placeholder="Search careers (e.g., Software Engineer, Doctor)"
            className="flex-grow bg-[#1E293B] border border-white/10 rounded-l-xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500"
          />
          <button className="bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-r-xl text-white font-medium">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mockCareers.map((career, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#1E293B] border border-white/10 p-6 rounded-2xl hover:border-indigo-500 transition-colors group cursor-pointer"
          >
            <div className="text-xs text-indigo-400 font-medium mb-2 uppercase tracking-wider">{career.category}</div>
            <h3 className="text-xl font-bold text-white mb-4">{career.title}</h3>
            
            <div className="flex justify-between items-center text-sm text-gray-400 mb-6">
              <div>
                <span className="block text-gray-500 text-xs">Avg. Salary</span>
                <span className="text-white font-medium">{career.salary}</span>
              </div>
              <div>
                <span className="block text-gray-500 text-xs">Growth</span>
                <span className="text-emerald-400 font-medium">{career.growth}</span>
              </div>
            </div>

            <div className="text-indigo-400 text-sm font-medium group-hover:text-indigo-300 flex items-center">
              Explore Career <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerLibrary;
