import React, { useState } from 'react';
import { motion } from 'framer-motion';

const mockQuestions = [
  { id: 1, text: 'I enjoy solving complex mathematical problems.', trait: 'Numerical Aptitude' },
  { id: 2, text: 'I like organizing events and leading teams.', trait: 'Leadership' },
  { id: 3, text: 'I often think about how things work mechanically.', trait: 'Mechanical Aptitude' },
];

const Assessments: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [completed, setCompleted] = useState(false);

  const handleSelect = (val: number) => {
    setAnswers({ ...answers, [currentQuestion]: val });
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Assessment Completed!</h2>
          <p className="text-slate-500 mb-8 font-medium">Your responses have been saved. Your counsellor will review them and generate your personalized report shortly.</p>
          <button className="bg-amber-400 hover:bg-amber-500 px-6 py-3 rounded-xl text-slate-900 font-bold shadow-lg transition-all">
            Go to Dashboard
          </button>
        </motion.div>
      </div>
    );
  }

  const q = mockQuestions[currentQuestion];
  const progress = ((currentQuestion) / mockQuestions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto px-4 py-32">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Comprehensive Psychometric Test</h1>
        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden shadow-inner">
          <div className="bg-amber-400 h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-sm text-slate-500 mt-3 font-bold uppercase tracking-wider">Question {currentQuestion + 1} of {mockQuestions.length}</p>
      </div>

      <motion.div 
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-xl"
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-8">{q.text}</h2>
        <div className="space-y-4">
          {[
            { label: 'Strongly Agree', val: 5 },
            { label: 'Agree', val: 4 },
            { label: 'Neutral', val: 3 },
            { label: 'Disagree', val: 2 },
            { label: 'Strongly Disagree', val: 1 },
          ].map(opt => (
            <button
              key={opt.val}
              onClick={() => handleSelect(opt.val)}
              className="w-full text-left px-6 py-4 rounded-xl border-2 border-slate-100 hover:border-amber-300 hover:bg-amber-50 hover:shadow-md text-slate-600 hover:text-slate-900 font-medium transition-all flex items-center justify-between group"
            >
              <span>{opt.label}</span>
              <span className="w-5 h-5 rounded-full border-2 border-slate-300 group-hover:border-amber-400 group-hover:bg-white flex items-center justify-center"></span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Assessments;
