import React, { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, MessageSquare, FileText, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const SessionRoom: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans pt-16">
      
      {/* Top Bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/counsellor/dashboard" className="text-slate-500 hover:text-slate-900 font-medium">← Back</Link>
          <div className="h-6 w-px bg-slate-200"></div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              Career Counselling <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 text-xs uppercase tracking-wider">Live</span>
            </h1>
            <p className="text-sm text-slate-500 font-medium">Alex Johnson (12th Grade)</p>
          </div>
        </div>
        <div className="text-sm font-bold text-slate-400 bg-slate-100 px-4 py-2 rounded-lg">
          Time Elapsed: <span className="text-slate-700">14:22</span>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        
        {/* Main Video Area */}
        <div className="flex-1 p-6 flex flex-col bg-slate-900 relative">
          
          {/* Main Video (Student) */}
          <div className="flex-1 rounded-2xl overflow-hidden relative group bg-slate-800 flex items-center justify-center">
            <User size={120} className="text-slate-600" />
            <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur px-4 py-2 rounded-xl text-white font-medium flex items-center gap-2">
              Alex Johnson
            </div>
          </div>

          {/* Picture in Picture (Counsellor) */}
          <div className="absolute top-12 right-12 w-64 aspect-video bg-slate-700 rounded-xl overflow-hidden shadow-2xl border-2 border-slate-600 flex items-center justify-center">
             <User size={60} className="text-slate-500" />
             <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur px-2 py-1 rounded text-xs text-white font-medium">
              You
            </div>
          </div>

          {/* Controls */}
          <div className="h-24 shrink-0 flex items-center justify-center gap-4 mt-6">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isMuted ? 'bg-rose-500 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
            >
              {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
            </button>
            <button 
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isVideoOff ? 'bg-rose-500 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
            >
              {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
            </button>
            <Link to="/counsellor/dashboard" className="w-16 h-16 rounded-full flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white transition-all shadow-lg shadow-rose-500/20 ml-4">
              <PhoneOff size={28} />
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-96 bg-white border-l border-slate-200 flex flex-col shrink-0">
          
          {/* Tabs */}
          <div className="flex border-b border-slate-200">
            <button className="flex-1 py-4 border-b-2 border-amber-500 text-amber-600 font-bold flex items-center justify-center gap-2">
              <FileText size={18} /> Notes
            </button>
            <button className="flex-1 py-4 text-slate-500 font-medium hover:text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <MessageSquare size={18} /> Chat
            </button>
          </div>

          {/* Notes Area */}
          <div className="flex-1 p-6 flex flex-col">
            <h3 className="font-bold text-slate-900 mb-4">Psychometric Highlights</h3>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mb-6 text-sm text-slate-700 space-y-2">
              <p>• High Logical/Analytical reasoning.</p>
              <p>• Introverted but strong team-player.</p>
              <p>• Interest in Tech & Engineering fields.</p>
            </div>
            
            <h3 className="font-bold text-slate-900 mb-4">Session Notes</h3>
            <textarea 
              className="flex-1 w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-700 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 resize-none transition-all"
              placeholder="Type your notes here... (Auto-saved)"
            ></textarea>
            
            <button className="mt-4 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all shadow-md">
              Save Report
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SessionRoom;
