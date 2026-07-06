import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star, Target, Compass, BookOpen, Globe, Briefcase, Award, MessageSquare } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const CounselingExtra: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) setOpenFaq(null);
    else setOpenFaq(index);
  };

  return (
    <div className="mt-24 flex flex-col gap-24">
      
      {/* Potential Grid */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Every Student Has Potential
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-500 max-w-2xl mx-auto">
            Choosing a career shouldn't feel confusing. We help you find your strengths through science, not guesswork.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Career Discovery', 'College Selection', 'Career Roadmap', 'Skill Gap Analysis', 'Study Abroad Guidance', 'Admission Assistance', 'Internship Guidance', 'Resume Building', 'Interview Preparation'].map((item, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-amber-500 font-mono font-bold text-lg">0{idx + 1}</span>
              <span className="text-slate-800 font-semibold">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Comprehensive Services */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Comprehensive Services
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Compass, title: 'Career Counselling', desc: 'One-on-one sessions built around your interests, aptitude and goals.' },
            { icon: Target, title: 'Psychometric Assessment', desc: 'Scientific testing to map your personality, intelligence and career fit.' },
            { icon: BookOpen, title: 'College Admission', desc: 'Helping you shortlist and get into the right universities and courses.' },
            { icon: Target, title: 'Career Planning', desc: 'A complete roadmap from Class 8 all the way through graduation.' },
            { icon: Globe, title: 'Study Abroad', desc: 'University selection, Visa guidance, Scholarships, Application support.' },
            { icon: Award, title: 'Skill Development', desc: 'Communication, Coding, AI literacy, and Leadership skills.' },
            { icon: Briefcase, title: 'Resume & LinkedIn', desc: 'Professional profile building made for first-time job seekers.' },
            { icon: MessageSquare, title: 'Interview Coaching', desc: 'Mock interviews and feedback from industry practitioners.' }
          ].map((srv, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-amber-200 hover:bg-amber-50/50 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-slate-700 group-hover:text-amber-500 transition-colors">
                <srv.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto w-full bg-white rounded-[3rem] p-10 md:p-16 border border-slate-200 shadow-xl">
        <div className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Why Choose Us
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-500">A ledger of what you get.</motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {[
            { title: 'Experienced career counsellors', desc: 'Years of practice guiding students across streams and stages.' },
            { title: 'Personalised guidance', desc: 'No two roadmaps look the same — yours is built around you.' },
            { title: 'AI career analysis', desc: 'Data-backed recommendations layered on top of human judgement.' },
            { title: 'Scientific psychometric tests', desc: 'Validated instruments, not quizzes borrowed from the internet.' },
            { title: '100+ career options', desc: 'Beyond the usual five — we map the full landscape.' },
            { title: 'Scholarship guidance', desc: "Helping you find and apply for the funding you're eligible for." },
            { title: 'Updated industry trends', desc: 'Guidance that reflects where the job market is actually going.' },
            { title: 'One-on-one mentoring', desc: 'A real relationship with your counsellor, not a call centre.' },
            { title: 'Affordable packages', desc: 'Plans built for families, not just institutions.' },
            { title: 'Lifetime career support', desc: 'We stay reachable well past your first placement.' }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="flex gap-4 items-start">
              <div className="text-amber-500 font-mono font-bold mt-1">{(idx + 1).toString().padStart(2, '0')}</div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Assessment Banner */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto w-full">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Find your ideal career in just 20 minutes.</h2>
            <p className="text-slate-400 text-lg mb-6">Our AI-powered psychometric assessment reads your personality, aptitude, interests and strengths, then recommends the career paths that actually suit you.</p>
            <div className="flex items-center gap-2 text-amber-400 font-mono text-sm font-semibold">
              <span>⏱ 20 minutes</span>
              <span>· Instant report</span>
              <span>· No cost to start</span>
            </div>
          </div>
          <div className="relative z-10 whitespace-nowrap">
            <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-xl font-bold shadow-lg shadow-amber-500/20 transition-all text-lg">
              Start Assessment
            </button>
          </div>
        </div>
      </motion.div>

      {/* Roadmap Timeline */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            The Process Roadmap
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-500">An actual sequence — each step depends on the one before it.</motion.p>
        </div>
        <div className="relative border-l-2 border-slate-200 ml-6 md:ml-0 md:pl-10 space-y-12">
          {[
            { title: 'Know yourself', desc: "An honest look at what you enjoy, and what you're good at." },
            { title: 'Career assessment', desc: 'Aptitude and personality mapped through a scientific test.' },
            { title: 'Expert counselling', desc: 'A counsellor interprets your results and talks it through with you.' },
            { title: 'Career roadmap', desc: 'A written plan with milestones, not just a list of suggestions.' },
            { title: 'College planning', desc: 'Shortlisting institutions and courses that match the plan.' },
            { title: 'Admission support', desc: 'Applications, deadlines and documentation, handled with you.' },
            { title: 'Skill development', desc: "Closing the gap between where you are and where you're headed." },
            { title: 'Successful career', desc: "Ongoing support well after you've started working." }
          ].map((step, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="relative">
              <div className="absolute -left-[35px] md:-left-[60px] top-0 w-12 h-12 bg-white border-2 border-amber-500 rounded-full flex items-center justify-center font-bold text-amber-600 shadow-sm z-10">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Audience & Domains */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Who We Guide</h2>
          <div className="flex flex-wrap gap-3">
            {['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12', 'Graduation', 'Post Graduation', 'Working Professionals', 'Career Switch', 'Study Abroad Aspirants'].map((chip, idx) => (
              <motion.span key={idx} variants={fadeInUp} className="px-4 py-2 border border-slate-200 bg-white rounded-full text-slate-700 font-medium text-sm hover:border-amber-400 hover:text-amber-600 transition-colors cursor-default shadow-sm">
                {chip}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore Domains</h2>
          <div className="flex flex-wrap gap-2">
            {['Engineering', 'Medical', 'Law', 'Commerce', 'Management', 'Design', 'Architecture', 'Data Science', 'Artificial Intelligence', 'Digital Marketing', 'Finance', 'Civil Services', 'Government Jobs', 'Defence', 'Hotel Management', 'Animation', 'Gaming', 'Psychology', 'Agriculture', 'Pharmacy', 'Chartered Accountancy', 'Teaching', 'Journalism', 'Mass Communication', 'Entrepreneurship'].map((domain, idx) => (
              <motion.span key={idx} variants={fadeInUp} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-600 text-xs font-medium hover:bg-amber-50 hover:border-amber-200 transition-colors cursor-default">
                {domain}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stories / Testimonials */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Success Stories
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { quote: "I was confused after Class 12. Counselling helped me find my passion in Data Science.", name: "Riya Patel", loc: "Ahmedabad" },
            { quote: "The psychometric assessment completely changed my career direction.", name: "Meet Shah", loc: "Vadodara" },
            { quote: "College guidance helped me get admission into my dream university.", name: "Krishna Patel", loc: "Surat" }
          ].map((t, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic font-medium text-lg leading-relaxed mb-8">"{t.quote}"</p>
              </div>
              <div>
                <div className="font-bold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500 font-mono">{t.loc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-slate-900 rounded-[3rem] p-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-slate-800">
          {[
            { num: '15,000+', lbl: 'Students Guided' },
            { num: '300+', lbl: 'Partner Colleges' },
            { num: '98%', lbl: 'Satisfaction' },
            { num: '500+', lbl: 'Sessions / Month' },
            { num: '50+', lbl: 'Certified Experts' }
          ].map((s, idx) => (
            <motion.div key={idx} variants={fadeInUp} className={idx === 0 || idx === 1 ? 'border-none' : ''}>
              <div className="text-3xl md:text-4xl font-extrabold text-amber-500 mb-2">{s.num}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">{s.lbl}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto w-full mb-12">
        <div className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Frequently Asked Questions
          </motion.h2>
        </div>
        <div className="space-y-4">
          {[
            { q: 'What is career counselling?', a: 'A structured process of understanding your interests, aptitude and personality, then matching them to suitable education and career paths.' },
            { q: 'Who should take career counselling?', a: 'Anyone from Class 8 onward — students choosing streams, graduates deciding on further study, and professionals considering a switch.' },
            { q: 'When should students start career planning?', a: "Earlier is easier, but there's no wrong time. Many students start around Class 9–10, before choosing a stream." },
            { q: 'How does the psychometric assessment work?', a: 'A 20-minute scientific test covering aptitude, interest and personality, followed by a counsellor-led discussion of your report.' },
            { q: 'Can parents join the counselling session?', a: 'Yes — we encourage it. Many decisions work best when parents and students are aligned on the plan.' },
            { q: 'How long does one session take?', a: 'A first session usually runs 45–60 minutes, including time to walk through your assessment report.' },
            { q: 'Do you provide online counselling?', a: 'Yes, sessions are available both online and in person depending on your location and preference.' },
            { q: 'Do you guide for study abroad?', a: 'Yes — university shortlisting, visa guidance, scholarships and application support are all part of our services.' }
          ].map((faq, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
              <button onClick={() => toggleFaq(idx)} className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-slate-50 transition-colors">
                <span className="font-bold text-slate-800">{faq.q}</span>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-slate-600"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
    </div>
  );
};

export default CounselingExtra;
