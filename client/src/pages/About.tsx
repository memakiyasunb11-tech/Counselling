import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, BookOpen, Users, Monitor, Globe, Network, ArrowRight } from 'lucide-react';
import { slideInLeft, slideInRight, staggerContainer, fadeInUp, floatAnimation, pulseAnimation } from '../utils/animations';

// --- VISION SECTION COMPONENTS ---
const BrushCircle = ({ text }: { text: string }) => (
  <motion.div 
    variants={floatAnimation}
    initial="hidden"
    animate="visible"
    className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center shrink-0"
  >
    {/* Outer decorative strokes to simulate brush edges */}
    <div className="absolute inset-0 rounded-full border-[10px] border-orange-500/90 border-dashed animate-[spin_30s_linear_infinite]" style={{ borderRadius: '45% 55% 40% 60% / 55% 45% 60% 40%' }} />
    <div className="absolute inset-1 rounded-full border-[14px] border-amber-500/80 animate-[spin_25s_linear_infinite_reverse]" style={{ borderRadius: '50% 60% 55% 45% / 40% 50% 45% 60%' }} />
    <motion.div 
      variants={pulseAnimation}
      className="absolute inset-3 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.3)]" 
      style={{ borderRadius: '52% 48% 55% 45% / 48% 55% 45% 52%' }} 
    />
    
    {/* Inner White Circle */}
    <div className="absolute inset-[16px] bg-white shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] flex items-center justify-center z-10 overflow-hidden" style={{ borderRadius: '48% 52% 45% 55% / 55% 45% 52% 48%' }}>
      {/* Subtle inner gradient to give it a slightly spherical/paper feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.02)_100%)]" />
      <span 
        className="marker-font text-5xl md:text-[4.5rem] text-slate-900 font-black tracking-tight relative z-20" 
        style={{ transform: 'rotate(-4deg)' }}
      >
        {text}
      </span>
    </div>
    
    {/* Splatters & Accents to match the messy brush style */}
    <div className="absolute top-8 -right-3 w-3 h-6 bg-orange-500 rounded-full rotate-[30deg]" />
    <div className="absolute bottom-12 -left-4 w-4 h-8 bg-amber-400 rounded-full -rotate-12" />
    <div className="absolute -bottom-1 right-12 w-2 h-2 bg-yellow-400 rounded-full" />
    <div className="absolute top-1/3 -right-6 w-8 h-2 bg-orange-400 rounded-full rotate-45" />
    <div className="absolute top-2 left-12 w-2 h-2 bg-orange-300 rounded-full" />
  </motion.div>
);

// --- ABOUT SECTION DATA ---
const institutes = [
  {
    name: "Advanced Training Institutes (ATIs)",
    desc: "Now known as National Skill Training Institutes (NSTIs), located in major cities like Chennai, Mumbai, and Hyderabad, offering specialized vocational and instructor training.",
    icon: Building2,
    color: "from-blue-500 to-sky-400"
  },
  {
    name: "Indian Institute of Skills (IIS)",
    desc: "Premier institutes set up through government and corporate partnerships—such as IIS Ahmedabad—featuring state-of-the-art infrastructure and advanced labs.",
    icon: Award,
    color: "from-amber-500 to-yellow-400"
  },
  {
    name: "NIIT Limited",
    desc: "Headquartered in Gurugram, a global leader in IT and software talent development.",
    icon: Globe,
    color: "from-purple-500 to-indigo-400"
  },
  {
    name: "Don Bosco Tech Society",
    desc: "A pan-India network offering technical and vocational training to empower youth.",
    icon: Users,
    color: "from-emerald-500 to-teal-400"
  },
  {
    name: "E-Max Education",
    desc: "Widely recognized for its IT, hardware, and computer software training franchises across the country.",
    icon: Monitor,
    color: "from-rose-500 to-pink-400"
  },
  {
    name: "C-DAC Centers",
    desc: "Premier institutions under the Ministry of Electronics and Information Technology, specializing in advanced computing and software technologies.",
    icon: Network,
    color: "from-cyan-500 to-sky-400"
  },
  {
    name: "Industrial Training Institutes (ITIs)",
    desc: "State-governed networks providing fundamental to advanced trade certifications.",
    icon: BookOpen,
    color: "from-orange-500 to-amber-400"
  }
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent font-sans pb-32">
      {/* Import the Permanent Marker font for the circles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
          .marker-font { font-family: 'Permanent Marker', cursive; }
        `}
      </style>

      {/* --- VISION & MISSION SECTION --- */}
      <div className="relative overflow-hidden pt-32 pb-24">
        {/* Large Watermark Texts - Light Theme */}
        <div className="absolute top-24 left-10 md:left-20 text-[8rem] md:text-[14rem] font-bold text-slate-900/[0.03] select-none pointer-events-none tracking-tighter leading-none z-0">
          Vision
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[14rem] font-bold text-slate-900/[0.03] select-none pointer-events-none tracking-tighter leading-none z-0">
          Mission
        </div>
        <div className="absolute bottom-20 right-10 text-[8rem] md:text-[14rem] font-bold text-slate-900/[0.03] select-none pointer-events-none tracking-tighter leading-none z-0">
          Values
        </div>

        {/* Blurred Colored Background Circles - Light Theme */}
        <div className="absolute top-10 -left-40 w-[40rem] h-[40rem] bg-emerald-100/40 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-10 -right-20 w-[45rem] h-[45rem] bg-indigo-100/40 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/4 w-[30rem] h-[30rem] bg-amber-100/40 blur-[100px] rounded-full pointer-events-none z-0" />
        
        {/* MAIN CONTENT - VISION */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-32">
          
          {/* Row 1: Vision Card (Left) -> Vision Circle (Right) */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 group">
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center lg:justify-start"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}
            >
              <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 md:p-12 rounded-[2rem] shadow-xl w-full max-w-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-amber-400 rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl">👁️</span>
                </div>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-4">Our Vision</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  A leading institution to be benchmarked with design-centric research & bonafide innovation. 
                  The institution to provide Competent Leaders with Global Perspective. 
                  The institution to perpetuate academic excellence and promote knowledge-based spectrum. 
                  The institution to enhance practical relevance of Research & Development. 
                  The institution to contribute substantially to the rapid industrial and economic growth of the nation.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
            >
              <BrushCircle text="Vision" />
            </motion.div>
          </div>

          {/* Row 2: Mission Circle (Left) -> Mission Card (Right) */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 group">
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center lg:justify-start"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}
            >
              <BrushCircle text="Mission" />
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
            >
              <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 md:p-12 rounded-[2rem] shadow-xl w-full max-w-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-400">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-orange-500 rounded-2xl -rotate-12 flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-4">Our Mission</h3>
                <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium">
                  The institution to provide education par excellence and thoroughly professional training with its state-of-the-art facilities. 
                  The institution to create an environment for students where they always explore, discover and apply. 
                  The institution to craft, establish and sustain the futuristic infrastructure such as Technology Incubation Centre, Software Development Park, e-Training Facility, Hi-Tech Textile Design Centre. 
                  The institution to build a creative bond with industries, societies, intellectual bodies that share same myopic goals and broader objectives and responsibilities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- ABOUT SECTION --- */}
      <div className="relative pt-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header Section */}
          <motion.div 
            className="text-center mb-24 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
              <span className="text-sky-600 text-sm font-bold tracking-widest uppercase">About Us</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
              India’s Top Technical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Training Centres</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium">
              Discover the prestigious government-backed ITIs and advanced skill academies that provide specialized, job-oriented technical education across trades like IT, manufacturing, and engineering.
            </motion.p>
          </motion.div>

          {/* Premium Graphic Section */}
          <motion.div 
            className="mb-24 relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="aspect-[21/9] md:aspect-[21/7] relative group bg-slate-100">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80" alt="Modern University" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <div className="max-w-3xl">
                  <span className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-2 block">Our Legacy</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Empowering Generations of Innovators</h2>
                  <p className="text-slate-200 text-lg font-medium">With a network spanning across the country, we have successfully trained over 50,000+ professionals who are now leading the tech industry globally.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Grid Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {institutes.map((inst, idx) => {
              const IconComponent = inst.icon;
              const isFeatured = idx === 0;

              return (
                <motion.div 
                  key={idx} 
                  className={`group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl p-8 hover:-translate-y-2 transition-all duration-500
                    ${isFeatured ? 'lg:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-8' : 'flex flex-col'}`}
                  variants={fadeInUp}
                >
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-gradient-to-br ${inst.color}`}></div>
                  
                  {/* Icon Container with Floating effect on hover */}
                  <div className={`relative z-10 shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-100 group-hover:border-transparent transition-colors duration-500 mb-6 ${isFeatured ? 'md:mb-0 md:w-24 md:h-24 md:rounded-3xl' : ''}`}>
                    <div className={`absolute inset-0 rounded-inherit opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${inst.color}`}></div>
                    <IconComponent className={`w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-slate-800 transition-colors duration-300`} />
                    
                    {/* Rotating decorative border */}
                    <div className="absolute inset-[-2px] rounded-inherit border-2 border-transparent group-hover:border-slate-200 border-dashed animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="relative z-10 flex-1">
                    <h3 className={`font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${inst.color} transition-all duration-300
                      ${isFeatured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                      {inst.name}
                    </h3>
                    <p className={`text-slate-500 font-medium leading-relaxed group-hover:text-slate-700 transition-colors duration-300
                      ${isFeatured ? 'text-lg md:text-xl' : 'text-base'}`}>
                      {inst.desc}
                    </p>
                  </div>
                  
                  {/* Corner Decorative Element */}
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-500 text-slate-300">
                    <ArrowRight size={isFeatured ? 40 : 24} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
