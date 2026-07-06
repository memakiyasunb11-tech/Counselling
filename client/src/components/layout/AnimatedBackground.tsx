import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Configuration for the floating shapes
  const shapes = Array.from({ length: 40 }).map((_, i) => {
    const size = Math.random() * 15 + 5;
    const type = Math.random() > 0.6 ? 'circle' : Math.random() > 0.3 ? 'square' : 'triangle';
    
    // Pixelshield-like muted, earthy, and warm colors
    const colors = ['#F26522', '#FBBF24', '#38BDF8', '#34D399', '#A78BFA', '#F43F5E', '#94A3B8'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return {
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size,
      type,
      color,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
    };
  });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50 via-white to-orange-50/30 opacity-70"></div>
      
      {/* Floating Shapes */}
      {shapes.map((shape) => {
        let shapeStyle: React.CSSProperties = {
          width: shape.size,
          height: shape.size,
          backgroundColor: shape.type !== 'triangle' ? shape.color : 'transparent',
          position: 'absolute',
          top: `${shape.y}%`,
          left: `${shape.x}%`,
          opacity: 0.6,
        };

        if (shape.type === 'circle') {
          shapeStyle.borderRadius = '50%';
        } else if (shape.type === 'triangle') {
          shapeStyle = {
            ...shapeStyle,
            width: 0,
            height: 0,
            borderLeft: `${shape.size / 2}px solid transparent`,
            borderRight: `${shape.size / 2}px solid transparent`,
            borderBottom: `${shape.size}px solid ${shape.color}`,
            backgroundColor: 'transparent',
          };
        }

        return (
          <motion.div
            key={shape.id}
            style={shapeStyle}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              rotate: [0, 360, 0],
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
