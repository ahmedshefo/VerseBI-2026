import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';

export interface PageInfo {
  id: string;
  label: string;
  badge?: string;
  chapterNumber: string;
}

export const PAGES_CATALOG: PageInfo[] = [
  { id: 'home', label: 'Overview', badge: 'Home', chapterNumber: '00' },
  { id: 'solutions', label: 'Solutions & Pipeline', badge: 'Solutions', chapterNumber: '01' },
  { id: 'architecture', label: 'AI Architecture', badge: 'Intelligence', chapterNumber: '02' },
  { id: 'industries', label: 'Vertical Matrix', badge: 'Industries', chapterNumber: '03' },
  { id: 'process', label: 'Engineering Methodology', badge: 'Process', chapterNumber: '04' },
  { id: 'case-studies', label: 'Case Studies', badge: 'Results', chapterNumber: '05' },
  { id: 'insights', label: 'Technical Insights', badge: 'Research', chapterNumber: '06' },
  { id: 'about', label: 'About VerseBI', badge: 'Company', chapterNumber: '07' },
  { id: 'contact', label: 'Consultation & Inquiry', badge: 'Contact', chapterNumber: '08' },
];

interface PageNavigationProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({
  currentPage,
  onNavigate,
}) => {
  const currentIndex = PAGES_CATALOG.findIndex((p) => p.id === currentPage);
  const prevPage = currentIndex > 0 ? PAGES_CATALOG[currentIndex - 1] : null;
  const nextPage =
    currentIndex < PAGES_CATALOG.length - 1
      ? PAGES_CATALOG[currentIndex + 1]
      : null;

  return (
    <nav
      aria-label="Chapter Navigation"
      className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#090d14]/60 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        {/* Navigation Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Previous Page */}
          <div className="w-full sm:w-auto flex justify-start">
            {prevPage ? (
              <button
                onClick={() => onNavigate(prevPage.id)}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-emerald-400 group-hover:-translate-x-0.5 transition-transform duration-200">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Previous Chapter · {prevPage.chapterNumber}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                    {prevPage.label}
                  </div>
                </div>
              </button>
            ) : (
              <div className="hidden sm:block opacity-0 pointer-events-none w-44" />
            )}
          </div>

          {/* Interactive Chapter Indicator Dots (Desktop) */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-900/90 border border-slate-800">
              {PAGES_CATALOG.map((page, idx) => {
                const isActive = page.id === currentPage;
                return (
                  <button
                    key={page.id}
                    onClick={() => onNavigate(page.id)}
                    aria-label={`Go to ${page.label}`}
                    title={`${page.chapterNumber} · ${page.label}`}
                    className={`relative px-2.5 py-1 text-[11px] font-mono rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-emerald-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-chapter-pill"
                        className="absolute inset-0 rounded-full bg-emerald-500/15 border border-emerald-500/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{page.chapterNumber}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <Compass className="w-3 h-3 text-emerald-400" />
              <span>Use arrow keys (← / →) or click to navigate between pages</span>
            </div>
          </div>

          {/* Next Page */}
          <div className="w-full sm:w-auto flex justify-end">
            {nextPage ? (
              <button
                onClick={() => onNavigate(nextPage.id)}
                className="group flex items-center justify-end gap-3 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-right transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Next Chapter · {nextPage.chapterNumber}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                    {nextPage.label}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ) : (
              <button
                onClick={() => onNavigate('home')}
                className="group flex items-center justify-end gap-3 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-right transition-all duration-200"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                    Restart Tour
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                    Back to Overview
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
