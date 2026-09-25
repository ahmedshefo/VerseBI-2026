/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { Solutions } from './components/Solutions';
import { DataTransformation } from './components/DataTransformation';
import { AISection } from './components/AISection';
import { Industries } from './components/Industries';
import { Process } from './components/Process';
import { CaseStudies } from './components/CaseStudies';
import { Insights } from './components/Insights';
import { About } from './components/About';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Accessible Skip to Main Content Link for Keyboard & Screen Reader Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-400 focus:text-slate-950 focus:font-semibold focus:text-xs focus:rounded-lg focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Short initial loading experience */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Top Hairline Scroll Progress Bar & Floating Quick Scroll-to-Top */}
      <ScrollProgress />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      {/* Main Content Landmark */}
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        {/* 1. Hero Section */}
        <Hero
          onExploreSolutions={() => scrollToSection('solutions')}
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* 2. Trust & Core Introduction */}
        <TrustIntro />

        {/* 3. Solutions & Interactive Solution Explorer */}
        <Solutions />

        {/* 4. Data Transformation Pipeline */}
        <DataTransformation />

        {/* 5. AI Systems Architecture */}
        <AISection />

        {/* 6. Industries Interactive Showcase */}
        <Industries />

        {/* 7. Process / How We Work */}
        <Process />

        {/* 8. Demonstrative Case Studies */}
        <CaseStudies />

        {/* 9. Insights & Technical Articles */}
        <Insights />

        {/* 10. About VerseBI */}
        <About />

        {/* 11. Final Contact & CTA Section */}
        <ContactSection onExploreSolutions={() => scrollToSection('solutions')} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* Global Interactive Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
