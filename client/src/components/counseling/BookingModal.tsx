import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Clock, Video, FileText } from 'lucide-react';
import { floatAnimation } from '../../utils/animations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [sessionType, setSessionType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const resetAndClose = () => {
    setStep(1);
    setSessionType(null);
    setSelectedDate(null);
    setSelectedTime(null);
    onClose();
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={resetAndClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-2xl font-bold text-slate-900">
                {step === 1 && "Select Session Type"}
                {step === 2 && "Choose Date & Time"}
                {step === 3 && "Confirm Booking"}
              </h2>
              <button 
                onClick={resetAndClose}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="h-1 w-full bg-slate-100">
              <div 
                className="h-full bg-amber-400 transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>

            {/* Body */}
            <div className="p-8 overflow-y-auto">
              
              {/* Step 1: Session Type */}
              {step === 1 && (
                <div className="space-y-4">
                  {[
                    { id: 'general', title: 'General Counselling', desc: 'Discuss your academic progress, stress management, or general concerns.', icon: FileText, color: 'text-sky-500 bg-sky-100' },
                    { id: 'career', title: 'Career Counselling', desc: 'Deep dive into psychometric test results, university shortlisting, and career paths.', icon: Video, color: 'text-amber-500 bg-amber-100' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSessionType(type.id)}
                      className={`w-full text-left p-6 rounded-2xl border-2 transition-all flex items-start gap-6 group
                        ${sessionType === type.id 
                          ? 'border-amber-400 bg-amber-50/50 shadow-md' 
                          : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'}`}
                    >
                      <div className={`p-4 rounded-xl ${type.color} shrink-0`}>
                        <type.icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                        <p className="text-slate-500 font-medium">{type.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <CalendarIcon size={20} className="text-amber-500" /> Select Date
                    </h3>
                    <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                      {['Oct 14', 'Oct 15', 'Oct 16', 'Oct 17', 'Oct 18'].map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`shrink-0 px-6 py-4 rounded-xl font-bold border-2 transition-all
                            ${selectedDate === date 
                              ? 'border-amber-400 bg-amber-400 text-slate-900 shadow-md' 
                              : 'border-slate-100 text-slate-600 hover:border-amber-200 hover:bg-amber-50'}`}
                        >
                          <div className="text-sm opacity-80 mb-1">Mon</div>
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Clock size={20} className="text-sky-500" /> Available Times
                      </h3>
                      <div className="grid grid-cols-3 gap-3">
                        {['09:00 AM', '11:30 AM', '02:00 PM', '04:15 PM', '05:30 PM'].map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-xl font-bold border-2 text-sm transition-all
                              ${selectedTime === time 
                                ? 'border-sky-400 bg-sky-400 text-white shadow-md' 
                                : 'border-slate-100 text-slate-600 hover:border-sky-200 hover:bg-sky-50'}`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="text-center py-8">
                  <motion.div variants={floatAnimation} initial="hidden" animate="visible" className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Video size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to Book?</h3>
                  <p className="text-slate-500 font-medium mb-8">
                    You are booking a <strong className="text-slate-800">{sessionType === 'career' ? 'Career Counselling' : 'General Counselling'}</strong> session on <strong className="text-slate-800">{selectedDate} at {selectedTime}</strong>.
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left">
                    <p className="text-sm text-slate-500 mb-4">A video call link will be sent to your email and added to your dashboard.</p>
                    <textarea 
                      placeholder="Add any notes or specific topics you'd like to discuss... (optional)"
                      className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-700 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all resize-none h-24"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <button
                onClick={() => step > 1 ? setStep(step - 1) : resetAndClose()}
                className="px-6 py-3 text-slate-500 font-bold hover:text-slate-800 transition-colors"
              >
                {step === 1 ? 'Cancel' : 'Back'}
              </button>
              
              {step < 3 ? (
                <button
                  onClick={handleNext}
                  disabled={(step === 1 && !sessionType) || (step === 2 && (!selectedDate || !selectedTime))}
                  className={`px-8 py-3 rounded-xl font-bold transition-all shadow-md
                    ${((step === 1 && sessionType) || (step === 2 && selectedDate && selectedTime))
                      ? 'bg-amber-400 text-slate-900 hover:bg-amber-500 hover:-translate-y-0.5'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3 rounded-xl font-bold transition-all shadow-md bg-emerald-500 text-white hover:bg-emerald-600 hover:-translate-y-0.5"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
