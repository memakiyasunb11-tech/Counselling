import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Briefcase } from 'lucide-react';
import { slideInLeft, staggerContainer, fadeInUp, floatAnimation, rotateIn } from '../utils/animations';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-32 pb-16 overflow-hidden">
          {/* Advanced Background Constructive Elements - Light Theme */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
        <motion.div 
          className="container mx-auto px-6 lg:px-12 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left"
            >
              {/* Floating Badge - Light Theme */}
              <motion.div
                variants={slideInLeft}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full px-5 py-2 mb-8 shadow-sm"
              >
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <span className="text-slate-700 text-sm font-bold tracking-wide">
                  Admissions Open 2026-2027
                </span>
              </motion.div>

              {/* Main Headline - Light Theme */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight flex flex-col">
                <div className="flex flex-wrap overflow-hidden">
                  {["Discover", "Your"].map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 * i }}
                      className="mr-4 inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex flex-wrap overflow-hidden mt-2 relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 relative flex flex-wrap">
                    {["True", "Career", "Path"].map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 + 0.1 * i }}
                        className="mr-4 inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                    <motion.svg 
                      className="absolute w-full h-4 -bottom-2 left-0 text-amber-400 z-[-1]" 
                      preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" 
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                    >
                      <path d="M0 50 Q 50 100 100 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
                    </motion.svg>
                  </span>
                </div>
              </h1>

              {/* Description - Light Theme */}
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed mb-10 font-medium"
              >
                Take expert-designed psychometric assessments and get personalized 1-on-1 career counseling to find the perfect college and career for your future.
              </motion.p>

              {/* CTA Buttons - Light Theme */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 mb-16">
                <Link to="/assessments" className="relative overflow-hidden group bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(251,191,36,0.4)] block text-center">
                  <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                    Take Assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                </Link>

                <Link to="/counseling" className="relative overflow-hidden group bg-white border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-lg hover:border-slate-300 block text-center">
                  <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                    Book Counseling
                  </span>
                </Link>
              </motion.div>

              {/* Social Proof - Light Theme */}
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden z-[${5-i}] shadow-sm`}>
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  <span className="text-slate-900 font-bold">10,000+</span> students guided
                </div>
              </motion.div>
            </motion.div>

            {/* Right Constructive UI Grid - Light Theme */}
            <motion.div 
              className="relative hidden lg:block h-[600px] w-full"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Center Main Card - Light Theme */}
              <motion.div 
                variants={rotateIn}
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[420px] bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 z-20 flex flex-col justify-between cursor-default transition-transform duration-300"
              >
                <div className="w-full h-48 bg-slate-100 rounded-2xl overflow-hidden mb-6 relative group">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" alt="Students" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">Psychometric Tests</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">Discover your strengths, interests, and personality with our scientifically backed assessments.</p>
                </div>
              </motion.div>

              {/* Floating Element 1 - Top Right - Light Theme */}
              <motion.div 
                variants={floatAnimation}
                className="absolute top-10 right-0 w-64 bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-slate-100 z-30"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-500 flex items-center justify-center">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">Expert Guidance</h4>
                    <p className="text-xs text-slate-500 mt-1 font-medium">1-on-1 Mentorship</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2 - Bottom Left - Light Theme */}
              <motion.div 
                variants={floatAnimation}
                style={{ animationDelay: '2s' } as any}
                className="absolute bottom-10 left-0 w-56 bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-slate-100 z-30"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-500 flex items-center justify-center">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">College Ready</h4>
                    <p className="text-xs text-slate-500 mt-1 font-medium">Admissions Support</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative Ring - Light Theme */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-slate-300/50 border-dashed z-10 animate-[spin_40s_linear_infinite]" 
              />

            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trust Metrics - Light Theme */}
      <section className="py-12 border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Students Guided', value: '10,000+' },
              { label: 'Mentors', value: '100+' },
              { label: 'School Partners', value: '50+' },
              { label: 'Satisfaction', value: '95%' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl font-black text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Media Section - Video & Photos */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
            >
              See the Impact
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 max-w-2xl mx-auto"
            >
              Discover how our counseling sessions are shaping futures. Watch our introduction video and explore moments from our success stories.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 group"
            >
              {/* Replace the src with actual counseling video embed URL */}
              <iframe 
                className="absolute inset-0 w-full h-full object-cover"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&mute=0" 
                title="Counseling Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-slate-900/10 pointer-events-none group-hover:bg-slate-900/0 transition-colors duration-300"></div>
            </motion.div>

            {/* Photo Gallery Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {[
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
              ].map((src, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className={`rounded-2xl overflow-hidden shadow-md border-2 border-white relative group ${i === 0 || i === 3 ? 'aspect-[4/5]' : 'aspect-square'}`}
                >
                  <img src={src} alt={`Counseling Session ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
