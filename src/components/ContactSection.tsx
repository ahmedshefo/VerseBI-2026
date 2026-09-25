import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Send, Sparkles, AlertCircle } from 'lucide-react';
import { VerseBILogo } from './VerseBILogo';

interface ContactSectionProps {
  onExploreSolutions: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onExploreSolutions }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Business Intelligence',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.company.trim()) errs.company = 'Please provide your company name';
    if (!formData.message.trim()) errs.message = 'Please provide a brief message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Client-side simulated dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: 'Business Intelligence',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#090d14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Big Brand Statement & Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <div className="mb-4">
              <VerseBILogo variant="mark" className="w-10 h-10" />
            </div>

            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              Consultation & Inquiries
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight text-balance leading-tight">
              Let's Build Something Intelligent.
            </h2>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Have a data, analytics, AI, or automation challenge? Let's explore what we can build together.
            </p>

            <div className="mt-6 sm:mt-8 flex items-center gap-4">
              <button
                onClick={onExploreSolutions}
                className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors group min-h-[44px]"
              >
                <span>Explore Solutions Overview</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Direct Channel Specifications */}
            <div className="mt-8 sm:mt-12 p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs font-mono text-slate-400 w-full">
              <p className="text-slate-300 font-semibold mb-1">Direct Channels:</p>
              <p>Email: <span className="text-slate-200">contact@versebi.com</span> (Configurable domain)</p>
              <p className="text-[11px] text-slate-500 mt-2">
                Response window: Typically within 1 business day for architectural inquiries.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Clean Technical Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-[#0b0f17] border border-slate-800 rounded-2xl p-5 sm:p-8 relative shadow-lg w-full"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Inquiry Transmitted
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md leading-relaxed mb-8 font-sans">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. An engineer will review your project scope at <span className="text-emerald-400 font-mono">{formData.company}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 text-xs font-mono font-medium rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cs-name" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="cs-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Vance"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'cs-name-error' : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors ${
                          errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-emerald-500'
                        }`}
                      />
                      {errors.name && (
                        <p id="cs-name-error" role="alert" className="text-[11px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="cs-email" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        id="cs-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'cs-email-error' : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-emerald-500'
                        }`}
                      />
                      {errors.email && (
                        <p id="cs-email-error" role="alert" className="text-[11px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cs-company" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Company *
                      </label>
                      <input
                        id="cs-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Enterprise"
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? 'cs-company-error' : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors ${
                          errors.company ? 'border-rose-500' : 'border-slate-800 focus:border-emerald-500'
                        }`}
                      />
                      {errors.company && (
                        <p id="cs-company-error" role="alert" className="text-[11px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="cs-service" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Discipline
                      </label>
                      <select
                        id="cs-service"
                        name="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-500 transition-colors"
                      >
                        <option value="Business Intelligence">Business Intelligence</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="AI Solutions">AI Solutions</option>
                        <option value="Data Engineering">Data Engineering</option>
                        <option value="Automation">Automation</option>
                        <option value="End-to-End Modernization">End-to-End Modernization</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cs-message" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="cs-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your enterprise data, analytics, or automation objectives..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'cs-message-error' : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors ${
                        errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.message && (
                      <p id="cs-message-error" role="alert" className="text-[11px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full min-h-[48px] py-3.5 px-6 rounded-lg bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-slate-950 font-semibold text-sm shadow-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Transmit Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
