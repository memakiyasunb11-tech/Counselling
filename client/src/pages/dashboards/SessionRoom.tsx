import React, { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, MessageSquare, FileText, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const SessionRoom: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    <div className="h-screen bg-slate-100 flex flex-col font-sans pt-16">
      
      {/* Top Bar */}
      <div className="bg-white border-b border-slate-200 px-4 lg:px-6 py-3 lg:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 shrink-0">
        <div className="flex items-center gap-3 lg:gap-4">
          <Link to="/counsellor/dashboard" className="text-slate-500 hover:text-slate-900 font-medium text-sm lg:text-base whitespace-nowrap">← Back</Link>
          <div className="h-5 lg:h-6 w-px bg-slate-200"></div>
          <div>
            <h1 className="text-base lg:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="hidden sm:inline">Career Counselling</span>
              <span className="sm:hidden">Counselling</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 text-[10px] lg:text-xs uppercase tracking-wider">Live</span>
            </h1>
            <p className="text-xs lg:text-sm text-slate-500 font-medium">Alex Johnson (12th Grade)</p>
          </div>
        </div>
        <div className="text-xs lg:text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg self-end sm:self-auto">
          Time Elapsed: <span className="text-slate-700">14:22</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Main Video Area */}
        <div className="flex-1 p-2 sm:p-4 lg:p-6 flex flex-col bg-slate-900 relative">
          
          {/* Main Video (Student) */}
          <div className="flex-1 rounded-xl lg:rounded-2xl overflow-hidden relative group bg-slate-800 flex items-center justify-center">
            <User className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-slate-600" />
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-6 lg:left-6 bg-slate-900/80 backdrop-blur px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg lg:rounded-xl text-white font-medium flex items-center gap-2 text-xs sm:text-sm lg:text-base">
              Alex Johnson
            </div>
          </div>

          {/* Picture in Picture (Counsellor) */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-12 lg:right-12 w-24 sm:w-40 lg:w-64 aspect-video bg-slate-700 rounded-lg lg:rounded-xl overflow-hidden shadow-2xl border border-slate-600 flex items-center justify-center">
             <User className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-slate-500" />
             <div className="absolute bottom-1 left-1 lg:bottom-2 lg:left-2 bg-slate-900/80 backdrop-blur px-1.5 py-0.5 lg:px-2 lg:py-1 rounded text-[10px] lg:text-xs text-white font-medium">
              You
            </div>
          </div>

          {/* Controls */}
          <div className="h-16 sm:h-20 lg:h-24 shrink-0 flex items-center justify-center gap-3 lg:gap-4 mt-2 sm:mt-4 lg:mt-6">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all ${isMuted ? 'bg-rose-500 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
            >
              {isMuted ? <MicOff className="w-5 h-5 sm:w-6 sm:h-6" /> : <Mic className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
            <button 
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all ${isVideoOff ? 'bg-rose-500 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
            >
              {isVideoOff ? <VideoOff className="w-5 h-5 sm:w-6 sm:h-6" /> : <Video className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
            <Link to="/counsellor/dashboard" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white transition-all shadow-lg shadow-rose-500/20 ml-2 lg:ml-4">
              <PhoneOff className="w-6 h-6 sm:w-7 sm:h-7" />
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full h-[40vh] sm:h-[50vh] lg:h-auto lg:w-96 bg-white border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col shrink-0">
          
          {/* Tabs */}
          <div className="flex border-b border-slate-200 shrink-0">
            <button className="flex-1 py-3 lg:py-4 border-b-2 border-amber-500 text-amber-600 font-bold flex items-center justify-center gap-2 text-sm lg:text-base">
              <FileText className="w-4 h-4 lg:w-5 lg:h-5" /> Notes
            </button>
            <button className="flex-1 py-3 lg:py-4 text-slate-500 font-medium hover:text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-sm lg:text-base">
              <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5" /> Chat
            </button>
          </div>

          {/* Notes Area */}
          <div className="flex-1 p-4 lg:p-6 flex flex-col overflow-y-auto">
            <h3 className="font-bold text-slate-900 mb-2 lg:mb-4 text-sm lg:text-base">Psychometric Highlights</h3>
            <div className="bg-amber-50 rounded-xl p-3 lg:p-4 border border-amber-100 mb-4 lg:mb-6 text-xs lg:text-sm text-slate-700 space-y-1 lg:space-y-2 shrink-0">
              <p>• High Logical/Analytical reasoning.</p>
              <p>• Introverted but strong team-player.</p>
              <p>• Interest in Tech & Engineering fields.</p>
            </div>
            
            <h3 className="font-bold text-slate-900 mb-2 lg:mb-4 text-sm lg:text-base">Session Notes</h3>
            <textarea 
              className="flex-1 w-full bg-slate-50 border border-slate-200 rounded-xl p-3 lg:p-4 text-sm lg:text-base text-slate-700 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 resize-none transition-all min-h-[100px]"
              placeholder="Type your notes here... (Auto-saved)"
            ></textarea>
            
            <button className="mt-4 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 lg:py-3 rounded-xl transition-all shadow-md text-sm lg:text-base shrink-0">
              Save Report
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SessionRoom;
