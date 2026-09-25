import React from 'react';
import { VerseBILogo } from './VerseBILogo';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080d] border-t border-slate-900 py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-900">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-start">
            <VerseBILogo variant="full" className="h-8 mb-3" />
            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              Data. Intelligence. Action.
            </p>
            <p className="text-xs text-slate-500 mt-2 max-w-sm leading-relaxed">
              Enterprise solutions for data analytics, business intelligence, applied AI, and process automation.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium" aria-label="Footer Navigation">
            <a
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#solutions');
              }}
              className="text-slate-400 hover:text-white transition-colors min-h-[44px] flex items-center"
            >
              Solutions
            </a>
            <a
              href="#transformation"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#transformation');
              }}
              className="text-slate-400 hover:text-white transition-colors min-h-[44px] flex items-center"
            >
              Transformation
            </a>
            <a
              href="#ai-architecture"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#ai-architecture');
              }}
              className="text-slate-400 hover:text-white transition-colors min-h-[44px] flex items-center"
            >
              Architecture
            </a>
            <a
              href="#industries"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#industries');
              }}
              className="text-slate-400 hover:text-white transition-colors min-h-[44px] flex items-center"
            >
              Industries
            </a>
            <a
              href="#process"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#process');
              }}
              className="text-slate-400 hover:text-white transition-colors min-h-[44px] flex items-center"
            >
              Methodology
            </a>
            <a
              href="#case-studies"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#case-studies');
              }}
              className="text-slate-400 hover:text-white transition-colors min-h-[44px] flex items-center"
            >
              Case Studies
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#about');
              }}
              className="text-slate-400 hover:text-white transition-colors min-h-[44px] flex items-center"
            >
              About
            </a>
            <button
              onClick={onOpenContact}
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors min-h-[44px] flex items-center"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© 2026 VerseBI. All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <span>Enterprise Data Architecture</span>
            <span className="text-slate-600">·</span>
            <span>Applied Intelligence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
