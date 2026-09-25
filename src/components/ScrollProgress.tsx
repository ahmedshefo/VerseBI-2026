import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const unsubscribeScroll = scrollY.on('change', (latest) => {
      setShowScrollTop(latest > 350);
    });

    const unsubscribeProgress = scrollYProgress.on('change', (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });

    return () => {
      unsubscribeScroll();
      unsubscribeProgress();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  // SVG circle calculations for progress ring
  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      {/* Top Hairline Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-300 z-50 origin-left pointer-events-none"
        style={{ scaleX: prefersReducedMotion ? undefined : scaleX }}
      />

      {/* Floating Scroll to Top & Radial Progress Trigger (Ergonomic thumb zone) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
          >
            <button
              onClick={scrollToTop}
              aria-label={`Scroll to top (${scrollPercent}% viewed)`}
              className="relative group p-2.5 min-w-[44px] min-h-[44px] rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-md shadow-xl shadow-black/40 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 hover:border-emerald-500/50"
            >
              {/* Radial Progress Ring SVG */}
              <svg className="w-10 h-10 -rotate-90 pointer-events-none absolute inset-0 m-auto" viewBox="0 0 44 44">
                <circle
                  cx="22"
                  cy="22"
                  r={radius}
                  className="text-slate-800"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="transparent"
                />
                <circle
                  cx="22"
                  cy="22"
                  r={radius}
                  className="text-emerald-400 transition-all duration-150 ease-out"
                  strokeWidth="2.5"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                />
              </svg>

              <ArrowUp className="w-4 h-4 text-emerald-400 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
