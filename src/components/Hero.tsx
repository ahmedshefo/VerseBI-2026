import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { HeroVisualization } from './HeroVisualization';

interface HeroProps {
  onExploreSolutions: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSolutions, onOpenContact }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Deep Technical Background */}
      <div className="absolute inset-0 bg-[#090d14] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Editorial Category Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-2 text-xs font-mono text-emerald-400 tracking-wider uppercase mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Data & AI Solutions</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400 font-normal">Analytics · Engineering · Automation</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1] text-balance"
            >
              Turn Data Into{' '}
              <span className="text-emerald-400">
                Intelligence.
              </span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mt-5 sm:mt-6 text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl font-sans"
            >
              Data-driven solutions and AI that help businesses understand, automate, and act.
              We build the systems that transform fragmented records into clear, operational decisions.
            </motion.p>

            {/* CTA Group: Strict Primary vs Secondary hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onExploreSolutions}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center gap-2 group hover:-translate-y-0.5"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-center"
              >
                Let's Talk
              </button>
            </motion.div>

            {/* Quiet Value Indicators (Clean typography, no cards) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-800/80 w-full grid grid-cols-3 gap-3 sm:gap-6"
            >
              <div>
                <p className="text-base sm:text-2xl font-bold font-mono text-white tracking-tight">Enterprise</p>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1">Scale & Governance</p>
              </div>
              <div>
                <p className="text-base sm:text-2xl font-bold font-mono text-emerald-400 tracking-tight">Deterministic</p>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1">Auditable Pipelines</p>
              </div>
              <div>
                <p className="text-base sm:text-2xl font-bold font-mono text-white tracking-tight">Custom AI</p>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1">Direct Operational Fit</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Abstract Data Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <HeroVisualization />
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#intro"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors p-2 hidden md:block"
        aria-label="Scroll to introduction"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
