import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, Clock, X } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  body: string;
}

export const Insights: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Keyboard Escape & Body Scroll Lock for Article Reader
  useEffect(() => {
    if (!activeArticle) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveArticle(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeArticle]);

  const articles: Article[] = [
    {
      id: 'data-quality-ai',
      title: 'Why Data Quality Matters for AI',
      category: 'Data Engineering & AI',
      readTime: '4 min read',
      excerpt:
        'Machine learning models amplify underlying data inconsistencies. Why governance, clean lineage, and schema enforcement precede any AI deployment.',
      body:
        'Organizations frequently rush to implement generative AI or predictive models only to encounter hallucinations and skewed conclusions. The root issue is rarely the model algorithm itself, but rather the underlying data hygiene. Without unified entities, consistent time-series alignment, and automated anomaly filtering, models learn from noise. Investing in continuous data validation transforms AI from a brittle experimental tool into an auditable enterprise asset.',
    },
    {
      id: 'dashboards-decision-intelligence',
      title: 'From Dashboards to Decision Intelligence',
      category: 'Business Intelligence',
      readTime: '5 min read',
      excerpt:
        'Why visual metrics alone fail to drive action, and how embedding probabilistic reasoning directly into business workflows closes the insight gap.',
      body:
        'Traditional dashboards report historical status: what happened yesterday, last week, or last quarter. While essential for accounting, they place the burden of synthesis and decision-making squarely on overloaded operators. Modern decision intelligence pairs retrospective reporting with prospective simulation, alerting operators not just to anomalies, but to the optimal prescribed response.',
    },
    {
      id: 'automate-reporting',
      title: 'How Businesses Can Automate Reporting',
      category: 'Workflow Automation',
      readTime: '4 min read',
      excerpt:
        'Eliminating manual spreadsheet assembly, copy-paste reconciliation, and disconnected email distributions through scheduled data orchestration.',
      body:
        'Thousands of engineering and analyst hours are squandered every month manually aggregating CSV files, formatting slide decks, and resolving reconciliation discrepancies. Automating the reporting pipeline requires establishing a single semantic layer, scheduled lakehouse transformations, and direct distribution to stakeholder channels with automated verification checks.',
    },
    {
      id: 'modern-analytics-strategy',
      title: 'Building a Modern Analytics Strategy',
      category: 'Architecture & Strategy',
      readTime: '6 min read',
      excerpt:
        'Balancing centralized data governance with decentralized business velocity: practical architectural trade-offs for growing enterprises.',
      body:
        'A resilient modern data architecture avoids the twin traps of rigid, slow monolithic data warehouses and ungoverned, chaotic data silos. By separating storage from compute, adopting contract-based data schemas, and empowering operational teams with tailored BI cubes, companies achieve both governance rigor and agile analytics exploration.',
    },
  ];

  return (
    <section id="insights" className="relative py-20 sm:py-28 bg-[#090d14] border-t border-slate-800">
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
            Thought Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
            Insights on Data, Analytics & Machine Intelligence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Explorations into the architectures, methodologies, and engineering trade-offs behind resilient enterprise intelligence systems.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveArticle(article)}
              className="cursor-pointer p-5 sm:p-8 rounded-2xl bg-[#090d14]/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-emerald-400"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveArticle(article);
                }
              }}
            >
              <div>
                {/* Clean unboxed metadata with typographic dot separator */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-3 sm:mb-4">
                  <span className="text-emerald-400 font-medium">[{article.category}]</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                  Read Exploration
                </span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-all group-hover:translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="insight-article-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl text-left max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
                <span>{activeArticle.category}</span>
                <span className="text-slate-600">·</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h3 id="insight-article-title" className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4 leading-tight">
                {activeArticle.title}
              </h3>

              <div className="h-0.5 w-16 bg-emerald-400 mb-6" />

              <p className="text-base text-slate-300 leading-relaxed font-sans mb-6">
                {activeArticle.body}
              </p>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400">
                Notice: Published as part of VerseBI's technical methodology previews.
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  Done Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
