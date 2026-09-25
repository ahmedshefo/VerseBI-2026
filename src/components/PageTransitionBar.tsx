import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageTransitionBarProps {
  isTransitioning: boolean;
}

export const PageTransitionBar: React.FC<PageTransitionBarProps> = ({ isTransitioning }) => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isTransitioning) {
      setVisible(true);
      setProgress(15);
      const t1 = setTimeout(() => setProgress(65), 60);
      const t2 = setTimeout(() => setProgress(90), 180);
      const t3 = setTimeout(() => setProgress(100), 280);
      const t4 = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 420);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    } else {
      setVisible(false);
      setProgress(0);
    }
  }, [isTransitioning]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 via-emerald-300 to-teal-300 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{
              duration: progress === 100 ? 0.12 : 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
