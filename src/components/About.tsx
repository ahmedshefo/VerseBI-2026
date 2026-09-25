import React from 'react';
import { motion } from 'motion/react';
import { VerseBILogo } from './VerseBILogo';
import { Shield, Layers, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#0b0f17] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Conceptual Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              About VerseBI
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Building the Intelligence Layer for Modern Business.
            </h2>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed font-sans">
              VerseBI focuses on helping organizations make better use of their data through analytics,
              business intelligence, AI, engineering, and automation.
            </p>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Modern enterprises do not suffer from a lack of data; they suffer from fragmented systems,
              manual processing bottlenecks, and black-box recommendations. We build robust, transparent
              intelligence foundations that connect data infrastructure directly to decisive operational action.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full pt-6 sm:pt-8 border-t border-slate-800">
              <div>
                <p className="text-xs font-mono text-emerald-400 uppercase font-semibold">Integrity</p>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans">
                  Zero black-box hallucinations. Verifiable analytical lineage.
                </p>
              </div>
              <div>
                <p className="text-xs font-mono text-emerald-400 uppercase font-semibold">Precision</p>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans">
                  Tailored domain modeling over one-size-fits-all generic templates.
                </p>
              </div>
              <div>
                <p className="text-xs font-mono text-emerald-400 uppercase font-semibold">Action</p>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans">
                  Every pipeline terminates in an automated or human decision point.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Architectural Identity Lockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="w-full max-w-sm rounded-2xl bg-[#090d14] border border-slate-800 p-6 sm:p-8 flex flex-col items-center justify-center text-center">
              <div className="my-4 sm:my-6">
                <VerseBILogo variant="mark" className="w-24 h-24 sm:w-32 sm:h-32" />
              </div>

              <div className="pt-6 border-t border-slate-800/80 w-full">
                <p className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                  Data · Intelligence · Action
                </p>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans">
                  Ascending data bars, integrated network nodes, and directional operational clarity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
