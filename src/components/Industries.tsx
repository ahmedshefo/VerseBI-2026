import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Landmark,
  Radio,
  ShoppingBag,
  HeartPulse,
  Truck,
  Users,
  Terminal,
  ArrowRight,
} from 'lucide-react';

export const Industries: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('telecom');

  const industries = [
    {
      id: 'telecom',
      name: 'Telecommunications',
      icon: Radio,
      headline: 'Network Telemetry & Customer Churn Prevention',
      desc: 'Turn operational and customer data into clearer performance insights. Monitor base-station capacity, SLA degradation, and subscriber churn risk in real-time.',
      metrics: ['Network Load Balance', 'Signal Latency Analysis', 'Subscriber Retention Models'],
    },
    {
      id: 'finance',
      name: 'Financial Services',
      icon: Landmark,
      headline: 'Auditable Risk Modeling & Regulatory Reporting',
      desc: 'Unify ledger entries, trade execution logs, and credit metrics into compliant BI dashboards and automated fraud-detection workflows.',
      metrics: ['Portfolio Exposure Tracking', 'Transaction Anomaly Detection', 'Audit-Ready Reporting'],
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: ShoppingBag,
      headline: 'Omnichannel Demand & Dynamic Inventory',
      desc: 'Connect point-of-sale systems, supply chain records, and digital store telemetry to predict stockouts and personalize conversion pathways.',
      metrics: ['Basket Composition Analysis', 'SKU Velocity Forecasting', 'Margin Optimization'],
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: HeartPulse,
      headline: 'Clinical Operational Capacity & Resource Allocation',
      desc: 'Streamline patient flow analytics, staff scheduling models, and medical inventory distribution while maintaining rigorous privacy governance.',
      metrics: ['Department Wait-Time Analytics', 'Bed Capacity Simulation', 'Equipment Utilization'],
    },
    {
      id: 'logistics',
      name: 'Logistics & Supply Chain',
      icon: Truck,
      headline: 'Fleet Telematics & Multimodal Route Intelligence',
      desc: 'Synthesize GPS feeds, fuel burn telemetry, carrier schedules, and weather interruptions to automate dispatch decisions.',
      metrics: ['Carrier SLA Compliance', 'Fuel & Route Efficiency', 'Terminal Dwell Forecasting'],
    },
    {
      id: 'cx',
      name: 'Customer Experience',
      icon: Users,
      headline: 'Voice-of-Customer & Omnichannel Sentiment',
      desc: 'Mine structured feedback, support tickets, and conversational transcripts with NLP models to eliminate service friction points.',
      metrics: ['CSAT Driver Attribution', 'First-Contact Resolution', 'Automated Triage Routing'],
    },
    {
      id: 'tech',
      name: 'Technology',
      icon: Terminal,
      headline: 'Product Usage Analytics & Infrastructure Economics',
      desc: 'Analyze cloud consumption telemetry, active user cohorts, and feature retention curves to inform engineering and growth investments.',
      metrics: ['Unit Economics by Feature', 'API Latency Distribution', 'Cohort Retention Modeling'],
    },
  ];

  const current = industries.find((i) => i.id === selectedIndustry) || industries[0];

  return (
    <section id="industries" className="relative py-20 sm:py-28 bg-[#0b0f17]">
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
            Domain Applications
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
            Engineered for High-Consequence Sectors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Data topologies and regulatory demands vary by industry. Here is how VerseBI tailors intelligence to specific operating models.
          </p>
        </motion.div>

        {/* Interactive Industry Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Responsive Industry Selector Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-2 sm:gap-1.5"
            role="tablist"
            aria-label="Target Industries"
          >
            {industries.map((ind) => {
              const isSelected = selectedIndustry === ind.id;
              const Icon = ind.icon;
              return (
                <button
                  key={ind.id}
                  id={`tab-${ind.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`industry-panel-${ind.id}`}
                  onClick={() => setSelectedIndustry(ind.id)}
                  onMouseEnter={() => setSelectedIndustry(ind.id)}
                  className={`w-full text-left p-3 sm:px-4 sm:py-3 rounded-xl lg:rounded-lg border transition-all duration-150 flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-emerald-400 min-h-[48px] ${
                    isSelected
                      ? 'bg-slate-900 border-slate-700 text-white shadow-sm'
                      : 'bg-[#090d14]/60 border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-900/40 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                    <span className="text-xs sm:text-sm font-semibold tracking-tight truncate">{ind.name}</span>
                  </div>

                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform duration-150 shrink-0 hidden sm:block ${
                      isSelected ? 'text-emerald-400 translate-x-0.5' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </motion.div>

          {/* Industry Focus & Abstract Data Graphic Viewport */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            id={`industry-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="lg:col-span-7 bg-[#0b0f17] border border-slate-800 rounded-2xl p-5 sm:p-8 relative min-h-[400px] flex flex-col justify-between w-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 flex flex-col h-full justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
                    <span>SECTOR SPECIFICATION</span>
                    <span className="text-slate-600">/</span>
                    <span>{current.name.toUpperCase()}</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                    {current.headline}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                    {current.desc}
                  </p>
                </div>

                {/* Abstract Sector Data Visualization Bars */}
                <div className="my-6 p-4 rounded-lg bg-slate-950/80 border border-slate-800/80">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Deployed Analytical Topologies:
                  </p>
                  <div className="space-y-2.5">
                    {current.metrics.map((m) => (
                      <div key={m} className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {m}
                        </span>
                        <span className="text-slate-400">Validated</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Custom Enterprise Semantic Schemas</span>
                  <span>Deterministic Data Pipelines</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
