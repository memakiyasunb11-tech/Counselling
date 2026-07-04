import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #FFFFFF 60%, #FFF3EC 100%)' }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        {/* Decorative orange arcs — mimic the logo arc */}
        <motion.div
          className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(242,101,34,0.12) 0%, transparent 70%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute bottom-[-80px] left-[-80px] w-[320px] h-[320px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(242,101,34,0.08) 0%, transparent 70%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut', delay: 0.3 }}
        />

        {/* Star / sparkle decorations */}
        {[
          { top: '18%', left: '12%', size: 8, delay: 0.4 },
          { top: '72%', right: '15%', size: 6, delay: 0.7 },
          { top: '30%', right: '10%', size: 10, delay: 0.5 },
          { bottom: '20%', left: '18%', size: 7, delay: 0.9 },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              ...s,
              width: s.size,
              height: s.size,
              background: '#F26522',
              opacity: 0,
            }}
            animate={{ opacity: [0, 1, 0.5, 1], scale: [0.5, 1.2, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: s.delay, ease: 'easeInOut' }}
          />
        ))}

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo with orange glow ring */}
          <motion.div
            initial={{ y: -40, opacity: 0, scale: 0.6 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="relative mb-7"
          >
            {/* Pulsing orange glow behind logo */}
            <motion.div
              className="absolute inset-0 rounded-[28px]"
              style={{ background: 'rgba(242, 101, 34, 0.20)', filter: 'blur(18px)' }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            />
            <img
              src={logo}
              alt="EduFordge Logo"
              className="relative z-10 rounded-[24px] shadow-xl"
              style={{
                width: 128,
                height: 128,
                objectFit: 'contain',
                background: '#fff',
                padding: '8px',
                border: '2px solid rgba(242,101,34,0.20)',
              }}
            />
          </motion.div>

          {/* Brand name */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20, delay: 0.28 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight flex items-center gap-0"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span style={{ color: '#1A2B5F' }}>Edu</span>
            <motion.span
              style={{ color: '#F26522' }}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20, delay: 0.55 }}
            >
              Forge
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="mt-2 text-sm font-semibold tracking-[0.18em] uppercase"
            style={{ color: '#F26522', letterSpacing: '0.18em' }}
          >
            Learn &nbsp;|&nbsp; Grow &nbsp;|&nbsp; Succeed
          </motion.p>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-10 relative"
            style={{ width: 220 }}
          >
            <div
              className="rounded-full overflow-hidden"
              style={{ height: 4, background: 'rgba(242,101,34,0.15)' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #F26522, #FD8C4A)' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, delay: 1.1, ease: 'easeInOut' }}
              />
            </div>
            {/* Pulsing dots */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {[0, 0.18, 0.36].map((delay, i) => (
                <motion.div
                  key={i}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#F26522',
                  }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1, delay }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
