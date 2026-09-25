import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightText?: string;
  description: string;
  chapterNumber: string;
  onBackToHome: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  highlightText,
  description,
  chapterNumber,
  onBackToHome,
}) => {
  return (
    <div className="pt-28 pb-10 border-b border-slate-800/80 bg-gradient-to-b from-[#0e1420] to-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded px-1 -ml-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Overview</span>
          </button>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-emerald-400 font-medium">{badge}</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400 font-normal">Chapter {chapterNumber}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{badge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
              {title}{' '}
              {highlightText && (
                <span className="text-emerald-400">{highlightText}</span>
              )}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {description}
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-slate-400 pb-2">
            <span className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
              Chapter {chapterNumber} of 08
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
