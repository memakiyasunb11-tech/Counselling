import React, { useState, useEffect } from 'react';

const TopBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 13, seconds: 21 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return prev;
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#F0EBE1] py-2 flex items-center justify-center gap-4 text-sm font-semibold">
      <div className="flex items-center gap-2 text-[#8c7a6b]">
        <span>🔥</span>
        <span>OFFER EXPIRES IN</span>
      </div>
      <div className="bg-[#EFE8DD] text-[#8c7a6b] px-3 py-1 rounded-md font-mono font-bold border border-[#E5DCCB]">
        {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
      </div>
      <div className="bg-[#D9A05B] text-white px-3 py-1 rounded-full text-xs tracking-wider uppercase shadow-sm">
        Only 11 Seats Left!
      </div>
    </div>
  );
};

export default TopBar;
