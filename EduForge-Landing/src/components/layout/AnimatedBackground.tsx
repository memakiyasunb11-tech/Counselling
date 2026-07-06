import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#ffffff]">
      {/* Soft gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-[#f8fafc]"></div>
      
      {/* Animated Glowing Orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-[0.15]"
        style={{ background: 'radial-gradient(circle, #ff6b00 0%, transparent 70%)', top: '-10%', left: '-10%' }}
        animate={{
          x: [0, 200, -100, 0],
          y: [0, 100, 300, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[120px] opacity-[0.1]"
        style={{ background: 'radial-gradient(circle, #0f2e5a 0%, transparent 70%)', top: '20%', right: '-10%' }}
        animate={{
          x: [0, -200, 100, 0],
          y: [0, -100, 200, 0],
          scale: [0.8, 1.2, 1, 0.8],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-[0.1]"
        style={{ background: 'radial-gradient(circle, #ff8c00 0%, transparent 70%)', bottom: '-20%', left: '20%' }}
        animate={{
          x: [0, 300, -200, 0],
          y: [0, -200, 100, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
    </div>
  );
};

export default AnimatedBackground;
