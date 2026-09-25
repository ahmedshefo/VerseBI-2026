import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { VerseBILogo } from './VerseBILogo';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navLinks = [
    { label: 'Solutions', href: '#solutions', id: 'solutions' },
    { label: 'Transformation', href: '#transformation', id: 'transformation' },
    { label: 'Architecture', href: '#ai-architecture', id: 'ai-architecture' },
    { label: 'Industries', href: '#industries', id: 'industries' },
    { label: 'Methodology', href: '#process', id: 'process' },
    { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { label: 'About', href: '#about', id: 'about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy: identify currently visible section
      const sectionIds = ['home', ...navLinks.map((l) => l.id), 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard Escape & Body Scroll Lock for Mobile Menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-2.5 sm:py-3 bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/25'
            : 'py-4 sm:py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Identity */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg group"
              aria-label="VerseBI Home"
            >
              <VerseBILogo
                variant="full"
                className={`transition-all duration-300 ${scrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-9'}`}
                glow
              />
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`text-sm font-medium transition-colors duration-200 relative group py-1 whitespace-nowrap ${
                      isActive ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: CTA & Mobile Trigger */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={onOpenContact}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg shadow-sm shadow-emerald-500/20 transition-all duration-200 whitespace-nowrap hover:shadow-md hover:shadow-emerald-500/30 hover:-translate-y-0.5"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-panel"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel with Motion Animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            role="dialog"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 lg:hidden pt-20 bg-[#0b0f17]/95 backdrop-blur-xl border-b border-slate-800 flex flex-col justify-between overflow-y-auto"
          >
            <div className="max-w-md w-full mx-auto px-5 py-6 flex flex-col space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2 px-3">
                Navigation
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`min-h-[48px] px-3 rounded-lg text-base font-medium transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-emerald-500/10 text-emerald-400 font-semibold border-l-2 border-emerald-400'
                        : 'text-slate-200 hover:text-white hover:bg-slate-900/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-slate-500 font-mono">
                      {isActive ? '●' : '→'}
                    </span>
                  </a>
                );
              })}

              <div className="pt-6 mt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full min-h-[48px] py-3 px-4 text-center text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <span>Connect With Team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 text-center border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
              VerseBI · Precision Data & AI Architecture
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
