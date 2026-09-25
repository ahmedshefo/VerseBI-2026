import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VerseBILogo } from './VerseBILogo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(0);
  const [dismissed, setDismissed] = useState<boolean>(false);

  useEffect(() => {
    // If user prefers reduced motion, bypass immediately
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      onComplete();
      return;
    }

    // Escape key skips loading
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDismissed(true);
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Stage 1: Mark nodes activate
    const t1 = setTimeout(() => setStage(1), 300);
    // Stage 2: Bars illuminate & wordmark appears
    const t2 = setTimeout(() => setStage(2), 700);
    // Stage 3: Smooth dissolve
    const t3 = setTimeout(() => {
      setDismissed(true);
      setTimeout(onComplete, 400);
    }, 1400);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setDismissed(true);
    setTimeout(onComplete, 100);
  };

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070a0f] text-white"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
          <div className="absolute inset-0 bg-grid-dense opacity-20 pointer-events-none" />

          {/* Centered Logo Animation */}
          <div className="relative z-10 flex flex-col items-center px-4">
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <VerseBILogo
                variant="mark"
                className="w-24 h-24 md:w-28 md:h-28"
                animated={stage >= 1}
                glow={stage >= 1}
              />
            </motion.div>

            {/* Wordmark reveals */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: stage >= 2 ? 1 : 0, y: stage >= 2 ? 0 : 10 }}
              transition={{ duration: 0.4 }}
              className="mt-5 text-center"
            >
              <span className="font-display font-bold text-2xl md:text-3xl tracking-tight">
                <span className="text-white">Verse</span>
                <span className="text-emerald-400 ml-0.5 font-extrabold">BI</span>
              </span>
              <p className="text-xs text-slate-400 font-mono tracking-widest uppercase mt-1">
                Data & AI Solutions
              </p>
            </motion.div>

            {/* Progress line */}
            <div className="w-36 h-0.5 bg-slate-800 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: stage === 0 ? '25%' : stage === 1 ? '70%' : '100%' }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="h-full bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)]"
              />
            </div>
          </div>

          {/* Skip button in bottom corner */}
          <button
            onClick={handleSkip}
            className="absolute bottom-6 right-6 text-xs text-slate-500 hover:text-slate-300 font-mono transition-colors"
          >
            Skip →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
