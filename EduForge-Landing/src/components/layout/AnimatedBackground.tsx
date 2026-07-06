import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Configuration for the floating shapes (Confetti style but unique)
  const shapes = Array.from({ length: 60 }).map((_, i) => {
    const size = Math.random() * 10 + 4; // 4px to 14px
    const type = Math.random() > 0.5 ? 'rect' : 'circle';
    
    // EduForge brand colors: Navy, Orange, light Orange, and subtle grays
    const colors = ['#0f2e5a', '#ff6b00', '#ff8c00', '#94a3b8', '#cbd5e1'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return {
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size,
      type,
      color,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * -40,
      rotation: Math.random() * 360,
    };
  });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#ffffff]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-100 opacity-90"></div>
      
      {/* Floating Shapes */}
      {shapes.map((shape) => {
        const isRect = shape.type === 'rect';
        
        const shapeStyle: React.CSSProperties = {
          width: shape.size * (isRect ? (Math.random() * 1.5 + 1.5) : 1), // rectangles are slightly wider
          height: shape.size,
          backgroundColor: shape.color,
          position: 'absolute',
          top: `${shape.y}%`,
          left: `${shape.x}%`,
          opacity: Math.random() * 0.4 + 0.3,
          borderRadius: isRect ? '2px' : '50%',
        };

        return (
          <motion.div
            key={shape.id}
            style={shapeStyle}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 80 - 40, 0],
              rotate: [shape.rotation, shape.rotation + 360, shape.rotation],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "linear",
              delay: shape.delay,
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBackground;
