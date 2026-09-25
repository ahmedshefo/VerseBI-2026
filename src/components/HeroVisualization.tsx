import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Activity, Cpu, Database, Sparkles, TrendingUp } from 'lucide-react';

export const HeroVisualization: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [pulseSpeed, setPulseSpeed] = useState<'normal' | 'fast'>('normal');
  const [metricMode, setMetricMode] = useState<'analytics' | 'neural'>('analytics');

  // Simulated live telemetry stream
  const [streamTick, setStreamTick] = useState(0);

  useEffect(() => {
    // If user prefers reduced motion, do not run live telemetry ticks
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    let interval: NodeJS.Timeout | null = null;

    const startTimer = () => {
      if (typeof document !== 'undefined' && document.hidden) return;
      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        setStreamTick((t) => (t + 1) % 100);
      }, pulseSpeed === 'fast' ? 800 : 1600);
    };

    const handleVisibility = () => {
      if (document.hidden && interval) {
        clearInterval(interval);
        interval = null;
      } else {
        startTimer();
      }
    };

    startTimer();
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      if (interval) clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [pulseSpeed]);

  // Network node definitions
  const nodes = [
    { id: 1, x: 280, y: 90, label: 'Ingestion Layer', type: 'Source', value: '4.8M ops/s' },
    { id: 2, x: 335, y: 70, label: 'Feature Pipeline', type: 'Transform', value: '0.4ms latency' },
    { id: 3, x: 385, y: 95, label: 'Neural Mesh', type: 'Inference', value: '99.4% precision' },
    { id: 4, x: 320, y: 130, label: 'Warehouse Sync', type: 'Store', value: 'Real-time delta' },
    { id: 5, x: 365, y: 140, label: 'Decision Engine', type: 'Analytics', value: 'Continuous' },
    { id: 6, x: 410, y: 135, label: 'Action Dispatcher', type: 'Automation', value: 'Automated' },
    { id: 7, x: 350, y: 185, label: 'KPI Monitor', type: 'BI Reporting', value: 'Active' },
  ];

  // Bars matching VerseBI logo's right ascending arm
  const bars = [
    { id: 1, label: 'Data', height: 110, baseHeight: 90, color: '#32BF56', value: '+34%' },
    { id: 2, label: 'Insight', height: 170, baseHeight: 140, color: '#3CD367', value: '8.4x' },
    { id: 3, label: 'Models', height: 215, baseHeight: 185, color: '#2EBC55', value: '0.12s' },
    { id: 4, label: 'Action', height: 195, baseHeight: 165, color: '#46DC72', value: '99.9%' },
  ];

  return (
    <div className="relative w-full aspect-[4/3] max-w-xl mx-auto flex items-center justify-center select-none">
      {/* Ambient background glow radiating from the core */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-emerald-400/5 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Interactive Stage Box */}
      <div className="relative w-full h-full rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl p-3.5 sm:p-6 overflow-hidden shadow-2xl flex flex-col justify-between">
        {/* Subtle grid in background */}
        <div className="absolute inset-0 bg-grid-dense opacity-40 pointer-events-none" />

        {/* Top Control Bar / Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-2.5 sm:pb-3 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-xs font-mono text-slate-300 font-medium truncate">VerseBI Intelligence Stack</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 shrink-0">
            <button
              onClick={() => setMetricMode('analytics')}
              className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                metricMode === 'analytics'
                  ? 'bg-slate-800 text-emerald-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setMetricMode('neural')}
              className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                metricMode === 'neural'
                  ? 'bg-slate-800 text-emerald-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Neural Mesh
            </button>
          </div>
        </div>

        {/* Central Visualization Vector Stage */}
        <div className="relative flex-1 flex items-center justify-center my-2">
          <svg
            viewBox="0 0 500 360"
            className="w-full h-full max-h-72 overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Green glow filter */}
              <filter id="heroNodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#4ade80" floodOpacity="0.6" />
              </filter>
              <linearGradient id="whiteWingGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
              <linearGradient id="barGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4ADE80" />
                <stop offset="100%" stopColor="#16A34A" />
              </linearGradient>
            </defs>

            {/* Background Stream Lines (Ascending upward momentum) */}
            <g opacity="0.3" stroke="#22c55e" strokeWidth="1" strokeDasharray="3 4">
              <path d="M 120 320 L 250 180" />
              <path d="M 160 340 L 290 200" />
              <path d="M 200 360 L 330 220" />
            </g>

            {/* AI Network Globe Layer (Directly inspired by logo's upper green node sphere) */}
            <g id="hero-ai-network" className="transition-all duration-300">
              {/* Circular backing disc with soft pulse */}
              <motion.circle
                cx="355"
                cy="115"
                r="64"
                fill="#22C55E"
                fillOpacity="0.18"
                stroke="#22C55E"
                strokeWidth="1.5"
                strokeDasharray={metricMode === 'neural' ? 'none' : '4 3'}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Connecting graph edges between nodes */}
              <g stroke="#22c55e" strokeWidth="1.5" opacity={metricMode === 'neural' ? 0.9 : 0.5}>
                <line x1="280" y1="90" x2="335" y2="70" />
                <line x1="335" y1="70" x2="385" y2="95" />
                <line x1="280" y1="90" x2="320" y2="130" />
                <line x1="320" y1="130" x2="365" y2="140" />
                <line x1="335" y1="70" x2="365" y2="140" />
                <line x1="385" y1="95" x2="410" y2="135" />
                <line x1="365" y1="140" x2="410" y2="135" />
                <line x1="320" y1="130" x2="350" y2="185" />
                <line x1="365" y1="140" x2="350" y2="185" />
              </g>

              {/* Animated data packet traveling between nodes */}
              <motion.circle
                r="3.5"
                fill="#FFFFFF"
                filter="url(#heroNodeGlow)"
                animate={{
                  cx: [280, 335, 365, 410],
                  cy: [90, 70, 140, 135],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Graph Nodes */}
              {nodes.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <g
                    key={node.id}
                    className="cursor-pointer group"
                    onClick={() => setActiveNode(isActive ? null : node.id)}
                    onMouseEnter={() => setActiveNode(node.id)}
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isActive ? 8 : 5}
                      fill={isActive ? '#FFFFFF' : '#4ADE80'}
                      stroke="#0F172A"
                      strokeWidth="2"
                      className="transition-all duration-200"
                    />
                    {isActive && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="12"
                        fill="none"
                        stroke="#4ADE80"
                        strokeWidth="1.5"
                        className="animate-ping"
                      />
                    )}
                  </g>
                );
              })}
            </g>

            {/* Left Geometric Arm: Solid White Angled Block (Logo DNA) */}
            <g id="hero-left-wing">
              <polygon
                points="245,305 85,145 155,75 235,155"
                fill="url(#whiteWingGrad)"
                className="filter drop-shadow-[0_8px_20px_rgba(255,255,255,0.08)]"
              />
              {/* Directional arrow vector indicator */}
              <path
                d="M 125 145 L 195 75"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.8"
              />
            </g>

            {/* Right Ascending Vertical Data Bars (Logo DNA) */}
            <g id="hero-data-bars">
              {/* Bar 1 */}
              <motion.polygon
                points="245,305 245,210 280,210 280,270"
                fill="#32BF56"
                initial={{ opacity: 0.9 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
              />

              {/* Bar 2 */}
              <motion.g
                initial={{ opacity: 0.95 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
              >
                <polygon points="280,270 280,135 320,135 320,230" fill="#3CD367" />
                <polygon points="280,270 280,135 290,145 290,260" fill="#249841" opacity="0.6" />
              </motion.g>

              {/* Bar 3 (Tallest) */}
              <motion.g
                initial={{ opacity: 0.98 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
              >
                <polygon points="320,230 320,105 352,105 352,198" fill="#2EBC55" />
                <polygon points="320,230 320,105 330,115 330,220" fill="#1C8136" opacity="0.65" />
              </motion.g>

              {/* Bar 4 */}
              <motion.polygon
                points="352,198 352,118 382,118 382,168"
                fill="#46DC72"
                initial={{ opacity: 0.95 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
              />

              {/* Dynamic silhouette contour */}
              <path d="M 245 305 L 405 145 L 382 122 L 382 168 Z" fill="#28A649" />
            </g>
          </svg>
        </div>

        {/* Live Active Node or Metric Card footer */}
        <div className="relative z-10 bg-slate-950/80 rounded-xl p-3 border border-slate-800 flex items-center justify-between">
          {activeNode ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">
                  {nodes.find((n) => n.id === activeNode)?.label}
                </p>
                <p className="text-[11px] text-slate-400 font-mono">
                  {nodes.find((n) => n.id === activeNode)?.type} ·{' '}
                  <span className="text-emerald-400">
                    {nodes.find((n) => n.id === activeNode)?.value}
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Activity className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Continuous Intelligence Loop</p>
                <p className="text-[11px] text-slate-400 font-mono">
                  Hover nodes & bars to inspect real-time system layers
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPulseSpeed(pulseSpeed === 'normal' ? 'fast' : 'normal')}
              className="text-[11px] font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Toggle pipeline speed"
            >
              Speed: {pulseSpeed === 'fast' ? '2x' : '1x'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
