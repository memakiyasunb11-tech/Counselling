import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const blogPosts = [
  {
    id: 1,
    title: "10 Steps to Choosing the Right College for You",
    excerpt: "Navigating the college selection process can be overwhelming. Here's a comprehensive guide to help you find your perfect fit.",
    category: "College Planning",
    author: "Dr. Sarah Jenkins",
    date: "Aug 15, 2026",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Understanding Psychometric Assessments",
    excerpt: "What really goes into a psychometric test? Learn how these assessments unlock insights into your ideal career path.",
    category: "Assessments",
    author: "Mark Davis",
    date: "Aug 10, 2026",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Top Emerging Careers in Tech for 2030",
    excerpt: "Stay ahead of the curve. Discover the tech roles that will dominate the job market in the next decade.",
    category: "Career Insights",
    author: "Anita Patel",
    date: "Jul 28, 2026",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
            <span className="text-sky-600 text-sm font-bold tracking-widest uppercase">Latest Insights</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Blog</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Expert advice, industry trends, and student success stories to guide your educational journey.
          </motion.p>
        </motion.div>

        {/* Featured Post (First item in array) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto overflow-hidden">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-xs font-bold uppercase tracking-wider">
                  {blogPosts[0].category}
                </span>
                <div className="flex items-center text-slate-400 text-sm font-medium">
                  <Calendar size={14} className="mr-1" /> {blogPosts[0].date}
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-sky-600 transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                    <User size={20} />
                  </div>
                  <span className="font-bold text-slate-900">{blogPosts[0].author}</span>
                </div>
                <button type="button" onClick={() => alert('Full article coming soon!')} className="flex items-center text-sky-600 font-bold hover:text-sky-700 transition-colors cursor-pointer">
                  Read Article <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, idx) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + (idx * 0.1) }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:-translate-y-2 transition-all duration-300 group flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sky-600 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center text-slate-400 text-xs font-medium mb-3">
                  <Calendar size={14} className="mr-1" /> {post.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-sky-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm font-bold text-slate-900">{post.author}</span>
                  <button type="button" onClick={() => alert('Full article coming soon!')} className="text-sky-600 font-bold text-sm flex items-center hover:text-sky-700 cursor-pointer">
                    Read <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
