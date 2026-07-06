import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export const defaultPoints = [
    "Expert Mentorship from Industry Leaders",
    "AI-Powered Career & Psychometric Assessments",
    "Comprehensive College Admission Strategies",
    "Personalized Career Roadmap & Execution Plan",
    "Exclusive Access to Career Playbooks & Resources",
    "Dedicated Support Community for Continuous Growth",
    "1-on-1 Personalized Counseling Sessions",
    "Resume & Profile Building Workshops",
    "Strategic Extracurricular Activity Planning",
    "Scholarship Strategy & Financial Aid Guidance",
    "Interview Preparation & Mock Interviews",
    "Standardized Test Preparation Strategy",
    "Global University Selection & Shortlisting",
    "Visa & Immigration Application Assistance",
    "Internships & Summer Program Placements",
    "Alumni Networking & Industry Connections",
    "Mental Health & Exam Stress Management",
    "Time Management & Productivity Workshops",
    "Real-world Skill Development Tracking",
    "Post-Admission Orientation & Support"
  ];

const KeyBenefits: React.FC = () => {
  const [points, setPoints] = useState<string[]>(defaultPoints);

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const snap = await getDocs(collection(db, 'content_benefits'));
        if (!snap.empty) {
          setPoints(snap.docs.map(doc => doc.data().text as string));
        }
      } catch (err) {
        console.error("Failed to load KeyBenefits", err);
      }
    };
    fetchPoints();
  }, []);

  return (
    <section className="py-16 px-6 bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2e5a] mb-4 font-serif">Why Choose EduForge?</h2>
          <p className="text-[#475569] max-w-2xl mx-auto font-medium">
            Everything you need to gain clarity, build your roadmap, and secure your dream career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-[#e2e8f0]"
            >
              <CheckCircle2 className="text-[#ff6b00] shrink-0 mt-0.5" size={20} />
              <span className="text-[#334155] font-semibold text-sm leading-snug">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
