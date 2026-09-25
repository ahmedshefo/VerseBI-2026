import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Play, Pause, RotateCcw } from 'lucide-react';

export const DataTransformation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return true;
  });

  const steps = [
    {
      id: 0,
      label: 'RAW DATA',
      subtitle: 'Disparate & Unstructured',
      desc: 'Siloed events, transactional databases, CRM logs, and unstructured sensor feeds with missing values and schema noise.',
      stats: '1.2B unparsed events',
    },
    {
      id: 1,
      label: 'DATA PIPELINE',
      subtitle: 'Automated Cleansing & Orchestration',
      desc: 'Extracted, normalized, and schema-enforced with end-to-end data lineage tracking and validation guarantees.',
      stats: '100% schema compliance',
    },
    {
      id: 2,
      label: 'ANALYSIS',
      subtitle: 'Statistical & Multidimensional Modeling',
      desc: 'Cross-functional correlation, seasonal regression, trend decomposition, and feature engineering.',
      stats: '0.04s query latency',
    },
    {
      id: 3,
      label: 'INSIGHT',
      subtitle: 'Contextual Decision Logic',
      desc: 'Precise root-cause attribution, predictive trend forecasting, and executive anomaly detection.',
      stats: 'High-confidence alerts',
    },
    {
      id: 4,
      label: 'ACTION',
      subtitle: 'Automated Business Impact',
      desc: 'Synchronized workflows, triggered operational decisions, automated inventory adjustments, and resource optimization.',
      stats: 'Closed-loop execution',
    },
  ];

  // Auto-advance loop when playing with visibility support
  useEffect(() => {
    if (!isPlaying) return;

    let timer: NodeJS.Timeout | null = null;
    const startTimer = () => {
      if (typeof document !== 'undefined' && document.hidden) return;
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 3200);
    };

    const handleVisibility = () => {
      if (document.hidden && timer) {
        clearInterval(timer);
        timer = null;
      } else if (!document.hidden && isPlaying) {
        startTimer();
      }
    };

    startTimer();
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      if (timer) clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isPlaying, steps.length]);

  return (
    <section id="transformation" className="relative py-20 sm:py-28 bg-[#090d14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10 sm:mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            The Transformation Pipeline
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
            From Raw Data to Clear Decisions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Data is meaningless until it drives action. Experience how VerseBI unifies raw noise into decisive, automated business execution.
          </p>
        </motion.div>

        {/* Step Navigation Bar / Scrubber */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 sm:mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4"
        >
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto pb-2 sm:pb-0">
            {steps.map((st) => (
              <button
                key={st.id}
                onClick={() => {
                  setCurrentStep(st.id);
                  setIsPlaying(false);
                }}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  currentStep === st.id
                    ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <span>0{st.id + 1}.</span>
                <span>{st.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
              title={isPlaying ? 'Pause transformation' : 'Play transformation'}
              aria-label={isPlaying ? 'Pause transformation' : 'Play transformation'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                setCurrentStep(0);
                setIsPlaying(true);
              }}
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
              title="Reset flow"
              aria-label="Reset flow"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Interactive Visual Stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/70 border border-slate-800/90 rounded-2xl p-4 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-grid-dense opacity-20 pointer-events-none" />

          {/* Left / Visualization Canvas */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[300px] relative">
            <svg viewBox="0 0 540 260" className="w-full h-auto overflow-visible">
              <defs>
                <linearGradient id="flowPipeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="50%" stopColor="#22C55E" />
                  <stop offset="100%" stopColor="#4ADE80" />
                </linearGradient>
                <filter id="greenGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#4ade80" floodOpacity="0.7" />
                </filter>
              </defs>

              {/* Connecting Pipeline Guide Lines */}
              <line x1="50" y1="130" x2="490" y2="130" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
              <motion.line
                x1="50"
                y1="130"
                x2={50 + (currentStep / 4) * 440}
                y2="130"
                stroke="url(#flowPipeGrad)"
                strokeWidth="6"
                strokeLinecap="round"
                transition={{ duration: 0.5 }}
              />

              {/* Stage 0: RAW DATA (Scattered unorganized dots) */}
              <g className={`transition-opacity duration-500 ${currentStep === 0 ? 'opacity-100' : 'opacity-40'}`}>
                <circle cx="50" cy="130" r="16" fill="#334155" stroke="#64748B" strokeWidth="2" />
                {/* Random scattered noise dots */}
                {[
                  { cx: 35, cy: 95 },
                  { cx: 65, cy: 90 },
                  { cx: 30, cy: 165 },
                  { cx: 70, cy: 160 },
                  { cx: 20, cy: 130 },
                  { cx: 80, cy: 130 },
                ].map((d, i) => (
                  <circle
                    key={i}
                    cx={d.cx}
                    cy={d.cy}
                    r="3"
                    fill="#94A3B8"
                    className={currentStep === 0 ? 'animate-pulse' : ''}
                  />
                ))}
                <text x="50" y="185" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="monospace">
                  Raw Noise
                </text>
              </g>

              {/* Stage 1: PIPELINE (Organized structured queue) */}
              <g className={`transition-opacity duration-500 ${currentStep === 1 ? 'opacity-100' : 'opacity-40'}`}>
                <circle cx="160" cy="130" r="16" fill={currentStep >= 1 ? '#1E293B' : '#0F172A'} stroke="#38BDF8" strokeWidth="2" />
                {/* Aligned parallel queues */}
                <rect x="145" y="100" width="30" height="4" rx="2" fill="#38BDF8" />
                <rect x="145" y="112" width="30" height="4" rx="2" fill="#38BDF8" />
                <rect x="145" y="144" width="30" height="4" rx="2" fill="#38BDF8" />
                <rect x="145" y="156" width="30" height="4" rx="2" fill="#38BDF8" />
                <text x="160" y="185" textAnchor="middle" fill="#38BDF8" fontSize="11" fontFamily="monospace">
                  Pipeline
                </text>
              </g>

              {/* Stage 2: ANALYSIS (Correlated clustered nodes) */}
              <g className={`transition-opacity duration-500 ${currentStep === 2 ? 'opacity-100' : 'opacity-40'}`}>
                <circle cx="270" cy="130" r="16" fill={currentStep >= 2 ? '#1E293B' : '#0F172A'} stroke="#818CF8" strokeWidth="2" />
                {/* Dynamic mini bar chart emerging */}
                <rect x="256" y="112" width="5" height="18" fill="#818CF8" />
                <rect x="264" y="105" width="5" height="25" fill="#818CF8" />
                <rect x="272" y="98" width="5" height="32" fill="#A5B4FC" />
                <rect x="280" y="115" width="5" height="15" fill="#818CF8" />
                <text x="270" y="185" textAnchor="middle" fill="#818CF8" fontSize="11" fontFamily="monospace">
                  Analysis
                </text>
              </g>

              {/* Stage 3: INSIGHT (High-impact beacon) */}
              <g className={`transition-opacity duration-500 ${currentStep === 3 ? 'opacity-100' : 'opacity-40'}`}>
                <circle cx="380" cy="130" r="18" fill={currentStep >= 3 ? '#064E3B' : '#0F172A'} stroke="#34D399" strokeWidth="2.5" />
                <path d="M 374 130 L 379 135 L 387 125" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="380" y="185" textAnchor="middle" fill="#34D399" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  Insight
                </text>
              </g>

              {/* Stage 4: ACTION (Vibrant Green Execution Target) */}
              <g className={`transition-opacity duration-500 ${currentStep === 4 ? 'opacity-100' : 'opacity-40'}`}>
                <circle
                  cx="490"
                  cy="130"
                  r="22"
                  fill="#15803D"
                  stroke="#4ADE80"
                  strokeWidth="3"
                  filter={currentStep === 4 ? 'url(#greenGlow)' : 'none'}
                />
                <circle cx="490" cy="130" r="10" fill="#4ADE80" />
                <text x="490" y="185" textAnchor="middle" fill="#4ADE80" fontSize="12" fontFamily="monospace" fontWeight="bold">
                  ACTION
                </text>
              </g>

              {/* Live Traveling Spark Packet */}
              <motion.circle
                r="6"
                fill="#FFFFFF"
                filter="url(#greenGlow)"
                animate={{
                  cx: 50 + (currentStep / 4) * 440,
                  cy: 130,
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          {/* Right / Stage Explanatory Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-emerald-400 font-bold">
                STAGE 0{steps[currentStep].id + 1}
              </span>
              <span className="text-slate-600">/</span>
              <span className="text-xs font-mono text-slate-400">05</span>
            </div>

            <h3 className="text-2xl font-display font-extrabold text-white tracking-tight">
              {steps[currentStep].label}
            </h3>

            <p className="text-sm font-semibold text-emerald-400 mt-1">
              {steps[currentStep].subtitle}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mt-4">
              {steps[currentStep].desc}
            </p>

            <div className="mt-6 p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Stage Metric:</span>
              <span className="text-xs font-mono font-bold text-white">
                {steps[currentStep].stats}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
