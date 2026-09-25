import React from 'react';
import { motion } from 'motion/react';
import { VerseBILogo } from './VerseBILogo';

export const TrustIntro: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Business Intelligence',
      desc: 'Actionable executive dashboards, reporting, and KPI governance configured for boardroom clarity.',
    },
    {
      num: '02',
      title: 'Data Engineering',
      desc: 'Resilient pipelines, automated extraction, and clean data architectures built for high-throughput integrity.',
    },
    {
      num: '03',
      title: 'Applied AI & Models',
      desc: 'Predictive intelligence, specialized assistants, and contextual inference without black-box drift.',
    },
    {
      num: '04',
      title: 'Process Automation',
      desc: 'Direct connections linking analytical outputs into operational systems for closed-loop execution.',
    },
  ];

  return (
    <section id="intro" className="relative py-20 sm:py-32 bg-[#0c1017] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Statement Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            Core Philosophy
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
            Where Data Meets Intelligence.
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-balance">
            VerseBI brings together data analytics, business intelligence, automation, and AI to help
            organizations turn complex information into actionable insight.
          </p>
        </motion.div>

        {/* Minimalist Editorial 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 sm:gap-x-10 gap-y-8 sm:gap-y-12 pt-8 border-t border-slate-800">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <span className="text-xs font-mono text-emerald-400/80 tracking-wider mb-2 sm:mb-3">
                [{pillar.num}]
              </span>
              <h3 className="text-lg font-display font-bold text-white tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-2.5 sm:mt-3 text-sm text-slate-400 leading-relaxed font-sans">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Factual Architectural Standards Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 sm:mt-20 pt-6 sm:pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <p className="text-sm font-medium text-slate-200">
              High-Stakes Decision Support — Grounded in auditable lineage and production-grade security.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-mono text-slate-400">
            <span>Deterministic Metrics</span>
            <span className="text-slate-700">·</span>
            <span>Enterprise Schemas</span>
            <span className="text-slate-700">·</span>
            <span>End-to-End Governance</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

