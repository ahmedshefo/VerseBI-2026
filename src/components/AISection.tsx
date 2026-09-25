import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VerseBILogo } from './VerseBILogo';
import { BrainCircuit, Search, Eye, Sparkles, Network } from 'lucide-react';

export const AISection: React.FC = () => {
  const [activeOrbital, setActiveOrbital] = useState<string>('MODELS');

  const orbitals = [
    {
      id: 'DATA',
      label: 'DATA',
      angle: 0,
      detail: 'Aggregates multi-source transactional, telemetry, and qualitative records into canonical feature vectors.',
    },
    {
      id: 'MODELS',
      label: 'MODELS',
      angle: 60,
      detail: 'Fine-tuned domain architectures, predictive regression, and language reasoning models tuned for enterprise tasks.',
    },
    {
      id: 'SYSTEMS',
      label: 'SYSTEMS',
      angle: 120,
      detail: 'Deep bidirectional integrations across ERPs, CRMs, data lakes, and proprietary transactional APIs.',
    },
    {
      id: 'WORKFLOWS',
      label: 'WORKFLOWS',
      angle: 180,
      detail: 'Autonomous decision loops and human-in-the-loop triggers that execute without operational drag.',
    },
    {
      id: 'INSIGHTS',
      label: 'INSIGHTS',
      angle: 240,
      detail: 'Verifiable conclusions, root-cause diagnostics, and strategic forecasting delivered to executives.',
    },
    {
      id: 'PEOPLE',
      label: 'PEOPLE',
      angle: 300,
      detail: 'Intuitive natural-language queries, custom reporting views, and role-based decision transparency.',
    },
  ];

  const capabilities = [
    {
      title: 'Understand',
      desc: 'Analyze complex information across unstructured documents, relational stores, and real-time event streams.',
    },
    {
      title: 'Predict',
      desc: 'Identify latent patterns, forecast operational shifts, and simulate prospective scenarios with statistical rigor.',
    },
    {
      title: 'Automate',
      desc: 'Turn insights into actions through autonomous pipelines, event-triggered notifications, and system dispatches.',
    },
  ];

  return (
    <section id="ai-architecture" className="relative py-20 sm:py-28 bg-[#070a0f] border-t border-slate-800/80 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-dense opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            System Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
            Intelligence Built Around Your Business.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Rather than generic wrappers, VerseBI embeds intelligence directly between your core data assets, operating systems, and human leadership.
          </p>
        </motion.div>

        {/* Central Radial Network Node Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Radial Node Graphic (SVG Interactive) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-center justify-center p-4 sm:p-6 bg-slate-950/70 border border-slate-800/90 rounded-2xl relative min-h-[380px] sm:min-h-[420px]"
          >
            <svg viewBox="0 0 500 500" className="w-full max-w-md h-auto overflow-visible">
              <defs>
                <filter id="aiGlow">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#4ade80" floodOpacity="0.4" />
                </filter>
              </defs>

              {/* Orbital Rings */}
              <circle cx="250" cy="250" r="170" fill="none" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="250" cy="250" r="100" fill="none" stroke="#1E293B" strokeWidth="1" />

              {/* Lines connecting Central Node to each Orbital */}
              {orbitals.map((orb) => {
                const rad = (orb.angle * Math.PI) / 180;
                const ox = 250 + 170 * Math.cos(rad);
                const oy = 250 + 170 * Math.sin(rad);
                const isSelected = activeOrbital === orb.id;

                return (
                  <line
                    key={`line-${orb.id}`}
                    x1="250"
                    y1="250"
                    x2={ox}
                    y2={oy}
                    stroke={isSelected ? '#4ADE80' : '#334155'}
                    strokeWidth={isSelected ? '2.5' : '1'}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Center VerseBI Intelligence Core */}
              <g className="cursor-pointer">
                <circle cx="250" cy="250" r="48" fill="#0B131E" stroke="#34D399" strokeWidth="2.5" filter="url(#aiGlow)" />
                <foreignObject x="220" y="220" width="60" height="60">
                  <div className="w-full h-full flex items-center justify-center">
                    <VerseBILogo variant="mark" className="w-10 h-10" />
                  </div>
                </foreignObject>
              </g>

              {/* Orbital Nodes */}
              {orbitals.map((orb) => {
                const rad = (orb.angle * Math.PI) / 180;
                const ox = 250 + 170 * Math.cos(rad);
                const oy = 250 + 170 * Math.sin(rad);
                const isSelected = activeOrbital === orb.id;

                return (
                  <g
                    key={orb.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${orb.label} layer`}
                    aria-pressed={isSelected}
                    className="cursor-pointer group focus:outline-none"
                    onClick={() => setActiveOrbital(orb.id)}
                    onMouseEnter={() => setActiveOrbital(orb.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveOrbital(orb.id);
                      }
                    }}
                  >
                    <circle
                      cx={ox}
                      cy={oy}
                      r={isSelected ? 26 : 22}
                      fill={isSelected ? '#15803D' : '#0F172A'}
                      stroke={isSelected ? '#4ADE80' : '#475569'}
                      strokeWidth={isSelected ? '2' : '1.5'}
                      className="transition-all duration-200 group-focus:stroke-emerald-400 group-focus:stroke-2"
                    />
                    <text
                      x={ox}
                      y={oy + 4}
                      textAnchor="middle"
                      fill={isSelected ? '#FFFFFF' : '#94A3B8'}
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                      className="select-none pointer-events-none"
                    >
                      {orb.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Accessible Chip Selector for Mobile & Keyboard Users */}
            <div className="flex flex-wrap gap-2 justify-center mt-4" role="group" aria-label="Architecture layers">
              {orbitals.map((orb) => (
                <button
                  key={orb.id}
                  onClick={() => setActiveOrbital(orb.id)}
                  aria-pressed={activeOrbital === orb.id}
                  className={`min-h-[44px] px-3.5 py-1.5 text-xs font-mono rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 flex items-center gap-1.5 ${
                    activeOrbital === orb.id
                      ? 'bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-500/50 shadow-sm shadow-emerald-500/10'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${activeOrbital === orb.id ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                  <span>{orb.label}</span>
                </button>
              ))}
            </div>

            {/* Active Node Detail Card */}
            <div className="w-full mt-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-emerald-400">
                  NODE: {activeOrbital}
                </span>
                <span className="text-[11px] font-mono text-slate-400">Integrated Layer</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {orbitals.find((o) => o.id === activeOrbital)?.detail}
              </p>
            </div>
          </motion.div>

          {/* 3 Concise Capabilities */}
          <div className="lg:col-span-5 flex flex-col space-y-4 sm:space-y-6">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 sm:p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
