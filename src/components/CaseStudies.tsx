import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, BarChart2, Layers, Cpu, CheckCircle } from 'lucide-react';

interface MetricItem {
  name: string;
  val: string;
}

interface DemoProject {
  id: string;
  title: string;
  label: string;
  domain: string;
  desc: string;
  metrics: MetricItem[];
  details: string;
}

export const CaseStudies: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<DemoProject | null>(null);

  // Escape key & body scroll lock for modal
  useEffect(() => {
    if (!selectedDemo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedDemo(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedDemo]);

  const demoProjects: DemoProject[] = [
    {
      id: 'cx-analytics',
      title: 'Customer Experience Analytics',
      label: 'Demo Project',
      domain: 'Telecommunications & Support',
      desc: 'Multimodal analysis synthesizing telephony metadata, chat transcripts, and resolution duration to surface latent churn indicators.',
      metrics: [
        { name: 'Classification Accuracy', val: '94.8%' },
        { name: 'Triage Latency', val: '0.8s' },
        { name: 'Resolution Uplift', val: '+22%' },
      ],
      details: 'Demonstrates automated speech-to-text tokenization, sentiment clustering, and real-time agent recommendation cards.',
    },
    {
      id: 'workforce-performance',
      title: 'Workforce Performance Analytics',
      label: 'Demo Project',
      domain: 'Professional Services',
      desc: 'Capacity forecasting and skill-allocation optimization dashboard connecting project management stores with timesheet records.',
      metrics: [
        { name: 'Utilization Balancing', val: '91.2%' },
        { name: 'Forecast Window', val: '12 Wks' },
        { name: 'Overtime Reduction', val: '18%' },
      ],
      details: 'Models project burn rates against resource skill availability to prevent burnout and operational bottlenecks.',
    },
    {
      id: 'sales-intelligence',
      title: 'Sales Intelligence Dashboard',
      label: 'Demo Project',
      domain: 'B2B Enterprise',
      desc: 'Executive decision-support dashboard evaluating deal stage progression, win-rate attribution, and revenue variance.',
      metrics: [
        { name: 'Pipeline Visibility', val: '100%' },
        { name: 'Variance Margin', val: '±2.4%' },
        { name: 'Cycle Compression', val: '-14 Days' },
      ],
      details: 'Integrates CRM records with invoice ERPs to provide a unified single-pane view of true enterprise revenue health.',
    },
    {
      id: 'operations-analytics',
      title: 'Operations Analytics & Dispatch',
      label: 'Demo Project',
      domain: 'Logistics & Supply Chain',
      desc: 'Real-time telemetry aggregation for fleet operations, dynamically routing dispatches based on weather and route congestion.',
      metrics: [
        { name: 'Dwell Time Drop', val: '26%' },
        { name: 'Fuel Optimization', val: '11.5%' },
        { name: 'On-Time SLA', val: '99.1%' },
      ],
      details: 'Simulates dispatch constraints across 500+ mobile assets with automated exception alerting.',
    },
    {
      id: 'ai-assistant',
      title: 'AI Business Assistant',
      label: 'Demo Project',
      domain: 'Cross-Enterprise BI',
      desc: 'Natural language querying interface enabling executives to query complex relational data stores using plain conversational English.',
      metrics: [
        { name: 'Semantic Precision', val: '98.2%' },
        { name: 'SQL Generation Speed', val: '310ms' },
        { name: 'Self-Serve Rate', val: '78%' },
      ],
      details: 'Bridges executive intuition with underlying SQL warehouses without requiring manual analyst ticket creation.',
    },
  ];

  return (
    <section id="case-studies" className="relative py-20 sm:py-28 bg-[#0b0f17] border-t border-slate-800">
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
            Reference Architectures
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
            Demonstrative Solutions & Proof-of-Concepts
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Explore functional solution demonstrations illustrating our data models, visualization layouts, and AI integration patterns.
          </p>
        </motion.div>

        {/* Demo Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((demo, idx) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-6 rounded-2xl bg-[#090d14]/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Clean unboxed indicator */}
                <div className="flex items-center justify-between text-xs font-mono mb-3 sm:mb-4">
                  <span className="text-emerald-400 font-medium">[{demo.label}]</span>
                  <span className="text-slate-500">{demo.domain}</span>
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {demo.title}
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed font-sans">
                  {demo.desc}
                </p>

                {/* Demonstrative Metrics */}
                <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-3">
                  {demo.metrics.map((m) => (
                    <div key={m.name}>
                      <p className="text-xs sm:text-sm font-mono font-bold text-white">{m.val}</p>
                      <p className="text-[10px] text-slate-400 leading-tight mt-1 truncate">{m.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4">
                <button
                  onClick={() => setSelectedDemo(demo)}
                  className="w-full min-h-[44px] py-2.5 px-3 text-xs font-mono font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <span>Architecture Specification</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Transparent Notice Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-slate-950/30 border border-dashed border-slate-800 flex flex-col justify-center items-center text-center min-h-[260px]"
          >
            <span className="text-xs font-mono text-slate-500 mb-2">Portfolio Roadmap</span>
            <h3 className="text-base font-display font-bold text-slate-300">
              Enterprise Case Studies
            </h3>
            <p className="text-xs text-slate-500 mt-2 max-w-xs leading-relaxed font-sans">
              Formal client impact studies will be published following complete multi-phase audits and mutual non-disclosure releases.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Demo Modal Preview */}
      <AnimatePresence>
        {selectedDemo && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl text-left"
            >
              <button
                onClick={() => setSelectedDemo(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <span>{selectedDemo.label.toUpperCase()}</span>
                <span>·</span>
                <span>{selectedDemo.domain}</span>
              </div>

              <h3 id="case-study-title" className="text-2xl font-display font-bold text-white mb-3">
                {selectedDemo.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                {selectedDemo.desc}
              </p>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Architectural Components:
                </p>
                <p className="text-xs font-mono text-slate-300 leading-relaxed">
                  {selectedDemo.details}
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedDemo(null)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
