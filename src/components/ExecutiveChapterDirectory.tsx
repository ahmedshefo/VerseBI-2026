import React from 'react';
import { motion } from 'motion/react';
import {
  Database,
  Cpu,
  Building2,
  Workflow,
  BarChart3,
  BookOpen,
  ShieldCheck,
  Mail,
  ArrowRight,
} from 'lucide-react';

interface ExecutiveChapterDirectoryProps {
  onNavigate: (pageId: string) => void;
}

const CHAPTERS = [
  {
    id: 'solutions',
    chapter: '01',
    title: 'Solutions & Pipeline',
    subtitle: '5 enterprise pillars and real-time transformation engine.',
    icon: Database,
    tag: 'Infrastructure',
  },
  {
    id: 'architecture',
    chapter: '02',
    title: 'AI Systems Architecture',
    subtitle: '3-tier cognitive AI stack with deterministic execution.',
    icon: Cpu,
    tag: 'Intelligence',
  },
  {
    id: 'industries',
    chapter: '03',
    title: 'Industry Verticals Matrix',
    subtitle: 'Sector-specific intelligence for finance, health, and retail.',
    icon: Building2,
    tag: 'Applications',
  },
  {
    id: 'process',
    chapter: '04',
    title: 'Engineering Methodology',
    subtitle: '5-stage phased delivery framework with auditable milestones.',
    icon: Workflow,
    tag: 'Methodology',
  },
  {
    id: 'case-studies',
    chapter: '05',
    title: 'Enterprise Case Studies',
    subtitle: 'Demonstrative projects with verified ROI and SLA benchmarks.',
    icon: BarChart3,
    tag: 'Results',
  },
  {
    id: 'insights',
    chapter: '06',
    title: 'Technical Insights',
    subtitle: 'Engineering whitepapers on feature stores and LLM governance.',
    icon: BookOpen,
    tag: 'Research',
  },
  {
    id: 'about',
    chapter: '07',
    title: 'About VerseBI',
    subtitle: 'Engineering tenets, deterministic AI principles, and team ethos.',
    icon: ShieldCheck,
    tag: 'Organization',
  },
  {
    id: 'contact',
    chapter: '08',
    title: 'Consultation & Inquiry',
    subtitle: 'Direct engagement, scope estimation, and architecture review.',
    icon: Mail,
    tag: 'Engagement',
  },
];

export const ExecutiveChapterDirectory: React.FC<ExecutiveChapterDirectoryProps> = ({
  onNavigate,
}) => {
  return (
    <section className="py-20 bg-[#090d14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Explore The Platform</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Chapters of the VerseBI Ecosystem
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Navigate through dedicated chapters covering architecture, real-time pipelines, domain applications, and verified client outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CHAPTERS.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <motion.button
                key={ch.id}
                onClick={() => onNavigate(ch.id)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/40 text-left transition-colors duration-200 flex flex-col justify-between min-h-[170px] relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                {/* Subtle hover gradient glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/0 group-hover:bg-emerald-500/5 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                      Chapter {ch.chapter}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                      {ch.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2">
                    <span>{ch.title}</span>
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {ch.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-emerald-400 transition-colors">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                    <span>View Chapter</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
