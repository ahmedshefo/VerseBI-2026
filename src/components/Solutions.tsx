import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, TrendingUp, Cpu, HardDrive, Zap, ArrowRight } from 'lucide-react';
import { SolutionExplorer } from './SolutionExplorer';

export const Solutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<
    'bi' | 'analytics' | 'ai' | 'engineering' | 'automation'
  >('bi');

  const solutionCategories = [
    {
      id: 'bi' as const,
      num: '01',
      title: 'Business Intelligence',
      icon: BarChart3,
      tagline: 'Decision-Ready Dashboards & Reporting',
      desc: 'Power BI, dashboards, reporting, KPI monitoring, and decision-support analytics configured for executive clarity.',
    },
    {
      id: 'analytics' as const,
      num: '02',
      title: 'Data Analytics',
      icon: TrendingUp,
      tagline: 'Modeling, Forecasting & Root-Cause Insight',
      desc: 'Data modeling, statistical analysis, performance analytics, forecasting, and actionable insights to eliminate blind spots.',
    },
    {
      id: 'ai' as const,
      num: '03',
      title: 'AI Solutions',
      icon: Cpu,
      tagline: 'Applied Machine Intelligence & Agents',
      desc: 'AI-powered analysis, intelligent assistants, predictive solutions, and business-focused AI applications integrated directly into operations.',
    },
    {
      id: 'engineering' as const,
      num: '04',
      title: 'Data Engineering',
      icon: HardDrive,
      tagline: 'High-Throughput Pipelines & Lakehouses',
      desc: 'Data pipelines, integration, transformation, modern data platforms, and analytics-ready data foundations built for scale.',
    },
    {
      id: 'automation' as const,
      num: '05',
      title: 'Automation',
      icon: Zap,
      tagline: 'Intelligent Process & System Workflows',
      desc: 'Automating repetitive business processes and connecting disparate data, systems, and workflows without manual bottlenecks.',
    },
  ];

  return (
    <section id="solutions" className="relative py-20 sm:py-28 bg-[#0b0f17]">
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
            Core Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
            Enterprise Solutions for the Modern Intelligence Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Select a solution discipline below to inspect our architectural approach and real-time visualization model.
          </p>
        </motion.div>

        {/* Mobile Quick Discipline Selector (Horizontal Scroller for Touch Screens) */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6" role="tablist" aria-label="Quick solution selector">
          {solutionCategories.map((sol) => {
            const isSelected = selectedSolution === sol.id;
            return (
              <button
                key={`mobile-tab-${sol.id}`}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedSolution(sol.id)}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-mono whitespace-nowrap border transition-all flex items-center gap-2 shrink-0 ${
                  isSelected
                    ? 'bg-emerald-400 text-slate-950 font-bold border-emerald-400 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{sol.num}.</span>
                <span>{sol.title}</span>
              </button>
            );
          })}
        </div>

        {/* Master-Detail Layout: 5 Solutions on Left, Interactive Explorer on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Solution Selector List (Desktop + Detailed Mobile view) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col space-y-2.5"
            role="tablist"
            aria-label="Solutions disciplines"
          >
            {solutionCategories.map((sol) => {
              const isSelected = selectedSolution === sol.id;
              const Icon = sol.icon;

              return (
                <button
                  type="button"
                  id={`solution-tab-${sol.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="solution-explorer-stage"
                  key={sol.id}
                  onClick={() => setSelectedSolution(sol.id)}
                  onMouseEnter={() => setSelectedSolution(sol.id)}
                  className={`text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 relative group focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                    isSelected
                      ? 'bg-slate-900 border-slate-700 shadow-sm'
                      : 'bg-[#090d14]/60 border-slate-800/80 hover:bg-slate-900/40 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Editorial Number */}
                      <span
                        className={`text-sm sm:text-base font-mono font-bold transition-colors pt-0.5 ${
                          isSelected ? 'text-emerald-400' : 'text-slate-600 group-hover:text-slate-400'
                        }`}
                      >
                        {sol.num}
                      </span>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3
                            className={`text-sm sm:text-base font-bold font-display transition-colors ${
                              isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                            }`}
                          >
                            {sol.title}
                          </h3>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5">{sol.tagline}</p>
                        <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">{sol.desc}</p>
                      </div>
                    </div>

                    {/* Explore Indicator */}
                    <div
                      className={`p-1.5 rounded-md transition-all shrink-0 ${
                        isSelected
                          ? 'text-emerald-400'
                          : 'text-slate-600 group-hover:text-slate-400'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Dynamic Solution Explorer Stage (Sticky on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="solution-explorer-stage"
            role="tabpanel"
            aria-labelledby={`solution-tab-${selectedSolution}`}
            className="lg:col-span-6 lg:sticky lg:top-24 w-full"
          >
            <SolutionExplorer activeSolution={selectedSolution} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
