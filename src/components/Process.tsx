import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, PenTool, Hammer, RefreshCw } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      icon: Compass,
      tag: 'Audit & Opportunity',
      desc: 'Understand the business problem, map available data sources, audit data quality, and define objective measurable outcomes.',
      deliverables: ['Data Topology Assessment', 'Objective Success Criteria', 'Architecture Road Map'],
    },
    {
      num: '02',
      title: 'Design',
      icon: PenTool,
      tag: 'Architecture & Modeling',
      desc: 'Define the data models, transformation pipelines, AI agent workflows, and reporting interfaces tailored to your team.',
      deliverables: ['Pipeline Blueprint', 'Semantic Layer Schema', 'UI & Dashboard Prototypes'],
    },
    {
      num: '03',
      title: 'Build',
      icon: Hammer,
      tag: 'Engineering & Integration',
      desc: 'Develop the pipelines, train or tune AI models, build BI reporting dashboards, and wire automated triggers into workflows.',
      deliverables: ['Production CI/CD Pipelines', 'Validated ML/BI Services', 'System Integrations'],
    },
    {
      num: '04',
      title: 'Evolve',
      icon: RefreshCw,
      tag: 'Optimization & Scale',
      desc: 'Monitor accuracy drift, fine-tune query performance, expand data integrations, and adapt to evolving business realities.',
      deliverables: ['Continuous Telemetry', 'Drift Monitoring', 'Iterative Feature Expansion'],
    },
  ];

  return (
    <section id="process" className="relative py-20 sm:py-28 bg-[#090d14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            Engagement Framework
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
            A Disciplined Path to Production Intelligence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            From initial data discovery through long-term continuous improvement, every phase is engineered for reliability and auditable value.
          </p>
        </motion.div>

        {/* Responsive Grid with Staggered Scroll Animations */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isSelected = activeStep === idx;

              return (
                <motion.div
                  key={st.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  onClick={() => setActiveStep(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveStep(idx);
                    }
                  }}
                  className={`cursor-pointer p-5 sm:p-6 rounded-2xl border transition-all duration-200 relative flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-emerald-400 min-h-[260px] ${
                    isSelected
                      ? 'bg-slate-900 border-slate-700 shadow-sm'
                      : 'bg-[#090d14]/70 border-slate-800/80 hover:bg-slate-900/40 hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Step Number and Icon */}
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        PHASE {st.num}
                      </span>
                      <Icon className="w-4 h-4 text-slate-500" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2">
                      {st.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {st.desc}
                    </p>
                  </div>

                  {/* Key Deliverables */}
                  <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-800/80">
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Outputs:
                    </p>
                    <ul className="space-y-1.5">
                      {st.deliverables.map((d) => (
                        <li key={d} className="text-xs text-slate-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span className="truncate">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
