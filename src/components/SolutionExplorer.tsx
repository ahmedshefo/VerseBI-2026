import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BarChart3,
  TrendingUp,
  Activity,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  RefreshCw,
  Zap,
  HardDrive,
  Cpu,
  Share2,
} from 'lucide-react';

interface SolutionExplorerProps {
  activeSolution: 'bi' | 'analytics' | 'ai' | 'engineering' | 'automation';
}

export const SolutionExplorer: React.FC<SolutionExplorerProps> = ({ activeSolution }) => {
  // BI state
  const [biPeriod, setBiPeriod] = useState<'30d' | '90d' | '1y'>('90d');

  // Analytics scatter point hover state
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // AI interactive prompt/inference state
  const [aiInferring, setAiInferring] = useState<boolean>(false);
  const [aiOutput, setAiOutput] = useState<string>(
    'Detected 14% optimization opportunity in dispatch routing based on 90-day seasonal demand.'
  );

  // Data Engineering pipeline state
  const [pipelineActiveStep, setPipelineActiveStep] = useState<number>(2);

  // Automation trigger state
  const [automationTriggered, setAutomationTriggered] = useState<boolean>(false);
  const [automationStep, setAutomationStep] = useState<number>(0);

  const runAutomationTest = () => {
    setAutomationTriggered(true);
    setAutomationStep(1);
    setTimeout(() => setAutomationStep(2), 600);
    setTimeout(() => setAutomationStep(3), 1200);
    setTimeout(() => {
      setAutomationStep(4);
      setTimeout(() => setAutomationTriggered(false), 2000);
    }, 1800);
  };

  const runAiInference = () => {
    setAiInferring(true);
    setTimeout(() => {
      setAiInferring(false);
      const insights = [
        'Forecast variance reduced to ±2.1% across cross-border fulfillment hubs.',
        'High correlation identified between customer response latency and churn probability.',
        'Automated model weight re-calibration completed for quarterly demand shifts.',
      ];
      setAiOutput(insights[Math.floor(Math.random() * insights.length)]);
    }, 800);
  };

  return (
    <div className="w-full h-full min-h-[460px] bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-dense opacity-30 pointer-events-none" />

      <AnimatePresence mode="wait">
        {/* ========================================================
            01. BUSINESS INTELLIGENCE VISUALIZATION
           ======================================================== */}
        {activeSolution === 'bi' && (
          <motion.div
            key="bi"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <BarChart3 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold truncate">
                  Executive BI & KPI Monitor
                </span>
              </div>
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[11px] font-mono shrink-0">
                {(['30d', '90d', '1y'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setBiPeriod(p)}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      biPeriod === p
                        ? 'bg-emerald-500/20 text-emerald-400 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* KPI Summary Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 my-3 sm:my-4">
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">Decision Index</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-sm sm:text-lg font-mono font-bold text-white">94.2</span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400">+5.4%</span>
                </div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">Reporting Freshness</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-sm sm:text-lg font-mono font-bold text-white truncate">Real-Time</span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400">Live</span>
                </div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">Automated Feeds</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-sm sm:text-lg font-mono font-bold text-white truncate">48 Feeds</span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400">Sync</span>
                </div>
              </div>
            </div>

            {/* Simulated Dynamic BI Bar & Line Chart */}
            <div className="flex-1 bg-slate-950/50 rounded-xl p-4 border border-slate-800 flex flex-col justify-end relative">
              <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                <span>Performance Velocity Trajectory</span>
                <span className="text-emerald-400 font-mono">Benchmark: +28%</span>
              </div>

              {/* Chart SVG */}
              <div className="h-32 w-full flex items-end gap-3 justify-between pt-2">
                {[
                  { m: 'W1', h: '45%', v: '4.2k' },
                  { m: 'W2', h: '62%', v: '5.8k' },
                  { m: 'W3', h: '55%', v: '5.1k' },
                  { m: 'W4', h: '78%', v: '7.3k' },
                  { m: 'W5', h: '70%', v: '6.9k' },
                  { m: 'W6', h: '92%', v: '8.7k' },
                  { m: 'W7', h: '88%', v: '8.4k' },
                  { m: 'W8', h: '100%', v: '9.6k' },
                ].map((bar, i) => (
                  <div key={bar.m} className="flex-1 flex flex-col items-center gap-1 group">
                    <div className="w-full bg-slate-900 rounded-t-sm relative flex items-end overflow-hidden h-28 border-b border-slate-800">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: bar.h }}
                        transition={{ duration: 0.6, delay: i * 0.05 }}
                        className="w-full bg-emerald-500 rounded-t-sm group-hover:bg-emerald-400 transition-colors"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300">
                      {bar.m}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-3 font-mono">
              Role-based metrics hierarchy with Power BI / custom portal connectivity.
            </p>
          </motion.div>
        )}

        {/* ========================================================
            02. DATA ANALYTICS VISUALIZATION
           ======================================================== */}
        {activeSolution === 'analytics' && (
          <motion.div
            key="analytics"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  Multivariate Scatter & Predictive Trends
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Regression Confidence: 98.7%
              </span>
            </div>

            {/* Scatter Plot Canvas */}
            <div className="flex-1 my-3 bg-slate-950/60 rounded-xl p-4 border border-slate-800 relative flex items-center justify-center">
              <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                {/* Axis lines */}
                <line x1="30" y1="180" x2="380" y2="180" stroke="#334155" strokeWidth="1" />
                <line x1="30" y1="20" x2="30" y2="180" stroke="#334155" strokeWidth="1" />

                {/* Trend line */}
                <motion.path
                  d="M 40 160 Q 180 120 370 40"
                  fill="none"
                  stroke="#4ADE80"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />

                {/* Scatter cluster points */}
                {[
                  { id: 1, cx: 60, cy: 155, r: 4, cluster: 'Low Vol' },
                  { id: 2, cx: 85, cy: 140, r: 5, cluster: 'Low Vol' },
                  { id: 3, cx: 120, cy: 135, r: 4, cluster: 'Mid Trend' },
                  { id: 4, cx: 150, cy: 115, r: 6, cluster: 'Mid Trend' },
                  { id: 5, cx: 180, cy: 125, r: 5, cluster: 'Mid Trend' },
                  { id: 6, cx: 220, cy: 95, r: 6, cluster: 'High Impact' },
                  { id: 7, cx: 260, cy: 80, r: 7, cluster: 'High Impact' },
                  { id: 8, cx: 300, cy: 65, r: 5, cluster: 'Growth Node' },
                  { id: 9, cx: 340, cy: 50, r: 8, cluster: 'Growth Node' },
                  { id: 10, cx: 365, cy: 42, r: 6, cluster: 'Max Frontier' },
                ].map((pt) => {
                  const isHovered = hoveredPoint === pt.id;
                  return (
                    <g
                      key={pt.id}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint(pt.id)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      <circle
                        cx={pt.cx}
                        cy={pt.cy}
                        r={isHovered ? pt.r + 3 : pt.r}
                        fill={isHovered ? '#FFFFFF' : '#34D399'}
                        stroke="#0F172A"
                        strokeWidth="2"
                        className="transition-all duration-200"
                      />
                      {isHovered && (
                        <circle
                          cx={pt.cx}
                          cy={pt.cy}
                          r={pt.r + 7}
                          fill="none"
                          stroke="#34D399"
                          strokeWidth="1.5"
                          className="animate-ping"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Point hover detail tooltip */}
              {hoveredPoint && (
                <div className="absolute top-4 right-4 bg-slate-900 border border-emerald-500/40 px-3 py-1.5 rounded-lg shadow-xl text-[11px] font-mono">
                  <span className="text-white font-semibold">Cluster Node #{hoveredPoint}:</span>{' '}
                  <span className="text-emerald-400">Correlated Driver Identified</span>
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
              <span className="text-slate-400">Statistical Engine:</span>
              <span className="font-mono text-emerald-400">Holt-Winters Seasonal Decomposition & Ridge GLM</span>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            03. AI SOLUTIONS VISUALIZATION
           ======================================================== */}
        {activeSolution === 'ai' && (
          <motion.div
            key="ai"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  Applied Neural Reasoning & Inference
                </span>
              </div>
              <button
                onClick={runAiInference}
                disabled={aiInferring}
                className="px-2.5 py-1 text-[11px] font-mono rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30 flex items-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <Sparkles className="w-3 h-3" />
                <span>{aiInferring ? 'Inferring...' : 'Simulate Query'}</span>
              </button>
            </div>

            {/* Neural Net Graph */}
            <div className="my-3 flex-1 bg-slate-950/60 rounded-xl p-4 border border-slate-800 relative flex items-center justify-center">
              <svg viewBox="0 0 360 170" className="w-full h-full overflow-visible">
                {/* 3 Layer Neural Connections */}
                {/* Input Layer */}
                {[30, 70, 110, 150].map((y1, i) =>
                  // Hidden Layer
                  [45, 85, 125].map((y2, j) => (
                    <line
                      key={`l1-${i}-${j}`}
                      x1="60"
                      y1={y1}
                      x2="180"
                      y2={y2}
                      stroke="#22c55e"
                      strokeWidth="1"
                      opacity={aiInferring ? 0.7 : 0.25}
                    />
                  ))
                )}

                {/* Hidden to Output */}
                {[45, 85, 125].map((y2, j) =>
                  // Output Layer
                  [65, 105].map((y3, k) => (
                    <line
                      key={`l2-${j}-${k}`}
                      x1="180"
                      y1={y2}
                      x2="300"
                      y2={y3}
                      stroke="#4ade80"
                      strokeWidth="1.2"
                      opacity={aiInferring ? 0.9 : 0.35}
                    />
                  ))
                )}

                {/* Nodes: Input Layer */}
                {[30, 70, 110, 150].map((y, i) => (
                  <circle key={`in-${i}`} cx="60" cy={y} r="5" fill="#38BDF8" />
                ))}

                {/* Nodes: Hidden Layer */}
                {[45, 85, 125].map((y, j) => (
                  <circle
                    key={`hid-${j}`}
                    cx="180"
                    cy={y}
                    r={aiInferring ? 7 : 6}
                    fill="#34D399"
                    className="transition-all duration-300"
                  />
                ))}

                {/* Nodes: Output Layer */}
                {[65, 105].map((y, k) => (
                  <circle
                    key={`out-${k}`}
                    cx="300"
                    cy={y}
                    r="7"
                    fill="#4ADE80"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                  />
                ))}
              </svg>
            </div>

            {/* Generated Insight Box */}
            <div className="p-3.5 bg-slate-950/80 border border-emerald-500/30 rounded-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Synthesized Decision Intelligence</span>
              </div>
              <p className="text-xs text-slate-300 font-mono leading-relaxed">{aiOutput}</p>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            04. DATA ENGINEERING VISUALIZATION
           ======================================================== */}
        {activeSolution === 'engineering' && (
          <motion.div
            key="engineering"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  SOURCE → TRANSFORM → STORE → ANALYZE
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Zero Data Loss Architecture</span>
            </div>

            {/* Interactive Pipeline Stages */}
            <div className="my-4 sm:my-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { step: 0, name: 'SOURCE', desc: 'Postgres, APIs, Kafka' },
                { step: 1, name: 'TRANSFORM', desc: 'dbt, Spark, Schemas' },
                { step: 2, name: 'STORE', desc: 'Lakehouse, BigQuery' },
                { step: 3, name: 'ANALYZE', desc: 'BI Semantic Layer' },
              ].map((item) => {
                const isSelected = pipelineActiveStep === item.step;
                return (
                  <button
                    key={item.name}
                    onClick={() => setPipelineActiveStep(item.step)}
                    className={`p-2.5 sm:p-3 rounded-xl text-left border transition-all ${
                      isSelected
                        ? 'bg-emerald-500/15 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-white">{item.name}</span>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">{item.desc}</p>
                  </button>
                );
              })}
            </div>

            {/* Animated Pipeline Stream Indicator */}
            <div className="p-3 sm:p-4 bg-slate-950/80 rounded-xl border border-slate-800 flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-1">
                <span className="text-slate-400">Stage:</span>
                <span className="text-emerald-400 font-semibold truncate">
                  {pipelineActiveStep === 0 && 'High-Throughput CDC & Batch Ingestion'}
                  {pipelineActiveStep === 1 && 'Automated Data Quality & Schemas'}
                  {pipelineActiveStep === 2 && 'Optimized Partitioning & Semantic Cache'}
                  {pipelineActiveStep === 3 && 'Low-Latency Serving to Business Layers'}
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-emerald-400 rounded-full"
                  animate={{
                    width: `${(pipelineActiveStep + 1) * 25}%`,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            <p className="text-xs text-slate-400 font-mono mt-2">
              Resilient lineage tracing, automatic retry backoffs, and strict compliance schemas.
            </p>
          </motion.div>
        )}

        {/* ========================================================
            05. AUTOMATION VISUALIZATION
           ======================================================== */}
        {activeSolution === 'automation' && (
          <motion.div
            key="automation"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  TRIGGER → DATA → LOGIC → ACTION
                </span>
              </div>
              <button
                onClick={runAutomationTest}
                disabled={automationTriggered}
                className="px-2.5 py-1 text-[11px] font-mono rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30 flex items-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-3 h-3 ${automationTriggered ? 'animate-spin' : ''}`} />
                <span>{automationTriggered ? 'Executing...' : 'Trigger Flow'}</span>
              </button>
            </div>

            {/* Workflow Pipeline Graphic */}
            <div className="my-4 sm:my-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { step: 1, label: 'TRIGGER', desc: 'Anomaly / Event' },
                { step: 2, label: 'DATA', desc: 'Context Enrich' },
                { step: 3, label: 'LOGIC', desc: 'Rule Evaluation' },
                { step: 4, label: 'ACTION', desc: 'ERP / CRM Sync' },
              ].map((st) => {
                const isPassed = automationStep >= st.step;
                const isCurrent = automationStep === st.step;
                return (
                  <div
                    key={st.label}
                    className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all ${
                      isCurrent
                        ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg shadow-emerald-500/20'
                        : isPassed
                        ? 'bg-slate-900 border-emerald-500/40 text-slate-200'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <p className="text-[11px] font-mono font-bold">{st.label}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 truncate">{st.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Execution Status Log Box */}
            <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span>Active Orchestrator State</span>
                <span className="text-emerald-400">
                  {automationStep === 0 && 'Idle / Listening for webhook triggers'}
                  {automationStep === 1 && 'Event received: threshold crossed'}
                  {automationStep === 2 && 'Fetching relational metadata'}
                  {automationStep === 3 && 'Evaluating decision policy tree'}
                  {automationStep === 4 && 'Action executed successfully: 200 OK'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Eliminates manual triage, human routing bottlenecks, and asynchronous operational lag.
              </p>
            </div>

            <p className="text-xs text-slate-400 font-mono mt-2">
              Full audit logging, rollback triggers, and human-in-the-loop exception fallbacks.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
